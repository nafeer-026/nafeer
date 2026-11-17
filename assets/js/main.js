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

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');

      if (!nameInput || !emailInput) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr
            ? 'تعذّر تجهيز نموذج الاستفسار. يرجى التواصل معنا عبر واتساب.'
            : 'The enquiry form could not be prepared. Please contact us on WhatsApp.';
        }
        return;
      }

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
        submitBtn.textContent = isAr ? 'جارٍ الإرسال...' : 'Sending enquiry...';
      }

      const formData = new FormData(form);

      try {
        const response = await fetch('https://formsubmit.co/ajax/nafeerdigital@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
        });

        const result = await response.json();
        if (!response.ok || !result || (result.success !== true && result.success !== 'true')) {
          throw new Error(result && result.message ? result.message : `Form submission failed (${response.status}).`);
        }

        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.textContent = isAr
            ? 'شكراً لتواصلك معنا. تم إرسال استفسارك بنجاح.'
            : 'Thanks for reaching out. Your enquiry has been sent successfully.';
        }
        form.reset();
      } catch (error) {
        console.error('Enquiry form submission failed:', error);
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr
            ? 'تعذّر إرسال استفسارك. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.'
            : 'We could not send your enquiry. Please try again or contact us on WhatsApp.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        if (feedback) {
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
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
