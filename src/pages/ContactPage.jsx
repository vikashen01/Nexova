import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FAQSection } from '../components/FAQSection';

export const ContactPage = ({ onOpenConsultation }) => {
  return (
    <div className="pt-28 pb-10 sm:pt-36 bg-dark-950 min-h-screen">
      <ContactSection />
      <FAQSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
