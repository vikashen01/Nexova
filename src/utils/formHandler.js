import { supabase } from './supabaseClient';

/**
 * Form Submission & Validation Utility
 * Connected directly to Supabase backend (public.inquiries table).
 */

export const validateInquiryForm = (data) => {
  const errors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Full name is required (minimum 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid business email address.";
  }

  if (data.phone && data.phone.trim().length > 0) {
    const phoneClean = data.phone.replace(/[\s\-\(\)\+]/g, '');
    if (phoneClean.length < 7 || phoneClean.length > 15) {
      errors.phone = "Please enter a valid phone number with country code.";
    }
  }

  if (!data.serviceCategory || data.serviceCategory === "") {
    errors.serviceCategory = "Please select a service interest.";
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = "Please describe your project or objectives (minimum 5 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Supabase backend submission handler
 * Submits payload directly into the Supabase 'inquiries' table.
 */
export const submitInquiryForm = async (formData, formType = 'inquiry') => {
  try {
    const record = {
      form_type: formData.formType || formType,
      name: formData.name ? formData.name.trim() : 'Anonymous',
      email: formData.email ? formData.email.trim().toLowerCase() : '',
      phone: formData.phone && formData.phone.trim() ? formData.phone.trim() : null,
      company: formData.company && formData.company.trim() ? formData.company.trim() : null,
      website: formData.website && formData.website.trim() ? formData.website.trim() : null,
      service_category: formData.serviceCategory || null,
      budget: formData.budget || null,
      message: formData.message ? formData.message.trim() : '',
      status: 'new',
      referrer: document.referrer || window.location.href,
      user_agent: navigator.userAgent,
      metadata: {
        submittedAt: new Date().toISOString(),
        screenResolution: `${window.innerWidth}x${window.innerHeight}`
      }
    };

    const { data, error } = await supabase
      .from('inquiries')
      .insert([record])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    return {
      success: true,
      data: data && data.length > 0 ? data[0] : record,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error.message || "Failed to submit inquiry to backend. Please check your connection or contact us directly.",
    };
  }
};

