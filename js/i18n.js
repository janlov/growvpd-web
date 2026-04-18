// GrowVPD Pro — i18n system
// Auto-detects browser language, applies translations, provides switcher

const SUPPORTED_LANGS = ['en','cs','de','es','nl','fr','it','pt','pl','th','he'];
const LANG_NAMES = {en:'English',cs:'Cestina',de:'Deutsch',es:'Espanol',nl:'Nederlands',fr:'Francais',it:'Italiano',pt:'Portugues',pl:'Polski',th:'Thai',he:'Hebrew'};
const RTL_LANGS = ['he'];

function detectLang() {
    // Check URL parameter first (for hreflang SEO links and cross-page navigation)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
        localStorage.setItem('growvpd-lang', urlLang);
        return urlLang;
    }
    const stored = localStorage.getItem('growvpd-lang');
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    const nav = navigator.language || navigator.userLanguage || 'en';
    const short = nav.split('-')[0].toLowerCase();
    return SUPPORTED_LANGS.includes(short) ? short : 'en';
}

function updateNavLinks(lang) {
    // Add ?lang=X to all internal links so language persists across page navigation
    document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        // Skip external links, mailto, and pure hash links
        if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('//') || href.startsWith('#')) return;

        // Split on # to preserve hash fragment
        const hashIdx = href.indexOf('#');
        const path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
        const hash = hashIdx >= 0 ? href.slice(hashIdx) : '';

        let newPath;
        if (/[?&]lang=/.test(path)) {
            // Replace existing lang param
            newPath = path.replace(/([?&])lang=[^&#]*/g, '$1lang=' + lang);
        } else if (path.includes('?')) {
            newPath = path + '&lang=' + lang;
        } else {
            newPath = path + '?lang=' + lang;
        }
        a.setAttribute('href', newPath + hash);
    });
}

function applyLang(lang) {
    if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) lang = 'en';
    if (typeof TRANSLATIONS === 'undefined') return;
    const t = TRANSLATIONS[lang];
    const fallback = TRANSLATIONS['en'];

    // Remove anti-flash cloak after translations are applied
    requestAnimationFrame(() => {
        const cloak = document.getElementById('i18n-cloak');
        if (cloak) cloak.remove();
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

    // Apply text translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] != null) el.textContent = t[key];
        else if (fallback[key] != null) el.textContent = fallback[key];
    });

    // Apply HTML translations (for elements with mixed content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] != null) el.innerHTML = t[key];
        else if (fallback[key] != null) el.innerHTML = fallback[key];
    });

    // Update active state in language selector
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('lang-active', opt.dataset.lang === lang);
    });

    localStorage.setItem('growvpd-lang', lang);

    // Update internal links so language persists across navigation
    updateNavLinks(lang);

    // Update meta tags for SEO
    updateMetaTags(lang, t, fallback);
}

function updateMetaTags(lang, t, fallback) {
    const metaTitle = t['metaTitle'] || fallback['metaTitle'];
    const metaDesc = t['metaDesc'] || fallback['metaDesc'];
    const metaKeywords = t['metaKeywords'] || fallback['metaKeywords'];
    if (metaTitle) document.title = metaTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && metaDesc) descMeta.setAttribute('content', metaDesc);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && metaDesc) ogDesc.setAttribute('content', metaDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && metaTitle) ogTitle.setAttribute('content', metaTitle);
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta && metaKeywords) keywordsMeta.setAttribute('content', metaKeywords);
}

function buildLangSwitcher() {
    const wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';

    const currentLang = detectLang();
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.setAttribute('aria-label', 'Change language');
    btn.innerHTML = `<span class="lang-flag">${currentLang.toUpperCase()}</span>`;
    wrapper.appendChild(btn);

    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';

    SUPPORTED_LANGS.forEach(code => {
        const opt = document.createElement('button');
        opt.className = 'lang-option' + (code === currentLang ? ' lang-active' : '');
        opt.dataset.lang = code;
        opt.textContent = `${code.toUpperCase()} — ${LANG_NAMES[code]}`;
        opt.addEventListener('click', () => {
            applyLang(code);
            btn.querySelector('.lang-flag').textContent = code.toUpperCase();
            dropdown.classList.remove('lang-open');
        });
        dropdown.appendChild(opt);
    });

    wrapper.appendChild(dropdown);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('lang-open');
    });

    document.addEventListener('click', () => dropdown.classList.remove('lang-open'));

    // Insert before nav CTA
    const nav = document.querySelector('.nav-links');
    if (nav) {
        const li = document.createElement('li');
        li.appendChild(wrapper);
        nav.insertBefore(li, nav.querySelector('.nav-cta')?.parentElement || null);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    buildLangSwitcher();
    applyLang(detectLang());
});
