import React from 'react';
import { 
  Search, 
  Compass, 
  Sparkles, 
  Rocket, 
  BarChart3, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const ProcessSection = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      name: 'Diagnostic & Market Audit',
      icon: Search,
      desc: 'We conduct a 360-degree audit of your existing Amazon Seller Central, active ad spend, product unit economics, tech stack bottlenecks, and competitor positioning.',
      deliverable: 'Growth Diagnostic & Opportunity Scorecard'
    },
    {
      num: '02',
      title: 'Strategize',
      name: 'The Unified Growth Blueprint',
      icon: Compass,
      desc: 'Our directors construct a phase-by-phase roadmap detailing channel budget splits, target CPA/ROAS thresholds, creative production storyboards, and tech architectures.',
      deliverable: '90-Day Scaling Blueprint & KPIs'
    },
    {
      num: '03',
      title: 'Create',
      name: 'Asset Production & Engineering',
      icon: Sparkles,
      desc: 'Our studio and engineering teams produce 4K commercial videos, luxury packaging dielines, custom React components, and optimized A+ listing content.',
      deliverable: 'Multi-Aspect Visual Asset Suite'
    },
    {
      num: '04',
      title: 'Execute',
      name: 'Multi-Channel Deployment',
      icon: Rocket,
      desc: 'We launch server-side CAPI ad funnels, publish flat-file catalog updates on Amazon, deploy lightning-fast React web apps, and integrate 24/7 customer ops desks.',
      deliverable: 'Live Campaigns & Active Storefronts'
    },
    {
      num: '05',
      title: 'Optimize',
      name: 'Continuous Iteration & Scale',
      icon: BarChart3,
      desc: 'Weekly sprint reviews, daily bid modifications, creative hook fatigue rotation, and automated replenishment forecasting ensure profit margins expand consistently.',
      deliverable: 'Weekly Executive Performance Dashboards'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Proven Methodology</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            OUR 5-STEP <span className="text-cyan-400">GROWTH PROCESS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From initial audit to systematic expansion, our structured execution framework delivers predictable, scalable results for your brand.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Step {step.num}: {step.title}
                  </div>
                  <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-3 border-t border-white/5 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Core Output:
                  </div>
                  <div className="text-[11px] text-slate-200 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-dark-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
            <span className="text-white font-bold">Ready to kick off Step 01?</span> We provide an obligation-free 48-hour diagnostic audit for qualified brands.
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 shadow-glow-cyan transition-all"
          >
            Claim Free Audit & Blueprint
          </button>
        </div>

      </div>
    </section>
  );
};
