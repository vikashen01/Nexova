# NEXOVA | Full-Service Digital Solutions & Growth Agency

> **"Everything Your Brand Needs to Grow Digitally."**  
> An international digital growth partner combining **E-Commerce & Amazon Seller Central Operations**, **Performance Paid Ads (Meta & Google)**, **4K Cinematic Creative & FMCG Video Production**, **Custom React.js Web Engineering**, and **Enterprise Business Operations**.

---

## ✦ Live Highlights & Aesthetic Architecture

Inspired by premium international agency design language:
- **Color Palette:** Deep dark navy (`#030712`, `#060B17`) with electric cyan (`#00F0FF`, `#06B6D4`), electric blue (`#3B82F6`), and electric violet (`#8B5CF6`) luminous accents.
- **Glassmorphism & Glow:** Multi-layered frosted glass panels (`backdrop-blur-xl`), glowing fluid ribbon wave gradients, and sleek pill-shaped badges.
- **Three Pillars of Success:** Interactive luminous Venn diagram connecting *Creative Excellence*, *Technical Expertise*, and *Strategic Focus*.
- **Interactive Device Mockups:** iPhone 16 Pro showcase card featuring progress indicators, live UI overlays, and clearly disclosed sample case metrics.
- **Unified Growth OS Dashboard:** Interactive hero centerpiece showcasing real-time tabs for Amazon FBA Health, Meta/Google ROAS, 4K Cinema Commercial cuts, and React sub-second speed benchmarks.

---

## 🛠 Technology Stack

- **Core Framework:** React.js + Vite.js (Fast single-page application with sub-second page transitions)
- **Styling:** Tailwind CSS with custom electric glow utilities and typography tokens
- **Typography:** Google Fonts (`Plus Jakarta Sans`, `Outfit`, `Inter`)
- **Icons:** Lucide React
- **Animations & Transitions:** Fluid CSS animations, micro-interactions & Framer Motion
- **Navigation & Routing:** React Router DOM (v7) with automatic route scroll-to-top and virtual pageview tracking
- **Analytics & SEO:** Built-in Google Analytics 4, Google Tag Manager, and Google Search Console dynamic loader
- **Form Architecture:** Real network HTTP submissions with client-side validation, error handling, loading spinners, and success confirmation

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with meta tags, SEO OpenGraph, and Google Fonts
├── tailwind.config.js           # Tailored colors, glows, animations, and typography tokens
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Project dependencies & scripts
├── .env.example                 # Environment variables blueprint
├── .env                         # Local environment configuration
├── src/
│   ├── main.jsx                 # Application entry point with BrowserRouter
│   ├── App.jsx                  # Main routing, analytics tracking, and global modal state
│   ├── index.css                # Base Tailwind styles, glassmorphism, and glow utilities
│   ├── data/
│   │   ├── servicesData.js      # 8 comprehensive services across 6 core domains
│   │   ├── portfolioData.js     # Filterable case studies with sample project disclosures
│   │   ├── industriesData.js    # 6 specialized target industry profiles
│   │   ├── insightsData.js      # Educational articles and strategy blueprints
│   │   └── faqData.js           # Detailed answers for US & international client queries
│   ├── utils/
│   │   ├── analytics.js         # GA4, GTM, and Google Search Console initialization & tracking
│   │   └── formHandler.js       # Real HTTP POST submission handler and validation
│   ├── components/
│   │   ├── Navbar.jsx           # Floating frosted pill navigation with dropdown & mobile menu
│   │   ├── Hero.jsx             # Fluid wave ribbons, interactive OS dashboard, and metrics counter
│   │   ├── ThreePillars.jsx     # Interactive luminous Venn diagram directly from reference
│   │   ├── ServicesSection.jsx  # "OUR EXPERTISE, YOUR GROWTH" grid with "Get Service" pills
│   │   ├── FeaturedDeepDives.jsx# Alternating showcases for Amazon, Paid Ads, 4K Video, and Tech
│   │   ├── WhyChooseUs.jsx      # Integrated team, tailored economics, and SLA execution
│   │   ├── ProcessSection.jsx   # 5-step framework: Discover, Strategize, Create, Execute, Optimize
│   │   ├── CaseStudies.jsx      # iPhone 16 Pro mockup card with carousel and sample badges
│   │   ├── IndustryShowcase.jsx # FMCG, Beauty, D2C, Startups, and US Market Entrants
│   │   ├── TechEcosystem.jsx    # Amazon Seller Central, Meta Ads, GA4, GSC, React, Shopify
│   │   ├── Testimonials.jsx     # Verified partner feedback under strict confidentiality/NDA
│   │   ├── InsightsSection.jsx  # "INSIGHTS THAT INSPIRE" with interactive article reader modal
│   │   ├── FAQSection.jsx       # Accessible interactive accordions
│   │   ├── ContactSection.jsx   # Functional inquiry form with real HTTP POST submission
│   │   ├── ConsultationModal.jsx# Fast-track consultation booking modal accessible across site
│   │   └── Footer.jsx           # Full site navigation, legal disclaimers, and copyright
│   └── pages/
│       ├── HomePage.jsx         # Full agency homepage
│       ├── ServicesPage.jsx     # In-depth service catalog with deliverables
│       ├── IndustriesPage.jsx   # Sector-specific challenges and playbooks
│       ├── PortfolioPage.jsx    # Complete filterable case studies directory
│       ├── AboutPage.jsx        # Agency genesis, synchronized US model, and principles
│       ├── InsightsPage.jsx     # Searchable agency educational blueprints
│       ├── ContactPage.jsx      # Dedicated inquiry and consultation booking page
│       ├── PrivacyPage.jsx      # Strict NDA & data protection policy
│       └── TermsPage.jsx        # Terms of service and compliance qualification disclaimer
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.0.0 or higher, v20.x recommended)
- npm (v9.x or higher)

