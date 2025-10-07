"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WA = "https://wa.link/6b0n4j";

const SECTIONS = [
  {
    title: "1. Introduction",
    content:
      "Welcome to lauska.shop — a Minecraft-inspired creative toy store built by fans for fans. By using this website, purchasing our products, or interacting with our content, you agree to these Terms of Service.",
  },
  {
    title: "2. Eligibility",
    content:
      "To make purchases, you must be 18 years or older, or have permission from a parent or guardian. Our products are designed for creative play and educational purposes.",
  },
  {
    title: "3. Orders & Payments",
    content:
      "When placing an order, ensure your details are correct. All prices are listed in INR (₹) and include applicable taxes. Orders are confirmed upon successful payment.",
  },
  {
    title: "4. Shipping & Delivery",
    content:
      "We deliver across India and select international destinations. Shipping times vary depending on location. For full details, see our Shipping & Returns policy.",
  },
  {
    title: "5. Returns & Replacements",
    content:
      "We accept returns for damaged or incorrect products within 7 days of delivery. Custom kits or modified products may not be eligible for return. Please contact support for assistance.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All designs, packaging, illustrations, and the Lauska logo are protected intellectual property. Minecraft® references belong to Mojang Studios; Lauska is an independent fan creation.",
  },
  {
    title: "7. User Conduct",
    content:
      "You agree not to misuse our site for unlawful purposes, attempt to breach security, or resell our items without authorization. We reserve the right to suspend access for any misuse.",
  },
  {
    title: "8. Warranty Disclaimer",
    content:
      "Our products are provided 'as is' without any express or implied warranties beyond those stated on the product page. Lauska is not responsible for misuse or damage caused by external factors.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the extent permitted by law, Lauska and its creators are not liable for indirect damages or losses resulting from product use or website downtime.",
  },
  {
    title: "10. Updates to Terms",
    content:
      "We may update these Terms periodically. Continued use of lauska.shop after changes means you accept the revised version.",
  },
  {
    title: "11. Contact Information",
    content:
      "For any questions, contact us at help@lauska.shop or reach us directly on WhatsApp for quick assistance.",
  },
];

export default function TermsClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-8">
        <div className="inline-block rounded-lg border border-gray-300 bg-gray-50 px-3 py-1 text-xs">
          ⚔️ Official Lauska Terms
        </div>
        <h1 className="mt-4 text-4xl font-header">Terms of Service</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          These terms outline how Lauska operates, how you can use our services,
          and what rights you have as a builder, buyer, or creative fan.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
          >
            💬 Contact Support
          </a>
          <Link
            href="/policies/privacy"
            className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50"
          >
            🔐 Privacy Policy
          </Link>
          <Link
            href="/policies/shipping-returns"
            className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50"
          >
            🚚 Shipping & Returns
          </Link>
        </div>
      </section>

      {/* subtle voxel divider */}
      <div className="mc-grid h-4 w-full" />

      {/* Terms list */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl bg-white">
          {SECTIONS.map((sec, i) => (
            <div key={sec.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-4 md:px-5 py-4 text-left font-semibold"
              >
                {sec.title}
                <span
                  className={`transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  ＋
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-5 pb-4 text-gray-700 text-sm">
                      {sec.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()} • Lauska.shop is an
          independent creative project inspired by Minecraft®. Not affiliated
          with Mojang Studios.
        </p>
      </section>
    </main>
  );
}