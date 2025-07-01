"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import products from "../data/products";

interface ProductCarouselProps {
  selectedTab: string;
  excludeMen?: boolean;
  forceFirstProductId?: string;
}

export default function ProductCarousel({ selectedTab, excludeMen = false, forceFirstProductId }: ProductCarouselProps) {
  const [startIdx, setStartIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  // Filter products based on selectedTab (case-insensitive, trimmed)
  let filteredProducts = (selectedTab === "All"
    ? products
    : products.filter((p) =>
        (p.type || "").toLowerCase().trim() === selectedTab.toLowerCase().trim()
      )
  ).map((p) => ({ ...p, secondaryImage: p.secondaryImage || "" }));

  if (excludeMen) {
    filteredProducts = filteredProducts.filter(
      (p) => (p.type || "").toLowerCase().trim() !== "men"
    );
  }

  // Ensure forceFirstProductId is first if present
  if (forceFirstProductId) {
    const idx = filteredProducts.findIndex(p => p.id === forceFirstProductId);
    if (idx > 0) {
      const [forced] = filteredProducts.splice(idx, 1);
      filteredProducts.unshift(forced);
    }
  }

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

  // Show all products in a responsive grid
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              secondaryImage: product.secondaryImage || "",
              onQuickView: () => handleQuickView(product),
            }}
          />
        ))}
      </div>
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct ? { ...selectedProduct, secondaryImage: selectedProduct.secondaryImage || "" } : null}
      />
    </>
  );
} 