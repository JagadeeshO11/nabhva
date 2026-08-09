import React from 'react';
import { User, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatsBar() {
  const stats = [
    {
      icon: <User size={22} />,
      number: "25M+",
      label: "Happy Riders"
    },
    {
      icon: <ShieldCheck size={22} />,
      number: "150K+",
      label: "Verified Captains"
    },
    {
      icon: <Clock size={22} />,
      number: "98%",
      label: "On-Time Deliveries"
    },
    {
      icon: <MapPin size={22} />,
      number: "45+",
      label: "Cities Active"
    }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <motion.div 
          className="stats-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((item, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon-wrapper">
                {item.icon}
              </div>
              <div className="stat-details">
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .stats-section {
          position: relative;
          z-index: 20;
          margin-top: -1.5rem;
          margin-bottom: 5rem;
        }

        .stats-card {
          background-color: #ffffff;
          border-radius: var(--radius-lg);
          padding: 2.25rem 2.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          border: 1px solid #f0f0f0;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.85rem;
        }

        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: var(--color-yellow);
          color: var(--color-dark-green);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(255, 196, 0, 0.3);
        }

        .stat-number {
          display: block;
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-dark-green);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .stat-label {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-secondary);
        }

        @media (max-width: 992px) {
          .stats-card {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem 1rem;
            padding: 1.5rem 1.25rem;
          }
          .stat-icon-wrapper { width: 42px; height: 42px; }
          .stat-number { font-size: 1.75rem; }
          .stat-label { font-size: 0.78rem; }
        }

        @media (max-width: 576px) {
          .stats-section { margin-top: -1rem; margin-bottom: 3rem; }
          .stats-card {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem 0.75rem;
            padding: 1.25rem 1rem;
          }
          .stat-item { gap: 0.5rem; }
          .stat-icon-wrapper { width: 36px; height: 36px; }
          .stat-number { font-size: 1.5rem; }
          .stat-label { font-size: 0.72rem; }
        }
      `}</style>
    </section>
  );
}
