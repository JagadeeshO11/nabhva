import React, { useState } from 'react';
import { Package, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ParcelBookingCard() {
  const { userLocation } = useApp();
  const [pickupAddr, setPickupAddr] = useState(userLocation);
  const [dropAddr, setDropAddr] = useState('HSR Layout Sector 1, Bangalore');
  const [packageType, setPackageType] = useState('Documents & Keys');
  const [weightCategory, setWeightCategory] = useState('Under 1 kg');

  const calculateParcelPrice = () => {
    let base = 45;
    if (weightCategory === '1 - 5 kg') base += 30;
    if (weightCategory === '5 - 12 kg') base += 75;
    return base;
  };

  const handleParcelBook = (e) => {
    e.preventDefault();
    alert(`Parcel pickup requested! A rider will collect the item from ${pickupAddr} for delivery to ${dropAddr}. Est cost: ₹${calculateParcelPrice()}`);
  };

  return (
    <div className="parcel-card-box">
      <form onSubmit={handleParcelBook}>
        <div className="parcel-header">
          <Package size={24} className="parcel-icon-head" />
          <div><h3>Send a Parcel to Someone</h3><p>Person-to-person pickup and drop by a Nabhva rider</p></div>
        </div>
        <div className="parcel-inputs">
          <div className="input-group"><span className="dot green"></span><input type="text" value={pickupAddr} onChange={(e) => setPickupAddr(e.target.value)} placeholder="Sender pickup address" required /></div>
          <div className="input-group"><span className="dot red"></span><input type="text" value={dropAddr} onChange={(e) => setDropAddr(e.target.value)} placeholder="Receiver delivery address" required /></div>
        </div>
        <div className="spec-row">
          <div className="spec-group"><label>What are you sending?</label><select value={packageType} onChange={(e) => setPackageType(e.target.value)}><option>Documents & Keys</option><option>Small Personal Item</option><option>Electronics & Gadgets</option><option>Clothes & Shoes</option></select></div>
          <div className="spec-group"><label>Weight</label><select value={weightCategory} onChange={(e) => setWeightCategory(e.target.value)}><option>Under 1 kg</option><option>1 - 5 kg</option><option>5 - 12 kg</option></select></div>
        </div>
        <div className="parcel-meta"><span><Clock size={14} /> Rider pickup & live tracking</span><span><ShieldCheck size={14} /> Secure handover</span></div>
        <button type="submit" className="btn-book-parcel"><span>Request Parcel Pickup – ₹{calculateParcelPrice()}</span><ArrowRight size={18} /></button>
      </form>
      <style>{`.parcel-card-box{background:#fff;border-radius:var(--radius-lg);padding:1.75rem;box-shadow:0 20px 40px rgba(0,0,0,.08);border:1px solid #f0f0f0;width:100%}.parcel-header{display:flex;align-items:center;gap:.85rem;margin-bottom:1.25rem}.parcel-icon-head{color:var(--color-dark-green)}.parcel-header h3{font-size:1.1rem;font-weight:800;line-height:1.2}.parcel-header p{font-size:.82rem;color:var(--color-text-secondary)}.parcel-inputs{display:flex;flex-direction:column;gap:.65rem;margin-bottom:1.25rem}.input-group{display:flex;align-items:center;gap:.75rem;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:var(--radius-sm);padding:.75rem 1rem}.input-group:focus-within{border-color:var(--color-dark-green);background:#fff}.input-group input{border:none;outline:none;background:transparent;width:100%;font-family:var(--font-heading);font-weight:700;font-size:.92rem;color:var(--color-text-primary)}.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.dot.green{background:#10B981}.dot.red{background:#EF4444}.spec-row{display:grid;grid-template-columns:1fr 1fr;gap:.85rem;margin-bottom:1.25rem}.spec-group{display:flex;flex-direction:column;gap:.35rem}.spec-group label{font-family:var(--font-heading);font-weight:700;font-size:.78rem;color:var(--color-text-primary)}.spec-group select{padding:.65rem .85rem;border:1.5px solid #E2E8F0;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:.88rem;background:#fff}.parcel-meta{display:flex;justify-content:space-between;font-size:.78rem;font-weight:600;color:var(--color-dark-green);margin-bottom:1.25rem;gap:.75rem}.parcel-meta span{display:flex;align-items:center;gap:.35rem}.btn-book-parcel{width:100%;background:var(--color-dark-green);color:#fff;font-family:var(--font-heading);font-weight:800;font-size:1rem;padding:.95rem;border-radius:var(--radius-pill);display:flex;align-items:center;justify-content:center;gap:.6rem;box-shadow:0 6px 18px rgba(20,59,41,.25);transition:all .25s ease}.btn-book-parcel:hover{background:var(--color-dark-green-hover);transform:translateY(-2px)}@media(max-width:480px){.parcel-card-box{padding:1.25rem}.spec-row{grid-template-columns:1fr}.parcel-meta{flex-direction:column;gap:.4rem}.btn-book-parcel{font-size:.9rem;padding:.85rem}}`}</style>
    </div>
  );
}
