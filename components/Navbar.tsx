"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "เลขธูปวันนี้", href: "/incense" },
    { name: "สีมงคล", href: "/colors" },
    { name: "วัดดัง", href: "/temples" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#f0e6d6] shadow-[0_4px_30px_rgba(0,0,0,0.04)]">

      {/* เส้นทองโลหะ */}
      <div className="h-[3px] bg-gradient-to-r from-[#8C6B1F] via-[#D4AF37] to-[#8C6B1F]" />

      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo Metal Gold */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide bg-[linear-gradient(110deg,#8C6B1F,45%,#D4AF37,55%,#8C6B1F)] bg-clip-text text-transparent"
        >
          MU GUIDE THAILAND
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12 text-[15px] font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition duration-300 ${
                pathname === link.href
                  ? "text-[#651a1a]"
                  : "text-gray-700 hover:text-[#651a1a]"
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-[#C6A75E] to-[#8C6B1F] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          <Link
            href="/articles"
            className="border border-[#651a1a] text-[#651a1a] px-6 py-2 rounded-full hover:bg-[#651a1a] hover:text-white transition duration-300"
          >
            บทความ
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#651a1a]"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#f0e6d6]">
          <span className="font-semibold text-[#651a1a] text-lg">
            เมนู
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={30} className="text-[#651a1a]" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-10 mt-20 text-xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${
                pathname === link.href
                  ? "text-[#651a1a]"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/articles"
            onClick={() => setOpen(false)}
            className="border border-[#651a1a] text-[#651a1a] px-10 py-3 rounded-full"
          >
            บทความ
          </Link>
        </div>
      </div>
    </header>
  );
}
