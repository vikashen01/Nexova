import React from 'react';
import { 
  Package, 
  Sparkles, 
  ShoppingBag, 
  Rocket, 
  Globe, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { industriesData } from '../data/industriesData';

export const IndustriesPage = ({ onOpenConsultation }) => {
  const iconMap = {
    Package: Package,
    Sparkles: Sparkles,
    ShoppingBag: ShoppingBag,
    Rocket: Rocket,
    Globe: Globe,
    Building2: Building2,
  };

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Sectors & Ecosystems</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            INDUSTRIES WE <span className="text-cyan-400">SERVE</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every vertical has unique margin constraints, fulfillment velocities, and customer expectations. We engineer specialized solutions for consumer brands and digital pioneers.
          </p>
        </div>

        {/* Deep Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((item) => {
            const Icon = iconMap[item.icon] || Package;

            return (
              <div
                key={item.id}
                className="glass-card rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {item.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-dark-950/60 border border-white/5 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                      Sector Bottleneck:
                    </div>
                    <div className="text-xs text-slate-300">
                      {item.challenges}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-dark-950/60 border border-white/5 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      Our Targeted Strategy:
                    </div>
                    <div className="text-xs text-slate-300">
                      {item.solutions}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 transition flex items-center justify-center gap-2 group"
                  >
                    <span>Get Sector Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
