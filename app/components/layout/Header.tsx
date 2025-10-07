"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/products", label: "Shop", icon: "🧱" },
  { href: "/about", label: "About", icon: "🏕️" },
  { href: "/faq", label: "FAQs", icon: "❓" },
  { href: "/support", label: "Support", icon: "🛠️" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  // optional compact height on scroll
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
<header
  role="banner"
  className={`navbar-mc header-overlay ${shrink ? "nav-shrink" : ""} select-none`}
>
      <div className="nav-wrap mx-auto max-w-7xl h-full px-4 md:px-6 flex items-center justify-between gap-3">
        {/* Brand (logo + name) */}
        <Link href="/" aria-label="Lauska home" className="flex items-center gap-3">
          {/* If /logo.svg or /logo.png exists, show it. Otherwise show cube */}
          {logoOk ? (
            <Image
              src="/logo.png"
              alt="Lauska logo"
              width={28}
              height={28}
              className="rounded-[6px] border border-black bg-black"
              onError={() => {
                // try png as fallback once
                if (logoOk) {
                  setLogoOk(false);
                }
              }}
              priority
            />
          ) : (
            <span className="logo-cube" aria-hidden />
          )}

          <span className="brand-title">
            Lauska<span className="brand-dot">.shop</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          {LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pixel-btn ${active ? "pixel-underline" : ""}`}
              >
                <span aria-hidden>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.link/6b0n4j"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn whatsapp"
            aria-label="Chat on WhatsApp"
          >
            💬 WhatsApp
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden pixel-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          🧰 Menu
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="md:hidden"
          >
            <div className="drawer-bg mx-3 mb-3 rounded-lg p-3 grid gap-2">
              {LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`pixel-btn w-full justify-between ${active ? "pixel-underline" : ""}`}
                  >
                    <span className="flex items-center gap-2">
                      <span aria-hidden>{item.icon}</span>
                      {item.label}
                    </span>
                    <span>→</span>
                  </Link>
                );
              })}
              <a
                href="https://wa.link/6b0n4j"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn w-full justify-between whatsapp"
                onClick={() => setOpen(false)}
              >
                <span className="flex items-center gap-2">💬 WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}