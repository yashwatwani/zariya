import React from "react";
import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navTabs = ["All", "Rings", "Pendants", "Bracelets"];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex flex-col items-center border-b border-gray-100">
      {/* Top Row: Logo Centered */}
      <div className="w-full flex items-center justify-between mb-2">
        {/* Left: Empty for spacing */}
        <div className="w-1/4" />
        {/* Center: Logo and Brand Name */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src="/logo.png" // Replace with your actual logo file name
            alt="Jewels by Zariya Logo"
            width={90}
            height={90}
            className="object-contain"
            priority
          />
          <span className="mt-2 text-2xl font-serif font-bold text-gray-900 tracking-wide">JEWELS BY ZARIYA</span>
        </div>
        {/* Right: Icons */}
        <div className="w-1/4 flex justify-end items-center gap-4">
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
      {/* Second Row: Navigation Tabs & Search */}
      <div className="w-full flex items-center justify-between mt-2">
        <nav className="flex gap-8 mx-auto">
          {navTabs.map((tab) => (
            <button
              key={tab}
              className="text-lg font-serif tracking-wide text-gray-800 hover:text-amber-700 transition border-b-2 border-transparent hover:border-amber-700 pb-1 px-2"
            >
              {tab}
            </button>
          ))}
        </nav>
        {/* Search Bar */}
        <div className="flex items-center ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-200 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 bg-white shadow-sm placeholder-gray-400"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 ml-[-2rem]" />
        </div>
      </div>
    </header>
  );
} 