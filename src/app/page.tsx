import React from "react";
import Image from "next/image";
import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white pt-8">
      {/* Product Carousel Area */}
      <section className="w-full max-w-7xl mx-auto">
        {/* ProductCarousel will be placed here */}
        <div className="mt-8">
          <ProductCarousel />
        </div>
      </section>
    </main>
  );
}
