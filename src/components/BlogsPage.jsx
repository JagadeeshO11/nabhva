import React, { useState } from 'react';
import { Search, Clock, ArrowRight, X, User, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Mobility & Rides', 'Food & Delivery', 'Safety & Trust', 'Express Logistics'];

  const blogs = [
    {
      id: 'blog-1',
      category: 'Mobility & Rides',
      title: 'How Nabhva Bike Taxis Reduced Metro Commute Time by 40%',
      excerpt: 'Exploring how micro-mobility bike taxis beat city traffic, connect last-mile transit hubs, and provide ₹35 instant rides.',
      author: 'Rohan Verma (Mobility Operations Lead)',
      date: 'Aug 07, 2026',
      readTime: '4 min read',
      image: '/assets/hero-phone.png',
      content: `
        Urban traffic congestion in Indian metros costs over ₹1.5 lakh crore annually in lost productivity. Nabhva Bike Taxis were created with a single objective: make short-distance travel effortless, fast, and affordable.

        Key Innovations Driving 40% Faster Commutes:

        1. Hyper-Local Captain Positioning:
        Our dispatch algorithm pre-positions verified captains within 300 meters of high-density transit nodes like metro stations and tech parks.

        2. Dedicated Rider Helmets & Hygiene:
        Every bike ride includes clean ISI-certified helmets for passengers, building safety and rider confidence.

        3. Transparent Flat Pricing:
        Rides start at just ₹35 for the first 3 kilometers, making daily commutes 60% cheaper than traditional cabs.
      `
    },
    {
      id: 'blog-2',
      category: 'Food & Delivery',
      title: 'Inside Nabhva\'s 10-Minute Instant Grocery Fulfillment Hubs',
      excerpt: 'A deep dive into hyper-local micro-warehouses, real-time inventory locking, and doorstep fulfillment.',
      author: 'Priya Nair (Product Manager)',
      date: 'Aug 02, 2026',
      readTime: '6 min read',
      image: '/assets/project-mealmate.png',
      content: `
        Delivering fresh organic milk, groceries, and hot meals in under 10 minutes requires rethinking traditional supply chain logistics.

        We built hyper-local dark stores optimized for 60-second order packing by warehouse pickers, paired with real-time telematics routing for delivery captains.
      `
    },
    {
      id: 'blog-3',
      category: 'Safety & Trust',
      title: 'Safety First: How Verified Captains and SOS Protect Women Riders',
      excerpt: 'How Nabhva built a multi-layered safety framework including Aadhaar verification, facial login, and 24/7 emergency response.',
      author: 'Kavita Menon (Head of Safety & Trust)',
      date: 'Jul 26, 2026',
      readTime: '5 min read',
      image: '/assets/footer-scooter.png',
      content: `
        Safety is not a feature; it is our foundation. On Nabhva, every ride captain undergoes mandatory police background verification, facial recognition checks before starting a shift, and continuous rating tracking.

        In addition, our 24/7 SOS helpline and live GPS trip sharing allow passengers to share trip status with family in one tap.
      `
    },
    {
      id: 'blog-4',
      category: 'Express Logistics',
      title: 'How Nabhva Parcel Courier Delivers Door-to-Door in Under 30 Minutes',
      excerpt: 'From tiffin boxes to important documents — how our instant parcel pickup network guarantees tamper-proof, real-time tracked delivery.',
      author: 'Arjun Mehta (Head of Logistics Operations)',
      date: 'Jul 18, 2026',
      readTime: '5 min read',
      image: '/assets/project-leafly.png',
      content: `
        When a mother wants to send a home-cooked lunch to her child's office across town, she shouldn't have to worry about whether it will arrive on time — or at all.

        Nabhva Parcel Courier was built to solve exactly this kind of everyday urgency.

        How We Guarantee 30-Minute Delivery:

        1. Hyper-Dense Captain Network:
        Our delivery captains are pre-positioned within 500 meters of residential clusters throughout the day. The moment a parcel order is confirmed, the nearest available captain receives the pickup ping — cutting wait time to under 4 minutes.

        2. Tamper-Proof Sealed Bags:
        Every parcel order comes with a numbered tamper-evident bag, ensuring contents remain sealed and private from pickup to delivery.

        3. Live GPS + OTP Handoff:
        Senders and recipients both get a real-time tracking link, and delivery is confirmed only after the recipient enters a one-time PIN — eliminating misdeliveries entirely.

        4. Transparent Flat Pricing from ₹45:
        Unlike courier giants with variable zone surcharges, Nabhva Parcel starts at ₹45 for same-locality delivery with a predictable tiered rate for longer distances — no surprises at checkout.
      `
    },
    {
      id: 'blog-5',
      category: 'Mobility & Rides',
      title: 'Nabhva Auto: Ending Ride Refusals Across Indian Cities',
      excerpt: 'How we built a no-refusal guarantee backed by real-time driver incentives, passenger ratings, and transparent fare upfronts.',
      author: 'Sneha Kulkarni (City Operations Lead)',
      date: 'Jul 10, 2026',
      readTime: '6 min read',
      image: '/assets/hero-phone.png',
      content: `
        Every Indian city commuter knows the frustration: you stand at a busy auto stand, hand up, only to be refused ride after ride because drivers don't want to go to your destination.

        Nabhva Auto was built with one non-negotiable promise: No Refusal, Every Ride.

        The No-Refusal Framework:

        1. Guaranteed Route Acceptance:
        Captains on Nabhva Auto are shown the destination and estimated earnings before accepting. Once accepted, they cannot cancel without a penalty. This shift in responsibility eliminates the systemic refusal culture.

        2. Upfront Transparent Fares:
        Passengers see the exact fare before confirming. No meter disputes, no last-minute price changes. Fares are calculated using live traffic data and published rate cards approved by state transport authorities.

        3. Captain Performance Scores:
        Every ride generates a bidirectional rating. Captains who refuse multiple rides in a day lose access to premium surge zones — creating a direct financial incentive for compliance.

        4. SOS-Equipped Vehicles:
        All Nabhva Auto vehicles display a visible NFC-enabled panic tag. Tapping it immediately alerts our safety response team with the vehicle's live location — giving both passengers and captains peace of mind.
      `
    },
    {
      id: 'blog-6',
      category: 'Safety & Trust',
      title: "Inside Nabhva's SOS Response Infrastructure: How We Protect Every Ride",
      excerpt: 'A deep look at our 24/7 emergency response team, AI trip anomaly detection, and how we resolve incidents in under 90 seconds.',
      author: 'Kavita Menon (Head of Safety & Trust)',
      date: 'Jun 28, 2026',
      readTime: '6 min read',
      image: '/assets/footer-scooter.png',
      content: `
        Safety on a mobility platform isn't just a product feature — it is an operational commitment that must function 24 hours a day, 7 days a week, in any weather condition.

        Nabhva's safety infrastructure goes far beyond an in-app SOS button.

        Three Layers of Safety:

        Layer 1 — Pre-Ride Verification:
        Every captain completes an Aadhaar-linked background check, vehicle fitness certificate upload, and daily facial recognition login before going live. Expired certificates automatically lock the captain's account until renewed.

        Layer 2 — AI Trip Anomaly Detection:
        Our real-time trip monitoring engine analyzes speed, route deviation, and extended stops. If a trip veers more than 400 meters off the optimal route without traffic justification, an automated safety ping is sent to the passenger.

        Layer 3 — 24/7 SOS Rapid Response:
        Our helpline (1800-889-9000) is staffed by trained emergency coordinators around the clock. Upon receiving an SOS alert, the responder has the captain's name, vehicle plate, live GPS, and passenger contact — enabling them to dispatch local authorities within 90 seconds.

        Transparency Reports:
        We publish quarterly safety transparency reports detailing incident rates, response times, and captain deactivations. Our commitment is to be the most trusted mobility platform in India — measured not just in rides, but in lives protected.
      `
    }
  ];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCat = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesQuery = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="blogs-page">
      <div className="container">
        {/* Header */}
        <div className="blogs-header">
          <div className="badge-yellow">
            <span>NABHVA JOURNAL & INSIGHTS</span>
          </div>
          <h1 className="page-title">
            Mobility, Delivery & Tech <span className="highlight-yellow">Thought Leadership.</span>
          </h1>
          <p className="page-sub">
            Articles on Rapido-style bike taxis, 10-minute grocery delivery, safety engineering, and product design.
          </p>

          {/* Search Bar */}
          <div className="blog-search-bar">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search articles on bike taxis, safety, food delivery..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter Chips */}
          <div className="cat-filters-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid">
          {filteredBlogs.map((article, idx) => (
            <motion.div 
              key={article.id} 
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="blog-img-box" onClick={() => setSelectedArticle(article)}>
                <img src={article.image} alt={article.title} />
                <span className="blog-cat-badge">{article.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="blog-title" onClick={() => setSelectedArticle(article)}>
                  {article.title}
                </h3>

                <p className="blog-excerpt">{article.excerpt}</p>

                <div className="blog-footer">
                  <span className="author-name">{article.author}</span>
                  <button className="btn-read-more" onClick={() => setSelectedArticle(article)}>
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal Reader */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
            <motion.div 
              className="article-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              <button className="close-btn" onClick={() => setSelectedArticle(null)}>
                <X size={20} />
              </button>

              <div className="badge-yellow">
                <span>{selectedArticle.category}</span>
              </div>

              <h2 className="article-modal-title">{selectedArticle.title}</h2>

              <div className="article-meta-bar">
                <span><User size={14} /> {selectedArticle.author}</span>
                <span><Calendar size={14} /> {selectedArticle.date}</span>
                <span><Clock size={14} /> {selectedArticle.readTime}</span>
              </div>

              <div className="article-hero-box">
                <img src={selectedArticle.image} alt={selectedArticle.title} />
              </div>

              <div className="article-body-text">
                {selectedArticle.content.split('\n\n').filter(p => p.trim()).map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .blogs-page {
          padding: 4rem 0 6rem 0;
        }

        .blogs-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3.5rem auto;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 800;
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .page-sub {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .blog-search-bar {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-pill);
          padding: 0.75rem 1.4rem;
          max-width: 520px;
          margin: 0 auto 1.5rem auto;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .blog-search-bar input {
          border: none;
          outline: none;
          width: 100%;
          font-family: var(--font-body);
          font-size: 0.95rem;
        }

        .cat-filters-scroll {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .cat-chip {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          color: var(--color-text-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-pill);
          transition: all 0.2s ease;
        }

        .cat-chip.active {
          background: var(--color-dark-green);
          color: #ffffff;
          border-color: var(--color-dark-green);
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .blog-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
        }

        .blog-img-box {
          height: 200px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .blog-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .blog-card:hover .blog-img-box img {
          transform: scale(1.05);
        }

        .blog-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--color-yellow);
          color: var(--color-dark-green);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.68rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
        }

        .blog-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.5rem;
        }

        .blog-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 0.65rem;
          cursor: pointer;
          line-height: 1.3;
        }

        .blog-title:hover {
          color: var(--color-dark-green);
        }

        .blog-excerpt {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .blog-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid #F1F5F9;
        }

        .author-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.78rem;
          color: var(--color-dark-green);
        }

        .btn-read-more {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--color-text-primary);
        }

        .article-modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 720px;
          width: 100%;
          padding: 2.5rem;
          position: relative;
          max-height: 88vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0,0,0,0.2);
        }

        .article-modal-title {
          font-size: 2rem;
          font-weight: 800;
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .article-meta-bar {
          display: flex;
          gap: 1.25rem;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
        }

        .article-meta-bar span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .article-hero-box {
          width: 100%;
          height: 280px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.75rem;
        }

        .article-hero-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-body-text {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--color-text-primary);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (max-width: 992px) {
          .blogs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .blogs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .blogs-page {
            padding: 2rem 0 4rem 0;
          }
          .page-title {
            font-size: 2rem;
          }
          .page-sub {
            font-size: 1rem;
          }
          .blog-search-bar {
            padding: 0.65rem 1rem;
          }
          .blog-search-bar input {
            font-size: 0.85rem;
          }
          .cat-filters-scroll {
            gap: 0.5rem;
          }
          .cat-chip {
            font-size: 0.75rem;
            padding: 0.4rem 0.85rem;
          }
          .blog-content {
            padding: 1.25rem;
          }
          .blog-title {
            font-size: 1.05rem;
          }
          .blog-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .article-modal-card {
            padding: 1.5rem;
          }
          .article-modal-title {
            font-size: 1.5rem;
          }
          .article-meta-bar {
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .article-hero-box {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
}
