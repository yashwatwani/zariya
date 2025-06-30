"use client";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { getCartProducts, updateQty, removeFromCart, subtotal } = useCart();
  const cartProducts = getCartProducts();
  const [promo, setPromo] = useState("");

  // Shipping and tax logic
  const shipping = subtotal < 500 && subtotal > 0 ? 50 : 0;
  const tax = 0;
  const estimatedTotal = subtotal + shipping + tax;

  return (
    <main className="flex flex-col items-center min-h-[60vh] py-12 bg-white">
      <h1 className="text-3xl font-bold flex items-center gap-2 mb-8 mt-2"><span className="text-2xl">🛍️</span> My Cart</h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Cart Items */}
        <div className="flex-1 bg-white rounded-xl shadow border p-6">
          {cartProducts.length === 0 ? (
            <p className="text-lg text-gray-600">Your cart is empty. Start shopping!</p>
          ) : (
            <>
              <div className="border-b pb-4 mb-4">
                <span className="font-semibold text-gray-700">{cartProducts.length} Item{cartProducts.length > 1 ? 's' : ''}</span>
              </div>
              {cartProducts.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b last:border-b-0">
                  <Image src={item.image} alt={item.imageAlt} width={90} height={90} className="rounded-lg object-cover border" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-semibold text-lg text-gray-900 mb-1">{item.name}</div>
                      {/* Add more details if available */}
                      {/* <div className="text-xs text-gray-500">Color: ... | Size: ...</div> */}
                      <div className="text-sm text-gray-500">In Stock</div>
                    </div>
                    <div className="flex gap-4 items-center mt-2">
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-600 text-xs underline">Remove</button>
                      {/* <button className="text-gray-500 hover:text-amber-700 text-xs underline">Move to Wishlist</button> */}
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between min-w-[120px]">
                    <div className="font-bold text-base text-gray-900">{item.price}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">Qty</span>
                      <select
                        className="border rounded px-2 py-1 text-sm"
                        value={item.qty}
                        onChange={e => updateQty(item.id, Number(e.target.value))}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="font-semibold text-gray-700 mt-2">Total: ₹{(parseFloat(item.price.replace(/[^\d.]/g, "")) * item.qty).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {/* Right: Summary */}
        <div className="w-full md:w-[340px] bg-white rounded-xl shadow border p-6 flex flex-col gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">ENTER PROMO CODE</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={promo}
                onChange={e => setPromo(e.target.value)}
                placeholder="Promo Code"
                className="border rounded px-3 py-2 flex-1 text-sm focus:border-amber-700 outline-none"
              />
              <button className="bg-black text-white px-5 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition">Submit</button>
            </div>
          </div>
          <div className="border-t pt-4 text-sm text-gray-700 flex flex-col gap-2">
            <div className="flex justify-between"><span>Shipping cost</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>- ₹0</span></div>
            <div className="flex justify-between"><span>Tax</span><span>₹0</span></div>
          </div>
          <div className="border-t pt-4 flex flex-col gap-2">
            <div className="flex justify-between text-lg font-bold">
              <span>Estimated Total</span>
              <span>₹{estimatedTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            {/* <div className="text-xs text-red-600">You're ₹100.00 away from free shipping!</div> */}
          </div>
          <Link href="/checkout" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-3 rounded w-full text-center shadow transition-all duration-200 mt-2">Checkout</Link>
        </div>
      </div>
    </main>
  );
} 