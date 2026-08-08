import React, { useState } from 'react';
import { Briefcase, MapPin, ArrowRight, X, Send, CheckCircle2, Heart, Award, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [submittedRole, setSubmittedRole] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const openPositions = [
    {
      id: 'job-1',
      title: 'Senior Product Designer (UX/UI)',
      department: 'Design',
      location: 'Bangalore (Hybrid)',
      type: 'Full Time',
      experience: '4+ Years',
      desc: 'Lead the design system and micro-interactions for Nabhva Super App, crafting intuitive mobile experiences for millions of daily users.'
    },
    {
      id: 'job-2',
      title: 'Lead React Native Mobile Engineer',
      department: 'Engineering',
      location: 'Bangalore / Remote',
      type: 'Full Time',
      experience: '5+ Years',
      desc: 'Architect high-performance cross-platform iOS & Android mobile applications with real-time GPS tracking and offline capabilities.'
    },
    {
      id: 'job-3',
      title: 'AI Telematics & Data Systems Lead',
      department: 'Data & AI',
      location: 'Hyderabad',
      type: 'Full Time',
      experience: '6+ Years',
      desc: 'Build predictive machine learning dispatch algorithms that match riders with nearby captains in under 2 seconds.'
    },
    {
      id: 'job-4',
      title: 'Growth & Performance Marketing Manager',
      department: 'Marketing',
      location: 'Mumbai',
      type: 'Full Time',
      experience: '3+ Years',
      desc: 'Drive user acquisition, retention campaigns, and brand partnerships across major metro cities.'
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmittedRole(true);
    setTimeout(() => {
      setSubmittedRole(false);
      setSelectedRole(null);
    }, 2500);
  };

  return (
    <section className="careers-page">
      <div className="container">
        {/* Header */}
        <div className="careers-header">
          <div className="badge-yellow">
            <span>JOIN OUR TEAM</span>
          </div>
          <h1 className="page-title">
            Build products that move <span className="highlight-yellow">millions.</span>
          </h1>
          <p className="page-sub">
            We are a team of passionate designers, engineers, and problem solvers building the next generation of urban mobility and super apps.
          </p>
        </div>

        {/* Culture Perks Grid */}
        <div className="perks-grid">
          <div className="perk-card">
            <Zap className="perk-icon" />
            <h4>High-Impact Scale</h4>
            <p>Your work directly impacts over 25 million active users and 150,000+ driver captains daily.</p>
          </div>
          <div className="perk-card">
            <Heart className="perk-icon" />
            <h4>Competitive Compensation & ESOPs</h4>
            <p>Industry-leading salaries, generous equity options, and comprehensive health insurance for you and your family.</p>
          </div>
          <div className="perk-card">
            <Award className="perk-icon" />
            <h4>Learning & Wellness Stipend</h4>
            <p>Annual ₹50,000 stipend for courses, conferences, books, and gym or wellness subscriptions.</p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="openings-section">
          <div className="section-head">
            <h2>Open Positions ({openPositions.length})</h2>
            <p>Find your next role at Nabhva</p>
          </div>

          <div className="openings-list">
            {openPositions.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <span className="job-dept">{job.department}</span>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-desc">{job.desc}</p>
                  <div className="job-tags">
                    <span><MapPin size={12} /> {job.location}</span>
                    <span>• {job.type}</span>
                    <span>• {job.experience}</span>
                  </div>
                </div>
                <button className="btn-apply-job" onClick={() => setSelectedRole(job)}>
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="modal-backdrop" onClick={() => setSelectedRole(null)}>
            <motion.div 
              className="job-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button className="close-btn" onClick={() => setSelectedRole(null)}>
                <X size={20} />
              </button>

              {submittedRole ? (
                <div className="success-state">
                  <CheckCircle2 size={54} className="success-icon" />
                  <h3>Application Submitted!</h3>
                  <p>Thank you, {applicantName}. Our Talent Team will review your application for {selectedRole.title} and reach out soon.</p>
                </div>
              ) : (
                <>
                  <div className="badge-yellow">
                    <span>APPLYING FOR</span>
                  </div>
                  <h2 className="job-modal-title">{selectedRole.title}</h2>
                  <p className="job-modal-sub">{selectedRole.department} • {selectedRole.location}</p>

                  <form onSubmit={handleApplySubmit} className="job-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Sarah Jenkins"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="sarah@example.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Portfolio / GitHub / LinkedIn URL</label>
                      <input 
                        type="url" 
                        required 
                        placeholder="https://linkedin.com/in/sarahjenkins"
                        value={portfolioUrl}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn-primary-dark full-width">
                      <span>Submit Application</span>
                      <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .careers-page {
          padding: 4rem 0 6rem 0;
        }

        .careers-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 4rem auto;
        }

        .page-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .page-sub {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
        }

        .perks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .perk-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
        }

        .perk-icon {
          color: var(--color-dark-green);
          width: 32px;
          height: 32px;
          margin-bottom: 1rem;
        }

        .perk-card h4 {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .perk-card p {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .openings-section {
          max-width: 900px;
          margin: 0 auto;
        }

        .section-head {
          margin-bottom: 2rem;
        }

        .section-head h2 {
          font-size: 2.2rem;
          font-weight: 800;
        }

        .section-head p {
          color: var(--color-text-secondary);
        }

        .openings-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .job-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          transition: border-color 0.2s ease;
        }

        .job-card:hover {
          border-color: var(--color-dark-green);
        }

        .job-dept {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.72rem;
          color: var(--color-dark-green);
          background: #F0F7F3;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
        }

        .job-title {
          font-size: 1.3rem;
          font-weight: 800;
          margin-top: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .job-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }

        .job-tags {
          display: flex;
          gap: 0.75rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-text-secondary);
        }

        .btn-apply-job {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.88rem;
          padding: 0.75rem 1.4rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }

        .job-modal-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          max-width: 540px;
          width: 100%;
          padding: 2.5rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0,0,0,0.22);
        }

        .job-modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-top: 0.6rem;
        }

        .job-modal-sub {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .job-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        @media (max-width: 768px) {
          .perks-grid {
            grid-template-columns: 1fr;
          }
          .job-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
