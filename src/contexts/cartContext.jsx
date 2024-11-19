import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Custom hook untuk mempermudah akses context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Ambil token user dari localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika token tidak ada, hapus key cart dari localStorage
      localStorage.removeItem("cart");
      return [];
    }

    // Ambil data cart dari localStorage jika token ada
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Jika token tidak ada, hapus key cart dari localStorage
      localStorage.removeItem("cart");
    } else {
      // Jika token ada, simpan data cart ke localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item) => {
    const price = parseInt(item.price);

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity jika item sudah ada di keranjang
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Tambahkan item baru ke keranjang
      return [...prevCart, { ...item, price, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      if (quantity < 1) {
        return prevCart.filter((item) => item.id !== id);
      }
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
