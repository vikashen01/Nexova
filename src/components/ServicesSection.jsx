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
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Users,
  Megaphone,
  CheckCheck
} from 'lucide-react';
import { servicesData, serviceCategories } from '../data/servicesData';

export const ServicesSection = ({ onOpenConsultation, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(item => item.category === selectedCategory);

  return (
    <section id="services" className="py-24 sm:py-32 bg-dark-900/60 relative">
      {/* Background glow lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header - (Exact Reference Styling: "OUR EXPERTISE, YOUR GROWTH") */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            OUR EXPERTISE, <span className="text-cyan-400">YOUR GROWTH</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From strategy to execution, we offer a full suite of digital services designed to elevate your brand and drive results. Discover how we can help your business thrive.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan scale-105'
                  : 'bg-dark-950/80 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid (Direct Reference Match: Clean dark cards with "Get Service" pills) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Card Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all ${
                      service.isUpcoming
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.25)] animate-pulse'
                        : 'bg-white/5 text-slate-400 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300'
                    }`}>
                      {service.isUpcoming ? '✦ UPCOMING' : service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <div className="text-xs text-cyan-400/80 font-medium mb-3">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Supported Platforms (if specified) */}
                  {service.platforms && (
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {service.platforms.map((plat, pIdx) => (
                        <span key={pIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                          {plat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-white/5">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Pill Button (Direct from Reference: "Get Service ->") */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(service);
                      onOpenConsultation();
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                      service.isUpcoming
                        ? 'bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border-amber-500/40'
                        : 'text-white group-hover:text-cyan-400 bg-white/5 group-hover:bg-cyan-500/10 border-white/10 group-hover:border-cyan-500/30'
                    }`}
                  >
                    <span>{service.isUpcoming ? 'Join Waitlist' : 'Get Service'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <span className="text-[10px] text-slate-500 font-mono">
                    {service.isUpcoming ? 'Launching Soon' : 'Verified SLA'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-white">
              Need a tailored multi-service package for your brand?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Combine marketplace operations, paid media scale, 4K commercials, and custom React development under one dedicated team.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-glow-cyan transition-all"
          >
            Request Custom Scope & Audit
          </button>
        </div>

      </div>
    </section>
  );
};
