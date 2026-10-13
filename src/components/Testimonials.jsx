import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, Building } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      sector: 'Beauty & Skincare D2C',
      market: 'United States',
      role: 'Founder & Managing Director',
      quote: 'Transitioning to NEXOVA for both our Amazon Seller Central catalog operations and Meta ad creatives streamlined everything. Having our 4K video ads filmed by the exact same team managing our ad bids drove our lowest customer acquisition cost to date.',
      engagement: 'Full-Service Creative + Amazon FBA + Meta Ads',
      metricsHighlight: 'Consistent 4.2x ROAS & Zero FBA Stockout Days',
      rating: 5
    },
    {
      sector: 'Consumer Packaged Goods (FMCG)',
      market: 'US & Global Distribution',
      role: 'VP of E-Commerce & Operations',
      quote: 'Before NEXOVA, we suffered constant Amazon backend variation errors and suppressed ASINs that cost us thousands weekly. Their flat-file specialists resolved legacy catalog tickets within 72 hours, and their executive MIS dashboards keep our board updated automatically.',
      engagement: 'Marketplace Operations & Executive Reporting',
      metricsHighlight: '45 ASINs Cleared & 99.8% Account Health Score',
      rating: 5
    },
    {
      sector: 'High-Growth Tech Startup',
      market: 'California, USA',
      role: 'Co-Founder & Chief Product Officer',
      quote: 'Our previous agency used sluggish WordPress themes that took 4 seconds to load on mobile. NEXOVA engineered a custom React.js and Vite platform that scores 99 on Google PageSpeed. Our organic traffic and checkout completion rates both jumped immediately.',
      engagement: 'Custom React Web Engineering & Technical SEO',
      metricsHighlight: 'Sub-800ms Page Speed & 99/100 Lighthouse Score',
      rating: 5
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Partner Feedback</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            COLLABORATION <span className="text-cyan-400">IMPACT & REVIEWS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Real feedback from executive leaders, D2C brand founders, and e-commerce directors collaborating with our team under strict confidentiality agreements.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-3xl p-7 sm:p-8 border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Row: Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Engagement</span>
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-cyan-400/20 mb-3" />

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client & Outcome Details */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-white">
                    {item.role}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">
                    {item.market}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-slate-500" />
                  <span>{item.sector}</span>
                </div>

                <div className="mt-2 p-2.5 rounded-xl bg-dark-950/80 border border-white/5 text-[10px] text-emerald-400 font-medium">
                  Result: {item.metricsHighlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NDA & Verification Note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Client identity details protected pursuant to mutual Non-Disclosure Agreements (NDAs). Reference calls available for qualified enterprise engagements upon request.
        </div>

      </div>
    </section>
  );
};
