export const serviceCategories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'marketplace', label: 'Amazon & E-Commerce Ops' },
  { id: 'marketing', label: 'Performance Marketing' },
  { id: 'creative', label: 'Cinematic Creative & Media' },
  { id: 'tech', label: 'Web & Mobile Engineering' },
  { id: 'seo', label: 'Search & E-Commerce SEO' },
  { id: 'operations', label: 'Business & Operations Support' },
];

export const servicesData = [
  {
    id: 'ecommerce-onboarding-qc-pass',
    category: 'marketplace',
    title: 'E-Commerce Onboarding to QC Pass',
    tagline: 'Amazon, Flipkart, Meesho, Myntra, eBay, Blinkit, Bigbasket & JioMart',
    shortDesc: 'Guaranteed end-to-end seller onboarding, brand approval, catalog creation, attribute mapping, and 100% QC (Quality Check) pass across major e-commerce and quick-commerce channels.',
    icon: 'CheckCheck',
    accent: 'cyan',
    badge: 'Popular',
    platforms: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'eBay', 'Blinkit', 'Bigbasket', 'JioMart'],
    highlights: [
      'Multi-Platform Seller Registration & Verification (Amazon, Flipkart, Meesho, Myntra, eBay)',
      'Quick Commerce Hyperlocal Onboarding (Blinkit, Bigbasket, JioMart)',
      '100% Quality Check (QC) Pass Guarantee with Zero Rejection Protocol',
      'Category Approvals, Brand Registry & GTIN Exemption Processing',
      'Standardized Attribute Mapping, Image Compliance & Price Fixing'
    ],
    deliverables: [
      'Live, approved product catalogs active across all contracted platforms',
      'Fast-tracked QC clearance documentation and error-fix audit logs',
      'Proactive listing error mitigation preventing future ASIN suppressions',
      'Seller Central & Partner portal operational handover training'
    ]
  },
  {
    id: 'amazon-seller-central',
    category: 'marketplace',
    title: 'Amazon Seller Central & Marketplace Management',
    tagline: 'End-to-End Account Health, FBA Logistics & Catalog Operations',
    shortDesc: 'Complete Amazon Seller Central & Vendor management, catalog optimization, A+ Content, parent-child variations, inventory forecasting, and backend suppression fixes.',
    icon: 'ShoppingBag',
    accent: 'cyan',
    badge: 'Flagship Service',
    highlights: [
      'Comprehensive Catalog & Variation Setup',
      'High-Conversion A+ Content & Brand Story',
      'Inventory Health, Restock Alerts & FBA Ops',
      'Backend Keyword Indexation & Flat-File Management',
      'Account Health Monitoring & Ticket Resolution'
    ],
    deliverables: [
      'Weekly inventory & replenishment velocity reports',
      'High-converting product listing copy & visual layouts',
      'Proactive backend error resolution (strangled/suppressed ASINs)',
      'Brand Store design & multi-page architecture'
    ]
  },
  {
    id: 'performance-marketing',
    category: 'marketing',
    title: 'Meta & Google Performance Ads',
    tagline: 'High-ROAS Paid Acquisition Engineered for Scaled Brands',
    shortDesc: 'Omnichannel paid campaigns across Meta (Facebook & Instagram), Google Search, Performance Max, YouTube, and Amazon Sponsored Ads with advanced CAPI conversion tracking.',
    icon: 'TrendingUp',
    accent: 'blue',
    badge: 'Growth Engine',
    highlights: [
      'Meta Ads (Facebook & Instagram CBO/ABO Frameworks)',
      'Google Search, Shopping & Performance Max (PMax)',
      'Server-Side Conversion API (CAPI) & GA4 Tracking',
      'Audience Segmentation, Retargeting & Lookalikes',
      'Creative Fatigue Rotation & Daily Budget Optimization'
    ],
    deliverables: [
      'Full campaign architecture & bid strategy setup',
      'Weekly performance dashboards with transparent ROAS metrics',
      'A/B creative testing matrix (hooks, copy, CTAs)',
      'Attribution audit and post-purchase survey tracking'
    ]
  },
  {
    id: 'influencer-marketing',
    category: 'marketing',
    title: 'Influencer Marketing & Creator Seeding',
    tagline: 'High-Impact Creator Partnerships, Barter Seeding & Paid Collabs',
    shortDesc: 'End-to-end influencer outreach, creator seeding, UGC whitelisting, and performance campaigns across Instagram, YouTube, and digital brand creators.',
    icon: 'Megaphone',
    accent: 'violet',
    badge: 'Upcoming',
    isUpcoming: true,
    highlights: [
      'Targeted Micro & Macro Creator Discovery & Audience Vetting',
      'High-Volume Product Seeding & Barter Gifting Management',
      'UGC Creator Whitelisting for High-ROAS Paid Ad Campaigns',
      'Performance Tracking, Custom Affiliate Codes & Attribution Links',
      'Contract Negotiation, Content Rights Management & Brand Safety'
    ],
    deliverables: [
      'Curated database of vetted creators with authentic engagement metrics',
      'High-converting UGC video and photo assets licensed for ad whitelisting',
      'Influencer campaign ROI performance scorecards and conversion tracking',
      'Turnkey shipping & gifting logistics coordination'
    ]
  },
  {
    id: 'cinematic-creative-production',
    category: 'creative',
    title: 'Cinematic Product Commercials & Media',
    tagline: 'Studio-Grade FMCG, Skincare & D2C Creative Production',
    shortDesc: 'Breathtaking 4K video ads, beauty & skincare product shoots, AI-assisted commercial creatives, viral TikTok/Reels motion design, and high-impact packaging visuals.',
    icon: 'Video',
    accent: 'violet',
    badge: 'High Impact',
    highlights: [
      '4K Cinematic FMCG & Beauty Product Videography',
      'AI-Assisted Visual Enhancements & Virtual Staging',
      'High-Velocity Reels, Shorts & TikTok Ad Formats',
      '3D Renders, Packaging Mockups & CGI Animations',
      'Conversion-Focused Ad Copywriting & Storyboarding'
    ],
    deliverables: [
      'Ready-to-launch multi-aspect video cuts (9:16, 1:1, 16:9)',
      'Static social ad packs & display banner suites',
      'Color graded high-resolution e-commerce asset library',
      'Licensed commercial sound & voiceover mastering'
    ]
  },
  {
    id: 'video-editing',
    category: 'creative',
    title: 'Professional Video Editing & Motion Content',
    tagline: 'High-Retention E-Commerce Reels, Commercial Cuts & Product Showcases',
    shortDesc: 'Dynamic, conversion-engineered video editing designed for maximum viewer retention. High-performing Instagram Reels, TikToks, YouTube Shorts, 4K product commercial cuts, kinetic typography, and motion effects.',
    icon: 'Video',
    accent: 'cyan',
    badge: 'High Demand',
    highlights: [
      'Viral Pacing for TikTok, Instagram Reels & YouTube Shorts',
      'E-Commerce Product Showcases, Unboxing Cuts & Dynamic UGC Polish',
      'Kinetic Typography, Motion Callouts & Visual Hook Engineering',
      'Studio-Grade Color Grading & Sound Design (SFX / Mastering)',
      'Multi-Aspect Ratio Formats (9:16 Vertical, 1:1 Square, 16:9 Landscape)'
    ],
    deliverables: [
      'Rendered 4K and 1080p high-bitrate video ad variations',
      'Multi-hook variations for paid social media split-testing',
      'Complete commercial audio and sound design package',
      'Rapid 24-48 hour turnaround on content batch edits'
    ]
  },
  {
    id: 'web-mobile-development',
    category: 'tech',
    title: 'Modern Web, React.js & App Engineering',
    tagline: 'Lightning-Fast, High-Converting Digital Platforms',
    shortDesc: 'Custom React.js & Vite applications, headless Shopify/WooCommerce stores, interactive web apps, enterprise landing pages, and responsive cross-platform architectures.',
    icon: 'Code2',
    accent: 'cyan',
    badge: 'Technology',
    highlights: [
      'Custom React.js, Vite & Next.js Web Platforms',
      'Headless & Custom E-Commerce Architectures',
      'Mobile-First Responsive Layouts with 95+ Core Web Vitals',
      'Interactive Web Apps, Client Portals & Dashboards',
      'Secure API Integrations & Continuous Deployment'
    ],
    deliverables: [
      'Clean, maintainable source code repository',
      'Sub-second page loading speeds and accessibility compliance',
      'Full cross-browser and mobile device verification',
      'Ongoing technical maintenance & security patching'
    ]
  },
  {
    id: 'ecommerce-seo',
    category: 'seo',
    title: 'E-Commerce & Technical SEO',
    tagline: 'Dominating Organic Visibility on Search Engines & Marketplaces',
    shortDesc: 'Data-driven e-commerce SEO, product listing keyword research, on-page optimization, site architecture auditing, and high-authority search visibility.',
    icon: 'Search',
    accent: 'blue',
    badge: 'Organic Scale',
    highlights: [
      'E-Commerce Product Listing SEO & Keyword Indexation',
      'Technical SEO Audits (Core Web Vitals, Crawl Budget, Schema)',
      'Amazon Search Algorithm (A9/COSMO) Optimization',
      'Content Strategy & High-Intent Commercial Topic Clusters',
      'Google Search Console & Organic Rank Tracking'
    ],
    deliverables: [
      'Comprehensive keyword gap analysis & opportunity blueprint',
      'Structured schema markup implementation',
      'Monthly rank improvement and organic traffic analytics',
      'Content briefs tailored for organic conversion'
    ]
  },
  {
    id: 'brand-identity-packaging',
    category: 'creative',
    title: 'Branding, UI/UX & Packaging Design',
    tagline: 'Distinctive Identity Systems Built for Global Prestige',
    shortDesc: 'End-to-end brand identity design, luxury retail packaging, UI/UX design systems, vector guidelines, and digital brand collateral that commands premium pricing.',
    icon: 'Layers',
    accent: 'violet',
    badge: 'Brand Equity',
    highlights: [
      'Complete Brand Identity & Typography Guidelines',
      'D2C & Retail FMCG Packaging & Label Design',
      'Figma UI/UX Prototypes & Design Systems',
      'Marketing Collateral, Pitch Decks & Social Assets',
      'Consumer Psychology & Unboxing Experience Strategy'
    ],
    deliverables: [
      'Vector brand kit (logos, color palettes, typography tokens)',
      'Print-ready dieline files with Pantone color specifications',
      'Interactive Figma UI prototypes for web and mobile',
      'Social media brand kit & design templates'
    ]
  },
  {
    id: 'business-operations-virtual-assist',
    category: 'operations',
    title: 'Business Process & Executive Support',
    tagline: 'Reliable Backend Operations to Free Your Leadership',
    shortDesc: 'Dedicated virtual assistance, 24/7 omnichannel customer support, executive Excel financial modeling, board-ready PowerPoint decks, and data operations.',
    icon: 'Headphones',
    accent: 'cyan',
    badge: 'Operations',
    highlights: [
      '24/7 E-Commerce Customer Support & Ticket Resolution',
      'Executive Financial Modeling & Excel MIS Dashboards',
      'Board-Ready PowerPoint & Investor Pitch Presentations',
      'Inventory Ledger Management & Order Processing',
      'Data Entry, Catalog Cleansing & SOP Documentation'
    ],
    deliverables: [
      'Trained, dedicated operations associates with strict SLAs',
      'Daily/weekly performance KPI scorecards',
      'Automated Excel reporting macros & dashboard views',
      'Standard Operating Procedure (SOP) playbooks'
    ]
  },
  {
    id: 'compliance-documentation',
    category: 'operations',
    title: 'Business Documentation & Filing Assistance',
    tagline: 'Streamlined Administrative & Regulatory Facilitation',
    shortDesc: 'Professional business documentation, administrative support, GST filing assistance, and Indian ITR filing assistance (subject to applicable qualifications & regulatory frameworks).',
    icon: 'FileCheck',
    accent: 'blue',
    badge: 'Administrative',
    highlights: [
      'Corporate Records & Invoice Reconciliation Support',
      'GST Filing Assistance & GSTR Data Compilation',
      'Indian ITR Documentation Support (Subject to Qualifications)',
      'Cross-Border Vendor Agreements & NDA Documentation',
      'Audit Readiness & Archival Management'
    ],
    deliverables: [
      'Accurate tax compilation worksheets and reconciliation sheets',
      'Structured repository of company agreements and filings',
      'Strict confidentiality and data encryption protocols',
      'Coordination with qualified professional accountants/legal counsel'
    ]
  },
  {
    id: 's-aligned-sprint-teams',
    category: 'operations',
    title: 'S-Aligned Sprint Teams',
    tagline: 'Dedicated Agile Delivery Pods Synchronized with Your Timezone',
    shortDesc: 'On-demand agile sprint teams delivering continuous engineering, catalog optimizations, rapid creative iterations, and operational support with structured bi-weekly sprints.',
    icon: 'Users',
    accent: 'blue',
    badge: 'Upcoming',
    isUpcoming: true,
    highlights: [
      'Dedicated Agile Delivery Pods Synchronized with Your Schedule',
      '2-Week Agile Delivery Cycles with Transparent Sprint Milestones',
      'Direct Real-Time Collaboration via Slack, Teams & Asana',
      'Rapid Prototyping, Urgent Catalog Fixes & Asset Rendering',
      'Flexible On-Demand Scaling Without Long-Term HR Overheads'
    ],
    deliverables: [
      'Bi-weekly sprint retrospectives, burn-down reports & delivery logs',
      'Direct dedicated project lead and technical liaison',
      'Guaranteed turnaround SLAs for continuous product improvements'
    ]
  }
];
