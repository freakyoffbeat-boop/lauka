"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import Link from "next/link";

const WA = "https://wa.link/6b0n4j";

type Topic = { key: string; emoji: string; title: string; href: string };
const TOPICS: Topic[] = [
  { key: "orders",   emoji: "📦", title: "Orders & Tracking",   href: "#orders"   },
  { key: "shipping", emoji: "🚚", title: "Shipping & Returns",  href: "#shipping" },
  { key: "safety",   emoji: "🧲", title: "Magnet Safety",       href: "#safety"   },
  { key: "custom",   emoji: "🎨", title: "Custom Builds",        href: "#custom"   },
  { key: "teachers", emoji: "🏫", title: "For Teachers",         href: "#teachers" },
  { key: "faq",      emoji: "❓", title: "FAQs",                 href: "/faq"      },
];

const KB = [
  {
    id: "orders",
    title: "Orders & Tracking",
    points: [
      "Find your order ID in the email receipt (e.g., LS-1234).",
      "Tracking link arrives by email after dispatch.",
      "Change shipping address within ~2 hours of placing the order.",
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    points: [
      "Standard delivery in India: 3–7 business days.",
      "Express options shown at checkout (eligible pincodes).",
      "Free replacement for items damaged in transit.",
    ],
  },
  {
    id: "safety",
    title: "Magnet Safety",
    points: [
      "Magnets are enclosed & tested for child safety.",
      "Recommended for ages 6+.",
      "Keep away from pacemakers & magnetic cards.",
    ],
  },
  {
    id: "custom",
    title: "Custom Builds",
    points: [
      "We can create pixel art, signage, or logos.",
      "Bulk orders available for schools & events.",
      "Send your idea on WhatsApp for a quote.",
    ],
  },
  {
    id: "teachers",
    title: "For Teachers",
    points: [
      "Lesson ideas for STEM + art.",
      "Reusable classroom kits with sorting trays.",
      "Ask for the Educator PDF on WhatsApp.",
    ],
  },
];

const TROUBLESHOOT = [
  {
    id: "magnets",
    icon: "🧲",
    title: "Blocks won’t stick properly",
    steps: [
      "Rotate blocks 90° (polarity may differ).",
      "Wipe dust from faces with a soft cloth.",
      "Use clips/supports for tall builds.",
    ],
  },
  {
    id: "delivery",
    icon: "🚚",
    title: "Delayed delivery",
    steps: [
      "Locate your Order ID (LS-####).",
      "Paste it below to auto-compose a WhatsApp message.",
      "We’ll escalate with the courier and update you.",
    ],
  },
  {
    id: "parts",
    icon: "🧩",
    title: "Missing or broken parts",
    steps: [
      "Take a photo of the kit contents.",
      "Send it with your Order ID via WhatsApp.",
      "We’ll ship replacement parts promptly.",
    ],
  },
];

export default function SupportClient() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [q, setQ] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // keyboard shortcuts: "/" to focus search, "w" to open WhatsApp
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "/") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key.toLowerCase() === "w") window.open(WA, "_blank");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const waTrack = useMemo(() => {
    const text =
      `Hi Lauska! I'd like to track my order.\n` +
      `Order ID: ${orderId || "N/A"}\n` +
      `Email: ${email || "N/A"}\n(From Support page)`;
    return `${WA}?text=${encodeURIComponent(text)}`;
  }, [orderId, email]);

  const filteredKB = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return KB;
    return KB.filter(
      (s) =>
        s.title.toLowerCase().includes(needle) ||
        s.points.some((p) => p.toLowerCase().includes(needle))
    );
  }, [q]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-10">
        <div className="inline-block rounded-lg border border-gray-300 bg-gray-50 px-3 py-1 text-xs">
          🎮 Minecraft-inspired Help Center
        </div>
        <h1 className="mt-4 text-4xl font-[family:var(--header-font)]">
          Need Help? We’re Here to Build Solutions.
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Find answers, track orders, and get instant support for Lauska kits.
          Press <kbd className="px-1 rounded bg-gray-100 border">/</kbd> to search or{" "}
          <kbd className="px-1 rounded bg-gray-100 border">W</kbd> to open WhatsApp.
        </p>

        {/* Search + Quick Topics */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-3 opacity-50">🔍</span>
            <input
              ref={searchRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search orders, shipping, safety..."
              className="w-full rounded-xl border border-gray-300 bg-gray-50 pl-9 pr-3 h-11 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TOPICS.map((t) => (
            <Link
              key={t.key}
              href={t.href}
              className="rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 p-3 text-center text-sm transition"
            >
              <div className="text-lg">{t.emoji}</div>
              <div className="mt-1">{t.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Track Order */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold mb-2">Track an Order</h2>
          <p className="text-gray-600 text-sm mb-4">
            Enter your Order ID and email to generate a WhatsApp message.
          </p>
          <div className="space-y-3">
            <input
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Order ID (LS-####)"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email used for the order"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
            <a
              href={waTrack}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
            >
              🔎 Track via WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold mb-3">Contact Channels</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href={WA}
              className="rounded-xl border border-gray-200 bg-emerald-50 p-4 hover:bg-emerald-100 text-center"
            >
              💬 <div>WhatsApp</div>
            </a>
            <a
              href="mailto:help@lauska.shop"
              className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 text-center"
            >
              ✉️ <div>Email</div>
            </a>
            <Link
              href="/faq"
              className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 text-center"
            >
              📚 <div>FAQs</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10">
        <h2 id="orders" className="text-2xl font-semibold mb-4">Help Topics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredKB.map((sec) => (
            <div key={sec.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold mb-2">{sec.title}</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                {sec.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Troubleshooter */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-14">
        <h2 className="text-2xl font-semibold mb-2">Troubleshooter</h2>
        <p className="text-gray-600 text-sm mb-4">
          Pick an issue to get quick steps or WhatsApp help.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {TROUBLESHOOT.map((t) => (
            <details key={t.id} className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 open:shadow-md">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <div className="flex gap-2 items-center">
                  <span className="text-xl">{t.icon}</span>
                  <span className="font-semibold">{t.title}</span>
                </div>
                <span className="transition group-open:rotate-45">＋</span>
              </summary>
              <ol className="mt-3 list-decimal pl-5 text-sm text-gray-700 space-y-1">
                {t.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
              <a href={WA} target="_blank" className="mt-3 inline-block text-emerald-600 hover:underline text-sm">
                Still stuck? Chat with us →
              </a>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