### 2. Installation
Clone or navigate to the project directory:
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory (or copy from `.env.example`):
```bash
cp .env.example .env
```

Configure your endpoints and tracking IDs:
```env
# Real form submission endpoint (e.g., Formspree, Make webhook, or custom API)
VITE_CONTACT_FORM_ENDPOINT=https://httpbin.org/post

# Google Analytics 4 Measurement ID (Format: G-XXXXXXXXXX)
VITE_GA4_MEASUREMENT_ID=

# Google Tag Manager Container ID (Format: GTM-XXXXXXX)
VITE_GTM_ID=

# Google Search Console Verification Token
VITE_GSC_VERIFICATION_TOKEN=

# Contact Information
VITE_COMPANY_PHONE=+1 (800) 489-3280
VITE_COMPANY_EMAIL=contact@nexovadigital.com
```

### 4. Running the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 5. Building for Production
```bash
npm run build
```
This generates an optimized production bundle inside the `dist/` directory.

### 6. Previewing Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Documentation

### Deploying to Vercel
1. Install the Vercel CLI: `npm i -g vercel` or link your Git repository via [vercel.com](https://vercel.com).
2. Configure Build Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Add Environment Variables in the Vercel dashboard:
   - `VITE_CONTACT_FORM_ENDPOINT`
   - `VITE_GA4_MEASUREMENT_ID`
   - `VITE_GTM_ID`
4. Add a `vercel.json` rewrite rule for Single Page Application routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploying to Netlify
1. Create a `_redirects` file in `public/_redirects`:
```text
/*    /index.html   200
```
2. Build Command: `npm run build`
3. Publish Directory: `dist`

### Deploying to Cloudflare Pages
1. Connect Git repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set Node version variable: `NODE_VERSION=20.18.0`

---

## ⚖️ Compliance & Professional Qualifications Disclaimer

Our business documentation, GST filing assistance, and Indian ITR filing assistance services are strictly administrative facilitation services provided subject to applicable professional licensing and qualifications, in coordination with accredited certified practitioners in compliance with all relevant jurisdictional laws.
