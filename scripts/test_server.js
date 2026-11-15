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
    '/en/',
    '/ar/',
    '/en/services/',
    '/ar/services/',
    '/en/services/seo.html',
    '/ar/services/seo.html',
    '/en/blog/',
    '/ar/blog/',
    '/en/blog/how-seo-helps-small-businesses.html',
    '/ar/blog/how-seo-helps-small-businesses.html',
    '/sitemap.xml',
    '/robots.txt',
    '/assets/css/main.css',
    '/assets/js/theme-customizer.js',
    '/assets/js/main.js',
    '/assets/images/logo.jpg'
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

  console.log(`\nResults: ${passed} / ${endpoints.length} tests passed successfully.`);
  server.close(() => {
    console.log('Server shut down cleanly.');
    process.exit(passed === endpoints.length ? 0 : 1);
  });
});
