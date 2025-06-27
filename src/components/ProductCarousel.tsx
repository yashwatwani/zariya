"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import products from "../data/products";

interface ProductCarouselProps {
  selectedTab: string;
}

export default function ProductCarousel({ selectedTab }: ProductCarouselProps) {
  const [startIdx, setStartIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  // Filter products based on selectedTab
  const filteredProducts = selectedTab === "All"
    ? products
    : products.filter((p) => p.type === selectedTab);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 3) % filteredProducts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [filteredProducts.length]);

  // Show up to 3 products at a time
  const visibleProducts = filteredProducts.slice(0, 3);

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center gap-8 w-full flex-wrap">
        {visibleProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              onQuickView: () => handleQuickView(product),
            }}
          />
        ))}
      </div>
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
} 