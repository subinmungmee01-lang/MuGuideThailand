import Link from "next/link";

import { Wallet, Heart, Briefcase, Sparkles, Landmark, MapPinned } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      aria-label="MuGuideThailand คู่มือเที่ยววัด ไหว้พระ และทำบุญทั่วไทย"
    >
      <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[position:85%_center] lg:bg-[position:75%_center]"
          style={{ backgroundImage: "url('/hero-1.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-yellow-600/20 mix-blend-overlay" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28 lg:py-32 grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-xl">
              คู่มือเที่ยววัดทั่วไทย <br />
              ไหว้พระ ทำบุญ วางแผนง่าย
            </h1>

            <p className="text-lg opacity-90 mb-6 max-w-xl drop-shadow leading-relaxed">
              MuGuideThailand รวบรวมข้อมูลวัดดัง สถานที่ศรัทธา ประวัติความเป็นมา
              วิธีเดินทาง เวลาเปิด และข้อควรรู้ก่อนเข้าวัด เพื่อช่วยให้คุณวางแผน
              ทริปไหว้พระและท่องเที่ยวเชิงวัฒนธรรมได้สะดวกขึ้น
            </p>

            <div className="text-sm opacity-90 mb-8 flex flex-wrap gap-4">
              <span className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-400" />
                ไหว้พระ
              </span>

              <span className="flex items-center gap-2">
                <MapPinned className="w-4 h-4 text-amber-400" />
                เส้นทางเที่ยววัด
              </span>

              <span className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-amber-400" />
                ขอพรการงาน/การเงิน
              </span>

              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-400" />
                ขอพรความรัก
              </span>

              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                ข้อมูลเดินทาง
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/temples"
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                <Landmark className="w-5 h-5" />
                รวมวัดดังทั่วไทย
              </Link>

              <Link
                href="/articles"
                className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                อ่านบทความเที่ยววัด
              </Link>

              <Link
                href="/mu"
                className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition"
              >
                <MapPinned className="w-5 h-5" />
                เลือกตามหมวดขอพร
              </Link>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
