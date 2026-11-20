const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT_DIR = path.resolve(__dirname, '..');
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }
  let filePath = path.join(ROOT_DIR, reqPath);
  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath += '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found: ' + filePath);
  }
});

server.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);

  const endpoints = [
    '/',
    '/en/',
    '/ar/',
    '/work.html',
    '/ar/work.html',
    '/en/work/',
    '/ar/work/',
    '/en/work/tako-healthcare/',
    '/en/work/tako-internship/',
    '/en/work/tako-digital-marketing/',
    '/ar/work/tako-healthcare/',
    '/ar/work/tako-internship/',
    '/ar/work/tako-digital-marketing/',
    '/en/services/',
    '/ar/services/',
    '/en/services/seo.html',
    '/ar/services/seo.html',
    '/en/services/technical-seo.html',
    '/ar/services/technical-seo.html',
    '/en/services/local-seo.html',
    '/ar/services/local-seo.html',
    '/en/services/content-marketing.html',
    '/ar/services/content-marketing.html',
    '/en/services/social-media-marketing.html',
    '/ar/services/social-media-marketing.html',
    '/en/services/email-marketing.html',
    '/ar/services/email-marketing.html',
    '/en/services/b2b-lead-generation.html',
    '/ar/services/b2b-lead-generation.html',
    '/en/services/digital-marketing-strategy.html',
    '/ar/services/digital-marketing-strategy.html',
    '/en/services/website-design-development.html',
    '/ar/services/website-design-development.html',
    '/en/services/marketing-analytics.html',
    '/ar/services/marketing-analytics.html',
    '/en/services/branding-and-brand-strategy.html',
    '/ar/services/branding-and-brand-strategy.html',
    '/en/services/ppc-advertising.html',
    '/ar/services/ppc-advertising.html',
    '/en/services/google-ads.html',
    '/ar/services/google-ads.html',
    '/en/blog/',
    '/ar/blog/',
    '/en/blog/how-seo-helps-small-businesses.html',
    '/ar/blog/how-seo-helps-small-businesses.html',
    '/en/blog/seo-vs-paid-advertising.html',
    '/ar/blog/seo-vs-paid-advertising.html',
    '/sitemap.xml',
    '/robots.txt',
    '/assets/images/favicon.ico',
    '/site.webmanifest',
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/images/logo-icon.png',
    '/assets/images/logo-icon.svg',
    '/assets/images/favicon-48x48.png',
    '/assets/images/apple-touch-icon.png'
  ];

  let passed = 0;
  for (const ep of endpoints) {
    try {
      const res = await fetch(`http://localhost:${PORT}${ep}`);
      if (res.status === 200) {
        console.log(`[PASS] 200 OK: ${ep} (${res.headers.get('content-type')})`);
        passed++;
      } else {
        console.error(`[FAIL] ${res.status}: ${ep}`);
      }
    } catch (err) {
      console.error(`[ERROR] ${ep}:`, err.message);
    }
  }

  // Content & Parity Check
  for (const ep of ['/', '/en/', '/ar/']) {
    try {
      const res = await fetch(`http://localhost:${PORT}${ep}`);
      const html = await res.text();
      const isAr = ep === '/ar/';
      const hasCorrectLang = html.includes(isAr ? 'lang="ar"' : 'lang="en"');
      const hasCorrectDir = html.includes(isAr ? 'dir="rtl"' : 'dir="ltr"');
      const hasLogo = html.includes('assets/images/logo-icon.png');
      const hasServices = html.includes('id="services"');
      const hasProcess = html.includes('id="process"');
      const hasContact = html.includes('id="contact"');
      const hasWhatsApp = html.includes('wa.me/601170066150');
      const logoElements = html.match(/<img\b[^>]*class="brand-logo-img"[^>]*>/g) || [];
      const hasConsistentResponsiveLogo = logoElements.length > 1
        && logoElements.every(element => /src="(?:\.\.\/)?assets\/images\/logo-icon\.png"/.test(element));
      const hasFavicon = html.includes('rel="icon"') && html.includes('/assets/images/favicon.ico');

      if (res.ok && hasCorrectLang && hasCorrectDir && hasLogo && hasConsistentResponsiveLogo && hasServices && hasProcess && hasContact && hasWhatsApp && hasFavicon) {
        console.log(`[PASS] Complete brand, layout, RTL/LTR parity & navigation check: ${ep}`);
        passed++;
      } else {
        console.error(`[FAIL] Parity check failed for: ${ep}`, {
          hasCorrectLang, hasCorrectDir, hasLogo, hasConsistentResponsiveLogo, hasServices, hasProcess, hasContact, hasWhatsApp, hasFavicon
        });
      }
    } catch (err) {
      console.error(`[ERROR] Parity check ${ep}:`, err.message);
    }
  }

  for (const ep of ['/en/blog/', '/ar/blog/']) {
    try {
      const res = await fetch(`http://localhost:${PORT}${ep}`);
      const html = await res.text();
      const hasFeaturedImage = html.includes('class="blog-featured-image"');
      const hasEditorialCards = html.includes('class="editorial-article-card"');

      if (res.ok && hasFeaturedImage && hasEditorialCards) {
        console.log(`[PASS] Editorial imagery and article cards: ${ep}`);
        passed++;
      } else {
        console.error(`[FAIL] Blog listing presentation check failed for: ${ep}`, {
          hasFeaturedImage, hasEditorialCards
        });
      }
    } catch (err) {
      console.error(`[ERROR] Blog listing check ${ep}:`, err.message);
    }
  }

  for (const ep of ['/en/blog/seo-vs-paid-advertising.html', '/ar/blog/seo-vs-paid-advertising.html']) {
    try {
      const res = await fetch(`http://localhost:${PORT}${ep}`);
      const html = await res.text();
      const hasComparisonTable = html.includes('class="article-comparison"')
        && html.includes('<th scope="col">');

      if (res.ok && hasComparisonTable) {
        console.log(`[PASS] Accessible comparison table: ${ep}`);
        passed++;
      } else {
        console.error(`[FAIL] Comparison table check failed for: ${ep}`, { hasComparisonTable });
      }
    } catch (err) {
      console.error(`[ERROR] Comparison table check ${ep}:`, err.message);
    }
  }

  const totalTests = endpoints.length + 7;
  console.log(`\nResults: ${passed} / ${totalTests} tests passed successfully.`);
  server.close(() => {
    console.log('Server shut down cleanly.');
    process.exit(passed === totalTests ? 0 : 1);
  });
});
