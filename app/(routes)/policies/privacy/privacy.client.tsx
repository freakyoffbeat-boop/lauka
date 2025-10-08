"use client";

import { useState } from "react";
import Link from "next/link";

const WA = "https://wa.link/6b0n4j";

type Item = { title: string; body: string };

const PILLARS: Item[] = [
  { title: "Data Minimization", body: "We only collect what we need to fulfill your order, support your account, and improve lauska.shop. No unnecessary fields." },
  { title: "Secure Payments", body: "Payments are processed by PCI-DSS compliant providers. We never store your full card data on our servers." },
  { title: "Transparent Choices", body: "You can request a copy of your data, update details, or ask us to delete your account any time." },
];

const WHAT_WE_COLLECT: Item[] = [
  { title: "Order Details", body: "Name, email, phone, shipping address, and the items you purchase. Required to process and deliver your order." },
  { title: "Support Conversations", body: "Messages you send us via WhatsApp or email, including attachments (e.g., photos for replacements)." },
  { title: "Device & Usage", body: "Basic analytics (pages viewed, time on site, device type) to help us improve the website experience." },
];

const HOW_WE_USE: Item[] = [
  { title: "Fulfillment", body: "Process orders, handle returns, provide tracking updates, and notify you about critical order status." },
  { title: "Customer Support", body: "Troubleshoot issues, replace damaged parts, and answer product questions using your provided details." },
  { title: "Product Improvements", body: "Anonymous analytics help us understand which pages are helpful and where we can improve." },
];

const THIRD_PARTIES: Item[] = [
  { title: "Payment Processors", body: "We integrate with trusted providers to handle payments securely (PCI-DSS). Your full card details never touch our servers." },
  { title: "Shipping Partners", body: "We share your address and phone with couriers to deliver your packages and make delivery updates." },
  { title: "Analytics", body: "Privacy-respecting analytics (e.g., first-party or cookieless tools) to understand site performance without building personal profiles." },
];

const SECURITY_MEASURES: Item[] = [
  { title: "Encryption", body: "Data in transit is protected with HTTPS/TLS. Sensitive secrets are stored securely in environment variables." },
  { title: "Access Controls", body: "Only authorized team members can access customer systems—and only when needed to help you." },
  { title: "Backups & Monitoring", body: "Routine backups and uptime monitoring help us protect your orders and keep lauska.shop reliable." },
];

const RIGHTS: Item[] = [
  { title: "Access & Portability", body: "Request a copy of the data we hold about you. We’ll provide it in a commonly used format." },
  { title: "Correction & Deletion", body: "Update your details or ask us to delete personal information where legally allowed." },
  { title: "Marketing Choices", body: "We’re minimal about marketing. You can opt out of non-essential emails anytime." },
];

const FAQ = [
  { q: "Do you sell my data?", a: "No. We do not sell or rent your personal data. We only share details with payment, shipping, or analytics partners as required." },
  { q: "Do you use cookies?", a: "Yes, essential cookies for login/session and minimal analytics cookies to understand site usage. You can clear cookies from your browser." },
  { q: "Can I request deletion?", a: "Absolutely. Message us on WhatsApp or email help@lauska.shop with your Order ID or account email." },
  { q: "Where is my data stored?", a: "We use reputable cloud providers with strong security controls. Some processing may occur in other regions via our service partners." },
];

function BlockList({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div className="font-semibold">{it.title}</div>
          <p className="mt-1 text-sm text-gray-700">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10">
      <h2 className="text-2xl font-header">{title}</h2>
      <div className="mt-3">
        <BlockList items={items} />
      </div>
    </section>
  );
}

export default function PrivacyClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-6">
        <h1 className="mt-4 text-4xl font-header">Privacy & Security</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          We keep your information minimal, secure, and transparent. This page explains
          what we collect, how we use it, and the rights you have.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
          >
            💬 Contact on WhatsApp
          </a>
          <Link href="/support" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
            🛠️ Support
          </Link>
          <Link href="/policies/shipping-returns" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
            🚚 Shipping & Returns
          </Link>
        </div>
      </section>

      {/* subtle voxel line */}
      <div className="mc-grid h-4 w-full" />

      {/* Sections */}
      <Section title="Our Pillars" items={PILLARS} />
      <Section title="What We Collect" items={WHAT_WE_COLLECT} />
      <Section title="How We Use Your Data" items={HOW_WE_USE} />
      <Section title="When We Share (Processors)" items={THIRD_PARTIES} />
      <Section title="Security Measures" items={SECURITY_MEASURES} />

      {/* Retention & Children */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10">
        <h2 className="text-2xl font-header">Retention & Children’s Privacy</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="font-semibold">Data Retention</div>
            <p className="mt-1 text-sm text-gray-700">
              Order records are kept for legal/accounting purposes. Support messages are
              retained only as long as needed to help you. You can request deletion of
              non-essential data any time.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="font-semibold">Children’s Privacy</div>
            <p className="mt-1 text-sm text-gray-700">
              Our site is intended for purchases by adults/guardians. We do not knowingly
              collect personal data from children under 13. If you believe a child has
              provided us data, contact us and we’ll remove it.
            </p>
          </div>
        </div>
      </section>

      {/* Your rights */}
      <Section title="Your Rights" items={RIGHTS} />

      {/* Mini FAQ (simple accordion, no animations) */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-16">
        <h2 className="text-2xl font-header mb-3">Privacy FAQ</h2>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {FAQ.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-4 md:px-5 py-4 flex items-center justify-between gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold">{f.q}</span>
                <span className={`transition ${open === i ? "rotate-45" : ""}`}>＋</span>
              </button>
              {open === i && <div className="px-4 md:px-5 pb-4 text-gray-700">{f.a}</div>}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
          >
            💬 Ask on WhatsApp
          </a>
          <Link href="/support" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
            🔐 Security Questions
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()} • We may revise this page to
          reflect new regulations or product changes. Significant updates will be noted
          here.
        </p>
      </section>
    </main>
  );
}
