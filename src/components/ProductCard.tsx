"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    description: string;
    image: string;
    imageAlt: string;
    secondaryImage: string;
    onQuickView: () => void;
  };
}

export default function ProductCard({ product }: { product: ProductCardProps["product"] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-all duration-300 min-w-[320px] max-w-[350px] min-h-[480px] group cursor-pointer"
      whileHover={{ scale: 1.025, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-72 flex items-center justify-center relative">
        <AnimatePresence initial={false}>
          {!hovered ? (
            <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <Image src={product.image} alt={product.imageAlt} fill className="object-cover transition-all duration-300" />
            </motion.div>
          ) : (
            <motion.div key="secondary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <Image src={product.secondaryImage} alt={product.imageAlt + ' alternate'} fill className="object-cover transition-all duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Quick View Button */}
        <AnimatePresence>
          {hovered && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white px-6 py-2 rounded-full shadow-lg font-serif text-lg tracking-wide hover:bg-amber-800 transition"
              onClick={product.onQuickView}
            >
              Quick View
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-6 w-full text-center">
        <h3 className="font-serif text-xl text-gray-900 mb-1 font-semibold">{product.name}</h3>
        <div className="text-amber-800 text-lg font-bold mb-2">{product.price}</div>
        <p className="text-gray-500 text-base font-light line-clamp-2 min-h-[48px]">{product.description}</p>
      </div>
    </motion.div>
  );
} 