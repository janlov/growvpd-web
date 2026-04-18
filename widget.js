/**
 * GrowVPD Pro — Embeddable VPD Calculator Widget with Interactive Heatmap
 * https://growvpd.pro
 *
 * Usage:
 *   <script src="https://growvpd.pro/widget.js"></script>
 *
 * Options (via data attributes on the script tag):
 *   data-target="#my-container"  — mount inside a specific element
 *   data-theme="dark"           — dark mode
 *   data-lang="en"              — language (future i18n)
 *
 * No dependencies. Shadow DOM isolated. Works 300px-800px.
 * (c) 2026 GrowVPD Pro. MIT License.
 */
(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────────── */
  var API = 'https://api.growvpd.pro/v1';
  var DEBOUNCE_MS = 300;
  var MIN_TEMP = 15, MAX_TEMP = 35;
  var MIN_HUM = 20, MAX_HUM = 90;
  var CHART_COLS = 80, CHART_ROWS = 70;

  var STAGES = [
    { key: 'clone',      label: 'Clone / Propagation', lo: 0.2, hi: 0.6 },
    { key: 'seedling',   label: 'Seedling',            lo: 0.4, hi: 0.8 },
    { key: 'veg',        label: 'Vegetative',          lo: 0.8, hi: 1.2 },
    { key: 'flower',     label: 'Flower',              lo: 1.0, hi: 1.5 },
    { key: 'lateflower', label: 'Late Flower',         lo: 1.2, hi: 1.6 }
  ];
  var REVERSE_VPDS = [0.8, 1.0, 1.2, 1.4];

  var ZONES = [
    { max: 0.0, color: '#1565C0', label: 'Condensation' },
    { max: 0.4, color: '#42A5F5', label: 'Low Transpiration' },
    { max: 0.8, color: '#66BB6A', label: 'Clones & Seedlings' },
    { max: 1.2, color: '#4CAF50', label: 'Vegetative' },
    { max: 1.6, color: '#FFA726', label: 'Bloom' },
    { max: 99,  color: '#E53935', label: 'Stress / Danger' }
  ];

  /* ── VPD math (Magnus formula with leaf offset) ─────── */
  function satVP(t) { return 0.6108 * Math.exp((17.27 * t) / (t + 237.3)); }
  function calcVPD(t, rh, leafOffset) {
    var lo = leafOffset || 0;
    var leafTemp = t - lo;
    var svpLeaf = satVP(leafTemp);
    var svpAir = satVP(t);
    var avp = (rh / 100) * svpAir;
    return Math.max(0, svpLeaf - avp);
  }
  function calcDewpoint(t, rh) {
    var a = 17.27, b = 237.3;
    var alpha = (a * t) / (b + t) + Math.log(rh / 100);
    return (b * alpha) / (a - alpha);
  }
  function targetRH(vpd, t, leafOffset) {
    var lo = leafOffset || 0;
    var svpLeaf = satVP(t - lo);
    var svpAir = satVP(t);
    if (svpAir === 0) return 0;
    var rh = ((svpLeaf - vpd) / svpAir) * 100;
    return Math.max(0, Math.min(100, rh));
  }
  function cToF(c) { return c * 9 / 5 + 32; }
  function fToC(f) { return (f - 32) * 5 / 9; }

  /* ── Zone color lookup ──────────────────────────────── */
  function vpdColor(vpd) {
    for (var i = 0; i < ZONES.length; i++) {
      if (vpd <= ZONES[i].max) return ZONES[i].color;
    }
    return ZONES[ZONES.length - 1].color;
  }
  function vpdZone(vpd) {
    for (var i = 0; i < ZONES.length; i++) {
      if (vpd <= ZONES[i].max) return { color: ZONES[i].color, label: ZONES[i].label };
    }
    var last = ZONES[ZONES.length - 1];
    return { color: last.color, label: last.label };
  }

  /* ── Stage fit ──────────────────────────────────────── */
  function stageFit(vpd, stage) {
    if (vpd >= stage.lo && vpd <= stage.hi) return 'fit-good';
    var dist = vpd < stage.lo ? stage.lo - vpd : vpd - stage.hi;
    return dist <= 0.15 ? 'fit-ok' : 'fit-bad';
  }

  /* ── SVG leaf logo ──────────────────────────────────── */
  var LEAF_SVG = '<svg viewBox="0 0 28 28" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M14 2C8 2 3 7.5 3 14c0 4 2.5 7.5 6 9.5.5-3 1.5-5.5 3-7.5-2 1-3.5 3-4.2 5.5C6 19.5 5 17 5 14c0-5 4-9.5 9-10 5 .5 9 5 9 10 0 3-1 5.5-2.8 7.5-.7-2.5-2.2-4.5-4.2-5.5 1.5 2 2.5 4.5 3 7.5 3.5-2 6-5.5 6-9.5C25 7.5 20 2 14 2z" fill="currentColor"/>' +
    '<path d="M14 10c-.5 2-1 4-1 6.5 0 2 .3 4 1 5.5.7-1.5 1-3.5 1-5.5 0-2.5-.5-4.5-1-6.5z" fill="currentColor" opacity=".6"/>' +
    '</svg>';

  /* ── Styles ─────────────────────────────────────────── */
  function buildCSS(dark) {
    var bg     = dark ? '#1a1a1a' : '#ffffff';
    var bg2    = dark ? '#242424' : '#f5f9f5';
    var bg3    = dark ? '#2c2c2c' : '#e8f5e9';
    var border = dark ? '#333'    : '#e0e0e0';
    var text   = dark ? '#e0e0e0' : '#212121';
    var text2  = dark ? '#aaa'    : '#616161';
    var text3  = dark ? '#888'    : '#9e9e9e';
    var track  = dark ? '#333'    : '#e0e0e0';
    var inputBg = dark ? '#2c2c2c' : '#fff';

    var F = 'display:flex;align-items:center;';
    var R = 'border-radius:';
    var B = 'border:1px solid ' + border + ';';
    var BG2 = 'background:' + bg2 + ';';
    var FW6 = 'font-weight:600;';
    var SH = (dark ? '.4' : '.08');

    return ':host{display:block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:' + text + ';contain:content}' +
      '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}' +
      '.gvpd-widget{background:' + bg + ';' + B + R + '14px;overflow:hidden;max-width:800px;min-width:280px;box-shadow:0 2px 12px rgba(0,0,0,' + SH + ')}' +
      '.gvpd-header{' + F + 'gap:8px;padding:14px 18px;background:linear-gradient(135deg,#2E7D32,#1B5E20);color:#fff}' +
      '.gvpd-header svg{color:#A5D6A7;flex-shrink:0}' +
      '.gvpd-header-title{font-size:.95rem;font-weight:700}' +
      '.gvpd-header-badge{margin-left:auto;font-size:.6rem;' + FW6 + 'background:rgba(255,255,255,.18);color:#C8E6C9;padding:2px 8px;' + R + '20px;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}' +
      '.gvpd-body{padding:16px 18px}' +
      '.gvpd-toggle-row{' + F + 'justify-content:flex-end;margin-bottom:12px}' +
      '.gvpd-toggle{display:inline-flex;background:' + bg3 + ';' + R + '8px;overflow:hidden;' + B + '}' +
      '.gvpd-toggle button{background:none;border:none;padding:5px 14px;font-size:.78rem;' + FW6 + 'cursor:pointer;color:' + text2 + ';transition:all .15s;font-family:inherit}' +
      '.gvpd-toggle button.active{background:#2E7D32;color:#fff;' + R + '7px}' +
      '.gvpd-inputs{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px}' +
      '@media(max-width:420px){.gvpd-inputs{grid-template-columns:1fr}}' +
      '.gvpd-input-group label{display:block;font-size:.75rem;' + FW6 + 'color:' + text2 + ';margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em}' +
      '.gvpd-input-row{' + F + 'gap:8px}' +
      '.gvpd-input-row input[type=range]{flex:1;height:6px;-webkit-appearance:none;appearance:none;background:' + track + ';' + R + '3px;outline:none;cursor:pointer}' +
      '.gvpd-input-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;' + R + '50%;background:#2E7D32;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.25);cursor:pointer;transition:transform .1s}' +
      '.gvpd-input-row input[type=range]::-moz-range-thumb{width:16px;height:16px;' + R + '50%;background:#2E7D32;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.25);cursor:pointer}' +
      '.gvpd-input-row input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.15)}' +
      '.gvpd-num-input{width:58px;padding:5px 6px;' + B + R + '8px;font-size:.85rem;' + FW6 + 'text-align:center;color:' + text + ';background:' + inputBg + ';font-family:inherit;outline:none;transition:border-color .15s}' +
      '.gvpd-num-input:focus{border-color:#4CAF50;box-shadow:0 0 0 2px rgba(76,175,80,.15)}' +
      '.gvpd-unit{font-size:.75rem;color:' + text3 + ';font-weight:500;min-width:20px}' +
      '.gvpd-result{' + BG2 + R + '12px;padding:16px;margin-bottom:14px;text-align:center;' + B + '}' +
      '.gvpd-vpd-value{font-size:2.2rem;font-weight:800;line-height:1.1;letter-spacing:-.02em;transition:color .2s}' +
      '.gvpd-vpd-unit{font-size:.95rem;font-weight:500;color:' + text2 + ';margin-left:4px}' +
      '.gvpd-status-bar{height:6px;' + R + '3px;margin:10px 0;overflow:hidden;background:' + track + '}' +
      '.gvpd-status-fill{height:100%;' + R + '3px;transition:width .3s,background .3s}' +
      '.gvpd-status-text{font-size:.8rem;' + FW6 + 'transition:color .2s}' +
      '.gvpd-dewpoint{font-size:.72rem;color:' + text3 + ';margin-top:6px}' +

      /* Heatmap chart */
      '.gvpd-chart-section{margin-bottom:14px}' +
      '.gvpd-chart-title{font-size:.85rem;font-weight:700;margin-bottom:10px;' + F + 'gap:6px;color:' + text + '}' +
      '.gvpd-chart-title svg{width:16px;height:16px;color:#4CAF50}' +
      '.gvpd-chart-wrap{position:relative;' + BG2 + R + '12px;' + B + 'padding:8px 8px 4px 8px;overflow:hidden}' +
      '.gvpd-chart-inner{position:relative;margin-left:36px;margin-bottom:24px}' +
      '.gvpd-chart-canvas{display:block;width:100%;' + R + '6px;cursor:crosshair;touch-action:none}' +
      '.gvpd-axis-y{position:absolute;left:0;top:8px;bottom:28px;width:34px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;padding-right:4px}' +
      '.gvpd-axis-y span{font-size:.6rem;color:' + text3 + ';' + FW6 + 'line-height:1}' +
      '.gvpd-axis-x{' + F + 'justify-content:space-between;margin-left:36px;margin-top:2px;padding:0 1px}' +
      '.gvpd-axis-x span{font-size:.6rem;color:' + text3 + ';' + FW6 + '}' +
      '.gvpd-axis-label-y{position:absolute;left:-2px;top:50%;transform:rotate(-90deg) translateX(-50%);transform-origin:0 0;font-size:.6rem;color:' + text3 + ';' + FW6 + 'letter-spacing:.03em;white-space:nowrap}' +
      '.gvpd-axis-label-x{text-align:center;margin-left:36px;font-size:.6rem;color:' + text3 + ';' + FW6 + 'letter-spacing:.03em;margin-top:1px}' +
      '.gvpd-chart-tooltip{position:absolute;pointer-events:none;background:rgba(0,0,0,.85);color:#fff;padding:6px 10px;' + R + '8px;font-size:.72rem;' + FW6 + 'white-space:nowrap;z-index:10;line-height:1.4;opacity:0;transition:opacity .15s}' +
      '.gvpd-chart-tooltip.visible{opacity:1}' +
      '.gvpd-leaf-row{' + F + 'gap:8px;margin-bottom:12px}' +
      '.gvpd-leaf-row label{font-size:.75rem;' + FW6 + 'color:' + text2 + ';text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}' +
      '.gvpd-leaf-row input[type=range]{flex:1;height:6px;-webkit-appearance:none;appearance:none;background:' + track + ';' + R + '3px;outline:none;cursor:pointer}' +
      '.gvpd-leaf-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;' + R + '50%;background:#66BB6A;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.25);cursor:pointer}' +
      '.gvpd-leaf-row input[type=range]::-moz-range-thumb{width:14px;height:14px;' + R + '50%;background:#66BB6A;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.25);cursor:pointer}' +
      '.gvpd-leaf-val{font-size:.8rem;' + FW6 + 'color:#66BB6A;min-width:32px;text-align:center}' +

      /* Legend */
      '.gvpd-legend{' + F + 'flex-wrap:wrap;gap:6px 12px;justify-content:center;margin-top:10px}' +
      '.gvpd-legend-item{' + F + 'gap:4px;font-size:.62rem;color:' + text2 + ';' + FW6 + '}' +
      '.gvpd-legend-dot{width:10px;height:10px;' + R + '2px;flex-shrink:0}' +

      /* Stages */
      '.gvpd-stages{' + F + 'flex-wrap:wrap;gap:6px;margin-bottom:14px;justify-content:center}' +
      '.gvpd-stage{font-size:.67rem;' + FW6 + 'padding:4px 10px;' + R + '20px;letter-spacing:.02em;transition:all .2s;border:1px solid transparent;white-space:nowrap}' +
      '.gvpd-stage.fit-good{background:' + (dark ? '#1a3020' : '#E8F5E9') + ';color:' + (dark ? '#81C784' : '#1B5E20') + ';border-color:' + (dark ? '#2E5030' : '#A5D6A7') + '}' +
      '.gvpd-stage.fit-ok{background:' + (dark ? '#3a3520' : '#FFF8E1') + ';color:' + (dark ? '#FFD54F' : '#F57F17') + ';border-color:' + (dark ? '#5a5030' : '#FFE082') + '}' +
      '.gvpd-stage.fit-bad{background:' + (dark ? '#352020' : '#FFEBEE') + ';color:' + (dark ? '#EF9A9A' : '#C62828') + ';border-color:' + (dark ? '#503030' : '#FFCDD2') + '}' +
      '.gvpd-reverse{' + BG2 + R + '12px;padding:14px;' + B + 'margin-bottom:14px}' +
      '.gvpd-reverse-title{font-size:.78rem;font-weight:700;color:' + text2 + ';margin-bottom:10px;' + F + 'gap:6px}' +
      '.gvpd-reverse-title svg{width:14px;height:14px;color:#4CAF50}' +
      '.gvpd-reverse-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}' +
      '@media(max-width:380px){.gvpd-reverse-grid{grid-template-columns:repeat(2,1fr)}}' +
      '.gvpd-rv-item{text-align:center;padding:8px 4px;' + R + '8px;background:' + bg + ';' + B + '}' +
      '.gvpd-rv-vpd{font-size:.65rem;' + FW6 + 'color:' + text3 + ';text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}' +
      '.gvpd-rv-rh{font-size:1.05rem;font-weight:700;color:#2E7D32}' +
      '.gvpd-footer{' + F + 'justify-content:space-between;padding:10px 18px;border-top:1px solid ' + border + ';' + BG2 + '}' +
      '.gvpd-footer a{font-size:.7rem;color:' + text3 + ';text-decoration:none;transition:color .15s;font-weight:500}' +
      '.gvpd-footer a:hover{color:#2E7D32}' +
      '.gvpd-footer-brand{' + F + 'gap:5px;font-size:.72rem;' + FW6 + 'color:' + text2 + '}' +
      '.gvpd-footer-brand svg{width:14px;height:14px;color:#4CAF50}';
  }

  /* ── Debounce ───────────────────────────────────────── */
  function debounce(fn, ms) {
    var t;
    return function () {
      var self = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  /* ── API helpers ────────────────────────────────────── */
  function fetchJSON(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.timeout = 4000;
    xhr.onload = function () {
      if (xhr.status === 200) {
        try { cb(null, JSON.parse(xhr.responseText)); } catch (e) { cb(e); }
      } else { cb(new Error('HTTP ' + xhr.status)); }
    };
    xhr.onerror = function () { cb(new Error('Network error')); };
    xhr.ontimeout = function () { cb(new Error('Timeout')); };
    xhr.send();
  }

  /* ── Build & mount ──────────────────────────────────── */
  function init(scriptEl) {
    var targetSel = scriptEl && scriptEl.getAttribute('data-target');
    var themeDark = scriptEl && scriptEl.getAttribute('data-theme') === 'dark';

    var mount;
    if (targetSel) { mount = document.querySelector(targetSel); }
    if (!mount) {
      mount = document.createElement('div');
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.insertBefore(mount, scriptEl);
      } else {
        document.body.appendChild(mount);
      }
    }

    var shadow = mount.attachShadow({ mode: 'open' });
    var style = document.createElement('style');
    style.textContent = buildCSS(themeDark);
    shadow.appendChild(style);

    /* State */
    var state = { tempC: 25, rh: 60, isFahrenheit: false, leafOffset: 2 };

    /* ── Render HTML ────────────────────────────────── */
    var root = document.createElement('div');
    root.className = 'gvpd-widget';
    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', 'VPD Calculator');

    root.innerHTML =
      '<div class="gvpd-header">' +
        LEAF_SVG +
        '<span class="gvpd-header-title">VPD Calculator</span>' +
        '<span class="gvpd-header-badge">Free Tool</span>' +
      '</div>' +
      '<div class="gvpd-body">' +
        '<div class="gvpd-toggle-row">' +
          '<div class="gvpd-toggle" role="radiogroup" aria-label="Temperature unit">' +
            '<button class="gvpd-btn-c active" role="radio" aria-checked="true" type="button">\u00b0C</button>' +
            '<button class="gvpd-btn-f" role="radio" aria-checked="false" type="button">\u00b0F</button>' +
          '</div>' +
        '</div>' +
        '<div class="gvpd-inputs">' +
          '<div class="gvpd-input-group">' +
            '<label for="gvpd-temp">Temperature</label>' +
            '<div class="gvpd-input-row">' +
              '<input type="range" id="gvpd-temp" min="15" max="35" step="0.5" value="25" aria-label="Temperature slider">' +
              '<input type="number" class="gvpd-num-input gvpd-temp-num" min="15" max="35" step="0.5" value="25" aria-label="Temperature value">' +
              '<span class="gvpd-unit gvpd-temp-unit">\u00b0C</span>' +
            '</div>' +
          '</div>' +
          '<div class="gvpd-input-group">' +
            '<label for="gvpd-rh">Relative Humidity</label>' +
            '<div class="gvpd-input-row">' +
              '<input type="range" id="gvpd-rh" min="20" max="90" step="1" value="60" aria-label="Humidity slider">' +
              '<input type="number" class="gvpd-num-input gvpd-rh-num" min="20" max="90" step="1" value="60" aria-label="Humidity value">' +
              '<span class="gvpd-unit">%</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="gvpd-result">' +
          '<div><span class="gvpd-vpd-value" aria-live="polite">1.00</span><span class="gvpd-vpd-unit">kPa</span></div>' +
          '<div class="gvpd-status-bar"><div class="gvpd-status-fill"></div></div>' +
          '<div class="gvpd-status-text">Vegetative</div>' +
          '<div class="gvpd-dewpoint">Dew point: 16.7\u00b0C</div>' +
        '</div>' +

        /* Heatmap chart section */
        '<div class="gvpd-chart-section">' +
          '<div class="gvpd-chart-title">' +
            '<svg viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M1 5h14M1 9h14M5 1v14M9 1v14" stroke="currentColor" stroke-width=".5" opacity=".4"/></svg>' +
            'Interactive VPD Chart' +
          '</div>' +
          '<div class="gvpd-leaf-row">' +
            '<label>Leaf Offset</label>' +
            '<input type="range" class="gvpd-leaf-slider" min="0" max="5" step="0.5" value="2" aria-label="Leaf temperature offset">' +
            '<span class="gvpd-leaf-val">2\u00b0C</span>' +
          '</div>' +
          '<div class="gvpd-chart-wrap">' +
            '<span class="gvpd-axis-label-y">Humidity (%)</span>' +
            '<div class="gvpd-axis-y"></div>' +
            '<div class="gvpd-chart-inner">' +
              '<canvas class="gvpd-chart-canvas" width="640" height="400"></canvas>' +
              '<div class="gvpd-chart-tooltip"></div>' +
            '</div>' +
            '<div class="gvpd-axis-x"></div>' +
            '<div class="gvpd-axis-label-x">Temperature</div>' +
          '</div>' +
          '<div class="gvpd-legend"></div>' +
        '</div>' +

        '<div class="gvpd-stages" aria-label="Growth stage suitability"></div>' +
        '<div class="gvpd-reverse">' +
          '<div class="gvpd-reverse-title">' +
            '<svg viewBox="0 0 16 16" fill="none"><path d="M8 1v5l3 3M15 8A7 7 0 111 8a7 7 0 0114 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            'What humidity do I need?' +
          '</div>' +
          '<div class="gvpd-reverse-grid"></div>' +
        '</div>' +
      '</div>' +
      '<div class="gvpd-footer">' +
        '<a href="https://growvpd.pro" target="_blank" rel="noopener" class="gvpd-footer-brand">' +
          LEAF_SVG + 'Powered by GrowVPD Pro' +
        '</a>' +
        '<a href="https://api.growvpd.pro" target="_blank" rel="noopener">Free API: api.growvpd.pro</a>' +
      '</div>';

    shadow.appendChild(root);

    /* ── Element refs ───────────────────────────────── */
    var $tempSlider  = root.querySelector('#gvpd-temp');
    var $tempNum     = root.querySelector('.gvpd-temp-num');
    var $tempUnit    = root.querySelector('.gvpd-temp-unit');
    var $rhSlider    = root.querySelector('#gvpd-rh');
    var $rhNum       = root.querySelector('.gvpd-rh-num');
    var $vpdValue    = root.querySelector('.gvpd-vpd-value');
    var $statusFill  = root.querySelector('.gvpd-status-fill');
    var $statusText  = root.querySelector('.gvpd-status-text');
    var $dewpoint    = root.querySelector('.gvpd-dewpoint');
    var $stages      = root.querySelector('.gvpd-stages');
    var $reverseGrid = root.querySelector('.gvpd-reverse-grid');
    var $btnC        = root.querySelector('.gvpd-btn-c');
    var $btnF        = root.querySelector('.gvpd-btn-f');
    var $canvas      = root.querySelector('.gvpd-chart-canvas');
    var $tooltip     = root.querySelector('.gvpd-chart-tooltip');
    var $leafSlider  = root.querySelector('.gvpd-leaf-slider');
    var $leafVal     = root.querySelector('.gvpd-leaf-val');
    var $axisY       = root.querySelector('.gvpd-axis-y');
    var $axisX       = root.querySelector('.gvpd-axis-x');
    var $legend      = root.querySelector('.gvpd-legend');
    var ctx          = $canvas.getContext('2d');

    /* ── Build axis labels ─────────────────────────── */
    function buildAxes() {
      $axisY.innerHTML = '';
      for (var h = MAX_HUM; h >= MIN_HUM; h -= 10) {
        var s = document.createElement('span');
        s.textContent = h + '%';
        $axisY.appendChild(s);
      }
      $axisX.innerHTML = '';
      for (var t = MIN_TEMP; t <= MAX_TEMP; t += 5) {
        var s = document.createElement('span');
        s.textContent = state.isFahrenheit ? Math.round(cToF(t)) + '\u00b0F' : t + '\u00b0C';
        $axisX.appendChild(s);
      }
    }

    /* ── Build legend ──────────────────────────────── */
    function buildLegend() {
      $legend.innerHTML = '';
      for (var i = 1; i < ZONES.length; i++) {
        var item = document.createElement('span');
        item.className = 'gvpd-legend-item';
        item.innerHTML = '<span class="gvpd-legend-dot" style="background:' + ZONES[i].color + '"></span>' + ZONES[i].label;
        $legend.appendChild(item);
      }
    }

    /* ── Draw heatmap ──────────────────────────────── */
    var heatmapImageData = null;

    function drawHeatmap() {
      var w = $canvas.width;
      var h = $canvas.height;
      var cellW = w / CHART_COLS;
      var cellH = h / CHART_ROWS;
      var lo = state.leafOffset;

      ctx.clearRect(0, 0, w, h);

      /* Draw cells */
      for (var col = 0; col < CHART_COLS; col++) {
        for (var row = 0; row < CHART_ROWS; row++) {
          var temp = MIN_TEMP + (col / CHART_COLS) * (MAX_TEMP - MIN_TEMP);
          var hum = MAX_HUM - (row / CHART_ROWS) * (MAX_HUM - MIN_HUM);
          var vpd = calcVPD(temp, hum, lo);
          ctx.fillStyle = vpdColor(vpd);
          ctx.fillRect(col * cellW, row * cellH, Math.ceil(cellW), Math.ceil(cellH));
        }
      }

      /* Grid lines */
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 0.5;
      for (var t = MIN_TEMP + 5; t < MAX_TEMP; t += 5) {
        var x = ((t - MIN_TEMP) / (MAX_TEMP - MIN_TEMP)) * w;
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (var rh = MIN_HUM + 10; rh < MAX_HUM; rh += 10) {
        var y = ((MAX_HUM - rh) / (MAX_HUM - MIN_HUM)) * h;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      /* VPD value labels on grid intersections */
      ctx.font = '600 11px -apple-system,BlinkMacSystemFont,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (var t = MIN_TEMP + 5; t < MAX_TEMP; t += 5) {
        for (var rh = MIN_HUM + 10; rh < MAX_HUM; rh += 10) {
          var x = ((t - MIN_TEMP) / (MAX_TEMP - MIN_TEMP)) * w;
          var y = ((MAX_HUM - rh) / (MAX_HUM - MIN_HUM)) * h;
          var v = calcVPD(t, rh, lo);
          ctx.fillStyle = 'rgba(255,255,255,0.85)';
          ctx.strokeStyle = 'rgba(0,0,0,0.5)';
          ctx.lineWidth = 2;
          ctx.strokeText(v.toFixed(1), x, y);
          ctx.fillText(v.toFixed(1), x, y);
        }
      }

      heatmapImageData = ctx.getImageData(0, 0, w, h);
    }

    /* ── Draw crosshair at current position ─────────── */
    function drawCrosshair() {
      if (!heatmapImageData) return;
      var w = $canvas.width;
      var h = $canvas.height;

      ctx.putImageData(heatmapImageData, 0, 0);

      var px = ((state.tempC - MIN_TEMP) / (MAX_TEMP - MIN_TEMP)) * w;
      var py = ((MAX_HUM - state.rh) / (MAX_HUM - MIN_HUM)) * h;

      px = Math.max(0, Math.min(w, px));
      py = Math.max(0, Math.min(h, py));

      /* Crosshair lines */
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 3]);
      ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
      ctx.setLineDash([]);

      /* Center circle */
      var vpd = calcVPD(state.tempC, state.rh, state.leafOffset);
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(px, py, 7, 0, 2 * Math.PI);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(px, py, 3, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();

      /* VPD label near crosshair */
      var labelX = px + 14;
      var labelY = py - 14;
      if (labelX + 60 > w) labelX = px - 70;
      if (labelY < 16) labelY = py + 22;

      var label = vpd.toFixed(2) + ' kPa';
      ctx.font = '700 12px -apple-system,BlinkMacSystemFont,sans-serif';
      var tw = ctx.measureText(label).width;
      ctx.fillStyle = 'rgba(0,0,0,0.75)';
      ctx.beginPath();
      ctx.roundRect(labelX - 4, labelY - 10, tw + 8, 20, 4);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, labelX, labelY);
    }

    /* ── Canvas interaction ─────────────────────────── */
    function canvasToValues(e) {
      var rect = $canvas.getBoundingClientRect();
      var scaleX = $canvas.width / rect.width;
      var scaleY = $canvas.height / rect.height;
      var cx, cy;

      if (e.touches && e.touches.length > 0) {
        cx = (e.touches[0].clientX - rect.left) * scaleX;
        cy = (e.touches[0].clientY - rect.top) * scaleY;
      } else {
        cx = (e.clientX - rect.left) * scaleX;
        cy = (e.clientY - rect.top) * scaleY;
      }

      var temp = MIN_TEMP + (cx / $canvas.width) * (MAX_TEMP - MIN_TEMP);
      var hum = MAX_HUM - (cy / $canvas.height) * (MAX_HUM - MIN_HUM);

      temp = Math.max(MIN_TEMP, Math.min(MAX_TEMP, Math.round(temp * 2) / 2));
      hum = Math.max(MIN_HUM, Math.min(MAX_HUM, Math.round(hum)));

      return { temp: temp, hum: hum };
    }

    function handleChartInteraction(e) {
      var vals = canvasToValues(e);
      state.tempC = vals.temp;
      state.rh = vals.hum;

      if (state.isFahrenheit) {
        $tempNum.value = cToF(state.tempC).toFixed(1);
      } else {
        $tempNum.value = state.tempC.toFixed(1);
      }
      $tempSlider.value = state.tempC.toFixed(1);
      $rhNum.value = Math.round(state.rh);
      $rhSlider.value = state.rh;

      recalc();
    }

    function showTooltip(e) {
      var vals = canvasToValues(e);
      var vpd = calcVPD(vals.temp, vals.hum, state.leafOffset);
      var zone = vpdZone(vpd);
      var rect = $canvas.getBoundingClientRect();
      var innerRect = root.querySelector('.gvpd-chart-inner').getBoundingClientRect();

      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;

      var tx = clientX - innerRect.left + 16;
      var ty = clientY - innerRect.top - 40;
      if (tx + 140 > innerRect.width) tx = clientX - innerRect.left - 150;
      if (ty < 0) ty = clientY - innerRect.top + 16;

      var tempLabel = state.isFahrenheit ? cToF(vals.temp).toFixed(1) + '\u00b0F' : vals.temp.toFixed(1) + '\u00b0C';
      $tooltip.innerHTML = tempLabel + ' / ' + vals.hum + '% RH<br>VPD: <span style="color:' + zone.color + '">' + vpd.toFixed(2) + ' kPa</span><br>' + zone.label;
      $tooltip.style.left = tx + 'px';
      $tooltip.style.top = ty + 'px';
      $tooltip.classList.add('visible');
    }

    var isDragging = false;

    $canvas.addEventListener('mousedown', function (e) {
      isDragging = true;
      handleChartInteraction(e);
    });
    $canvas.addEventListener('mousemove', function (e) {
      showTooltip(e);
      if (isDragging) handleChartInteraction(e);
    });
    $canvas.addEventListener('mouseup', function () { isDragging = false; });
    $canvas.addEventListener('mouseleave', function () {
      isDragging = false;
      $tooltip.classList.remove('visible');
    });

    $canvas.addEventListener('touchstart', function (e) {
      e.preventDefault();
      isDragging = true;
      handleChartInteraction(e);
      showTooltip(e);
    }, { passive: false });
    $canvas.addEventListener('touchmove', function (e) {
      e.preventDefault();
      if (isDragging) {
        handleChartInteraction(e);
        showTooltip(e);
      }
    }, { passive: false });
    $canvas.addEventListener('touchend', function () {
      isDragging = false;
      $tooltip.classList.remove('visible');
    });

    /* ── Leaf offset slider ────────────────────────── */
    $leafSlider.addEventListener('input', function () {
      state.leafOffset = parseFloat(this.value);
      if (state.isFahrenheit) {
        $leafVal.textContent = (state.leafOffset * 9 / 5).toFixed(1) + '\u00b0F';
      } else {
        $leafVal.textContent = state.leafOffset + '\u00b0C';
      }
      drawHeatmap();
      drawCrosshair();
    });

    /* ── Render stages ──────────────────────────────── */
    function renderStages(vpd) {
      $stages.innerHTML = '';
      STAGES.forEach(function (s) {
        var badge = document.createElement('span');
        badge.className = 'gvpd-stage ' + stageFit(vpd, s);
        badge.textContent = s.label;
        badge.title = 'VPD ' + s.lo.toFixed(1) + ' \u2013 ' + s.hi.toFixed(1) + ' kPa';
        $stages.appendChild(badge);
      });
    }

    /* ── Render reverse VPD ─────────────────────────── */
    function renderReverse(tempC) {
      $reverseGrid.innerHTML = '';
      REVERSE_VPDS.forEach(function (v) {
        var rh = targetRH(v, tempC, state.leafOffset);
        var item = document.createElement('div');
        item.className = 'gvpd-rv-item';
        item.innerHTML =
          '<div class="gvpd-rv-vpd">VPD ' + v.toFixed(1) + '</div>' +
          '<div class="gvpd-rv-rh">' + Math.round(rh) + '%</div>';
        $reverseGrid.appendChild(item);
      });
    }

    /* ── Update display ─────────────────────────────── */
    function updateDisplay(vpd) {
      vpd = Math.max(0, vpd);
      var zone = vpdZone(vpd);

      $vpdValue.textContent = vpd.toFixed(2);
      $vpdValue.style.color = zone.color;

      var pct = Math.min(100, Math.max(0, (vpd / 2.0) * 100));
      $statusFill.style.width = pct + '%';
      $statusFill.style.background = zone.color;

      $statusText.textContent = zone.label;
      $statusText.style.color = zone.color;

      var dp = calcDewpoint(state.tempC, state.rh);
      if (state.isFahrenheit) {
        $dewpoint.textContent = 'Dew point: ' + cToF(dp).toFixed(1) + '\u00b0F';
      } else {
        $dewpoint.textContent = 'Dew point: ' + dp.toFixed(1) + '\u00b0C';
      }

      renderStages(vpd);
      renderReverse(state.tempC);
      drawCrosshair();
    }

    /* ── Recalculate ────────────────────────────────── */
    var apiAvailable = true;

    function recalc() {
      var localVPD = calcVPD(state.tempC, state.rh, state.leafOffset);
      updateDisplay(localVPD);

      if (apiAvailable) {
        fetchJSON(
          API + '/vpd?temp=' + state.tempC.toFixed(1) + '&humidity=' + state.rh.toFixed(0),
          function (err, data) {
            if (err) { apiAvailable = false; return; }
            if (data && typeof data.vpd === 'number') {
              updateDisplay(data.vpd);
            }
          }
        );
      }
    }

    var debouncedRecalc = debounce(recalc, DEBOUNCE_MS);

    /* ── Sync controls ──────────────────────────────── */
    function syncTemp(val, source) {
      var v = parseFloat(val);
      if (isNaN(v)) return;
      if (state.isFahrenheit) {
        var minF = cToF(MIN_TEMP), maxF = cToF(MAX_TEMP);
        v = Math.max(minF, Math.min(maxF, v));
        state.tempC = fToC(v);
        $tempSlider.value = state.tempC.toFixed(1);
        if (source !== 'num') $tempNum.value = v.toFixed(1);
        if (source !== 'slider') $tempSlider.value = state.tempC.toFixed(1);
      } else {
        v = Math.max(MIN_TEMP, Math.min(MAX_TEMP, v));
        state.tempC = v;
        if (source !== 'num') $tempNum.value = v.toFixed(1);
        if (source !== 'slider') $tempSlider.value = v.toFixed(1);
      }
      debouncedRecalc();
    }

    function syncRH(val, source) {
      var v = parseFloat(val);
      if (isNaN(v)) return;
      v = Math.max(MIN_HUM, Math.min(MAX_HUM, v));
      state.rh = v;
      if (source !== 'num') $rhNum.value = Math.round(v);
      if (source !== 'slider') $rhSlider.value = v;
      debouncedRecalc();
    }

    /* ── Events ─────────────────────────────────────── */
    $tempSlider.addEventListener('input', function () {
      var sliderC = parseFloat(this.value);
      if (state.isFahrenheit) {
        $tempNum.value = cToF(sliderC).toFixed(1);
      } else {
        $tempNum.value = sliderC.toFixed(1);
      }
      state.tempC = sliderC;
      debouncedRecalc();
    });
    $tempNum.addEventListener('input', function () { syncTemp(this.value, 'num'); });

    $rhSlider.addEventListener('input', function () {
      $rhNum.value = Math.round(parseFloat(this.value));
      state.rh = parseFloat(this.value);
      debouncedRecalc();
    });
    $rhNum.addEventListener('input', function () { syncRH(this.value, 'num'); });

    function setUnit(fahrenheit) {
      state.isFahrenheit = fahrenheit;
      $btnC.classList.toggle('active', !fahrenheit);
      $btnF.classList.toggle('active', fahrenheit);
      $btnC.setAttribute('aria-checked', String(!fahrenheit));
      $btnF.setAttribute('aria-checked', String(fahrenheit));

      if (fahrenheit) {
        $tempUnit.textContent = '\u00b0F';
        $tempNum.value = cToF(state.tempC).toFixed(1);
        $tempNum.min = Math.round(cToF(MIN_TEMP));
        $tempNum.max = Math.round(cToF(MAX_TEMP));
        $tempNum.step = '1';
        $leafVal.textContent = (state.leafOffset * 9 / 5).toFixed(1) + '\u00b0F';
      } else {
        $tempUnit.textContent = '\u00b0C';
        $tempNum.value = state.tempC.toFixed(1);
        $tempNum.min = MIN_TEMP;
        $tempNum.max = MAX_TEMP;
        $tempNum.step = '0.5';
        $leafVal.textContent = state.leafOffset + '\u00b0C';
      }
      $tempSlider.value = state.tempC.toFixed(1);
      buildAxes();
      recalc();
    }

    $btnC.addEventListener('click', function () { setUnit(false); });
    $btnF.addEventListener('click', function () { setUnit(true); });

    /* ── Canvas resize (responsive) ─────────────────── */
    function resizeCanvas() {
      var rect = $canvas.parentElement.getBoundingClientRect();
      var w = Math.max(200, Math.floor(rect.width));
      var ratio = window.devicePixelRatio || 1;
      var canvasW = w * ratio;
      var canvasH = Math.round(canvasW * 0.6);
      $canvas.width = canvasW;
      $canvas.height = canvasH;
      $canvas.style.height = Math.round(w * 0.6) + 'px';
      drawHeatmap();
      drawCrosshair();
    }

    var resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(function () { resizeCanvas(); });
      resizeObserver.observe($canvas.parentElement);
    } else {
      window.addEventListener('resize', debounce(resizeCanvas, 150));
    }

    /* ── polyfill roundRect for older browsers ───── */
    if (!ctx.roundRect) {
      ctx.roundRect = function (x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
      };
    }

    /* ── Initial render ─────────────────────────────── */
    buildAxes();
    buildLegend();
    resizeCanvas();
    recalc();
  }

  /* ── Bootstrap ──────────────────────────────────────── */
  var _currentScript = document.currentScript;

  function findScript() {
    if (_currentScript) return _currentScript;
    var scripts = document.querySelectorAll('script[src]');
    for (var i = scripts.length - 1; i >= 0; i--) {
      if (scripts[i].src && scripts[i].src.indexOf('widget.js') !== -1) return scripts[i];
    }
    return null;
  }

  function bootstrap() { init(findScript()); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
