import Link from "next/link";

const muCategories = [
  {
    title: "วัดขอพรการเงิน",
    icon: "💰",
    href: "/mu/wealth",
  },
  {
    title: "วัดขอพรความรัก",
    icon: "💘",
    href: "/mu/love",
  },
  {
    title: "วัดขอพรการงาน",
    icon: "🎯",
    href: "/mu/work",
  },
  {
    title: "วัดขอพรความสำเร็จ",
    icon: "🏆",
    href: "/mu/success",
  },
  {
    title: "วัดขอโชคลาภ",
    icon: "🎰",
    href: "/mu/luck",
  },
  {
    title: "วัดขอพรสุขภาพ",
    icon: "🧘",
    href: "/mu/health",
  },
];

export default function MuCategorySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <h2 className="text-3xl font-semibold text-center mb-10">
        วัดสายมูยอดนิยม
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {muCategories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="p-6 bg-white border rounded-2xl hover:shadow-xl transition text-center group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">
              {cat.icon}
            </div>

            <h3 className="font-semibold text-sm">
              {cat.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}