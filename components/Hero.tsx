import Link from "next/link";

import {
  Wallet,
  Heart,
  Briefcase,
  Sparkles,
  Landmark,
  Dice5
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      aria-label="MuGuideThailand สายมู ไหว้พระ ขอพร วัดดังทั่วไทย"
    >
      <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[720px]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[position:85%_center] lg:bg-[position:75%_center]"
          style={{ backgroundImage: "url('/hero-1.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

        {/* Gold overlay */}
        <div className="absolute inset-0 bg-yellow-600/20 mix-blend-overlay" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28 lg:py-32 grid md:grid-cols-2 items-center">

          {/* TEXT */}
          <div>

            {/* SEO H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-xl">
              รวมวัดดังทั่วไทย <br />
              ไหว้พระ ขอพร เสริมดวงสายมู
            </h1>

            {/* SEO paragraph */}
            <p className="text-lg opacity-90 mb-6 max-w-xl drop-shadow">
              MuGuideThailand เว็บไซต์รวมสถานที่
              <strong> ไหว้พระ ทำบุญ ขอพร วัดดังทั่วไทย</strong>
              สำหรับสายมูโดยเฉพาะ พร้อมแนะนำ
              <strong> เลขมงคล สีมงคลประจำวัน </strong>
              และพิกัดวัดศักดิ์สิทธิ์ที่คนไทยนิยมไปขอพร
              ทั้งเรื่องการเงิน ความรัก การงาน และโชคลาภ
            </p>

            {/* Keyword cluster */}
            <div className="text-sm opacity-90 mb-8 flex flex-wrap gap-4">

              <span className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-400" />
                ไหว้พระ
              </span>

              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                ขอพร
              </span>

              <span className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-amber-400" />
                เสริมดวงการเงิน
              </span>

              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-400" />
                ขอพรความรัก
              </span>

              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                เสริมดวงการงาน
              </span>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

              <Link
                href="/#today"
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                <Dice5 className="w-5 h-5" />
                ดูเลขมงคลวันนี้
              </Link>

              <Link
                href="/temples"
                className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              >
                <Landmark className="w-5 h-5 text-amber-500" />
                รวมวัดดังทั่วไทย
              </Link>

              <Link
                href="/mu"
                className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition"
              >
                <Sparkles className="w-5 h-5" />
                สายมูทั้งหมด
              </Link>

            </div>

          </div>

          {/* Right space for image */}
          <div className="hidden md:block" />

        </div>
      </div>
    </section>
  );
}