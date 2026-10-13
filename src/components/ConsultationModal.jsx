import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail,
  ShieldCheck
} from 'lucide-react';
import { submitInquiryForm, validateInquiryForm } from '../utils/formHandler';
import { trackEvent } from '../utils/analytics';

export const ConsultationModal = ({ isOpen, onClose, preselectedService = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: preselectedService?.id || 'amazon-seller-central',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    trackEvent('consultation_modal_submit_start', { service: formData.serviceCategory });

    const result = await submitInquiryForm({ ...formData, formType: 'consultation_modal' });
    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(true);
      trackEvent('consultation_modal_submit_success');
    } else {
      setErrorMsg(result.error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-dark-900 rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast-Track Growth Consultation</span>
          </div>

          <h3 className="text-2xl font-display font-extrabold text-white">
            Claim Your Free Strategy & Audit Session
          </h3>

          <p className="text-xs sm:text-sm text-slate-300">
            Meet directly with our senior strategy leads to analyze your marketplace operations, paid media bottlenecks, or technical scope.
          </p>

          {submitSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Session Reserved Successfully!</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you, {formData.name}. Our strategy lead will email you within 24 hours with calendar availability for your initial discovery call.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 rounded-full text-xs font-bold text-dark-950 bg-emerald-400 hover:bg-emerald-300 transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                  className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-white text-xs sm:text-sm focus:outline-none ${
                    formErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-white text-xs sm:text-sm focus:outline-none ${
                      formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Brand / Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Lumina Botanicals LLC"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Core Service Focus *
                </label>
                <select
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
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
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Current Objectives or Questions *
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current sales volume, ASIN count, ad goals, or target launch date..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-dark-950 border text-white text-xs sm:text-sm focus:outline-none ${
                    formErrors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-95 shadow-glow-cyan transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Session...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Free Consultation Request</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>NDA Protected • 100% Confidential</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
