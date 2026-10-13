import React from 'react';
import { ShieldCheck, FileCheck2, Scale } from 'lucide-react';

export const TermsPage = () => {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Master Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Governing Agency Engagements • Updated: March 2026
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Engagement Framework</h2>
            <p>
              These Terms and Conditions govern all agency service proposals, Statements of Work (SOWs), and consultation engagements executed between NEXOVA Digital Solutions Agency ("NEXOVA") and client entities ("Client"). Engaging NEXOVA signifies acceptance of these operational standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Scope of Services & Deliverables</h2>
            <p>
              NEXOVA delivers digital growth solutions across Amazon Seller Central management, paid advertising, cinematic video production, software engineering, and operations. Project specifications, KPIs, and deliverables are delineated in the applicable Statement of Work.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>3. Professional Qualifications & Compliance Disclaimer</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Assistance regarding GST filing, Indian ITR documentation, and business administrative support is strictly facilitation and operational coordination support. These services are provided subject to applicable professional licensing and qualifications, in collaboration with accredited Chartered Accountants, Certified Public Accountants, and qualified legal practitioners as required by relevant jurisdiction laws. NEXOVA does not provide standalone unauthorized legal or formal statutory opinions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Intellectual Property & Asset Ownership</h2>
            <p>
              Upon receipt of full payment for agreed milestones, all final video commercials, customized React web code, branding vector files, and A+ Content developed specifically for the Client transfer to the Client's ownership. NEXOVA retains rights to proprietary internal developer libraries and frameworks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Account Access and Platform Policies</h2>
            <p>
              Clients must provide access via secondary user delegation systems (e.g., Amazon Secondary Users, Meta Business Manager Partner Access, Google Workspace delegated access). Clients remain responsible for maintaining primary administrative ownership and platform terms compliance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Contact for Legal Notices</h2>
            <p>
              Formal legal and contractual inquiries may be directed to <a href="mailto:legal@nexovadigital.com" className="text-cyan-400 hover:underline">legal@nexovadigital.com</a> or via corporate mail at NEXOVA Legal Operations.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
