"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);

  const muMenu = [
    { name: "ขอพรการเงิน", href: "/mu/wealth" },
    { name: "ขอพรความรัก", href: "/mu/love" },
    { name: "ขอพรการงาน", href: "/mu/work" },
    { name: "ขอโชคลาภ", href: "/mu/luck" },
    { name: "ขอพรสุขภาพ", href: "/mu/health" },
    { name: "ขอพรธุรกิจ", href: "/mu/business" },
  ];

  const templeMenu = [
    { name: "วัดดังทั่วไทย", href: "/temples" },
    { name: "วัดภาคเหนือ", href: "/north" },
    { name: "วัดภาคกลาง", href: "/central" },
    { name: "วัดภาคอีสาน", href: "/northeast" },
    { name: "วัดภาคใต้", href: "/south" },
    { name: "วัดภาคตะวันออก", href: "/east" },
  ];

  const linkClass = (href: string) =>
    `transition hover:text-[#651a1a] ${
      pathname === href ? "text-[#651a1a] font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">

      {/* เส้นทอง */}
      <div className="h-[3px] bg-gradient-to-r from-[#8C6B1F] via-[#D4AF37] to-[#8C6B1F]" />

      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold bg-[linear-gradient(110deg,#8C6B1F,45%,#D4AF37,55%,#8C6B1F)] bg-clip-text text-transparent"
        >
          MU GUIDE THAILAND
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-[16px]">

          <Link href="/" className={linkClass("/")}>
            หน้าแรก
          </Link>

          <Link href="/incense" className={linkClass("/incense")}>
            เลขธูปวันนี้
          </Link>

          <Link href="/colors" className={linkClass("/colors")}>
            สีมงคล
          </Link>

          {/* MU MENU */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("mu")}
            onMouseLeave={() => setMegaOpen(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#651a1a]">
              วัดขอพร
              <ChevronDown size={16} />
            </button>

            {megaOpen === "mu" && (
              <div className="absolute left-0 top-10 w-[440px] bg-white shadow-2xl border rounded-2xl p-6 animate-fadeIn">

                <p className="font-semibold text-[#651a1a] mb-4">
                  ขอพรเรื่องอะไร
                </p>

                <div className="grid grid-cols-2 gap-4">

                  {muMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-[#651a1a] transition"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>

              </div>
            )}
          </div>

          {/* TEMPLE MENU */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("temple")}
            onMouseLeave={() => setMegaOpen(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#651a1a]">
              ค้นหาวัด
              <ChevronDown size={16} />
            </button>

            {megaOpen === "temple" && (
              <div className="absolute left-0 top-10 w-[520px] bg-white shadow-2xl border rounded-2xl p-6 animate-fadeIn">

                <p className="font-semibold text-[#651a1a] mb-4">
                  ค้นหาวัดตามภูมิภาค
                </p>

                <div className="grid grid-cols-3 gap-4">

                  {templeMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-[#651a1a] transition"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>

              </div>
            )}
          </div>

          <Link
            href="/articles"
            className="border border-[#651a1a] text-[#651a1a] px-5 py-2 rounded-full hover:bg-[#651a1a] hover:text-white transition"
          >
            บทความ
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#651a1a]"
        >
          <Menu size={28} />
        </button>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-500 md:hidden overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between p-6 border-b">
          <span className="font-semibold">เมนู</span>
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-8 text-[18px]">

          <Link href="/">หน้าแรก</Link>
          <Link href="/incense">เลขธูปวันนี้</Link>
          <Link href="/colors">สีมงคล</Link>

          <p className="text-sm text-gray-400 mt-6">วัดขอพร</p>

          {muMenu.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}

          <p className="text-sm text-gray-400 mt-6">ค้นหาวัด</p>

          {templeMenu.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}

        </div>

      </div>

    </header>
  );
}