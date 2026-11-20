# NAFEER DIGITAL | نفير الرقمي — Official Website

The official, international, premium digital marketing agency website of **NAFEER DIGITAL (نفير الرقمي)**.

🌐 **Production Site:** [https://nafeer-sigma.vercel.app](https://nafeer-sigma.vercel.app) · 📦 **Repository:** [github.com/nafeer-026/nafeer](https://github.com/nafeer-026/nafeer)

---

## 🚀 Overview of Redesign & Architecture

This repository contains the completely redesigned, fully responsive, bilingual (English & Arabic) multi-page web platform for **NAFEER DIGITAL**, engineered according to international agency standards, modern UI/UX design, and technical SEO best practices.

### Key Pillars & Accomplishments

1. **Brand Identity & Aesthetics:**
   - A restrained palette of deep burgundy (`#32131B`), brass gold (`#C69A35`), olive, violet, and soft ivory surfaces (`#F8F5F1`), drawn from the supplied logo.
   - The on-page brand mark is recreated with HTML and CSS, including the N, circular arcs, and rising arrow; the logo image is not used in page headers or footers.
   - The homepage pairs an original growth illustration with a market-connection image, a bilingual service ribbon, and a text-only project list. Project screenshots appear only on dedicated work pages.
   - The bilingual story section explains the agency’s purpose and client commitments without inventing founding dates, customer quotes, or satisfaction statistics.
   - Professional typography: `Plus Jakarta Sans` for English and `Cairo` / `Tajawal` for Arabic.

2. **Mobile-First Responsive Layout:**
   - Resolved narrow mobile containers: full mobile viewport utilization (`100%` width with fluid gutters).
   - Fluid typography using CSS `clamp()`.
   - Adaptive grids for smartphones (<640px), tablets (641px - 1024px), laptops (1025px - 1440px), and large displays (>1440px).
   - Zero horizontal overflow, touch-friendly navigation drawer, and floating action triggers.

3. **Complete Bilingual Implementation (English & Arabic):**
   - **Strict Single-Language Display:** Only one language is active at a time.
   - **English (Default):** LTR layout, English typography, English navigation, and English CTAs.
   - **Arabic (RTL):** Full right-to-left alignment, Arabic typography, Arabic brand name **(نفير الرقمي)**, and Arabic CTAs.
   - Dedicated SEO URLs:
     - Root `/` and `/en/` for English
     - `/ar/` for Arabic
     - `/en/services/` and `/ar/services/`
     - `/en/blog/` and `/ar/blog/`
     - `/en/work/` and `/ar/work/`, with bilingual project snapshots
     - `/en/services/email-marketing.html` and `/ar/services/email-marketing.html`
   - Instant language switching with `localStorage` memory and automated URL synchronization.
   - Bidirectional `hreflang` tags on all 55 indexed pages.

4. **Interactive Theme & Mood Customizer:**
   - Floating customization trigger button and header trigger.
   - **6 Ready-Made Themes:** NAFEER Signature, Midnight Professional, Royal Luxury, Ocean Blue, Modern Minimal, Emerald Premium.
   - **5 Visual Moods:** Professional, Luxury, Modern, Minimal, Dark.
   - **Light / Dark Mode Toggle.**
   - **Live Custom Color Pickers:** Primary, Secondary, Accent, Background.
   - `localStorage` persistence and "Reset to Official Default" functionality.

5. **Founder Credentials & Credibility (Section 8):**
   - Highlighting founder **Mohamed Alhadi (Mohamed Alhadi Alneel)**.
   - Verified credentials: **Illinois Institute of Technology (IIT)** Digital Marketing Course completed with a **97.5% grade**.
   - Verified experience in technical SEO, market research, content strategy, team operations, and voluntary community empowerment.
   - Ethical, transparent separation between individual qualifications and corporate milestones.

6. **Current Service Pages (EN & AR):**
   - Search Engine Optimization (SEO)
   - Technical SEO
   - Local SEO
   - Content Marketing
   - Social Media Marketing
   - Email Marketing
   - B2B Lead Generation
   - Digital Marketing Strategy
   - Website Design and Development
   - Marketing Analytics and Reporting
   - Branding and Brand Strategy
   - PPC and Google Ads URLs are retained as noindex availability notices; paid campaign management is not currently offered.
   - Each with problems solved, 4-step methodology, commercial benefits, FAQs, schema, and internal linking.

7. **13 In-Depth Blog Articles (EN & AR):**
   - 10 newly authored strategic guides + 3 original preserved topics fully developed into comprehensive 1,000+ word guides.
   - JSON-LD `BlogPosting` schema, reading times, category tags, author boxes, and conversion CTAs.

8. **Lead Generation & Contact Integrations:**
   - Bilingual multi-field enquiry form with client-side validation and explicit error/success feedback.
   - Integrated with FormSubmit endpoint (`nafeerdigital@gmail.com`); submissions are only reported as successful after a confirmed response.
   - Pre-filled **WhatsApp integrations** with language-tailored messages:
     - **EN:** `"Hello NAFEER DIGITAL, I'm interested in your digital marketing services. I'd like to discuss my business requirements."`
     - **AR:** `"مرحباً نفير الرقمي، أنا مهتم بخدمات التسويق الرقمي لديكم وأرغب في مناقشة احتياجات عملي."`
   - Direct contacts: Phone `+60 11 7006 6150`, `nafeerdigital@gmail.com`, manager `m.alhadi.alneel@gmail.com`.

9. **Technical SEO & Core Web Vitals:**
   - `sitemap.xml` includes the bilingual home, services, blog, email-marketing, work, and project routes; unavailable paid-ad pages are excluded.
   - Optimized `robots.txt`.
   - `vercel.json` with security headers (`X-Frame-Options`, `X-Content-Type-Options`) and immutable static caching.

---

## 📁 Repository Structure

```
nafeer/
├── index.html                   # Root English Homepage (with language router)
├── nafeer.html                  # Original raw export (preserved reference)
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML Sitemap (55 URLs with hreflang alternates)
├── vercel.json                  # Vercel deployment & routing config
├── assets/
│   ├── css/
│   │   └── main.css             # Unified mobile-first design system & theme variables
│   ├── js/
│   │   ├── main.js              # Nav drawer, form validation, WhatsApp integration, routing
│   │   └── theme-customizer.js  # Interactive 6-theme, 5-mood, dark/light customization engine
│   ├── images/
│   │   ├── logo.jpg             # Legacy logo asset; not used in page chrome
│   │   ├── hero-map.jpg         # Hero visual map composition
│   │   ├── case-study-tako-healthcare.jpg
│   │   ├── case-study-tako-internship.jpg
│   │   └── case-study-tako-digital-marketing.jpg
│   └── svgs/                    # Preserved original SVG illustrations & badges
├── en/
│   ├── index.html               # Dedicated English Homepage
│   ├── services/                # 11 Dedicated English Service Pages + Services Hub
│   └── blog/                    # 13 Dedicated English Blog Post Pages + Blog Hub
├── ar/
│   ├── index.html               # Dedicated Arabic RTL Homepage (نفير الرقمي)
│   ├── services/                # 11 Dedicated Arabic Service Pages + Services Hub
│   └── blog/                    # 13 Dedicated Arabic Blog Post Pages + Blog Hub
└── scripts/
    ├── data_services.js         # Service catalog data (bilingual)
    ├── data_blog.js             # Article catalog data (bilingual)
    ├── build_template.js        # HTML document shell generator & components
    ├── build_all.js             # Master static site generator
    └── test_server.js           # Automated local test harness
```

---

## 🛠️ Local Development & Testing

No external frameworks or build dependencies required. Powered by Node.js built-ins.

```bash
# Generate the English and Arabic homepages:
node scripts/build_homepages.js

# Generate bilingual work and project pages:
node scripts/build_work_pages.js

# Generate email marketing pages and update service availability routes:
node scripts/build_service_pages.js

# Generate the bilingual editorial pages for all 13 blog topics:
node scripts/build_blog_editorial.js

# Run the automated endpoint test harness:
node scripts/test_server.js
```

---

## 🚀 Deployment (Vercel)

The project is connected to Vercel via GitHub auto-deployment:
1. Every commit pushed to branch `main` automatically triggers an instant production build on Vercel.
2. Production URL: [https://nafeer-sigma.vercel.app](https://nafeer-sigma.vercel.app)
