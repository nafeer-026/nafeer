const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const origin = 'https://nafeer-sigma.vercel.app';

const projects = {
  en: [
    {
      slug: 'tako-healthcare',
      image: 'case-study-tako-healthcare.jpg',
      title: 'TAKO Healthcare',
      subtitle: 'Medical packaging guide',
      category: 'SEO & product content',
      description: 'A structured medical packaging guide with product information, clear sections, FAQs, and quotation pathways.',
      points: [
        'Product information organized into a clear guide.',
        'Frequently asked questions for visitors researching medical packaging.',
        'Quotation pathways for prospective distributors.'
      ],
      liveUrl: 'https://www.takoflexibles.com/medical-packaging-distributors-in-malaysia/'
    },
    {
      slug: 'tako-internship',
      image: 'case-study-tako-internship.jpg',
      title: 'TAKO Internship',
      subtitle: 'Work-from-home internship programme',
      category: 'Website & conversion journey',
      description: 'A mobile-friendly programme page with clear benefits, eligibility details, and a direct WhatsApp application route.',
      points: [
        'Programme benefits and eligibility details.',
        'A layout designed to work on mobile screens.',
        'A direct WhatsApp route for applications.'
      ],
      liveUrl: 'https://www.takointernship.com/work-from-home-internship-malaysia/'
    },
    {
      slug: 'tako-digital-marketing',
      image: 'case-study-tako-digital-marketing.jpg',
      title: 'TAKO Digital Marketing',
      subtitle: 'Export guide for manufacturers',
      category: 'Content & B2B lead generation',
      description: 'An export guide for manufacturers, with a six-step plan and clear enquiry pathways for prospective buyers.',
      points: [
        'A six-step export plan for manufacturers.',
        'Information structured for overseas buyer research.',
        'Clear enquiry routes for prospective buyers.'
      ],
      liveUrl: 'https://www.takodigitalmarketing.com/how-malaysian-factories-land-overseas-buyers/'
    }
  ],
  ar: [
    {
      slug: 'tako-healthcare',
      image: 'case-study-tako-healthcare.jpg',
      title: 'TAKO Healthcare',
      subtitle: 'دليل التغليف الطبي',
      category: 'تحسين البحث ومحتوى المنتجات',
      description: 'دليل منظم للتغليف الطبي يضم معلومات المنتجات وأقساماً واضحة وأسئلة شائعة ومسارات لطلب عروض الأسعار.',
      points: [
        'معلومات المنتجات ضمن دليل واضح ومنظم.',
        'أسئلة شائعة للزوار الباحثين عن حلول التغليف الطبي.',
        'مسارات لطلب عروض الأسعار من الموزعين المحتملين.'
      ],
      liveUrl: 'https://www.takoflexibles.com/medical-packaging-distributors-in-malaysia/'
    },
    {
      slug: 'tako-internship',
      image: 'case-study-tako-internship.jpg',
      title: 'TAKO Internship',
      subtitle: 'برنامج تدريب عن بُعد',
      category: 'المواقع وتجربة التحويل',
      description: 'صفحة متوافقة مع الهاتف تعرض مزايا البرنامج ومتطلبات الأهلية وتتيح التقديم مباشرة عبر واتساب.',
      points: [
        'عرض مزايا البرنامج ومتطلبات الأهلية.',
        'تصميم ملائم للتصفح عبر الهاتف.',
        'مسار مباشر للتقديم عبر واتساب.'
      ],
      liveUrl: 'https://www.takointernship.com/work-from-home-internship-malaysia/'
    },
    {
      slug: 'tako-digital-marketing',
      image: 'case-study-tako-digital-marketing.jpg',
      title: 'TAKO Digital Marketing',
      subtitle: 'دليل تصدير للمصنّعين',
      category: 'المحتوى وتوليد عملاء الشركات',
      description: 'دليل تصدير للمصنّعين يتضمن خطة من ست خطوات ومسارات واضحة لاستفسارات المشترين المحتملين.',
      points: [
        'خطة تصدير من ست خطوات للمصنّعين.',
        'معلومات منظمة لتسهيل بحث المشترين الدوليين.',
        'مسارات واضحة لاستفسارات المشترين المحتملين.'
      ],
      liveUrl: 'https://www.takodigitalmarketing.com/how-malaysian-factories-land-overseas-buyers/'
    }
  ]
};

