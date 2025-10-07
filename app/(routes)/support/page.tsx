import type { Metadata } from "next";
import SupportClient from "./support.client";

export const metadata: Metadata = {
  title: "Support — lauska.shop",
  description:
    "Need help with orders, shipping, returns, or Lauska magnetic blocks? Chat on WhatsApp, browse help topics, or run our troubleshooting guide.",
};

export default function Page() {
  return <SupportClient />;
}