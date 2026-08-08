import React from 'react';
import { ArrowRight, Smartphone, Mail, Phone, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactFooter({ onOpenContact, onOpenAppDownload }) {
  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Blogs', page: 'blogs' },
    { label: 'Safety', page: 'safety' },
    { label: 'Careers', page: 'careers' },
    { label: 'Support', page: 'support' },
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Policy'];

  return (
    <footer className="footer-section">
      {/* CTA Card */}
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Content */}
          <div className="cta-left">
            <span className="cta-tag">GET THE APP FREE</span>
            <h2 className="cta-title">
              Your city, your pace.<br />
              Ride & deliver with Nabhva.
            </h2>
            <p className="cta-sub">
              Download the Nabhva app and book your first ride or order in under 30 seconds. Available on Android & iOS.
            </p>

            <div className="cta-actions">
              <button onClick={onOpenAppDownload} className="btn-primary-light">
                <Smartphone size={18} />
                <span>Download App</span>
              </button>
              <button onClick={onOpenContact} className="btn-outline-light">
                <span>Partner with us</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="contact-chips">
              <a href="mailto:hello@nabhva.com" className="contact-chip">
                <Mail size={15} /> hello@nabhva.com
              </a>
              <a href="tel:18008899000" className="contact-chip">
                <Phone size={15} /> 1800-889-9000
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="cta-right">
            <img src="/assets/footer-scooter.png" alt="Nabhva Delivery Captain" className="scooter-img" />
          </div>
        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="footer-logo">Nabhva</span>
            <span className="footer-copy">© 2026 Nabhva Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="footer-socials">
            {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="social-btn" aria-label="Social">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 0 0 2rem 0;
        }

        .cta-card {
          border-radius: var(--radius-lg);
          background: var(--color-dark-green);
          padding: 4rem 4.5rem;
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 3rem;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          bottom: -60px;
          right: 200px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 196, 0, 0.06);
        }

        .cta-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--color-yellow);
          background: rgba(255, 196, 0, 0.12);
          border: 1px solid rgba(255, 196, 0, 0.3);
          border-radius: var(--radius-pill);
          padding: 0.3rem 0.85rem;
          margin-bottom: 1.25rem;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.18;
          margin-bottom: 1.1rem;
          letter-spacing: -0.025em;
        }

        .cta-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.65;
          max-width: 450px;
          margin-bottom: 2rem;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 1.75rem;
        }

        .btn-primary-light {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-yellow);
          color: var(--color-dark-green);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.9rem 1.75rem;
          border-radius: var(--radius-pill);
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(255, 196, 0, 0.35);
        }

        .btn-primary-light:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255, 196, 0, 0.45);
        }

        .btn-outline-light {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.9rem 1.75rem;
          border-radius: var(--radius-pill);
          background: transparent;
          transition: all 0.25s ease;
        }

        .btn-outline-light:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.06);
        }

        .contact-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.85rem;
          font-family: var(--font-heading);
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .contact-chip:hover {
          color: var(--color-yellow);
        }

        .cta-right {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .scooter-img {
          max-width: 320px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.35));
        }

        /* Footer Bottom */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0 0.5rem 0;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-dark-green);
          letter-spacing: -0.03em;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .footer-socials {
          display: flex;
          gap: 0.5rem;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #E8EAE6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          border-color: var(--color-dark-green);
          color: var(--color-dark-green);
          background: #F0F4F1;
        }

        @media (max-width: 900px) {
          .cta-card {
            grid-template-columns: 1fr;
            padding: 3rem 2.25rem;
            gap: 2rem;
          }

          .cta-right {
            display: none;
          }

          .cta-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .cta-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
