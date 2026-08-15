import React from 'react';
import { Bike, Car, Package, ArrowRight, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const BIKE_IMAGE = 'https://res.cloudinary.com/znbhjevm/image/upload/v1786804646/8d88e57f-a1a4-4c55-88ec-b0977b5ae38e.png';
const DAILY_IMAGE = 'https://res.cloudinary.com/znbhjevm/image/upload/v1786804669/c21b8cb9-9472-4ebd-b298-a8408aef9352.png';
const AUTO_CAB_IMAGE = 'https://res.cloudinary.com/znbhjevm/image/upload/v1786804984/55aa2d87-bf0d-41e5-9747-5d0028f9890e.png';

export default function FeaturedProjects({ onSelectProject }) {
  const services = [
    {
      id: 'bike-taxi', icon: <Bike size={32} />, tag: 'Rider First', title: 'Nabhva Bike Rides',
      description: 'Quick, affordable bike rides built for beating city traffic and getting you where you need to go.',
      bgStyle: 'bg-yellow-card', image: BIKE_IMAGE, perks: ['Fast pickups', 'Transparent fare', 'Helmet & safety'],
      fullDetails: { client: 'Nabhva Mobility', year: '2026', services: ['Bike Rides', 'Daily Commute', 'Last-Mile Rides'], overview: 'Nabhva Bike Rides puts riders first with convenient city travel, verified captains, live trip tracking and transparent fares.', deliverables: ['Verified Captains', 'Live GPS Trip Sharing', 'Transparent Pricing', 'Safety Support'] }
    },
    {
      id: 'auto-cab', icon: <Car size={32} />, tag: 'Everyday Travel', title: 'Nabhva Auto & Cab',
      description: 'Book an auto or cab for comfortable everyday travel with clear fares and trusted drivers.',
      bgStyle: 'bg-gray-card', image: AUTO_CAB_IMAGE, perks: ['Upfront fares', 'Auto & Cab', 'Live tracking'],
      fullDetails: { client: 'Nabhva Rides', year: '2026', services: ['Auto Rides', 'Cab Rides', 'City Travel'], overview: 'Nabhva Auto & Cab gives riders dependable options for short trips, daily commutes and comfortable city travel.', deliverables: ['Upfront Pricing', 'Verified Drivers', 'Live Trip Tracking', 'Safety Support'] }
    },
    {
      id: 'parcel', icon: <Package size={32} />, tag: 'Person to Person', title: 'Nabhva Parcel',
      description: 'Send a document, keys, small package or personal item from one person directly to another.',
      bgStyle: 'bg-green-card', image: DAILY_IMAGE, perks: ['Doorstep pickup', 'Live tracking', 'Sender to receiver'],
      fullDetails: { client: 'Nabhva Parcel', year: '2026', services: ['Person-to-Person Parcel', 'Document Sending', 'Small Package Pickup'], overview: 'Nabhva Parcel lets one person send a small item directly to another person. A rider picks it up from the sender and takes it to the receiver, with live tracking throughout the trip.', deliverables: ['Sender & Receiver Details', 'Doorstep Pickup', 'Live Parcel Tracking', 'Secure Handover'] }
    },
    {
      id: 'daily-commute', icon: <MapPin size={32} />, tag: 'Move Smarter', title: 'Daily Commute',
      description: 'One platform for getting around town, from quick bike rides to comfortable auto and cab journeys.',
      bgStyle: 'bg-beige-card', image: DAILY_IMAGE, perks: ['One app', 'Multiple ride types', 'Easy booking'],
      fullDetails: { client: 'Nabhva Mobility', year: '2026', services: ['Daily Commute', 'Bike Rides', 'Auto & Cab'], overview: 'Nabhva brings practical urban mobility into one rider-focused experience, making everyday travel simple and predictable.', deliverables: ['Simple Booking', 'Multiple Vehicle Options', 'Trip Tracking', 'Rider Support'] }
    }
  ];

  return (
    <section id="services-grid" className="services-showcase-section">
      <div className="container">
        <div className="section-header">
          <div className="header-left">
            <div className="badge-yellow"><span>NABHVA MOBILITY</span></div>
            <h2 className="section-title">Built around riders,<br/>with parcels on the move.</h2>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-secondary-outline btn-sm"><span>Get the App</span><ArrowRight size={16} /></button>
        </div>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <motion.div key={svc.id} className="svc-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <div className={`svc-image-box ${svc.bgStyle}`} onClick={() => onSelectProject(svc)}>
                <div className="svc-icon-circle">{svc.icon}</div>
                <img src={svc.image} alt={svc.title} className="svc-bg-img" />
              </div>
              <div className="svc-info">
                <span className="svc-tag">{svc.tag}</span>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.description}</p>
                <div className="svc-perks-row">{svc.perks.map((perk, i) => <span key={i} className="perk-chip"><Zap size={11} />{perk}</span>)}</div>
                <button className="btn-learn-more" onClick={() => onSelectProject(svc)}><span>Learn more</span><ArrowRight size={15} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .services-showcase-section { padding: 3rem 0 6rem 0; }
        .section-header { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:3rem; }
        .section-title { font-size:2.5rem; font-weight:800; color:var(--color-text-primary); margin-top:.75rem; line-height:1.15; }
        .btn-sm { padding:.65rem 1.3rem; font-size:.88rem; }
        .services-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; }
        .svc-card { display:flex; flex-direction:column; border-radius:var(--radius-lg); overflow:hidden; background:transparent; }
        .svc-image-box { width:100%; height:240px; border-radius:var(--radius-md); overflow:hidden; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; position:relative; transition:transform .35s cubic-bezier(.4,0,.2,1); }
        .svc-card:hover .svc-image-box { transform:translateY(-6px); }
        .svc-icon-circle { position:absolute; top:16px; left:16px; z-index:5; width:52px; height:52px; border-radius:50%; background:rgba(255,255,255,.85); backdrop-filter:blur(8px); display:flex; align-items:center; justify-content:center; color:var(--color-dark-green); box-shadow:0 4px 14px rgba(0,0,0,.1); }
        .svc-bg-img { width:100%; height:100%; object-fit:cover; transition:transform .4s ease; opacity:.95; }
        .svc-card:hover .svc-bg-img { transform:scale(1.04); }
        .bg-yellow-card { background-color:#FFC400; } .bg-beige-card { background-color:#F3ECE1; } .bg-gray-card { background-color:#E2E6EC; } .bg-green-card { background-color:#143B29; }
        .svc-info { padding:1.25rem .25rem 0; display:flex; flex-direction:column; align-items:flex-start; gap:.35rem; width:100%; }
        .svc-tag { display:inline-block; font-family:var(--font-heading); font-weight:700; font-size:.72rem; color:var(--color-dark-green); background:#F0F4F1; padding:.2rem .6rem; border-radius:var(--radius-pill); margin-bottom:.2rem; }
        .svc-title { font-size:1.15rem; font-weight:800; color:var(--color-text-primary); }
        .svc-desc { font-size:.88rem; color:var(--color-text-secondary); line-height:1.5; margin-bottom:.4rem; }
        .svc-perks-row { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:.6rem; width:100%; }
        .perk-chip { display:inline-flex; align-items:center; gap:.25rem; font-family:var(--font-heading); font-weight:700; font-size:.7rem; background:#F0F7F3; color:var(--color-dark-green); padding:.15rem .55rem; border-radius:var(--radius-pill); }
        .btn-learn-more { display:inline-flex; align-items:center; gap:.35rem; align-self:flex-end; margin-top:.4rem; padding:.4rem .85rem; border-radius:var(--radius-pill); background:#F0F7F3; border:1px solid #D0E4D9; font-family:var(--font-heading); font-weight:700; font-size:.82rem; color:var(--color-dark-green); transition:all .25s ease; cursor:pointer; }
        .btn-learn-more:hover { background:var(--color-dark-green); color:#fff; border-color:var(--color-dark-green); gap:.55rem; }
        @media (max-width:1100px) { .services-grid { grid-template-columns:repeat(2,1fr); gap:1.75rem 1.25rem; } }
        @media (max-width:650px) { .services-grid { grid-template-columns:repeat(2,1fr); gap:1.25rem .85rem; } .section-header { flex-direction:column; align-items:flex-start; gap:.75rem; } .svc-image-box { height:180px; } }
        @media (max-width:480px) { .services-showcase-section { padding:1.5rem 0 3rem; } .section-title { font-size:1.6rem; } .services-grid { grid-template-columns:repeat(2,1fr); gap:1rem .65rem; } .svc-image-box { height:140px; } .svc-icon-circle { width:36px; height:36px; top:10px; left:10px; } .svc-icon-circle svg { width:18px; height:18px; } .svc-info { padding:.75rem .1rem 0; gap:.2rem; } .svc-title { font-size:.88rem; } .svc-desc { font-size:.75rem; } .svc-perks-row { gap:.25rem; } .perk-chip { font-size:.62rem; padding:.1rem .4rem; } .btn-learn-more { font-size:.72rem; padding:.3rem .6rem; } }
      `}</style>
    </section>
  );
}
