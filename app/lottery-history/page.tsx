// app/lottery-history/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { lotteryHistory } from "@/data/lotteryHistory";

export const metadata: Metadata = {
  title: "สถิติหวยย้อนหลัง 3 ตัวบน 2 ตัวล่าง | MU GUIDE THAILAND",
  description:
    "รวมสถิติหวยย้อนหลัง 3 ตัวบน และ 2 ตัวล่าง แบบตารางดูง่าย เรียงจากงวดล่าสุดย้อนหลัง",
  alternates: {
    canonical: "https://www.muguide-thailand.com/lottery-history",
  },
  openGraph: {
    title: "สถิติหวยย้อนหลัง 3 ตัวบน 2 ตัวล่าง | MU GUIDE THAILAND",
    description:
      "รวมสถิติหวยย้อนหลัง 3 ตัวบน และ 2 ตัวล่าง แบบตารางดูง่าย เรียงจากงวดล่าสุดย้อนหลัง",
    url: "https://www.muguide-thailand.com/lottery-history",
    siteName: "MU GUIDE THAILAND",
    locale: "th_TH",
    type: "website",
  },
};

export default function LotteryHistoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 pt-10 md:pt-14 pb-8">
        <nav className="text-sm flex items-center gap-2 mb-6 text-gray-500">
          <Link href="/" className="hover:text-burgundy transition">
            หน้าแรก
          </Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">
            สถิติหวยย้อนหลัง
          </span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-burgundy leading-snug">
            ตารางสถิติย้อนหลัง 3 ตัวบน 2 ตัวล่าง
          </h1>

          <p className="text-gray-600 mt-3 leading-relaxed">
            รวมผลย้อนหลังในรูปแบบตาราง อ่านง่าย ดูสะดวก
            โดยดึงข้อมูลจากประวัติที่คุณมีอยู่แล้ว
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] bg-white">
              <thead className="bg-[#f8f4ec]">
                <tr>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-burgundy border-b">
                    งวดวันที่
                  </th>
                  <th className="text-center px-5 py-4 text-sm font-semibold text-burgundy border-b">
                    3 ตัวบน
                  </th>
                  <th className="text-center px-5 py-4 text-sm font-semibold text-burgundy border-b">
                    2 ตัวล่าง
                  </th>
                </tr>
              </thead>

              <tbody>
                {lotteryHistory.map((item, index) => (
                  <tr
                    key={`${item.date}-${index}`}
                    className="odd:bg-white even:bg-gray-50/60 hover:bg-yellow-50/40 transition"
                  >
                    <td className="px-5 py-4 text-gray-700 border-b border-gray-100 whitespace-nowrap">
                      {item.date}
                    </td>

                    <td className="px-5 py-4 text-center border-b border-gray-100">
                      <span className="inline-flex min-w-[88px] justify-center rounded-xl bg-[#fff7e8] px-4 py-2 font-semibold text-burgundy tracking-[0.2em]">
                        {item.threeFront}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-center border-b border-gray-100">
                      <span className="inline-flex min-w-[72px] justify-center rounded-xl bg-[#f3f4f6] px-4 py-2 font-semibold text-gray-800 tracking-[0.2em]">
                        {item.threeBack}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold text-burgundy mb-4">
            ดูสถิติย้อนหลังได้อย่างไร
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            หน้านี้รวบรวมข้อมูลย้อนหลังของเลข 3 ตัวบน และ 2 ตัวล่าง
            โดยแสดงเป็นตารางเรียงจากงวดล่าสุดไปย้อนหลัง
            เพื่อให้ตรวจสอบข้อมูลได้ง่ายในหน้าเดียว
          </p>

          <p className="text-gray-700 leading-relaxed">
            คุณสามารถใช้หน้านี้สำหรับดูผลย้อนหลัง
            หรือใช้เป็นหน้ารวมข้อมูลสถิติเลขย้อนหลังภายในเว็บไซต์ได้ทันที
          </p>
        </div>
      </section>
    </main>
  );
}