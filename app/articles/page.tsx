import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata = {
  title: "บทความสายมู ไหว้พระ ขอพร และเที่ยววัด | MuGuideThailand",
  description:
    "รวมบทความเกี่ยวกับวัด เลขธูป สีมงคล และความเชื่อของคนไทย",
};

export default function ArticlesPage() {
  return (
    <main className="relative bg-gradient-to-b from-[#faf6ee] via-[#f3ead7] to-[#faf6ee]">

      {/* Thai Pattern */}
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] opacity-5 pointer-events-none"></div>

      <section className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">
            MU GUIDE THAILAND
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#6b1f1f]">
            บทความสายมู
          </h1>

          <p className="text-gray-500 mt-4">
            รวมบทความเกี่ยวกับวัด เลขธูป สีมงคล และความเชื่อของคนไทย
          </p>

          <div className="mt-8 h-[1px] max-w-xl mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-10">

          {articles.map((article) => (

            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group"
            >

              <article className="bg-white/90 backdrop-blur border border-amber-100 rounded-[2rem] p-8 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl">

                <h2 className="text-xl font-semibold text-[#6b1f1f] group-hover:text-amber-600 transition mb-3">
                  {article.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

              </article>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}