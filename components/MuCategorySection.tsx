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
      title: "วัดขอโชคลาภ",
      icon: "🎰",
      href: "/mu/luck",
    },
  ];

  export default function MuCategorySection() {

    return (
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-semibold text-center mb-10">
          วัดสายมูยอดนิยม
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {muCategories.map((cat) => (

            <Link
              key={cat.title}
              href={cat.href}
              className="p-6 bg-white border rounded-2xl hover:shadow-xl transition text-center"
            >

              <div className="text-3xl mb-3">
                {cat.icon}
              </div>

              <h3 className="font-semibold">
                {cat.title}
              </h3>

            </Link>

          ))}

        </div>

      </section>
    );
  }