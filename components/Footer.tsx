import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
  { href: "/privacy-policy", label: "นโยบายความเป็นส่วนตัว" },
  { href: "/terms", label: "เงื่อนไขการใช้งาน" },
];

export default function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-[#faf6ee]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-burgundy">MU GUIDE THAILAND</p>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl">
            คู่มือเที่ยววัด ไหว้พระ ทำบุญ และเรียนรู้วัฒนธรรมไทยทั่วประเทศ
            รวบรวมข้อมูลสถานที่ ประวัติ วิธีเดินทาง เวลาเปิด และข้อควรรู้ก่อนเดินทาง
          </p>
        </div>

        <nav aria-label="ลิงก์ส่วนท้ายเว็บไซต์" className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-burgundy transition">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
