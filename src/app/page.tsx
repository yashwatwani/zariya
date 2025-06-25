import React from "react";
import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white pt-0">
      {/* Hero Banner Section */}
      <section className="w-full bg-[#f8f5ef] border-b border-gray-100 py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Placeholder for hero image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-72 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-3xl font-serif">
            {/* Replace with your hero image */}
            Hero Image
          </div>
        </div>
        {/* Banner Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            SAVE <span className="text-amber-700">90%</span> TODAY
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-serif">
            Your luxury jewelry journey starts here. <br />
            <span className="text-amber-700 font-semibold">Anti-Tarnish. Timeless. Elegant.</span>
          </p>
          {/* You can add a CTA button here if desired */}
        </div>
      </section>
      {/* Product Carousel Area */}
      <section className="w-full max-w-7xl mx-auto">
        <div className="mt-8">
          <ProductCarousel />
        </div>
      </section>
    </main>
  );
}
