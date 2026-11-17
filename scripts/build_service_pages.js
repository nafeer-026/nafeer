const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const origin = 'https://nafeer-sigma.vercel.app';

const emailContent = {
  en: {
    title: 'Email Marketing',
    metaTitle: 'Email Marketing Services | NAFEER DIGITAL',
    description: 'Plan and write useful email campaigns, newsletters, and customer follow-ups with NAFEER DIGITAL.',
    label: 'Email marketing',
    hero: 'Keep useful conversations going.',
    intro: 'Email is a direct way to share relevant updates, helpful content, and timely follow-ups with people who have chosen to hear from your business.',
    section: 'Email that earns its place in the customer journey.',
    body: 'We help plan and create email communication around your audience and business goals—from campaign copy to practical follow-up sequences.',
    deliverablesTitle: 'What we can help with',
    deliverables: [
      'Email campaign and newsletter planning.',
      'Clear copy for product updates, launches, and customer education.',
      'Welcome and follow-up sequences aligned with your customer journey.',
      'A simple review of engagement and next-step opportunities.'
    ],
    processTitle: 'A practical starting point',
    process: [
      ['01', 'Understand', 'Clarify the audience, purpose, and action each email should support.'],
      ['02', 'Plan', 'Choose the message, format, and appropriate sending cadence.'],
      ['03', 'Create', 'Write and organize the campaign content for review.'],
      ['04', 'Learn', 'Review the response and use it to shape the next communication.']
    ],
    sidebarTitle: 'Have an email project in mind?',
    sidebarText: 'Tell us about your audience, current mailing list, and what you want the communication to achieve.',
    cta: 'Discuss email marketing',
    wa: 'Chat on WhatsApp',
    home: 'Home',
    services: 'Services',
    work: 'Our Work',
    insights: 'Insights',
    contact: 'Let’s talk',
    switch: 'العربية',
    footerText: 'Search, websites, and digital content—connected to help businesses grow.'
  },
  ar: {
    title: 'التسويق بالبريد الإلكتروني',
    metaTitle: 'خدمات التسويق بالبريد الإلكتروني | نفير الرقمي',
    description: 'خطط حملات ورسائل بريدية مفيدة ومتابعات للعملاء مع نفير الرقمي.',
    label: 'التسويق بالبريد الإلكتروني',
    hero: 'واصل التواصل برسائل مفيدة.',
    intro: 'يتيح البريد الإلكتروني مشاركة التحديثات والمحتوى المفيد والمتابعات المناسبة مع الأشخاص الذين اختاروا تلقي رسائل من نشاطك.',
    section: 'رسائل تخدم رحلة العميل.',
    body: 'نساعدك على تخطيط وكتابة الرسائل بما يتناسب مع جمهورك وأهداف عملك، من محتوى الحملات إلى رسائل المتابعة العملية.',
    deliverablesTitle: 'ما يمكننا العمل عليه',
    deliverables: [
      'تخطيط حملات البريد والنشرات الدورية.',
      'كتابة واضحة لتحديثات المنتجات والإطلاقات وتثقيف العملاء.',
      'رسائل ترحيب ومتابعة متوافقة مع رحلة العميل.',
      'مراجعة مبسطة للتفاعل وفرص الخطوة التالية.'
    ],
    processTitle: 'بداية عملية وواضحة',
    process: [
      ['٠١', 'نفهم', 'نحدد الجمهور والهدف والإجراء الذي تدعمه كل رسالة.'],
      ['٠٢', 'نخطط', 'نختار الرسالة والصيغة ومواعيد الإرسال المناسبة.'],
      ['٠٣', 'ننشئ', 'نكتب محتوى الحملة وننظمه للمراجعة.'],
      ['٠٤', 'نتعلم', 'نراجع التفاعل ونستخدمه لتوجيه الرسالة التالية.']
    ],
    sidebarTitle: 'هل لديك مشروع للبريد الإلكتروني؟',
    sidebarText: 'أخبرنا عن جمهورك وقائمة البريد الحالية والهدف من التواصل.',
    cta: 'ناقش التسويق بالبريد',
    wa: 'تواصل عبر واتساب',
    home: 'الرئيسية',
    services: 'خدماتنا',
    work: 'أعمالنا',
    insights: 'المقالات',
    contact: 'لنتحدث',
    switch: 'English',
    footerText: 'نربط البحث والمواقع والمحتوى الرقمي بهدف نمو واضح.'
  }
};

