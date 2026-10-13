import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  ChevronDown,
  Layers,
  ShoppingBag,
  TrendingUp,
  Video,
  Code2,
  FileCheck
} from 'lucide-react';

export const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Industries', path: '/industries' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-dark-950/85 border-b border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1.5px] shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  N
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  NEXOVA
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Global
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Digital Solutions Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Pill (Reference Style) */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/80 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md shadow-glass">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  onMouseEnter={() => link.hasDropdown && setServicesDropdown(true)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
                    location.pathname === link.path
                      ? 'text-cyan-400 bg-white/10 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-3 w-80 p-3 rounded-2xl bg-dark-900/95 border border-white/10 shadow-2xl backdrop-blur-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 px-3 py-1">
                      Core Agency Services
                    </div>
                    <div className="space-y-1 mt-1">
                      <Link to="/services" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition group/item">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/item:scale-105 transition-transform">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-cyan-400">Amazon & E-Commerce</div>
                          <div className="text-[11px] text-slate-400">Seller Central, A+ Content, Operations</div>
                        </div>
                      </Link>

                      <Link to="/services" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition group/item">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:scale-105 transition-transform">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-blue-400">Meta & Google Ads</div>
                          <div className="text-[11px] text-slate-400">Paid scale, CAPI tracking & ROAS</div>
                        </div>
                      </Link>

                      <Link to="/services" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition group/item">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover/item:scale-105 transition-transform">
                          <Video className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-violet-400">Cinematic Video & Media</div>
                          <div className="text-[11px] text-slate-400">FMCG, Skincare & AI-assisted video</div>
                        </div>
                      </Link>

                      <Link to="/services" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition group/item">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/item:scale-105 transition-transform">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-cyan-400">Web & App Engineering</div>
                          <div className="text-[11px] text-slate-400">React.js, Headless stores, Web apps</div>
                        </div>
                      </Link>

                      <Link to="/services" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition group/item">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover/item:scale-105 transition-transform">
                          <FileCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-amber-400">Operations & Support</div>
                          <div className="text-[11px] text-slate-400">Customer ops, MIS & filing support</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+919142582809"
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-full border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call: +91 9142582809</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-95 shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-dark-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3">
            <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl text-base font-semibold transition ${
                  location.pathname === link.path
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <a 
              href="tel:+919142582809"
              className="flex items-center justify-center gap-2 text-sm text-slate-300 py-3 rounded-xl bg-white/5 border border-white/10"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Direct: +91 9142582809</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow-cyan"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
