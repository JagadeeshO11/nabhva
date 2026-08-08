import React, { useEffect, useState } from 'react';
import { Navigation, Bike, Compass, MapPin } from 'lucide-react';

export default function InteractiveMap({ pickupText = "Koramangala 4th Block", dropText = "Indiranagar 100ft Road" }) {
  // Simulated moving vehicles on the map
  const [vehicles, setVehicles] = useState([
    { id: 1, type: 'bike', x: 28, y: 35, angle: 45, speedX: 0.15, speedY: 0.1 },
    { id: 2, type: 'auto', x: 55, y: 60, angle: 120, speedX: -0.1, speedY: 0.12 },
    { id: 3, type: 'scooter', x: 72, y: 25, angle: 210, speedX: -0.14, speedY: -0.08 },
    { id: 4, type: 'bike', x: 40, y: 75, angle: 300, speedX: 0.12, speedY: -0.15 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((v) => {
          let newX = v.x + v.speedX;
          let newY = v.y + v.speedY;
          if (newX > 85 || newX < 15) v.speedX *= -1;
          if (newY > 85 || newY < 15) v.speedY *= -1;
          return { ...v, x: newX, y: newY };
        })
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="map-wrapper">
      {/* Map Background Grid */}
      <svg className="map-svg" viewBox="0 0 400 400" preserveAspectRatio="none">
        {/* Land and Water Elements */}
        <rect width="400" height="400" fill="#EAEFE9" />
        <path d="M 0 100 Q 150 180 400 120 L 400 160 Q 150 220 0 140 Z" fill="#C5DEE7" opacity="0.7" />
        <rect x="250" y="240" width="90" height="70" rx="15" fill="#D2E6CE" opacity="0.8" />
        <rect x="40" y="280" width="110" height="80" rx="20" fill="#D2E6CE" opacity="0.8" />

        {/* Roads Grid */}
        <path d="M 0 160 H 400" stroke="#FFFFFF" strokeWidth="14" />
        <path d="M 0 160 H 400" stroke="#E2E8EE" strokeWidth="10" />

        <path d="M 0 280 H 400" stroke="#FFFFFF" strokeWidth="14" />
        <path d="M 0 280 H 400" stroke="#E2E8EE" strokeWidth="10" />

        <path d="M 120 0 V 400" stroke="#FFFFFF" strokeWidth="14" />
        <path d="M 120 0 V 400" stroke="#E2E8EE" strokeWidth="10" />

        <path d="M 280 0 V 400" stroke="#FFFFFF" strokeWidth="14" />
        <path d="M 280 0 V 400" stroke="#E2E8EE" strokeWidth="10" />

        <path d="M 30 30 L 370 370" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M 30 30 L 370 370" stroke="#F1E3D3" strokeWidth="8" />

        {/* Simulated Route Line */}
        <path
          d="M 120 280 C 180 280, 220 160, 280 160"
          stroke="#143B29"
          strokeWidth="5"
          strokeDasharray="8 6"
          fill="none"
        />

        {/* Pickup Pin */}
        <g transform="translate(120, 280)">
          <circle r="14" fill="#FFC400" opacity="0.4" className="pulse-ring" />
          <circle r="8" fill="#143B29" />
          <circle r="3" fill="#FFFFFF" />
        </g>

        {/* Drop Pin */}
        <g transform="translate(280, 160)">
          <circle r="14" fill="#FF1E00" opacity="0.3" className="pulse-ring-red" />
          <circle r="8" fill="#FFC400" />
          <circle r="3" fill="#143B29" />
        </g>
      </svg>

      {/* Dynamic Moving Vehicles */}
      {vehicles.map((v) => (
        <div
          key={v.id}
          className="vehicle-marker"
          style={{ top: `${v.y}%`, left: `${v.x}%` }}
        >
          <div className={`vehicle-badge ${v.type}`}>
            <Bike size={12} />
          </div>
        </div>
      ))}

      {/* Floating Location Overlay Tooltips */}
      <div className="map-tooltip pickup-tooltip" style={{ top: '64%', left: '16%' }}>
        <div className="tooltip-dot green"></div>
        <span>{pickupText}</span>
      </div>

      <div className="map-tooltip drop-tooltip" style={{ top: '34%', left: '55%' }}>
        <div className="tooltip-dot yellow"></div>
        <span>{dropText}</span>
      </div>

      {/* Map Control Overlay */}
      <div className="map-controls">
        <button className="map-btn" title="Recenter Location">
          <Navigation size={16} />
        </button>
        <span className="live-badge">● LIVE GPS ACTIVE</span>
      </div>

      <style>{`
        .map-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 420px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          border: 2px solid #ffffff;
        }

        .map-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .pulse-ring {
          animation: pulseMapRing 2s infinite;
        }

        .pulse-ring-red {
          animation: pulseMapRingRed 2s infinite;
        }

        @keyframes pulseMapRing {
          0% { r: 6px; opacity: 0.8; }
          100% { r: 22px; opacity: 0; }
        }

        @keyframes pulseMapRingRed {
          0% { r: 6px; opacity: 0.8; }
          100% { r: 22px; opacity: 0; }
        }

        .vehicle-marker {
          position: absolute;
          transform: translate(-50%, -50%);
          transition: top 0.1s linear, left 0.1s linear;
          z-index: 10;
        }

        .vehicle-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FFC400;
          color: #143B29;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          border: 1.5px solid #ffffff;
        }

        .vehicle-badge.auto {
          background: #143B29;
          color: #FFC400;
        }

        .vehicle-badge.scooter {
          background: #ffffff;
          color: #143B29;
        }

        .map-tooltip {
          position: absolute;
          background: rgba(20, 59, 41, 0.92);
          backdrop-filter: blur(4px);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.72rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          white-space: nowrap;
          z-index: 12;
        }

        .tooltip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .tooltip-dot.green { background: #4ADE80; }
        .tooltip-dot.yellow { background: #FFC400; }

        .map-controls {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          z-index: 15;
        }

        .map-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ffffff;
          color: var(--color-dark-green);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .live-badge {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          color: #143B29;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.68rem;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-pill);
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
}
