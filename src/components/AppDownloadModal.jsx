import React, { useState } from 'react';
import { X, QrCode, Send, CheckCircle2 } from 'lucide-react';
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
          transition={{ duration: 0.25 }}
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

          {/* App Store Static Cards */}
          <div className="store-links-grid">
            <div className="store-card play-store">
              <svg className="store-icon-svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="store-info">
                <span className="sub">GET IT ON</span>
                <span className="title">Google Play</span>
              </div>
            </div>

            <div className="store-card app-store">
              <svg className="store-icon-svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="store-info">
                <span className="sub">Download on the</span>
                <span className="title">App Store</span>
              </div>
            </div>
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
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 24, 20, 0.65);
          backdrop-filter: blur(8px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .app-modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 580px;
          width: 100%;
          padding: 2.75rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.22);
          border: 1px solid rgba(255, 196, 0, 0.2);
          max-height: 90vh;
          overflow-y: auto;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #F1F5F9;
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 2;
        }

        .close-btn:hover {
          background: var(--color-dark-green);
          color: #ffffff;
          transform: rotate(90deg);
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
          cursor: default;
        }

        .store-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          background: var(--color-dark-green);
        }

        .store-icon-svg {
          flex-shrink: 0;
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

        @media (max-width: 480px) {
          .app-modal-card {
            padding: 1.5rem 1rem;
          }
          .app-modal-header h2 {
            font-size: 1.5rem;
          }
          .app-modal-header p {
            font-size: 0.88rem;
          }
          .store-card {
            padding: 0.8rem 1rem;
          }
          .qr-sms-section {
            padding: 1rem;
          }
          .sms-form {
            flex-direction: column;
          }
          .btn-send-sms {
            justify-content: center;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}