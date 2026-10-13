import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import { validateInquiryForm, submitInquiryForm } from '../utils/formHandler';
import { trackEvent } from '../utils/analytics';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    serviceCategory: 'amazon-seller-central',
    budget: '$5,000 - $15,000 / mo',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage('');

    // Client-side Validation
    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    trackEvent('inquiry_form_submit_start', { service: formData.serviceCategory });

    // Supabase backend submission
    const result = await submitInquiryForm({ ...formData, formType: 'contact_page' });
    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus('success');
      trackEvent('inquiry_form_submit_success', { service: formData.serviceCategory });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        serviceCategory: 'amazon-seller-central',
        budget: '$5,000 - $15,000 / mo',
        message: '',
      });
    } else {
      setSubmitStatus('error');
      setErrorMessage(result.error);
      trackEvent('inquiry_form_submit_error', { error: result.error });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dark-900 relative">
      {/* Background glow lights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Directors</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            LET'S SCALE YOUR BRAND <span className="text-cyan-400">TOGETHER</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Request an in-depth 48-hour diagnostic audit, explore tailored service retainers, or discuss custom creative production.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details + Functional Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Contact & SLAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                Global Operations & Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct communication channels aligned with US Eastern (EST), Pacific (PST), and international business hours.
              </p>

              <div className="space-y-4 pt-2">
                <a 
                  href="tel:+919142582809" 
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Direct Connect Line / WhatsApp</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">+91 9142582809</div>
                    <div className="text-[10px] text-slate-500">Mon-Sat • 9:00 AM - 8:00 PM IST</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Office Location</div>
                    <div className="text-sm font-bold text-white">NH-19, Near Fun & Adventure water park , Mehiyan, Saran Pin Code-841301</div>
                    <div className="text-[10px] text-slate-500">Main Agency Operations Hub</div>
                  </div>
                </div>

                <a 
                  href="mailto:contact@nexovadigital.com" 
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Executive Inbox</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">contact@nexovadigital.com</div>
                    <div className="text-[10px] text-slate-500">Fast 2-4 hour response time</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Turnaround SLA</div>
                    <div className="text-sm font-bold text-white">48-Hour Growth Audit Delivery</div>
                    <div className="text-[10px] text-slate-500">Strict mutual NDA executed prior to data access</div>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Confidentiality guaranteed. Zero spam or third-party data sharing.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative shadow-2xl">
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Initiate Project Discovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Fill in your brand specifications below to connect with an Account Director.
              </p>

              {/* Success Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Inquiry Successfully Transmitted!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you for reaching out. Your project specifications have been dispatched to our senior strategy directors. We will contact you via email/phone within 24 business hours with your preliminary assessment.
                  </p>
                </div>
              )}

              {/* Error Banner */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>Submission Notice</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {errorMessage || "Unable to reach the server. Please verify your connection or email us directly at contact@nexovadigital.com."}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none transition ${
                        formErrors.name 
                          ? 'border-rose-500 focus:border-rose-400' 
                          : 'border-white/10 focus:border-cyan-400/80'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Business Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@brand.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none transition ${
                        formErrors.email 
                          ? 'border-rose-500 focus:border-rose-400' 
                          : 'border-white/10 focus:border-cyan-400/80'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number (with Country Code)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none transition ${
                        formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400/80'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Brand / Storefront URL
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://brand.com or amazon.com/shops/..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/80 transition"
                    />
                  </div>
                </div>

                {/* Service Interest & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Primary Service Interest <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400/80 transition"
                    >
                      <option value="ecommerce-onboarding-qc-pass">E-Commerce Onboarding to QC Pass (Amazon, Flipkart, Blinkit, etc.)</option>
                      <option value="amazon-seller-central">Amazon Seller Central & Operations</option>
                      <option value="video-editing">Professional Video Editing & Motion Content</option>
                      <option value="performance-marketing">Meta & Google Performance Ads</option>
                      <option value="cinematic-creative">4K Cinematic Video & Creatives</option>
                      <option value="web-development">React.js Web Engineering & Apps</option>
                      <option value="ecommerce-seo">E-Commerce & Technical SEO</option>
                      <option value="operations-support">Customer Support & Virtual Assistance</option>
                      <option value="compliance-documentation">Filing Assistance & Documentation Support</option>
                      <option value="s-aligned-sprint-teams">S-Aligned Sprint Teams (Upcoming)</option>
                      <option value="influencer-marketing">Influencer Marketing & Creator Seeding (Upcoming)</option>
                      <option value="full-service-bundle">Full-Service Growth Partner Bundle</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Monthly Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400/80 transition"
                    >
                      <option value="$3,000 - $5,000 / mo">$3,000 - $5,000 / mo</option>
                      <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                      <option value="$15,000 - $35,000 / mo">$15,000 - $35,000 / mo</option>
                      <option value="$35,000+ / mo">$35,000+ / mo (Enterprise Scale)</option>
                      <option value="project-based">Fixed Project Scope</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Goals & Current Bottlenecks <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand goals, active ad spend, ASIN volume, or timeline requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950/80 border text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none transition ${
                      formErrors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400/80'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-95 shadow-glow-cyan transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry Securely...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Request 48-Hour Audit</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  By submitting, you agree to our standard mutual NDA. Your proprietary business data is never shared.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
