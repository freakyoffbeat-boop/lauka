"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ForestPackPage() {
  return (
    <main className="bg-[#f7f8f9] text-[#111] font-sans">
      {/* --- Hero Section --- */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-[family:var(--header-font)] leading-tight"
          >
            Starter Forest Pack
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700">
            Bring your Minecraft builds to life with vibrant grassy terrains, birch trees, and water décor tiles — made with high-quality, magnetic modular blocks.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>🌳 Realistic block texture inspired by forest biomes</li>
            <li>💧 Snap-fit magnetic system for instant setup</li>
            <li>🪵 Modular tiles compatible with all Lauska packs</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-bold text-green-700">₹1999</span>
            <span className="text-gray-500 line-through text-lg">₹2499</span>
          </div>
          <div className="mt-6 flex gap-3">
            <Link
              href="https://wa.link/6b0n4j"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn bg-green-500 hover:brightness-110 text-white text-lg"
            >
              🛒 Buy on WhatsApp
            </Link>
            <Link href="/products" className="pixel-btn bg-yellow-400 hover:brightness-105 text-black">
              ← Back to Products
            </Link>
          </div>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden shadow-xl border-4 border-black"
        >
          <Image
            src="/products/product-001/product_0001.png"
            alt="Starter Forest Pack"
            width={700}
            height={600}
            className="object-cover w-full h-auto"
          />
        </motion.div>
      </section>

      {/* --- Highlights Section --- */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-[family:var(--header-font)] text-center mb-12">
            Product Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-[#f5fff7] rounded-lg border border-green-200 shadow-inner">
              <Image src="/products/product-001/product_0001_2.png" alt="" width={250} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Vibrant Green Tiles</h3>
              <p className="text-gray-700 mt-2">
                Designed to emulate lush biomes with subtle texture lighting.
              </p>
            </div>
            <div className="p-6 bg-[#f7faff] rounded-lg border border-blue-200 shadow-inner">
              <Image src="/products/product-001/product_0001_3.png" alt="" width={250} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Magnetic Snap Fit</h3>
              <p className="text-gray-700 mt-2">
                Build large landscapes seamlessly with magnetic edges.
              </p>
            </div>
            <div className="p-6 bg-[#fffaf3] rounded-lg border border-amber-200 shadow-inner">
              <Image src="/products/product-001/product_0001_4.png" alt="" width={250} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Water Tile Decor</h3>
              <p className="text-gray-700 mt-2">
                Add rivers or ponds easily using transparent blue tiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Specifications --- */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-[family:var(--header-font)] text-center mb-10">
          Specifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Material:</strong> ABS + Magnetic polymer</li>
              <li><strong>Dimensions:</strong> 4x4x1 inch blocks</li>
              <li><strong>Weight:</strong> 680g total set</li>
              <li><strong>Tiles per pack:</strong> 24 tiles + 3 decor elements</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Finish:</strong> Matte texture with UV protection</li>
              <li><strong>Compatibility:</strong> All Lauska modular products</li>
              <li><strong>Included:</strong> Manual + storage pouch</li>
              <li><strong>Warranty:</strong> 1 year (breakage protection)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="bg-[#f1f1f1] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-[family:var(--header-font)] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer font-semibold">Is this compatible with Desert or Ocean packs?</summary>
            <p className="mt-2 text-gray-700">
              Yes, all Lauska packs use the same modular grid and magnet alignment system.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer font-semibold">Are replacement tiles available?</summary>
            <p className="mt-2 text-gray-700">
              You can order individual replacements via our WhatsApp store directly.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer font-semibold">What’s inside the box?</summary>
            <p className="mt-2 text-gray-700">
              Each pack includes forest tiles, water décor, connectors, and one Lauska pouch.
            </p>
          </details>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="bg-[#121212] text-white py-16 text-center">
        <h2 className="text-3xl font-[family:var(--header-font)] mb-4">
          Ready to Build Your World?
        </h2>
        <p className="text-gray-400 mb-6">
          Start your creative journey with Lauska modular blocks.
        </p>
        <Link
          href="https://wa.link/6b0n4j"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn bg-green-500 hover:brightness-110 text-white text-lg"
        >
          🟩 Order Now on WhatsApp
        </Link>
      </section>
    </main>
  );
}