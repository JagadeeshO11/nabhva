import React, { useState } from 'react';
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

  const handleOpenContact = () => setContactModalOpen(true);
  const handleOpenAppDownload = () => setAppDownloadModalOpen(true);

  return (
    <div className="app-root">
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
