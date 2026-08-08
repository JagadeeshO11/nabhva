import React, { useEffect, useState } from 'react';
import { X, Phone, MessageSquare, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function DriverMatchModal() {
  const { isDriverModalOpen, setIsDriverModalOpen, activeRideBooking, setActiveRideBooking } = useApp();
  const [matchingStep, setMatchingStep] = useState('searching'); // 'searching' | 'matched'

  useEffect(() => {
    if (isDriverModalOpen) {
      setMatchingStep('searching');
      const timer = setTimeout(() => {
        setMatchingStep('matched');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isDriverModalOpen]);

  if (!isDriverModalOpen || !activeRideBooking) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={() => setIsDriverModalOpen(false)}>
        <motion.div 
          className="driver-modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <button className="close-btn" onClick={() => setIsDriverModalOpen(false)}>
            <X size={18} />
          </button>

          {matchingStep === 'searching' ? (
            <div className="searching-container">
              <div className="radar-spinner">
                <div className="radar-wave"></div>
                <div className="radar-icon">🛵</div>
              </div>

              <h3>Finding Nearby Captain...</h3>
              <p>Connecting with 14 available Nabhva drivers near {activeRideBooking.pickup}</p>

              <div className="search-meta">
                <span>ESTIMATED FARE: <strong>₹{activeRideBooking.fare}</strong></span>
              </div>
            </div>
          ) : (
            <div className="matched-container">
              <div className="matched-badge">
                <CheckCircle2 size={16} />
                <span>CAPTAIN ASSIGNED</span>
              </div>

              {/* OTP Pill */}
              <div className="otp-banner">
                <span>Share OTP with driver:</span>
                <strong className="otp-code">{activeRideBooking.driver.otp}</strong>
              </div>

              {/* Driver Card */}
              <div className="driver-info-box">
                <div className="driver-avatar">👨‍✈️</div>
                <div className="driver-meta">
                  <h4>{activeRideBooking.driver.name}</h4>
                  <span className="driver-rating">{activeRideBooking.driver.rating}</span>
                  <span className="veh-model">{activeRideBooking.driver.vehicleModel}</span>
                </div>
                <div className="plate-box">
                  <span>{activeRideBooking.driver.vehicleNo}</span>
                </div>
              </div>

              {/* Trip Details */}
              <div className="trip-route-info">
                <div className="route-step">
                  <span className="dot green"></span>
                  <div>
                    <span className="label">PICKUP (3 MINS AWAY)</span>
                    <span className="val">{activeRideBooking.pickup}</span>
                  </div>
                </div>

                <div className="route-step">
                  <span className="dot yellow"></span>
                  <div>
                    <span className="label">DROP LOCATION</span>
                    <span className="val">{activeRideBooking.drop}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="driver-actions">
                <a href={`tel:${activeRideBooking.driver.phone}`} className="btn-call">
                  <Phone size={16} />
                  <span>Call Captain</span>
                </a>

                <button 
                  className="btn-cancel"
                  onClick={() => setIsDriverModalOpen(false)}
                >
                  Cancel Ride
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <style>{`
        .driver-modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 480px;
          width: 100%;
          padding: 2.25rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .searching-container {
          text-align: center;
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .radar-spinner {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radar-icon {
          font-size: 2.5rem;
          z-index: 5;
        }

        .radar-wave {
          position: absolute;
          inset: 0;
          border: 3px solid var(--color-yellow);
          border-radius: 50%;
          animation: radarPing 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        @keyframes radarPing {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .searching-container h3 {
          font-size: 1.4rem;
          font-weight: 800;
        }

        .searching-container p {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        .search-meta {
          background: #F0F7F3;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          color: var(--color-dark-green);
        }

        .matched-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .matched-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #10B981;
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.72rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          align-self: flex-start;
        }

        .otp-banner {
          background: var(--color-yellow);
          color: var(--color-dark-green);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .otp-code {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .driver-info-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          background: #F8FAFC;
        }

        .driver-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .driver-meta {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .driver-meta h4 {
          font-size: 1.1rem;
          margin-bottom: 0.15rem;
        }

        .driver-rating {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-dark-green);
        }

        .veh-model {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
        }

        .plate-box {
          background: #1E293B;
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
        }

        .trip-route-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: #FAFAFA;
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .route-step {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .route-step .label {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--color-text-secondary);
        }

        .route-step .val {
          display: block;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .driver-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .btn-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.85rem;
          border-radius: var(--radius-pill);
        }

        .btn-cancel {
          background: #F1F5F9;
          color: #64748B;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.88rem;
          padding: 0.85rem;
          border-radius: var(--radius-pill);
        }
      `}</style>
    </AnimatePresence>
  );
}
