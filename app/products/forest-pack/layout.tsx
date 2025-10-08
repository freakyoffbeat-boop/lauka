// app/(routes)/products/layout.tsx
// or: app/products/layout.tsx  (use the one that matches your tree)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — lauska.shop",
  description: "Shop Lauska modular magnetic packs and accessories.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Keep this layout minimal: no <meta> with JSX, no JSON-LD here.
  return <>{children}</>;
}
