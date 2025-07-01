import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XMarkIcon, HeartIcon, ShoppingBagIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: string;
    description: string;
    image: string;
    secondaryImage: string;
    imageAlt: string;
    specs?: { label: string; value: string }[];
    id: string;
  } | null;
}

const GOLD_BUBBLE_ID = "gold-bubble-letter-necklace";
const ALPHABETS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

export default function ProductModal({ open, onClose, product }: ProductModalProps) {
  const [imgIdx, setImgIdx] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState<string>("");
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  if (!open || !product) return null;
  const images = [product.image];
  if (product.secondaryImage) images.push(product.secondaryImage);

  const handlePrev = () => setImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const isGoldBubble = product && product.id === GOLD_BUBBLE_ID;

  const handleAddToCart = () => {
    if (isGoldBubble) {
      if (!selectedLetter) {
        setError("Please select a letter.");
        return;
      }
      addToCart(product.id, { letter: selectedLetter });
      setError("");
      onClose();
      setSelectedLetter("");
    } else {
      addToCart(product.id);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full p-12 relative flex flex-col md:flex-row gap-12"
            initial={{ scale: 0.95, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition">
              <XMarkIcon className="h-7 w-7 text-gray-700" />
            </button>
            {/* Images */}
            <div className="flex flex-col items-center md:w-1/2 w-full">
              <div className="relative w-[370px] h-[370px] md:w-[420px] md:h-[420px] mb-6">
                <Image src={images[imgIdx]} alt={product.imageAlt} fill className="object-cover rounded-xl shadow" />
                {/* Arrow Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-amber-100 rounded-full p-2 shadow transition"
                    >
                      <ChevronLeftIcon className="h-7 w-7 text-amber-700" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-amber-100 rounded-full p-2 shadow transition"
                    >
                      <ChevronRightIcon className="h-7 w-7 text-amber-700" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-2 mt-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    className={`w-16 h-16 rounded-lg border-2 ${imgIdx === i ? "border-amber-700" : "border-gray-200"} overflow-hidden`}
                    onClick={() => setImgIdx(i)}
                  >
                    <Image src={img} alt={product.imageAlt + ' thumb'} width={64} height={64} className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <div className="text-amber-800 text-2xl font-bold mb-2">{product.price}</div>
                <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
                {product.specs && (
                  <ul className="mb-4 text-base text-gray-500">
                    {product.specs.map((spec) => (
                      <li key={spec.label}><span className="font-semibold text-gray-700">{spec.label}:</span> {spec.value}</li>
                    ))}
                  </ul>
                )}
                {isGoldBubble && (
                  <div className="mb-4">
                    <label className="block font-serif text-lg mb-2 text-gray-800">Select Letter</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                      value={selectedLetter}
                      onChange={e => { setSelectedLetter(e.target.value); setError(""); }}
                    >
                      <option value="">Choose a letter</option>
                      {ALPHABETS.map((letter) => (
                        <option key={letter} value={letter}>{letter}</option>
                      ))}
                    </select>
                    {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
                  </div>
                )}
              </div>
              {/* <div className="flex gap-4 mt-2 w-full justify-center">
                <button className="flex-1 flex items-center justify-center gap-2 border border-amber-700 text-amber-700 font-serif text-lg py-2 px-4 rounded-full hover:bg-amber-50 transition max-w-xs">
                  <HeartIcon className="h-6 w-6" /> Wishlist
                </button>
              </div> */}
              {/* Add to Cart Button centered below details */}
              <div className="flex justify-center mt-3 w-full">
                <button
                  className="flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-800 text-white font-serif text-xl py-3 px-10 rounded-full shadow-lg transition w-full max-w-xs"
                  onClick={handleAddToCart}
                >
                  <ShoppingBagIcon className="h-7 w-7" /> Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 