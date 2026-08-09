import React from 'react';
import { Bike, Utensils, Car, Package, ArrowRight, ShieldCheck, Clock, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedProjects({ onSelectProject }) {
  const services = [
    {
      id: 'bike-taxi',
      icon: <Bike size={32} />,
      tag: 'Fastest in Traffic',
      title: 'Nabhva Bike Taxi',
      description: 'Beat city traffic with affordable, safe bike rides. Get picked up in under 2 minutes, every time.',
      bgStyle: 'bg-yellow-card',
      image: '/assets/project-superapp.png',
      perks: ['Starts @ ₹35', '2-min pickup', 'ISI Helmet included'],
      fullDetails: {
        client: 'Nabhva Mobility',
        year: '2026',
        services: ['Bike Taxi', 'Metro Connector', 'Last-Mile Rides'],
        overview: 'Nabhva Bike Taxi is the fastest and most affordable way to beat city traffic. Our verified captains, real-time GPS tracking, and ISI-certified helmet guarantee a safe and reliable commute at ₹35 for 3 km.',
        deliverables: ['2-Minute Average Pickup', 'ISI Helmet for Passengers', 'Live GPS Trip Sharing', 'Flat Transparent Pricing']
      }
    },
    {
      id: 'food-delivery',
      icon: <Utensils size={32} />,
      tag: 'Food & Grocery',
      title: 'Nabhva Food Express',
      description: 'Order from 500+ top restaurants or get fresh groceries delivered to your door in as fast as 10 minutes.',
      bgStyle: 'bg-beige-card',
      image: '/assets/project-mealmate.png',
      perks: ['10-min grocery', '500+ Restaurants', 'Zero surge fee'],
      fullDetails: {
        client: 'Nabhva Food',
        year: '2026',
        services: ['Food Delivery', 'Grocery Express', '10-Min Dark Stores'],
        overview: 'Nabhva Food Express connects you to the best local restaurants and hyper-local grocery dark stores for lightning-fast doorstep delivery with zero surge pricing and live order tracking.',
        deliverables: ['10-Minute Grocery Delivery', '500+ Restaurant Partners', 'Live Delivery Tracking', 'No Surge Pricing']
      }
    },
    {
      id: 'auto-cab',
      icon: <Car size={32} />,
      tag: 'Comfortable Rides',
      title: 'Nabhva Auto & Cab',
      description: 'No-refusal auto hailing and AC cab rides with upfront pricing, rated captains, and route transparency.',
      bgStyle: 'bg-gray-card',
      image: '/assets/hero-phone.png',
      perks: ['No refusal guarantee', 'Upfront pricing', 'AC Cab options'],
      fullDetails: {
        client: 'Nabhva Rides',
        year: '2026',
        services: ['Auto Hailing', 'Cab Economy', 'Intercity Rides'],
        overview: 'Nabhva Auto offers a no-refusal guarantee with transparent upfront fares. Our metered autos and economy AC cabs are driven by background-verified captains for a safe and comfortable journey.',
        deliverables: ['No Refusal Guarantee', 'Upfront Fixed Fares', 'Background Verified Captains', 'Intercity Cab Options']
      }
    },
    {
      id: 'parcel',
      icon: <Package size={32} />,
      tag: 'Courier & Parcel',
      title: 'Nabhva Parcel Courier',
      description: 'Send documents, tiffins, or packages instantly with guaranteed doorstep pickup and delivery.',
      bgStyle: 'bg-green-card',
      image: '/assets/project-leafly.png',
      perks: ['30-min delivery', 'Sealed & tracked', 'Starts @ ₹45'],
      fullDetails: {
        client: 'Nabhva Logistics',
        year: '2026',
        services: ['Parcel Pickup', 'Document Courier', 'Tiffin Delivery'],
        overview: 'Nabhva Parcel Courier provides instant door-to-door package pickup and delivery within 30 minutes. Send documents, home-cooked tiffins, or small packages with real-time tracking and tamper-proof sealed bags.',
        deliverables: ['30-Minute Guaranteed Delivery', 'Tamper-Proof Sealed Bags', 'Live Package Tracking', 'Doorstep Pickup']
      }
    }
  ];

  return (
    <section id="services-grid" className="services-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-left">
            <div className="badge-yellow">
              <span>NABHVA CORE SERVICES</span>
            </div>
            <h2 className="section-title">Everything you need,<br/>delivered fast.</h2>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-secondary-outline btn-sm">
            <span>Get the App</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              className="svc-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Top Image / Color Panel */}
              <div
                className={`svc-image-box ${svc.bgStyle}`}
                onClick={() => onSelectProject(svc)}
              >
                <div className="svc-icon-circle">{svc.icon}</div>
                <img src={svc.image} alt={svc.title} className="svc-bg-img" />
              </div>

              {/* Card Info */}
              <div className="svc-info">
                <span className="svc-tag">{svc.tag}</span>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.description}</p>

                {/* Perks Row */}
                <div className="svc-perks-row">
                  {svc.perks.map((perk, i) => (
                    <span key={i} className="perk-chip">
                      <Zap size={11} />
                      {perk}
                    </span>
                  ))}
                </div>

                <button
                  className="btn-learn-more"
                  onClick={() => onSelectProject(svc)}
                >
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-showcase-section {
          padding: 3rem 0 6rem 0;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-top: 0.75rem;
          line-height: 1.15;
        }

        .btn-sm {
          padding: 0.65rem 1.3rem;
          font-size: 0.88rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .svc-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: transparent;
        }

        .svc-image-box {
          width: 100%;
          height: 240px;
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .svc-card:hover .svc-image-box {
          transform: translateY(-6px);
        }

        .svc-icon-circle {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 5;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark-green);
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
        }

        .svc-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          opacity: 0.85;
        }

        .svc-card:hover .svc-bg-img {
          transform: scale(1.04);
        }

        .bg-yellow-card { background-color: #FFC400; }
        .bg-beige-card  { background-color: #F3ECE1; }
        .bg-gray-card   { background-color: #E2E6EC; }
        .bg-green-card  { background-color: #143B29; }

        .svc-info {
          padding: 1.25rem 0.25rem 0 0.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.35rem;
          width: 100%;
        }

        .svc-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.72rem;
          color: var(--color-dark-green);
          background-color: #F0F4F1;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          margin-bottom: 0.2rem;
        }

        .svc-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-text-primary);
        }

        .svc-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 0.4rem;
        }

        .svc-perks-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.6rem;
          width: 100%;
        }

        .perk-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.7rem;
          background: #F0F7F3;
          color: var(--color-dark-green);
          padding: 0.15rem 0.55rem;
          border-radius: var(--radius-pill);
        }

        .btn-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          align-self: flex-end;
          margin-top: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-pill);
          background-color: #F0F7F3;
          border: 1px solid #D0E4D9;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--color-dark-green);
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .btn-learn-more:hover {
          background-color: var(--color-dark-green);
          color: #ffffff;
          border-color: var(--color-dark-green);
          gap: 0.55rem;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.5rem;
          }
        }

        @media (max-width: 650px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .services-showcase-section {
            padding: 2rem 0 4rem 0;
          }
          .section-title {
            font-size: 1.9rem;
          }
          .svc-image-box {
            height: 200px;
          }
          .svc-icon-circle {
            width: 44px;
            height: 44px;
          }
          .svc-icon-circle svg {
            width: 24px;
            height: 24px;
          }
          .svc-title {
            font-size: 1.05rem;
          }
          .svc-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
