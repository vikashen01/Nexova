import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  X, 
  Share2, 
  CheckCircle2 
} from 'lucide-react';
import { insightsArticles } from '../data/insightsData';

export const InsightsSection = () => {
  const [readingArticle, setReadingArticle] = useState(null);

  return (
    <section id="insights" className="py-24 sm:py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Direct Reference Styling: "INSIGHTS THAT INSPIRE") */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Educational Blueprints</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            INSIGHTS THAT <span className="text-cyan-400">INSPIRE</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Stay ahead of the curve with our latest articles. From industry trends to expert tips, explore our curated content to help you make informed decisions and drive success.
          </p>
        </div>

        {/* 4 In-Depth Educational Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insightsArticles.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-dark-950/80 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setReadingArticle(article)}
                  className="w-full flex items-center justify-between py-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 border-t border-white/5 transition-colors group/btn"
                >
                  <span>Read Full Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Reader */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/80 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-dark-900 rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10 text-left">
            
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {readingArticle.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {readingArticle.readTime} • Published {readingArticle.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                {readingArticle.title}
              </h2>

              <div className="text-xs text-slate-400 border-b border-white/10 pb-4">
                By {readingArticle.author}
              </div>

              <div className="rounded-2xl overflow-hidden aspect-video max-h-72 w-full my-4">
                <img 
                  src={readingArticle.image} 
                  alt={readingArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm sm:text-base text-slate-200 space-y-4 leading-relaxed whitespace-pre-line pt-2">
                {readingArticle.content}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Published for executive teams & digital brand managers.
                </span>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