const unavailableContent = {
  en: {
    eyebrow: 'Service availability',
    title: 'Paid advertising is not currently offered.',
    description: 'NAFEER DIGITAL does not currently manage PPC or Google Ads campaigns. Our current work focuses on SEO, websites, content and copywriting, social media, email marketing, and lead generation.',
    services: 'Explore current services',
    contact: 'Ask about an alternative',
    home: 'Home',
    serviceName: 'Paid advertising',
    titleFor: name => `${name} — Not Currently Offered | NAFEER DIGITAL`
  },
  ar: {
    eyebrow: 'توفر الخدمة',
    title: 'لا نقدم إدارة الإعلانات المدفوعة حالياً.',
    description: 'لا تدير نفير الرقمي حالياً حملات الدفع بالنقرة أو إعلانات جوجل. ينصب تركيزنا على تحسين محركات البحث والمواقع والمحتوى والكتابة التسويقية والتواصل الاجتماعي والبريد الإلكتروني وتوليد العملاء المحتملين.',
    services: 'استكشف خدماتنا الحالية',
    contact: 'اسألنا عن بديل مناسب',
    home: 'الرئيسية',
    serviceName: 'الإعلانات المدفوعة',
    titleFor: name => `${name} — غير متاحة حالياً | نفير الرقمي`
  }
};

function renderHeader(language, currentPage) {
  const isArabic = language === 'ar';
  const text = emailContent[language];
  const home = `/${language}/`;
  const work = `/${language}/work/`;
  const services = `/${language}/services/`;
  const blog = `/${language}/blog/`;
  const contact = `${home}#contact`;
  const switchLanguage = isArabic ? 'en' : 'ar';
  const switchPath = `/${switchLanguage}/services/${currentPage}`;
  const nav = `
  <header class="site-header service-site-header">
    <div class="container header-inner">
      <a href="${home}" class="brand-logo-wrap" aria-label="${isArabic ? 'نفير الرقمي' : 'NAFEER DIGITAL'}">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <div class="brand-text-block">
          <span class="brand-name">${isArabic ? 'نفير الرقمي' : 'NAFEER DIGITAL'}</span>
          <span class="brand-tagline">${isArabic ? 'التسويق الرقمي' : 'DIGITAL MARKETING'}</span>
        </div>
      </a>
      <nav class="nav-menu" aria-label="${isArabic ? 'التنقل الرئيسي' : 'Main navigation'}">
        <a href="${home}" class="nav-link">${text.home}</a>
        <a href="${services}" class="nav-link active">${text.services}</a>
        <a href="${work}" class="nav-link">${text.work}</a>
        <a href="${blog}" class="nav-link">${text.insights}</a>
      </nav>
      <div class="header-actions">
        <a href="${switchPath}" class="lang-switch-btn js-switch-lang" data-target-lang="${switchLanguage}" lang="${switchLanguage}">${text.switch}</a>
        <a href="${contact}" class="btn btn-primary btn-sm service-header-cta">${text.contact}</a>
        <button type="button" class="hamburger-btn" id="btn-hamburger" aria-label="${isArabic ? 'فتح القائمة' : 'Open navigation menu'}">
          <span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
  <aside class="mobile-drawer" id="mobile-drawer" aria-label="${isArabic ? 'قائمة الهاتف' : 'Mobile navigation'}">
    <div class="drawer-header">
      <div class="brand-logo-wrap"><span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span><span class="brand-name">${isArabic ? 'نفير الرقمي' : 'NAFEER DIGITAL'}</span></div>
      <button type="button" class="drawer-close-btn" id="btn-drawer-close" aria-label="${isArabic ? 'إغلاق القائمة' : 'Close menu'}">×</button>
    </div>
    <nav class="drawer-nav-list">
      <a href="${home}" class="drawer-nav-link">${text.home}</a>
      <a href="${services}" class="drawer-nav-link">${text.services}</a>
      <a href="${work}" class="drawer-nav-link">${text.work}</a>
      <a href="${blog}" class="drawer-nav-link">${text.insights}</a>
      <a href="${contact}" class="drawer-nav-link">${text.contact}</a>
    </nav>
    <a href="${switchPath}" class="btn btn-secondary btn-full js-switch-lang" data-target-lang="${switchLanguage}" lang="${switchLanguage}">${text.switch}</a>
    <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-full js-whatsapp-link">${text.wa}</a>
  </aside>`;
  return { nav, home, work, services, blog, contact, switchLanguage, switchPath };
}

