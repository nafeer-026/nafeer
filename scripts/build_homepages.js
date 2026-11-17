const fs = require('fs');
const path = require('path');

const origin = 'https://nafeer-sigma.vercel.app';
const whatsappIcon = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.99L2.05 22l5.25-1.38A9.91 9.91 0 1 0 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.51-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z"/></svg>';

const pages = [
  {
    file: 'index.html',
    lang: 'en',
    dir: 'ltr',
    home: '/',
    title: 'NAFEER DIGITAL | SEO, Websites & Digital Content',
    description: 'Grow your digital presence with NAFEER DIGITAL: SEO, website design, content and copywriting, social media, email marketing, and lead generation.',
    name: 'NAFEER DIGITAL',
    tagline: 'SEO · WEBSITES · DIGITAL CONTENT',
    nav: ['About', 'Services', 'Our Work', 'Process', 'Insights'],
    switchLabel: 'العربية',
    switchTarget: 'ar',
    menuLabel: 'Open menu',
    eyebrow: 'SEO, websites and digital content',
    h1: 'Get found.<br>Earn trust.<br><em>Grow on purpose.</em>',
    intro: 'We help businesses build the search visibility, websites, and useful content that make it easier for the right customers to find and choose them.',
    primaryCta: 'Talk to us on WhatsApp',
    secondaryCta: 'See our work',
    aboutLabel: 'Our story',
    aboutTitle: 'Growth should feel clear, not complicated.',
    aboutText: 'Nafeer’s story starts with a simple belief: digital marketing works better when visibility, a trustworthy website, and useful content support the same goal. We connect those pieces around your business—not a one-size-fits-all playbook.',
    servicesLabel: 'What we do',
    servicesTitle: 'The right work, connected.',
    servicesIntro: 'Start with the challenge your business has today. We’ll help you choose the next practical step.',
    services: [
      ['01', 'SEO & websites', 'Technical and local SEO, search strategy, and websites built to be clear, useful, and easy to find.', '/en/services/seo.html', 'Explore SEO'],
      ['02', 'Content & copywriting', 'Website copy, blog writing, product pages, and content that answers real customer questions.', '/en/services/content-marketing.html', 'Explore content'],
      ['03', 'Social & email', 'Consistent social content and useful email marketing that keep your brand connected to its audience.', '/en/services/social-media-marketing.html', 'Explore social media'],
      ['04', 'Strategy & leads', 'A practical digital plan, B2B lead generation, and measurement shaped around your business goals.', '/en/services/digital-marketing-strategy.html', 'Explore strategy']
    ],
    paidNote: 'Our current focus is organic and owned-channel growth. We do not currently manage paid advertising campaigns.',
    workLabel: 'Selected work',
    workTitle: 'Real projects. Clear contributions.',
    workIntro: 'A few examples of the websites, content, and lead journeys we have worked on.',
    work: [
      ['case-study-tako-healthcare.jpg', 'SEO & product content', 'TAKO Healthcare', 'A structured medical packaging guide with product information, clear sections, FAQs, and quotation pathways.', 'https://www.takoflexibles.com/medical-packaging-distributors-in-malaysia/', 'View project', 'tako-healthcare'],
      ['case-study-tako-internship.jpg', 'Website & conversion journey', 'TAKO Internship', 'A mobile-friendly programme page with clear benefits, eligibility details, and a direct WhatsApp application route.', 'https://www.takointernship.com/work-from-home-internship-malaysia/', 'View project', 'tako-internship'],
      ['case-study-tako-digital-marketing.jpg', 'Content & B2B lead generation', 'TAKO Digital Marketing', 'An export guide for manufacturers, with a six-step plan and clear enquiry pathways for prospective buyers.', 'https://www.takodigitalmarketing.com/how-malaysian-factories-land-overseas-buyers/', 'View project', 'tako-digital-marketing']
    ],
    processLabel: 'How we work',
    processTitle: 'A thoughtful process. Useful progress.',
    process: [
      ['01', 'Listen', 'Understand your business, audience, and goals.'],
      ['02', 'Plan', 'Choose the right priorities and channels together.'],
      ['03', 'Create', 'Build the pages, content, and marketing foundations.'],
      ['04', 'Improve', 'Review what is working and refine the next step.']
    ],
    insightsLabel: 'From the Nafeer journal',
    insightsTitle: 'Ideas for growing your digital presence.',
    articles: [
      ['SEO fundamentals for growing brands', '/en/blog/seo-fundamentals-growing-brands.html', 'Start with the search foundations that help customers discover your business.'],
      ['How to build a digital marketing strategy', '/en/blog/how-to-build-digital-marketing-strategy.html', 'Connect your business goals to a focused, workable marketing plan.'],
      ['Marketing strategies for Malaysian businesses', '/en/blog/marketing-strategies-malaysian-businesses.html', 'Practical ways to strengthen your brand and reach the right audience.']
    ],
    contactLabel: 'Let’s talk',
    contactTitle: 'Tell us what you want to grow.',
    contactText: 'Share a little about your business and where you want to go. We’ll start with a conversation and help you identify a sensible next step.',
    contactCta: 'Start a WhatsApp conversation',
    emailLabel: 'Prefer email?',
    email: 'nafeerdigital@gmail.com',
    copyright: 'All rights reserved.',
    footerTagline: 'Search, websites, and digital content—connected to help businesses grow.'
  },
  {
    file: 'en/index.html',
    lang: 'en',
    dir: 'ltr',
    home: '/en/',
    title: 'NAFEER DIGITAL | SEO, Websites & Digital Content',
    description: 'Grow your digital presence with NAFEER DIGITAL: SEO, website design, content and copywriting, social media, email marketing, and lead generation.',
    name: 'NAFEER DIGITAL',
    tagline: 'SEO · WEBSITES · DIGITAL CONTENT',
    nav: ['About', 'Services', 'Our Work', 'Process', 'Insights'],
    switchLabel: 'العربية',
    switchTarget: 'ar',
    menuLabel: 'Open menu',
    eyebrow: 'SEO, websites and digital content',
    h1: 'Get found.<br>Earn trust.<br><em>Grow on purpose.</em>',
    intro: 'We help businesses build the search visibility, websites, and useful content that make it easier for the right customers to find and choose them.',
    primaryCta: 'Talk to us on WhatsApp',
    secondaryCta: 'See our work',
    aboutLabel: 'Our story',
    aboutTitle: 'Growth should feel clear, not complicated.',
    aboutText: 'Nafeer’s story starts with a simple belief: digital marketing works better when visibility, a trustworthy website, and useful content support the same goal. We connect those pieces around your business—not a one-size-fits-all playbook.',
    servicesLabel: 'What we do',
    servicesTitle: 'The right work, connected.',
    servicesIntro: 'Start with the challenge your business has today. We’ll help you choose the next practical step.',
    services: [
      ['01', 'SEO & websites', 'Technical and local SEO, search strategy, and websites built to be clear, useful, and easy to find.', '/en/services/seo.html', 'Explore SEO'],
      ['02', 'Content & copywriting', 'Website copy, blog writing, product pages, and content that answers real customer questions.', '/en/services/content-marketing.html', 'Explore content'],
      ['03', 'Social & email', 'Consistent social content and useful email marketing that keep your brand connected to its audience.', '/en/services/social-media-marketing.html', 'Explore social media'],
      ['04', 'Strategy & leads', 'A practical digital plan, B2B lead generation, and measurement shaped around your business goals.', '/en/services/digital-marketing-strategy.html', 'Explore strategy']
    ],
    paidNote: 'Our current focus is organic and owned-channel growth. We do not currently manage paid advertising campaigns.',
    workLabel: 'Selected work',
    workTitle: 'Real projects. Clear contributions.',
    workIntro: 'A few examples of the websites, content, and lead journeys we have worked on.',
    work: [
      ['case-study-tako-healthcare.jpg', 'SEO & product content', 'TAKO Healthcare', 'A structured medical packaging guide with product information, clear sections, FAQs, and quotation pathways.', 'https://www.takoflexibles.com/medical-packaging-distributors-in-malaysia/', 'View project', 'tako-healthcare'],
      ['case-study-tako-internship.jpg', 'Website & conversion journey', 'TAKO Internship', 'A mobile-friendly programme page with clear benefits, eligibility details, and a direct WhatsApp application route.', 'https://www.takointernship.com/work-from-home-internship-malaysia/', 'View project', 'tako-internship'],
      ['case-study-tako-digital-marketing.jpg', 'Content & B2B lead generation', 'TAKO Digital Marketing', 'An export guide for manufacturers, with a six-step plan and clear enquiry pathways for prospective buyers.', 'https://www.takodigitalmarketing.com/how-malaysian-factories-land-overseas-buyers/', 'View project', 'tako-digital-marketing']
    ],
    processLabel: 'How we work',
    processTitle: 'A thoughtful process. Useful progress.',
    process: [
      ['01', 'Listen', 'Understand your business, audience, and goals.'],
      ['02', 'Plan', 'Choose the right priorities and channels together.'],
      ['03', 'Create', 'Build the pages, content, and marketing foundations.'],
      ['04', 'Improve', 'Review what is working and refine the next step.']
    ],
    insightsLabel: 'From the Nafeer journal',
    insightsTitle: 'Ideas for growing your digital presence.',
    articles: [
      ['SEO fundamentals for growing brands', '/en/blog/seo-fundamentals-growing-brands.html', 'Start with the search foundations that help customers discover your business.'],
      ['How to build a digital marketing strategy', '/en/blog/how-to-build-digital-marketing-strategy.html', 'Connect your business goals to a focused, workable marketing plan.'],
      ['Marketing strategies for Malaysian businesses', '/en/blog/marketing-strategies-malaysian-businesses.html', 'Practical ways to strengthen your brand and reach the right audience.']
    ],
    contactLabel: 'Let’s talk',
    contactTitle: 'Tell us what you want to grow.',
    contactText: 'Share a little about your business and where you want to go. We’ll start with a conversation and help you identify a sensible next step.',
    contactCta: 'Start a WhatsApp conversation',
    emailLabel: 'Prefer email?',
    email: 'nafeerdigital@gmail.com',
    copyright: 'All rights reserved.',
    footerTagline: 'Search, websites, and digital content—connected to help businesses grow.'
  },
  {
    file: 'ar/index.html',
    lang: 'ar',
    dir: 'rtl',
    home: '/ar/',
    title: 'نفير الرقمي | تحسين محركات البحث والمواقع والمحتوى',
    description: 'نساعد الشركات على تنمية حضورها الرقمي عبر تحسين محركات البحث وتصميم المواقع وكتابة المحتوى والتسويق عبر التواصل الاجتماعي والبريد الإلكتروني وتوليد العملاء المحتملين.',
    name: 'نفير الرقمي',
    tagline: 'تحسين البحث · المواقع · المحتوى الرقمي',
    nav: ['من نحن', 'خدماتنا', 'أعمالنا', 'منهجيتنا', 'المقالات'],
    switchLabel: 'English',
    switchTarget: 'en',
    menuLabel: 'فتح القائمة',
    eyebrow: 'تحسين محركات البحث والمواقع والمحتوى الرقمي',
    h1: 'تظهر حيث يبحث عملاؤك.<br>تبني الثقة.<br><em>وتنمو بثبات.</em>',
    intro: 'نساعد الشركات على بناء حضور قوي في نتائج البحث ومواقع إلكترونية ومحتوى واضح يسهّل على العملاء المناسبين العثور عليها واختيارها.',
    primaryCta: 'تواصل معنا عبر واتساب',
    secondaryCta: 'استكشف أعمالنا',
    aboutLabel: 'قصتنا',
    aboutTitle: 'ينبغي أن يكون النمو واضحاً، لا معقداً.',
    aboutText: 'تبدأ قصة نفير من قناعة بسيطة: يعمل التسويق الرقمي بصورة أفضل حين يخدم الظهور في البحث والموقع الجدير بالثقة والمحتوى المفيد هدفاً واحداً. نربط هذه العناصر بما يناسب عملك، لا بقالب جاهز للجميع.',
    servicesLabel: 'خدماتنا',
    servicesTitle: 'خدمات متكاملة لهدف واضح.',
    servicesIntro: 'نبدأ بالتحدي الذي يواجه عملك اليوم، ثم نساعدك على اختيار الخطوة العملية التالية.',
    services: [
      ['٠١', 'تحسين البحث والمواقع', 'تحسين محركات البحث التقني والمحلي، واستراتيجية الظهور، ومواقع واضحة وسهلة الاستخدام.', '/ar/services/seo.html', 'اكتشف خدمات تحسين البحث'],
      ['٠٢', 'المحتوى والكتابة التسويقية', 'كتابة المواقع والمدونات وصفحات المنتجات ومحتوى يجيب عن أسئلة العملاء الفعلية.', '/ar/services/content-marketing.html', 'اكتشف خدمات المحتوى'],
      ['٠٣', 'التواصل الاجتماعي والبريد', 'محتوى اجتماعي وتسويق بالبريد يساعدان علامتك على التواصل المستمر مع جمهورها.', '/ar/services/social-media-marketing.html', 'اكتشف خدمات التواصل'],
      ['٠٤', 'الاستراتيجية وجذب العملاء', 'خطة تسويق عملية وتوليد عملاء للشركات وقياس يراعي أهداف عملك.', '/ar/services/digital-marketing-strategy.html', 'اكتشف خدمات الاستراتيجية']
    ],
    paidNote: 'ينصب تركيزنا حالياً على النمو العضوي والقنوات التي تملكها الشركة. لا نقدم إدارة الحملات الإعلانية المدفوعة حالياً.',
    workLabel: 'نماذج من أعمالنا',
    workTitle: 'مشاريع حقيقية. ومساهمة واضحة.',
    workIntro: 'نماذج من المواقع والمحتوى ورحلات العملاء التي عملنا عليها.',
    work: [
      ['case-study-tako-healthcare.jpg', 'تحسين البحث ومحتوى المنتجات', 'TAKO Healthcare', 'دليل منظم للتغليف الطبي يضم معلومات المنتجات وأقساماً واضحة وأسئلة شائعة ومسارات لطلب عروض الأسعار.', 'https://www.takoflexibles.com/medical-packaging-distributors-in-malaysia/', 'عرض المشروع', 'tako-healthcare'],
      ['case-study-tako-internship.jpg', 'المواقع وتجربة التحويل', 'TAKO Internship', 'صفحة متوافقة مع الهاتف تعرض مزايا البرنامج ومتطلبات الأهلية وتتيح التقديم مباشرة عبر واتساب.', 'https://www.takointernship.com/work-from-home-internship-malaysia/', 'عرض المشروع', 'tako-internship'],
      ['case-study-tako-digital-marketing.jpg', 'المحتوى وتوليد عملاء الشركات', 'TAKO Digital Marketing', 'دليل تصدير للمصنّعين يتضمن خطة من ست خطوات ومسارات واضحة لاستفسارات المشترين المحتملين.', 'https://www.takodigitalmarketing.com/how-malaysian-factories-land-overseas-buyers/', 'عرض المشروع', 'tako-digital-marketing']
    ],
    processLabel: 'منهجية العمل',
    processTitle: 'خطوات مدروسة. وتقدم عملي.',
    process: [
      ['٠١', 'نستمع', 'نتعرّف على عملك وجمهورك وأهدافك.'],
      ['٠٢', 'نخطط', 'نختار الأولويات والقنوات المناسبة معاً.'],
      ['٠٣', 'ننشئ', 'نطوّر الصفحات والمحتوى وأساسيات التسويق.'],
      ['٠٤', 'نحسّن', 'نراجع ما ينجح ونحدّد الخطوة التالية.']
    ],
    insightsLabel: 'من مدونة نفير',
    insightsTitle: 'أفكار لتنمية حضورك الرقمي.',
    articles: [
      ['أساسيات تحسين محركات البحث للعلامات النامية', '/ar/blog/seo-fundamentals-growing-brands.html', 'ابدأ بأساسيات البحث التي تساعد العملاء على اكتشاف عملك.'],
      ['كيف تبني استراتيجية تسويق رقمي', '/ar/blog/how-to-build-digital-marketing-strategy.html', 'اربط أهداف عملك بخطة تسويق واضحة وقابلة للتنفيذ.'],
      ['استراتيجيات تسويق للشركات الماليزية', '/ar/blog/marketing-strategies-malaysian-businesses.html', 'خطوات عملية لتعزيز علامتك والوصول إلى جمهورك المناسب.']
    ],
    contactLabel: 'لنتحدث',
    contactTitle: 'أخبرنا بما تريد تنميته.',
    contactText: 'شاركنا نبذة عن عملك والهدف الذي تسعى إليه. نبدأ بحوار يساعدك على تحديد الخطوة العملية التالية.',
    contactCta: 'ابدأ محادثة عبر واتساب',
    emailLabel: 'تفضّل البريد الإلكتروني؟',
    email: 'nafeerdigital@gmail.com',
    copyright: 'جميع الحقوق محفوظة.',
    footerTagline: 'البحث والمواقع والمحتوى الرقمي، في منظومة تساعد أعمالك على النمو.'
  }
];

