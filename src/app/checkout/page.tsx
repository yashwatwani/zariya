"use client";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "../../utils/supabaseClient";
import Link from "next/link";

export default function CheckoutPage() {
  const { getCartProducts, subtotal } = useCart();
  const cartProducts = getCartProducts();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [form, setForm] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pin: '',
  });
  const [createAccount, setCreateAccount] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
        setForm(f => ({
          ...f,
          email: data.user.email || '',
          phone: data.user.user_metadata?.phone || '',
          firstName: data.user.user_metadata?.name?.split(' ')[0] || '',
          lastName: data.user.user_metadata?.name?.split(' ').slice(1).join(' ') || '',
        }));
      }
    });
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <main className="flex flex-col items-center min-h-[60vh] py-16 bg-[#f8f5ef]">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-8 text-amber-800">Thank you for your order!</h1>
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
            <p className="text-lg text-gray-700 mb-6 font-sans">A confirmation has been sent to {form.email || 'your email'}.</p>
            <p className="mb-4 text-gray-700 font-sans">Want to track your order and save your details for next time?</p>
            <button
              className="bg-black hover:bg-gray-900 text-white py-3 px-8 rounded-full font-serif text-lg shadow transition mb-2"
              onClick={() => setCreateAccount(true)}
            >
              Create an Account
            </button>
            {createAccount && (
              <div className="mt-4 w-full">
                <p className="mb-2 text-gray-700 font-sans">(Account creation form goes here. Pre-fill with email: {form.email})</p>
                {/* Registration logic here */}
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-[60vh] py-16 bg-[#f8f5ef] px-2">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-10 text-gray-900">Checkout</h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full mb-8">
            {user ? (
              <div className="mb-4 text-green-700 font-serif text-base">Welcome back, {user.user_metadata?.name || user.email}! <span className="text-xs text-gray-500 font-sans">(Not you? <Link href='/profile?redirect=checkout' className='underline'>Logout</Link>)</span></div>
            ) : (
              <div className="mb-4 text-gray-700 font-serif text-base">Already have an account? <Link href='/profile?redirect=checkout' className='text-amber-700 underline'>Log in</Link> for faster checkout.</div>
            )}
            <form onSubmit={handleSubmit} className="font-sans">
              <h2 className="text-2xl font-serif font-bold mb-6 text-amber-700">Contact</h2>
              <input name="email" type="email" required placeholder="Email or mobile phone number" value={form.email} onChange={handleChange} className="mb-4 w-full border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
              <input name="phone" type="tel" required placeholder="Phone number" value={form.phone} onChange={handleChange} className="mb-4 w-full border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
              <h2 className="text-2xl font-serif font-bold mb-6 text-amber-700 mt-8">Delivery</h2>
              <div className="flex gap-4 mb-4">
                <input name="firstName" type="text" required placeholder="First name" value={form.firstName} onChange={handleChange} className="w-1/2 border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
                <input name="lastName" type="text" required placeholder="Last name" value={form.lastName} onChange={handleChange} className="w-1/2 border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
              </div>
              <input name="address" type="text" required placeholder="Address" value={form.address} onChange={handleChange} className="mb-4 w-full border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
              <input name="apartment" type="text" placeholder="Apartment, suite, etc. (optional)" value={form.apartment} onChange={handleChange} className="mb-4 w-full border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
              <div className="flex gap-4 mb-4">
                <input name="city" type="text" required placeholder="City" value={form.city} onChange={handleChange} className="w-1/2 border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
                <input name="state" type="text" required placeholder="State" value={form.state} onChange={handleChange} className="w-1/4 border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
                <input name="pin" type="text" required placeholder="PIN code" value={form.pin} onChange={handleChange} className="w-1/4 border-b-2 border-gray-200 py-3 px-2 focus:border-amber-700 outline-none rounded-none font-sans text-base" />
              </div>
              <button type="submit" className="bg-black hover:bg-gray-900 text-white font-bold text-lg py-3 rounded-full w-full shadow transition mt-8 font-sans">Pay</button>
              <p className="text-xs text-gray-400 mt-2 font-sans">(Razorpay integration coming soon)</p>
            </form>
          </div>
          {/* Right: Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
            <h2 className="text-2xl font-serif font-bold mb-6 text-amber-700">Order Summary</h2>
            {cartProducts.length === 0 ? (
              <p className="text-gray-600 font-sans">Your cart is empty.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {cartProducts.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                    <Image src={item.image} alt={item.imageAlt} width={60} height={60} className="rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-serif text-base font-semibold">{item.name}</div>
                      <div className="text-amber-700 font-bold font-sans">{item.price}</div>
                      <div className="text-gray-500 text-sm font-sans">Qty: {item.qty}</div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4">
                  <div className="text-lg font-serif font-bold">Subtotal:</div>
                  <div className="text-lg font-bold text-amber-700 font-sans">₹{subtotal.toFixed(2)}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 