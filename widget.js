/**
 * GrowVPD Pro — Embeddable VPD Calculator Widget
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
  var STAGES = [
    { key: 'clone',      label: 'Clone / Propagation', lo: 0.2, hi: 0.6 },
    { key: 'seedling',   label: 'Seedling',            lo: 0.4, hi: 0.8 },
    { key: 'veg',        label: 'Vegetative',          lo: 0.8, hi: 1.2 },
    { key: 'flower',     label: 'Flower',              lo: 1.0, hi: 1.5 },
    { key: 'lateflower', label: 'Late Flower',         lo: 1.2, hi: 1.6 }
  ];
  var REVERSE_VPDS = [0.8, 1.0, 1.2, 1.4];

  /* ── Local VPD math (Tetens) ────────────────────────── */
  function satVP(t) { return 0.6108 * Math.exp((17.27 * t) / (t + 237.3)); }
  function calcVPD(t, rh) { var svp = satVP(t); return svp - (svp * rh / 100); }
  function calcDewpoint(t, rh) {
    var a = 17.27, b = 237.3;
    var alpha = (a * t) / (b + t) + Math.log(rh / 100);
    return (b * alpha) / (a - alpha);
  }
  function targetRH(vpd, t) {
    var svp = satVP(t);
    if (svp === 0) return 0;
    var rh = ((svp - vpd) / svp) * 100;
    return Math.max(0, Math.min(100, rh));
  }
  function cToF(c) { return c * 9 / 5 + 32; }
  function fToC(f) { return (f - 32) * 5 / 9; }

  /* ── VPD zone logic ─────────────────────────────────── */
  function vpdZone(vpd) {
    if (vpd < 0.4)  return { cls: 'zone-low',    color: '#42A5F5', label: 'Too Low — Risk of Mold' };
    if (vpd < 0.8)  return { cls: 'zone-prop',   color: '#66BB6A', label: 'Propagation / Seedling Zone' };
    if (vpd < 1.2)  return { cls: 'zone-veg',    color: '#2E7D32', label: 'Optimal for Vegetative Growth' };
    if (vpd < 1.6)  return { cls: 'zone-flower', color: '#1B5E20', label: 'Ideal for Flowering' };
    return { cls: 'zone-high', color: '#E65100', label: 'Too High — Stress Risk' };
  }

  /* ── Stage badge colour ─────────────────────────────── */
  function stageFit(vpd, stage) {
    if (vpd >= stage.lo && vpd <= stage.hi) return 'fit-good';
    var dist = vpd < stage.lo ? stage.lo - vpd : vpd - stage.hi;
    return dist <= 0.15 ? 'fit-ok' : 'fit-bad';
  }

  /* ── SVG leaf logo (inline) ─────────────────────────── */
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

    /* Shorthand helpers to reduce string size */
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
    /* data-lang reserved for future i18n */

    /* Find mount point */
    var mount;
    if (targetSel) {
      mount = document.querySelector(targetSel);
    }
    if (!mount) {
      mount = document.createElement('div');
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.insertBefore(mount, scriptEl);
      } else {
        document.body.appendChild(mount);
      }
    }

    /* Shadow DOM */
    var shadow = mount.attachShadow({ mode: 'open' });
    var style = document.createElement('style');
    style.textContent = buildCSS(themeDark);
    shadow.appendChild(style);

    /* State */
    var state = { tempC: 25, rh: 60, isFahrenheit: false };

    /* ── Render HTML ────────────────────────────────── */
    var root = document.createElement('div');
    root.className = 'gvpd-widget';
    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', 'VPD Calculator');

    root.innerHTML =
      /* Header */
      '<div class="gvpd-header">' +
        LEAF_SVG +
        '<span class="gvpd-header-title">VPD Calculator</span>' +
        '<span class="gvpd-header-badge">Free Tool</span>' +
      '</div>' +

      '<div class="gvpd-body">' +

        /* Unit toggle */
        '<div class="gvpd-toggle-row">' +
          '<div class="gvpd-toggle" role="radiogroup" aria-label="Temperature unit">' +
            '<button class="gvpd-btn-c active" role="radio" aria-checked="true" type="button">\u00b0C</button>' +
            '<button class="gvpd-btn-f" role="radio" aria-checked="false" type="button">\u00b0F</button>' +
          '</div>' +
        '</div>' +

        /* Inputs */
        '<div class="gvpd-inputs">' +
          '<div class="gvpd-input-group">' +
            '<label for="gvpd-temp">Temperature</label>' +
            '<div class="gvpd-input-row">' +
              '<input type="range" id="gvpd-temp" min="15" max="40" step="0.5" value="25" aria-label="Temperature slider">' +
              '<input type="number" class="gvpd-num-input gvpd-temp-num" min="15" max="40" step="0.5" value="25" aria-label="Temperature value">' +
              '<span class="gvpd-unit gvpd-temp-unit">\u00b0C</span>' +
            '</div>' +
          '</div>' +
          '<div class="gvpd-input-group">' +
            '<label for="gvpd-rh">Relative Humidity</label>' +
            '<div class="gvpd-input-row">' +
              '<input type="range" id="gvpd-rh" min="20" max="95" step="1" value="60" aria-label="Humidity slider">' +
              '<input type="number" class="gvpd-num-input gvpd-rh-num" min="20" max="95" step="1" value="60" aria-label="Humidity value">' +
              '<span class="gvpd-unit">%</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* Result */
        '<div class="gvpd-result">' +
          '<div><span class="gvpd-vpd-value" aria-live="polite">1.00</span><span class="gvpd-vpd-unit">kPa</span></div>' +
          '<div class="gvpd-status-bar"><div class="gvpd-status-fill"></div></div>' +
          '<div class="gvpd-status-text">Optimal for Vegetative Growth</div>' +
          '<div class="gvpd-dewpoint">Dew point: 16.7\u00b0C</div>' +
        '</div>' +

        /* Stage badges */
        '<div class="gvpd-stages" aria-label="Growth stage suitability"></div>' +

        /* Reverse VPD */
        '<div class="gvpd-reverse">' +
          '<div class="gvpd-reverse-title">' +
            '<svg viewBox="0 0 16 16" fill="none"><path d="M8 1v5l3 3M15 8A7 7 0 111 8a7 7 0 0114 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            'What humidity do I need?' +
          '</div>' +
          '<div class="gvpd-reverse-grid"></div>' +
        '</div>' +

      '</div>' +

      /* Footer */
      '<div class="gvpd-footer">' +
        '<a href="https://growvpd.pro" target="_blank" rel="noopener" class="gvpd-footer-brand">' +
          LEAF_SVG +
          'Powered by GrowVPD Pro' +
        '</a>' +
        '<a href="https://api.growvpd.pro" target="_blank" rel="noopener">Free API: api.growvpd.pro</a>' +
      '</div>';

    shadow.appendChild(root);

    /* ── Element references ─────────────────────────── */
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
        var rh = targetRH(v, tempC);
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

      /* VPD value */
      $vpdValue.textContent = vpd.toFixed(2);
      $vpdValue.style.color = zone.color;

      /* Status bar — map VPD 0..2.0 to 0..100% */
      var pct = Math.min(100, Math.max(0, (vpd / 2.0) * 100));
      $statusFill.style.width = pct + '%';
      $statusFill.style.background = zone.color;

      /* Status text */
      $statusText.textContent = zone.label;
      $statusText.style.color = zone.color;

      /* Dewpoint */
      var dp = calcDewpoint(state.tempC, state.rh);
      if (state.isFahrenheit) {
        $dewpoint.textContent = 'Dew point: ' + cToF(dp).toFixed(1) + '\u00b0F';
      } else {
        $dewpoint.textContent = 'Dew point: ' + dp.toFixed(1) + '\u00b0C';
      }

      /* Stages */
      renderStages(vpd);

      /* Reverse */
      renderReverse(state.tempC);
    }

    /* ── API call with local fallback ───────────────── */
    var apiAvailable = true;

    function recalc() {
      /* Local calc (always instant) */
      var localVPD = calcVPD(state.tempC, state.rh);
      updateDisplay(localVPD);

      /* Try API (non-blocking, update on response) */
      if (apiAvailable) {
        fetchJSON(
          API + '/vpd?temp=' + state.tempC.toFixed(1) + '&humidity=' + state.rh.toFixed(0),
          function (err, data) {
            if (err) {
              apiAvailable = false;
              /* Silently use local calc from here on */
              return;
            }
            if (data && typeof data.vpd === 'number') {
              updateDisplay(data.vpd);
            }
          }
        );
      }
    }

    var debouncedRecalc = debounce(recalc, DEBOUNCE_MS);

    /* ── Sync slider <-> number input ───────────────── */
    function syncTemp(val, source) {
      var v = parseFloat(val);
      if (isNaN(v)) return;

      if (state.isFahrenheit) {
        var minF = cToF(15), maxF = cToF(40);
        v = Math.max(minF, Math.min(maxF, v));
        state.tempC = fToC(v);
        /* Map tempC back to slider position (slider always in C internally) */
        $tempSlider.value = state.tempC.toFixed(1);
        if (source !== 'num') $tempNum.value = v.toFixed(1);
        if (source !== 'slider') $tempSlider.value = state.tempC.toFixed(1);
      } else {
        v = Math.max(15, Math.min(40, v));
        state.tempC = v;
        if (source !== 'num') $tempNum.value = v.toFixed(1);
        if (source !== 'slider') $tempSlider.value = v.toFixed(1);
      }
      debouncedRecalc();
    }

    function syncRH(val, source) {
      var v = parseFloat(val);
      if (isNaN(v)) return;
      v = Math.max(20, Math.min(95, v));
      state.rh = v;
      if (source !== 'num') $rhNum.value = Math.round(v);
      if (source !== 'slider') $rhSlider.value = v;
      debouncedRecalc();
    }

    /* ── Events: temperature ────────────────────────── */
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

    $tempNum.addEventListener('input', function () {
      syncTemp(this.value, 'num');
    });

    /* ── Events: humidity ───────────────────────────── */
    $rhSlider.addEventListener('input', function () {
      $rhNum.value = Math.round(parseFloat(this.value));
      state.rh = parseFloat(this.value);
      debouncedRecalc();
    });

    $rhNum.addEventListener('input', function () {
      syncRH(this.value, 'num');
    });

    /* ── Events: unit toggle ────────────────────────── */
    function setUnit(fahrenheit) {
      state.isFahrenheit = fahrenheit;
      $btnC.classList.toggle('active', !fahrenheit);
      $btnF.classList.toggle('active', fahrenheit);
      $btnC.setAttribute('aria-checked', String(!fahrenheit));
      $btnF.setAttribute('aria-checked', String(fahrenheit));

      if (fahrenheit) {
        $tempUnit.textContent = '\u00b0F';
        var minF = cToF(15), maxF = cToF(40);
        $tempSlider.min = '15';
        $tempSlider.max = '40';
        $tempSlider.step = '0.5';
        $tempSlider.value = state.tempC.toFixed(1);
        $tempNum.min = minF.toFixed(0);
        $tempNum.max = maxF.toFixed(0);
        $tempNum.step = '1';
        $tempNum.value = cToF(state.tempC).toFixed(1);
      } else {
        $tempUnit.textContent = '\u00b0C';
        $tempSlider.min = '15';
        $tempSlider.max = '40';
        $tempSlider.step = '0.5';
        $tempSlider.value = state.tempC.toFixed(1);
        $tempNum.min = '15';
        $tempNum.max = '40';
        $tempNum.step = '0.5';
        $tempNum.value = state.tempC.toFixed(1);
      }
      recalc();
    }

    $btnC.addEventListener('click', function () { setUnit(false); });
    $btnF.addEventListener('click', function () { setUnit(true); });

    /* ── Initial render ─────────────────────────────── */
    recalc();
  }

  /* ── Bootstrap ──────────────────────────────────────── */
  /* Capture currentScript eagerly — it is null inside async callbacks */
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
