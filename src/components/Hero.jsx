import React from 'react';
import { ArrowRight, ArrowDown, Play, Smartphone, Bike, Package, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Cloudinary asset named "ride" in the Nabhva folder.
const HERO_IMAGE = 'https://res.cloudinary.com/znbhjevm/image/upload/v1786804984/55aa2d87-bf0d-41e5-9747-5d0028f9890e.png';

export default function Hero({ onOpenContact, onOpenAppDownload }) {
  return (
    <section className="hero-section">
      <div className="yellow-shape-container"><svg className="dashed-curves" viewBox="0 0 500 500" fill="none"><path d="M50 100 Q 200 50 400 200 T 100 450" stroke="white" strokeWidth="3" strokeDasharray="8 8" opacity="0.75" /><path d="M150 20 Q 350 120 280 380" stroke="white" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" /></svg></div>
      <div className="container hero-container">
        <motion.div className="hero-left" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="badge-yellow"><span>SMART MOBILITY & PERSON-TO-PERSON DELIVERY</span></div>
          <h1 className="hero-title">EVERY MOVE. SAFER WITH NABHVA</h1>
          <p className="hero-subtitle">Nabhva is a rider-first mobility platform for everyday city travel, with a simple way to send small parcels directly from one person to another.</p>
          <div className="quick-service-pills">
            <div className="svc-pill green"><Bike size={18} /><span>Bike rides, autos & cabs for everyday travel</span></div>
            <div className="svc-pill yellow"><Package size={18} /><span>Person-to-person parcel pickup & drop</span></div>
          </div>
          <div className="hero-trust-row"><ShieldCheck size={17} /><span>Verified riders • Live trip tracking • Transparent fares</span></div>
          <div className="hero-cta-group">
            <a href="#services-grid" className="btn-primary-dark"><span>Explore Nabhva</span><ArrowRight size={18} /></a>
            <a href="#approach" className="btn-secondary-outline"><span>How it Works</span><div className="play-icon-bg"><Play size={10} fill="#121820" /></div></a>
            <button onClick={onOpenAppDownload} className="btn-app-badge"><Smartphone size={16} /><span>Get Nabhva App</span></button>
            <button onClick={onOpenContact} className="btn-talk-badge mobile-cta"><span className="yellow-dot"></span><span>Let's Talk</span></button>
          </div>
        </motion.div>
        <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="phone-wrapper float-animation" onClick={onOpenAppDownload}><img src={HERO_IMAGE} alt="Nabhva rider mobility service" className="phone-img" /></div>
        </motion.div>
      </div>
      <div className="scroll-down-wrapper"><a href="#stats" className="scroll-down-btn" aria-label="Scroll down"><ArrowDown size={18} /></a></div>
      <style>{`
        .hero-section{position:relative;min-height:84vh;display:flex;flex-direction:column;justify-content:center;padding:2rem 0 5rem;overflow:hidden}.yellow-shape-container{position:absolute;top:-120px;right:0;width:52%;height:130%;background:linear-gradient(135deg,#FFC400 0%,#FFB400 100%);border-bottom-left-radius:260px;z-index:1;pointer-events:none}.dashed-curves{position:absolute;width:100%;height:100%;top:0;left:0}.hero-container{position:relative;z-index:10;display:grid;grid-template-columns:1.15fr .85fr;align-items:center;gap:3rem}.hero-left{max-width:600px}.hero-title{font-size:3.75rem;font-weight:800;color:var(--color-text-primary);margin-top:1.25rem;margin-bottom:1.1rem;line-height:1.08;letter-spacing:-.03em}.highlight-yellow{color:#EBAA00;position:relative;display:inline-block}.hero-subtitle{font-size:1.1rem;color:var(--color-text-secondary);margin-bottom:1.5rem;line-height:1.6;max-width:530px}.quick-service-pills{display:flex;flex-direction:column;gap:.6rem;margin-bottom:1rem}.svc-pill{display:flex;align-items:center;gap:.6rem;font-family:var(--font-heading);font-weight:800;font-size:.88rem;padding:.55rem 1rem;border-radius:var(--radius-pill);width:fit-content;box-shadow:0 4px 12px rgba(0,0,0,.04)}.svc-pill.green{background:#F0F7F3;color:var(--color-dark-green);border:1px solid #D0E4D9}.svc-pill.yellow{background:#FFFDF0;color:#926C00;border:1px solid #FFE499}.hero-trust-row{display:flex;align-items:center;gap:.45rem;color:var(--color-dark-green);font-family:var(--font-heading);font-weight:700;font-size:.78rem;margin-bottom:1.5rem}.hero-cta-group{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap}.btn-app-badge{display:inline-flex;align-items:center;gap:.5rem;background:#121820;color:#fff;font-family:var(--font-heading);font-weight:800;font-size:.8rem;padding:.7rem 1.1rem;border-radius:var(--radius-pill);box-shadow:0 4px 14px rgba(0,0,0,.15);transition:all .25s ease}.btn-app-badge:hover{background:var(--color-dark-green);transform:translateY(-2px)}.btn-talk-badge{display:inline-flex;align-items:center;gap:.5rem;background:#fff;color:var(--color-dark-green);font-family:var(--font-heading);font-weight:800;font-size:.8rem;padding:.7rem 1.1rem;border-radius:var(--radius-pill);border:1.5px solid var(--color-dark-green);box-shadow:0 4px 14px rgba(0,0,0,.08);transition:all .25s ease}.btn-talk-badge:hover{background:var(--color-dark-green);color:#fff;transform:translateY(-2px)}.btn-talk-badge .yellow-dot{width:8px;height:8px;background-color:var(--color-yellow);border-radius:50%}.mobile-cta{display:none}.play-icon-bg{width:20px;height:20px;border-radius:50%;background:#121820;display:flex;align-items:center;justify-content:center;margin-left:2px}.hero-right{display:flex;justify-content:center;position:relative}.phone-wrapper{position:relative;max-width:480px;width:100%;filter:drop-shadow(0 25px 40px rgba(0,0,0,.18));cursor:pointer}.phone-img{width:100%;height:auto;display:block;border-radius:28px}.scroll-down-wrapper{position:relative;z-index:10;display:flex;justify-content:center;margin-top:2rem}.scroll-down-btn{width:48px;height:48px;border-radius:50%;background-color:#fff;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;color:var(--color-text-primary);box-shadow:0 4px 15px rgba(0,0,0,.06);transition:all .25s ease}.scroll-down-btn:hover{transform:translateY(4px);border-color:var(--color-dark-green);color:var(--color-dark-green)}
        @media(max-width:992px){.hero-container{grid-template-columns:1fr;text-align:center;gap:1.5rem}.hero-right{order:-1}.hero-left{max-width:100%;margin:0 auto}.quick-service-pills{align-items:center}.hero-trust-row{justify-content:center}.hero-cta-group{justify-content:center}.yellow-shape-container{width:100%;height:55%;top:0;border-bottom-left-radius:120px}.hero-title{font-size:2.4rem}.phone-wrapper{max-width:400px}}
        @media(max-width:768px){.hero-section{min-height:auto;padding:1.25rem 0 3rem}.hero-title{font-size:1.9rem}.hero-subtitle{font-size:.88rem;margin-bottom:1rem}.quick-service-pills{margin-bottom:.9rem}.svc-pill{font-size:.72rem;padding:.4rem .75rem}.hero-trust-row{font-size:.7rem}.hero-cta-group{flex-direction:column;align-items:stretch;gap:.5rem}.hero-cta-group .btn-primary-dark,.hero-cta-group .btn-secondary-outline,.hero-cta-group .btn-app-badge,.hero-cta-group .btn-talk-badge{width:100%;justify-content:center;font-size:.76rem;padding:.6rem .9rem}.mobile-cta{display:inline-flex}.phone-wrapper{max-width:330px}.scroll-down-wrapper{margin-top:1rem}}
        @media(max-width:480px){.hero-title{font-size:1.6rem}.hero-subtitle{font-size:.82rem}.yellow-shape-container{height:35%;border-top-left-radius:60px}.phone-wrapper{max-width:290px}.scroll-down-btn{width:38px;height:38px}}
      `}</style>
    </section>
  );
}
