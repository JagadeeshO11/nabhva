import React, { useState } from 'react';
import { Package, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ParcelBookingCard() {
  const { userLocation } = useApp();
  const [pickupAddr, setPickupAddr] = useState(userLocation);
  const [dropAddr, setDropAddr] = useState('HSR Layout Sector 1, Bangalore');
  const [packageType, setPackageType] = useState('Documents & Keys');
  const [weightCategory, setWeightCategory] = useState('Under 1 kg');
  const [scheduled, setScheduled] = useState(false);

  const calculateParcelPrice = () => {
    let base = 45;
    if (weightCategory === '1 - 5 kg') base += 30;
    if (weightCategory === '5 - 12 kg') base += 75;
    return base;
  };

  const handleParcelBook = (e) => {
    e.preventDefault();
    alert(`Parcel pickup scheduled! Driver will arrive at ${pickupAddr} in 10 mins. Est cost: ₹${calculateParcelPrice()}`);
  };

  return (
    <div className="parcel-card-box">
      <form onSubmit={handleParcelBook}>
        <div className="parcel-header">
          <Package size={24} className="parcel-icon-head" />
          <div>
            <h3>Send Anything Instant</h3>
            <p>Pick up from your doorstep & deliver in 30 mins</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="parcel-inputs">
          <div className="input-group">
            <span className="dot green"></span>
            <input 
              type="text" 
              value={pickupAddr}
              onChange={(e) => setPickupAddr(e.target.value)}
              placeholder="Pickup Address (Sender)" 
              required
            />
          </div>

          <div className="input-group">
            <span className="dot red"></span>
            <input 
              type="text" 
              value={dropAddr}
              onChange={(e) => setDropAddr(e.target.value)}
              placeholder="Delivery Address (Receiver)" 
              required
            />
          </div>
        </div>

        {/* Package Specs */}
        <div className="spec-row">
          <div className="spec-group">
            <label>Item Type</label>
            <select value={packageType} onChange={(e) => setPackageType(e.target.value)}>
              <option value="Documents & Keys">Documents & Keys</option>
              <option value="Food & Home Tiffin">Food & Home Tiffin</option>
              <option value="Electronics & Gadgets">Electronics & Gadgets</option>
              <option value="Clothes & Shoes">Clothes & Shoes</option>
            </select>
          </div>

          <div className="spec-group">
            <label>Weight</label>
            <select value={weightCategory} onChange={(e) => setWeightCategory(e.target.value)}>
              <option value="Under 1 kg">Under 1 kg (₹45)</option>
              <option value="1 - 5 kg">1 - 5 kg (₹75)</option>
              <option value="5 - 12 kg">5 - 12 kg (₹120)</option>
            </select>
          </div>
        </div>

        <div className="parcel-meta">
          <span>⚡ Guaranteed 30 Min Delivery</span>
          <span>🔒 Tamper-Proof Sealed Bag</span>
        </div>

        <button type="submit" className="btn-book-parcel">
          <span>Book Pickup – ₹{calculateParcelPrice()}</span>
          <ArrowRight size={18} />
        </button>
      </form>

      <style>{`
        .parcel-card-box {
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          width: 100%;
        }

        .parcel-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .parcel-icon-head {
          color: var(--color-dark-green);
        }

        .parcel-header h3 {
          font-size: 1.1rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .parcel-header p {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
        }

        .parcel-inputs {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dot.green { background: #10B981; }
        .dot.red { background: #EF4444; }

        .spec-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .spec-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .spec-group label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.78rem;
          color: var(--color-text-primary);
        }

        .spec-group select {
          padding: 0.65rem 0.85rem;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.88rem;
          background: #ffffff;
        }

        .parcel-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-dark-green);
          margin-bottom: 1.25rem;
        }

        .btn-book-parcel {
          width: 100%;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          padding: 0.95rem;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          box-shadow: 0 6px 18px rgba(20, 59, 41, 0.25);
          transition: all 0.25s ease;
        }

        .btn-book-parcel:hover {
          background: var(--color-dark-green-hover);
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .parcel-card-box {
            padding: 1.25rem;
          }
          .spec-row {
            grid-template-columns: 1fr;
          }
          .parcel-meta {
            flex-direction: column;
            gap: 0.4rem;
          }
          .btn-book-parcel {
            font-size: 0.9rem;
            padding: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
