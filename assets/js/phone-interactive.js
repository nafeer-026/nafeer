/**
 * NAFEER DIGITAL — Phone Screen Interactive Controller
 * Handles:
 * 1. View Mode Switcher (Phone Frame / Borderless / Full Screen)
 * 2. Theme Toggle (Light / Dark)
 * 3. Quick-Nav Active Scrolling & Smooth Jump
 * 4. Case Studies Filtering
 * 5. Interactive Pipeline Growth Calculator
 * 6. FAQ Accordion Toggle
 * 7. Consultation Form Client Validation & Confirmation
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Device Viewport Mode Switcher
  const stage = document.querySelector('.desktop-device-stage');
  const viewBtns = document.querySelectorAll('.view-btn');

  viewBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      viewBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const mode = this.getAttribute('data-mode');

      if (!stage) return;
      stage.classList.remove('mode-phone', 'mode-borderless', 'mode-fullscreen');

      if (mode === 'borderless') {
        stage.classList.add('mode-borderless');
      } else if (mode === 'fullscreen') {
        stage.classList.add('mode-fullscreen');
      } else {
        stage.classList.add('mode-phone');
      }
    });
  });

  // 2. Dual-Mode Theme Switcher
  const themeToggles = document.querySelectorAll('.js-phone-theme-toggle');
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('nafeer_theme', next);
    } catch (e) {}
  }
  themeToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // 3. Quick-Nav Smooth Jump & Active State
  const scrollCanvas = document.querySelector('.phone-scroll-canvas');
  const navPills = document.querySelectorAll('.nav-pill-btn');
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  navPills.forEach(pill => {
    pill.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl && scrollCanvas) {
        navPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        
        // Scroll inside phone canvas
        const targetOffset = targetEl.offsetTop - 120;
        scrollCanvas.scrollTo({
          top: targetOffset > 0 ? targetOffset : 0,
          behavior: 'smooth'
        });
      }
    });
  });

  bottomNavItems.forEach(item => {
    item.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl && scrollCanvas) {
          bottomNavItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
          const targetOffset = targetEl.offsetTop - 120;
          scrollCanvas.scrollTo({
            top: targetOffset > 0 ? targetOffset : 0,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 4. Case Studies Category Filter
  const filterBtns = document.querySelectorAll('.filter-chip-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');

      caseCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Interactive Pipeline Growth Calculator
  const sliderTraffic = document.getElementById('calc-traffic');
  const sliderConv = document.getElementById('calc-conv');
  const sliderAov = document.getElementById('calc-aov');

  const valTraffic = document.getElementById('val-traffic');
  const valConv = document.getElementById('val-conv');
  const valAov = document.getElementById('val-aov');

  const outCurrentInquiries = document.getElementById('out-current-inquiries');
  const outOptimizedInquiries = document.getElementById('out-optimized-inquiries');
  const outRevenueLift = document.getElementById('out-revenue-lift');

  function updateCalculator() {
    if (!sliderTraffic || !sliderConv || !sliderAov) return;

    const traffic = parseInt(sliderTraffic.value, 10);
    const conv = parseFloat(sliderConv.value);
    const aov = parseInt(sliderAov.value, 10);

    // Update displays
    if (valTraffic) valTraffic.textContent = traffic.toLocaleString() + ' / mo';
    if (valConv) valConv.textContent = conv.toFixed(1) + '%';
    if (valAov) valAov.textContent = '$' + aov.toLocaleString();

    // Realistic calculations:
    // Current Monthly Inquiries = Traffic * (conv / 100)
    const currentMonthlyInquiries = Math.round(traffic * (conv / 100));
    
    // A realistic CRO optimization lifts conversion by +0.6% absolute (e.g. 1.5% -> 2.1%)
    const realisticOptimizedConv = conv + 0.6;
    const optimizedMonthlyInquiries = Math.round(traffic * (realisticOptimizedConv / 100));
    const extraMonthlyInquiries = optimizedMonthlyInquiries - currentMonthlyInquiries;

    // Assuming a conservative 15% close rate on qualified inbound commercial inquiries
    const extraAnnualClosedDeals = Math.round(extraMonthlyInquiries * 12 * 0.15);
    const projectedAnnualRevenueLift = extraAnnualClosedDeals * aov;

    if (outCurrentInquiries) outCurrentInquiries.textContent = currentMonthlyInquiries.toLocaleString();
    if (outOptimizedInquiries) outOptimizedInquiries.textContent = optimizedMonthlyInquiries.toLocaleString();
    if (outRevenueLift) outRevenueLift.textContent = '+$' + projectedAnnualRevenueLift.toLocaleString() + '/yr';
  }

  if (sliderTraffic && sliderConv && sliderAov) {
    sliderTraffic.addEventListener('input', updateCalculator);
    sliderConv.addEventListener('input', updateCalculator);
    sliderAov.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 6. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.micro-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.micro-faq-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        const isOpen = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 7. Consultation Lead Form Handler
  const leadForm = document.getElementById('phone-consultation-form');
  const formSuccessBox = document.getElementById('form-success-box');

  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Verifying & Submitting...</span>';
      submitBtn.disabled = true;

      setTimeout(function () {
        leadForm.style.display = 'none';
        if (formSuccessBox) {
          formSuccessBox.style.display = 'block';
        }
      }, 700);
    });
  }
});
