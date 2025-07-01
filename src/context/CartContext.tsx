"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import products from "../data/products";

type CartItem = { id: string; qty: number; options?: Record<string, string> };
type CartContextType = {
  cart: CartItem[];
  addToCart: (id: string, options?: Record<string, string>) => void;
  removeFromCart: (id: string, options?: Record<string, string>) => void;
  updateQty: (id: string, qty: number, options?: Record<string, string>) => void;
  getCartProducts: () => (typeof products[0] & { qty: number; options?: Record<string, string> })[];
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

  function normalizeOptions(options?: Record<string, string>) {
    return options && Object.keys(options).length > 0 ? options : undefined;
  }

  function optionsEqual(a?: Record<string, string>, b?: Record<string, string>) {
    return JSON.stringify(normalizeOptions(a)) === JSON.stringify(normalizeOptions(b));
  }

  const addToCart = (id: string, options?: Record<string, string>) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === id && optionsEqual(item.options, options));
      if (found) {
        return prev.map((item) =>
          item.id === id && optionsEqual(item.options, options)
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { id, qty: 1, options: normalizeOptions(options) }];
    });
  };

  const removeFromCart = (id: string, options?: Record<string, string>) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && optionsEqual(item.options, options))));
  };

  const updateQty = (id: string, qty: number, options?: Record<string, string>) => {
    setCart((prev) => prev.map((item) =>
      item.id === id && optionsEqual(item.options, options)
        ? { ...item, qty }
        : item
    ));
  };

  const getCartProducts = () => {
    return cart.map(({ id, qty, options }) => {
      const prod = products.find((p) => p.id === id);
      return prod ? { ...prod, qty, options } : null;
    }).filter(Boolean) as (typeof products[0] & { qty: number; options?: Record<string, string> })[];
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