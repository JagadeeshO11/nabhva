import React, { useState } from 'react';
import { Search, HelpCircle, MessageSquare, PhoneCall, ShieldCheck, Bike, Utensils, CreditCard, ChevronDown, ChevronUp, Bot, Send, CheckCircle2, Paperclip, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: '👋 Hi! I am Nabhva Assistant. How can I help you with your ride, food order, or account today?' }
  ]);
  const [userMsg, setUserMsg] = useState('');

  const helpTopics = [
    {
      icon: <Bike size={24} />,
      title: "Rides & Captains",
      sub: "Helmet inquiries, captain rating, route issues, fare disputes"
    },
    {
      icon: <Utensils size={24} />,
      title: "Food & Grocery Orders",
      sub: "Order tracking, missing dishes, restaurant feedback"
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payments & Refunds",
      sub: "UPI refunds, wallet balance, promo code issues"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Safety & SOS",
      sub: "Emergency helpline, trip sharing, captain verification"
    }
  ];

  const faqs = [
    {
      q: "How fast are UPI refunds credited for cancelled rides or food orders?",
      a: "Refunds for cancelled Rapido-style bike rides or unfulfilled food orders are automatically credited back to your original payment method (UPI, Card, or Nabhva Wallet) within 15 to 45 minutes."
    },
    {
      q: "What if my bike taxi captain did not provide a helmet?",
      a: "Safety is our priority. Every Nabhva Captain is required to provide a sanitized ISI helmet. If a captain fails to do so, report the ride immediately to receive a 100% ride credit."
    },
    {
      q: "How do I report a lost item in a cab or bike taxi?",
      a: "Tap 'Trip History' in the app, select the ride, and tap 'Call Captain'. If uncontactable, call our 24/7 Lost & Found desk at 1800-889-9000."
    },
    {
      q: "Can I schedule a parcel pickup for later in the day?",
      a: "Yes! Choose 'Parcel Pickup' and pick a convenient 1-hour time window for door-to-door courier pickup."
    }
  ];

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const id = 'NBH-TICK-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(id);
    setTicketSubmitted(true);
    setTimeout(() => setTicketSubmitted(false), 4000);
  };

  const handleQuickChatQuery = (text) => {
    setChatOpen(true);
    const newMsgs = [...chatMessages, { sender: 'user', text }];
    setChatMessages(newMsgs);
    setTimeout(() => {
      let botReply = 'I have located your account details. ';
      if (text.includes('Refund')) botReply += 'Your last refund of ₹280 was processed via PhonePe UPI at 02:45 PM.';
      else if (text.includes('Ride')) botReply += 'Your last bike ride (KA 01 H 9482) has been logged. Our Safety Team is investigating your feedback.';
      else botReply += 'Our agent Suresh is reviewing your order history and will respond in ~2 mins.';
      
      setChatMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 1000);
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (!userMsg.trim()) return;
    handleQuickChatQuery(userMsg);
    setUserMsg('');
  };

  return (
    <section className="enhanced-support-page">
      <div className="container">
        {/* Support Hero Header */}
        <div className="support-hero-box">
          <div className="badge-yellow">
            <span>24/7 CUSTOMER SUPPORT & HELP CENTER</span>
          </div>
          <h1 className="support-title">
            How can we help <span className="highlight-yellow">you today?</span>
          </h1>
          <p className="support-sub">
            Search our knowledge base, track refunds, or chat live with our support team.
          </p>

          {/* Large Hero Search Bar */}
          <div className="hero-search-wrapper">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search help topics, e.g. 'UPI refund', 'helmet policy', 'lost item'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Topic Assistance Cards */}
        <div className="topic-cards-grid">
          {helpTopics.map((topic, idx) => (
            <motion.div 
              key={idx}
              className="topic-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSearchQuery(topic.title.split(' ')[0])}
            >
              <div className="topic-icon">{topic.icon}</div>
              <h4>{topic.title}</h4>
              <p>{topic.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="faq-card-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accordion-list">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className={`faq-block ${activeFaq === i ? 'open' : ''}`}>
                <div className="faq-head" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {activeFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {activeFaq === i && (
                  <div className="faq-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Submission Card */}
        <div className="ticket-card">
          <div className="ticket-head">
            <h2>Submit a Support Ticket</h2>
            <p>Can't find an answer? Submit a ticket and our team will get back within 2 hours.</p>
          </div>

          {ticketSubmitted ? (
            <div className="ticket-success-box">
              <CheckCircle2 size={44} className="green-check" />
              <div>
                <h3>Ticket {ticketId} Created!</h3>
                <p>A confirmation email and SMS update has been sent to your registered contact.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit} className="ticket-form-grid">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="Jagadeesh" />
              </div>

              <div className="form-group">
                <label>Registered Phone / Email</label>
                <input type="text" required placeholder="jagadeesh@example.com" />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select required>
                  <option value="ride">Bike Ride & Captain Issue</option>
                  <option value="food">Food Delivery Order Issue</option>
                  <option value="parcel">Parcel Courier Tracking</option>
                  <option value="refund">Payment & UPI Refund</option>
                </select>
              </div>

              <div className="form-group">
                <label>Order / Ride ID (Optional)</label>
                <input type="text" placeholder="e.g. NBH-99482" />
              </div>

              <div className="form-group full-width">
                <label>Describe the Issue</label>
                <textarea rows={4} required placeholder="Provide trip details, captain name, or order items..." />
              </div>

              <button type="submit" className="btn-primary-dark btn-submit-ticket">
                <span>Submit Support Ticket</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Floating AI Chat Assistant Widget Button */}
      {!chatOpen && (
        <button className="floating-chat-trigger" onClick={() => setChatOpen(true)}>
          <Bot size={22} />
          <span>Support AI Chat</span>
        </button>
      )}

      {/* Floating Live Chat Box */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div 
            className="ai-chat-box"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <div className="chat-head">
              <div className="chat-title">
                <Bot size={20} />
                <span>Nabhva Live Assistant</span>
              </div>
              <button className="btn-close-chat" onClick={() => setChatOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="chat-messages-area">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`msg-bubble ${m.sender}`}>
                  <span>{m.text}</span>
                </div>
              ))}
            </div>

            {/* Quick Suggestion Pills */}
            <div className="quick-suggestions">
              <button onClick={() => handleQuickChatQuery("Check my refund status")}>Refund Status</button>
              <button onClick={() => handleQuickChatQuery("Report bike ride issue")}>Ride Issue</button>
              <button onClick={() => handleQuickChatQuery("Track current food order")}>Track Order</button>
            </div>

            <form onSubmit={handleSendMsg} className="chat-form-bar">
              <input 
                type="text" 
                placeholder="Ask about rides, food, or refunds..."
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
              />
              <button type="submit" className="btn-send-chat">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .enhanced-support-page {
          padding: 4rem 0 6rem 0;
        }

        .support-hero-box {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 4rem auto;
        }

        .support-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .support-sub {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .hero-search-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: var(--radius-pill);
          padding: 0.85rem 1.6rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: border-color 0.2s ease;
        }

        .hero-search-wrapper:focus-within {
          border-color: var(--color-dark-green);
        }

        .search-icon { color: var(--color-dark-green); }

        .hero-search-wrapper input {
          border: none;
          outline: none;
          width: 100%;
          font-family: var(--font-body);
          font-size: 1rem;
        }

        .topic-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .topic-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .topic-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-dark-green);
        }

        .topic-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #F0F7F3;
          color: var(--color-dark-green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .topic-card h4 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 0.4rem;
        }

        .topic-card p {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .faq-card-section {
          max-width: 820px;
          margin: 0 auto 5rem auto;
        }

        .faq-card-section h2 {
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-block {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .faq-head {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
        }

        .faq-body {
          padding: 0 1.25rem 1.25rem 1.25rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          border-top: 1px dashed #E2E8F0;
          padding-top: 1rem;
          margin-top: 0.5rem;
        }

        .ticket-card {
          max-width: 820px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: 0 15px 35px rgba(0,0,0,0.04);
        }

        .ticket-head h2 {
          font-size: 2rem;
          margin-bottom: 0.35rem;
        }

        .ticket-head p {
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .ticket-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.82rem;
          margin-bottom: 0.35rem;
          display: block;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.92rem;
          outline: none;
        }

        .btn-submit-ticket {
          grid-column: span 2;
          padding: 0.95rem;
          margin-top: 0.5rem;
        }

        .ticket-success-box {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: #F0F7F3;
          padding: 1.75rem;
          border-radius: var(--radius-md);
        }

        .green-check { color: #10B981; }

        .floating-chat-trigger {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.85rem 1.4rem;
          border-radius: var(--radius-pill);
          box-shadow: 0 10px 30px rgba(20, 59, 41, 0.3);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          z-index: 90;
        }

        .ai-chat-box {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 400px;
          height: 520px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
          z-index: 100;
          display: flex;
          flex-direction: column;
          border: 1px solid #E2E8F0;
          overflow: hidden;
        }

        .chat-head {
          background: var(--color-dark-green);
          color: #ffffff;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chat-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
        }

        .btn-close-chat {
          background: none;
          color: #ffffff;
        }

        .chat-messages-area {
          padding: 1.25rem;
          flex-grow: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: #FAFAFA;
        }

        .msg-bubble {
          max-width: 82%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .msg-bubble.bot {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          align-self: flex-start;
        }

        .msg-bubble.user {
          background: var(--color-dark-green);
          color: #ffffff;
          align-self: flex-end;
        }

        .quick-suggestions {
          display: flex;
          gap: 0.4rem;
          padding: 0.5rem 0.75rem;
          background: #ffffff;
          border-top: 1px solid #F1F5F9;
          overflow-x: auto;
        }

        .quick-suggestions button {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.72rem;
          background: #F1F5F9;
          color: var(--color-dark-green);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }

        .chat-form-bar {
          display: flex;
          padding: 0.75rem;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          gap: 0.5rem;
        }

        .chat-form-bar input {
          flex-grow: 1;
          border: none;
          outline: none;
          font-size: 0.9rem;
        }

        .btn-send-chat {
          background: var(--color-dark-green);
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .topic-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .topic-cards-grid {
            grid-template-columns: 1fr;
          }
          .ticket-form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width, .btn-submit-ticket {
            grid-column: span 1;
          }
          .ai-chat-box {
            width: calc(100vw - 32px);
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}
