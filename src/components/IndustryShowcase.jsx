import React, { useState } from 'react';
import { 
  Package, 
  Sparkles, 
  ShoppingBag, 
  Rocket, 
  Globe, 
  Building2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { industriesData } from '../data/industriesData';

export const IndustryShowcase = ({ onOpenConsultation }) => {
  const [activeIndustry, setActiveIndustry] = useState(industriesData[0].id);

  const iconMap = {
    Package: Package,
    Sparkles: Sparkles,
    ShoppingBag: ShoppingBag,
    Rocket: Rocket,
    Globe: Globe,
    Building2: Building2,
  };

  const current = industriesData.find(item => item.id === activeIndustry) || industriesData[0];
  const CurrentIcon = iconMap[current.icon] || Package;

  return (
    <section id="industries" className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Domain Depth</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            INDUSTRIES WE <span className="text-cyan-400">EMPOWER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tailored digital strategies engineered for the unique margin models, compliance landscapes, and consumer behavior of distinct sectors.
          </p>
        </div>

        {/* Interactive Industry Selector & Feature Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Industry Pills */}
          <div className="lg:col-span-5 space-y-2.5">
            {industriesData.map((item) => {
              const Icon = iconMap[item.icon] || Package;
              const isActive = activeIndustry === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndustry(item.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-gradient-to-r from-dark-850 to-dark-800 border-cyan-400/60 shadow-glow-cyan text-white scale-[1.02]'
                      : 'bg-dark-900/60 border-white/5 hover:border-white/20 text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-cyan-500 text-dark-950' : 'bg-white/5 text-cyan-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.stats}</div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Industry Profile Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-white/10 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {current.title}
                    </h3>
                    <div className="text-xs text-cyan-400 font-semibold">{current.stats}</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                  Sector Blueprint
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {current.desc}
              </p>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-dark-950/70 border border-white/5 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    Primary Industry Challenges
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {current.challenges}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950/70 border border-white/5 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    NEXOVA Strategic Playbook
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {current.solutions}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Looking to scale your brand in this sector?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all"
                >
                  <span>Request Sector Case Studies & Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
