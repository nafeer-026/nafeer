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
  '.json': 'application/json'
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
    '/work/',
    '/work/tako-healthcare/',
    '/work/tako-internship/',
    '/work/tako-digital-marketing/',
    '/en/',
    '/en/work/',
    '/en/work/tako-healthcare/',
    '/en/work/tako-internship/',
    '/en/work/tako-digital-marketing/',
    '/ar/',
    '/ar/work/',
    '/ar/work/tako-healthcare/',
    '/ar/work/tako-internship/',
    '/ar/work/tako-digital-marketing/',
    '/en/services/',
    '/ar/services/',
    '/en/services/email-marketing.html',
    '/ar/services/email-marketing.html',
    '/en/services/google-ads.html',
    '/ar/services/google-ads.html',
    '/en/services/ppc-advertising.html',
    '/ar/services/ppc-advertising.html',
    '/en/services/seo.html',
    '/ar/services/seo.html',
    '/en/services/branding-and-brand-strategy.html',
    '/ar/services/branding-and-brand-strategy.html',
    '/en/services/digital-marketing-strategy.html',
    '/ar/services/digital-marketing-strategy.html',
    '/en/services/google-ads.html',
    '/ar/services/google-ads.html',
    '/en/blog/',
    '/ar/blog/',
    '/en/blog/how-seo-helps-small-businesses.html',
    '/ar/blog/how-seo-helps-small-businesses.html',
    '/sitemap.xml',
    '/robots.txt',
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/images/hero-map.jpg',
    '/assets/images/logo.jpg',
    '/assets/images/logo-icon.png',
    '/assets/images/favicon.png'
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

  for (const ep of ['/en/', '/ar/']) {
    try {
      const res = await fetch(`http://localhost:${PORT}${ep}`);
      const html = await res.text();
      const hasInlineMark = html.includes('class="brand-mark"');
      const hasFocusRibbon = html.includes('class="home-container home-focus-ribbon"');
      const hasTextWorkList = html.includes('class="home-work-list"');
      const hasStorySection = html.includes('class="home-story"');
      const hasStoryPhoto = html.includes('src="/assets/images/hero-map.jpg"');
      const hasClientCommitments = html.includes(ep === '/ar/' ? 'تجربة عميل تستحق الثقة' : 'A better client experience starts here');
      const containsWorkImage = /<img\b[^>]*(?:logo(?:-icon)?\.(?:jpg|png)|case-study-tako-)/i.test(html);
      if (res.ok && hasInlineMark && hasFocusRibbon && hasTextWorkList && hasStorySection && hasStoryPhoto && hasClientCommitments && !containsWorkImage) {
        console.log(`[PASS] Brand, story image, client commitments, and text-only work layout: ${ep}`);
        passed++;
      } else {
        console.error(`[FAIL] Brand, story image, client commitments, and text-only work layout: ${ep}`);
      }
    } catch (err) {
      console.error(`[ERROR] Content check ${ep}:`, err.message);
    }
  }

  const totalTests = endpoints.length + 2;
  console.log(`\nResults: ${passed} / ${totalTests} tests passed successfully.`);
  server.close(() => {
    console.log('Server shut down cleanly.');
    process.exit(passed === totalTests ? 0 : 1);
  });
});
