const fs = require('fs');
const path = require('path');
const articles = require('./data_blog.js');
const editorial = require('./blog_editorial_content.js');

const root = path.resolve(__dirname, '..');
const siteUrl = 'https://nafeerdigital.com';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function plainText(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function readingTime(html, language) {
  const words = plainText(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(4, Math.ceil(words / (language === 'ar' ? 150 : 190)));
  return language === 'ar' ? `قراءة نحو ${minutes} دقائق` : `About ${minutes} min read`;
}

function withHeadingIds(html) {
  let index = 0;
  return html.replace(/<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (_, content) => {
    index += 1;
    return `<h2 id="article-section-${index}">${content}</h2>`;
  });
}

function renderTable(guide, language) {
  const isArabic = language === 'ar';
  const headings = isArabic
    ? ['المجال', 'ما الذي تفعله', 'ما الذي تتحقق منه']
    : ['Area', 'Practical action', 'What to check'];
  const caption = isArabic
    ? 'إطار عملي لتطبيق الأفكار في هذا الدليل'
    : 'A practical framework for applying this guide';

  return `<div class="article-table-wrap" role="region" aria-label="${escapeHtml(caption)}" tabindex="0">
    <table class="article-guide-table">
      <caption>${escapeHtml(caption)}</caption>
      <thead><tr>${headings.map(item => `<th scope="col">${escapeHtml(item)}</th>`).join('')}</tr></thead>
      <tbody>${guide.rows.map(row => `<tr>${row.map((cell, index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${escapeHtml(cell)}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function renderComparisonTable(language) {
  const isArabic = language === 'ar';
  const rows = isArabic
    ? [
      ['الظهور', 'نتائج عضوية مكتسبة؛ الترتيب يتغير ولا يُضمن.', 'ظهور مدفوع عند أهلية الحملة؛ الموضع والتسليم غير مضمونين.'],
      ['الاستثمار', 'عمل مستمر على التقنية والمحتوى والموثوقية.', 'ميزانية وسائط وعمل على الإعداد والإدارة.'],
      ['استخدام مناسب', 'تطوير الاكتشاف العضوي على المدى الطويل.', 'اختبار رسالة أو دعم عرض محدد المدة.']
    ]
    : [
      ['Visibility', 'Earned organic placement; rankings can change and are not guaranteed.', 'Paid delivery while eligible; placement and volume are not guaranteed.'],
      ['Investment', 'Ongoing technical, content and authority work.', 'Media budget plus setup and management.'],
      ['Useful for', 'Developing long-term organic discoverability.', 'Testing a message or supporting a time-bound offer.']
    ];
  const headings = isArabic ? ['المعيار', 'تحسين محركات البحث', 'الإعلانات المدفوعة'] : ['Consideration', 'SEO', 'Paid advertising'];
  const caption = isArabic ? 'مقارنة عملية بين مسارين مختلفين' : 'A practical comparison of two different channels';

  return `<div class="article-table-wrap" role="region" aria-label="${escapeHtml(caption)}" tabindex="0">
    <table class="article-guide-table">
      <caption>${escapeHtml(caption)}</caption>
      <thead><tr>${headings.map(item => `<th scope="col">${escapeHtml(item)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map((cell, index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${escapeHtml(cell)}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function renderMain(article, guide, language) {
  const isArabic = language === 'ar';
  const category = isArabic ? article.categoryAr : article.categoryEn;
  const title = isArabic ? article.titleAr : article.titleEn;
  const body = isArabic ? article.contentHtmlAr : article.contentHtmlEn;
  const home = isArabic ? '../../ar/' : '../../en/';
  const blog = isArabic ? '../../ar/blog/' : '../../en/blog/';
  const summaryHeading = isArabic ? 'في هذا الدليل' : 'In this guide';
  const tocHeading = isArabic ? 'محتويات المقال' : 'On this page';
  const processHeading = isArabic ? 'طريقة تطبيق الأفكار' : 'A way to apply the ideas';
  const frameworkNote = isArabic
    ? 'مخطط توضيحي؛ تكيّف الخطوات مع سياق العمل والبيانات المتاحة.'
    : 'Illustrative process; adapt the steps to your context and available evidence.';
  const imageNote = isArabic
    ? 'صورة تحريرية توضيحية وليست عرضاً لنتائج حملة.'
    : 'Editorial image for context, not a representation of campaign results.';
  const relatedHeading = isArabic ? 'اقرأ أيضاً' : 'Continue reading';
  const closeHeading = isArabic ? 'حوّل الفكرة إلى خطوة مناسبة لعملك' : 'Turn the idea into a useful next step';
  const closeCopy = isArabic
    ? 'ابدأ بتحديد هدفك وسياقك، ثم ناقش الخيارات المتاحة دون افتراض نتيجة مسبقة.'
    : 'Start with your goal and context, then discuss practical options without assuming an outcome.';
  const contactLabel = isArabic ? 'تواصل معنا' : 'Talk with us';
  const imageAlt = guide.imageAlt;

  const headings = [];
  let articleBody = withHeadingIds(body);
  articleBody.replace(/<h2 id="article-section-(\d+)">([\s\S]*?)<\/h2>/gi, (_, id, text) => {
    headings.push({ id: `article-section-${id}`, label: plainText(text) });
    return _;
  });
  const practicalHeadingId = `article-section-${headings.length + 1}`;
  headings.push({ id: practicalHeadingId, label: guide.heading });

  const related = articles.filter(item => item.slug !== article.slug).slice(0, 3);
  const relatedCards = related.map(item => {
    const relatedTitle = isArabic ? item.titleAr : item.titleEn;
    const href = `${blog}${item.slug}.html`;
    return `<li><a href="${escapeHtml(href)}">${escapeHtml(relatedTitle)}<span aria-hidden="true"> ↗</span></a></li>`;
  }).join('');

  const keys = guide.takeaways.map(point => `<li>${escapeHtml(point)}</li>`).join('');
  const steps = guide.steps.map((step, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${escapeHtml(step)}</li>`).join('');
  const toc = headings.map(item => `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`).join('');
  const practicalSection = `<section class="article-practical">
    <h2 id="${practicalHeadingId}">${escapeHtml(guide.heading)}</h2>
    ${article.slug === 'seo-vs-paid-advertising' ? renderComparisonTable(language) : renderTable(guide, language)}
    <p class="article-example-note">${escapeHtml(guide.example)}</p>
  </section>`;

  return `<main class="article-page" id="top">
    <header class="article-page-hero">
      <div class="container article-hero-inner">
        <nav class="breadcrumbs" aria-label="${isArabic ? 'مسار التنقل' : 'Breadcrumb'}">
          <a href="${home}">${isArabic ? 'الرئيسية' : 'Home'}</a>
          <span aria-hidden="true">/</span>
          <a href="${blog}">${isArabic ? 'المدونة' : 'Insights'}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">${escapeHtml(category)}</span>
        </nav>
        <p class="article-category">${escapeHtml(category)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p class="article-deck">${escapeHtml(guide.summary)}</p>
        <div class="article-meta">
          <span>${isArabic ? 'فريق التحرير في نفير الرقمي' : 'NAFEER DIGITAL Editorial'}</span>
          <span aria-hidden="true">·</span>
          <span>${readingTime(`${body} ${guide.introduction} ${guide.example}`, language)}</span>
        </div>
      </div>
    </header>
    <section class="article-reading-section">
      <div class="container article-reading-layout">
        <aside class="article-sidebar" aria-label="${isArabic ? 'ملخص ومحتويات المقال' : 'Article summary and contents'}">
          <section class="article-takeaways">
            <h2>${summaryHeading}</h2>
            <ul>${keys}</ul>
          </section>
          <nav class="article-toc" aria-label="${tocHeading}">
            <h2>${tocHeading}</h2>
            <ol>${toc}</ol>
          </nav>
        </aside>
        <div class="article-main-column">
          <figure class="article-cover">
            <img src="../../assets/images/${escapeHtml(guide.image)}" alt="${escapeHtml(imageAlt)}" width="1024" height="680" fetchpriority="high">
            <figcaption>${imageNote}</figcaption>
          </figure>
          <figure class="article-process" aria-labelledby="article-process-title">
            <figcaption id="article-process-title">${processHeading}</figcaption>
            <ol>${steps}</ol>
            <p>${frameworkNote}</p>
          </figure>
          <article class="article-content">
            <p class="article-lead">${escapeHtml(guide.introduction)}</p>
            ${articleBody}
            ${practicalSection}
          </article>
          <nav class="article-related" aria-label="${relatedHeading}">
            <h2>${relatedHeading}</h2>
            <ul>${relatedCards}</ul>
          </nav>
          <section class="article-contact">
            <h2>${closeHeading}</h2>
            <p>${closeCopy}</p>
            <a class="btn btn-primary" href="${home}#contact">${contactLabel}</a>
          </section>
          <p class="article-back-link"><a href="${blog}">← ${isArabic ? 'العودة إلى جميع المقالات' : 'Back to all insights'}</a></p>
        </div>
      </div>
    </section>
  </main>`;
}

function updateHead(html, article, guide, language) {
  const languageGuide = guide[language];
  const title = language === 'ar' ? article.metaTitleAr : article.metaTitleEn;
  const description = languageGuide.summary;
  const canonical = `${siteUrl}/${language}/blog/${article.slug}.html`;
  const image = `${siteUrl}/assets/images/${guide.image}`;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta property="og:type" content="[^"]*">/i, '<meta property="og:type" content="article">');
  html = html.replace(/<meta property="og:url" content="[^"]*">/i, `<meta property="og:url" content="${canonical}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/i, `<meta property="og:image" content="${image}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/i, `<meta name="twitter:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/i, `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  if (/<meta name="twitter:image" content="[^"]*">/i.test(html)) {
    html = html.replace(/<meta name="twitter:image" content="[^"]*">/i, `<meta name="twitter:image" content="${image}">`);
  } else {
    html = html.replace(/<meta name="twitter:card" content="[^"]*">/i, match => `${match}\n  <meta name="twitter:image" content="${image}">`);
  }

  const schemaTag = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i;
  const match = html.match(schemaTag);
  if (match) {
    const schema = JSON.parse(match[1]);
    schema.headline = language === 'ar' ? article.titleAr : article.titleEn;
    schema.description = description;
    schema.image = image;
    schema.inLanguage = language;
    schema.wordCount = plainText(language === 'ar' ? article.contentHtmlAr : article.contentHtmlEn).split(/\s+/).filter(Boolean).length;
    html = html.replace(schemaTag, `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`);
  }
  return html;
}

let generated = 0;
for (const article of articles) {
  const guide = editorial[article.slug];
  if (!guide) throw new Error(`Missing editorial content for ${article.slug}`);

  for (const language of ['en', 'ar']) {
    const file = path.join(root, language, 'blog', `${article.slug}.html`);
    if (!fs.existsSync(file)) throw new Error(`Missing published article page: ${file}`);

    const languageGuide = guide[language];
    languageGuide.image = guide.image;
    languageGuide.imageAlt = language === 'ar'
      ? 'صورة تحريرية توضيحية مرتبطة بالتسويق الرقمي'
      : 'Editorial image illustrating a digital marketing topic';
    const html = fs.readFileSync(file, 'utf8');
    const mainPattern = /<main\b[^>]*>[\s\S]*?<\/main>/i;
    if (!mainPattern.test(html)) throw new Error(`Could not find main content in ${file}`);
    const updated = updateHead(html, article, guide, language).replace(
      mainPattern,
      renderMain(article, languageGuide, language)
    );
    fs.writeFileSync(file, updated, 'utf8');
    generated += 1;
  }
}

console.log(`Generated ${generated} bilingual editorial article pages.`);
