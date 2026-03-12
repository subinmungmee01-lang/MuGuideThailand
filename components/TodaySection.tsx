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
    const fetchData = () => {
      fetch("/api/today", { cache: "no-store" })
        .then((res) => res.json())
        .then((json) => {
          if (json.success) setData(json);
        });
    };

    fetchData();

    const interval = setInterval(fetchData, 3600000); // 1 ชั่วโมง

    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <section className="py-32 text-center text-gray-400 text-lg">
        กำลังจัดเตรียมเลขมงคล...
      </section>
    );
  }

  return (

    <section className="relative py-40 overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#f3ead7] to-[#faf6ee]">

      {/* Thai Pattern */}
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] bg-repeat opacity-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm tracking-[0.45em] text-amber-700 mb-4">
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


        {/* ================= HERO NUMBER ================= */}

        <div className="relative text-center mb-28">

          {/* Sacred Circle */}
          <div className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200 opacity-40"></div>

          {/* Aura */}
          <div className="absolute left-1/2 top-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-amber-200/30 rounded-full blur-2xl"></div>

          <div className="smoke-container">

            <img
              src="/SmokeT.png"
              alt="incense smoke"
              className="smoke-img smoke1"
            />

            <img
              src="/SmokeT.png"
              alt="incense smoke"
              className="smoke-img smoke2"
            />

            <img
              src="/SmokeT.png"
              alt="incense smoke"
              className="smoke-img smoke3"
            />

          </div>


          <h2 className="relative text-3xl font-semibold text-[#6b1f1f] mb-10">
            เลขธูปมงคลงวดนี้
          </h2>


          {/* Sacred Number */}
          <div
            className="
            relative z-20
            text-[90px]
            md:text-[140px]
            font-extrabold
            tracking-[0.55em]
            bg-gradient-to-b
            from-amber-300
            via-amber-500
            to-amber-700
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_30px_rgba(180,140,60,0.45)]
            "
          >
            {data.incenseNumbers}
          </div>

          <p className="mt-12 text-sm text-gray-500 max-w-lg mx-auto">
            เลขธูปเพื่อความเป็นสิริมงคลและแนวทางเชิงสถิติ
            โปรดใช้วิจารณญาณในการตัดสินใจ
          </p>

        </div>


        {/* ================= COLORS ================= */}

        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-amber-100 p-16 text-center">

          <h2 className="text-2xl font-semibold text-[#6b1f1f] mb-12">
            สีมงคลประจำวัน
          </h2>

          <div className="flex flex-wrap justify-center gap-12">

            {data.colors.map((color, index) => (
              <div key={index} className="flex flex-col items-center">

                <div
                  className="w-24 h-24 rounded-full shadow-xl border-4 border-white hover:scale-110 transition duration-500"
                  style={{ backgroundColor: color }}
                />

                <span className="mt-4 text-sm text-gray-500">
                  สีมงคล
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>

  );
}