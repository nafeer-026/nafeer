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
- 📱 **Fully responsive** — CSS-only breakpoints (920 / 880 / 820 / 640 / 430px): hamburger menu, adaptive grids, stacked sections — zero JavaScript
- 📄 **Six sections as pages** — Home, About, Services, Portfolio, Blog, Contact
- 💬 **Lead generation** — WhatsApp CTAs (`+60 11 7006 6150`), contact form via FormSubmit (`nafeerdigital@gmail.com`), floating WhatsApp button
- 🎨 Inline SVG illustrations & animations (no image weight)

### Responsive behavior

All responsive rules live in the `<style id="nd-responsive">` block and are **additive** — layouts above 920px behave exactly as the original design.

| Width | Changes |
|---|---|
| ≤920px | Hamburger menu (pure-CSS dropdown via `#nd-m`), header CTA hidden, split sections stack, 4-column grids → 2×2 hairline grid |
| ≤880px | Quick-guide 5 → 3 columns |
| ≤820px | Footer 3 → 2 columns (brand spans full width) |
| ≤640px | Tighter page gutters (32px), form fields stack, footer 1 column, quick-guide 2 columns, hero map dimmed |
| ≤430px | Feature/step/why grids → single column, contact buttons full-width |

## Roadmap (scaling later)

1. ~~Responsive pass~~ ✅ **Done** — CSS-only responsive layer shipped (see table above)
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
