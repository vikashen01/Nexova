import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  ShoppingBag, 
  Video, 
  Code2, 
  ShieldCheck, 
  BarChart3,
  Globe2,
  ChevronRight,
  Play
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('marketplace');

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden mesh-gradient-bg">
      {/* Background Glowing Fluid Ribbon Gradients (Direct from Reference Design) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-hero-glow pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative Wave Svg Overlay */}
      <svg 
        className="absolute top-20 left-0 w-full h-[500px] opacity-25 pointer-events-none" 
        viewBox="0 0 1440 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M-100 200 C300 50, 700 350, 1500 150" 
          stroke="url(#waveGrad1)" 
          strokeWidth="2.5" 
          strokeDasharray="8 6"
        />
        <path 
          d="M-50 350 C400 150, 900 450, 1600 250" 
          stroke="url(#waveGrad2)" 
          strokeWidth="3.5" 
          filter="drop-shadow(0 0 15px #00F0FF)"
        />
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-md shadow-glow-cyan text-xs font-semibold text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>FULL-SERVICE DIGITAL GROWTH AGENCY • US & WORLDWIDE</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Everything Your Brand Needs to{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent text-glow">
              Grow Digitally.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            We are your integrated growth partner combining <span className="text-white font-medium">Amazon Seller Central mastery</span>, <span className="text-white font-medium">high-ROAS Meta & Google advertising</span>, <span className="text-white font-medium">4K cinematic product commercials</span>, <span className="text-white font-medium">custom React engineering</span>, and <span className="text-white font-medium">seamless backend operations</span>.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-blue-500 shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-dark-900/80 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Quick SLA Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>No Long-Term Lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>End-to-End In-House Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>100% Dedicated Growth Partner</span>
            </div>
          </div>
        </div>

        {/* Interactive Dashboard & Product Visual (Centerpiece) */}
        <div className="mt-14 lg:mt-16 relative max-w-5xl mx-auto">
          
          {/* Outer Glowing Border */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-violet-500/40 shadow-2xl shadow-cyan-950/40">
            <div className="bg-dark-900/90 rounded-[22px] backdrop-blur-2xl border border-white/10 p-4 sm:p-7 overflow-hidden">
              
              {/* Dashboard Header Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="h-4 w-px bg-white/10 mx-1" />
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    nexova.intelligence // unified-growth-os
                  </span>
                </div>

                {/* Dashboard Mode Switcher */}
                <div className="flex items-center gap-1 bg-dark-950/80 p-1 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab('marketplace')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition ${
                      activeTab === 'marketplace' 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Amazon & E-Commerce
                  </button>
                  <button
                    onClick={() => setActiveTab('performance')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition ${
                      activeTab === 'performance' 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Paid Ads & ROAS
                  </button>
                  <button
                    onClick={() => setActiveTab('creative')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition ${
                      activeTab === 'creative' 
                        ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    4K Media & Video
                  </button>
                  <button
                    onClick={() => setActiveTab('tech')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition ${
                      activeTab === 'tech' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tech & Web App
                  </button>
                </div>
              </div>

              {/* Dynamic Tab Visual Content */}
              <div className="pt-6">
                {activeTab === 'marketplace' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Catalog Health Score</span>
                        <span className="text-emerald-400 font-semibold">99.8% Perfect</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">48 Active ASINs</div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[98%]" />
                      </div>
                      <div className="text-[11px] text-slate-400">Zero suppressed listings. 100% Buy-Box share monitored.</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>FBA Inventory Forecasting</span>
                        <span className="text-cyan-400 font-semibold">Optimal</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">65 Days Runway</div>
                      <div className="text-[11px] text-slate-400">
                        Automated restock velocity algorithms active. FBM redundancy synced for prime peak.
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-bold">
                        <span>Amazon Seller Central API Live</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>A+ Content Conversion Lift</span>
                        <span className="text-emerald-400 font-semibold">+28.4%</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Premium Brand Story</div>
                      <div className="text-[11px] text-slate-400">
                        Custom interactive modules, lifestyle comparison charts, and branded video banners.
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">Sample Benchmark Metric</div>
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Blended Omnichannel ROAS</span>
                        <span className="text-blue-400 font-semibold">4.2x Scale</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Meta + Google Ads</div>
                      <div className="flex items-center gap-2 text-xs text-emerald-400">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>CPA reduced by 31.4% with CAPI</span>
                      </div>
                      <div className="text-[11px] text-slate-400">CBO scaling funnels with creative hook fatigue rotation.</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Server-Side CAPI Match Rate</span>
                        <span className="text-emerald-400 font-semibold">9.1 / 10 Excellent</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Zero Attribution Loss</div>
                      <div className="text-[11px] text-slate-400">Direct server-to-server webhook pipelines for post-iOS 14.5 accuracy.</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>High-Intent Google Search</span>
                        <span className="text-blue-400 font-semibold">Top 3 Rank</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Performance Max</div>
                      <div className="text-[11px] text-slate-400">Targeting buyer search queries and competitor branded terms.</div>
                    </div>
                  </div>
                )}

                {activeTab === 'creative' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="relative rounded-2xl overflow-hidden group aspect-video md:aspect-auto p-4 bg-dark-950/80 border border-white/5 flex flex-col justify-end">
                      <img 
                        src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80" 
                        alt="Skincare commercial shoot" 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="relative z-10">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          4K Cinema Macro
                        </span>
                        <h4 className="text-sm font-bold text-white mt-1">Lumina Skincare Commercial</h4>
                        <p className="text-[11px] text-slate-300">Fluid pours, water droplets & clinical proof hooks</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Production Quality</span>
                        <span className="text-violet-400 font-semibold">Studio 4K / 120fps</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">FMCG & Beauty Shoots</div>
                      <div className="text-[11px] text-slate-400">
                        High-velocity UGC reels, 3D bottle renders, and sensory product unboxing cuts.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Creative Variants Delivered</span>
                        <span className="text-violet-400 font-semibold">18 Angles</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Full Aspect Suite</div>
                      <div className="text-[11px] text-slate-400">
                        9:16 vertical TikTok/Reels, 1:1 square feeds, 16:9 widescreen display banners.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Google Lighthouse Score</span>
                        <span className="text-emerald-400 font-semibold">99 / 100</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">React.js + Vite</div>
                      <div className="text-[11px] text-slate-400">
                        Sub-800ms Largest Contentful Paint (LCP) and zero layout shifts.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Architecture</span>
                        <span className="text-emerald-400 font-semibold">Headless / SPA</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Enterprise Scalability</div>
                      <div className="text-[11px] text-slate-400">
                        Tailwind CSS, dynamic routing, and modular component architecture.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Uptime & Reliability</span>
                        <span className="text-emerald-400 font-semibold">99.99%</span>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">Edge CDN Ready</div>
                      <div className="text-[11px] text-slate-400">
                        Automated CI/CD pipelines, SSL encryption, and API fault tolerance.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Metrics Counter Strip (From Reference Design) */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              1<span className="text-cyan-400">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Years Experience
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              50<span className="text-blue-400">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Brands Worked With
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              1M<span className="text-cyan-400">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              Marketplace GMV Handled
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              99.4<span className="text-violet-400">%</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              SLA Execution Adherence
            </div>
          </div>
        </div>

        {/* Ecosystem Trust Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
            Supported Marketplaces, Quick-Commerce & Tech Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 opacity-80">
            <span className="text-xs font-semibold tracking-wider text-cyan-300 border border-cyan-500/30 px-3.5 py-1.5 rounded-lg bg-cyan-950/40">
              Amazon
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              Flipkart
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              Meesho
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              Myntra
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              eBay
            </span>
            <span className="text-xs font-semibold tracking-wider text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-lg bg-emerald-950/30">
              Blinkit • Bigbasket • JioMart
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              Meta Ads
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              Google Ads
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-200 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5">
              React.js
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
