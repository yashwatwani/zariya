"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCarousel from "../components/ProductCarousel";
import Image from "next/image";
import ProductModal from "../components/ProductModal";
import products from "../data/products";

const HERO_IMAGES = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
];

export default function Home() {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("category") || "All";

  // Carousel state
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Only show 'Men' products when Men tab is selected, and exclude them from 'All'
  const showMen = selectedTab === "Men";
  const filteredTab = showMen ? "Men" : selectedTab;

  const goldBubbleProduct = products.find(p => p.id === "gold-bubble-letter-necklace");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white pt-0">
      {/* Hero Banner Section - only show on 'All' */}
      {selectedTab === "All" && (
        <section className="w-full bg-[#f8f5ef] border-b border-gray-100 flex flex-col md:flex-row items-stretch justify-center p-0 h-[420px] md:h-[520px] mb-16">
          {/* Banner Image (left, full container) */}
          <div className="w-full md:w-1/2 relative h-[420px] md:h-[520px] flex items-center justify-center order-1 md:order-none">
            <Image
              src="/hero/heron.jpg"
              alt="Gold Bubble Letter Necklaces"
              fill
              className="object-cover rounded-xl shadow"
              priority
            />
            <a
              href="#"
              onClick={e => { e.preventDefault(); setModalProduct(goldBubbleProduct); setModalOpen(true); }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white font-serif font-bold tracking-wide text-xl px-8 py-3 rounded-full shadow transition backdrop-blur-sm border border-[1.5px] border-[#D4AF37]"
              style={{ zIndex: 2, fontFamily: 'Playfair Display, serif' }}
            >
              Order your alphabet now
            </a>
          </div>
          {/* Hero Image Carousel (right) */}
          <div className="w-full md:w-1/2 h-[420px] md:h-[520px] relative overflow-hidden order-0 md:order-none">
            <Image
              src={HERO_IMAGES[heroIdx]}
              alt={`Jewelry Hero ${heroIdx + 1}`}
              fill
              className="object-cover object-center rounded-none transition-all duration-700"
              priority
            />
            {/* Carousel dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full border border-amber-700 ${i === heroIdx ? 'bg-amber-700' : 'bg-white'}`}
                  onClick={() => setHeroIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Product Carousel Area */}
      <section className="w-full max-w-7xl mx-auto">
        <div className="mt-8">
          <ProductCarousel selectedTab={filteredTab} excludeMen={filteredTab === "All"} forceFirstProductId="gold-bubble-letter-necklace" />
        </div>
      </section>
      <ProductModal open={modalOpen} onClose={() => setModalOpen(false)} product={modalProduct} />
    </main>
  );
}
