import React from 'react';
import { Hero } from '../components/Hero';
import { ThreePillars } from '../components/ThreePillars';
import { ServicesSection } from '../components/ServicesSection';
import { FeaturedDeepDives } from '../components/FeaturedDeepDives';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { CaseStudies } from '../components/CaseStudies';
import { IndustryShowcase } from '../components/IndustryShowcase';
import { TechEcosystem } from '../components/TechEcosystem';
import { Testimonials } from '../components/Testimonials';
import { InsightsSection } from '../components/InsightsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = ({ onOpenConsultation, onSelectService }) => {
  return (
    <div className="space-y-0">
      <Hero onOpenConsultation={onOpenConsultation} />
      <ThreePillars onOpenConsultation={onOpenConsultation} />
      <ServicesSection 
        onOpenConsultation={onOpenConsultation} 
        onSelectService={onSelectService} 
      />
      <FeaturedDeepDives onOpenConsultation={onOpenConsultation} />
      <WhyChooseUs onOpenConsultation={onOpenConsultation} />
      <ProcessSection onOpenConsultation={onOpenConsultation} />
      <CaseStudies onOpenConsultation={onOpenConsultation} />
      <IndustryShowcase onOpenConsultation={onOpenConsultation} />
      <TechEcosystem />
      <Testimonials />
      <InsightsSection />
      <FAQSection onOpenConsultation={onOpenConsultation} />
      <ContactSection />
    </div>
  );
};
