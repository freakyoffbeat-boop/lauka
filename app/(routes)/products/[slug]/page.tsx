import { products } from "@/data/products";
import ProductGallery from "../../../components/product/ProductGallery";
import BuyOnWhatsApp from "../../../components/product/BuyOnWhatsApp";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 grid gap-10 lg:grid-cols-2">
      <ProductGallery images={product.images} />
      <div>
        <h1 className="text-3xl">{product.name}</h1>
        <div className="mt-2 text-2xl font-semibold">₹{product.price}</div>
        <p className="mt-3 opacity-80">{product.short}</p>

        <ul className="mt-4 list-disc pl-5 space-y-1">
          {product.features.map((f)=> <li key={f}>{f}</li>)}
          <li>Age: {product.age}</li>
          <li>Magnet tech: {product.magnets}</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <BuyOnWhatsApp productName={product.name} />
          <button className="btn btn-gold"
            onClick={()=>window.dispatchEvent(new CustomEvent("chatbox:toast",{detail:"Added to wishlist!"}))}>
            ☆ Add to Wishlist
          </button>
        </div>

        <p className="mt-3 text-sm opacity-70">{product.inStock ? "In stock – ships in 24h" : "Out of stock"}</p>

        <div className="mt-10 rounded-lg bg-white p-4 shadow">
          <h3 className="font-[family:var(--header-font)]">Why choose lauska.shop?</h3>
          <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
            <li>🛡️ Secure checkout</li>
            <li>↩️ 30-day returns</li>
            <li>🚚 Fast shipping</li>
            <li>⭐ Verified reviews</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
