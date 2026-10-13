import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-dark-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>Legal Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: March 2026 • Effective Date: January 1, 2026
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope and Commitment to Privacy</h2>
            <p>
              At NEXOVA Digital Solutions Agency ("NEXOVA", "we", "our", or "us"), safeguarding the confidentiality and integrity of proprietary commercial information, customer data, and brand assets is our highest operational priority. This Privacy Policy outlines our standards for collecting, processing, and protecting information when you access our web platforms or partner with us for marketing, software engineering, and business operations services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect information strictly necessary to scope, execute, and deliver client engagements:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong className="text-slate-200">Contact & Organization Data:</strong> Full name, corporate email address, business telephone number, brand URLs, and estimated marketing budgets submitted via inquiry forms.</li>
              <li><strong className="text-slate-200">Operational & Analytics Data:</strong> Marketplace analytics, Google Analytics metrics, and advertising campaign IDs authorized under limited-access client permissions.</li>
              <li><strong className="text-slate-200">Technical Device Data:</strong> Anonymized browser information, IP addresses, and telemetry to verify Core Web Vitals and protect platform security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Strict Prohibition of Data Selling</h2>
            <p>
              We <strong className="text-white">never sell, rent, monetize, or trade</strong> client information or prospect inquiries to any third-party brokers, advertisers, or lead networks. Information is utilized exclusively by our authorized personnel to execute requested audits and service scopes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Mutual Non-Disclosure & Enterprise Security</h2>
            <p>
              All active client engagements operate under executed mutual Non-Disclosure Agreements (NDAs). Access to Amazon Seller Central, Meta Business Managers, and Google Ads accounts is restricted strictly to designated account teams utilizing enterprise single-sign-on (SSO) and multi-factor authentication (MFA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
            <p>
              For data protection questions or to request data erasure, contact our compliance officer at <a href="mailto:privacy@nexovadigital.com" className="text-cyan-400 hover:underline">privacy@nexovadigital.com</a> or call +91 9142582809.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
