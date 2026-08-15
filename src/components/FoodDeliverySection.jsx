import React from 'react';

const foodItems = [
  { name: 'Hyderabadi Dum Biryani', restaurant: 'Paradise Biryani', rating: '4.8', time: '20-25 mins', price: '₹280', image: '/assets/project-mealmate.png', badge: 'BESTSELLER' },
  { name: 'Butter Masala Dosa', restaurant: 'Central Tiffins', rating: '4.9', time: '15-20 mins', price: '₹110', image: '/assets/project-superapp.png', badge: 'POPULAR' },
  { name: 'Chicken Tikka Roll', restaurant: 'Rolls Express', rating: '4.6', time: '18-22 mins', price: '₹180', image: '/assets/project-superapp.png' },
  { name: 'Paneer Butter Masala Combo', restaurant: 'Nabhva Kitchen', rating: '4.8', time: '25-30 mins', price: '₹199', image: '/assets/project-mealmate.png', badge: 'NEW' }
];

export default function FoodDeliverySection() {
  return (
    <section className="food-section" aria-label="Food delivery">
      <div className="container">
        <div className="food-heading">
          <div>
            <span className="food-label">INSTANT DELIVERY</span>
            <h2 className="section-title">Food &amp; Grocery Express</h2>
            <p>Order your favourites from nearby restaurants and get them delivered fast.</p>
          </div>
        </div>
        <div className="food-grid">
          {foodItems.map((item) => (
            <article className="food-card" key={item.name}>
              {item.badge && <span className="food-badge">{item.badge}</span>}
              <div className="food-image"><img src={item.image} alt={item.name} loading="lazy" /></div>
              <div className="food-info">
                <small>{item.restaurant}</small>
                <h3>{item.name}</h3>
                <div className="food-meta"><span>★ {item.rating}</span><span>• {item.time}</span></div>
                <div className="food-bottom"><strong>{item.price}</strong><span className="food-order">ORDER</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .food-section{padding:5rem 0;background:#fafafa}.food-heading{margin-bottom:2rem}.food-heading p{margin:.5rem 0 0;color:var(--color-text-secondary)}.food-label{display:inline-block;background:var(--color-yellow);color:var(--color-dark-green);font-weight:800;font-size:.7rem;padding:.3rem .7rem;border-radius:999px;margin-bottom:.7rem}.food-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.25rem}.food-card{position:relative;background:#fff;border:1px solid #eee;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.05);transition:transform .2s}.food-card:hover{transform:translateY(-4px)}.food-badge{position:absolute;top:10px;left:10px;z-index:2;background:var(--color-yellow);color:var(--color-dark-green);font-size:.65rem;font-weight:800;padding:.25rem .55rem;border-radius:999px}.food-image{height:150px;background:#eee}.food-image img{width:100%;height:100%;display:block;object-fit:cover}.food-info{padding:1rem}.food-info small{color:var(--color-text-secondary);font-size:.75rem}.food-info h3{font-size:1rem;margin:.3rem 0 .55rem}.food-meta{display:flex;gap:.6rem;font-size:.75rem;font-weight:700;margin-bottom:1rem}.food-bottom{display:flex;align-items:center;justify-content:space-between;border-top:1px solid #eee;padding-top:.75rem}.food-bottom strong{font-size:1.15rem;color:var(--color-dark-green)}.food-order{background:var(--color-dark-green);color:#fff;font-size:.7rem;font-weight:800;padding:.45rem .8rem;border-radius:999px}@media(max-width:1000px){.food-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.food-section{padding:3.5rem 0}.food-grid{grid-template-columns:1fr 1fr;gap:.8rem}.food-image{height:125px}.food-info{padding:.8rem}.food-info h3{font-size:.9rem}.food-meta{font-size:.68rem;gap:.35rem}.food-bottom strong{font-size:1rem}}@media(max-width:380px){.food-grid{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}
