import React, { useState } from 'react';
import { Heart, Users, Clock, MapPin } from 'lucide-react';

const opportunities = [
  { id: 1, title: 'Community Driver', location: 'Hyderabad', hours: '10 hrs/week', desc: 'Help transport essentials to underserved communities.' },
  { id: 2, title: 'Food Distribution', location: 'Bangalore', hours: '6 hrs/week', desc: 'Assist in packing and distributing meals to families.' },
  { id: 3, title: 'Tech Support', location: 'Remote', hours: '5 hrs/week', desc: 'Help onboard new drivers and users onto the platform.' },
  { id: 4, title: 'Event Coordinator', location: 'Chennai', hours: '8 hrs/week', desc: 'Organize local awareness and fundraising events.' },
];

export default function VolunteerPage() {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="vol-page">
      {/* Hero */}
      <section className="vol-hero">
        <div className="container">
          <span className="badge-yellow">Join the Mission</span>
          <h1>Volunteer with <span className="green">Nabhva</span></h1>
          <p>Be part of a movement that connects communities, empowers drivers, and delivers impact.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="vol-stats">
        <div className="container vol-stats-grid">
          {[['1,200+', 'Active Volunteers'], ['48', 'Cities Covered'], ['30K+', 'Hours Contributed'], ['15K+', 'Lives Impacted']].map(([num, label]) => (
            <div key={label} className="vol-stat-card">
              <span className="vol-stat-num">{num}</span>
              <span className="vol-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section className="vol-opps">
        <div className="container">
          <h2>Open Opportunities</h2>
          <div className="vol-opps-grid">
            {opportunities.map(op => (
              <div key={op.id} className="vol-opp-card">
                <div className="vol-opp-icon"><Heart size={20} /></div>
                <h3>{op.title}</h3>
                <p>{op.desc}</p>
                <div className="vol-opp-meta">
                  <span><MapPin size={13} /> {op.location}</span>
                  <span><Clock size={13} /> {op.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="vol-form-section">
        <div className="container vol-form-wrap">
          <div className="vol-form-left">
            <h2>Ready to Make a Difference?</h2>
            <p>Fill out the form and our team will reach out within 48 hours.</p>
            <div className="vol-perks">
              {['Flexible hours', 'Certificate of contribution', 'Community recognition', 'Training provided'].map(p => (
                <div key={p} className="vol-perk"><span className="perk-dot" />{p}</div>
              ))}
            </div>
          </div>
          <div className="vol-form-right">
            {submitted ? (
              <div className="vol-success">
                <Users size={40} />
                <h3>Thank you for signing up!</h3>
                <p>We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="vol-form">
                <input required placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <select required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                  <option value="">Select a Role</option>
                  {opportunities.map(o => <option key={o.id} value={o.title}>{o.title}</option>)}
                </select>
                <textarea placeholder="Why do you want to volunteer?" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button type="submit" className="btn-primary-dark">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .vol-page { background: var(--color-bg-light); }

        .vol-hero {
          background: var(--color-dark-green);
          color: #fff;
          padding: 5rem 0 4rem;
          text-align: center;
        }
        .vol-hero h1 { font-size: clamp(2rem, 5vw, 3.2rem); color: #fff; margin: 1rem 0 0.75rem; }
        .vol-hero p { color: rgba(255,255,255,0.75); font-size: 1.1rem; max-width: 560px; margin: 0 auto; }
        .vol-hero .green { color: var(--color-yellow); }

        .vol-stats { padding: 3rem 0; background: #fff; }
        .vol-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .vol-stat-card { text-align: center; padding: 1.5rem; border-radius: var(--radius-md); background: var(--color-yellow-light); }
        .vol-stat-num { display: block; font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--color-dark-green); }
        .vol-stat-label { font-size: 0.85rem; color: var(--color-text-secondary); }

        .vol-opps { padding: 4rem 0; }
        .vol-opps h2 { font-size: 1.8rem; margin-bottom: 2rem; }
        .vol-opps-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
        .vol-opp-card { background: #fff; border-radius: var(--radius-md); padding: 1.75rem; box-shadow: var(--shadow-sm); border: 1.5px solid #f0f0f0; transition: transform 0.2s, box-shadow 0.2s; }
        .vol-opp-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .vol-opp-icon { width: 40px; height: 40px; background: var(--color-yellow); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-dark-green); margin-bottom: 1rem; }
        .vol-opp-card h3 { font-size: 1.05rem; margin-bottom: 0.5rem; }
        .vol-opp-card p { font-size: 0.88rem; color: var(--color-text-secondary); margin-bottom: 1rem; }
        .vol-opp-meta { display: flex; gap: 1rem; font-size: 0.8rem; color: var(--color-text-light); }
        .vol-opp-meta span { display: flex; align-items: center; gap: 4px; }

        .vol-form-section { padding: 4rem 0; background: #fff; }
        .vol-form-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .vol-form-left h2 { font-size: 1.8rem; margin-bottom: 0.75rem; }
        .vol-form-left p { color: var(--color-text-secondary); margin-bottom: 1.5rem; }
        .vol-perks { display: flex; flex-direction: column; gap: 0.6rem; }
        .vol-perk { display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; }
        .perk-dot { width: 8px; height: 8px; background: var(--color-yellow); border-radius: 50%; flex-shrink: 0; }

        .vol-form { display: flex; flex-direction: column; gap: 1rem; }
        .vol-form input, .vol-form select, .vol-form textarea {
          padding: 0.75rem 1rem; border: 1.5px solid #e2e8f0; border-radius: var(--radius-sm);
          font-family: var(--font-body); font-size: 0.9rem; outline: none; transition: border-color 0.2s;
          background: #fff;
        }
        .vol-form input:focus, .vol-form select:focus, .vol-form textarea:focus { border-color: var(--color-dark-green); }

        .vol-success { text-align: center; padding: 3rem; color: var(--color-dark-green); }
        .vol-success h3 { margin: 1rem 0 0.5rem; font-size: 1.4rem; }

        @media (max-width: 768px) {
          .vol-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .vol-form-wrap { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 480px) {
          .vol-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
