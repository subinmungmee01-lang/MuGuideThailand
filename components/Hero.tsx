  export default function Hero() {
    return (
      <section className="relative text-white overflow-hidden">

        {/* ความสูง hero ปรับตามขนาดจอ */}
        <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[720px]">

          {/* Background image */}
          <div
            className="
              absolute inset-0
              bg-no-repeat
              bg-cover
              bg-[position:85%_center]
              lg:bg-[position:75%_center]
            "
            style={{ backgroundImage: "url('/hero-1.jpg')" }}
          />

          {/* Overlay ไล่ซ้าย → ขวา เพื่อให้อ่านข้อความชัด */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>

          {/* โทนทองอ่อน ๆ ให้ภาพดูหรู */}
          <div className="absolute inset-0 bg-yellow-600/20 mix-blend-overlay"></div>

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28 lg:py-32 grid md:grid-cols-2 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 drop-shadow-xl">
                รวมเคล็ดลับสายมู <br />
                ครบที่สุดในไทย
              </h1>

              <p className="text-lg opacity-90 mb-8 drop-shadow">
                ดูเลขวันนี้ สีมงคล วัดดัง ขอพรให้ปัง!
              </p>

              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-yellow-600 to-amber-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                  ดูเลขวันนี้
                </button>

                <button className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                  แนะนำวัดดัง
                </button>
              </div>
            </div>

            {/* ช่องขวาเว้นไว้ให้ภาพเด่น ไม่ต้องใส่อะไร */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>
    );
  }
