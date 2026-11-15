# NAFEER DIGITAL — Website

The official single-page website of **NAFEER DIGITAL**, a full-service digital marketing agency.

🌐 **Live:** _coming soon (Vercel)_ · 📦 **Repo:** [github.com/nafeer-026/nafeer](https://github.com/nafeer-026/nafeer)

## What's inside

| File | Purpose |
|---|---|
| `index.html` | **Production page** — complete document (head, meta, SEO) wrapping the site |
| `nafeer.html` | Original raw export (editor fragment) — kept as reference |

The entire site lives in one self-contained file: all CSS is inline, images are base64-embedded,
and there is **zero JavaScript** — even the language switch and mobile menu are pure CSS.

## Features

- 🌍 **Bilingual EN / العربية** — pure-CSS radio-button switcher with full RTL support
- 📄 **Six sections as pages** — Home, About, Services, Portfolio, Blog, Contact
- 💬 **Lead generation** — WhatsApp CTAs (`+60 11 7006 6150`), contact form via FormSubmit (`nafeerdigital@gmail.com`), floating WhatsApp button
- 🎨 Inline SVG illustrations & animations (no image weight)

## Roadmap (scaling later)

1. **Responsive pass** — add `@media` queries (current version is desktop-oriented)
2. Split CSS/JS into files; optimize base64 images to real assets
3. Multi-page architecture or framework migration
4. Custom domain + analytics (GA4) + SEO sitemap/robots

## Deploy (Vercel)

1. Push to this GitHub repo (done via `git push`)
2. On [vercel.com](https://vercel.com) → **Add New… → Project → Import** `nafeer-026/nafeer`
3. Framework preset: **Other** (static) — no build command needed
4. Deploy → every future `git push` auto-deploys

## Local preview

Just open `index.html` in any browser — no build step, no server required.
