import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FeaturedProjects from './components/FeaturedProjects';
import OurApproach from './components/OurApproach';
import ContactFooter from './components/ContactFooter';
import BlogsPage from './components/BlogsPage';
import SafetyPage from './components/SafetyPage';
import CareersPage from './components/CareersPage';
import SupportPage from './components/SupportPage';
import ContactModal from './components/ContactModal';
import CaseStudyModal from './components/CaseStudyModal';
import AppDownloadModal from './components/AppDownloadModal';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'blogs' | 'safety' | 'careers' | 'support'
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [appDownloadModalOpen, setAppDownloadModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleOpenAppDownload = () => setAppDownloadModalOpen(true);

  return (
    <div className="app-root">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--color-yellow);
          color: var(--color-dark-green);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(255, 196, 0, 0.4);
          z-index: 95;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .scroll-top-btn:hover {
          transform: translateY(-3px);
          background: var(--color-yellow-hover);
          box-shadow: 0 10px 28px rgba(255, 196, 0, 0.5);
        }

        @media (max-width: 480px) {
          .scroll-top-btn {
            bottom: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenContact={handleOpenContact}
        onOpenAppDownload={handleOpenAppDownload}
      />

      {/* Main Dynamic Page Router */}
      <main>
        {activePage === 'home' && (
          <>
            <Hero 
              onOpenContact={handleOpenContact} 
              onOpenAppDownload={handleOpenAppDownload}
            />
            <StatsBar />
            <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
            <OurApproach />
          </>
        )}

        {activePage === 'blogs' && (
          <BlogsPage />
        )}

        {activePage === 'safety' && (
          <SafetyPage onOpenContact={handleOpenContact} />
        )}

        {activePage === 'careers' && (
          <CareersPage />
        )}

        {activePage === 'support' && (
          <SupportPage />
        )}
      </main>

      {/* Footer for all pages */}
      <ContactFooter 
        onOpenContact={handleOpenContact} 
        onOpenAppDownload={handleOpenAppDownload}
      />

      {/* App Download Redirect Modal */}
      <AppDownloadModal 
        isOpen={appDownloadModalOpen}
        onClose={() => setAppDownloadModalOpen(false)}
      />

      {/* Contact Form Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

      {/* Case Study Detail Modal */}
      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
