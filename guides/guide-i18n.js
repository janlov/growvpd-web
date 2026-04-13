/**
 * GrowVPD Pro — Guide Articles i18n System
 *
 * Smart hybrid approach for guide internationalization:
 * - Article body content stays in English (too large to translate in JS)
 * - UI chrome (nav, breadcrumb, CTA, footer, discussion) gets translated
 * - A translation banner offers Google Translate for the full page
 *
 * Reads language from localStorage ('growvpd-lang') set by the main site i18n.
 * Supported: en, cs, de, es, nl, fr, it, pt, pl, th, he
 */

(function () {
    'use strict';

    // -------------------------------------------------------------------------
    // Configuration
    // -------------------------------------------------------------------------

    var SUPPORTED = ['en','cs','de','es','nl','fr','it','pt','pl','th','he'];
    var RTL = ['he'];

    // Human-readable language names (in each language)
    var LANG_NAMES = {
        cs: 'cestina',
        de: 'Deutsch',
        es: 'espanol',
        nl: 'Nederlands',
        fr: 'francais',
        it: 'italiano',
        pt: 'portugues',
        pl: 'polski',
        th: 'ไทย',
        he: 'עברית'
    };

    // -------------------------------------------------------------------------
    // UI Translations (article chrome — not body content)
    // -------------------------------------------------------------------------

    var UI = {
        en: {
            breadcrumbHome:    'Home',
            breadcrumbGuides:  'Guides & Community',
            relatedTitle:      'Related Guides',
            discussTitle:      'Discussion',
            discussDesc:       'Have questions about this guide? Share your experience or ask for help.',
            discussNote:       'Discussions powered by Giscus & GitHub Discussions.',
            discussDiscord:    'Prefer Discord?',
            ctaTitle:          'Need Help?',
            ctaDesc:           'Join our Discord for live support from the developer and community.',
            ctaBtn:            'Join Discord',
            footerRights:      'All rights reserved.',
            bannerText:        'This guide is in English.',
            bannerTranslate:   'Auto-translate',
            bannerDismiss:     'Read in English'
        },

        cs: {
            breadcrumbHome:    'Dom\u016f',
            breadcrumbGuides:  'N\u00e1vody & komunita',
            relatedTitle:      'Souvisej\u00edc\u00ed n\u00e1vody',
            discussTitle:      'Diskuze',
            discussDesc:       'M\u00e1te ot\u00e1zky k tomuto n\u00e1vodu? Pod\u011blte se o zku\u0161enosti nebo po\u017e\u00e1dejte o pomoc.',
            discussNote:       'Diskuze p\u0159es Giscus a GitHub Discussions.',
            discussDiscord:    'Preferujete Discord?',
            ctaTitle:          'Pot\u0159ebujete pomoc?',
            ctaDesc:           'P\u0159idejte se na n\u00e1\u0161 Discord pro \u017eivou podporu od v\u00fdvoj\u00e1\u0159e a komunity.',
            ctaBtn:            'P\u0159ipojit se na Discord',
            footerRights:      'V\u0161echna pr\u00e1va vyhrazena.',
            bannerText:        'Tento n\u00e1vod je v angli\u010dtin\u011b.',
            bannerTranslate:   'Automatick\u00fd p\u0159eklad',
            bannerDismiss:     '\u010c\u00edst v angli\u010dtin\u011b'
        },

        de: {
            breadcrumbHome:    'Startseite',
            breadcrumbGuides:  'Anleitungen & Community',
            relatedTitle:      'Verwandte Anleitungen',
            discussTitle:      'Diskussion',
            discussDesc:       'Fragen zu dieser Anleitung? Teilen Sie Ihre Erfahrungen oder bitten Sie um Hilfe.',
            discussNote:       'Diskussionen \u00fcber Giscus & GitHub Discussions.',
            discussDiscord:    'Discord bevorzugt?',
            ctaTitle:          'Hilfe ben\u00f6tigt?',
            ctaDesc:           'Treten Sie unserem Discord bei f\u00fcr Live-Support vom Entwickler und der Community.',
            ctaBtn:            'Discord beitreten',
            footerRights:      'Alle Rechte vorbehalten.',
            bannerText:        'Diese Anleitung ist auf Englisch.',
            bannerTranslate:   'Automatisch \u00fcbersetzen',
            bannerDismiss:     'Auf Englisch lesen'
        },

        es: {
            breadcrumbHome:    'Inicio',
            breadcrumbGuides:  'Gu\u00edas y comunidad',
            relatedTitle:      'Gu\u00edas relacionadas',
            discussTitle:      'Discusi\u00f3n',
            discussDesc:       '\u00bfPreguntas sobre esta gu\u00eda? Comparte tu experiencia o pide ayuda.',
            discussNote:       'Discusiones a trav\u00e9s de Giscus y GitHub Discussions.',
            discussDiscord:    '\u00bfPrefieres Discord?',
            ctaTitle:          '\u00bfNecesitas ayuda?',
            ctaDesc:           '\u00danete a nuestro Discord para soporte en vivo del desarrollador y la comunidad.',
            ctaBtn:            'Unirse a Discord',
            footerRights:      'Todos los derechos reservados.',
            bannerText:        'Esta gu\u00eda est\u00e1 en ingl\u00e9s.',
            bannerTranslate:   'Traducir autom\u00e1ticamente',
            bannerDismiss:     'Leer en ingl\u00e9s'
        },

        nl: {
            breadcrumbHome:    'Home',
            breadcrumbGuides:  'Gidsen & community',
            relatedTitle:      'Gerelateerde handleidingen',
            discussTitle:      'Discussie',
            discussDesc:       'Vragen over deze handleiding? Deel je ervaring of vraag om hulp.',
            discussNote:       'Discussies via Giscus & GitHub Discussions.',
            discussDiscord:    'Liever Discord?',
            ctaTitle:          'Hulp nodig?',
            ctaDesc:           'Word lid van onze Discord voor live ondersteuning van de ontwikkelaar en community.',
            ctaBtn:            'Discord joinen',
            footerRights:      'Alle rechten voorbehouden.',
            bannerText:        'Deze handleiding is in het Engels.',
            bannerTranslate:   'Automatisch vertalen',
            bannerDismiss:     'In het Engels lezen'
        },

        fr: {
            breadcrumbHome:    'Accueil',
            breadcrumbGuides:  'Guides et communaut\u00e9',
            relatedTitle:      'Guides associ\u00e9s',
            discussTitle:      'Discussion',
            discussDesc:       'Des questions sur ce guide ? Partagez votre exp\u00e9rience ou demandez de l\u2019aide.',
            discussNote:       'Discussions via Giscus et GitHub Discussions.',
            discussDiscord:    'Pr\u00e9f\u00e9rez Discord ?',
            ctaTitle:          'Besoin d\u2019aide ?',
            ctaDesc:           'Rejoignez notre Discord pour un support en direct du d\u00e9veloppeur et de la communaut\u00e9.',
            ctaBtn:            'Rejoindre Discord',
            footerRights:      'Tous droits r\u00e9serv\u00e9s.',
            bannerText:        'Ce guide est en anglais.',
            bannerTranslate:   'Traduction automatique',
            bannerDismiss:     'Lire en anglais'
        },

        it: {
            breadcrumbHome:    'Home',
            breadcrumbGuides:  'Guide e community',
            relatedTitle:      'Guide correlate',
            discussTitle:      'Discussione',
            discussDesc:       'Domande su questa guida? Condividi la tua esperienza o chiedi aiuto.',
            discussNote:       'Discussioni tramite Giscus e GitHub Discussions.',
            discussDiscord:    'Preferisci Discord?',
            ctaTitle:          'Hai bisogno di aiuto?',
            ctaDesc:           'Unisciti al nostro Discord per supporto dal vivo dallo sviluppatore e dalla comunit\u00e0.',
            ctaBtn:            'Unisciti a Discord',
            footerRights:      'Tutti i diritti riservati.',
            bannerText:        'Questa guida \u00e8 in inglese.',
            bannerTranslate:   'Traduzione automatica',
            bannerDismiss:     'Leggi in inglese'
        },

        pt: {
            breadcrumbHome:    'In\u00edcio',
            breadcrumbGuides:  'Guias e comunidade',
            relatedTitle:      'Guias relacionados',
            discussTitle:      'Discuss\u00e3o',
            discussDesc:       'Perguntas sobre este guia? Compartilhe sua experi\u00eancia ou pe\u00e7a ajuda.',
            discussNote:       'Discuss\u00f5es via Giscus e GitHub Discussions.',
            discussDiscord:    'Prefere Discord?',
            ctaTitle:          'Precisa de ajuda?',
            ctaDesc:           'Junte-se ao nosso Discord para suporte ao vivo do desenvolvedor e da comunidade.',
            ctaBtn:            'Entrar no Discord',
            footerRights:      'Todos os direitos reservados.',
            bannerText:        'Este guia est\u00e1 em ingl\u00eas.',
            bannerTranslate:   'Tradu\u00e7\u00e3o autom\u00e1tica',
            bannerDismiss:     'Ler em ingl\u00eas'
        },

        pl: {
            breadcrumbHome:    'Strona g\u0142\u00f3wna',
            breadcrumbGuides:  'Poradniki i spo\u0142eczno\u015b\u0107',
            relatedTitle:      'Powi\u0105zane poradniki',
            discussTitle:      'Dyskusja',
            discussDesc:       'Pytania do tego poradnika? Podziel si\u0119 do\u015bwiadczeniem lub popro\u015b o pomoc.',
            discussNote:       'Dyskusje przez Giscus i GitHub Discussions.',
            discussDiscord:    'Wolisz Discord?',
            ctaTitle:          'Potrzebujesz pomocy?',
            ctaDesc:           'Do\u0142\u0105cz do naszego Discorda po wsparcie na \u017cywo od dewelopera i spo\u0142eczno\u015bci.',
            ctaBtn:            'Do\u0142\u0105cz do Discord',
            footerRights:      'Wszelkie prawa zastrze\u017cone.',
            bannerText:        'Ten poradnik jest po angielsku.',
            bannerTranslate:   'Automatyczne t\u0142umaczenie',
            bannerDismiss:     'Czytaj po angielsku'
        },

        th: {
            breadcrumbHome:    '\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01',
            breadcrumbGuides:  '\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d\u0e41\u0e25\u0e30\u0e0a\u0e38\u0e21\u0e0a\u0e19',
            relatedTitle:      '\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07',
            discussTitle:      '\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32',
            discussDesc:       '\u0e21\u0e35\u0e04\u0e33\u0e16\u0e32\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d\u0e19\u0e35\u0e49? \u0e41\u0e0a\u0e23\u0e4c\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e02\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d',
            discussNote:       '\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e1c\u0e48\u0e32\u0e19 Giscus \u0e41\u0e25\u0e30 GitHub Discussions',
            discussDiscord:    '\u0e0a\u0e2d\u0e1a Discord \u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32?',
            ctaTitle:          '\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d?',
            ctaDesc:           '\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21 Discord \u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e08\u0e32\u0e01\u0e19\u0e31\u0e01\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e41\u0e25\u0e30\u0e0a\u0e38\u0e21\u0e0a\u0e19',
            ctaBtn:            '\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21 Discord',
            footerRights:      '\u0e2a\u0e07\u0e27\u0e19\u0e25\u0e34\u0e02\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14',
            bannerText:        '\u0e04\u0e39\u0e48\u0e21\u0e37\u0e2d\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29',
            bannerTranslate:   '\u0e41\u0e1b\u0e25\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34',
            bannerDismiss:     '\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29'
        },

        he: {
            breadcrumbHome:    '\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea',
            breadcrumbGuides:  '\u05de\u05d3\u05e8\u05d9\u05db\u05d9\u05dd \u05d5\u05e7\u05d4\u05d9\u05dc\u05d4',
            relatedTitle:      '\u05de\u05d3\u05e8\u05d9\u05db\u05d9\u05dd \u05e7\u05e9\u05d5\u05e8\u05d9\u05dd',
            discussTitle:      '\u05d3\u05d9\u05d5\u05df',
            discussDesc:       '\u05e9\u05d0\u05dc\u05d5\u05ea \u05e2\u05dc \u05d4\u05de\u05d3\u05e8\u05d9\u05da \u05d4\u05d6\u05d4? \u05e9\u05ea\u05e4\u05d5 \u05d0\u05ea \u05d4\u05e0\u05d9\u05e1\u05d9\u05d5\u05df \u05e9\u05dc\u05db\u05dd \u05d0\u05d5 \u05d1\u05e7\u05e9\u05d5 \u05e2\u05d6\u05e8\u05d4.',
            discussNote:       '\u05d3\u05d9\u05d5\u05e0\u05d9\u05dd \u05d3\u05e8\u05da Giscus \u05d5-GitHub Discussions.',
            discussDiscord:    '\u05de\u05e2\u05d3\u05d9\u05e4\u05d9\u05dd Discord?',
            ctaTitle:          '\u05e6\u05e8\u05d9\u05db\u05d9\u05dd \u05e2\u05d6\u05e8\u05d4?',
            ctaDesc:           '\u05d4\u05e6\u05d8\u05e8\u05e4\u05d5 \u05dc-Discord \u05e9\u05dc\u05e0\u05d5 \u05dc\u05ea\u05de\u05d9\u05db\u05d4 \u05d7\u05d9\u05d4 \u05de\u05d4\u05de\u05e4\u05ea\u05d7 \u05d5\u05d4\u05e7\u05d4\u05d9\u05dc\u05d4.',
            ctaBtn:            '\u05d4\u05e6\u05d8\u05e8\u05e4\u05d5 \u05dc-Discord',
            footerRights:      '\u05db\u05dc \u05d4\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05e9\u05de\u05d5\u05e8\u05d5\u05ea.',
            bannerText:        '\u05de\u05d3\u05e8\u05d9\u05da \u05d6\u05d4 \u05d1\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea.',
            bannerTranslate:   '\u05ea\u05e8\u05d2\u05d5\u05dd \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9',
            bannerDismiss:     '\u05e7\u05e8\u05d0 \u05d1\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea'
        }
    };

    // -------------------------------------------------------------------------
    // Language detection (mirrors main site logic)
    // -------------------------------------------------------------------------

    function detectLang() {
        var stored = null;
        try { stored = localStorage.getItem('growvpd-lang'); } catch (e) { /* private browsing */ }
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

        var nav = (navigator.language || navigator.userLanguage || 'en');
        var short = nav.split('-')[0].toLowerCase();
        return SUPPORTED.indexOf(short) !== -1 ? short : 'en';
    }

    // -------------------------------------------------------------------------
    // Banner: translation notice with Google Translate link
    // -------------------------------------------------------------------------

    function createBanner(lang, t) {
        // Check if already dismissed this session
        try {
            if (sessionStorage.getItem('guide-lang-dismissed') === 'true') return null;
        } catch (e) { /* ignore */ }

        var translateUrl = 'https://translate.google.com/translate?sl=en&tl=' +
            lang + '&u=' + encodeURIComponent(window.location.href);

        var banner = document.createElement('div');
        banner.id = 'guide-i18n-banner';
        banner.setAttribute('role', 'status');
        banner.setAttribute('dir', RTL.indexOf(lang) !== -1 ? 'rtl' : 'ltr');

        // Globe SVG icon
        var globeSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
            'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0">' +
            '<circle cx="12" cy="12" r="10"/>' +
            '<line x1="2" y1="12" x2="22" y2="12"/>' +
            '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
            '</svg>';

        // Close (X) SVG icon
        var closeSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
            'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' +
            '</svg>';

        banner.innerHTML =
            '<div class="guide-banner-inner">' +
                '<span class="guide-banner-icon">' + globeSvg + '</span>' +
                '<span class="guide-banner-text">' + escapeHtml(t.bannerText) + '</span>' +
                '<a class="guide-banner-translate" href="' + translateUrl + '" target="_blank" rel="noopener">' +
                    escapeHtml(t.bannerTranslate) +
                '</a>' +
                '<button class="guide-banner-dismiss" type="button" title="' + escapeHtml(t.bannerDismiss) + '">' +
                    escapeHtml(t.bannerDismiss) +
                '</button>' +
                '<button class="guide-banner-close" type="button" aria-label="Close">' +
                    closeSvg +
                '</button>' +
            '</div>';

        // Inject styles
        injectBannerStyles();

        // Dismiss handlers
        var dismissFn = function () {
            banner.style.transform = 'translateY(-100%)';
            banner.style.opacity = '0';
            setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 300);
            try { sessionStorage.setItem('guide-lang-dismissed', 'true'); } catch (e) { /* ignore */ }
        };

        banner.querySelector('.guide-banner-dismiss').addEventListener('click', dismissFn);
        banner.querySelector('.guide-banner-close').addEventListener('click', dismissFn);

        return banner;
    }

    function injectBannerStyles() {
        if (document.getElementById('guide-i18n-banner-styles')) return;

        var css = document.createElement('style');
        css.id = 'guide-i18n-banner-styles';
        css.textContent =
            '#guide-i18n-banner {' +
                'position: relative;' +
                'z-index: 900;' +
                'background: linear-gradient(135deg, #E3F2FD 0%, #F1F8E9 100%);' +
                'border-bottom: 1px solid #B2DFDB;' +
                'transition: transform .3s ease, opacity .3s ease;' +
            '}' +

            '.guide-banner-inner {' +
                'max-width: 760px;' +
                'margin: 0 auto;' +
                'padding: 12px 24px;' +
                'display: flex;' +
                'align-items: center;' +
                'gap: 12px;' +
                'flex-wrap: wrap;' +
            '}' +

            '.guide-banner-icon {' +
                'color: #2E7D32;' +
                'display: flex;' +
                'align-items: center;' +
            '}' +

            '.guide-banner-text {' +
                'font-size: .88rem;' +
                'color: #37474F;' +
                'font-weight: 500;' +
            '}' +

            '.guide-banner-translate {' +
                'display: inline-flex;' +
                'align-items: center;' +
                'gap: 4px;' +
                'background: #2E7D32;' +
                'color: #fff;' +
                'padding: 6px 16px;' +
                'border-radius: 8px;' +
                'font-size: .82rem;' +
                'font-weight: 600;' +
                'text-decoration: none;' +
                'transition: background .2s, transform .2s;' +
                'white-space: nowrap;' +
            '}' +
            '.guide-banner-translate:hover {' +
                'background: #1B5E20;' +
                'transform: translateY(-1px);' +
            '}' +

            '.guide-banner-dismiss {' +
                'background: none;' +
                'border: 1px solid #90A4AE;' +
                'color: #546E7A;' +
                'padding: 6px 14px;' +
                'border-radius: 8px;' +
                'font-size: .82rem;' +
                'font-weight: 500;' +
                'cursor: pointer;' +
                'transition: all .2s;' +
                'white-space: nowrap;' +
            '}' +
            '.guide-banner-dismiss:hover {' +
                'background: rgba(0,0,0,.05);' +
                'border-color: #546E7A;' +
            '}' +

            '.guide-banner-close {' +
                'background: none;' +
                'border: none;' +
                'color: #90A4AE;' +
                'cursor: pointer;' +
                'padding: 4px;' +
                'margin-left: auto;' +
                'display: flex;' +
                'align-items: center;' +
                'transition: color .2s;' +
                'flex-shrink: 0;' +
            '}' +
            '.guide-banner-close:hover {' +
                'color: #37474F;' +
            '}' +

            /* Mobile: stack buttons below text */
            '@media (max-width: 600px) {' +
                '.guide-banner-inner {' +
                    'gap: 8px;' +
                    'padding: 10px 16px;' +
                '}' +
                '.guide-banner-text {' +
                    'flex-basis: calc(100% - 52px);' +
                    'font-size: .84rem;' +
                '}' +
                '.guide-banner-close {' +
                    'position: absolute;' +
                    'top: 8px;' +
                    'right: 8px;' +
                    'margin-left: 0;' +
                '}' +
            '}';

        document.head.appendChild(css);
    }

    // -------------------------------------------------------------------------
    // UI element translation
    // -------------------------------------------------------------------------

    function translateUI(lang, t) {
        // -- Navigation links --
        // Find all nav links and translate "Home" and "Guides" by text match
        var navLinks = document.querySelectorAll('.nav-links a');
        for (var i = 0; i < navLinks.length; i++) {
            var linkText = navLinks[i].textContent.trim();
            if (linkText === 'Home') {
                navLinks[i].textContent = t.breadcrumbHome;
            } else if (linkText === 'Guides & Community' || linkText === 'Guides') {
                navLinks[i].textContent = t.breadcrumbGuides;
            }
        }

        // -- Breadcrumb links --
        var breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
        for (var b = 0; b < breadcrumbLinks.length; b++) {
            var bcText = breadcrumbLinks[b].textContent.trim();
            if (bcText === 'Home') {
                breadcrumbLinks[b].textContent = t.breadcrumbHome;
            } else if (bcText === 'Guides & Community' || bcText === 'Guides' || bcText === 'Getting Started') {
                // Some breadcrumbs show category "Getting Started" linking to guides index
                if (breadcrumbLinks[b].getAttribute('href') === 'index.html' ||
                    breadcrumbLinks[b].getAttribute('href') === './index.html') {
                    breadcrumbLinks[b].textContent = t.breadcrumbGuides;
                }
            }
        }

        // -- Related Guides section title --
        var relatedHeadings = document.querySelectorAll('.related-guides h3');
        for (var r = 0; r < relatedHeadings.length; r++) {
            if (relatedHeadings[r].textContent.trim() === 'Related Guides') {
                relatedHeadings[r].textContent = t.relatedTitle;
            }
        }

        // -- Discussion section --
        var discussHeadings = document.querySelectorAll('.article-discussion h2');
        for (var d = 0; d < discussHeadings.length; d++) {
            if (discussHeadings[d].textContent.trim() === 'Discussion') {
                discussHeadings[d].textContent = t.discussTitle;
            }
        }

        // Discussion description paragraph (first <p> inside .article-discussion)
        var discussSections = document.querySelectorAll('.article-discussion');
        for (var ds = 0; ds < discussSections.length; ds++) {
            var firstP = discussSections[ds].querySelector('p');
            if (firstP && firstP.textContent.indexOf('Have questions about this guide') !== -1) {
                firstP.textContent = t.discussDesc;
            }
        }

        // Giscus note
        var giscusNotes = document.querySelectorAll('.giscus-note');
        for (var g = 0; g < giscusNotes.length; g++) {
            // Rebuild with translated text while preserving links
            giscusNotes[g].innerHTML =
                escapeHtml(t.discussNote) + ' ' +
                '<a href="https://discord.gg/growvpd" target="_blank" rel="noopener">' +
                escapeHtml(t.discussDiscord) +
                '</a>';
        }

        // -- Discord CTA section --
        // The CTA h3 text varies per guide, so we translate it generically
        var ctaSections = document.querySelectorAll('.discord-cta');
        for (var c = 0; c < ctaSections.length; c++) {
            var ctaH3 = ctaSections[c].querySelector('h3');
            if (ctaH3) ctaH3.textContent = t.ctaTitle;

            var ctaP = ctaSections[c].querySelector('p');
            if (ctaP) ctaP.textContent = t.ctaDesc;

            // Translate the button text while preserving the Discord SVG icon
            var ctaBtn = ctaSections[c].querySelector('.btn');
            if (ctaBtn) {
                var svgInBtn = ctaBtn.querySelector('svg');
                // Clear text nodes, re-add svg + translated text
                if (svgInBtn) {
                    var svgClone = svgInBtn.cloneNode(true);
                    ctaBtn.textContent = '';
                    ctaBtn.appendChild(svgClone);
                    ctaBtn.appendChild(document.createTextNode(' ' + t.ctaBtn));
                } else {
                    ctaBtn.textContent = t.ctaBtn;
                }
            }
        }

        // -- Article footer --
        var footers = document.querySelectorAll('.article-footer p');
        for (var f = 0; f < footers.length; f++) {
            // Replace "All rights reserved." portion while keeping the rest of the HTML
            if (footers[f].innerHTML.indexOf('All rights reserved') !== -1) {
                footers[f].innerHTML = footers[f].innerHTML.replace(
                    'All rights reserved.',
                    escapeHtml(t.footerRights)
                );
            }
        }

        // -- RTL support --
        if (RTL.indexOf(lang) !== -1) {
            document.documentElement.setAttribute('dir', 'rtl');
        }
    }

    // -------------------------------------------------------------------------
    // Utility
    // -------------------------------------------------------------------------

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    // -------------------------------------------------------------------------
    // Init
    // -------------------------------------------------------------------------

    // -------------------------------------------------------------------------
    // Content translation: load per-language article content
    // -------------------------------------------------------------------------

    function getArticleSlug() {
        var path = window.location.pathname;
        var match = path.match(/\/([^\/]+)\.html$/);
        if (match) return match[1];
        // Fallback: try filename from href
        var href = window.location.href;
        match = href.match(/\/([^\/]+)\.html/);
        return match ? match[1] : null;
    }

    function loadTranslatedContent(lang, callback) {
        var script = document.createElement('script');
        script.src = 'content/' + lang + '.js';
        script.onload = function() {
            if (typeof GUIDE_CONTENT !== 'undefined') {
                callback(GUIDE_CONTENT);
            } else {
                callback(null);
            }
        };
        script.onerror = function() {
            callback(null);
        };
        document.head.appendChild(script);
    }

    function applyTranslatedContent(content, slug) {
        if (!content || !content[slug]) return false;

        var article = content[slug];

        // Translate the article title (h1)
        var h1 = document.querySelector('.article-header h1');
        if (h1 && article.title) {
            h1.textContent = article.title;
        }

        // Translate the article body
        var body = document.querySelector('.article-body');
        if (body && article.body) {
            body.innerHTML = article.body;
        }

        // Update page title
        if (article.title) {
            document.title = article.title + ' — GrowVPD Pro';
        }

        return true;
    }

    // -------------------------------------------------------------------------
    // Init
    // -------------------------------------------------------------------------

    function init() {
        var lang = detectLang();

        // English is the default — nothing to do
        if (lang === 'en') return;

        var t = UI[lang];
        if (!t) return;

        // Translate all UI chrome
        translateUI(lang, t);

        // Try to load translated article content
        var slug = getArticleSlug();
        if (slug && slug !== 'index') {
            loadTranslatedContent(lang, function(content) {
                var translated = applyTranslatedContent(content, slug);
                if (!translated) {
                    // No translation available — show banner with Google Translate
                    var banner = createBanner(lang, t);
                    if (banner) {
                        var articlePage = document.querySelector('.article-page');
                        if (articlePage) {
                            articlePage.insertBefore(banner, articlePage.firstChild);
                        } else {
                            var nav = document.querySelector('.navbar');
                            if (nav && nav.nextSibling) {
                                nav.parentNode.insertBefore(banner, nav.nextSibling);
                            }
                        }
                    }
                }
            });
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
