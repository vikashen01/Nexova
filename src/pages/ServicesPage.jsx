import React, { useState } from 'react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Video, 
  Code2, 
  Search, 
  Layers, 
  Headphones, 
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  Megaphone,
  CheckCheck
} from 'lucide-react';
import { servicesData, serviceCategories } from '../data/servicesData';

export const ServicesPage = ({ onOpenConsultation, onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    ShoppingBag: ShoppingBag,
    TrendingUp: TrendingUp,
    Video: Video,
    Code2: Code2,
    Search: Search,
    Layers: Layers,
    Headphones: Headphones,
    FileCheck: FileCheck,
    Users: Users,
    Megaphone: Megaphone,
    CheckCheck: CheckCheck,
  };

  const filtered = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Capabilities</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            SERVICES & <span className="text-cyan-400">SOLUTIONS</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From Amazon Seller Central operations to high-ROAS paid acquisition, 4K commercials, and custom React web development—explore our full spectrum of digital growth capabilities.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                  activeCategory === cat.id
                    ? 'bg-cyan-400 text-dark-950 font-bold shadow-glow-cyan'
                    : 'bg-dark-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-12">
          {filtered.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;

            return (
              <div 
                key={service.id}
                className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-all ${
                          service.isUpcoming
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.25)] animate-pulse'
                            : 'bg-white/5 text-slate-400 border border-white/10'
                        }`}>
                          {service.isUpcoming ? '✦ UPCOMING' : service.badge}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-cyan-400">
                      {service.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Supported Platforms (if specified) */}
                    {service.platforms && (
                      <div className="pt-1 flex flex-wrap gap-2">
                        {service.platforms.map((plat, pIdx) => (
                          <span key={pIdx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                            {plat}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-3 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-white">
                        Core Methodologies & Systems:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Box & Action */}
                  <div className="lg:col-span-5 bg-dark-950/70 rounded-2xl p-6 border border-white/5 space-y-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 pb-2 border-b border-white/10">
                      Standard Client Deliverables:
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                      <button
                        onClick={() => {
                          if (onSelectService) onSelectService(service);
                          onOpenConsultation();
                        }}
                        className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                          service.isUpcoming
                            ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
                            : 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 shadow-glow-cyan'
                        }`}
                      >
                        <span>{service.isUpcoming ? 'Join Waitlist / Early Access' : 'Request Service Scope & Pricing'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="text-[10px] text-slate-500 text-center font-mono">
                        {service.isUpcoming ? 'Launching Soon • Priority Access' : 'Turnaround SLA: 48-Hour Blueprint'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
