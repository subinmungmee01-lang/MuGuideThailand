"use client";

import { useEffect, useState } from "react";

interface TodayData {
  dayNameTH: string;
  colors: string[];
  incenseNumbers: string;
}

export default function TodaySection() {
  const [data, setData] = useState<TodayData | null>(null);

  useEffect(() => {
    fetch("/api/today")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setData(json);
      });
  }, []);

  if (!data) {
    return (
      <section className="py-32 text-center text-gray-400 text-lg">
        กำลังจัดเตรียมเลขมงคล...
      </section>
    );
  }

  return (
    <section className="relative py-36 overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#f4ecdd] to-[#faf6ee]">

      {/* ลายไทยจางมาก */}
      <div className="absolute inset-0 opacity-[0.035] bg-[url('/thai-pattern.png')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header พิธีการ */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.4em] text-amber-700 mb-4">
            ศรัทธา • สิริมงคล • ปัญญา
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6b1f1f]">
            เลขและสีมงคลประจำวัน
          </h1>
          <p className="mt-6 text-gray-500 text-lg">
            ประจำ{data.dayNameTH}
          </p>
          <div className="mt-10 h-[1px] max-w-xl mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-stretch">

          {/* เลขธูป มหามงคล */}
          <div className="md:col-span-3 relative bg-white/85 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-amber-100 p-20 text-center overflow-hidden">

            {/* Aura Animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <h2 className="relative text-4xl font-semibold text-[#6b1f1f] mb-10">
              เลขธูปมงคลงวดนี้
            </h2>

            <div className="relative text-7xl md:text-8xl font-extrabold tracking-[0.7em] text-amber-600 drop-shadow-[0_0_20px_rgba(180,140,60,0.35)]">
              {data.incenseNumbers}
            </div>

            <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

            <p className="mt-8 text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
              เพื่อความเป็นสิริมงคลและแนวทางเชิงสถิติ
              โปรดใช้วิจารณญาณในการตัดสินใจ
            </p>
          </div>

          {/* เส้นทองกลางจอ */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-[1px] h-3/4 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* สีมงคล */}
          <div className="md:col-span-1 bg-white/85 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-amber-100 p-16 text-center">

            <h2 className="text-2xl font-semibold text-[#6b1f1f] mb-8">
              สีมงคล
            </h2>

            <div className="flex flex-col items-center gap-10">
              {data.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-24 h-24 rounded-full shadow-2xl border-4 border-white transition duration-500 hover:scale-110"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="mt-14 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

            <p className="mt-6 text-sm text-gray-500">
              เสริมพลังศรัทธาและความมั่นใจ
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}