export default function TempleSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        วัดดังแนะนำ
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <div className="h-48 bg-gradient-to-br from-yellow-300 to-orange-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                วัดตัวอย่าง {item}
              </h3>
              <p className="text-gray-600 text-sm">
                วัดศักดิ์สิทธิ์ เสริมดวงการงาน การเงิน และความรัก
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
