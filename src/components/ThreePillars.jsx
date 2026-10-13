import React, { useState } from 'react';
import { Sparkles, Code2, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const ThreePillars = ({ onOpenConsultation }) => {
  const [activePillar, setActivePillar] = useState('creative');

  const pillars = {
    creative: {
      id: 'creative',
      title: 'Creative Excellence',
      icon: Sparkles,
      color: 'cyan',
      glow: 'shadow-glow-cyan',
      tagline: 'Aesthetic Sophistication & Direct-Response Impact',
      description:
        'Focus on cutting-edge design, user-centric aesthetics, cinematic 4K video storytelling, and innovative brand packaging that immediately captures attention and commands premium pricing.',
      keyCapabilities: [
        '4K Cinematic FMCG & Skincare Videography',
        'AI-Assisted Commercial Motion & Viral Reels',
        'Luxury Packaging, Dielines & Unboxing Experience',
        'High-Converting A+ Content & Brand Story Assets'
      ]
    },
    technical: {
      id: 'technical',
      title: 'Technical Expertise',
      icon: Code2,
      color: 'blue',
      glow: 'shadow-glow-blue',
      tagline: 'Modern Architectures, Headless Speed & Rock-Solid Reliability',
      description:
        'Highlight your ability to implement advanced technology, custom React.js web platforms, seamless omnichannel APIs, automated inventory algorithms, and sub-second Core Web Vitals.',
      keyCapabilities: [
        'Production React.js, Vite & SPA Web Engineering',
        'Sub-800ms Page Load Speeds (95+ Lighthouse Score)',
        'Server-Side Conversion API (CAPI) & GA4 Pipelines',
        'Amazon Seller Central Flat-File & Automated Feeds'
      ]
    },
    strategic: {
      id: 'strategic',
      title: 'Strategic Focus',
      icon: Compass,
      color: 'violet',
      glow: 'shadow-glow-violet',
      tagline: 'Data-Driven Precision, Margin Protection & Omnichannel Scale',
      description:
        'Emphasize your ability to create data-driven strategies that align design and technology with client goals, protecting margin, optimizing ad spend, and ensuring sustainable global growth.',
      keyCapabilities: [
        'Full-Funnel Meta & Google Paid Ads Management',
        'FBA Inventory Replenishment & Supply Chain Forecasting',
        'E-Commerce SEO & Semantic Search Optimization',
        'Executive MIS Reporting, Dashboards & SOP Workflows'
      ]
    }
  };

  const current = pillars[activePillar];

  return (
    <section className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading (Direct from Reference Image) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Our Foundation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            THREE PILLARS OF <span className="text-cyan-400">SUCCESS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            At the core of our approach are three key areas of expertise that drive impactful results. Explore how our strategy, creativity, and technology work together to fuel your growth.
          </p>
        </div>

        {/* Interactive Layout: Venn Intersecting Diagram + Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Luminous Intersecting Venn Nodes (Inspired directly by reference image) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">
              
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow pointer-events-none" />

              {/* Node 1: Creative Excellence (Top Center) */}
              <button
                onClick={() => setActivePillar('creative')}
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-full backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center p-4 text-center cursor-pointer ${
                  activePillar === 'creative'
                    ? 'bg-cyan-500/25 border-2 border-cyan-400 shadow-glow-cyan z-20 scale-105'
                    : 'bg-dark-900/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 z-10'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Creative Excellence
                </div>
                <div className="text-[10px] text-cyan-300/80 mt-0.5 font-medium">
                  Aesthetics & Impact
                </div>
              </button>

              {/* Node 2: Technical Expertise (Bottom Left) */}
              <button
                onClick={() => setActivePillar('technical')}
                className={`absolute bottom-2 left-0 w-44 h-44 sm:w-52 sm:h-52 rounded-full backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center p-4 text-center cursor-pointer ${
                  activePillar === 'technical'
                    ? 'bg-blue-600/25 border-2 border-blue-400 shadow-glow-blue z-20 scale-105'
                    : 'bg-dark-900/80 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-950/40 z-10'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center mb-2">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Technical Expertise
                </div>
                <div className="text-[10px] text-blue-300/80 mt-0.5 font-medium">
                  Scalability & Code
                </div>
              </button>

              {/* Node 3: Strategic Focus (Bottom Right) */}
              <button
                onClick={() => setActivePillar('strategic')}
                className={`absolute bottom-2 right-0 w-44 h-44 sm:w-52 sm:h-52 rounded-full backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center p-4 text-center cursor-pointer ${
                  activePillar === 'strategic'
                    ? 'bg-violet-600/25 border-2 border-violet-400 shadow-glow-violet z-20 scale-105'
                    : 'bg-dark-900/80 border border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-950/40 z-10'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-violet-400/20 text-violet-300 flex items-center justify-center mb-2">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Strategic Focus
                </div>
                <div className="text-[10px] text-violet-300/80 mt-0.5 font-medium">
                  Data & Scaled ROAS
                </div>
              </button>

              {/* Center Convergence Point (Synthesis) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-dark-950 border-2 border-cyan-400/60 flex items-center justify-center z-30 shadow-glow-cyan animate-pulse">
                <Layers className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Card for Currently Selected Pillar */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              
              {/* Dynamic Accent Ribbon */}
              <div className={`h-1.5 w-32 rounded-full mb-6 ${
                current.color === 'cyan' ? 'bg-cyan-400 shadow-glow-cyan' :
                current.color === 'blue' ? 'bg-blue-400 shadow-glow-blue' :
                'bg-violet-400 shadow-glow-violet'
              }`} />

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  current.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  current.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-violet-500/20 text-violet-400'
                }`}>
                  <current.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {current.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium">{current.tagline}</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 mt-4">
                {current.description}
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10 mb-8">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Key Deliverables & Methodologies:
                </div>
                {current.keyCapabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                      current.color === 'cyan' ? 'text-cyan-400' :
                      current.color === 'blue' ? 'text-blue-400' :
                      'text-violet-400'
                    }`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-all shadow-glow-cyan"
                >
                  <span>Apply This Pillar To Your Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Quick Toggle Tabs */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="text-[11px]">Select:</span>
                  <button 
                    onClick={() => setActivePillar('creative')}
                    className={`px-2 py-1 rounded ${activePillar === 'creative' ? 'text-cyan-400 font-bold underline' : 'hover:text-white'}`}
                  >
                    Creative
                  </button>
                  <span>•</span>
                  <button 
                    onClick={() => setActivePillar('technical')}
                    className={`px-2 py-1 rounded ${activePillar === 'technical' ? 'text-blue-400 font-bold underline' : 'hover:text-white'}`}
                  >
                    Technical
                  </button>
                  <span>•</span>
                  <button 
                    onClick={() => setActivePillar('strategic')}
                    className={`px-2 py-1 rounded ${activePillar === 'strategic' ? 'text-violet-400 font-bold underline' : 'hover:text-white'}`}
                  >
                    Strategic
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
