import React, { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenContact, onOpenAppDownload }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Work & Services' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'safety', label: 'Safety' },
    { id: 'careers', label: 'Careers' },
    { id: 'support', label: 'Support' }
  ];

  return (
    <header className="navbar-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="brand-logo"
          onClick={(e) => { e.preventDefault(); setActivePage('home'); }}
        >
          <span className="logo-text">nabhva</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="nav-actions">
          <button onClick={onOpenAppDownload} className="btn-app-nav">
            <Smartphone size={16} />
            <span>Get App</span>
          </button>

          <button onClick={onOpenContact} className="btn-talk">
            <span className="yellow-dot"></span>
            <span>Let's Talk</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mob-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => { setActivePage(item.id); setMobileMenuOpen(false); }}
            >
              {item.label}
            </button>
          ))}

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenAppDownload(); }}
            className="btn-app-nav full-width"
          >
            <Smartphone size={18} />
            <span>Download Nabhva App</span>
          </button>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="btn-talk full-width"
          >
            <span className="yellow-dot"></span>
            <span>Let's Talk</span>
          </button>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: relative;
          z-index: 50;
          padding: 1.5rem 0;
          width: 100%;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2rem;
          color: var(--color-dark-green);
          letter-spacing: -0.04em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-text-primary);
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-dark-green);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .btn-app-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #121820;
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.6rem 1.15rem;
          border-radius: var(--radius-pill);
          transition: all 0.2s ease;
        }

        .btn-app-nav:hover {
          background: var(--color-dark-green);
          transform: translateY(-2px);
        }

        .btn-talk {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.65rem 1.4rem;
          border-radius: var(--radius-pill);
          box-shadow: 0 4px 12px rgba(20, 59, 41, 0.2);
          transition: all 0.25s ease;
        }

        .btn-talk:hover {
          background-color: var(--color-dark-green-hover);
          transform: translateY(-2px);
        }

        .yellow-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-yellow);
          border-radius: 50%;
        }

        .mobile-toggle {
          display: none;
          background: none;
          color: var(--color-text-primary);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #ffffff;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-bottom: 2px solid var(--color-yellow);
        }

        .mob-link {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-text-primary);
          background: none;
          border: none;
          text-align: left;
        }

        .mob-link.active {
          color: var(--color-dark-green);
        }

        .btn-talk.full-width, .btn-app-nav.full-width {
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
