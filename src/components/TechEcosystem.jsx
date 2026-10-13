import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export const TechEcosystem = () => {
  const tools = [
    {
      category: 'Marketplaces & Quick-Commerce',
      items: [
        { name: 'Amazon, Flipkart & Meesho', role: 'Catalog creation, Brand Registry & FBA/FBF Logistics', tag: 'Major E-Com' },
        { name: 'Myntra & eBay', role: 'Fashion approvals, global seller accounts & QC clearance', tag: 'Apparel & Global' },
        { name: 'Blinkit, Bigbasket & JioMart', role: 'Hyperlocal dark-store supply chain & catalog staging', tag: 'Quick Commerce' },
        { name: 'Shopify Plus & Custom Stores', role: 'Headless storefronts, checkout APIs & inventory feeds', tag: 'D2C E-Com' },
      ]
    },
    {
      category: 'Performance Advertising & Tracking',
      items: [
        { name: 'Meta Ads Manager', role: 'Facebook & Instagram CBO/ABO Campaigns', tag: 'Paid Acquisition' },
        { name: 'Google Ads', role: 'Search, Shopping, Performance Max & YouTube', tag: 'High-Intent' },
        { name: 'Google Analytics 4 (GA4)', role: 'Omnichannel Attribution & Funnel Analytics', tag: 'Measurement' },
        { name: 'Meta Conversions API (CAPI)', role: 'Server-to-Server Event Attribution', tag: 'Data Pipeline' },
      ]
    },
    {
      category: 'Web Engineering & Studio Production',
      items: [
        { name: 'React.js & Vite', role: 'High-Performance Single Page Web Apps', tag: 'Frontend' },
        { name: 'Google Search Console', role: 'Crawl Budget, Indexing & Technical SEO', tag: 'Search Engine' },
        { name: 'Google Workspace', role: 'Enterprise Collaboration & Secure File Share', tag: 'Productivity' },
        { name: 'Figma & Cinema 4D', role: 'UI/UX Design Systems & 3D Packaging CGI', tag: 'Design Studio' },
      ]
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Integration Stack</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            TECHNOLOGY & PLATFORM <span className="text-cyan-400">ECOSYSTEM</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We operate seamlessly within official partner platforms, modern engineering frameworks, and enterprise advertising networks.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((group, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-5 pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="space-y-4">
                  {group.items.map((tool, tIdx) => (
                    <div 
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-dark-950/60 border border-white/5 hover:border-cyan-500/30 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {tool.name}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                          {tool.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {tool.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Third-Party Scraping • Direct Partner APIs</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
