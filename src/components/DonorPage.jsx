import React, { useState } from 'react';
import { Heart, Star, Award, Zap } from 'lucide-react';

const tiers = [
  { icon: <Heart size={22} />, label: 'Supporter', amount: '₹500', perks: ['Thank-you email', 'Donor badge', 'Monthly newsletter'] },
  { icon: <Star size={22} />, label: 'Champion', amount: '₹2,000', perks: ['All Supporter perks', 'Name on website', 'Quarterly impact report'], highlight: true },
  { icon: <Award size={22} />, label: 'Patron', amount: '₹5,000', perks: ['All Champion perks', 'Certificate of appreciation', 'Exclusive event invite'] },
  { icon: <Zap size={22} />, label: 'Visionary', amount: 'Custom', perks: ['All Patron perks', 'Co-branding opportunity', 'Dedicated impact story'] },
];

const donors = [
  { name: 'Arjun Mehta', tier: 'Visionary', city: 'Mumbai' },
  { name: 'Priya Sharma', tier: 'Patron', city: 'Hyderabad' },
  { name: 'Ravi Kumar', tier: 'Champion', city: 'Bangalore' },
  { name: 'Sneha Reddy', tier: 'Champion', city: 'Chennai' },
  { name: 'Vikram Nair', tier: 'Supporter', city: 'Pune' },
  { name: 'Ananya Iyer', tier: 'Patron', city: 'Delhi' },
];

