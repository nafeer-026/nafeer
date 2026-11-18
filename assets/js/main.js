/**
 * NAFEER DIGITAL | نفير الرقمي
 * Core International Agency Script
 * Features:
 * 1. Dual-Mode Theme Engine (Official Default: Light Mode, Toggleable: Dark Mode)
 * 2. Sticky Glassmorphism Header on Scroll
 * 3. Mobile Navigation Drawer & Backdrop Control
 * 4. Strict Bilingual Navigation Switcher (English LTR / Arabic RTL)
 * 5. Direct WhatsApp Inbound Routing
 * 6. Lead Generation & Consultation Form Validation
 * 7. FAQ Accordion Interaction
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '601170066150';
  const WHATSAPP_MSG_EN = "Hello NAFEER DIGITAL, I am looking for a strategic partner to grow our business through digital marketing. I'd like to book a free consultation.";
  const WHATSAPP_MSG_AR = "مرحباً نفير الرقمي، أود استشارة فريقكم الاستراتيجي لتطوير خطة تسويق ونمو رقمي لأعمالنا.";

  function getActiveLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  // 1. Dual-Mode Theme Engine (Light Mode is Official Default)
  function initThemeEngine() {
    const savedTheme = localStorage.getItem('nafeer_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const toggleBtns = document.querySelectorAll('.js-toggle-theme');

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('nafeer_theme', next);
      } catch (e) {}
    }

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  }

  // 2. Transparent & Frosted Glass Header on Scroll
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Mobile Navigation Drawer
  function initMobileNav() {
    const hamburger = document.getElementById('btn-hamburger');
    const closeBtn = document.getElementById('btn-drawer-close');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const drawer = document.getElementById('mobile-drawer');

    if (!hamburger || !drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // 4. Strict Multilingual Switcher (No Language Mixing)
  function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.js-switch-lang');

    langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-target-lang');
        const currentPath = window.location.pathname;

        try {
          localStorage.setItem('nafeer_lang', targetLang);
        } catch (err) {}

        let targetUrl = '/';

        if (targetLang === 'ar') {
          if (currentPath === '/' || currentPath.endsWith('index.html') && !currentPath.includes('/ar/')) {
            targetUrl = '/ar/';
          } else if (currentPath.includes('/en/')) {
            targetUrl = currentPath.replace('/en/', '/ar/');
          } else if (!currentPath.includes('/ar/')) {
            targetUrl = '/ar' + (currentPath.startsWith('/') ? currentPath : '/' + currentPath);
          } else {
            targetUrl = currentPath;
          }
        } else {
          // targetLang === 'en'
          if (currentPath.includes('/ar/')) {
            targetUrl = currentPath.replace('/ar/', '/');
            if (targetUrl === '/en/') targetUrl = '/';
          } else {
            targetUrl = '/';
          }
        }

        window.location.href = targetUrl;
      });
    });
  }

  // 5. Direct WhatsApp Integration
  function initWhatsAppIntegration() {
    const isAr = getActiveLang() === 'ar';
    const message = encodeURIComponent(isAr ? WHATSAPP_MSG_AR : WHATSAPP_MSG_EN);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    document.querySelectorAll('.js-whatsapp-link').forEach(link => {
      link.setAttribute('href', waUrl);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // 6. Professional Consultation Form Submission
  function initConsultationForm() {
    const form = document.getElementById('consultation-form') || document.getElementById('contact-form');
    if (!form) return;

    const feedback = document.getElementById('form-feedback');
    const isAr = getActiveLang() === 'ar';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');

      if (!nameInput || !emailInput) return;

      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr 
            ? 'يرجى إكمال الحقول الإلزامية (الاسم والبريد الإلكتروني).'
            : 'Please complete all required fields (Full Name and Business Email).';
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr
            ? 'يرجى إدخال عنوان بريد إلكتروني صحيح للعمل.'
            : 'Please enter a valid business email address.';
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = isAr ? 'جارٍ الإرسال...' : 'Submitting Request...';
      }

      const formData = new FormData(form);

      fetch('https://formsubmit.co/ajax/nafeerdigital@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      })
      .then(res => res.json())
      .then(() => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.textContent = isAr
            ? 'شكراً لتواصلك معنا! تم استلام طلبك وسيتواصل معك خبير استراتيجي خلال 24 ساعة عمل.'
            : 'Thank you for reaching out! Your request has been received. A senior growth strategist will contact you within 24 hours.';
        }
        form.reset();
      })
      .catch(() => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.textContent = isAr
            ? 'تم استلام طلبك! يمكنك أيضاً التواصل معنا مباشرة عبر واتساب لرد سريع.'
            : 'Your request has been received! You may also contact us directly via WhatsApp for immediate coordination.';
        }
        form.reset();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        if (feedback) {
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  // 7. FAQ Accordion Interaction
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (!question) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        const parentList = item.closest('.faq-list');
        if (parentList) {
          parentList.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('open');
          });
        }
        item.classList.toggle('open', !isOpen);
      });
    });
  }

  // 8. Scroll-Triggered Reveal Animations
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }
  }

  // 9. Full-Size Case Study Lightbox Modal
  function initCaseStudyLightbox() {
    const modal = document.getElementById('case-study-lightbox');
    if (!modal) return;

    const modalImg = modal.querySelector('#lightbox-img');
    const modalTitle = modal.querySelector('#lightbox-title');
    const modalBadge = modal.querySelector('#lightbox-badge');
    const modalDesc = modal.querySelector('#lightbox-desc');
    const modalLink = modal.querySelector('#lightbox-link');
    const closeBtn = modal.querySelector('#lightbox-close');

    function openModal(data) {
      if (modalImg && data.image) modalImg.src = data.image;
      if (modalTitle && data.title) modalTitle.textContent = data.title;
      if (modalBadge && data.badge) modalBadge.textContent = data.badge;
      if (modalDesc && data.desc) modalDesc.textContent = data.desc;
      if (modalLink && data.url) modalLink.href = data.url;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.js-open-lightbox').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const card = trigger.closest('.work-case-card');
        if (!card) return;

        openModal({
          image: card.getAttribute('data-full-img') || trigger.getAttribute('data-full-img'),
          title: card.getAttribute('data-title') || '',
          badge: card.getAttribute('data-badge') || '',
          desc: card.getAttribute('data-desc') || '',
          url: card.getAttribute('data-url') || '#'
        });
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 10. Portfolio Filter Pills
  function initWorkFilter() {
    const filterBtns = document.querySelectorAll('.js-work-filter-btn');
    const workCards = document.querySelectorAll('.work-case-card');
    if (!filterBtns.length || !workCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');

        workCards.forEach(card => {
          const category = card.getAttribute('data-category') || 'all';
          if (filterVal === 'all' || category === filterVal || category.includes(filterVal)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // DOM Loaded Trigger
  document.addEventListener('DOMContentLoaded', () => {
    initThemeEngine();
    initHeaderScroll();
    initMobileNav();
    initLanguageSwitcher();
    initWhatsAppIntegration();
    initConsultationForm();
    initFaqAccordion();
    initScrollReveal();
    initCaseStudyLightbox();
    initWorkFilter();
  });
})();
