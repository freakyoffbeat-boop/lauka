import type { Metadata } from "next";
import ForestPackClient from "./forest-pack.client";

export const metadata: Metadata = {
  title: "Starter Forest Pack — lauska.shop",
  description:
    "Build grassy terrains, birch trees, and water décor with Lauska’s magnetic modular blocks. Compatible with all Lauska packs.",
  alternates: { canonical: "/products/forest-pack" },
};

export default function Page() {
  return <ForestPackClient />;
}