const copy = {
  en: {
    home: 'Home',
    services: 'Services',
    work: 'Our Work',
    insights: 'Insights',
    contact: 'Let’s talk',
    switch: 'العربية',
    menu: 'Open navigation menu',
    indexTitle: 'Selected work, clearly explained.',
    indexDescription: 'A closer look at published web and content projects, with the work described plainly and without invented performance claims.',
    indexKicker: 'Selected work',
    indexIntro: 'Useful pages begin with a clear purpose.',
    snapshot: 'Project snapshot',
    snapshotLabel: 'Project details',
    viewAll: 'Back to all work',
    live: 'Visit live page',
    contents: 'What the published page includes',
    note: 'These snapshots describe visible page content and structure. No performance metrics or business outcomes are claimed here.',
    discuss: 'Discuss a similar project',
    allWork: 'Explore all work',
    metaIndex: 'Explore selected website and content projects by Nafeer Digital, including SEO content, an internship programme page, and an export guide.',
    label: 'Portfolio'
  },
  ar: {
    home: 'الرئيسية',
    services: 'خدماتنا',
    work: 'أعمالنا',
    insights: 'المقالات',
    contact: 'لنتحدث',
    switch: 'English',
    menu: 'فتح قائمة التنقل',
    indexTitle: 'أعمال مختارة، موضّحة بوضوح.',
    indexDescription: 'تعرّف على نماذج منشورة من مشاريع المواقع والمحتوى، مع وصف دقيق للعمل دون ادعاءات غير موثقة عن النتائج.',
    indexKicker: 'نماذج من أعمالنا',
    indexIntro: 'كل صفحة مفيدة تبدأ بهدف واضح.',
    snapshot: 'لمحة عن المشروع',
    snapshotLabel: 'تفاصيل المشروع',
    viewAll: 'العودة إلى جميع الأعمال',
    live: 'زيارة الصفحة المنشورة',
    contents: 'محتوى الصفحة المنشورة',
    note: 'تصف هذه اللمحات محتوى الصفحات وبنيتها الظاهرة فقط. ولا تتضمن ادعاءات عن مؤشرات الأداء أو نتائج الأعمال.',
    discuss: 'ناقش مشروعاً مشابهاً',
    allWork: 'استكشف جميع الأعمال',
    metaIndex: 'استكشف نماذج من مشاريع المواقع والمحتوى لدى نفير الرقمي، بما فيها محتوى تحسين البحث وصفحة برنامج تدريب ودليل تصدير.',
    label: 'الأعمال'
  }
};

function route(language, variant, slug) {
  const prefix = variant === 'root' ? '' : `/${language}`;
  return `${prefix}/work/${slug ? `${slug}/` : ''}`;
}

function projectLink(language, variant, slug) {
  return route(language, variant, slug);
}

