import React from 'react';
import { ArrowRight, ArrowDown, Play, Smartphone, Bike, Utensils, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenContact, onOpenAppDownload }) {
  return (
    <section className="hero-section">
      {/* Background Yellow Organic Shape */}
      <div className="yellow-shape-container">
        <svg className="dashed-curves" viewBox="0 0 500 500" fill="none">
          <path 
            d="M50 100 Q 200 50 400 200 T 100 450" 
            stroke="white" 
            strokeWidth="3" 
            strokeDasharray="8 8" 
            opacity="0.75"
          />
          <path 
            d="M150 20 Q 350 120 280 380" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeDasharray="6 6" 
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container hero-container">
        {/* Left Text Content */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-yellow">
            <span>FAST MOBILITY & DELIVERIES</span>
          </div>

          <h1 className="hero-title">
            Rides, Food & Delivery that move <span className="highlight-yellow">millions.</span>
          </h1>

          <p className="hero-subtitle">
            Fast, reliable bike taxis, auto rides, 10-minute food delivery, and instant package pickup across 45+ cities in India.
          </p>

          {/* Quick Service Feature Badges */}
          <div className="quick-service-pills">
            <div className="svc-pill green">
              <Bike size={18} />
              <span>Rapido-style Bike Taxis (2 Min Pickup @ ₹35)</span>
            </div>

            <div className="svc-pill yellow">
              <Utensils size={18} />
              <span>10-Min Instant Food & Grocery</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <a href="#services-grid" className="btn-primary-dark">
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </a>

            <a href="#approach" className="btn-secondary-outline">
              <span>How it Works</span>
              <div className="play-icon-bg">
                <Play size={10} fill="#121820" />
              </div>
            </a>

            <button onClick={onOpenAppDownload} className="btn-app-badge">
              <Smartphone size={16} />
              <span>Get Nabhva App</span>
            </button>
          </div>
        </motion.div>

        {/* Right Phone Mockup & Visual */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="phone-wrapper float-animation" onClick={onOpenAppDownload}>
            <img 
              src="/assets/hero-phone.png" 
              alt="Nabhva Mobile App 3D Showcase" 
              className="phone-img"
            />
          </div>
        </motion.div>
      </div>

      {/* Centered Scroll Down Arrow */}
      <div className="scroll-down-wrapper">
        <a href="#stats" className="scroll-down-btn" aria-label="Scroll down">
          <ArrowDown size={18} />
        </a>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 84vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 0 5rem 0;
          overflow: hidden;
        }

        .yellow-shape-container {
          position: absolute;
          top: -120px;
          right: 0;
          width: 52%;
          height: 110%;
          background: linear-gradient(135deg, #FFC400 0%, #FFB400 100%);
          border-bottom-left-radius: 260px;
          z-index: 1;
          pointer-events: none;
        }

        .dashed-curves {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3rem;
        }

        .hero-left {
          max-width: 580px;
        }

        .hero-title {
          font-size: 3.75rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-top: 1.25rem;
          margin-bottom: 1.1rem;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .highlight-yellow {
          color: #EBAA00;
          position: relative;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .quick-service-pills {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .svc-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.55rem 1rem;
          border-radius: var(--radius-pill);
          width: fit-content;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .svc-pill.green {
          background: #F0F7F3;
          color: var(--color-dark-green);
          border: 1px solid #D0E4D9;
        }

        .svc-pill.yellow {
          background: #FFFDF0;
          color: #926C00;
          border: 1px solid #FFE499;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-app-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #121820;
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.85rem 1.4rem;
          border-radius: var(--radius-pill);
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: all 0.25s ease;
        }

        .btn-app-badge:hover {
          background: var(--color-dark-green);
          transform: translateY(-2px);
        }

        .play-icon-bg {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #121820;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 2px;
        }

        .hero-right {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .phone-wrapper {
          position: relative;
          max-width: 380px;
          width: 100%;
          filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.18));
          cursor: pointer;
        }

        .phone-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 40px;
        }

        .scroll-down-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .scroll-down-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-primary);
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: all 0.25s ease;
        }

        .scroll-down-btn:hover {
          transform: translateY(4px);
          border-color: var(--color-dark-green);
          color: var(--color-dark-green);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 1.5rem;
          }

          .hero-right { order: -1; }

          .hero-left {
            max-width: 100%;
            margin: 0 auto;
          }

          .quick-service-pills {
            align-items: center;
          }

          .hero-cta-group {
            justify-content: center;
          }

          .yellow-shape-container {
            width: 100%;
            height: 55%;
            top: 0;
            bottom: auto;
            border-bottom-left-radius: 120px;
            border-top-left-radius: 0;
          }

          .hero-title {
            font-size: 2.4rem;
          }

          .phone-wrapper {
            max-width: 220px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 1.25rem 0 3rem 0;
          }

          .hero-title {
            font-size: 1.9rem;
          }

          .hero-subtitle {
            font-size: 0.88rem;
            margin-bottom: 1rem;
          }

          .quick-service-pills {
            margin-bottom: 1.25rem;
          }

          .svc-pill {
            font-size: 0.72rem;
            padding: 0.4rem 0.75rem;
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            gap: 0.6rem;
          }

          .hero-cta-group .btn-primary-dark,
          .hero-cta-group .btn-secondary-outline,
          .hero-cta-group .btn-app-badge {
            width: 100%;
            justify-content: center;
            font-size: 0.82rem;
            padding: 0.7rem 1rem;
          }

          .phone-wrapper {
            max-width: 180px;
          }

          .scroll-down-wrapper {
            margin-top: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .hero-subtitle {
            font-size: 0.82rem;
          }

          .yellow-shape-container {
            height: 35%;
            border-top-left-radius: 60px;
          }

          .phone-wrapper {
            max-width: 155px;
          }

          .scroll-down-btn {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  );
}
