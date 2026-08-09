import React from 'react';
import { ShieldCheck, Lock, PhoneCall, AlertTriangle, UserCheck, Eye, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SafetyPage({ onOpenContact }) {
  const safetyPillars = [
    {
      icon: <UserCheck size={26} />,
      title: "100% Background Checked Captains",
      desc: "Every Nabhva ride captain undergoes thorough criminal background checks, government ID verification, and driving record audits before joining."
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Mandatory Dual Helmets & Sanitization",
      desc: "Clean, ISI-certified helmets are provided for both the captain and passenger on every bike taxi ride for maximum protection."
    },
    {
      icon: <Eye size={26} />,
      title: "Live GPS & Location Sharing",
      desc: "Share your live trip progress and estimated arrival time with loved ones in one tap with real-time GPS tracking."
    },
    {
      icon: <AlertTriangle size={26} />,
      title: "24/7 Instant Emergency SOS Button",
      desc: "In-app SOS trigger directly alerts our 24/7 Nabhva Safety Control Room and nearby emergency response authorities."
    },
    {
      icon: <Lock size={26} />,
      title: "256-Bit Encrypted Data & Masked Calls",
      desc: "Your phone number is masked during calls with captains, and payment details are secured with bank-grade 256-bit SSL encryption."
    },
    {
      icon: <HeartHandshake size={26} />,
      title: "₹5,00,000 Complimentary Ride Insurance",
      desc: "Every ride booked on Nabhva is automatically covered by complimentary accidental medical insurance for complete peace of mind."
    }
  ];

  return (
    <section className="safety-page">
      <div className="container">
        {/* Header */}
        <div className="safety-header">
          <div className="badge-yellow">
            <span>SAFETY & TRUST FIRST</span>
          </div>
          <h1 className="page-title">
            Your safety is built into <span className="highlight-yellow">every trip.</span>
          </h1>
          <p className="page-sub">
            From driver background verification to 24/7 live SOS monitoring, we set the highest safety standards in urban mobility.
          </p>
        </div>

        {/* 6 Safety Pillars */}
        <div className="safety-pillars-grid">
          {safetyPillars.map((item, idx) => (
            <motion.div 
              key={idx}
              className="safety-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="safety-icon-box">{item.icon}</div>
              <h3 className="safety-card-title">{item.title}</h3>
              <p className="safety-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SOS Emergency Helpline Banner */}
        <div className="sos-banner">
          <div className="sos-left">
            <PhoneCall size={36} className="phone-sos-icon" />
            <div>
              <h3>24/7 Emergency Safety Control Room</h3>
              <p>Need urgent assistance during a ride or delivery? Contact our 24/7 safety helpline.</p>
            </div>
          </div>
          <div className="sos-right">
            <a href="tel:18008899000" className="btn-sos">
              <span>CALL 1800-889-9000 (Toll Free)</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .safety-page {
          padding: 4rem 0 6rem 0;
        }

        .safety-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 4rem auto;
        }

        .page-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .page-sub {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
        }

        .safety-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .safety-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
        }

        .safety-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #F0F7F3;
          color: var(--color-dark-green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .safety-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 0.6rem;
        }

        .safety-card-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .sos-banner {
          background: #143B29;
          color: #ffffff;
          border-radius: var(--radius-lg);
          padding: 2.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: 0 20px 40px rgba(20, 59, 41, 0.2);
        }

        .sos-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .phone-sos-icon {
          color: var(--color-yellow);
        }

        .sos-left h3 {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .sos-left p {
          color: #D0E4D9;
          font-size: 0.95rem;
        }

        .btn-sos {
          display: inline-flex;
          align-items: center;
          background: var(--color-yellow);
          color: var(--color-dark-green);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          padding: 0.9rem 1.6rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .safety-pillars-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .sos-banner { flex-direction: column; text-align: center; padding: 2rem 1.5rem; }
          .sos-left { flex-direction: column; }
        }

        @media (max-width: 480px) {
          .safety-page { padding: 1.75rem 0 3rem 0; }
          .page-title { font-size: 1.6rem; }
          .page-sub { font-size: 0.88rem; }
          .safety-pillars-grid { grid-template-columns: 1fr; gap: 0.85rem; margin-bottom: 2.5rem; }
          .safety-card { padding: 1.25rem; }
          .safety-icon-box { width: 44px; height: 44px; margin-bottom: 0.85rem; }
          .safety-card-title { font-size: 0.95rem; }
          .safety-card-desc { font-size: 0.82rem; }
          .sos-banner { padding: 1.25rem 1rem; gap: 1rem; }
          .sos-left h3 { font-size: 1.1rem; }
          .sos-left p { font-size: 0.82rem; }
          .btn-sos { font-size: 0.78rem; padding: 0.65rem 1rem; white-space: normal; text-align: center; }
        }
      `}</style>
    </section>
  );
}
