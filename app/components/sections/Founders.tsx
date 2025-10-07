"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Export founders so the server page can reuse for SEO JSON-LD, etc.
export const founders = [
  { name: "Ausan Gaming", subs: "300k+", avatar: "/founders/a.png", url: "https://youtube.com/" },
  { name: "Mr Lapis", subs: "1M+",   avatar: "/founders/b.png", url: "https://youtube.com/" },
  { name: "Kapes Haha", subs: "100k+", avatar: "/founders/c.png", url: "https://youtube.com/" }
];

export default function FoundersClient() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-[family:var(--header-font)]">
            Founded by India’s Favorite Minecraft Creators
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            The team behind Lauska builds, teaches, and entertains millions — now bringing voxel magic to real life.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {founders.map((f, i) => (
            <motion.a
              key={f.name}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
              transition={{ type: "spring", stiffness: 240, damping: 24, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-5 border border-gray-200 shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-black/5">
                  {/* Use next/image for perf */}
                  <Image src={f.avatar} alt={f.name} fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <div className="font-[family:var(--header-font)] text-lg">{f.name}</div>
                  <div className="text-sm text-gray-600">{f.subs} subscribers</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                “We made this for every builder who dreams in blocks.”
              </p>
              
              <div className="mt-3 text-sm text-gray-500 group-hover:text-gray-700 transition">
                Visit channel →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}