export default function DonorPage() {
  const [selected, setSelected] = useState(1);
  const [custom, setCustom] = useState('');
  const [donated, setDonated] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
  };

  return (
    <div className="donor-page">
      {/* Hero */}
      <section className="donor-hero">
        <div className="container">
          <span className="badge-yellow">Make an Impact</span>
          <h1>Support <span className="yellow">Nabhva's</span> Mission</h1>
          <p>Your contribution powers last-mile delivery, community programs, and driver welfare across India.</p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="donor-impact">
        <div className="container donor-impact-grid">
          {[['₹1.2Cr+', 'Raised So Far'], ['3,400+', 'Donors'], ['22', 'Programs Funded'], ['8 States', 'Reached']].map(([num, label]) => (
            <div key={label} className="donor-impact-card">
              <span className="donor-impact-num">{num}</span>
              <span className="donor-impact-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="donor-tiers">
        <div className="container">
          <h2>Choose Your Contribution</h2>
          <div className="donor-tiers-grid">
            {tiers.map((tier, i) => (
              <div
                key={tier.label}
                className={`donor-tier-card ${tier.highlight ? 'highlight' : ''} ${selected === i ? 'selected' : ''}`}
                onClick={() => setSelected(i)}
              >
                <div className="donor-tier-icon">{tier.icon}</div>
                <h3>{tier.label}</h3>
                <div className="donor-tier-amount">{tier.amount}</div>
                <ul className="donor-tier-perks">
                  {tier.perks.map(p => <li key={p}><span className="perk-dot" />{p}</li>)}
                </ul>
                <button className={`donor-tier-btn ${tier.highlight ? 'btn-yellow' : 'btn-secondary-outline'}`}>
                  {selected === i ? '✓ Selected' : 'Select'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Form */}
      <section className="donor-form-section">
        <div className="container donor-form-wrap">
          <div className="donor-form-left">
            <h2>Complete Your Donation</h2>
            <p>100% of your donation goes directly to community programs.</p>
            <div className="donor-trust">
              {['Secure & encrypted', 'Tax deductible (80G)', 'Instant receipt'].map(t => (
                <div key={t} className="donor-trust-item"><span className="perk-dot" />{t}</div>
              ))}
            </div>
          </div>
          <div className="donor-form-right">
            {donated ? (
              <div className="donor-success">
                <Heart size={44} color="var(--color-dark-green)" />
                <h3>Thank you for your generosity!</h3>
                <p>A receipt has been sent to your email.</p>
              </div>
            ) : (
              <form className="donor-form" onSubmit={handleDonate}>
                <input required placeholder="Full Name" />
                <input required type="email" placeholder="Email Address" />
                <input required placeholder="Phone Number" />
                <div className="donor-amount-row">
                  <span className="donor-amount-label">
                    {tiers[selected].amount === 'Custom' ? 'Enter Amount (₹)' : `Amount: ${tiers[selected].amount}`}
                  </span>
                  {tiers[selected].amount === 'Custom' && (
                    <input
                      type="number" min="1" placeholder="₹ Enter amount"
                      value={custom} onChange={e => setCustom(e.target.value)} required
                    />
                  )}
                </div>
                <select required>
                  <option value="">Payment Method</option>
                  <option>UPI</option>
                  <option>Net Banking</option>
                  <option>Credit / Debit Card</option>
                </select>
                <button type="submit" className="btn-primary-dark">Donate Now</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Donor Wall */}
      <section className="donor-wall">
        <div className="container">
          <h2>Our Generous Donors</h2>
          <div className="donor-wall-grid">
            {donors.map(d => (
              <div key={d.name} className="donor-wall-card">
                <div className="donor-avatar">{d.name[0]}</div>
                <div>
                  <p className="donor-name">{d.name}</p>
                  <p className="donor-meta">{d.tier} · {d.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .donor-page { background: var(--color-bg-light); }

        .donor-hero {
          background: var(--color-dark-green); color: #fff;
          padding: 5rem 0 4rem; text-align: center;
        }
        .donor-hero h1 { font-size: clamp(2rem, 5vw, 3.2rem); color: #fff; margin: 1rem 0 0.75rem; }
        .donor-hero p { color: rgba(255,255,255,0.75); font-size: 1.05rem; max-width: 560px; margin: 0 auto; }
        .donor-hero .yellow { color: var(--color-yellow); }

        .donor-impact { padding: 3rem 0; background: #fff; }
        .donor-impact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .donor-impact-card { text-align: center; padding: 1.5rem; border-radius: var(--radius-md); background: var(--color-yellow-light); }
        .donor-impact-num { display: block; font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--color-dark-green); }
        .donor-impact-label { font-size: 0.85rem; color: var(--color-text-secondary); }

        .donor-tiers { padding: 4rem 0; }
        .donor-tiers h2 { font-size: 1.8rem; margin-bottom: 2rem; }
        .donor-tiers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.25rem; }

        .donor-tier-card {
          background: #fff; border-radius: var(--radius-md); padding: 1.75rem;
          border: 2px solid #f0f0f0; cursor: pointer; transition: all 0.2s;
          display: flex; flex-direction: column; gap: 0.6rem;
        }
        .donor-tier-card:hover, .donor-tier-card.selected { border-color: var(--color-dark-green); box-shadow: var(--shadow-md); }
        .donor-tier-card.highlight { border-color: var(--color-yellow); background: var(--color-yellow-light); }

        .donor-tier-icon { width: 44px; height: 44px; background: var(--color-yellow); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-dark-green); }
        .donor-tier-card h3 { font-size: 1.05rem; }
        .donor-tier-amount { font-size: 1.6rem; font-weight: 800; font-family: var(--font-heading); color: var(--color-dark-green); }
        .donor-tier-perks { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; margin: 0.5rem 0; }
        .donor-tier-perks li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.83rem; color: var(--color-text-secondary); }
        .perk-dot { width: 7px; height: 7px; background: var(--color-yellow); border-radius: 50%; flex-shrink: 0; }
        .donor-tier-btn { margin-top: auto; padding: 0.6rem 1.2rem; border-radius: var(--radius-pill); font-size: 0.85rem; font-weight: 700; }

        .donor-form-section { padding: 4rem 0; background: #fff; }
        .donor-form-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .donor-form-left h2 { font-size: 1.8rem; margin-bottom: 0.75rem; }
        .donor-form-left p { color: var(--color-text-secondary); margin-bottom: 1.5rem; }
        .donor-trust { display: flex; flex-direction: column; gap: 0.6rem; }
        .donor-trust-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; }

        .donor-form { display: flex; flex-direction: column; gap: 1rem; }
        .donor-form input, .donor-form select {
          padding: 0.75rem 1rem; border: 1.5px solid #e2e8f0; border-radius: var(--radius-sm);
          font-family: var(--font-body); font-size: 0.9rem; outline: none; transition: border-color 0.2s;
        }
        .donor-form input:focus, .donor-form select:focus { border-color: var(--color-dark-green); }
        .donor-amount-row { display: flex; flex-direction: column; gap: 0.4rem; }
        .donor-amount-label { font-size: 0.88rem; font-weight: 600; color: var(--color-text-secondary); }

        .donor-success { text-align: center; padding: 3rem; }
        .donor-success h3 { margin: 1rem 0 0.5rem; font-size: 1.4rem; color: var(--color-dark-green); }

        .donor-wall { padding: 4rem 0; }
        .donor-wall h2 { font-size: 1.8rem; margin-bottom: 2rem; }
        .donor-wall-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
        .donor-wall-card { background: #fff; border-radius: var(--radius-md); padding: 1.25rem; display: flex; align-items: center; gap: 1rem; box-shadow: var(--shadow-sm); border: 1.5px solid #f0f0f0; }
        .donor-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--color-dark-green); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0; }
        .donor-name { font-weight: 700; font-size: 0.92rem; }
        .donor-meta { font-size: 0.78rem; color: var(--color-text-secondary); margin-top: 2px; }

        @media (max-width: 768px) {
          .donor-impact-grid { grid-template-columns: repeat(2, 1fr); }
          .donor-form-wrap { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  );
}
