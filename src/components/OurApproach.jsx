import React from 'react';
import { Smartphone, UserCheck, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurApproach() {
  const steps = [
    {
      number: "01",
      icon: <Smartphone size={28} />,
      title: "Book in Seconds",
      description: "Open the Nabhva app, pick your service — bike taxi, food, auto, or parcel — and confirm with a single tap."
    },
    {
      number: "02",
      icon: <UserCheck size={28} />,
      title: "Live Captain Match",
      description: "We instantly match you with the nearest verified captain. Track their ETA live on the map from the moment they accept."
    },
    {
      number: "03",
      icon: <MapPin size={28} />,
      title: "Real-Time GPS Tracking",
      description: "Follow every move with pin-point GPS tracking. Share your live trip link with family for added peace of mind."
    },
    {
      number: "04",
      icon: <CheckCircle size={28} />,
      title: "Safe Doorstep Arrival",
      description: "Arrive at your destination or receive your delivery safely. Rate your captain and earn Nabhva loyalty rewards."
    }
  ];

  return (
    <section id="approach" className="approach-section">
      <div className="container">
        {/* Header */}
        <div className="approach-header">
          <div className="badge-yellow">
            <span>HOW NABHVA WORKS</span>
          </div>
          <h2 className="approach-title">From tap to doorstep<br/>in four simple steps.</h2>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              {/* Step Number */}
              <div className="step-number-row">
                <span className="step-num">{step.number}</span>
                <div className="step-icon-circle">{step.icon}</div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .approach-section {
          padding: 2rem 0 6rem 0;
        }

        .approach-header {
          margin-bottom: 3.5rem;
        }

        .approach-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-top: 0.75rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .step-card {
          padding: 2rem 1.75rem;
          border-radius: var(--radius-lg);
          background: #FCFCFC;
          border: 1.5px solid #F0F0F0;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          position: relative;
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
        }

        .step-number-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .step-num {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--color-yellow);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .step-icon-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: var(--color-dark-green);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(20, 59, 41, 0.25);
        }

        .step-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 0.65rem;
        }

        .step-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .approach-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
