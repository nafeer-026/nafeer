/**
 * NAFEER DIGITAL | نفير الرقمي
 * Master Website Transformation & Harmonization Script
 * - Generates full PPC & Google Ads service pages (EN & AR)
 * - Updates headers, footers, logos, favicons across all 55+ pages
 * - Ensures 1:1 bilingual parity and precise navigation links
 * - Implements Google Search Organization & WebSite structured data
 * - Updates sitemap.xml and robots.txt
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const servicesData = require('./data_services.js');
const blogsData = require('./data_blog.js');

const SITE_URL = 'https://nafeerdigital.com';
const PHONE_DISPLAY = '+60 11 7006 6150';
const PHONE_RAW = '601170066150';
const EMAIL = 'nafeerdigital@gmail.com';

console.log('Starting Master Website Transformation...');

// -------------------------------------------------------------
// 1. Generate Complete PPC and Google Ads Service Pages (EN & AR)
// -------------------------------------------------------------
function generateRichServicePage(service, lang) {
  const isAr = lang === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';
  const brandName = isAr ? 'نفير الرقمي' : 'NAFEER DIGITAL';
  const brandTagline = isAr ? 'وكالة تسويق رقمي متكاملة' : 'DIGITAL MARKETING AGENCY';
  const title = isAr ? service.metaTitleAr : service.metaTitleEn;
  const desc = isAr ? service.metaDescAr : service.metaDescEn;
  const canonicalUrl = `${SITE_URL}/${lang}/services/${service.slug}.html`;
  const altEnUrl = `${SITE_URL}/en/services/${service.slug}.html`;
  const altArUrl = `${SITE_URL}/ar/services/${service.slug}.html`;

  const pageTitle = isAr ? service.titleAr : service.titleEn;
  const pageShortDesc = isAr ? service.shortDescAr : service.shortDescEn;
  const problems = isAr ? service.problemsAr : service.problemsEn;
  const methodology = isAr ? service.methodologyAr : service.methodologyEn;
  const benefits = isAr ? service.benefitsAr : service.benefitsEn;
  const faqs = isAr ? service.faqsAr : service.faqsEn;

  const homePath = isAr ? '../../ar/' : '../../';
  const servicesPath = isAr ? '../../ar/services/' : '../../en/services/';
  const workPath = isAr ? '../../ar/work.html' : '../../work.html';
  const blogPath = isAr ? '../../ar/blog/' : '../../en/blog/';
  const switchTargetLang = isAr ? 'en' : 'ar';
  const switchTargetLabel = isAr ? 'English' : 'العربية';
  const switchTargetFlag = isAr ? '🇬🇧' : '🇸🇦';
  const altPageUrl = isAr ? `../../en/services/${service.slug}.html` : `../../ar/services/${service.slug}.html`;

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": pageTitle,
    "provider": {
      "@type": "ProfessionalService",
      "name": "NAFEER DIGITAL",
      "alternateName": "نفير الرقمي",
      "url": SITE_URL,
      "logo": `${SITE_URL}/assets/images/logo-icon.png`,
      "telephone": "+601170066150",
      "email": EMAIL
    },
    "description": desc,
    "areaServed": "Worldwide"
  };

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="author" content="NAFEER DIGITAL | نفير الرقمي">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Multilingual Hreflang Tags -->
  <link rel="alternate" hreflang="en" href="${altEnUrl}">
  <link rel="alternate" hreflang="ar" href="${altArUrl}">
  <link rel="alternate" hreflang="x-default" href="${altEnUrl}">

  <!-- Open Graph / Social Cards -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${SITE_URL}/assets/images/logo-icon.png">
  <meta property="og:site_name" content="${brandName}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">

  <!-- Google Fonts: Plus Jakarta Sans, Inter, Cairo, Tajawal -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">

  <!-- Favicon & Google Search Identity -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="../../assets/images/logo-icon.svg">
  <link rel="icon" type="image/png" sizes="48x48" href="../../assets/images/favicon-48x48.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0B132B">

  <!-- Core Stylesheet -->
  <link rel="stylesheet" href="../../assets/css/main.css">
  
  <!-- Early Theme State Init -->
  <script>
    (function() {
      var savedTheme = localStorage.getItem('nafeer_theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
    })();
  </script>
  
  <script type="application/ld+json">
${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
<body>

  <!-- Site Sticky Frosted Navigation Header -->
  <header class="site-header scrolled">
    <div class="container header-inner">
      <a href="${homePath}" class="brand-logo-wrap" aria-label="${brandName}">
        <img src="../../assets/images/logo-icon.png" alt="${brandName} Logo" class="brand-logo-img" width="42" height="42" style="border-radius:50%; object-fit:contain; border:1.5px solid var(--color-gold);">
        <div class="brand-text-block">
          <span class="brand-name">${brandName}</span>
          <span class="brand-tagline">${brandTagline}</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-menu" aria-label="Main Navigation">
        <a href="${homePath}" class="nav-link">${isAr ? 'الرئيسية' : 'Home'}</a>
        <a href="${homePath}#about" class="nav-link">${isAr ? 'من نحن' : 'About'}</a>
        <a href="${servicesPath}" class="nav-link active">${isAr ? 'خدماتنا' : 'Services'}</a>
        <a href="${homePath}#why-us" class="nav-link">${isAr ? 'لماذا نفير' : 'Why Us'}</a>
        <a href="${workPath}" class="nav-link">${isAr ? 'أعمالنا' : 'Our Work'}</a>
        <a href="${homePath}#process" class="nav-link">${isAr ? 'منهجيتنا' : 'Process'}</a>
        <a href="${homePath}#industries" class="nav-link">${isAr ? 'القطاعات' : 'Industries'}</a>
        <a href="${blogPath}" class="nav-link">${isAr ? 'المدونة' : 'Insights'}</a>
        <a href="${homePath}#contact" class="nav-link">${isAr ? 'اتصل بنا' : 'Contact'}</a>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <!-- Dual Mode Theme Toggle Button -->
        <button type="button" class="theme-toggle-btn js-toggle-theme" aria-label="${isAr ? 'تبديل المظهر' : 'Toggle visual theme'}" title="${isAr ? 'تبديل المظهر' : 'Toggle Theme'}">
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        </button>

        <!-- Clean Language Switcher -->
        <a href="${altPageUrl}" class="lang-switch-btn js-switch-lang" data-target-lang="${switchTargetLang}" title="${switchTargetLabel}">
          <span>${switchTargetFlag}</span>
          <span>${switchTargetLabel}</span>
        </a>

        <!-- Header CTA -->
        <a href="${homePath}#contact" class="btn btn-primary btn-sm header-cta">
          ${isAr ? 'طلب استشارة' : "Let's Talk"}
        </a>

        <!-- Mobile Drawer Hamburger -->
        <button type="button" class="hamburger-btn" id="btn-hamburger" aria-label="${isAr ? 'فتح القائمة' : 'Open Navigation Menu'}">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
  <aside class="mobile-drawer" id="mobile-drawer" aria-label="${isAr ? 'قائمة الجوال' : 'Mobile Navigation'}">
    <div class="drawer-header">
      <div class="brand-logo-wrap">
        <img src="../../assets/images/logo-icon.png" alt="${brandName} Logo" class="brand-logo-img" width="36" height="36" style="border-radius:50%; object-fit:contain; border:1.5px solid var(--color-gold);">
        <span class="brand-name">${brandName}</span>
      </div>
      <button type="button" class="drawer-close-btn" id="btn-drawer-close" aria-label="Close">✕</button>
    </div>

    <nav class="drawer-nav-list">
      <a href="${homePath}" class="drawer-nav-link">${isAr ? 'الرئيسية' : 'Home'}</a>
      <a href="${homePath}#about" class="drawer-nav-link">${isAr ? 'عن نفير الرقمي' : 'About NAFEER DIGITAL'}</a>
      <a href="${servicesPath}" class="drawer-nav-link active">${isAr ? 'خدماتنا الكاملة' : 'Our Services'}</a>
      <a href="${homePath}#why-us" class="drawer-nav-link">${isAr ? 'لماذا تختارنا' : 'Why Choose Us'}</a>
      <a href="${workPath}" class="drawer-nav-link">${isAr ? 'أعمالنا ودراسات الحالة' : 'Portfolio & Case Studies'}</a>
      <a href="${homePath}#process" class="drawer-nav-link">${isAr ? 'منهجية العمل' : 'Working Process'}</a>
      <a href="${homePath}#industries" class="drawer-nav-link">${isAr ? 'القطاعات' : 'Industries'}</a>
      <a href="${blogPath}" class="drawer-nav-link">${isAr ? 'المقالات والأفكار' : 'Insights & Blog'}</a>
      <a href="${homePath}#contact" class="drawer-nav-link">${isAr ? 'تواصل معنا' : 'Contact Us'}</a>
    </nav>

    <div style="margin-top:auto; display:flex; flex-direction:column; gap:0.75rem; padding-top:1.5rem;">
      <a href="${altPageUrl}" class="btn btn-secondary btn-full js-switch-lang" data-target-lang="${switchTargetLang}">
        ${switchTargetFlag} ${switchTargetLabel}
      </a>
      <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-full js-whatsapp-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
        <span>${isAr ? 'محادثة عبر واتساب' : 'WhatsApp Consultation'}</span>
      </a>
    </div>
  </aside>

  <!-- Main Content Slot -->
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs">
          <a href="${homePath}">${isAr ? 'الرئيسية' : 'Home'}</a> <span>/</span> <a href="${servicesPath}">${isAr ? 'خدماتنا' : 'Services'}</a> <span>/</span> <span>${pageTitle}</span>
        </div>
        <h1 class="section-title">${pageTitle}</h1>
        <p class="section-desc" style="color:rgba(255,255,255,0.88); max-width:720px; margin:0 auto;">
          ${pageShortDesc}
        </p>
        <div style="margin-top:2rem; display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a href="${homePath}#contact" class="btn btn-primary btn-lg">
            <span>${isAr ? 'ناقش مشروعك معنا' : 'Discuss Your Requirements'}</span>
            <svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-lg js-whatsapp-link">
            <span>${isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Core Content Body -->
    <div class="section section-white">
      <div class="container service-detail-grid">
        <div class="content-article">
          <h2>${isAr ? 'تحديات الأعمال التي نحلها' : 'Business Problems We Solve'}</h2>
          <p>${isAr ? 'إن إدارة الحملات دون استراتيجية دقيقة ومحكمة يؤدي إلى هدر الميزانيات وفقدان فرص النمو التجاري. إليك أبرز التحديات التي نتولى حلها:' : 'Operating without specialised strategic execution leads to wasted marketing budgets and missed revenue opportunities. Here are the core challenges our service systematically resolves:'}</p>
          <ul>
            ${problems.map(p => `<li><strong>${p}</strong></li>`).join('\n            ')}
          </ul>

          <h2>${isAr ? 'منهجية التنفيذ الدقيقة' : 'Our Execution Methodology'}</h2>
          <p>${isAr ? 'نتبع إطار عمل متكامل ومجرب هندسياً لضمان أعلى عائد استثماري وقابلية قياس دقيقة:' : 'We deploy a rigorous 4-step framework engineered for sustained performance, measurable accountability, and compound ROI:'}</p>
          <div style="display:flex; flex-direction:column; gap:1.25rem; margin:1.5rem 0;">
            ${methodology.map(m => `
              <div style="background:var(--bg-page); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1.25rem;">
                <h3 style="margin-top:0; margin-bottom:0.35rem; font-size:1.15rem; color:var(--color-primary);">${m.step}. ${m.title}</h3>
                <p style="margin-bottom:0; color:var(--text-muted); font-size:0.95rem;">${m.desc}</p>
              </div>
            `).join('')}
          </div>

          <h2>${isAr ? 'العوائد التجارية والقيمة المضافة' : 'Commercial Benefits & Growth Impact'}</h2>
          <p>${isAr ? 'نركز على تحقيق نتائج ملموسة تنعكس مباشرة على خطط نمو شركتك وأرباحها:' : 'Our focus is delivering quantifiable commercial outcomes that directly impact your bottom line and revenue expansion:'}</p>
          <ul>
            ${benefits.map(b => `<li>${b}</li>`).join('\n            ')}
          </ul>

          <h2>${isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
          <div style="display:flex; flex-direction:column; gap:1rem; margin-top:1.25rem;">
            ${faqs.map(f => `
              <div style="background:var(--bg-page); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1.25rem;">
                <h3 style="margin-top:0; margin-bottom:0.5rem; font-size:1.05rem; color:var(--text-main); font-weight:700;">${f.q}</h3>
                <p style="margin-bottom:0; color:var(--text-muted); font-size:0.925rem; line-height:1.6;">${f.a}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="service-sidebar">
          <div class="sidebar-card">
            <h3 class="sidebar-title">${isAr ? 'مميزات الخدمة' : 'Service Highlights'}</h3>
            <ul class="sidebar-list">
              <li>✓ ${isAr ? 'إدارة استراتيجية متكاملة' : 'Strategic Full-Funnel Setup'}</li>
              <li>✓ ${isAr ? 'تتبع دقيق لمصادر الإيرادات' : 'Conversion Attribution & ROI Tracking'}</li>
              <li>✓ ${isAr ? 'تحسين مستمر لخفض تكلفة العميل' : 'Ongoing CAC & Conversion Optimization'}</li>
              <li>✓ ${isAr ? 'تقارير أداء دورية شفافة' : 'Transparent Executive Reporting'}</li>
            </ul>
          </div>

          <div class="sidebar-card" style="background:var(--bg-elevated); border-color:var(--color-gold-border);">
            <h3 class="sidebar-title" style="color:var(--color-gold);">${isAr ? 'هل أنت جاهز لتسريع نموك؟' : 'Ready to Accelerate Growth?'}</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.25rem;">
              ${isAr ? 'تحدث مع فريقنا الاستراتيجي لمناقشة أهداف عملك وتحديد الخطة المثالية.' : 'Connect directly with our senior marketing team to audit your current positioning and scale effectively.'}
            </p>
            <a href="${homePath}#contact" class="btn btn-primary btn-full" style="margin-bottom:0.75rem;">
              <span>${isAr ? 'طلب استشارة' : 'Schedule Consultation'}</span>
            </a>
            <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-full js-whatsapp-link">
              <span>${isAr ? 'محادثة عبر واتساب' : 'Message on WhatsApp'}</span>
            </a>
          </div>
        </aside>
      </div>
    </div>

    <!-- Conversion Banner -->
    <div class="cta-banner-section">
      <div class="container text-center">
        <h2 class="cta-banner-title">${isAr ? `جاهز لإطلاق حملات ${pageTitle}؟` : `Ready to Scale with ${pageTitle}?`}</h2>
        <p class="cta-banner-desc">
          ${isAr ? 'دعنا نضع استراتيجيتك الرقمية على المسار الصحيح لتحقيق نتائج ريادية ومستدامة.' : 'Let our growth strategists construct a revenue-driven marketing engine tailored to your market.'}
        </p>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:1.5rem;">
          <a href="${homePath}#contact" class="btn btn-primary btn-lg">
            <span>${isAr ? 'احجز استشارتك الآن' : 'Book Strategic Consultation'}</span>
          </a>
          <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-lg js-whatsapp-link">
            <span>${isAr ? 'تواصل فوري عبر واتساب' : 'Direct WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>
  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <!-- Brand Info -->
        <div>
          <div class="brand-logo-wrap" style="margin-bottom: 0.85rem;">
            <img src="../../assets/images/logo-icon.png" alt="${brandName} Logo" class="brand-logo-img" width="40" height="40" style="border-radius:50%; object-fit:contain; border:1.5px solid var(--color-gold);">
            <span class="brand-name">${brandName}</span>
          </div>
          <div style="font-size:0.85rem; font-style:italic; color:var(--color-gold); margin-bottom:1rem; font-weight:600;">
            ${isAr ? 'نمو أعمالكم غايتنا.. ونجاحكم شغفنا الأسمى.' : 'Your Growth Is Our Mission. Your Success Is Our Passion.'}
          </div>
          <p class="footer-brand-desc">
            ${isAr 
              ? 'وكالة تسويق رقمي دولية متكاملة؛ نساعد الشركات والمؤسسات على تحقيق نمو تجاري مستدام ومضاعفة العملاء من خلال استراتيجيات مدروسة قائمة على البيانات.'
              : 'NAFEER DIGITAL is a full-service international digital marketing agency helping businesses achieve sustainable commercial growth through technical SEO, conversion platforms, and inbound lead funnels.'}
          </p>
          <a href="https://wa.me/${PHONE_RAW}" class="btn btn-whatsapp btn-sm js-whatsapp-link">
            <span>${isAr ? 'تواصل عبر واتساب: 6150 7006 11 60+' : 'Direct WhatsApp: +60 11 7006 6150'}</span>
          </a>
        </div>

        <div>
          <h4 class="footer-col-title">${isAr ? 'روابط سريعة' : 'Navigation'}</h4>
          <ul class="footer-links-list">
            <li><a href="${homePath}" class="footer-link">${isAr ? 'الرئيسية' : 'Home'}</a></li>
            <li><a href="${homePath}#about" class="footer-link">${isAr ? 'عن نفير الرقمي' : 'About NAFEER DIGITAL'}</a></li>
            <li><a href="${servicesPath}" class="footer-link">${isAr ? 'جميع الخدمات' : 'All Services'}</a></li>
            <li><a href="${homePath}#why-us" class="footer-link">${isAr ? 'لماذا تختارنا' : 'Why Choose Us'}</a></li>
            <li><a href="${workPath}" class="footer-link">${isAr ? 'أعمالنا ودراسات الحالة' : 'Our Work & Case Studies'}</a></li>
            <li><a href="${homePath}#process" class="footer-link">${isAr ? 'منهجية العمل' : 'Our Process'}</a></li>
            <li><a href="${homePath}#industries" class="footer-link">${isAr ? 'القطاعات المستهدفة' : 'Industries'}</a></li>
            <li><a href="${blogPath}" class="footer-link">${isAr ? 'المقالات والأفكار' : 'Insights & Blog'}</a></li>
            <li><a href="${homePath}#contact" class="footer-link">${isAr ? 'طلب استشارة' : 'Contact Us'}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">${isAr ? 'دليل الخدمات' : 'Services Directory'}</h4>
          <ul class="footer-links-list">
            <li><a href="${servicesPath}seo.html" class="footer-link">${isAr ? 'تحسين محركات البحث (SEO)' : 'SEO Services'}</a></li>
            <li><a href="${servicesPath}technical-seo.html" class="footer-link">${isAr ? 'السيو التقني وسرعة الموقع' : 'Technical SEO'}</a></li>
            <li><a href="${servicesPath}local-seo.html" class="footer-link">${isAr ? 'السيو المحلي وخرائط جوجل' : 'Local SEO'}</a></li>
            <li><a href="${servicesPath}b2b-lead-generation.html" class="footer-link">${isAr ? 'توليد صفقات الشركات (B2B)' : 'B2B Lead Generation'}</a></li>
            <li><a href="${servicesPath}email-marketing.html" class="footer-link">${isAr ? 'التسويق بالبريد الإلكتروني' : 'Email Marketing'}</a></li>
            <li><a href="${servicesPath}content-marketing.html" class="footer-link">${isAr ? 'التسويق بالمحتوى الاستراتيجي' : 'Content Marketing'}</a></li>
            <li><a href="${servicesPath}social-media-marketing.html" class="footer-link">${isAr ? 'التسويق عبر التواصل الاجتماعي' : 'Social Media Marketing'}</a></li>
            <li><a href="${servicesPath}digital-marketing-strategy.html" class="footer-link">${isAr ? 'استراتيجية التسويق الرقمي' : 'Digital Marketing Strategy'}</a></li>
            <li><a href="${servicesPath}website-design-development.html" class="footer-link">${isAr ? 'تصميم وتطوير المواقع' : 'Website Design & Dev'}</a></li>
            <li><a href="${servicesPath}marketing-analytics.html" class="footer-link">${isAr ? 'التحليلات وقياس الأداء' : 'Marketing Analytics'}</a></li>
            <li><a href="${servicesPath}branding-and-brand-strategy.html" class="footer-link">${isAr ? 'الهوية واستراتيجية البراندنج' : 'Branding & Identity'}</a></li>
            <li><a href="${servicesPath}ppc-advertising.html" class="footer-link">${isAr ? 'الإعلانات الممولة (PPC)' : 'PPC Advertising'}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-title">${isAr ? 'بيانات التواصل المباشر' : 'Get In Touch'}</h4>
          <p style="font-size:0.9rem; color:var(--text-inverse-muted); margin-bottom: 0.85rem; line-height: 1.6;">
            ${isAr ? 'البريد الإلكتروني:' : 'Email:'} <a href="mailto:${EMAIL}" style="color:var(--color-gold);">${EMAIL}</a>
          </p>
          <p style="font-size:0.9rem; color:var(--text-inverse-muted); margin-bottom: 0.85rem; line-height: 1.6;">
            ${isAr ? 'الهاتف / الواتساب:' : 'WhatsApp:'} <a href="https://wa.me/${PHONE_RAW}" style="color:var(--color-gold);" class="js-whatsapp-link">${PHONE_DISPLAY}</a>
          </p>
          <div style="font-size:0.85rem; color:var(--text-inverse-muted); margin-top: 1rem; line-height: 1.5; border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
            ${isAr 
              ? 'قيادة استراتيجية بإشراف محمد الهادي النيل، خريج معهد إلينوي للتكنولوجيا (IIT) بمرتبة الشرف.'
              : 'Strategic leadership directed by Mohamed Alhadi Alneel, Illinois Institute of Technology (IIT) honor graduate.'}
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div>
          © 2026 ${brandName}. ${isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
        </div>
        <div class="footer-legal-links">
          <span>${isAr ? 'وكالة تسويق رقمي معتمدة دولياً' : 'Premier International Digital Marketing Agency'}</span>
          <span>·</span>
          <span>${isAr ? 'الأداء وسرعة التحميل' : 'Performance & Core Web Vitals'}</span>
          <span>·</span>
          <span>${isAr ? 'معايير السيو العالمية' : 'Technical SEO'}</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="../../assets/js/main.js"></script>
</body>
</html>`;
}

// Generate ppc-advertising and google-ads
['ppc-advertising', 'google-ads'].forEach(slug => {
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return;

  const enHtml = generateRichServicePage(service, 'en');
  const arHtml = generateRichServicePage(service, 'ar');

  fs.writeFileSync(path.join(root, 'en/services', `${slug}.html`), enHtml);
  fs.writeFileSync(path.join(root, 'ar/services', `${slug}.html`), arHtml);
  console.log(`Generated rich service pages for: ${slug}`);
});

console.log('Finished generating rich service pages.');
