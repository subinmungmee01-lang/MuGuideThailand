"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {

const pathname = usePathname();

const [open, setOpen] = useState(false);
const [megaOpen, setMegaOpen] = useState<string | null>(null);

const timeoutRef = useRef<NodeJS.Timeout | null>(null);

const openMenu = (menu: string) => {
if (timeoutRef.current) clearTimeout(timeoutRef.current);
setMegaOpen(menu);
};

const closeMenu = () => {
timeoutRef.current = setTimeout(() => {
setMegaOpen(null);
}, 150);
};

const muMenu = [
{ name: "ขอพรการเงิน", href: "/mu/wealth" },
{ name: "ขอพรความรัก", href: "/mu/love" },
{ name: "ขอพรการงาน", href: "/mu/work" },
{ name: "ขอโชคลาภ", href: "/mu/luck" },
{ name: "ขอพรสุขภาพ", href: "/mu/health" },
{ name: "ขอพรธุรกิจ", href: "/mu/business" },
];

const templeMenu = [
{ name: "วัดภาคเหนือ", href: "/north" },
{ name: "วัดภาคกลาง", href: "/central" },
{ name: "วัดภาคอีสาน", href: "/northeast" },
{ name: "วัดภาคใต้", href: "/south" },
{ name: "วัดภาคตะวันออก", href: "/east" },
{ name: "วัดภาคตก", href: "/west" },

];

const linkClass = (href: string) =>
`transition hover:text-[#651a1a] ${
      pathname === href ? "text-[#651a1a] font-semibold" : "text-gray-700"
    }`;

return ( <header
   className="sticky top-0 bg-white shadow-sm z-50"
   onMouseLeave={closeMenu}
 >

  <div className="h-[3px] bg-gradient-to-r from-[#8C6B1F] via-[#D4AF37] to-[#8C6B1F]" />

  <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

    <Link
      href="/"
      className="text-xl md:text-2xl font-bold bg-[linear-gradient(110deg,#8C6B1F,45%,#D4AF37,55%,#8C6B1F)] bg-clip-text text-transparent"
    >
      MU GUIDE THAILAND
    </Link>

    <div className="hidden md:flex items-center gap-10 text-[16px]">

      <Link href="/" className={linkClass("/")}>
        หน้าแรก
      </Link>

      <Link href="/#today" className={linkClass("/incense")}>
        เลขธูปวันนี้
      </Link>

      <button
        onMouseEnter={() => openMenu("mu")}
        className="flex items-center gap-1 hover:text-[#651a1a]"
      >
        วัดขอพร
        <ChevronDown size={16} />
      </button>

      <button
        onMouseEnter={() => openMenu("temple")}
        className="flex items-center gap-1 hover:text-[#651a1a]"
      >
        ค้นหาวัด
        <ChevronDown size={16} />
      </button>

      <Link
        href="/articles"
        className="border border-[#651a1a] text-[#651a1a] px-5 py-2 rounded-full hover:bg-[#651a1a] hover:text-white transition"
      >
        บทความ
      </Link>

    </div>

    <button
      onClick={() => setOpen(true)}
      className="md:hidden text-[#651a1a]"
    >
      <Menu size={28} />
    </button>

  </nav>

  {/* FULL MEGA MENU */}

  {megaOpen && (
    <div
      onMouseEnter={() => openMenu(megaOpen)}
      className="absolute left-0 w-full bg-white border-t shadow-xl"
    >

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-10">

        {megaOpen === "mu" && (
          <>
            <div>
              <h3 className="font-semibold text-[#651a1a] mb-4">
                ขอพรยอดนิยม
              </h3>

              <div className="flex flex-col gap-3">

                {muMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[#651a1a]"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#651a1a] mb-4">
                หมวดหมู่สายมู
              </h3>

              <div className="flex flex-col gap-3">

                <Link href="/mu/luck">ขอโชคลาภ</Link>
                <Link href="/mu/wealth">เสริมดวงการเงิน</Link>
                <Link href="/mu/work">เสริมดวงการงาน</Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#651a1a] mb-4">
                แนะนำ
              </h3>

              <div className="flex flex-col gap-3">

                <Link href="/temples">วัดดังทั่วไทย</Link>
                <Link href="/articles">บทความสายมู</Link>

              </div>
            </div>
          </>
        )}

        {megaOpen === "temple" && (
          <>
            <div>
              <h3 className="font-semibold text-[#651a1a] mb-4">
                ค้นหาวัด
              </h3>

              <div className="flex flex-col gap-3">

                {templeMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[#651a1a]"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#651a1a] mb-4">
                วัดยอดนิยม
              </h3>

              <div className="flex flex-col gap-3">

                <Link href="/wat-phra-kaew">วัดพระแก้ว</Link>
                <Link href="/wat-phra-that-doi-suthep">
                  วัดพระธาตุดอยสุเทพ
                </Link>

              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#651a1a] mb-4">
                เที่ยววัด
              </h3>

              <div className="flex flex-col gap-3">

                <Link href="/articles">บทความเที่ยววัด</Link>

              </div>
            </div>
          </>
        )}

      </div>

    </div>
  )}

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
      <Link href="/#today">เลขธูปวันนี้</Link>
      <Link href="/temples">ค้นหาวัด</Link>
      <Link href="/articles">บทความ</Link>

    </div>

  </div>

</header>


);
}
