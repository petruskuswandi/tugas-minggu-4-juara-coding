import { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    // Implementasikan logika menambahkan produk ke keranjang
    setCartItems([...cartItems, { ...product, quantity }]);
  };

  const removeFromCart = (productId) => {
    // Implementasikan logika menghapus produk dari keranjang
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};