function navigation(language, variant, slug) {
  const text = copy[language];
  const home = variant === 'root' ? '/' : `/${language}/`;
  const services = `/${language}/services/`;
  const work = route(language, variant);
  const blog = `/${language}/blog/`;
  const contact = `${home}#contact`;
  const targetLanguage = language === 'ar' ? 'en' : 'ar';
  const switchPath = route(targetLanguage, targetLanguage === 'en' ? 'en' : 'ar', slug);

  return {
    home,
    services,
    work,
    blog,
    contact,
    switchPath,
    targetLanguage,
    html: `
  <header class="site-header work-site-header">
    <div class="container header-inner">
      <a href="${home}" class="brand-logo-wrap" aria-label="${language === 'ar' ? 'نفير الرقمي' : 'NAFEER DIGITAL'}">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <div class="brand-text-block">
          <span class="brand-name">${language === 'ar' ? 'نفير الرقمي' : 'NAFEER DIGITAL'}</span>
          <span class="brand-tagline">${language === 'ar' ? 'التسويق الرقمي' : 'DIGITAL MARKETING'}</span>
        </div>
      </a>
      <nav class="nav-menu" aria-label="${language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}">
        <a href="${home}" class="nav-link">${text.home}</a>
        <a href="${services}" class="nav-link">${text.services}</a>
        <a href="${work}" class="nav-link active">${text.work}</a>
        <a href="${blog}" class="nav-link">${text.insights}</a>
      </nav>
      <div class="header-actions">
        <a href="${switchPath}" class="lang-switch-btn js-switch-lang" data-target-lang="${targetLanguage}" lang="${targetLanguage}">${text.switch}</a>
        <a href="${contact}" class="btn btn-primary btn-sm work-header-cta">${text.contact}</a>
        <button type="button" class="hamburger-btn" id="btn-hamburger" aria-label="${text.menu}">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
  <aside class="mobile-drawer" id="mobile-drawer" aria-label="${text.menu}">
    <div class="drawer-header">
      <div class="brand-logo-wrap">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <span class="brand-name">${language === 'ar' ? 'نفير الرقمي' : 'NAFEER DIGITAL'}</span>
      </div>
      <button type="button" class="drawer-close-btn" id="btn-drawer-close" aria-label="${language === 'ar' ? 'إغلاق القائمة' : 'Close menu'}">×</button>
    </div>
    <nav class="drawer-nav-list">
      <a href="${home}" class="drawer-nav-link">${text.home}</a>
      <a href="${services}" class="drawer-nav-link">${text.services}</a>
      <a href="${work}" class="drawer-nav-link">${text.work}</a>
      <a href="${blog}" class="drawer-nav-link">${text.insights}</a>
      <a href="${contact}" class="drawer-nav-link">${text.contact}</a>
    </nav>
    <a href="${switchPath}" class="btn btn-secondary btn-full js-switch-lang" data-target-lang="${targetLanguage}" lang="${targetLanguage}">${text.switch}</a>
    <a href="https://wa.me/601170066150" class="btn btn-whatsapp btn-full js-whatsapp-link">${text.contact}</a>
  </aside>`
  };
}

function renderProjectCard(project, language, variant) {
  const text = copy[language];
  const link = projectLink(language, variant, project.slug);
  return `
        <article class="project-card">
          <a class="project-card-media" href="${link}">
            <img src="/assets/images/${project.image}" alt="${project.title}: ${project.subtitle}" width="900" height="560" loading="lazy">
          </a>
          <div class="project-card-copy">
            <p class="work-eyebrow">${project.category}</p>
            <h2><a href="${link}">${project.title}</a></h2>
            <p class="project-card-subtitle">${project.subtitle}</p>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-actions">
              <a class="btn btn-primary btn-sm" href="${link}">${text.snapshot}</a>
              <a class="project-text-link" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">${text.live}<span aria-hidden="true"> ↗</span></a>
            </div>
          </div>
        </article>`.trim();
}

