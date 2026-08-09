import React, { useState } from 'react';
import { Bike, Car, ArrowRightLeft, ShieldCheck, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function RideBookingCard() {
  const { initiateRideBooking, userLocation } = useApp();
  const [pickup, setPickup] = useState(userLocation);
  const [drop, setDrop] = useState('Indiranagar 100ft Road, Bangalore');
  const [selectedVehicle, setSelectedVehicle] = useState('bike'); // 'bike' | 'auto' | 'cab'
  const [couponCode, setCouponCode] = useState('NABHVA50');
  const [discountApplied, setDiscountApplied] = useState(true);

  const vehicleOptions = [
    {
      id: 'bike',
      name: 'Nabhva Bike',
      sub: 'Fastest in traffic',
      eta: '2 mins away',
      basePrice: 49,
      discountedPrice: 35,
      icon: <Bike size={22} />,
      badge: 'FASTEST'
    },
    {
      id: 'auto',
      name: 'Auto Express',
      sub: 'No refusal guarantee',
      eta: '3 mins away',
      basePrice: 85,
      discountedPrice: 65,
      icon: <div className="auto-icon">🛺</div>,
      badge: 'POPULAR'
    },
    {
      id: 'cab',
      name: 'Cab Economy',
      sub: 'Comfortable AC ride',
      eta: '5 mins away',
      basePrice: 150,
      discountedPrice: 120,
      icon: <Car size={22} />,
      badge: 'COMFORT'
    }
  ];

  const currentOption = vehicleOptions.find((v) => v.id === selectedVehicle);

  const handleSwap = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (!pickup || !drop) return;
    initiateRideBooking({
      pickup,
      drop,
      vehicle: selectedVehicle,
      fare: currentOption.discountedPrice,
      eta: currentOption.eta
    });
  };

  return (
    <div className="ride-card-box">
      <form onSubmit={handleBook}>
        {/* Pickup & Drop Inputs */}
        <div className="inputs-wrapper">
          <div className="input-group">
            <div className="dot-indicator green"></div>
            <input 
              type="text" 
              value={pickup} 
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location" 
              required 
            />
          </div>

          <div className="swap-btn-box">
            <button type="button" className="btn-swap" onClick={handleSwap} title="Swap Locations">
              <ArrowRightLeft size={14} />
            </button>
          </div>

          <div className="input-group">
            <div className="dot-indicator yellow"></div>
            <input 
              type="text" 
              value={drop} 
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Enter drop location" 
              required 
            />
          </div>
        </div>

        {/* Vehicle Selectors */}
        <div className="vehicle-grid">
          {vehicleOptions.map((opt) => (
            <div 
              key={opt.id}
              className={`vehicle-card ${selectedVehicle === opt.id ? 'active' : ''}`}
              onClick={() => setSelectedVehicle(opt.id)}
            >
              {opt.badge && <span className="veh-badge">{opt.badge}</span>}
              <div className="veh-icon">{opt.icon}</div>
              <div className="veh-info">
                <span className="veh-title">{opt.name}</span>
                <span className="veh-eta">{opt.eta}</span>
              </div>
              <div className="veh-price-box">
                <span className="veh-price">₹{opt.discountedPrice}</span>
                <span className="veh-base">₹{opt.basePrice}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code & Safety Tag */}
        <div className="ride-meta-bar">
          <div className="safety-tag">
            <ShieldCheck size={14} className="green-icon" />
            <span>Verified Driver & Helmet Included</span>
          </div>

          <div className="coupon-tag">
            <Zap size={14} className="yellow-icon" />
            <span>50% OFF applied (NABHVA50)</span>
          </div>
        </div>

        {/* Action Button */}
        <button type="submit" className="btn-book-ride">
          <span>Book {currentOption.name} – ₹{currentOption.discountedPrice}</span>
        </button>
      </form>

      <style>{`
        .ride-card-box {
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          width: 100%;
        }

        .inputs-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          transition: border-color 0.2s ease;
        }

        .input-group:focus-within {
          border-color: var(--color-dark-green);
          background: #ffffff;
        }

        .input-group input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--color-text-primary);
        }

        .dot-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dot-indicator.green { background: #10B981; }
        .dot-indicator.yellow { background: #FFC400; }

        .swap-btn-box {
          position: absolute;
          right: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
        }

        .btn-swap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-primary);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .vehicle-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .vehicle-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1.5px solid #E2E8F0;
          background: #ffffff;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
        }

        .vehicle-card:hover {
          border-color: var(--color-yellow);
          background: #FFFDF5;
        }

        .vehicle-card.active {
          border-color: var(--color-dark-green);
          background: #F0F7F3;
          box-shadow: 0 4px 12px rgba(20, 59, 41, 0.08);
        }

        .veh-badge {
          position: absolute;
          top: -8px;
          right: 12px;
          background: var(--color-yellow);
          color: var(--color-dark-green);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.62rem;
          padding: 0.1rem 0.5rem;
          border-radius: var(--radius-pill);
        }

        .veh-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark-green);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .auto-icon {
          font-size: 1.3rem;
        }

        .veh-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-left: 0.85rem;
        }

        .veh-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--color-text-primary);
        }

        .veh-eta {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
        }

        .veh-price-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .veh-price {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--color-dark-green);
        }

        .veh-base {
          font-size: 0.75rem;
          text-decoration: line-through;
          color: #94A3B8;
        }

        .ride-meta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .safety-tag, .coupon-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-weight: 600;
        }

        .green-icon { color: #10B981; }
        .yellow-icon { color: #EAB308; }

        .btn-book-ride {
          width: 100%;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          padding: 0.95rem;
          border-radius: var(--radius-pill);
          box-shadow: 0 6px 18px rgba(20, 59, 41, 0.25);
          transition: all 0.25s ease;
        }

        .btn-book-ride:hover {
          background: var(--color-dark-green-hover);
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .ride-card-box {
            padding: 1.25rem;
          }
          .vehicle-card {
            padding: 0.7rem 0.85rem;
          }
          .veh-icon {
            width: 34px;
            height: 34px;
          }
          .veh-title {
            font-size: 0.88rem;
          }
          .veh-price {
            font-size: 1rem;
          }
          .ride-meta-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .btn-book-ride {
            font-size: 0.9rem;
            padding: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
