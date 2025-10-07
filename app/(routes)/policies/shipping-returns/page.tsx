import type { Metadata } from "next";
import ShippingReturnsClient from "./shipping-returns.client";

export const metadata: Metadata = {
  title: "Shipping & Returns — lauska.shop",
  description:
    "Details on shipping times, delivery areas, returns, replacements, and refunds for Lauska magnetic blocks.",
};

export default function Page() {
  return <ShippingReturnsClient />;
}