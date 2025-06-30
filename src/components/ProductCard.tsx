"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import products from "../data/products";

interface ProductCardProps {
  product: {
    name: string;
    price: string;
    description: string;
    image: string;
    imageAlt: string;
    secondaryImage: string;
    onQuickView: () => void;
    id: string;
  };
}

export default function ProductCard({ product }: { product: ProductCardProps["product"] }) {
  const [hovered, setHovered] = useState(false);
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-all duration-300 min-w-[320px] max-w-[350px] min-h-[480px] group cursor-pointer"
      whileHover={{ scale: 1.025, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-72 flex items-center justify-center relative">
        {/* Heart Icon top-right */}
        <button
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-amber-100 rounded-full p-2 shadow transition"
          onClick={e => { e.stopPropagation(); toggleWishlist(product.id); }}
          aria-label={isWishlisted(product.id) ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted(product.id) ? (
            <HeartIconSolid className="h-6 w-6 text-amber-700" />
          ) : (
            <HeartIcon className="h-6 w-6 text-amber-700" />
          )}
        </button>
        <AnimatePresence initial={false}>
          {!hovered || !product.secondaryImage ? (
            <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <Image src={product.image} alt={product.imageAlt} fill className="object-cover transition-all duration-300" />
            </motion.div>
          ) : (
            <motion.div key="secondary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <Image src={product.secondaryImage} alt={product.imageAlt + ' alternate'} fill className="object-cover transition-all duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Quick View & Add to Cart Buttons */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-3 flex flex-col items-center gap-1 w-full px-4"
            >
              <button
                className="bg-amber-700 text-white px-3 py-0.5 rounded-full shadow font-serif text-sm tracking-wide hover:bg-amber-800 transition mb-0.5 w-fit min-w-[90px]"
                onClick={product.onQuickView}
              >
                Quick View
              </button>
              <button
                className="flex items-center justify-center gap-2 border border-amber-700 text-amber-700 bg-white font-serif text-sm py-0.5 px-3 rounded-full shadow hover:bg-amber-50 transition w-fit min-w-[90px]"
                onClick={() => addToCart(product.id)}
              >
                <ShoppingBagIcon className="h-4 w-4" /> Add to Cart
              </button>
            </motion.div>
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