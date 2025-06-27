"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import ProductCarousel from "../components/ProductCarousel";
import Image from "next/image";

export default function Home() {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("category") || "All";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white pt-0">
      {/* Hero Banner Section - only show on 'All' */}
      {selectedTab === "All" && (
        <section className="w-full bg-[#f8f5ef] border-b border-gray-100 flex flex-col md:flex-row items-stretch justify-center p-0">
          {/* Hero Image (left) */}
          <div className="w-full md:w-1/2 h-[420px] md:h-[520px] relative">
            {/* Replace src with your hero image if available */}
            <Image
              src="/products/emerald-ring-1.jpg"
              alt="Jewelry Hero"
              fill
              className="object-cover object-center rounded-none"
              priority
            />
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
          <ProductCarousel selectedTab={selectedTab} />
        </div>
      </section>
    </main>
  );
}
