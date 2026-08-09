import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Events', 'Community', 'Volunteers', 'Deliveries'];

const photos = [
  { id: 1, category: 'Events', title: 'Annual Volunteer Meet 2024', color: '#d4edda' },
  { id: 2, category: 'Community', title: 'Food Drive – Hyderabad', color: '#fff3cd' },
  { id: 3, category: 'Volunteers', title: 'Driver Onboarding Day', color: '#cce5ff' },
  { id: 4, category: 'Deliveries', title: 'Last-Mile Delivery Run', color: '#f8d7da' },
  { id: 5, category: 'Events', title: 'Nabhva City Launch', color: '#e2d9f3' },
  { id: 6, category: 'Community', title: 'School Supply Distribution', color: '#d1ecf1' },
  { id: 7, category: 'Volunteers', title: 'Training Workshop', color: '#ffeeba' },
  { id: 8, category: 'Deliveries', title: 'Medical Supply Run', color: '#d6d8db' },
  { id: 9, category: 'Events', title: 'Fundraiser Gala Night', color: '#f5c6cb' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="container">
          <span className="badge-yellow">Our Story in Pictures</span>
          <h1>Gallery</h1>
          <p>Moments that define our mission — from the streets to the community.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="gallery-body">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map(photo => (
              <div
                key={photo.id}
                className="gallery-card"
                style={{ background: photo.color }}
                onClick={() => setLightbox(photo)}
              >
                <div className="gallery-overlay">
                  <ZoomIn size={24} />
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-cat-tag">{photo.category}</span>
                  <p>{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={20} /></button>
            <div className="lightbox-img" style={{ background: lightbox.color }} />
            <div className="lightbox-caption">
              <span className="gallery-cat-tag">{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-page { background: var(--color-bg-light); }

        .gallery-hero {
          background: var(--color-dark-green);
          color: #fff;
          padding: 5rem 0 4rem;
          text-align: center;
        }
        .gallery-hero h1 { font-size: clamp(2rem, 5vw, 3.2rem); color: #fff; margin: 1rem 0 0.75rem; }
        .gallery-hero p { color: rgba(255,255,255,0.75); font-size: 1.05rem; }

        .gallery-body { padding: 3rem 0 5rem; }

        .gallery-filters { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.5rem; }
        .gallery-filter-btn {
          padding: 0.5rem 1.2rem; border-radius: var(--radius-pill);
          font-family: var(--font-heading); font-weight: 700; font-size: 0.85rem;
          background: #fff; border: 1.5px solid #e2e8f0; color: var(--color-text-secondary);
          transition: all 0.2s;
        }
        .gallery-filter-btn:hover, .gallery-filter-btn.active {
          background: var(--color-dark-green); color: #fff; border-color: var(--color-dark-green);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .gallery-card {
          position: relative; border-radius: var(--radius-md); overflow: hidden;
          height: 220px; cursor: pointer; transition: transform 0.25s, box-shadow 0.25s;
        }
        .gallery-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .gallery-card:hover .gallery-overlay { opacity: 1; }

        .gallery-overlay {
          position: absolute; inset: 0; background: rgba(20,59,41,0.45);
          display: flex; align-items: center; justify-content: center;
          color: #fff; opacity: 0; transition: opacity 0.25s;
        }

        .gallery-card-info {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 1rem; background: linear-gradient(transparent, rgba(0,0,0,0.5));
          color: #fff;
        }
        .gallery-card-info p { font-size: 0.88rem; font-weight: 600; margin-top: 0.3rem; }

        .gallery-cat-tag {
          display: inline-block; background: var(--color-yellow); color: var(--color-dark-green);
          font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill); text-transform: uppercase; letter-spacing: 0.05em;
        }

        /* Lightbox */
        .lightbox {
          position: fixed; inset: 0; background: rgba(0,0,0,0.75);
          z-index: 200; display: flex; align-items: center; justify-content: center;
          padding: 1rem;
        }
        .lightbox-inner {
          background: #fff; border-radius: var(--radius-lg); overflow: hidden;
          max-width: 600px; width: 100%; position: relative;
        }
        .lightbox-close {
          position: absolute; top: 12px; right: 12px; background: #fff;
          border-radius: 50%; width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm); z-index: 1;
        }
        .lightbox-img { height: 320px; width: 100%; }
        .lightbox-caption { padding: 1.25rem 1.5rem; }
        .lightbox-caption h3 { margin-top: 0.5rem; font-size: 1.2rem; }

        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-card { height: 160px; }
        }
      `}</style>
    </div>
  );
}
