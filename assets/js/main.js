/**
 * NAFEER DIGITAL | نفير الرقمي
 * Core International Agency Script: Navigation, Dynamic Expertise Showcase,
 * Multilingual Switching, Validated Lead Forms & Direct WhatsApp Routing
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '601170066150';
  const WHATSAPP_MSG_EN = "Hello NAFEER DIGITAL, I'd like to discuss growing my business through SEO, website design, and digital content.";
  const WHATSAPP_MSG_AR = "مرحباً نفير الرقمي، أود مناقشة تنمية عملي من خلال تحسين محركات البحث وتصميم المواقع والمحتوى الرقمي.";

  function getActiveLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  // 1. Transparent Header on Scroll
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Interactive Expertise Showcase Tabs
  function initExpertiseTabs() {
    const tabBtns = document.querySelectorAll('.expertise-tab-btn');
    const panels = document.querySelectorAll('.expertise-panel');

    if (!tabBtns.length || !panels.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        // Toggle active button
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle active panel
        panels.forEach(p => {
          if (p.id === targetId) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      });
    });
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

  // 4. Multilingual Switching Engine
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
          if (currentPath === '/' || (currentPath.endsWith('index.html') && !currentPath.includes('/ar/'))) {
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
            targetUrl = currentPath.replace('/ar/', '/en/');
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
      const messageInput = form.querySelector('[name="message"]');

      if (!nameInput || !emailInput) return;

      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr 
            ? 'يرجى إكمال الحقول الإلزامية (الاسم والبريد الإلكتروني).'
            : 'Please complete all required fields (Name and Business Email).';
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr
            ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.'
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
            ? 'شكراً لتواصلك معنا! تم استلام طلب الاستشارة وسيتواصل معك أحد خبرائنا الاستراتيجيين خلال 24 ساعة.'
            : 'Thank you for reaching out! Your consultation request has been received. A senior growth strategist will contact you within 24 hours.';
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
        // Close others in the same list
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

  // DOM Loaded Trigger
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initExpertiseTabs();
    initMobileNav();
    initLanguageSwitcher();
    initWhatsAppIntegration();
    initConsultationForm();
    initFaqAccordion();
  });
})();
