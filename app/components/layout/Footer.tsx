"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const primary = [
    { href: "/products", label: "Shop", icon: "🧱" },
    { href: "/blog", label: "Blog", icon: "📰" },
    { href: "/faq", label: "FAQs", icon: "❓" },
    { href: "/support", label: "Support", icon: "🛠️" },
  ];

  const policies = [
    { href: "/policies/shipping-returns", label: "Shipping & Returns" },
    { href: "/policies/privacy", label: "Privacy & Security" },
    { href: "/policies/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="footer-mc">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="logo-cube" aria-hidden />
              <span className="brand-title text-gray-900">Lauska<span className="brand-dot">.shop</span></span>
            </Link>

            <p className="mt-3 text-sm text-gray-600">
              Built by Minecraft fans in India. We craft magnetic blocks for creative
              kids, makers and classrooms.
            </p>

            {/* Socials / contact row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.link/6b0n4j"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn bg-emerald-500 border border-emerald-600 text-white hover:brightness-110"
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:help@lauska.shop"
                className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50"
              >
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="footer-heading">Explore</h3>
            <ul className="mt-3 space-y-2">
              {primary.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-gray-800 hover:underline"
                  >
                    <span aria-hidden>{l.icon}</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Policies */}
          <div>
            <h3 className="footer-heading">Trust & Policies</h3>
            <ul className="mt-3 space-y-2">
              {policies.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-800 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/support" className="text-gray-800 hover:underline">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Pixel button rail */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {primary.map((l) => (
            <Link key={l.href} href={l.href} className="pixel-btn bg-gray-900 text-white">
              <span aria-hidden>{l.icon}</span>{l.label}
            </Link>
          ))}
          <a
            href="https://wa.link/6b0n4j"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-[#25D366] text-black border border-black/20 shadow-[0_6px_0_0_rgba(0,0,0,.35)]"
          >
            💬 WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-sm text-gray-600 flex items-center justify-between">
          <span>© {year} lauska.shop — All rights reserved.</span>
          <span className="hidden sm:block">
            <Link href="/policies/privacy" className="hover:underline">Privacy</Link>
            <span className="mx-2">•</span>
            <Link href="/policies/terms" className="hover:underline">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}