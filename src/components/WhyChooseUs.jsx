import React from 'react';
import { 
  Users, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs = ({ onOpenConsultation }) => {
  const points = [
    {
      icon: Users,
      title: 'One Integrated In-House Team',
      desc: 'No finger-pointing between separate marketing agencies, video houses, and freelance developers. Designers, media producers, React engineers, and Amazon managers collaborate in real-time.',
      highlight: 'Single Point of Contact'
    },
    {
      icon: Target,
      title: 'Customized, Brand-Specific Solutions',
      desc: 'We refuse one-size-fits-all playbooks. Whether you are an established FMCG brand expanding into D2C or an Amazon seller seeking Buy-Box dominance, your roadmap is tailored to your margin profile.',
      highlight: 'Tailored Unit Economics'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Real-Time Communication',
      desc: 'Direct Slack/Teams access, clear weekly sprint calls, shared Notion/Jira project boards, and live dashboard reporting. You always know what is live, what is testing, and what drove revenue.',
      highlight: 'Zero Black-Box Reporting'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Services That Grow With You',
      desc: 'Start with Amazon listing optimization or 4K video shoots, then seamlessly layer on Meta Ads, headless React web apps, and 24/7 customer support as your volume surges.',
      highlight: 'Modular & Elastic'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable, SLA-Backed Execution',
      desc: 'US Eastern and Pacific operational alignment, strict turnaround SLAs, non-disclosure security, and institutional confidentiality protocols protect your brand assets.',
      highlight: '99.4% SLA Adherence'
    },
    {
      icon: Clock,
      title: 'Rapid Time-to-Market',
      desc: 'Fast discovery turnaround, agile 2-week execution sprints, and quick-pivot capability ensure your marketing and technical builds stay ahead of market trends.',
      highlight: 'High-Velocity Sprints'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Agency Advantage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            WHY BRANDS PARTNER WITH <span className="text-cyan-400">NEXOVA</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Built from the ground up to solve the friction of modern digital growth. We bridge the gap between creative storytelling, technical code, and commercial operations.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-cyan-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Client Priority</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all"
          >
            <span>Schedule Discovery Call With Our Directors</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};
