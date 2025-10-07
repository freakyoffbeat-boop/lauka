"use client";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  priceINR: number;          // selling price
  mrpINR?: number;           // optional MRP (to compute discount)
  discountPct?: number;      // optional explicit discount %
  rating?: number;           // 0..5 (optional)
  image: string;
  description: string;
  available: boolean;
};

export default function ProductCard({ p }: { p: Product }) {
  // Compute discount if we have enough info
  const mrp = p.mrpINR ?? (p.discountPct ? Math.round(p.priceINR / (1 - p.discountPct / 100)) : undefined);
  const pct =
    typeof p.discountPct === "number"
      ? p.discountPct
      : mrp
      ? Math.max(0, Math.round(((mrp - p.priceINR) / mrp) * 100))
      : undefined;

  // Rating to stars (optional)
  const stars = Array.from({ length: 5 }, (_, i) => i < (p.rating ?? 0));

  return (
    <div className="relative rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
      {/* Ribbon */}
      <span className={`ribbon ${p.available ? "available" : "soon"}`}>
        {p.available ? "Available" : "Coming Soon"}
      </span>

      {/* Discount chip (if any) */}
      {typeof pct === "number" && pct > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-rose-500 text-white text-xs font-extrabold px-2 py-1 border-2 border-black shadow-[0_2px_0_#000]">
          {pct}% OFF
        </span>
      )}

      {/* Image */}
      <Link href={`/products/${p.id}`} aria-label={`Open ${p.name}`}>
        <div className="relative aspect-[4/3]">
          <Image
            src={p.image}
            alt={p.name}
            fill
            className={`object-cover ${p.available ? "" : "opacity-90"}`}
            sizes="(max-width:768px) 100vw, 33vw"
            priority={p.available}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/products/${p.id}`} className="block group">
          <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">
            {p.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
        </Link>

        {/* Price / MRP / Stars */}
        <div className="mt-3 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-2">
              <div className="text-xl font-extrabold">₹{p.priceINR}</div>
              {mrp && mrp > p.priceINR && (
                <div className="text-sm text-gray-500 line-through">₹{mrp}</div>
              )}
            </div>
            {typeof pct === "number" && pct > 0 && (
              <div className="text-xs text-rose-600 font-bold">Save {pct}%</div>
            )}
          </div>

          {typeof p.rating === "number" && (
            <div className="flex gap-0.5" aria-label={`${p.rating} stars`}>
              {stars.map((on, i) => (
                <span key={i} className={on ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA — always to PDP */}
        <div className="mt-4">
          <Link
            href={`/products/${p.id}`}
            className={`pixel-btn ${p.available ? "bg-[#f5f5f5]" : "bg-[#f5f5f5]"}`}
          >
            {p.available ? "View details" : "Preview details"}
          </Link>
        </div>
      </div>
    </div>
  );
}