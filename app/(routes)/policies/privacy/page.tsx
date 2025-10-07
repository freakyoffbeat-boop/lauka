import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Security — lauska.shop",
  description:
    "How Lauska collects, protects, and uses your data. Learn about cookies, analytics, payments, retention, and your rights.",
};

const PILLARS = [
  { title: "Data Minimization", body: "We only collect what we need to fulfill your order and improve the site." },
  { title: "Secure Payments", body: "Payments are processed by PCI-compliant providers. We don't store full card data." },
  { title: "Transparent Choices", body: "You can request copies, corrections, or deletion of your data." },
];

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-6">
        <h1 className="mt-4 text-4xl font-header">Privacy & Security</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          We keep your information minimal, secure, and transparent. This page explains what we collect,
          how we use it, and the rights you have.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href="https://wa.link/6b0n4j" className="pixel-btn bg-emerald-500 text-white">💬 Contact on WhatsApp</a>
          <Link href="/support" className="pixel-btn bg-white border border-gray-300">🛠️ Support</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10">
        <h2 className="text-2xl font-header">Our Pillars</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {PILLARS.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="font-semibold">{it.title}</div>
              <p className="mt-1 text-sm text-gray-700">{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-16">
        <h2 className="text-2xl font-header">Privacy FAQ</h2>
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700">
          <p>Do you sell my data? No. We do not sell or rent your personal data.</p>
          <p className="mt-3">Do you use cookies? Yes — essential cookies for sessions and minimal analytics.</p>
          <p className="mt-3">Can I request deletion? Yes. Message us on WhatsApp or email help@lauska.shop.</p>
        </div>
      </section>
    </main>
  );
}