function renderFooter(language, links) {
  const isArabic = language === 'ar';
  const text = emailContent[language];
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <a class="brand-logo-wrap" href="${links.home}" style="margin-bottom:1.25rem;">
            <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
            <span class="brand-name">${isArabic ? 'نفير الرقمي' : 'NAFEER DIGITAL'}</span>
          </a>
          <p class="footer-brand-desc">${text.footerText}</p>
        </div>
        <div>
          <h2 class="footer-col-title">${isArabic ? 'التنقل' : 'Explore'}</h2>
          <ul class="footer-links-list">
            <li><a class="footer-link" href="${links.home}">${text.home}</a></li>
            <li><a class="footer-link" href="${links.services}">${text.services}</a></li>
            <li><a class="footer-link" href="${links.work}">${text.work}</a></li>
            <li><a class="footer-link" href="${links.blog}">${text.insights}</a></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-col-title">${isArabic ? 'تواصل معنا' : 'Contact'}</h2>
          <ul class="footer-links-list">
            <li><a class="footer-link" href="mailto:nafeerdigital@gmail.com">nafeerdigital@gmail.com</a></li>
            <li><a class="footer-link js-whatsapp-link" href="https://wa.me/601170066150">${isArabic ? 'واتساب' : 'WhatsApp'}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <span>© ${new Date().getFullYear()} ${isArabic ? 'نفير الرقمي. جميع الحقوق محفوظة.' : 'NAFEER DIGITAL. All rights reserved.'}</span>
        <a href="/sitemap.xml">${isArabic ? 'خريطة الموقع' : 'Sitemap'}</a>
      </div>
    </div>
  </footer>`;
}

function renderEmailPage(language) {
  const isArabic = language === 'ar';
  const data = emailContent[language];
  const links = renderHeader(language, 'email-marketing.html');
  const canonical = `${origin}/${language}/services/email-marketing.html`;
  const otherLanguage = isArabic ? 'en' : 'ar';
  const otherCanonical = `${origin}/${otherLanguage}/services/email-marketing.html`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    url: canonical,
    provider: {
      '@type': 'ProfessionalService',
      name: 'NAFEER DIGITAL',
      url: origin
    }
  };
  const deliverables = data.deliverables.map(item => `<li>${item}</li>`).join('');
  const process = data.process.map(([number, title, description]) => `
            <article class="service-process-step">
              <span class="work-eyebrow">${number}</span>
              <h3>${title}</h3>
              <p>${description}</p>
            </article>`).join('');

  return `<!DOCTYPE html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${data.metaTitle}</title>
  <meta name="description" content="${data.description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${isArabic ? otherCanonical : canonical}">
  <link rel="alternate" hreflang="ar" href="${isArabic ? canonical : otherCanonical}">
  <link rel="alternate" hreflang="x-default" href="${origin}/en/services/email-marketing.html">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${data.metaTitle}">
  <meta property="og:description" content="${data.description}">
  <meta property="og:image" content="${origin}/assets/images/hero-map.jpg">
  <meta property="og:site_name" content="NAFEER DIGITAL">
  <meta name="twitter:card" content="summary">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="/assets/images/favicon.png">
  <link rel="stylesheet" href="/assets/css/main.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  ${links.nav.trim()}
  <main>
    <section class="page-hero">
      <div class="container">
        <p class="section-tag">${data.label}</p>
        <h1 class="page-hero-title">${data.hero}</h1>
        <p class="page-hero-desc">${data.intro}</p>
        <div class="service-hero-actions">
          <a href="${links.contact}" class="btn btn-primary">${data.cta}</a>
          <a href="https://wa.me/601170066150" class="btn btn-dark-outline js-whatsapp-link">${data.wa}</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container service-content-grid">
        <article class="service-main-article">
          <p class="section-tag">${data.label}</p>
          <h2>${data.section}</h2>
          <p>${data.body}</p>
          <h2>${data.deliverablesTitle}</h2>
          <ul class="service-deliverables">${deliverables}</ul>
          <h2>${data.processTitle}</h2>
          <div class="service-process-grid">${process}</div>
        </article>
        <aside class="service-sidebar-box">
          <p class="work-eyebrow">${data.label}</p>
          <h2>${data.sidebarTitle}</h2>
          <p>${data.sidebarText}</p>
          <a href="${links.contact}" class="btn btn-primary btn-full">${data.cta}</a>
          <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-full js-whatsapp-link">${data.wa}</a>
        </aside>
      </div>
    </section>
  </main>
  ${renderFooter(language, links).trim()}
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

function renderUnavailablePage(language, pageName, slug) {
  const isArabic = language === 'ar';
  const text = unavailableContent[language];
  const links = renderHeader(language, `${slug}.html`);
  const title = text.titleFor(pageName);
  const description = text.description;
  const canonical = `${origin}/${language}/services/${slug}.html`;
  const otherCanonical = `${origin}/${isArabic ? 'en' : 'ar'}/services/${slug}.html`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical
  };

  return `<!DOCTYPE html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${isArabic ? otherCanonical : canonical}">
  <link rel="alternate" hreflang="ar" href="${isArabic ? canonical : otherCanonical}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:site_name" content="NAFEER DIGITAL">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="/assets/images/favicon.png">
  <link rel="stylesheet" href="/assets/css/main.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  ${links.nav.trim()}
  <main>
    <section class="page-hero">
      <div class="container">
        <p class="section-tag">${text.eyebrow}</p>
        <h1 class="page-hero-title">${title}</h1>
        <p class="page-hero-desc">${description}</p>
        <div class="service-hero-actions">
          <a href="${links.services}" class="btn btn-primary">${text.services}</a>
          <a href="${links.contact}" class="btn btn-dark-outline">${text.contact}</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container service-main-article">
        <h2>${isArabic ? 'ما الذي نقدمه حالياً؟' : 'What we do offer'}</h2>
        <p>${isArabic ? 'يمكنك استكشاف خدماتنا الحالية في تحسين محركات البحث وتصميم المواقع والمحتوى والكتابة التسويقية والتواصل الاجتماعي والبريد الإلكتروني وتوليد العملاء المحتملين.' : 'Explore our current services in SEO, website design, content and copywriting, social media, email marketing, and lead generation.'}</p>
        <a href="${links.services}" class="project-text-link">${text.services}<span aria-hidden="true"> ↗</span></a>
      </div>
    </section>
  </main>
  ${renderFooter(language, links).trim()}
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateExistingServiceLinks() {
  for (const language of ['en', 'ar']) {
    for (const directory of ['services', 'blog']) {
      const base = path.join(root, language, directory);
      if (!fs.existsSync(base)) continue;
      for (const file of fs.readdirSync(base).filter(name => name.endsWith('.html'))) {
        const filePath = path.join(base, file);
        let html = fs.readFileSync(filePath, 'utf8');
        const before = html;
        if (language === 'en') {
          html = html.replace(
            'href="../../en/services/google-ads.html" class="footer-link">Google Ads</a>',
            'href="../../en/services/email-marketing.html" class="footer-link">Email Marketing</a>'
          );
          html = html.replace(/<a href="ppc-advertising\.html"([^>]*)>[\s\S]*?<\/a>/g, '<a href="email-marketing.html"$1>Email Marketing</a>');
          html = html.replace(/<a href="google-ads\.html"([^>]*)>[\s\S]*?<\/a>/g, (_match, attributes) => (
            attributes.includes('footer-link')
              ? `<a href="email-marketing.html"${attributes}>Email Marketing</a>`
              : file === 'index.html'
                ? `<a href="google-ads.html"${attributes}>See service availability</a>`
                : `<a href="social-media-marketing.html"${attributes}>Social Media Marketing</a>`
          ));
        } else {
          html = html.replace(
            'href="../../ar/services/google-ads.html" class="footer-link">إعلانات جوجل المتقدمة</a>',
            'href="../../ar/services/email-marketing.html" class="footer-link">التسويق بالبريد الإلكتروني</a>'
          );
          html = html.replace(/<a href="ppc-advertising\.html"([^>]*)>[\s\S]*?<\/a>/g, '<a href="email-marketing.html"$1>التسويق بالبريد الإلكتروني</a>');
          html = html.replace(/<a href="google-ads\.html"([^>]*)>[\s\S]*?<\/a>/g, (_match, attributes) => (
            attributes.includes('footer-link')
              ? `<a href="email-marketing.html"${attributes}>التسويق بالبريد الإلكتروني</a>`
              : file === 'index.html'
                ? `<a href="google-ads.html"${attributes}>تعرف على توفر الخدمة</a>`
                : `<a href="social-media-marketing.html"${attributes}>التسويق عبر التواصل الاجتماعي</a>`
          ));
        }
        if (directory === 'services' && file === 'index.html') {
          const availabilityLabel = language === 'en' ? 'Current Availability' : 'توفر الخدمة حالياً';
          const emailLabel = language === 'en' ? 'Explore Email Marketing' : 'استكشف التسويق بالبريد الإلكتروني';
          const availabilityLink = new RegExp(
            `(<div class="work-case-sector">${escapeRegex(availabilityLabel)}</div>[\\s\\S]*?<a href=")[^"]+("[^>]*>)[\\s\\S]*?(<\\/a>)`
          );
          html = html.replace(availabilityLink, `$1email-marketing.html$2${emailLabel}$3`);
        }
        if (html !== before) fs.writeFileSync(filePath, html, 'utf8');
      }
    }
  }
}

