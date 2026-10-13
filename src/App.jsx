import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { initAnalytics, trackPageView } from './utils/analytics';

// Auto-scroll to top on route change & track pageview
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);

  useEffect(() => {
    // Initialize GA4, GTM, and GSC dynamically from environment variables
    initAnalytics();
  }, []);

  const handleOpenConsultation = (service = null) => {
    setPreselectedService(service);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setPreselectedService(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      <RouteTracker />
      
      {/* Sticky Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation(null)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenConsultation={() => handleOpenConsultation(null)} 
                onSelectService={(svc) => handleOpenConsultation(svc)} 
              />
            } 
          />
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenConsultation={() => handleOpenConsultation(null)} 
                onSelectService={(svc) => handleOpenConsultation(svc)} 
              />
            } 
          />
          <Route 
            path="/industries" 
            element={<IndustriesPage onOpenConsultation={() => handleOpenConsultation(null)} />} 
          />
          <Route 
            path="/portfolio" 
            element={<PortfolioPage onOpenConsultation={() => handleOpenConsultation(null)} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenConsultation={() => handleOpenConsultation(null)} />} 
          />
          <Route 
            path="/insights" 
            element={<InsightsPage />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage onOpenConsultation={() => handleOpenConsultation(null)} />} 
          />
          <Route 
            path="/privacy-policy" 
            element={<PrivacyPage />} 
          />
          <Route 
            path="/terms" 
            element={<TermsPage />} 
          />
          {/* Fallback to Home */}
          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenConsultation={() => handleOpenConsultation(null)} 
                onSelectService={(svc) => handleOpenConsultation(svc)} 
              />
            } 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation(null)} />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation}
        preselectedService={preselectedService}
      />
    </div>
  );
}
