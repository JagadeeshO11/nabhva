import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Mobile App',
    budget: '$10k - $25k',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Close Button */}
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {submitted ? (
            <div className="success-state">
              <CheckCircle2 size={54} className="success-icon" />
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="modal-header">
                <div className="badge-yellow">
                  <span>GET IN TOUCH</span>
                </div>
                <h2>Let's build something <span className="highlight">extraordinary.</span></h2>
                <p>Tell us about your product idea and goals.</p>
              </div>

              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Primary Need</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="Super App / Mobile">Super App / Mobile App</option>
                      <option value="Web Dashboard">Web Dashboard</option>
                      <option value="UX/UI Design System">UX/UI Design System</option>
                      <option value="Brand Identity">Brand Identity</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Estimated Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k - $50k">$25,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Details</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Briefly describe your vision, timeline, or objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary-dark full-width">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            </>
          )}
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

        .modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 620px;
          width: 100%;
          padding: 2.75rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
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
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-primary);
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: #e2e8f0;
        }

        .modal-header h2 {
          font-size: 2rem;
          margin-top: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .modal-header .highlight {
          color: var(--color-dark-green);
        }

        .modal-header p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.75rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--color-text-primary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          font-family: var(--font-body);
          font-size: 0.92rem;
          padding: 0.75rem 1rem;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-sm);
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--color-dark-green);
        }

        .btn-primary-dark.full-width {
          width: 100%;
          padding: 0.9rem;
          margin-top: 0.5rem;
        }

        .success-state {
          text-align: center;
          padding: 3rem 1rem;
        }

        .success-icon {
          color: var(--color-dark-green);
          margin-bottom: 1rem;
        }

        .success-state h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .success-state p {
          color: var(--color-text-secondary);
        }

        @media (max-width: 600px) {
          .modal-card {
            padding: 2rem 1.25rem;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
