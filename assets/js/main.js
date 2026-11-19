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
  const WHATSAPP_MSG_EN = "Hello NAFEER DIGITAL, I'd like to discuss growing my business through SEO, website design, and digital content.";
  const WHATSAPP_MSG_AR = "مرحباً نفير الرقمي، أود مناقشة تنمية عملي من خلال تحسين محركات البحث وتصميم المواقع والمحتوى الرقمي.";

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
          if (currentPath === '/' || currentPath === '' || currentPath === '/index.html') {
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
          if (currentPath === '/ar/' || currentPath === '/ar' || currentPath === '/ar/index.html') {
            targetUrl = '/';
          } else if (currentPath.includes('/ar/')) {
            targetUrl = currentPath.replace('/ar/', '/en/');
          } else {
            targetUrl = currentPath.includes('/en/') ? currentPath : '/';
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
            ? 'شكراً لتواصلك معنا! تم استلام طلبك وسيتواصل معك خبير استراتيجي خلال 24 ساعة عمل.'
            : 'Thank you for reaching out! Your request has been received. A senior growth strategist will contact you within 24 hours.';
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

  // 11. Corporate Video Showreel Modal (Zero Lag, Lazy-Loaded)
  function initCorporateVideoModal() {
    const modal = document.getElementById('corporate-video-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('#cinema-close-btn');
    const videoWrap = modal.querySelector('#cinema-video-wrap');
    const triggers = document.querySelectorAll('.js-open-video-modal');

    function openVideoModal() {
      if (videoWrap && !videoWrap.querySelector('video') && !videoWrap.querySelector('iframe')) {
        // High-definition responsive HTML5 agency showreel video player with custom ambient branding
        videoWrap.innerHTML = `
          <video id="cinema-player" controls autoplay playsinline style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" poster="assets/images/case-study-tako-digital-marketing.jpg">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-34563-large.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const player = modal.querySelector('#cinema-player');
      if (player) {
        player.currentTime = 0;
        player.play().catch(() => {});
      }
    }

    function closeVideoModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      const player = modal.querySelector('#cinema-player');
      if (player) {
        player.pause();
      }
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openVideoModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVideoModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeVideoModal();
      }
    });
  }

  // 12. Interactive Accordion Service Architecture
  function initInteractiveAccordions() {
    const accordionCards = document.querySelectorAll('.accordion-service-card');
    if (!accordionCards.length) return;

    accordionCards.forEach(card => {
      const header = card.querySelector('.accordion-service-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        // Toggle current card
        card.classList.toggle('open', !isOpen);
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
    initCorporateVideoModal();
    initInteractiveAccordions();
  });
})();
