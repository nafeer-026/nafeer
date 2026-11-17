/**
 * Complete Static Site Generator for NAFEER DIGITAL | نفير الرقمي
 * Generates all pages, bilingual routes, schema markup, SEO tags, sitemaps
 */

const fs = require('fs');
const path = require('path');

const services = require('./data_services.js');
const blogs = require('./data_blog.js');

const SITE_URL = 'https://nafeer-sigma.vercel.app';
const PHONE_DISPLAY = '+60 11 7006 6150';
const PHONE_RAW = '601170066150';
const EMAIL_MAIN = 'nafeerdigital@gmail.com';
const EMAIL_MGR = 'nafeerdigital@gmail.com';

// Ensure all output folders exist
const dirsToEnsure = [
  'en', 'en/services', 'en/blog',
  'ar', 'ar/services', 'ar/blog'
];
dirsToEnsure.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Common SVGs
const iconCheck = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const iconArrowRight = `<svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
const iconArrowLeft = `<svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;
const iconWhatsApp = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>`;
const iconPhone = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
const iconMail = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
const iconTheme = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`;

// Base Document Shell Generator
function renderDocument({
  lang = 'en',
  title,
  description,
  canonicalUrl,
  alternateEnUrl,
  alternateArUrl,
  content,
  schemaJson = null,
  assetPrefix = ''
}) {
  const isAr = lang === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';
  const brandName = isAr ? 'نفير الرقمي' : 'NAFEER DIGITAL';
  const brandSlogan = isAr ? 'نموّك مهمتنا، ونجاحك شغفنا.' : 'Your Growth Is Our Mission. Your Success Is Our Passion.';
  const homeUrl = isAr ? `${assetPrefix}ar/` : `${assetPrefix}`;
  const servicesUrl = isAr ? `${assetPrefix}ar/services/` : `${assetPrefix}en/services/`;
  const blogUrl = isAr ? `${assetPrefix}ar/blog/` : `${assetPrefix}en/blog/`;
  const contactUrl = `${homeUrl}#contact`;
  const aboutUrl = `${homeUrl}#about`;
  const portfolioUrl = `${homeUrl}#portfolio`;

  // Language switch targets
  const switchTargetLang = isAr ? 'en' : 'ar';
  const switchTargetLabel = isAr ? 'English' : 'العربية';
  const switchTargetFlag = isAr ? '🇬🇧' : '🇲🇾';

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" data-theme="signature" data-mood="professional" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="author" content="NAFEER DIGITAL | نفير الرقمي">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Multilingual Hreflang Tags -->
  <link rel="alternate" hreflang="en" href="${alternateEnUrl}">
  <link rel="alternate" hreflang="ar" href="${alternateArUrl}">
  <link rel="alternate" hreflang="x-default" href="${alternateEnUrl}">

  <!-- Open Graph / Social Cards -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${SITE_URL}/assets/images/hero-map.jpg">
  <meta property="og:site_name" content="${brandName}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <!-- Google Fonts: Plus Jakarta Sans & Cairo -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">

  <!-- Core Stylesheet -->
  <link rel="stylesheet" href="${assetPrefix}assets/css/main.css">
  
  ${schemaJson ? `<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n</script>` : ''}
</head>
<body>

  <!-- Site Sticky Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="${homeUrl}" class="brand-logo-wrap" aria-label="${brandName}">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <div class="brand-text-block">
          <span class="brand-name">${brandName}</span>
          <span class="brand-tagline">${isAr ? 'وكالة تسويق رقمي متكاملة' : 'DIGITAL MARKETING AGENCY'}</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-menu" aria-label="Main Navigation">
        <a href="${homeUrl}" class="nav-link">${isAr ? 'الرئيسية' : 'Home'}</a>
        <a href="${aboutUrl}" class="nav-link">${isAr ? 'من نحن' : 'About Us'}</a>
        <a href="${servicesUrl}" class="nav-link">${isAr ? 'خدماتنا' : 'Services'}</a>
        <a href="${portfolioUrl}" class="nav-link">${isAr ? 'أعمالنا' : 'Portfolio'}</a>
        <a href="${blogUrl}" class="nav-link">${isAr ? 'المدونة' : 'Blog'}</a>
        <a href="${contactUrl}" class="nav-link">${isAr ? 'اتصل بنا' : 'Contact'}</a>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <!-- Language Switcher Button -->
        <a href="#" class="lang-switch-btn js-switch-lang" data-target-lang="${switchTargetLang}" title="${isAr ? 'Switch to English' : 'التحويل إلى العربية'}">
          <span>${switchTargetFlag}</span>
          <span>${switchTargetLabel}</span>
        </a>

        <!-- Theme Customizer Trigger -->
        <button type="button" class="theme-trigger-btn js-open-theme-panel" title="${isAr ? 'تخصيص المظهر' : 'Customize Theme'}">
          ${iconTheme}
          <span class="sr-only">${isAr ? 'تخصيص المظهر' : 'Theme'}</span>
        </button>

        <!-- Header CTA -->
        <a href="${contactUrl}" class="btn btn-primary btn-sm" style="display:none; @media(min-width:640px){display:inline-flex;}">
          ${isAr ? 'ابدأ الآن' : "Let's Talk"}
        </a>

        <!-- Mobile Hamburger Trigger -->
        <button type="button" class="hamburger-btn" id="btn-hamburger" aria-label="${isAr ? 'القائمة' : 'Menu'}">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
  <aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation">
    <div class="drawer-header">
      <div class="brand-logo-wrap">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <span class="brand-name">${brandName}</span>
      </div>
      <button type="button" class="drawer-close-btn" id="btn-drawer-close" aria-label="Close">✕</button>
    </div>

    <nav class="drawer-nav-list">
      <a href="${homeUrl}" class="drawer-nav-link">${isAr ? 'الرئيسية' : 'Home'}</a>
      <a href="${aboutUrl}" class="drawer-nav-link">${isAr ? 'عن نفير الرقمي' : 'About NAFEER DIGITAL'}</a>
      <a href="${servicesUrl}" class="drawer-nav-link">${isAr ? 'خدماتنا الكاملة' : 'Our Services'}</a>
      <a href="${portfolioUrl}" class="drawer-nav-link">${isAr ? 'أعمالنا ودراسات الحالة' : 'Portfolio & Work'}</a>
      <a href="${blogUrl}" class="drawer-nav-link">${isAr ? 'المقالات والمدونة' : 'Insights & Blog'}</a>
      <a href="${contactUrl}" class="drawer-nav-link">${isAr ? 'تواصل معنا' : 'Contact Us'}</a>
    </nav>

    <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.75rem;">
      <a href="#" class="btn btn-secondary btn-full js-switch-lang" data-target-lang="${switchTargetLang}">
        ${switchTargetFlag} ${isAr ? 'Switch to English' : 'التحويل إلى العربية'}
      </a>
      <button type="button" class="btn btn-secondary btn-full js-open-theme-panel">
        ${iconTheme} ${isAr ? 'تخصيص الثيم والمظهر' : 'Theme & Mood Customizer'}
      </button>
      <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-full js-whatsapp-link">
        ${iconWhatsApp} ${isAr ? 'تواصل فوري عبر واتساب' : 'Chat on WhatsApp'}
      </a>
    </div>
  </aside>

  <!-- Main Content Slot -->
  <main>
    ${content}
  </main>

  <!-- Floating Quick Actions -->
  <div class="floating-actions">
    <a href="https://wa.me/${PHONE_RAW}" class="floating-btn floating-whatsapp js-whatsapp-link" title="${isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}" aria-label="WhatsApp">
      ${iconWhatsApp}
    </a>
    <button type="button" class="floating-btn floating-theme js-open-theme-panel" title="${isAr ? 'تخصيص المظهر' : 'Theme Customizer'}" aria-label="Theme Customizer">
      ${iconTheme}
    </button>
  </div>

  <!-- Interactive Theme & Mood Customizer Drawer -->
  <div class="theme-panel-overlay" id="theme-panel-overlay"></div>
  <aside class="theme-panel" id="theme-panel" aria-label="Website Theme Customizer">
    <div class="theme-panel-header">
      <h3 class="theme-panel-title">
        ${iconTheme}
        <span>${isAr ? 'مخصص المظهر والألوان' : 'Theme & Mood Customizer'}</span>
      </h3>
      <button type="button" class="drawer-close-btn js-close-theme-panel" aria-label="Close">✕</button>
    </div>

    <!-- Ready-Made Color Themes -->
    <div class="theme-panel-section">
      <h4 class="theme-section-title">${isAr ? '1. الثيمات الجاهزة' : '1. Ready-Made Themes'}</h4>
      <div class="theme-presets-grid">
        <button type="button" class="theme-preset-btn active" data-theme-val="signature">
          <span class="preset-swatch" style="background:#781E28;"></span>
          <span>${isAr ? 'نفير الأصلي' : 'NAFEER Signature'}</span>
        </button>
        <button type="button" class="theme-preset-btn" data-theme-val="midnight">
          <span class="preset-swatch" style="background:#0F172A;"></span>
          <span>${isAr ? 'منتصف الليل' : 'Midnight Pro'}</span>
        </button>
        <button type="button" class="theme-preset-btn" data-theme-val="luxury">
          <span class="preset-swatch" style="background:#121212;"></span>
          <span>${isAr ? 'الفخامة الملكية' : 'Royal Luxury'}</span>
        </button>
        <button type="button" class="theme-preset-btn" data-theme-val="ocean">
          <span class="preset-swatch" style="background:#0C4A6E;"></span>
          <span>${isAr ? 'الأزرق البحري' : 'Ocean Blue'}</span>
        </button>
        <button type="button" class="theme-preset-btn" data-theme-val="minimal">
          <span class="preset-swatch" style="background:#1E293B;"></span>
          <span>${isAr ? 'مينيمال عصري' : 'Modern Minimal'}</span>
        </button>
        <button type="button" class="theme-preset-btn" data-theme-val="emerald">
          <span class="preset-swatch" style="background:#064E3B;"></span>
          <span>${isAr ? 'الزمرد الراقي' : 'Emerald Premium'}</span>
        </button>
      </div>
    </div>

    <!-- Mood Selection -->
    <div class="theme-panel-section">
      <h4 class="theme-section-title">${isAr ? '2. المزاج البصري والأسلوب' : '2. Visual Mood'}</h4>
      <div class="mood-options-grid">
        <button type="button" class="mood-btn active" data-mood-val="professional">${isAr ? 'مهني / مؤسسي' : 'Professional'}</button>
        <button type="button" class="mood-btn" data-mood-val="luxury">${isAr ? 'فاخر وأنيق' : 'Luxury'}</button>
        <button type="button" class="mood-btn" data-mood-val="modern">${isAr ? 'عصري وناعم' : 'Modern'}</button>
        <button type="button" class="mood-btn" data-mood-val="minimal">${isAr ? 'مقتضب ومباشر' : 'Minimal'}</button>
        <button type="button" class="mood-btn" data-mood-val="dark">${isAr ? 'داكن هادئ' : 'Dark Mood'}</button>
      </div>
    </div>

    <!-- Light / Dark Mode -->
    <div class="theme-panel-section">
      <h4 class="theme-section-title">${isAr ? '3. الوضع الليلي / النهاري' : '3. Light / Dark Mode'}</h4>
      <div class="mode-toggle-grid">
        <button type="button" class="mode-btn active" data-mode-val="light">☀️ ${isAr ? 'الوضع النهاري' : 'Light Mode'}</button>
        <button type="button" class="mode-btn" data-mode-val="dark">🌙 ${isAr ? 'الوضع الليلي' : 'Dark Mode'}</button>
      </div>
    </div>

    <!-- Custom Color Selection -->
    <div class="theme-panel-section">
      <h4 class="theme-section-title">${isAr ? '4. اختيار ألوان مخصصة' : '4. Custom Colors'}</h4>
      <div class="color-picker-row">
        <span class="color-picker-label">${isAr ? 'اللون الأساسي' : 'Primary Color'}</span>
        <input type="color" id="picker-primary" class="color-picker-input" value="#781E28">
      </div>
      <div class="color-picker-row">
        <span class="color-picker-label">${isAr ? 'اللون الثانوي' : 'Secondary Color'}</span>
        <input type="color" id="picker-secondary" class="color-picker-input" value="#32131B">
      </div>
      <div class="color-picker-row">
        <span class="color-picker-label">${isAr ? 'لون التمييز (الذهبي)' : 'Accent Color'}</span>
        <input type="color" id="picker-accent" class="color-picker-input" value="#C69A35">
      </div>
      <div class="color-picker-row">
        <span class="color-picker-label">${isAr ? 'لون الخلفية' : 'Background Color'}</span>
        <input type="color" id="picker-bg" class="color-picker-input" value="#F8F5F1">
      </div>
    </div>

    <button type="button" class="theme-reset-btn" id="btn-reset-theme">
      ↺ ${isAr ? 'إعادة ضبط المظهر الافتراضي' : 'Reset to Official Default'}
    </button>
  </aside>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand-col">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <div class="footer-slogan">${brandSlogan}</div>
        <p class="footer-desc">
          ${isAr 
            ? 'وكالة نفير الرقمي للتسويق الرقمي المتكامل؛ نساعد الشركات والمؤسسات في ماليزيا والأسواق العالمية على تحقيق نمو تجاري مستدام ومضاعفة العملاء من خلال استراتيجيات مدروسة قائمة على البيانات.'
            : 'NAFEER DIGITAL is a full-service digital marketing agency helping businesses in Malaysia and global markets achieve sustainable growth, capture qualified leads, and build dominant search authority.'}
        </p>
        <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-sm js-whatsapp-link">
          ${iconWhatsApp} ${isAr ? 'محادثة مباشرة عبر واتساب' : 'Message on WhatsApp'}
        </a>
      </div>

      <div>
        <h4 class="footer-heading">${isAr ? 'روابط سريعة' : 'Navigation'}</h4>
        <nav class="footer-nav">
          <a href="${homeUrl}">${isAr ? 'الرئيسية' : 'Home'}</a>
          <a href="${aboutUrl}">${isAr ? 'عن نفير الرقمي' : 'About NAFEER'}</a>
          <a href="${servicesUrl}">${isAr ? 'خدمات التسويق' : 'All Services'}</a>
          <a href="${portfolioUrl}">${isAr ? 'سجل الأعمال ودراسات الحالة' : 'Portfolio'}</a>
          <a href="${blogUrl}">${isAr ? 'المدونة ومقالات النمو' : 'Blog Articles'}</a>
          <a href="${contactUrl}">${isAr ? 'طلب استشارة ومشروع' : 'Contact Us'}</a>
        </nav>
      </div>

      <div>
        <h4 class="footer-heading">${isAr ? 'خدماتنا' : 'Core Services'}</h4>
        <nav class="footer-nav">
          ${services.slice(0, 6).map(s => `
            <a href="${isAr ? `${assetPrefix}ar/services/${s.slug}.html` : `${assetPrefix}en/services/${s.slug}.html`}">
              ${isAr ? s.titleAr : s.titleEn}
            </a>
          `).join('')}
        </nav>
      </div>

      <div>
        <h4 class="footer-heading">${isAr ? 'بيانات التواصل' : 'Get In Touch'}</h4>
        <div class="footer-contact-list">
          <div class="footer-contact-item">
            ${iconPhone}
            <div>
              <div style="font-size:0.75rem; color:var(--text-light);">${isAr ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}</div>
              <a href="tel:+${PHONE_RAW}" style="color:#FFFFFF; font-weight:700;">${PHONE_DISPLAY}</a>
            </div>
          </div>
          <div class="footer-contact-item">
            ${iconMail}
            <div>
              <div style="font-size:0.75rem; color:var(--text-light);">${isAr ? 'الاستفسارات العامة' : 'General Enquiries'}</div>
              <a href="mailto:${EMAIL_MAIN}" style="color:#FFFFFF;">${EMAIL_MAIN}</a>
            </div>
          </div>
          <div class="footer-contact-item">
            ${iconMail}
            <div>
              <div style="font-size:0.75rem; color:var(--text-light);">${isAr ? 'الإدارة المباشرة' : 'Manager Direct'}</div>
              <a href="mailto:${EMAIL_MGR}" style="color:#FFFFFF;">${EMAIL_MGR}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <div>
        © 2026 ${brandName}. ${isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
      </div>
      <div>
        ${isAr ? 'تم التطوير وفق أعلى معايير الأداء والسرعة والسيو.' : 'Engineered for Performance, Mobile Usability & Technical SEO.'}
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="${assetPrefix}assets/js/theme-customizer.js"></script>
  <script src="${assetPrefix}assets/js/main.js"></script>
</body>
</html>`;
}

// Export renderDocument
module.exports = {
  renderDocument,
  services,
  blogs,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  EMAIL_MAIN,
  EMAIL_MGR,
  iconCheck,
  iconArrowRight,
  iconArrowLeft,
  iconWhatsApp,
  iconPhone,
  iconMail
};
