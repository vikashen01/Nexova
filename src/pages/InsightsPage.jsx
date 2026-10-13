import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  X, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { insightsArticles } from '../data/insightsData';

export const InsightsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = insightsArticles.filter(a => 
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Research & Field Blueprints</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            AGENCY <span className="text-cyan-400">INSIGHTS</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In-depth strategic analyses, algorithmic engineering blueprints, and marketplace mechanics curated by our directors.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Amazon, CAPI, React, FMCG video..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-dark-900 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-dark-950/80 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-cyan-400 hover:text-white bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 transition flex items-center justify-between px-4 group/btn"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/85 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-dark-900 rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-10 text-left">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {selectedArticle.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="text-xs text-slate-400 font-mono border-b border-white/10 pb-4">
                {selectedArticle.readTime} • {selectedArticle.date} • By {selectedArticle.author}
              </div>

              <div className="rounded-2xl overflow-hidden aspect-video max-h-72 w-full my-4">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm sm:text-base text-slate-200 space-y-4 leading-relaxed whitespace-pre-line pt-2">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Educational Blueprint
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 transition"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
