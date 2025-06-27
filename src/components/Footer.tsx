import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation and Refund", href: "/cancellation-and-refund" },
  { label: "Shipping and Delivery", href: "/shipping-and-delivery" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f5ef] border-t border-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-serif font-bold text-gray-900 tracking-wide mb-2">Jewels by Zariya</span>
          <span className="text-sm text-gray-600 font-serif mb-2">Timeless Luxury. Modern Elegance.</span>
          <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Jewels by Zariya. All rights reserved.</span>
        </div>
        <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
          {footerLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-base font-cormorant text-gray-700 hover:text-amber-700 transition underline-offset-4">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
} 