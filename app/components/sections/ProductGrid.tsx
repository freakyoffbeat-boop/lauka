"use client";
import ProductCard from "./ProductCard";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "forest-pack",
    name: "Starter Forest Pack",
    priceINR: 1199,
    mrpINR: 1999, // optional MRP to show discount
    rating: 5,
    image: "/products/product-001/product_0001.png",
    description: "Snap-ready grass blocks, birch tree, water tile & décor.",
    available: true,
  },
  {
    id: "desert-pack",
    name: "Desert Biome Pack",
    priceINR: 1799,
    mrpINR: 1999,
    rating: 4,
    image: "/products/product-002/product_0002.png",
    description: "Sand tiles, cactus pieces, and oasis water block.",
    available: false,
  },
  {
    id: "ocean-pack",
    name: "Ocean Biome Pack",
    priceINR: 1899,
    discountPct: 10, // or specify mrpINR
    rating: 4,
    image: "/products/product-003/product_0003.png",
    description: "Coral, sea grass, and transparent water plates.",
    available: false,
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-[#f5f6f7] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-[family:var(--header-font)]">
            Popular Kits
          </h2>
          <Link href="/products" className="pixel-btn btn-gold">
            View All
          </Link>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p as any} />
          ))}
        </div>
      </div>
    </section>
  );
}