"use client";

import { useEffect, useState } from "react";

export default function TodaySection() {
  const [tip, setTip] = useState("ตรวจสอบเวลาเปิดและเส้นทางก่อนเดินทางเที่ยววัดทุกครั้ง");

  useEffect(() => {
    fetch("/api/today", { cache: "no-store" })
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.tip) setTip(json.tip);
      })
      .catch(() => undefined);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#f3ead7] to-[#faf6ee]">
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] bg-repeat bg-[background-size:80px] opacity-5 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs md:text-sm tracking-[0.35em] text-amber-700 mb-4">
          TRAVEL TIP
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#6b1f1f]">
          ข้อแนะนำก่อนเที่ยววัดวันนี้
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed bg-white/80 border border-amber-100 rounded-3xl p-8 shadow-sm">
          {tip}
        </p>
      </div>
    </section>
  );
}
