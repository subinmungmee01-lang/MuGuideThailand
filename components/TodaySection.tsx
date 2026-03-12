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

    <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#f3ead7] to-[#faf6ee]">

      {/* Thai Pattern */}
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] bg-repeat bg-[background-size:10px] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="text-xs md:text-sm tracking-[0.35em] text-amber-700 mb-4">
            ศรัทธา • สิริมงคล • ปัญญา
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold text-[#6b1f1f]">
            เลขและสีมงคลประจำวัน
          </h1>

          <p className="mt-4 text-gray-500 text-base md:text-lg">
            ประจำ {data.dayNameTH}
          </p>

          <div className="mt-8 h-[1px] max-w-xl mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

        </div>

        {/* ================= HERO NUMBER ================= */}

        <div className="relative text-center mb-24">

          {/* Sacred Circle */}
          <div className="absolute left-1/2 top-1/2 w-[320px] md:w-[420px] h-[320px] md:h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200 opacity-40"></div>

          {/* Aura */}
          <div className="absolute left-1/2 top-1/2 w-[420px] md:w-[520px] h-[420px] md:h-[520px] -translate-x-1/2 -translate-y-1/2 bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 w-[260px] md:w-[320px] h-[260px] md:h-[320px] -translate-x-1/2 -translate-y-1/2 bg-yellow-200/20 rounded-full blur-2xl"></div>


          {/* ===== Numbers ===== */}
          <div className="flex justify-center gap-6 sm:gap-10 md:gap-16 relative z-20">

            {data.incenseNumbers.split("").map((num, i) => (

              <div key={i} className="relative flex flex-col items-center">

                {/* Smoke */}
                <img
                  src="/SmokeT.png"
                  alt="incense smoke"
                  className={`
              absolute -top-20 sm:-top-24 w-16 sm:w-20 opacity-70
              ${i === 0 ? "smoke1" : ""}
              ${i === 1 ? "smoke2" : ""}
              ${i === 2 ? "smoke3" : ""}
              `}
                />

                {/* Number */}
                <div
                  className="
              text-[70px]
              sm:text-[90px]
              md:text-[140px]
              font-extrabold
              tracking-[0.1em]
              gold-shine
              drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]
              "
                >
                  {num}
                </div>

                {/* Incense stick */}
                <div className="incense mt-2"></div>

              </div>

            ))}

          </div>


          <p className="mt-10 text-sm text-gray-500 max-w-lg mx-auto">
            เลขธูปเพื่อความเป็นสิริมงคลและแนวทางเชิงสถิติ
            โปรดใช้วิจารณญาณในการตัดสินใจ
          </p>

        </div>


        {/* ================= COLORS ================= */}

        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-amber-100 p-10 md:p-16 text-center">

          <h2 className="text-xl md:text-2xl font-semibold text-[#6b1f1f] mb-10 md:mb-12">
            สีมงคลประจำวัน
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">

            {data.colors.map((color, index) => (

              <div key={index} className="flex flex-col items-center">

                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-xl border-4 border-white hover:scale-110 transition duration-500"
                  style={{ backgroundColor: color }}
                />

                <span className="mt-3 text-sm text-gray-500">
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