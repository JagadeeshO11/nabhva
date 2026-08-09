import React from 'react';
import { X, CheckCircle2, Phone, Clock, MapPin, Bike } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrderTrackingModal() {
  const { isOrderTrackingOpen, setIsOrderTrackingOpen, activeFoodOrder } = useApp();

  if (!isOrderTrackingOpen || !activeFoodOrder) return null;

  const trackingSteps = [
    { label: 'Order Received', desc: 'Order placed successfully', done: true },
    { label: 'Kitchen Preparing', desc: 'Paradise Biryani is preparing your dish', done: true },
    { label: 'Partner Assigned', desc: 'Suresh V. picked up your order', active: true },
    { label: 'Out for Delivery', desc: 'Arriving in ~18 minutes', done: false },
    { label: 'Delivered', desc: 'Handed over at doorstep', done: false }
  ];

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={() => setIsOrderTrackingOpen(false)}>
        <motion.div 
          className="tracking-modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <button className="close-btn" onClick={() => setIsOrderTrackingOpen(false)}>
            <X size={18} />
          </button>

          {/* Header */}
          <div className="tracking-header">
            <div className="badge-yellow">
              <span>LIVE TRACKING</span>
            </div>
            <h2>Order #{activeFoodOrder.id}</h2>
            <p className="est-eta">Estimated Delivery: <strong>18 Mins</strong></p>
          </div>

          {/* Partner Card */}
          <div className="partner-card">
            <div className="partner-avatar">🛵</div>
            <div className="partner-info">
              <h4>{activeFoodOrder.deliveryPartner.name}</h4>
              <span className="partner-rating">{activeFoodOrder.deliveryPartner.rating}</span>
              <span className="partner-veh">{activeFoodOrder.deliveryPartner.vehicle}</span>
            </div>
            <a href={`tel:${activeFoodOrder.deliveryPartner.phone}`} className="btn-partner-call">
              <Phone size={16} />
              <span>Call</span>
            </a>
          </div>

          {/* Progress Timeline */}
          <div className="timeline-box">
            {trackingSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`timeline-step ${step.done ? 'done' : ''} ${step.active ? 'active' : ''}`}
              >
                <div className="timeline-node">
                  {step.done ? (
                    <CheckCircle2 size={18} className="node-icon" />
                  ) : step.active ? (
                    <div className="active-pulse-node"></div>
                  ) : (
                    <div className="idle-node"></div>
                  )}
                </div>

                <div className="timeline-info">
                  <span className="step-label">{step.label}</span>
                  <span className="step-desc">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Address summary */}
          <div className="delivery-dest">
            <MapPin size={16} className="pin-icon" />
            <span>Delivering to {activeFoodOrder.deliveryAddress}</span>
          </div>

          <style>{`
            .tracking-modal-card {
              background: #ffffff;
              border-radius: var(--radius-lg);
              max-width: 520px;
              width: 100%;
              padding: 2.25rem;
              position: relative;
              box-shadow: 0 25px 60px rgba(0,0,0,0.2);
            }

            .tracking-header h2 {
              font-size: 1.6rem;
              font-weight: 800;
              margin-top: 0.6rem;
            }

            .est-eta {
              font-size: 0.9rem;
              color: var(--color-dark-green);
              margin-bottom: 1.25rem;
            }

            .partner-card {
              display: flex;
              align-items: center;
              gap: 1rem;
              padding: 1rem;
              background: #F0F7F3;
              border-radius: var(--radius-md);
              margin-bottom: 1.5rem;
            }

            .partner-avatar {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
            }

            .partner-info {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }

            .partner-info h4 {
              font-size: 1rem;
              line-height: 1.2;
            }

            .partner-rating {
              font-size: 0.78rem;
              font-weight: 700;
              color: var(--color-dark-green);
            }

            .partner-veh {
              font-size: 0.72rem;
              color: var(--color-text-secondary);
            }

            .btn-partner-call {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              background: var(--color-dark-green);
              color: #ffffff;
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 0.82rem;
              padding: 0.5rem 1rem;
              border-radius: var(--radius-pill);
            }

            .timeline-box {
              display: flex;
              flex-direction: column;
              gap: 1.25rem;
              margin-bottom: 1.5rem;
              padding-left: 0.5rem;
            }

            .timeline-step {
              display: flex;
              align-items: flex-start;
              gap: 1rem;
              position: relative;
            }

            .timeline-step:not(:last-child)::after {
              content: '';
              position: absolute;
              left: 8px;
              top: 22px;
              bottom: -16px;
              width: 2px;
              background: #E2E8F0;
            }

            .timeline-step.done:not(:last-child)::after {
              background: #10B981;
            }

            .timeline-node {
              width: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .node-icon { color: #10B981; }

            .active-pulse-node {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: var(--color-yellow);
              box-shadow: 0 0 0 6px rgba(255, 196, 0, 0.3);
            }

            .idle-node {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #CBD5E1;
            }

            .timeline-info {
              display: flex;
              flex-direction: column;
            }

            .step-label {
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 0.9rem;
              color: var(--color-text-primary);
            }

            .step-desc {
              font-size: 0.8rem;
              color: var(--color-text-secondary);
            }

            .delivery-dest {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 0.85rem;
              font-weight: 700;
              color: var(--color-dark-green);
              background: #FAFAFA;
              padding: 0.75rem;
              border-radius: var(--radius-sm);
            }

            @media (max-width: 480px) {
              .tracking-modal-card {
                padding: 1.5rem;
              }
              .partner-card {
                flex-wrap: wrap;
              }
              .btn-partner-call {
                margin-left: auto;
              }
              .tracking-header h2 {
                font-size: 1.3rem;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
