import React from 'react';
import { User, ShieldCheck, Clock, Bike } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatsBar() {
  const stats = [
    { icon: <User size={22} />, number: 'Rider First', label: 'Built around everyday travel' },
    { icon: <ShieldCheck size={22} />, number: 'Verified', label: 'Captains & riders' },
    { icon: <Clock size={22} />, number: 'Live', label: 'Trip & parcel tracking' },
    { icon: <Bike size={22} />, number: 'One App', label: 'Rides + parcel sending' }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <motion.div className="stats-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {stats.map((item, idx) => (
            <div key={idx} className="stat-item"><div className="stat-icon-wrapper">{item.icon}</div><div className="stat-details"><span className="stat-number">{item.number}</span><span className="stat-label">{item.label}</span></div></div>
          ))}
        </motion.div>
      </div>
      <style>{`.stats-section{position:relative;z-index:20;margin-top:-1.5rem;margin-bottom:5rem}.stats-card{background:#fff;border-radius:var(--radius-lg);padding:2.25rem 2.5rem;box-shadow:0 15px 35px rgba(0,0,0,.04),0 2px 8px rgba(0,0,0,.02);display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;border:1px solid #f0f0f0}.stat-item{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.85rem}.stat-icon-wrapper{width:52px;height:52px;border-radius:50%;background:var(--color-yellow);color:var(--color-dark-green);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(255,196,0,.3)}.stat-number{display:block;font-family:var(--font-heading);font-size:1.45rem;font-weight:800;color:var(--color-dark-green);line-height:1.1;letter-spacing:-.02em}.stat-label{display:block;font-family:var(--font-heading);font-size:.8rem;font-weight:700;color:var(--color-text-secondary)}@media(max-width:992px){.stats-card{grid-template-columns:repeat(2,1fr);gap:1.25rem 1rem;padding:1.5rem 1.25rem}.stat-icon-wrapper{width:42px;height:42px}.stat-number{font-size:1.2rem}.stat-label{font-size:.72rem}}@media(max-width:576px){.stats-section{margin-top:-1rem;margin-bottom:3rem}.stats-card{grid-template-columns:repeat(2,1fr);gap:1rem .75rem;padding:1.25rem 1rem}.stat-item{gap:.5rem}.stat-icon-wrapper{width:36px;height:36px}.stat-number{font-size:1rem}.stat-label{font-size:.65rem}}`}</style>
    </section>
  );
}
