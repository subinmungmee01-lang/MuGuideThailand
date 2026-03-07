import Link from "next/link";
import Image from "next/image";
import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";

export default function TempleSection() {

  const featuredTemples = temples.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">

      <h2 className="text-3xl font-semibold text-burgundy text-center mb-12">
        วัดดังแนะนำ
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {featuredTemples.map((temple) => {

          const provinceSlug = provinceToSlug(temple.province);

          return (
            <Link
              key={temple.slug}
              href={`/${temple.region}/${provinceSlug}/${temple.slug}`}
              className="group"
            >

              <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={temple.coverImage.src}
                    alt={temple.coverImage.alt || temple.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold text-burgundy group-hover:text-gold transition">
                    {temple.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    วัดดังในจังหวัด{temple.province}
                  </p>

                </div>

              </article>

            </Link>
          );
        })}

      </div>

    </section>
  );
}