import React, { useState } from 'react';
import { Search, Star, Clock, Plus, Check, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FoodDeliverySection() {
  const { addToCart, cart } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Biryani & Rice', 'South Indian', 'Pizzas & Burgers', 'Fresh Groceries', 'Desserts'];

  const foodItems = [
    {
      id: 'food-1',
      name: 'Hyderabadi Dum Biryani',
      category: 'Biryani & Rice',
      restaurant: 'Paradise Biryani',
      rating: '4.8 ★',
      time: '20-25 mins',
      price: 280,
      image: '/assets/project-mealmate.png',
      badge: 'BESTSELLER'
    },
    {
      id: 'food-2',
      name: 'Butter Masala Dosa',
      category: 'South Indian',
      restaurant: 'CTR Central Tiffins',
      rating: '4.9 ★',
      time: '15-20 mins',
      price: 110,
      image: '/assets/project-superapp.png',
      badge: 'POPULAR'
    },
    {
      id: 'food-3',
      name: 'Truffle Cheese Burger',
      category: 'Pizzas & Burgers',
      restaurant: 'The Gourmet Club',
      rating: '4.7 ★',
      time: '20-25 mins',
      price: 240,
      image: '/assets/project-mealmate.png'
    },
    {
      id: 'food-4',
      name: 'Organic Farm Whole Milk 1L',
      category: 'Fresh Groceries',
      restaurant: 'Nabhva Daily Fresh',
      rating: '4.9 ★',
      time: '10 mins express',
      price: 64,
      image: '/assets/project-finwise.png',
      badge: '10 MINS'
    },
    {
      id: 'food-5',
      name: 'Chicken Tikka Roll',
      category: 'Pizzas & Burgers',
      restaurant: 'Rolls Express',
      rating: '4.6 ★',
      time: '18-22 mins',
      price: 180,
      image: '/assets/project-superapp.png'
    },
    {
      id: 'food-6',
      name: 'Premium Mangoes Box 1kg',
      category: 'Fresh Groceries',
      restaurant: 'Nabhva Mart',
      rating: '4.9 ★',
      time: '12 mins express',
      price: 220,
      image: '/assets/project-leafly.png'
    }
  ];

  const filteredItems = foodItems.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="food-section" className="food-section">
      <div className="container">
        <div className="food-header">
          <div>
            <div className="badge-yellow">
              <span>INSTANT DELIVERY</span>
            </div>
            <h2 className="section-title">Food & Grocery Express</h2>
          </div>

          {/* Search Bar */}
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search biryani, pizza, milk, groceries..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="categories-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="food-grid">
          {filteredItems.map((item) => {
            const inCart = cart.find((i) => i.id === item.id);

            return (
              <div key={item.id} className="food-card">
                {item.badge && <span className="item-badge">{item.badge}</span>}
                <div className="food-img-box">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="food-info">
                  <div className="restaurant-name">{item.restaurant}</div>
                  <h3 className="food-name">{item.name}</h3>

                  <div className="meta-row">
                    <span className="rating-pill">
                      <Star size={12} fill="#FFC400" color="#FFC400" />
                      <span>{item.rating}</span>
                    </span>
                    <span className="time-pill">
                      <Clock size={12} />
                      <span>{item.time}</span>
                    </span>
                  </div>

                  <div className="card-bottom">
                    <span className="price">₹{item.price}</span>
                    <button 
                      className={`btn-add-cart ${inCart ? 'in-cart' : ''}`}
                      onClick={() => addToCart(item)}
                    >
                      {inCart ? (
                        <>
                          <Check size={16} />
                          <span>Added ({inCart.quantity})</span>
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          <span>ADD</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .food-section {
          padding: 5rem 0 6rem 0;
          background: #FAFAFA;
        }

        .food-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-pill);
          padding: 0.65rem 1.25rem;
          width: 340px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .search-icon { color: var(--color-text-secondary); }

        .search-box input {
          border: none;
          outline: none;
          width: 100%;
          font-family: var(--font-body);
          font-size: 0.9rem;
        }

        .categories-scroll {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .cat-pill {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          color: var(--color-text-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .cat-pill.active {
          background: var(--color-dark-green);
          color: #ffffff;
          border-color: var(--color-dark-green);
        }

        .food-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .food-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid #f0f0f0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.04);
          position: relative;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .food-card:hover {
          transform: translateY(-5px);
        }

        .item-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--color-yellow);
          color: var(--color-dark-green);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.68rem;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          z-index: 5;
        }

        .food-img-box {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #F1F5F9;
        }

        .food-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .food-info {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .restaurant-name {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .food-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin-bottom: 0.6rem;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .rating-pill, .time-pill {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px dashed #E2E8F0;
        }

        .price {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--color-dark-green);
        }

        .btn-add-cart {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-dark-green);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-pill);
          transition: all 0.2s ease;
        }

        .btn-add-cart:hover {
          background: var(--color-dark-green-hover);
        }

        .btn-add-cart.in-cart {
          background: #10B981;
        }

        @media (max-width: 992px) {
          .food-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .food-grid {
            grid-template-columns: 1fr;
          }
          .search-box {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
