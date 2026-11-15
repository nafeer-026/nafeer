/**
 * NAFEER DIGITAL | نفير الرقمي
 * Core Website Scripts: Navigation, Language Switching, Lead Forms & WhatsApp Integration
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '601170066150';
  const WHATSAPP_MSG_EN = "Hello NAFEER DIGITAL, I'm interested in your digital marketing services. I'd like to discuss my business requirements.";
  const WHATSAPP_MSG_AR = "مرحباً نفير الرقمي، أنا مهتم بخدمات التسويق الرقمي لديكم وأرغب في مناقشة احتياجات عملي.";

  function getActiveLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  // 1. Language Switcher Routing & Sync
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

        // Calculate target URL
        let targetUrl = '/';
        if (targetLang === 'ar') {
          if (currentPath === '/' || currentPath.endsWith('index.html') && !currentPath.includes('/ar/')) {
            targetUrl = '/ar/';
          } else if (currentPath.includes('/en/')) {
            targetUrl = currentPath.replace('/en/', '/ar/');
          } else if (!currentPath.includes('/ar/')) {
            targetUrl = '/ar' + currentPath;
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

  // 2. WhatsApp Integration with Language Presets
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

    // Close when clicking any nav link inside drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // 4. Header Scroll Effect
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 5. Contact Form Validation & Submission
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const feedback = document.getElementById('form-feedback');
    const isAr = getActiveLang() === 'ar';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Check required fields
      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const messageInput = form.querySelector('[name="message"]');

      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr 
            ? 'يرجى ملء جميع الحقول المطلوبة (الاسم والبريد الإلكتروني).'
            : 'Please fill in all required fields (Name and Email).';
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = isAr
            ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.'
            : 'Please enter a valid email address.';
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      // Submit via Fetch to FormSubmit endpoint
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = isAr ? 'جارٍ الإرسال...' : 'Sending...';
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
      .then(response => response.json())
      .then(data => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.textContent = isAr
            ? 'شكراً لك! تم استلام رسالتك بنجاح. سيتواصل معك فريق نفير الرقمي في غضون 24 ساعة.'
            : 'Thank you! Your message has been sent successfully. The NAFEER DIGITAL team will contact you within 24 hours.';
        }
        form.reset();
      })
      .catch(error => {
        // Fallback friendly message
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.textContent = isAr
            ? 'تم استلام طلبك بنجاح! يمكنك أيضاً التواصل معنا مباشرة عبر واتساب لرد فوري.'
            : 'Your enquiry has been received! You can also reach us directly via WhatsApp for immediate assistance.';
        }
        form.reset();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        if (feedback) {
          feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  // 6. FAQ Accordion
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          // Close others in same accordion
          faqItems.forEach(other => other.classList.remove('open'));
          if (!isOpen) {
            item.classList.add('open');
          }
        });
      }
    });
  }

  // DOMContentLoaded initialization
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initWhatsAppIntegration();
    initMobileNav();
    initHeaderScroll();
    initContactForm();
    initFAQ();
  });
})();
