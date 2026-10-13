import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Target, 
  Globe2, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Layers,
  Award
} from 'lucide-react';

export const AboutPage = ({ onOpenConsultation }) => {
  const values = [
    {
      title: 'Integrated Accountability',
      desc: 'We reject agency finger-pointing. Creative directors, media buyers, Amazon specialists, and React engineers work side-by-side to deliver real enterprise outcomes.',
    },
    {
      title: 'Precision Over Fluff',
      desc: 'No vague vanity metrics. We measure our success on Buy Box share, Contribution Margin, True Blended ROAS, Page Speed, and SLA adherence.',
    },
    {
      title: 'Institutional Discretion',
      desc: 'We operate under strict mutual Non-Disclosure Agreements. Your catalog secrets, financial models, and customer data are safeguarded with enterprise security.',
    },
    {
      title: 'Agile Velocity',
      desc: 'Digital commerce evolves weekly. Our sprint teams operate on 2-week agile delivery cycles to rapidly test, pivot, and scale high-performing initiatives.',
    }
  ];

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage & Purpose</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            ABOUT <span className="text-cyan-400">NEXOVA</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We are an international digital growth agency engineering technology, creative media, marketplace operations, and business processes for brands in the USA and worldwide.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              The Genesis
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              Bridging the Gap Between Creative Cinema and Marketplace Operations.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Traditional agencies are fragmented. Creative houses produce aesthetic videos that fail direct-response ad tests. Performance marketing agencies burn ad spend without understanding catalog health. And developers write sluggish themes without understanding conversion rate optimization.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              NEXOVA was forged to solve this fundamental breakdown. We brought 4K commercial cinematography, Amazon Seller Central operations, custom React.js web development, and executive business operations together under one unified operating system.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">1+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400">50+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Brands Worked With</div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-blue-400">1M+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Marketplace GMV</div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-violet-400">99.4%</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">SLA Adherence</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-3 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="NEXOVA Agency Collaborative Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Synchronized Delivery Model</div>
                    <div className="text-[10px] text-slate-300">EST & PST Operational Windows • 24/7 Redundancy</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Guiding Operating Principles
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              How our engineers, producers, and strategists execute daily on behalf of our brand partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold font-mono text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-display font-bold text-white">{v.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Operational Model Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl font-display font-bold text-white">
              US-Aligned Support. Global Powerhouse Efficiency.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our leadership coordinates directly with US executives during regular Eastern and Pacific business hours, while our synchronized overnight sprint teams build, test, and render assets around the clock.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-8 py-3.5 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all"
          >
            Partner With Our Team
          </button>
        </div>

      </div>
    </div>
  );
};
