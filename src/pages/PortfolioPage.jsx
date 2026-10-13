import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Filter
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';

export const PortfolioPage = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstrated Execution Frameworks</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            PORTFOLIO & <span className="text-cyan-400">CASE STUDIES</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Browse our work across mobile app engineering, 4K cosmetic video ads, Amazon Seller Central optimization, and luxury retail packaging.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {portfolioCategories.map((cat) => (
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

        {/* Notice of Transparency */}
        <div className="mb-12 p-4 rounded-2xl bg-dark-900/80 border border-white/10 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Transparency Standard: Projects are labeled as <strong className="text-cyan-400">Sample Case Studies</strong> illustrating verified agency workflows, architectures, and performance frameworks. Actual client references available for enterprise engagements under NDA.</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 hidden md:inline">
            Verified Standards
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-dark-950/80 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {project.tag}
                    </span>
                    {project.isSample && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 backdrop-blur-md">
                        Sample Project
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono mb-1">
                      {project.clientType}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="p-3.5 rounded-xl bg-dark-950/70 border border-white/5 space-y-1.5 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Challenge: </span>
                      <span className="text-slate-300">{project.challenge}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Solution: </span>
                      <span className="text-slate-300">{project.solution}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                        <div className="text-sm font-display font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-[9px] text-slate-400 leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-white/10 text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 transition flex items-center justify-center gap-2 group/btn"
                >
                  <span>Request Full Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
