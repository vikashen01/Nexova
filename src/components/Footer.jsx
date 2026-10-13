import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Globe2, 
  ArrowUpRight, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export const Footer = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 text-slate-400 relative overflow-hidden">
      
      {/* Upper CTA Strip */}
      <div className="border-b border-white/10 py-12 sm:py-16 bg-gradient-to-b from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Service Agency Ready for Scale</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Ready to Accelerate Your Digital Revenue?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Get an end-to-end 48-hour diagnostic audit across Amazon Seller Central, paid advertising, creative video, and website performance.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-8 py-4 rounded-full text-xs font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 shadow-glow-cyan transition-all duration-300 hover:scale-105"
          >
            Request Free Growth Audit
          </button>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1.5px] shadow-glow-cyan">
                <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    N
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  NEXOVA
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                  Digital Solutions Agency
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering brands, FMCG manufacturers, beauty & skincare lines, and e-commerce sellers worldwide through technology, 4K creative production, high-ROAS marketing, and enterprise operations.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>NH-19, Near Fun & Adventure water park , Mehiyan, Saran Pin Code-841301</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+919142582809" className="hover:text-cyan-400 transition-colors">Connect With Us: +91 9142582809</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>contact@nexovadigital.com</span>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  E-Commerce Onboarding to QC Pass
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Amazon Seller Central Ops
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Video Editing & Motion Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Meta & Google Ads
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  4K Cinematic Commercials
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  React & Web Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Influencer Marketing (Upcoming)
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Verticals */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Industries Served
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  FMCG & Consumer Goods
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  Beauty & Skincare Brands
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  D2C E-Commerce Sellers
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  High-Growth Startups
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  US Market Expansion
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                  Retail Enterprises
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Insights
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About NEXOVA
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-cyan-400 transition-colors">
                  Agency Insights & Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Qualifications Disclaimer Box */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/5 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Professional Facilitation & Compliance Notice</span>
          </div>
          GST filing assistance, Indian ITR filing assistance, corporate documentation, and related administrative support services are non-attorney administrative and facilitation services provided strictly subject to applicable professional licensing, qualifications, and regulatory frameworks in coordination with authorized practitioners.
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NEXOVA Digital Solutions Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition">Terms & Agreements</Link>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">Twitter / X</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
