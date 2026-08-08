import React, { useState } from 'react';
import { X, Smartphone, Download, QrCode, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppDownloadModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = (e) => {
    e.preventDefault();
    if (phone) {
      setLinkSent(true);
      setTimeout(() => setLinkSent(false), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="app-modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
        >
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className="app-modal-header">
            <div className="badge-yellow">
              <span>GET THE NABHVA SUPER APP</span>
            </div>
            <h2>Download Nabhva on your <span className="highlight">phone.</span></h2>
            <p>Experience fast rides, food delivery, and door-to-door courier services in one app.</p>
          </div>

          {/* App Store Dummy Links Grid */}
          <div className="store-links-grid">
            <a 
              href="https://play.google.com/store/apps/details?id=com.nabhva.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="store-card play-store"
            >
              <div className="store-icon">▶</div>
              <div className="store-info">
                <span className="sub">GET IT ON</span>
                <span className="title">Google Play</span>
              </div>
              <ExternalLink size={14} className="ext-icon" />
            </a>

            <a 
              href="https://apps.apple.com/app/nabhva/id123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="store-card app-store"
            >
              <div className="store-icon">🍎</div>
              <div className="store-info">
                <span className="sub">Download on the</span>
                <span className="title">App Store</span>
              </div>
              <ExternalLink size={14} className="ext-icon" />
            </a>
          </div>

          {/* QR Code & SMS Link Section */}
          <div className="qr-sms-section">
            <div className="qr-box">
              <QrCode size={70} className="qr-icon" />
              <span>Scan QR to install</span>
            </div>

            <div className="sms-box">
              <h4>Get link on SMS</h4>
              <p>Enter your 10-digit mobile number</p>

              {linkSent ? (
                <div className="sms-success">
                  <CheckCircle2 size={16} />
                  <span>Download link sent to +91 {phone}!</span>
                </div>
              ) : (
                <form onSubmit={handleSendLink} className="sms-form">
                  <input 
                    type="tel" 
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-send-sms">
                    <span>Send</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .app-modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 580px;
          width: 100%;
          padding: 2.75rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.22);
        }

        .app-modal-header h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-top: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .app-modal-header .highlight {
          color: var(--color-dark-green);
        }

        .app-modal-header p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.75rem;
        }

        .store-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .store-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.95rem 1.25rem;
          border-radius: var(--radius-md);
          background: #121820;
          color: #ffffff;
          transition: all 0.25s ease;
          position: relative;
        }

        .store-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          background: var(--color-dark-green);
        }

        .store-icon {
          font-size: 1.6rem;
        }

        .store-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .store-info .sub {
          font-size: 0.68rem;
          color: #A0AEC0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .store-info .title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
        }

        .ext-icon {
          color: #A0AEC0;
        }

        .qr-sms-section {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 1.5rem;
          padding: 1.25rem;
          background: #F8FAFC;
          border-radius: var(--radius-md);
          border: 1px solid #E2E8F0;
        }

        .qr-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: #ffffff;
          padding: 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid #E2E8F0;
        }

        .qr-box span {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-text-secondary);
        }

        .sms-box h4 {
          font-size: 1rem;
          margin-bottom: 0.15rem;
        }

        .sms-box p {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }

        .sms-form {
          display: flex;
          gap: 0.5rem;
        }

        .sms-form input {
          flex-grow: 1;
          padding: 0.6rem 0.85rem;
          border: 1.5px solid #CBD5E1;
          border-radius: var(--radius-sm);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          outline: none;
        }

        .sms-form input:focus {
          border-color: var(--color-dark-green);
        }

        .btn-send-sms {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-sm);
        }

        .sms-success {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #10B981;
          font-weight: 700;
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .store-links-grid {
            grid-template-columns: 1fr;
          }
          .qr-sms-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