function renderPage(language, variant, project) {
  const isArabic = language === 'ar';
  const text = copy[language];
  const nav = navigation(language, variant, project && project.slug);
  const pagePath = route(language, variant, project && project.slug);
  const canonicalPath = pagePath;
  const enPath = route('en', 'en', project && project.slug);
  const arPath = route('ar', 'ar', project && project.slug);
  const defaultPath = route('en', 'root', project && project.slug);
  const title = project
    ? `${project.title} — ${project.subtitle} | NAFEER DIGITAL`
    : `${text.indexKicker} | NAFEER DIGITAL`;
  const description = project ? project.description : text.metaIndex;
  const image = project ? project.image : 'case-study-tako-healthcare.jpg';
  const locale = isArabic ? 'ar' : 'en';
  const schema = project
    ? {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: `${origin}${canonicalPath}`,
        image: `${origin}/assets/images/${project.image}`
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        description,
        url: `${origin}${canonicalPath}`,
        hasPart: projects[language].map(item => ({
          '@type': 'CreativeWork',
          name: item.title,
          url: `${origin}${projectLink(language, variant, item.slug)}`
        }))
      };

  const mainContent = project
    ? `
    <main id="main-content">
      <nav class="work-breadcrumb container" aria-label="${isArabic ? 'مسار التنقل' : 'Breadcrumb'}">
        <a href="${nav.home}">${text.home}</a><span aria-hidden="true">/</span><a href="${nav.work}">${text.work}</a><span aria-hidden="true">/</span><span aria-current="page">${project.title}</span>
      </nav>
      <section class="project-detail-hero">
        <div class="container project-detail-grid">
          <div class="project-detail-copy">
            <p class="work-eyebrow">${project.category}</p>
            <h1>${project.title}</h1>
            <p class="project-detail-subtitle">${project.subtitle}</p>
            <p class="project-detail-description">${project.description}</p>
            <div class="project-detail-actions">
              <a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">${text.live}<span aria-hidden="true"> ↗</span></a>
              <a class="btn btn-outline" href="${nav.contact}">${text.discuss}</a>
            </div>
          </div>
          <figure class="project-detail-media">
            <img src="/assets/images/${project.image}" alt="${project.title}: ${project.subtitle}" width="1200" height="740" fetchpriority="high">
            <figcaption>${isArabic ? 'لقطة من الصفحة المنشورة' : 'Published page preview'}</figcaption>
          </figure>
        </div>
      </section>
      <section class="project-detail-content">
        <div class="container project-content-grid">
          <div>
            <p class="work-eyebrow">${text.snapshotLabel}</p>
            <h2>${text.contents}</h2>
            <ul class="project-detail-list">
              ${project.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
            <p class="project-evidence-note">${text.note}</p>
          </div>
          <aside class="project-side-card">
            <p class="work-eyebrow">${isArabic ? 'المجال' : 'Focus'}</p>
            <h2>${project.category}</h2>
            <a class="project-text-link" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">${text.live}<span aria-hidden="true"> ↗</span></a>
          </aside>
        </div>
      </section>
      <section class="work-next-step">
        <div class="container work-next-step-inner">
          <div><p class="work-eyebrow">${text.label}</p><h2>${text.allWork}</h2></div>
          <a class="btn btn-primary" href="${nav.work}">${text.viewAll}<span aria-hidden="true"> ↗</span></a>
        </div>
      </section>
    </main>`
    : `
    <main id="main-content">
      <section class="work-index-hero">
        <div class="container work-index-copy">
          <p class="work-eyebrow">${text.indexKicker}</p>
          <h1>${text.indexTitle}</h1>
          <p>${text.indexDescription}</p>
        </div>
      </section>
      <section class="work-index-list">
        <div class="container">
          <div class="work-index-heading">
            <div><p class="work-eyebrow">${text.label}</p><h2>${text.indexIntro}</h2></div>
            <p>${text.note}</p>
          </div>
          <div class="project-grid">
            ${projects[language].map(item => renderProjectCard(item, language, variant)).join('')}
          </div>
        </div>
      </section>
      <section class="work-next-step">
        <div class="container work-next-step-inner">
          <div><p class="work-eyebrow">${isArabic ? 'هل لديك مشروع؟' : 'Have a project in mind?'}</p><h2>${isArabic ? 'ابدأ بحوار واضح.' : 'Start with a clear conversation.'}</h2></div>
          <a class="btn btn-primary" href="${nav.contact}">${text.contact}</a>
        </div>
      </section>
    </main>`;

  return `<!DOCTYPE html>
<html lang="${language}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="author" content="NAFEER DIGITAL">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${origin}${canonicalPath}">
  <link rel="alternate" hreflang="en" href="${origin}${enPath}">
  <link rel="alternate" hreflang="ar" href="${origin}${arPath}">
  <link rel="alternate" hreflang="x-default" href="${origin}${defaultPath}">
  <meta property="og:type" content="${project ? 'article' : 'website'}">
  <meta property="og:url" content="${origin}${canonicalPath}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${origin}/assets/images/${image}">
  <meta property="og:site_name" content="NAFEER DIGITAL">
  <meta property="og:locale" content="${locale}${isArabic ? '_SA' : '_GB'}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${origin}/assets/images/${image}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="/assets/images/favicon.png">
  <link rel="stylesheet" href="/assets/css/main.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body class="work-page">
  <a class="work-skip-link" href="#main-content">${isArabic ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
  ${nav.html.trim()}
  ${mainContent.trim()}
  <footer class="site-footer work-site-footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <a class="brand-logo-wrap work-footer-brand" href="${nav.home}">
            <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
            <span class="brand-name">${isArabic ? 'نفير الرقمي' : 'NAFEER DIGITAL'}</span>
          </a>
          <p class="footer-brand-desc">${isArabic ? 'نربط تحسين البحث والمواقع والمحتوى الرقمي بهدف نمو واضح.' : 'Search, websites, and digital content—connected to help businesses grow.'}</p>
        </div>
        <div>
          <h2 class="footer-col-title">${isArabic ? 'التنقل' : 'Explore'}</h2>
          <ul class="footer-links-list">
            <li><a class="footer-link" href="${nav.home}">${text.home}</a></li>
            <li><a class="footer-link" href="${nav.services}">${text.services}</a></li>
            <li><a class="footer-link" href="${nav.work}">${text.work}</a></li>
            <li><a class="footer-link" href="${nav.blog}">${text.insights}</a></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-col-title">${isArabic ? 'تواصل معنا' : 'Contact'}</h2>
          <ul class="footer-links-list">
            <li><a class="footer-link" href="mailto:nafeerdigital@gmail.com">nafeerdigital@gmail.com</a></li>
            <li><a class="footer-link js-whatsapp-link" href="https://wa.me/601170066150">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <span>© ${new Date().getFullYear()} ${isArabic ? 'نفير الرقمي' : 'NAFEER DIGITAL'}. ${isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
        <a href="/sitemap.xml">${isArabic ? 'خريطة الموقع' : 'Sitemap'}</a>
      </div>
    </div>
  </footer>
  <div class="floating-actions">
    <a href="https://wa.me/601170066150" class="floating-btn floating-whatsapp js-whatsapp-link" aria-label="WhatsApp">
      <span>${isArabic ? 'واتساب' : 'WhatsApp'}</span>
    </a>
  </div>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

function walkHtml(directory) {
  const found = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) found.push(...walkHtml(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) found.push(fullPath);
  }
  return found;
}

function updateExistingWorkLinks() {
  for (const language of ['en', 'ar']) {
    const oldRoutes = language === 'ar'
      ? /href="\.\.\/\.\.\/ar\/#(?:work|portfolio)"/g
      : /href="\.\.\/\.\.\/#(?:work|portfolio)"/g;
    const newRoute = `href="../../${language}/work/"`;
    for (const file of walkHtml(path.join(root, language))) {
      let html = fs.readFileSync(file, 'utf8');
      const before = html;
      html = html.replace(oldRoutes, newRoute);
      if (language === 'en') {
        html = html
          .replace(/>Case Studies &amp; Work<\/a>/g, '>Our Work</a>')
          .replace(/>Case Studies & Work<\/a>/g, '>Our Work</a>')
          .replace(/>Portfolio<\/a>/g, '>Our Work</a>')
          .replace(/>Work<\/a>/g, '>Our Work</a>');
      } else {
        html = html
          .replace(/>أعمالنا ودراسات الحالة<\/a>/g, '>أعمالنا</a>')
          .replace(/>دراسات الحالة والأعمال<\/a>/g, '>أعمالنا</a>');
      }
      if (html !== before) fs.writeFileSync(file, html, 'utf8');
    }
  }
}

function appendSitemapEntries() {
  const sitemapPath = path.join(root, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = [];

  for (const slug of ['', ...projects.en.map(project => project.slug)]) {
    const enRoot = route('en', 'root', slug);
    const enPath = route('en', 'en', slug);
    const arPath = route('ar', 'ar', slug);
    const alternates = [
      ['en', `${origin}${enPath}`],
      ['ar', `${origin}${arPath}`],
      ['x-default', `${origin}${enRoot}`]
    ];

    for (const urlPath of [enRoot, enPath, arPath]) {
      const loc = `${origin}${urlPath}`;
      if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
      const alternateLinks = alternates
        .map(([language, href]) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${href}" />`)
        .join('\n');
      entries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${slug ? '0.6' : '0.8'}</priority>
${alternateLinks}
  </url>`);
    }
  }

  if (entries.length) {
    sitemap = sitemap.replace('</urlset>', `${entries.join('\n')}\n</urlset>`);
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  }
}

for (const language of ['en', 'ar']) {
  for (const variant of language === 'en' ? ['root', 'en'] : ['ar']) {
    const projectsForLanguage = projects[language];
    const pagePaths = [
      { slug: '', content: renderPage(language, variant, null) },
      ...projectsForLanguage.map(project => ({
        slug: project.slug,
        content: renderPage(language, variant, project)
      }))
    ];

    for (const page of pagePaths) {
      const relativePath = route(language, variant, page.slug).replace(/^\//, '');
      const outputDirectory = path.join(root, relativePath);
      fs.mkdirSync(outputDirectory, { recursive: true });
      fs.writeFileSync(path.join(outputDirectory, 'index.html'), page.content, 'utf8');
      console.log(`Generated ${relativePath}`);
    }
  }
}

updateExistingWorkLinks();
appendSitemapEntries();
