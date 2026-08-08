import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    userLocation,
    placeFoodOrder 
  } = useApp();

  const [paymentMode, setPaymentMode] = useState('upi');

  const deliveryFee = cartSubtotal > 300 ? 0 : 25;
  const platformFee = 5;
  const discount = 50;
  const grandTotal = Math.max(0, cartSubtotal + deliveryFee + platformFee - discount);

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}>
        <motion.div 
          className="cart-drawer"
          onClick={(e) => e.stopPropagation()}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="header-title">
              <ShoppingBag size={20} className="icon-bag" />
              <h3>Your Food Basket</h3>
            </div>
            <button className="close-drawer" onClick={() => setIsCartOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={54} className="empty-icon" />
              <h4>Your basket is empty</h4>
              <p>Add some delicious dishes or fresh groceries to get started.</p>
            </div>
          ) : (
            <div className="cart-content">
              {/* Delivery Address Bar */}
              <div className="address-bar">
                <span className="addr-label">Delivering to:</span>
                <span className="addr-val">{userLocation}</span>
              </div>

              {/* Items List */}
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />

                    <div className="cart-item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-rest">{item.restaurant}</span>
                      <span className="item-price">₹{item.price * item.quantity}</span>
                    </div>

                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}><Minus size={12} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}><Plus size={12} /></button>
                    </div>

                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Bill Details */}
              <div className="bill-details">
                <h4>Bill Details</h4>
                <div className="bill-row">
                  <span>Item Total</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                <div className="bill-row">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <strong className="green-text">FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div className="bill-row">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="bill-row green-row">
                  <span>Coupon (WELCOME50)</span>
                  <span>-₹{discount}</span>
                </div>
                <div className="bill-row grand-total">
                  <span>To Pay</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Payment Mode Selector */}
              <div className="payment-selector">
                <label>Payment Method</label>
                <div className="pay-options">
                  <button 
                    className={`pay-opt ${paymentMode === 'upi' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('upi')}
                  >
                    Google Pay / PhonePe UPI
                  </button>
                  <button 
                    className={`pay-opt ${paymentMode === 'cod' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('cod')}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="drawer-footer">
                <button 
                  className="btn-checkout"
                  onClick={() => placeFoodOrder({ totalAmount: grandTotal })}
                >
                  <span>Place Order – ₹{grandTotal}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          <style>{`
            .cart-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(15, 24, 20, 0.5);
              backdrop-filter: blur(4px);
              z-index: 100;
              display: flex;
              justify-content: flex-end;
            }

            .cart-drawer {
              width: 440px;
              max-width: 100%;
              height: 100%;
              background: #ffffff;
              display: flex;
              flex-direction: column;
              box-shadow: -10px 0 30px rgba(0,0,0,0.15);
            }

            .drawer-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 1.25rem 1.5rem;
              border-bottom: 1px solid #E2E8F0;
            }

            .header-title {
              display: flex;
              align-items: center;
              gap: 0.6rem;
            }

            .icon-bag { color: var(--color-dark-green); }

            .header-title h3 {
              font-size: 1.15rem;
              font-weight: 800;
            }

            .close-drawer {
              background: #F1F5F9;
              border-radius: 50%;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .cart-content {
              padding: 1.5rem;
              display: flex;
              flex-direction: column;
              gap: 1.25rem;
              overflow-y: auto;
              flex-grow: 1;
            }

            .address-bar {
              background: #F0F7F3;
              border-radius: var(--radius-sm);
              padding: 0.75rem 1rem;
              display: flex;
              flex-direction: column;
              gap: 0.15rem;
            }

            .addr-label {
              font-size: 0.72rem;
              font-weight: 700;
              color: var(--color-dark-green);
              text-transform: uppercase;
            }

            .addr-val {
              font-weight: 700;
              font-size: 0.88rem;
              color: var(--color-text-primary);
            }

            .cart-items-list {
              display: flex;
              flex-direction: column;
              gap: 0.85rem;
            }

            .cart-item {
              display: flex;
              align-items: center;
              gap: 0.85rem;
              padding: 0.75rem;
              border: 1px solid #E2E8F0;
              border-radius: var(--radius-md);
            }

            .cart-item-img {
              width: 50px;
              height: 50px;
              border-radius: 8px;
              object-fit: cover;
            }

            .cart-item-details {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }

            .item-name {
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 0.88rem;
            }

            .item-rest {
              font-size: 0.75rem;
              color: var(--color-text-secondary);
            }

            .item-price {
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 0.92rem;
              color: var(--color-dark-green);
            }

            .qty-controls {
              display: flex;
              align-items: center;
              gap: 0.4rem;
              background: #F1F5F9;
              padding: 0.25rem 0.5rem;
              border-radius: var(--radius-pill);
            }

            .qty-controls button {
              background: none;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .qty-controls span {
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 0.85rem;
            }

            .btn-remove {
              background: none;
              color: #EF4444;
              padding: 0.2rem;
            }

            .bill-details {
              background: #F8FAFC;
              border-radius: var(--radius-md);
              padding: 1rem;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }

            .bill-details h4 {
              font-size: 0.9rem;
              margin-bottom: 0.25rem;
            }

            .bill-row {
              display: flex;
              justify-content: space-between;
              font-size: 0.85rem;
              color: var(--color-text-secondary);
            }

            .green-row { color: #10B981; font-weight: 700; }
            .green-text { color: #10B981; }

            .grand-total {
              border-top: 1.5px solid #CBD5E1;
              padding-top: 0.5rem;
              margin-top: 0.25rem;
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 1.1rem;
              color: var(--color-dark-green);
            }

            .payment-selector {
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
            }

            .payment-selector label {
              font-family: var(--font-heading);
              font-weight: 700;
              font-size: 0.82rem;
            }

            .pay-options {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 0.5rem;
            }

            .pay-opt {
              padding: 0.6rem 0.5rem;
              font-size: 0.75rem;
              font-weight: 700;
              border: 1.5px solid #E2E8F0;
              border-radius: var(--radius-sm);
              background: #ffffff;
            }

            .pay-opt.active {
              border-color: var(--color-dark-green);
              background: #F0F7F3;
              color: var(--color-dark-green);
            }

            .drawer-footer {
              margin-top: auto;
            }

            .btn-checkout {
              width: 100%;
              background: var(--color-dark-green);
              color: #ffffff;
              font-family: var(--font-heading);
              font-weight: 800;
              font-size: 1rem;
              padding: 1rem;
              border-radius: var(--radius-pill);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.6rem;
              box-shadow: 0 6px 18px rgba(20, 59, 41, 0.25);
            }

            .empty-cart {
              text-align: center;
              padding: 4rem 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1rem;
            }

            .empty-icon { color: #CBD5E1; }
          `}</style>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
