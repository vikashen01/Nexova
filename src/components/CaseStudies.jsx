import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Smartphone, 
  TrendingUp, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';

export const CaseStudies = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  const featured = filteredProjects[activeSlide % filteredProjects.length] || filteredProjects[0];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header (Direct Reference Inspiration: "BRINGING IDEAS TO LIFE" / "Explore Our Success Stories") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Featured Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              BRINGING <span className="text-cyan-400">IDEAS TO LIFE</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Explore how we architect high-impact brand identities, multi-million dollar Amazon operations, 4K commercials, and custom React applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.slice(0, 4).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveSlide(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                    activeCategory === cat.id
                      ? 'bg-cyan-500 text-dark-950 font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notice of Transparency Badge */}
        <div className="mb-10 px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Transparency Standard: Projects are labeled as <strong className="text-cyan-400">Sample Case Studies</strong> illustrating verified agency workflows, architectures, and performance frameworks.</span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 hidden sm:inline">
            Verified Standards
          </span>
        </div>

        {/* Featured Showcase Item (Reference Match: Clado® iPhone Mockup Card Layout) */}
        {featured && (
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Case Narrative & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 01 Numbering Badge & Tag */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-cyan-400 border border-white/10">
                    0{((activeSlide % filteredProjects.length) + 1)}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {featured.clientType}
                  </span>
                  {featured.isSample && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      Sample Case Study
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {featured.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featured.summary}
                </p>

                {/* Challenge & Solution Pill Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Core Challenge
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {featured.challenge}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Agency Solution
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {featured.solution}
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {featured.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-lg sm:text-xl font-display font-bold text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs text-slate-400 font-medium">Delivered via:</span>
                  {featured.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-dark-950 border border-white/10 text-slate-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button & Slider Progress (From Reference Image) */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all"
                  >
                    <span>View Project Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
                      aria-label="Previous Project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-slate-400">
                      {activeSlide + 1} / {filteredProjects.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
                      aria-label="Next Project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress bar indicator (From Reference Image) */}
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${((activeSlide + 1) / filteredProjects.length) * 100}%` }}
                  />
                </div>

              </div>

              {/* Right Column: Device Frame / Mockup Showcase (Inspired by iPhone 16 Pro Mockup in Reference Image) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/18.5] rounded-[48px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-black shadow-2xl border-4 border-slate-700/60 shadow-cyan-950/50">
                  
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-900/60" />
                  </div>

                  {/* Device Screen Interior */}
                  <div className="w-full h-full rounded-[38px] bg-dark-950 overflow-hidden relative flex flex-col justify-between p-4 border border-white/10">
                    
                    {/* Screen Background Media */}
                    <img
                      src={featured.heroImage}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent" />

                    {/* Top Status Simulation */}
                    <div className="relative z-10 pt-4 flex justify-between items-center text-[10px] text-white/80 font-mono">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <span>5G</span>
                        <div className="w-4 h-2 border border-white/80 rounded-sm p-[1px]">
                          <div className="w-full h-full bg-white" />
                        </div>
                      </div>
                    </div>

                    {/* Device UI Overlay Card */}
                    <div className="relative z-10 space-y-3 pt-12">
                      <div className="glass-panel p-3.5 rounded-2xl border border-white/15 space-y-2 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                            Live Interface
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <div className="text-xs font-bold text-white">
                          {featured.title}
                        </div>
                        <div className="text-[10px] text-slate-300">
                          {featured.summary.slice(0, 75)}...
                        </div>
                        <div className="pt-1 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-cyan-300">
                            {featured.metrics[0].label}: {featured.metrics[0].value}
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-400 text-dark-950 font-bold">
                            Active
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="text-[11px] font-bold text-white">
                          Engineered for High Conversion
                        </div>
                        <div className="text-[9px] text-slate-400">
                          Sub-second response • Responsive UX
                        </div>
                      </div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="relative z-10 pb-1 flex justify-center">
                      <div className="w-28 h-1 bg-white/50 rounded-full" />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Project Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveSlide(idx)}
              className={`glass-card rounded-2xl p-5 border transition-all duration-200 cursor-pointer ${
                activeSlide === idx
                  ? 'border-cyan-400/80 shadow-glow-cyan bg-cyan-950/20'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded bg-dark-950/80 text-cyan-300 border border-white/10">
                  {item.tag}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-2">{item.summary}</p>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-semibold">{item.metrics[0].value} {item.metrics[0].label}</span>
                <span className="text-slate-400 text-[10px]">Select & Preview →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
