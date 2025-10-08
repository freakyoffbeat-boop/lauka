// app/(routes)/products/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products as ALL } from "@/data/products";

// JSON-safe product shape we consume
type Product = {
  slug: string;
  name: string;
  price: number | string;
  short?: string;
  images?: unknown[];
  features?: unknown[];
  age?: string;
  magnets?: string;
  inStock?: boolean;
};

function asStrings(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x) => typeof x === "string") as string[];
}

function asNumber(n: unknown): number | null {
  if (typeof n === "number") return n;
  if (typeof n === "string") {
    const parsed = Number(n.replace(/[^\d.]/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

export async function generateStaticParams() {
  return (ALL as Product[])
    .map((p) => p?.slug)
    .filter((s): s is string => typeof s === "string")
    .map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = (ALL as Product[]).find((x) => x.slug === slug);
  const title = p?.name ? `${p.name} – lauska.shop` : "Product – lauska.shop";
  const description = p?.short ?? "Lauska magnetic blocks product.";
  return {
    title,
    description,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const raw = (ALL as Product[]).find((x) => x.slug === slug);
  if (!raw) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Product not found</h1>
      </main>
    );
    }

  // SANITIZE before rendering
  const images = asStrings(raw.images).length ? asStrings(raw.images) : ["/placeholder.jpg"];
  const features = asStrings(raw.features);
  const priceNum = asNumber(raw.price);
  const priceDisplay =
    priceNum !== null ? `₹${priceNum.toLocaleString("en-IN")}` : (typeof raw.price === "string" ? raw.price : "₹—");

  // Pure JSON-LD (no JSX/functions)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: raw.name ?? "Lauska Product",
    description: raw.short ?? "",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: priceNum ?? undefined,
      availability: (raw.inStock ?? true) ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-14 grid gap-8 md:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={images[0]}
              alt={raw.name ?? "Product"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.slice(1, 5).map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-square overflow-hidden rounded-xl border border-gray-200"
                >
                  <Image src={src} alt={(raw.name ?? "Product") + ` ${i + 2}`} fill className="object-cover" sizes="20vw" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-[family:var(--header-font)]">
            {raw.name ?? "Lauska Product"}
          </h1>
          <div className="mt-2 text-emerald-700 text-xl font-semibold">{priceDisplay}</div>
          {raw.short && <p className="mt-3 text-gray-700">{raw.short}</p>}

          <ul className="mt-5 space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                <span className="mt-[2px]">✅</span>
                <span>{f}</span>
              </li>
            ))}
            {raw.age && <li className="text-sm text-gray-800">Age: {raw.age}</li>}
            {raw.magnets && <li className="text-sm text-gray-800">Magnet tech: {raw.magnets}</li>}
          </ul>

          <div className="mt-6 flex gap-2">
            <a
              href="https://wa.link/6b0n4j"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
            >
              💬 Ask on WhatsApp
            </a>
            <Link href="/support" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
              🧰 Support
            </Link>
          </div>

          <p className="mt-3 text-sm opacity-70">
            {(raw.inStock ?? true) ? "In stock – ships in 24h" : "Out of stock"}
          </p>
        </div>
      </section>
    </main>
  );
}
