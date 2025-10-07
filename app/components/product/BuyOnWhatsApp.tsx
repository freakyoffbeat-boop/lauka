"use client";
import XPButton from "../ui/XPButton";

export default function BuyOnWhatsApp({ productName }: { productName: string }) {
  const encoded = encodeURIComponent(
    `Hi Lauska Shop! I'm interested in buying ${productName}. Please share details.`
  );
  const href = `https://wa.link/6b0n4j?text=${encoded}`;
  return <XPButton href={href}>🟩 Buy on WhatsApp</XPButton>;
}
