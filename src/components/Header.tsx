import React from "react";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navTabs = ["All", "Rings", "Pendants", "Bracelets"];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      {/* Top Row: Logo centered, icons right-aligned */}
      <div className="flex items-center justify-between px-8 pb-2">
        {/* Logo */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/logo.png"
            alt="Jewels by Zariya Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </div>
        {/* Icons */}
        <div className="flex gap-4 items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <UserIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <HeartIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      {/* Brand Name and Nav Tabs */}
      <div className="flex flex-col items-center pb-2">
        <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide mt-1 mb-1">JEWELS BY ZARIYA</span>
        <nav className="flex gap-14 mt-1">
          {navTabs.map((tab) => (
            <button
              key={tab}
              className="text-lg font-cormorant italic uppercase tracking-wider text-gray-800 hover:text-amber-700 transition border-b-2 border-transparent hover:border-amber-700 pb-1 px-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
} 