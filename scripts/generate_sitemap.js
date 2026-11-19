const fs = require('fs');
const path = require('path');

const root = 'c:/Users/HP 830 G5/OneDrive/Desktop/nafeer';
const SITE_URL = 'https://nafeerdigital.com';
const TODAY = '2026-11-19';

const services = [
  'seo.html',
  'technical-seo.html',
  'local-seo.html',
  'content-marketing.html',
  'social-media-marketing.html',
  'email-marketing.html',
  'b2b-lead-generation.html',
  'digital-marketing-strategy.html',
  'website-design-development.html',
  'marketing-analytics.html',
  'branding-and-brand-strategy.html',
  'ppc-advertising.html',
  'google-ads.html'
];

const blogsData = require(path.join(root, 'scripts/data_blog.js'));
const blogSlugs = blogsData.map(b => b.slug + '.html');

const caseStudies = [
  'tako-healthcare/',
  'tako-internship/',
  'tako-digital-marketing/'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Core Homepages -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>
  <url>
    <loc>${SITE_URL}/en/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>

  <!-- Work & Case Studies Hubs -->
  <url>
    <loc>${SITE_URL}/work.html</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/work.html" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/work.html" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/work.html" />
  </url>
  <url>
    <loc>${SITE_URL}/en/work/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/work/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/work/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/work/" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/work/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/work/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/work/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/work/" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/work.html</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/work.html" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/work.html" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/work.html" />
  </url>
`;

// Case study routes
caseStudies.forEach(cs => {
  xml += `  <url>
    <loc>${SITE_URL}/en/work/${cs}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/work/${cs}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/work/${cs}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/work/${cs}" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/work/${cs}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/work/${cs}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/work/${cs}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/work/${cs}" />
  </url>\n`;
});

// Services Hubs
xml += `  <!-- Services Hubs -->
  <url>
    <loc>${SITE_URL}/en/services/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/services/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/services/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/services/" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/services/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/services/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/services/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/services/" />
  </url>\n`;

// 13 Services
services.forEach(s => {
  xml += `  <url>
    <loc>${SITE_URL}/en/services/${s}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/services/${s}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/services/${s}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/services/${s}" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/services/${s}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/services/${s}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/services/${s}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/services/${s}" />
  </url>\n`;
});

// Blog Hubs
xml += `  <!-- Blog & Insights Hubs -->
  <url>
    <loc>${SITE_URL}/en/blog/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/blog/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/blog/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/blog/" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/blog/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/blog/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/blog/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/blog/" />
  </url>\n`;

// 13 Blog Articles
blogSlugs.forEach(b => {
  xml += `  <url>
    <loc>${SITE_URL}/en/blog/${b}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/blog/${b}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/blog/${b}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/blog/${b}" />
  </url>
  <url>
    <loc>${SITE_URL}/ar/blog/${b}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/blog/${b}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/blog/${b}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/blog/${b}" />
  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), xml, 'utf8');
console.log('Successfully generated authoritative sitemap.xml with all bilingual routes!');
