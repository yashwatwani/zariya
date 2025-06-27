"use client";
import { useWishlist } from "../../context/WishlistContext";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <h1 className="text-4xl font-serif font-bold mb-8 text-amber-700">Your Wishlist</h1>
      {wishlistedProducts.length === 0 ? (
        <p className="text-lg text-gray-600">Your wishlist is empty. Start exploring and add your favorites!</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {wishlistedProducts.map(product => (
            <ProductCard key={product.id} product={{ ...product, onQuickView: () => {} }} />
          ))}
        </div>
      )}
    </main>
  );
} 