import Link from "next/link";
import { products } from "@/data/products";

export const metadata = { title: "Shop Products" };

export default function ProductsPage() {
	return (
		<main className="mx-auto max-w-6xl px-4 py-12">
			<h1 className="text-3xl font-[family:var(--header-font)]">Shop Products</h1>
			<div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{products.map((p) => (
					<Link key={p.slug} href={`/products/${p.slug}`} className="rounded-lg border p-4 bg-white">
						<div className="font-semibold">{p.name}</div>
						<div className="text-sm text-gray-600 mt-1">₹{p.price}</div>
						<p className="text-sm mt-2 text-gray-700">{p.short}</p>
					</Link>
				))}
			</div>
		</main>
	);
}
