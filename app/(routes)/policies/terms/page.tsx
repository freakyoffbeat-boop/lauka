import type { Metadata } from "next";
import TermsClient from "./terms.client";

export const metadata: Metadata = {
  title: "Terms of Service — lauska.shop",
  description:
    "Read Lauska's Terms of Service — guidelines for orders, returns, user conduct, warranties, and limitations of liability.",
  alternates: { canonical: "/policies/terms" },
};

export default function Page() {
  return <TermsClient />;
}
