"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const demoProducts = [
  {
    name: "Emerald Radiance Ring",
    price: "$2,450",
    description: "A stunning emerald centerpiece set in 18k gold with a halo of diamonds.",
    image: "/products/emerald-ring-1.jpg",
    secondaryImage: "/products/emerald-ring-2.jpg",
    imageAlt: "Emerald Radiance Ring",
    specs: [
      { label: "Material", value: "18k Gold" },
      { label: "Gemstone", value: "Emerald, Diamond" },
      { label: "Size", value: "6.5 US" },
    ],
  },
  {
    name: "Celestial Diamond Pendant",
    price: "$1,980",
    description: "Brilliant round-cut diamond pendant with a delicate platinum chain.",
    image: "/products/diamond-pendant-1.jpg",
    secondaryImage: "/products/diamond-pendant-2.jpg",
    imageAlt: "Celestial Diamond Pendant",
    specs: [
      { label: "Material", value: "Platinum" },
      { label: "Gemstone", value: "Diamond" },
      { label: "Chain Length", value: "18 inches" },
    ],
  },
  {
    name: "Golden Grace Bracelet",
    price: "$3,200",
    description: "Elegant 22k gold bracelet with intricate filigree and sapphire accents.",
    image: "/products/gold-bracelet-1.png",
    secondaryImage: "/products/gold-bracelet-2.png",
    imageAlt: "Golden Grace Bracelet",
    specs: [
      { label: "Material", value: "22k Gold" },
      { label: "Gemstone", value: "Sapphire" },
      { label: "Length", value: "7 inches" },
    ],
  }
];

export default function ProductCarousel() {
  const [startIdx, setStartIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof demoProducts[0] | null>(null);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 3) % demoProducts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Show 3 products at a time
  const visibleProducts = [
    demoProducts[startIdx],
    demoProducts[(startIdx + 1) % demoProducts.length],
    demoProducts[(startIdx + 2) % demoProducts.length],
  ];

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center gap-8 w-full">
        {visibleProducts.map((product, idx) => (
          <ProductCard
            key={product.name}
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