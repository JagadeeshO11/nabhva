import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState('rides'); // 'rides' | 'food' | 'parcel'
  const [userLocation, setUserLocation] = useState('Koramangala 4th Block, Bangalore');
  const [cart, setCart] = useState([
    {
      id: 'food-1',
      name: 'Hyderabadi Dum Biryani',
      restaurant: 'Paradise Biryani',
      price: 280,
      quantity: 1,
      image: '/assets/project-mealmate.png'
    }
  ]);

  const [activeRideBooking, setActiveRideBooking] = useState(null);
  const [activeFoodOrder, setActiveFoodOrder] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);

  // Cart operations
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  // Ride booking trigger
  const initiateRideBooking = (rideDetails) => {
    setActiveRideBooking({
      ...rideDetails,
      status: 'searching', // searching -> matched -> ongoing -> completed
      driver: {
        name: 'Ramesh Kumar',
        rating: '4.9 ★',
        vehicleNo: 'KA 01 H 9482',
        vehicleModel: rideDetails.vehicle === 'bike' ? 'Honda Shine 125' : rideDetails.vehicle === 'auto' ? 'Bajaj RE Auto' : 'Hyundai Xcent',
        phone: '+91 98450 12345',
        otp: '4892',
        etaMinutes: 3
      }
    });
    setIsDriverModalOpen(true);
  };

  // Food order trigger
  const placeFoodOrder = (orderDetails) => {
    setActiveFoodOrder({
      id: 'NBH-' + Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      totalAmount: orderDetails.totalAmount,
      deliveryAddress: userLocation,
      placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'preparing', // preparing -> partner_assigned -> on_the_way -> delivered
      deliveryPartner: {
        name: 'Suresh V.',
        phone: '+91 97412 88990',
        rating: '4.8 ★',
        vehicle: 'Yellow Nabhva Scooter (KA 05 EQ 2210)'
      }
    });
    clearCart();
    setIsCartOpen(false);
    setIsOrderTrackingOpen(true);
  };

  const cartItemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartSubtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        userLocation,
        setUserLocation,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        activeRideBooking,
        setActiveRideBooking,
        initiateRideBooking,
        isDriverModalOpen,
        setIsDriverModalOpen,
        activeFoodOrder,
        placeFoodOrder,
        isOrderTrackingOpen,
        setIsOrderTrackingOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
