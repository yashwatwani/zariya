"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import products from "../data/products";

type CartItem = { id: string; qty: number };
type CartContextType = {
  cart: CartItem[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  getCartProducts: () => (typeof products[0] & { qty: number })[];
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: string) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === id);
      if (found) {
        return prev.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty } : item));
  };

  const getCartProducts = () => {
    return cart.map(({ id, qty }) => {
      const prod = products.find((p) => p.id === id);
      return prod ? { ...prod, qty } : null;
    }).filter(Boolean) as (typeof products[0] & { qty: number })[];
  };

  const subtotal = getCartProducts().reduce((sum, p) => sum + (parseFloat(p.price.replace(/[^\d.]/g, "")) * p.qty), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, getCartProducts, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}; 