function renderPage(page) {
  const isArabic = page.lang === 'ar';
  const assetPrefix = page.file === 'index.html' ? '' : '../';
  const workBase = isArabic ? '/ar/work/' : '/en/work/';
  const canonical = `${origin}${page.home}`;
  const englishUrl = `${origin}/en/`;
  const arabicUrl = `${origin}/ar/`;
  const formLabels = isArabic
    ? {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        service: 'الخدمة التي تحتاج إليها',
        serviceOptions: ['تحسين محركات البحث', 'تصميم المواقع', 'المحتوى والكتابة التسويقية', 'التواصل الاجتماعي', 'التسويق بالبريد الإلكتروني', 'توليد العملاء المحتملين', 'أخرى'],
        message: 'أخبرنا عن مشروعك',
        submit: 'إرسال الاستفسار',
        snapshot: 'تفاصيل المشروع',
        allWork: 'استكشف جميع الأعمال',
        liveProject: 'زيارة المشروع'
      }
    : {
        name: 'Your name',
        email: 'Business email',
        service: 'What do you need help with?',
        serviceOptions: ['SEO', 'Website design', 'Content & copywriting', 'Social media', 'Email marketing', 'Lead generation', 'Other'],
        message: 'Tell us about your project',
        submit: 'Send enquiry',
        snapshot: 'Project snapshot',
        allWork: 'Explore all work',
        liveProject: 'Visit live project'
      };
  const services = page.services.map(([number, title, description, href, link]) => `
        <article class="home-service-card">
          <span class="home-card-number">${number}</span>
          <h3>${title}</h3>
          <p>${description}</p>
          <a class="home-text-link" href="${href}">${link}<span aria-hidden="true"> ↗</span></a>
        </article>`).join('');
  const focusServices = page.services.map(([number, title]) => `
        <li><span>${number}</span><strong>${title}</strong></li>`).join('');
  const storyPromises = isArabic
    ? [
        ['٠١', 'نستمع قبل أن نقترح', 'نفهم عملك وجمهورك قبل تحديد الخطوات المناسبة.'],
        ['٠٢', 'خطة واضحة', 'نرتب الأولويات ونوضح ما يمكن إنجازه في كل مرحلة.'],
        ['٠٣', 'متابعة صريحة', 'نشارك التقدم بوضوح ونحدد ما يحتاج إلى تحسين.']
      ]
    : [
        ['01', 'Listen before we recommend', 'Understand your business and audience before choosing the next step.'],
        ['02', 'A clear plan', 'Set priorities and make the work for each stage easy to understand.'],
        ['03', 'Honest progress', 'Share what is moving forward and what needs attention.']
      ];
  const growthSteps = isArabic
    ? [['٠١', 'الظهور', 'تحسين البحث والمحتوى'], ['٠٢', 'بناء الثقة', 'مواقع واضحة ومفيدة'], ['٠٣', 'بدء التواصل', 'خطوة تالية سهلة للعميل']]
    : [['01', 'Be discovered', 'SEO and useful content'], ['02', 'Earn trust', 'Clear, helpful websites'], ['03', 'Start a conversation', 'A simple next step']];
  const work = page.work.map(([, label, title, , , , slug]) => `
        <li class="home-work-row">
          <span class="home-work-category">${label}</span>
          <strong>${title}</strong>
          <a class="home-text-link" href="${workBase}${slug}/">${formLabels.snapshot}<span aria-hidden="true"> ↗</span></a>
        </li>`).join('');
  const steps = page.process.map(([number, title, description]) => `
        <article class="home-process-step">
          <span class="home-card-number">${number}</span>
          <h3>${title}</h3>
          <p>${description}</p>
        </article>`).join('');
  const articles = page.articles.map(([title, href, description], index) => `
        <article class="home-article-card">
          <span class="home-card-number">${String(index + 1).padStart(2, '0')}</span>
          <h3><a href="${href}">${title}</a></h3>
          <p>${description}</p>
          <a class="home-text-link" href="${href}">${isArabic ? 'اقرأ المقال' : 'Read the article'}<span aria-hidden="true"> ↗</span></a>
        </article>`).join('');
  const nav = page.nav.map((label, index) => {
    const targets = ['#about', '#services', workBase, '#process', '#insights'];
    return `<a href="${targets[index]}">${label}</a>`;
  }).join('');
  const mobileNav = page.nav.map((label, index) => {
    const targets = ['#about', '#services', workBase, '#process', '#insights'];
    return `<a href="${targets[index]}">${label}</a>`;
  }).join('');
  const serviceOptions = formLabels.serviceOptions
    .map(option => `<option value="${option}">${option}</option>`)
    .join('');
  const brandTitle = isArabic
    ? page.name
    : '<span>NAFEER</span><span class="home-brand-digital">DIGITAL</span>';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: isArabic ? 'نفير الرقمي | NAFEER DIGITAL' : 'NAFEER DIGITAL',
    url: canonical,
    image: `${origin}/assets/images/hero-map.jpg`,
    telephone: '+601170066150',
    email: page.email,
    address: { '@type': 'PostalAddress', addressCountry: 'MY' },
    description: page.description
  };

  return `<!DOCTYPE html>
<html lang="${page.lang}" dir="${page.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="author" content="NAFEER DIGITAL">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${englishUrl}">
  <link rel="alternate" hreflang="ar" href="${arabicUrl}">
  <link rel="alternate" hreflang="x-default" href="${englishUrl}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:image" content="${origin}/assets/images/hero-map.jpg">
  <meta property="og:site_name" content="NAFEER DIGITAL">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="${assetPrefix}assets/images/favicon.png">
  <link rel="stylesheet" href="${assetPrefix}assets/css/main.css">
  <link rel="stylesheet" href="${assetPrefix}assets/css/home.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body class="home-page">
  <a class="home-skip-link" href="#main-content">${isArabic ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
  <header class="site-header home-site-header">
    <div class="home-container home-header-inner">
      <a class="home-brand" href="${page.home}" aria-label="${page.name}">
        <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
        <span><strong>${brandTitle}</strong><small>${page.tagline}</small></span>
      </a>
      <nav class="home-nav" aria-label="${isArabic ? 'التنقل الرئيسي' : 'Main navigation'}">${nav}</nav>
      <div class="home-header-actions">
        <a class="home-language" href="${page.switchTarget === 'ar' ? '/ar/' : '/en/'}" lang="${page.switchTarget}" hreflang="${page.switchTarget}">${page.switchLabel}</a>
        <a class="home-button home-button--header js-whatsapp-link" href="https://wa.me/601170066150">${isArabic ? 'تحدث معنا' : 'Let’s talk'}</a>
        <details class="home-mobile-menu">
          <summary aria-label="${page.menuLabel}"><span></span><span></span><span></span></summary>
          <nav aria-label="${isArabic ? 'قائمة الهاتف' : 'Mobile navigation'}">${mobileNav}<a href="${page.switchTarget === 'ar' ? '/ar/' : '/en/'}" lang="${page.switchTarget}">${page.switchLabel}</a></nav>
        </details>
      </div>
    </div>
  </header>

  <main id="main-content">
    <section class="home-hero" id="home">
      <div class="home-container home-hero-grid">
        <div class="home-hero-copy">
          <p class="home-eyebrow"><span></span>${page.eyebrow}</p>
          <h1>${page.h1}</h1>
          <p class="home-hero-intro">${page.intro}</p>
          <div class="home-hero-actions">
            <a class="home-button home-button--primary js-whatsapp-link" href="https://wa.me/601170066150">${whatsappIcon}<span>${page.primaryCta}</span></a>
            <a class="home-button home-button--quiet" href="#work">${page.secondaryCta}<span aria-hidden="true"> ↓</span></a>
          </div>
          <p class="home-hero-note">${isArabic ? 'تواصل مباشر · خطة واضحة · نمو رقمي مستدام' : 'A direct conversation · A clear plan · Sustainable digital growth'}</p>
        </div>
        <figure class="home-hero-visual" aria-label="${isArabic ? 'منظومة النمو الرقمي' : 'A connected digital growth system'}">
          <div class="home-visual-header">
            <span>${isArabic ? 'منظومة النمو الرقمي' : 'THE NAFEER GROWTH SYSTEM'}</span>
            <span aria-hidden="true">01 — 03</span>
          </div>
          <div class="home-visual-statement">${isArabic ? 'من الظهور إلى<br>الثقة ثم التواصل.' : 'From being found<br>to being chosen.'}</div>
          <svg class="home-visual-curve" viewBox="0 0 620 150" aria-hidden="true" focusable="false">
            <path d="M12 22H608 M12 58H608 M12 94H608 M12 130H608" fill="none" stroke="#FFFFFF" stroke-opacity=".09" stroke-width="1"></path>
            <path d="M12 127 C105 127 120 102 198 102 S286 112 352 72 S454 73 586 21" fill="none" stroke="#F0C95C" stroke-linecap="round" stroke-width="4"></path>
            <path d="M564 24L589 19L580 43" fill="none" stroke="#F0C95C" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
            <circle cx="12" cy="127" r="5" fill="#FFF3D7"></circle>
            <circle cx="198" cy="102" r="5" fill="#FFF3D7"></circle>
            <circle cx="352" cy="72" r="5" fill="#FFF3D7"></circle>
            <circle cx="586" cy="21" r="6" fill="#F0C95C"></circle>
          </svg>
          <ol class="home-visual-steps">
            ${growthSteps.map(([number, title, description]) => `<li><span>${number}</span><div><strong>${title}</strong><small>${description}</small></div></li>`).join('')}
          </ol>
          <figcaption>${isArabic ? 'تحسين البحث · مواقع الويب · المحتوى المفيد' : 'SEO · WEBSITES · USEFUL CONTENT'}</figcaption>
        </figure>
      </div>
      <ul class="home-container home-focus-ribbon" aria-label="${isArabic ? 'مجالات التركيز' : 'Our focus areas'}">${focusServices}
      </ul>
    </section>

    <section class="home-story" id="about">
      <div class="home-container home-story-grid">
        <div class="home-story-copy">
          <p class="home-kicker">${page.aboutLabel}</p>
          <h2>${page.aboutTitle}</h2>
          <p>${page.aboutText}</p>
          <div class="home-story-promises">
            <p>${isArabic ? 'تجربة عميل تستحق الثقة' : 'A better client experience starts here'}</p>
            <ul>${storyPromises.map(([number, title, description]) => `
              <li><span>${number}</span><div><strong>${title}</strong><small>${description}</small></div></li>`).join('')}
            </ul>
          </div>
        </div>
        <figure class="home-story-visual">
          <img src="/assets/images/hero-map.jpg" alt="" width="440" height="520" loading="lazy">
          <figcaption>
            <span>${isArabic ? 'نفير الرقمي · منظور عالمي' : 'NAFEER DIGITAL · A GLOBAL PERSPECTIVE'}</span>
            <strong>${isArabic ? 'رؤية أوضح. تواصل أكثر معنى.' : 'Clearer visibility. More meaningful connections.'}</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="home-section home-services" id="services">
      <div class="home-container">
        <div class="home-section-heading">
          <p class="home-kicker">${page.servicesLabel}</p>
          <h2>${page.servicesTitle}</h2>
          <p>${page.servicesIntro}</p>
        </div>
        <div class="home-service-grid">${services}</div>
        <div class="home-services-action">
          <a class="home-button home-button--outline" href="${isArabic ? '/ar/services/' : '/en/services/'}">${isArabic ? 'استكشف دليل الخدمات' : 'Explore all services'}<span aria-hidden="true"> ↗</span></a>
        </div>
        <p class="home-paid-note">${page.paidNote}</p>
      </div>
    </section>

    <section class="home-section home-work" id="work">
      <div class="home-container">
        <div class="home-section-heading">
          <p class="home-kicker">${page.workLabel}</p>
          <h2>${page.workTitle}</h2>
          <p>${page.workIntro}</p>
        </div>
        <ul class="home-work-list">${work}</ul>
        <div class="home-work-action"><a class="home-button home-button--outline" href="${workBase}">${formLabels.allWork}<span aria-hidden="true"> ↗</span></a></div>
      </div>
    </section>

    <section class="home-process" id="process">
      <div class="home-container">
        <div class="home-section-heading">
          <p class="home-kicker">${page.processLabel}</p>
          <h2>${page.processTitle}</h2>
        </div>
        <div class="home-process-grid">${steps}</div>
      </div>
    </section>

    <section class="home-section home-insights" id="insights">
      <div class="home-container">
        <div class="home-section-heading home-section-heading--row">
          <div><p class="home-kicker">${page.insightsLabel}</p><h2>${page.insightsTitle}</h2></div>
          <a class="home-button home-button--outline" href="${isArabic ? '/ar/blog/' : '/en/blog/'}">${isArabic ? 'كل المقالات' : 'All insights'}<span aria-hidden="true"> ↗</span></a>
        </div>
        <div class="home-article-grid">${articles}</div>
      </div>
    </section>

    <section class="home-contact" id="contact">
      <div class="home-container home-contact-inner">
        <div class="home-contact-copy">
          <p class="home-kicker">${page.contactLabel}</p>
          <h2>${page.contactTitle}</h2>
          <p>${page.contactText}</p>
          <div class="home-contact-actions">
            <a class="home-button home-button--light js-whatsapp-link" href="https://wa.me/601170066150">${whatsappIcon}<span>${page.contactCta}</span></a>
            <p>${page.emailLabel} <a href="mailto:${page.email}">${page.email}</a></p>
          </div>
        </div>
        <form class="home-contact-form" id="consultation-form" action="https://formsubmit.co/${page.email}" method="POST">
          <label for="contact-name">${formLabels.name}</label>
          <input class="form-input" id="contact-name" name="name" autocomplete="name" required>
          <label for="contact-email">${formLabels.email}</label>
          <input class="form-input" id="contact-email" type="email" name="email" autocomplete="email" required>
          <label for="contact-service">${formLabels.service}</label>
          <select class="form-select" id="contact-service" name="service" required>
            <option value="" selected disabled>${formLabels.service}</option>
            ${serviceOptions}
          </select>
          <label for="contact-message">${formLabels.message}</label>
          <textarea class="form-textarea" id="contact-message" name="message" rows="4" required></textarea>
          <button class="home-button home-button--primary" type="submit">${formLabels.submit}</button>
          <p id="form-feedback" class="form-feedback" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>

  <footer class="home-footer">
    <div class="home-container">
      <div class="home-footer-main">
        <a class="home-brand" href="${page.home}" aria-label="${page.name}">
          <span class="brand-mark" aria-hidden="true">N<span class="brand-mark-dot"></span></span>
          <span><strong>${brandTitle}</strong><small>${page.tagline}</small></span>
        </a>
        <p>${page.footerTagline}</p>
        <nav aria-label="${isArabic ? 'روابط الخدمات' : 'Service links'}">
          <a href="${isArabic ? '/ar/services/seo.html' : '/en/services/seo.html'}">${isArabic ? 'تحسين محركات البحث' : 'SEO'}</a>
          <a href="${isArabic ? '/ar/services/website-design-development.html' : '/en/services/website-design-development.html'}">${isArabic ? 'تصميم المواقع' : 'Websites'}</a>
          <a href="${isArabic ? '/ar/services/content-marketing.html' : '/en/services/content-marketing.html'}">${isArabic ? 'التسويق بالمحتوى' : 'Content'}</a>
          <a href="${isArabic ? '/ar/services/email-marketing.html' : '/en/services/email-marketing.html'}">${isArabic ? 'التسويق بالبريد الإلكتروني' : 'Email marketing'}</a>
          <a href="${isArabic ? '/ar/services/social-media-marketing.html' : '/en/services/social-media-marketing.html'}">${isArabic ? 'التواصل الاجتماعي' : 'Social media'}</a>
          <a href="${isArabic ? '/ar/services/b2b-lead-generation.html' : '/en/services/b2b-lead-generation.html'}">${isArabic ? 'توليد العملاء المحتملين' : 'Lead generation'}</a>
        </nav>
      </div>
      <div class="home-footer-bottom">
        <span>© ${new Date().getFullYear()} ${page.name}. ${page.copyright}</span>
        <a href="${page.switchTarget === 'ar' ? '/ar/' : '/en/'}" lang="${page.switchTarget}" hreflang="${page.switchTarget}">${page.switchLabel}</a>
        <a href="/sitemap.xml">${isArabic ? 'خريطة الموقع' : 'Sitemap'}</a>
      </div>
    </div>
  </footer>
  <a class="home-floating-whatsapp js-whatsapp-link" href="https://wa.me/601170066150" aria-label="${page.primaryCta}">${whatsappIcon}<span>${isArabic ? 'واتساب' : 'WhatsApp'}</span></a>
  <script src="${assetPrefix}assets/js/main.js" defer></script>
</body>
</html>
`;
}

for (const page of pages) {
  const destination = path.resolve(__dirname, '..', page.file);
  fs.writeFileSync(destination, renderPage(page), 'utf8');
  console.log(`Generated ${path.relative(path.resolve(__dirname, '..'), destination)}`);
}
