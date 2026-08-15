import React from 'react';
import { Smartphone, UserCheck, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurApproach() {
  const steps = [
    { number: '01', icon: <Smartphone size={28} />, title: 'Choose Your Ride or Parcel', description: 'Open Nabhva and choose a bike, auto, cab, or person-to-person parcel pickup.' },
    { number: '02', icon: <UserCheck size={28} />, title: 'Get Matched Quickly', description: 'We connect you with a nearby verified rider or captain and show the expected arrival time.' },
    { number: '03', icon: <MapPin size={28} />, title: 'Track the Trip Live', description: 'Follow your ride or parcel movement in real time and share trip details when needed.' },
    { number: '04', icon: <CheckCircle size={28} />, title: 'Arrive or Hand Over Safely', description: 'Reach your destination or complete the sender-to-receiver handover with support from Nabhva.' }
  ];

  return (
    <section id="approach" className="approach-section">
      <div className="container">
        <div className="approach-header">
          <div className="badge-yellow"><span>HOW NABHVA WORKS</span></div>
          <h2 className="approach-title">Simple mobility,<br/>from booking to arrival.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <motion.div key={idx} className="step-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.12 }}>
              <div className="step-number-row"><span className="step-num">{step.number}</span><div className="step-icon-circle">{step.icon}</div></div>
              <h3 className="step-title">{step.title}</h3><p className="step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .approach-section{padding:2rem 0 6rem}.approach-header{margin-bottom:3.5rem}.approach-title{font-size:2.5rem;font-weight:800;color:var(--color-text-primary);margin-top:.75rem;line-height:1.15;letter-spacing:-.02em}.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;position:relative}.step-card{padding:2rem 1.75rem;border-radius:var(--radius-lg);background:#FCFCFC;border:1.5px solid #F0F0F0;transition:box-shadow .3s ease,transform .3s ease;position:relative}.step-card:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(0,0,0,.06)}.step-number-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}.step-num{font-family:var(--font-heading);font-size:3.5rem;font-weight:800;color:var(--color-yellow);line-height:1;letter-spacing:-.03em}.step-icon-circle{width:54px;height:54px;border-radius:50%;background-color:var(--color-dark-green);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(20,59,41,.25)}.step-title{font-size:1.15rem;font-weight:800;color:var(--color-text-primary);margin-bottom:.65rem}.step-desc{font-size:.9rem;color:var(--color-text-secondary);line-height:1.6}@media(max-width:1100px){.steps-grid{grid-template-columns:repeat(2,1fr);gap:1.5rem}}@media(max-width:600px){.steps-grid{grid-template-columns:1fr}.approach-title{font-size:2rem}}@media(max-width:480px){.approach-section{padding:2rem 0 4rem}.approach-title{font-size:1.75rem}.step-card{padding:1.5rem}.step-num{font-size:2.8rem}.step-icon-circle{width:46px;height:46px}.step-icon-circle svg{width:22px;height:22px}.step-title{font-size:1.05rem}.step-desc{font-size:.85rem}}
      `}</style>
    </section>
  );
}
