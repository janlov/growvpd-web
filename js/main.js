// GrowVPD Pro — Landing Page v2

document.addEventListener('DOMContentLoaded', () => {

    // Mobile nav
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight + 20;
                const pos = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });

    // Scroll animations
    const animatedElements = document.querySelectorAll(
        '.bento-card, .ss-card, .device-card, .pricing-col, .pricing-option, .why-card, .use-case'
    );

    animatedElements.forEach(el => el.classList.add('fade-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger animation
                const delay = Array.from(entry.target.parentElement.children)
                    .indexOf(entry.target) * 80;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    animatedElements.forEach(el => observer.observe(el));

    // Screenshot horizontal scroll with drag
    const scrollContainer = document.querySelector('.screenshot-scroll');
    if (scrollContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });

        scrollContainer.style.cursor = 'grab';
    }

    // Sticky CTA - show after scrolling past hero
    const stickyCta = document.getElementById('stickyCta');
    const heroSection = document.getElementById('hero');
    const backToTop = document.getElementById('backToTop');
    if (stickyCta && heroSection) {
        const stickyObserver = new IntersectionObserver((entries) => {
            const isVisible = !entries[0].isIntersecting;
            stickyCta.classList.toggle('visible', isVisible);
            // Move back-to-top above sticky bar when visible
            if (backToTop) {
                backToTop.style.bottom = isVisible ? '80px' : '24px';
            }
        }, { threshold: 0 });
        stickyObserver.observe(heroSection);
    }

    // Back to top button
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 600);
        }, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Pricing toggle (monthly / yearly / lifetime)
    const pricingToggle = document.querySelector('.pricing-toggle');
    if (pricingToggle) {
        const amountEl = document.querySelector('.pricing-amount');
        const perEl = document.querySelector('.pricing-amount .per');
        const subEl = document.querySelector('.pricing-sublabel');
        const hintEl = document.querySelector('.pricing-lifetime-hint');

        const plans = {
            monthly:  { price: '3.99',  per: '/mo', sub: 'Cancel anytime',              hint: '' },
            yearly:   { price: '24.99', per: '/yr', sub: '~$2.08/mo · save 48%',        hint: '' },
            lifetime: { price: '49.99', per: '',    sub: 'Pay once. Keep forever.',     hint: 'All future updates included' },
        };

        pricingToggle.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const plan = btn.dataset.plan;
                if (!plan || !plans[plan]) return;
                pricingToggle.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                const p = plans[plan];
                if (amountEl) {
                    amountEl.innerHTML = `<sup>$</sup>${p.price}<span class="per">${p.per}</span>`;
                }
                if (subEl) subEl.textContent = p.sub;
                if (hintEl) hintEl.textContent = p.hint;
            });
        });
    }

    // More-features expand/collapse
    const moreToggle = document.querySelector('.more-features-toggle');
    const moreGrid = document.querySelector('.more-features');
    if (moreToggle && moreGrid) {
        moreToggle.addEventListener('click', () => {
            const open = moreGrid.classList.toggle('collapsed') === false;
            moreToggle.classList.toggle('is-open', open);
            const label = moreToggle.querySelector('.mf-label');
            if (label) label.textContent = open
                ? (moreToggle.dataset.labelLess || 'Show less')
                : (moreToggle.dataset.labelMore || 'Show all features');
        });
    }

    // Nav dropdown (Resources)
    document.querySelectorAll('.nav-dropdown').forEach(dd => {
        const toggle = dd.querySelector('.nav-dropdown-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.nav-dropdown.is-open').forEach(other => {
                if (other !== dd) other.classList.remove('is-open');
            });
            dd.classList.toggle('is-open');
        });
    });
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-dropdown.is-open').forEach(d => d.classList.remove('is-open'));
    });

    // Hero notify form (same endpoint as footer subscribe)
    const heroForm = document.getElementById('heroNotifyForm');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = heroForm.querySelector('input[type=email]');
            const btn = heroForm.querySelector('button');
            const msg = heroForm.querySelector('.notify-msg');
            const em = input.value.trim();
            if (!em) return;
            const origLabel = btn.textContent;
            btn.disabled = true; btn.textContent = '...';
            const lang = (localStorage.getItem('growvpd-lang') || navigator.language || 'en').substring(0,2);
            fetch('https://api.growvpd.pro/subscribe', {
                method: 'POST', headers: {'Content-Type':'application/json'},
                body: JSON.stringify({ email: em, lang, source: 'hero' })
            }).then(r => r.json()).then(d => {
                msg.style.display = 'block';
                msg.style.color = '#81C784';
                msg.textContent = d.message || 'Check your inbox to confirm!';
                input.value = '';
            }).catch(() => {
                msg.style.display = 'block';
                msg.style.color = '#EF5350';
                msg.textContent = 'Something went wrong. Try again later.';
            }).finally(() => {
                btn.disabled = false; btn.textContent = origLabel;
            });
        });
    }
});
