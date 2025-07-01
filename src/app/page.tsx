"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCarousel from "../components/ProductCarousel";
import Image from "next/image";

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

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white pt-0">
      {/* Hero Banner Section - only show on 'All' */}
      {selectedTab === "All" && (
        <section className="w-full bg-[#f8f5ef] border-b border-gray-100 flex flex-col md:flex-row items-stretch justify-center p-0">
          {/* Hero Image Carousel (left) */}
          <div className="w-full md:w-1/2 h-[420px] md:h-[520px] relative overflow-hidden">
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
          {/* Banner Text (right) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 py-10 md:py-0">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              SAVE <span className="text-amber-700">90%</span> TODAY
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-serif">
              Your luxury jewelry journey starts here. <br />
              <span className="text-amber-700 font-semibold">Anti-Tarnish. Timeless. Elegant.</span>
            </p>
            {/* CTA Button (optional) */}
          </div>
        </section>
      )}
      {/* Product Carousel Area */}
      <section className="w-full max-w-7xl mx-auto">
        <div className="mt-8">
          <ProductCarousel selectedTab={filteredTab} excludeMen={filteredTab === "All"} />
        </div>
      </section>
    </main>
  );
}
