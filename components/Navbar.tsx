"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [muOpen, setMuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "เลขธูปวันนี้", href: "/incense" },
    { name: "สีมงคล", href: "/colors" },
    { name: "วัดดัง", href: "/temples" },
  ];

  const muLinks = [
    { name: "ขอพรการเงิน", href: "/mu/wealth" },
    { name: "ขอพรความรัก", href: "/mu/love" },
    { name: "ขอพรการงาน", href: "/mu/work" },
    { name: "ขอโชคลาภ", href: "/mu/luck" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#f0e6d6] shadow-sm">

      {/* เส้นทอง */}
      <div className="h-[3px] bg-gradient-to-r from-[#8C6B1F] via-[#D4AF37] to-[#8C6B1F]" />

      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-wide bg-[linear-gradient(110deg,#8C6B1F,45%,#D4AF37,55%,#8C6B1F)] bg-clip-text text-transparent"
        >
          MU GUIDE THAILAND
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">

          <Link
            href="/"
            className={`transition ${
              pathname === "/" ? "text-[#651a1a]" : "text-gray-700 hover:text-[#651a1a]"
            }`}
          >
            หน้าแรก
          </Link>

          {/* MU Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMuOpen(true)}
            onMouseLeave={() => setMuOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#651a1a]">
              วัดขอพร
              <ChevronDown size={16} />
            </button>

            {muOpen && (
              <div className="absolute top-8 left-0 bg-white border border-gray-100 rounded-xl shadow-lg p-4 w-48">

                {muLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm text-gray-700 hover:text-[#651a1a]"
                  >
                    {link.name}
                  </Link>
                ))}

              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-[#651a1a]"
                  : "text-gray-700 hover:text-[#651a1a]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Articles */}
          <Link
            href="/articles"
            className="border border-[#651a1a] text-[#651a1a] px-5 py-2 rounded-full hover:bg-[#651a1a] hover:text-white transition"
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

        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <span className="text-lg font-semibold text-[#651a1a]">เมนู</span>
          <button onClick={() => setOpen(false)}>
            <X size={30} className="text-[#651a1a]" />
          </button>
        </div>

        <div className="flex flex-col gap-8 mt-14 px-8 text-lg">

          <Link href="/" onClick={() => setOpen(false)}>
            หน้าแรก
          </Link>

          <Link href="/incense" onClick={() => setOpen(false)}>
            เลขธูปวันนี้
          </Link>

          <Link href="/colors" onClick={() => setOpen(false)}>
            สีมงคล
          </Link>

          <Link href="/mu/wealth" onClick={() => setOpen(false)}>
            วัดขอพรการเงิน
          </Link>

          <Link href="/mu/love" onClick={() => setOpen(false)}>
            วัดขอพรความรัก
          </Link>

          <Link href="/temples" onClick={() => setOpen(false)}>
            วัดดัง
          </Link>

          <Link
            href="/articles"
            onClick={() => setOpen(false)}
            className="border border-[#651a1a] text-[#651a1a] px-6 py-3 rounded-full text-center"
          >
            บทความ
          </Link>

        </div>
      </div>
    </header>
  );
}