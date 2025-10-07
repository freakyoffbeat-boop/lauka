import type { Metadata } from "next";
import PrivacyClient from "./privacy.client";

export const metadata: Metadata = {
  title: "Privacy & Security — lauska.shop",
  description:
    "How Lauska collects, protects, and uses your data. Learn about cookies, analytics, payments, retention, and your rights.",
};

export default function Page() {
  return <PrivacyClient />;
}