import Link from "next/link";
import Image from "next/image";

import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";

export default function RandomTempleSection() {

  const randomTemples = temples
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">

      <h2 className="text-3xl font-semibold text-center mb-10">
        วัดยอดนิยมทั่วไทย
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {randomTemples.map((temple) => {

          const provinceSlug = provinceToSlug(temple.province);
          const regionSlug = temple.region;

          const href = `/${regionSlug}/${provinceSlug}/${temple.slug}`;

          return (
            <Link
              key={temple.slug}
              href={href}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition"
            >

              <div className="relative h-48 overflow-hidden">

                <Image
                  src={temple.coverImage?.src ?? "/no-image.jpg"}
                  alt={temple.coverImage?.alt ?? temple.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-5">

                <h3 className="font-semibold text-lg group-hover:text-gold transition">
                  {temple.name}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  จังหวัด{temple.province}
                </p>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}