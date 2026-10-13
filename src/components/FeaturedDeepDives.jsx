import React from 'react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Video, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  BarChart, 
  ShieldCheck, 
  Zap, 
  Sparkles 
} from 'lucide-react';

export const FeaturedDeepDives = ({ onOpenConsultation }) => {
  const pillars = [
    {
      id: 'ecommerce-scale',
      category: 'E-Commerce & Amazon Growth',
      title: 'Dominating Amazon Seller Central with Operational Precision',
      desc: 'Most brands lose 15-30% of marketplace revenue to preventable backend suppression, bad variation structures, and stockouts. We take over end-to-end account health, catalog optimization, Premium A+ Content, and FBA restock velocity.',
      points: [
        'Flat-file bulk error resolution & suppressed listing clearance',
        'Custom A+ Premium Brand Story carousels and comparison matrices',
        'Algorithmic 90-day rolling inventory replenishment forecasts',
        'Buy Box protection & counterfeit seller ticketing enforcement'
      ],
      stat: '99.8%',
      statLabel: 'Account Health SLA',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      badge: 'Marketplace Operations',
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 'performance-marketing-scale',
      category: 'Performance Marketing',
      title: 'High-ROAS Meta & Google Acquisition Built for Scaling Brands',
      desc: 'We architect omni-channel acquisition funnels with server-side Conversion API (CAPI) and GA4 event pipelines. Stop losing tracking data to browser ad blockers and give algorithms the clean data needed to scale budgets profitably.',
      points: [
        'Meta Ads (Facebook & Instagram) CBO/ABO scaling frameworks',
        'Google Search, High-Intent Shopping & Performance Max',
        'Server-Side CAPI data streaming with 9+ match quality scores',
        'High-velocity creative hook fatigue rotation and weekly budget audits'
      ],
      stat: '4.2x',
      statLabel: 'Average Campaign ROAS Target',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badge: 'Paid Acquisition',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      reverse: true
    },
    {
      id: 'cinematic-creative-production',
      category: 'Creative Production',
      title: 'Studio-Grade 4K Commercials for FMCG, Beauty & Skincare',
      desc: 'Direct-response mechanics wrapped in luxury aesthetics. Our studio produces high-speed macro product videography, clinical demonstration cuts, AI-enhanced staging, and rapid-hook vertical reels that stop thumbs and convert.',
      points: [
        '4K multi-angle macro videography with fluid & texture pours',
        'Vertical 9:16 reels & TikTok direct-response formats with licensed sound',
        '3D CGI product renders, packaging dielines, and unboxing sequences',
        'AI-assisted background environments and seasonal ad variations'
      ],
      stat: '18+',
      statLabel: 'Variants Per Production Cycle',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      badge: 'Media Production',
      badgeColor: 'border-violet-500/30 text-violet-400 bg-violet-500/10'
    },
    {
      id: 'technology-engineering',
      category: 'Technology & Web Apps',
      title: 'Custom React.js Web Engineering with Sub-Second Speeds',
      desc: 'Ditch bloated legacy CMS themes. We engineer custom React.js & Vite web applications and headless e-commerce storefronts that deliver sub-800ms load times, 95+ Core Web Vitals, and smooth mobile micro-interactions.',
      points: [
        'Custom React.js, Vite & modern single-page architecture',
        'Sub-800ms Largest Contentful Paint (LCP) performance',
        'Custom interactive portals, quotation calculators & client dashboards',
        'Full technical SEO schema, accessibility compliance & API security'
      ],
      stat: '99/100',
      statLabel: 'Google PageSpeed Benchmark',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      badge: 'Custom Engineering',
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
      reverse: true
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            FOUR ENGINES OF <span className="text-cyan-400">DIGITAL DOMINANCE</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every business component required to scale modern consumer brands, market innovators, and international sellers under one roof.
          </p>
        </div>

        {/* Alternating Deep Dives */}
        <div className="space-y-20">
          {pillars.map((item) => (
            <div 
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center ${
                item.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-6 ${item.reverse ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-3 pt-2">
                  {item.points.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 shadow-glow-cyan transition-all"
                  >
                    <span>Consult on {item.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-cyan-400">
                      {item.stat}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-1' : ''}`}>
                <div className="glass-card rounded-3xl p-3 border border-white/10 relative group overflow-hidden shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                    
                    {/* Floating Info Tag */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{item.category}</div>
                        <div className="text-[10px] text-slate-300">Engineered for US & Global Growth</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-cyan-400 text-dark-950 text-[10px] font-bold">
                        Certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
