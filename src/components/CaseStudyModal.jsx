import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudyModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="case-study-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.25 }}
        >
          {/* Close Button */}
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>

          {/* Hero Banner Image */}
          <div className={`case-hero-box ${project.bgStyle}`}>
            <img src={project.image} alt={project.title} className="case-hero-img" />
          </div>

          {/* Details Content */}
          <div className="case-body">
            <div className="badge-yellow">
              <span>{project.tag}</span>
            </div>

            <h2 className="case-title">{project.title}</h2>
            <p className="case-subtitle">{project.description}</p>

            {/* Quick Meta Grid */}
            <div className="meta-grid">
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-val">{project.fullDetails.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-val">{project.fullDetails.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Services</span>
                <span className="meta-val">{project.fullDetails.services.join(', ')}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="case-section">
              <h4>Project Overview</h4>
              <p>{project.fullDetails.overview}</p>
            </div>

            {/* Deliverables List */}
            <div className="case-section">
              <h4>Key Deliverables</h4>
              <ul className="deliverables-list">
                {project.fullDetails.deliverables.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="case-footer-cta">
              <button 
                onClick={() => { onClose(); onOpenContact(); }}
                className="btn-primary-dark full-width"
              >
                <span>Request Similar Project</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .case-study-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 760px;
          width: 100%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          max-height: 90vh;
          overflow-y: auto;
        }

        .case-hero-box {
          width: 100%;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .case-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .case-body {
          padding: 2.5rem;
        }

        .case-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .case-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 1.25rem 1.5rem;
          background: #f8fafc;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .meta-label {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-val {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .case-section {
          margin-bottom: 2rem;
        }

        .case-section h4 {
          font-size: 1.15rem;
          margin-bottom: 0.6rem;
        }

        .case-section p {
          color: var(--color-text-secondary);
          line-height: 1.65;
        }

        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .deliverables-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .check-icon {
          color: var(--color-dark-green);
        }

        @media (max-width: 650px) {
          .case-body {
            padding: 1.5rem;
          }
          .meta-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .case-hero-box {
            height: 220px;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
