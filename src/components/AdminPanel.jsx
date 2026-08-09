import React, { useState } from 'react';
import { Users, Heart, Image, Trash2, CheckCircle, XCircle, Lock } from 'lucide-react';

const ADMIN_PASSWORD = 'nabhva@admin';

const initVolunteers = [
  { id: 1, name: 'Rahul Verma', email: 'rahul@example.com', role: 'Community Driver', status: 'pending' },
  { id: 2, name: 'Meena Pillai', email: 'meena@example.com', role: 'Food Distribution', status: 'approved' },
  { id: 3, name: 'Suresh Babu', email: 'suresh@example.com', role: 'Tech Support', status: 'pending' },
];

const initDonors = [
  { id: 1, name: 'Arjun Mehta', email: 'arjun@example.com', tier: 'Visionary', amount: '₹25,000', date: '2024-11-01' },
  { id: 2, name: 'Priya Sharma', email: 'priya@example.com', tier: 'Patron', amount: '₹5,000', date: '2024-11-15' },
  { id: 3, name: 'Ravi Kumar', email: 'ravi@example.com', tier: 'Champion', amount: '₹2,000', date: '2024-12-01' },
];

const initGallery = [
  { id: 1, title: 'Annual Volunteer Meet 2024', category: 'Events', color: '#d4edda' },
  { id: 2, title: 'Food Drive – Hyderabad', category: 'Community', color: '#fff3cd' },
  { id: 3, title: 'Driver Onboarding Day', category: 'Volunteers', color: '#cce5ff' },
];

