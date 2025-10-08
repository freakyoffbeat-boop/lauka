// app/(routes)/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import { products as ALL } from "@/data/products";

export const metadata = { title: "Shop Products" };

export default function ProductsPage() {
  const items = (ALL || []).filter((p: any) => p && typeof p.slug === "string");

  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-14">
      <h1 className="text-3xl md:text-4xl font-[family:var(--header-font)]">Shop Products</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p: any) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={(Array.isArray(p.images) && typeof p.images[0] === "string" && p.images[0]) || "/placeholder.jpg"}
                alt={p.name || "Product"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold line-clamp-1">{p.name || "Product"}</div>
              {typeof p.price !== "undefined" && (
                <div className="text-sm text-emerald-700 mt-1">
                  {typeof p.price === "number" ? `₹${p.price.toLocaleString("en-IN")}` : String(p.price)}
                </div>
              )}
              {typeof p.short === "string" && <p className="text-xs text-gray-600 mt-1 line-clamp-2">{p.short}</p>}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
