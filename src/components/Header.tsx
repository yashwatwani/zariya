"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navTabs = [
  { label: "All", href: "/" },
  { label: "Rings", href: "/?category=Rings" },
  { label: "Pendants", href: "/?category=Pendants" },
  { label: "Bracelets", href: "/?category=Bracelets" },
];

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      {/* Announcement Bar */}
      <div className="w-full bg-[#f8f5ef] text-center text-sm text-gray-700 py-1 border-b border-gray-200 tracking-wide font-serif">
        FREE Shipping On ₹500+ Order✨
      </div>
      {/* Main Nav Row: Centered logo + text */}
      <div className="flex items-center justify-between px-8 py-2">
        {/* Left (empty for centering) */}
        <div className="flex-1" />
        {/* Center: Logo + Brand */}
        <div className="flex items-center gap-4 justify-center">
          <Image
            src="/logo.png"
            alt="Jewels by Zariya Logo"
            width={30}
            height={30}
            className="object-contain"
            priority
          />
          <span className="text-xl font-serif font-bold text-gray-900 tracking-wide" style={{ whiteSpace: 'nowrap' }}>
            JEWELS BY ZARIYA
          </span>
        </div>
        {/* Right: Icons */}
        <div className="flex gap-4 items-center flex-1 justify-end">
          <Link href="/profile" className="p-2 hover:bg-gray-100 rounded-full transition">
            <UserIcon className="h-6 w-6 text-gray-700" />
          </Link>
          <Link href="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition">
            <HeartIcon className="h-6 w-6 text-gray-700" />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition">
            <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
          </Link>
        </div>
      </div>
      {/* Nav Tabs Centered Below */}
      <nav className="flex justify-center gap-14 mt-1 pb-2">
        {navTabs.map((tab) => {
          const isActive = tab.label === currentCategory;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`text-lg font-cormorant tracking-wide hover:text-amber-700 transition border-b-2 pb-1 px-2 ${isActive ? "border-amber-700 text-amber-700" : "border-transparent text-gray-800"}`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
} 