const tabs = [
  { id: 'volunteers', label: 'Volunteers', icon: <Users size={16} /> },
  { id: 'donors', label: 'Donors', icon: <Heart size={16} /> },
  { id: 'gallery', label: 'Gallery', icon: <Image size={16} /> },
];

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const [activeTab, setActiveTab] = useState('volunteers');
  const [volunteers, setVolunteers] = useState(initVolunteers);
  const [donors, setDonors] = useState(initDonors);
  const [gallery, setGallery] = useState(initGallery);
  const [newPhoto, setNewPhoto] = useState({ title: '', category: 'Events' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) { setAuthed(true); setPwdError(false); }
    else setPwdError(true);
  };

  const updateVolStatus = (id, status) =>
    setVolunteers(v => v.map(x => x.id === id ? { ...x, status } : x));

  const deleteVolunteer = (id) => setVolunteers(v => v.filter(x => x.id !== id));
  const deleteDonor = (id) => setDonors(d => d.filter(x => x.id !== id));
  const deletePhoto = (id) => setGallery(g => g.filter(x => x.id !== id));

  const addPhoto = (e) => {
    e.preventDefault();
    if (!newPhoto.title) return;
    const colors = ['#d4edda', '#fff3cd', '#cce5ff', '#f8d7da', '#e2d9f3'];
    setGallery(g => [...g, { id: Date.now(), ...newPhoto, color: colors[g.length % colors.length] }]);
    setNewPhoto({ title: '', category: 'Events' });
  };

  if (!authed) {
    return (
      <div className="admin-login-wrap">
        <div className="admin-login-card">
          <div className="admin-login-icon"><Lock size={28} /></div>
          <h2>Admin Access</h2>
          <p>Enter your admin password to continue.</p>
          <form onSubmit={handleLogin} className="admin-login-form">
            <input
              type="password" placeholder="Password" value={pwd}
              onChange={e => { setPwd(e.target.value); setPwdError(false); }}
              className={pwdError ? 'error' : ''}
            />
            {pwdError && <span className="admin-error">Incorrect password</span>}
            <button type="submit" className="btn-primary-dark">Login</button>
          </form>
        </div>
        <style>{adminStyles}</style>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="container">
          <h1>Admin Panel</h1>
          <button className="admin-logout" onClick={() => setAuthed(false)}>Logout</button>
        </div>
      </div>

      <div className="container admin-body">
        {/* Tabs */}
        <div className="admin-tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`admin-tab ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Volunteers Tab */}
        {activeTab === 'volunteers' && (
          <div className="admin-section">
            <div className="admin-section-header">
              <h2>Volunteer Applications</h2>
              <span className="admin-count">{volunteers.length} total</span>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {volunteers.map(v => (
                    <tr key={v.id}>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.role}</td>
                      <td><span className={`status-badge ${v.status}`}>{v.status}</span></td>
                      <td className="admin-actions">
                        {v.status === 'pending' && (
                          <>
                            <button className="action-btn approve" onClick={() => updateVolStatus(v.id, 'approved')} title="Approve">
                              <CheckCircle size={16} />
                            </button>
                            <button className="action-btn reject" onClick={() => updateVolStatus(v.id, 'rejected')} title="Reject">
                              <XCircle size={16} />
                            </button>
                          </>
                        )}
                        <button className="action-btn delete" onClick={() => deleteVolunteer(v.id)} title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Donors Tab */}
        {activeTab === 'donors' && (
          <div className="admin-section">
            <div className="admin-section-header">
              <h2>Donor Records</h2>
              <span className="admin-count">{donors.length} donors</span>
            </div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr><th>Name</th><th>Email</th><th>Tier</th><th>Amount</th><th>Date</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {donors.map(d => (
                    <tr key={d.id}>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td><span className="tier-badge">{d.tier}</span></td>
                      <td><strong>{d.amount}</strong></td>
                      <td>{d.date}</td>
                      <td className="admin-actions">
                        <button className="action-btn delete" onClick={() => deleteDonor(d.id)} title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="admin-section">
            <div className="admin-section-header">
              <h2>Gallery Management</h2>
              <span className="admin-count">{gallery.length} photos</span>
            </div>

            {/* Add Photo Form */}
            <form className="admin-add-form" onSubmit={addPhoto}>
              <input
                placeholder="Photo Title" value={newPhoto.title}
                onChange={e => setNewPhoto({ ...newPhoto, title: e.target.value })}
              />
              <select value={newPhoto.category} onChange={e => setNewPhoto({ ...newPhoto, category: e.target.value })}>
                {['Events', 'Community', 'Volunteers', 'Deliveries'].map(c => <option key={c}>{c}</option>)}
              </select>
              <button type="submit" className="btn-primary-dark">Add Photo</button>
            </form>

            {/* Gallery Grid */}
            <div className="admin-gallery-grid">
              {gallery.map(p => (
                <div key={p.id} className="admin-gallery-card" style={{ background: p.color }}>
                  <button className="admin-gallery-delete" onClick={() => deletePhoto(p.id)}><Trash2 size={14} /></button>
                  <div className="admin-gallery-info">
                    <span className="gallery-cat-tag">{p.category}</span>
                    <p>{p.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{adminStyles}</style>
    </div>
  );
}

const adminStyles = `
  .admin-login-wrap {
    min-height: 80vh; display: flex; align-items: center; justify-content: center;
    background: var(--color-bg-light);
  }
  .admin-login-card {
    background: #fff; border-radius: var(--radius-lg); padding: 2.5rem;
    box-shadow: var(--shadow-md); width: 100%; max-width: 380px; text-align: center;
  }
  .admin-login-icon {
    width: 56px; height: 56px; background: var(--color-yellow); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--color-dark-green); margin: 0 auto 1rem;
  }
  .admin-login-card h2 { margin-bottom: 0.4rem; }
  .admin-login-card p { color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem; }
  .admin-login-form { display: flex; flex-direction: column; gap: 0.75rem; }
  .admin-login-form input {
    padding: 0.75rem 1rem; border: 1.5px solid #e2e8f0; border-radius: var(--radius-sm);
    font-size: 0.9rem; outline: none; transition: border-color 0.2s;
  }
  .admin-login-form input:focus { border-color: var(--color-dark-green); }
  .admin-login-form input.error { border-color: #e53e3e; }
  .admin-error { color: #e53e3e; font-size: 0.82rem; text-align: left; }

  .admin-page { background: var(--color-bg-light); min-height: 100vh; }
  .admin-header { background: var(--color-dark-green); color: #fff; padding: 1.5rem 0; }
  .admin-header .container { display: flex; align-items: center; justify-content: space-between; }
  .admin-header h1 { color: #fff; font-size: 1.5rem; }
  .admin-logout {
    background: rgba(255,255,255,0.15); color: #fff; border-radius: var(--radius-pill);
    padding: 0.45rem 1.1rem; font-size: 0.85rem; font-weight: 700;
    transition: background 0.2s;
  }
  .admin-logout:hover { background: rgba(255,255,255,0.25); }

  .admin-body { padding: 2rem 0 4rem; }

  .admin-tabs { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .admin-tab {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.6rem 1.4rem; border-radius: var(--radius-pill);
    font-family: var(--font-heading); font-weight: 700; font-size: 0.88rem;
    background: #fff; border: 1.5px solid #e2e8f0; color: var(--color-text-secondary);
    transition: all 0.2s;
  }
  .admin-tab:hover, .admin-tab.active {
    background: var(--color-dark-green); color: #fff; border-color: var(--color-dark-green);
  }

  .admin-section { background: #fff; border-radius: var(--radius-lg); padding: 2rem; box-shadow: var(--shadow-sm); }
  .admin-section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
  .admin-section-header h2 { font-size: 1.3rem; }
  .admin-count { background: var(--color-yellow-light); color: var(--color-dark-green); font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: var(--radius-pill); }

  .admin-table-wrap { overflow-x: auto; }
  .admin-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
  .admin-table th { text-align: left; padding: 0.75rem 1rem; background: var(--color-bg-light); font-weight: 700; color: var(--color-text-secondary); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; }
  .admin-table td { padding: 0.85rem 1rem; border-bottom: 1px solid #f0f0f0; }
  .admin-table tr:last-child td { border-bottom: none; }

  .status-badge { padding: 0.25rem 0.7rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; text-transform: capitalize; }
  .status-badge.pending { background: #fff3cd; color: #856404; }
  .status-badge.approved { background: #d4edda; color: #155724; }
  .status-badge.rejected { background: #f8d7da; color: #721c24; }

  .tier-badge { background: var(--color-yellow-light); color: var(--color-dark-green); padding: 0.25rem 0.7rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; }

  .admin-actions { display: flex; gap: 0.4rem; }
  .action-btn { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
  .action-btn.approve { background: #d4edda; color: #155724; }
  .action-btn.approve:hover { background: #c3e6cb; }
  .action-btn.reject { background: #f8d7da; color: #721c24; }
  .action-btn.reject:hover { background: #f5c6cb; }
  .action-btn.delete { background: #f8f9fa; color: #6c757d; }
  .action-btn.delete:hover { background: #f8d7da; color: #721c24; }

  .admin-add-form { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .admin-add-form input, .admin-add-form select {
    padding: 0.65rem 1rem; border: 1.5px solid #e2e8f0; border-radius: var(--radius-sm);
    font-size: 0.88rem; outline: none; flex: 1; min-width: 160px;
  }
  .admin-add-form input:focus, .admin-add-form select:focus { border-color: var(--color-dark-green); }

  .admin-gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
  .admin-gallery-card { position: relative; border-radius: var(--radius-md); height: 140px; overflow: hidden; }
  .admin-gallery-delete {
    position: absolute; top: 8px; right: 8px; background: rgba(255,255,255,0.9);
    border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
    color: #721c24; transition: background 0.2s;
  }
  .admin-gallery-delete:hover { background: #f8d7da; }
  .admin-gallery-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 0.75rem; background: linear-gradient(transparent, rgba(0,0,0,0.45)); color: #fff; }
  .admin-gallery-info p { font-size: 0.8rem; font-weight: 600; margin-top: 0.25rem; }

  .gallery-cat-tag { display: inline-block; background: var(--color-yellow); color: var(--color-dark-green); font-size: 0.65rem; font-weight: 800; padding: 0.15rem 0.5rem; border-radius: var(--radius-pill); text-transform: uppercase; }

  @media (max-width: 600px) {
    .admin-section { padding: 1.25rem; }
    .admin-add-form { flex-direction: column; }
  }
`;