function updateSitemap() {
  const sitemapPath = path.join(root, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const paidRoutes = [
    '/en/services/google-ads.html',
    '/ar/services/google-ads.html',
    '/en/services/ppc-advertising.html',
    '/ar/services/ppc-advertising.html'
  ];

  for (const route of paidRoutes) {
    const loc = `${origin}${route}`;
    const expression = new RegExp(`\\s*<url>\\s*<loc>${escapeRegex(loc)}</loc>[\\s\\S]*?<\\/url>`, 'g');
    sitemap = sitemap.replace(expression, '');
  }

  const enUrl = `${origin}/en/services/email-marketing.html`;
  const arUrl = `${origin}/ar/services/email-marketing.html`;
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = [
    [enUrl, enUrl, arUrl],
    [arUrl, enUrl, arUrl]
  ].filter(([loc]) => !sitemap.includes(`<loc>${loc}</loc>`)).map(([loc, en, ar]) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${ar}" />
  </url>`);

  if (entries.length) sitemap = sitemap.replace('</urlset>', `${entries.join('\n')}\n</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
}

for (const language of ['en', 'ar']) {
  const emailPath = path.join(root, language, 'services', 'email-marketing.html');
  fs.writeFileSync(emailPath, renderEmailPage(language), 'utf8');

  const names = language === 'ar'
    ? { 'google-ads': 'إعلانات جوجل', 'ppc-advertising': 'إعلانات الدفع بالنقرة' }
    : { 'google-ads': 'Google Ads', 'ppc-advertising': 'PPC advertising' };
  for (const [slug, pageName] of Object.entries(names)) {
    const filePath = path.join(root, language, 'services', `${slug}.html`);
    fs.writeFileSync(filePath, renderUnavailablePage(language, pageName, slug), 'utf8');
  }
}

updateExistingServiceLinks();
updateSitemap();
