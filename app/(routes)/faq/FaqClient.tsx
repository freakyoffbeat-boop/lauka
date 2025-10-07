"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS, Section } from "./faq-data"; // ✅ use shared data

/* ------------------------------------------------------------------ */
/* Data model                                                          */
/* ------------------------------------------------------------------ */
type QA = { q: string; a: string; tags?: string[] };
type Section = { id: string; title: string; icon: string; qa: QA[] };



/* ------------------------------------------------------------------ */
/* Utils                                                               */
/* ------------------------------------------------------------------ */
function useSearch(sections: Section[], term: string) {
  const q = term.trim().toLowerCase();
  return useMemo(() => {
    if (!q) return sections;
    return sections
      .map((sec) => ({
        ...sec,
        qa: sec.qa.filter(
          (x) =>
            x.q.toLowerCase().includes(q) ||
            x.a.toLowerCase().includes(q) ||
            (x.tags ?? []).some((t) => t.toLowerCase().includes(q))
        ),
      }))
      .filter((sec) => sec.qa.length > 0);
  }, [sections, q]);
}

/* Spring used everywhere for buttery smoothness */
const SPRING = { type: "spring", stiffness: 420, damping: 34 };

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export default function FaqClient() {
  const [query, setQuery] = useState("");
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const [openSection, setOpenSection] = useState<string | null>(null); // left mini-nav highlight
  const filtered = useSearch(SECTIONS, query);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleAll = (expand: boolean) => {
    const next: Record<string, boolean> = {};
    filtered.forEach((sec) =>
      sec.qa.forEach((qa) => (next[`${sec.id}::${qa.q}`] = expand))
    );
    setOpenMap(next);
  };

  /* Mini sticky nav: mark section currently in view */
  const onIntersect = (id: string) => setOpenSection(id);

  return (
    <div className="bg-[#f7f8fb] text-[#0e1220]">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-14 pb-8">
        <h1 className="text-4xl md:text-5xl font-[family:var(--header-font)] text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Search or browse categories. We’ve included everything from orders and shipping to safety, compatibility and custom builds.
        </p>

        {/* Search + Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="relative w-full max-w-xl">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: returns, magnets, COD, delivery…"
              className="w-full rounded-xl border border-gray-300 bg-white/90 px-4 py-3 pr-12 outline-none focus:border-black"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">⌘K</span>
          </div>
          <button onClick={() => toggleAll(true)} className="pixel-btn bg-white">Expand all</button>
          <button onClick={() => toggleAll(false)} className="pixel-btn bg-white">Collapse all</button>
          <Link href="/support" className="pixel-btn">Support</Link>
        </div>

        {/* Quick chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:border-black">
              <span className="mr-1">{s.icon}</span>{s.title}
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-16 grid lg:grid-cols-[220px_1fr] gap-6" ref={containerRef}>
        {/* Sticky mini-nav (desktop) */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <nav className="rounded-xl border border-gray-200 bg-white p-2 text-sm">
            {SECTIONS.map((s) => {
              const active = openSection === s.id;
              return (
                <a key={s.id}
                   href={`#${s.id}`}
                   className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${active ? "bg-[#eef7ff] border border-sky-200" : "hover:bg-gray-50"}`}>
                  <span>{s.icon}</span><span>{s.title}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <section className="grid gap-8">
          {filtered.map((sec) => (
            <Category
              key={sec.id}
              section={sec}
              openMap={openMap}
              setOpenMap={setOpenMap}
              onIntersect={onIntersect}
            />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
              No results for “<span className="font-semibold">{query}</span>”. Try “shipping”, “returns”, or “magnets”.
            </div>
          )}

          {/* Contact & CTA */}
          <div id="contact" className="rounded-2xl border border-gray-200 bg-[#0e1220] text-white p-8 md:p-10">
            <h2 className="text-3xl font-[family:var(--header-font)]">Still need help?</h2>
            <p className="mt-3 text-white/80">
              Fast replies on WhatsApp (9 AM–8 PM IST). Or email <a className="underline" href="mailto:hello@lauska.shop">hello@lauska.shop</a>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="pixel-btn whatsapp" href="https://wa.link/6b0n4j" target="_blank" rel="noopener noreferrer">💬 Chat on WhatsApp</a>
              <Link href="/policies/shipping-returns" className="pixel-btn bg-white text-black">📄 Shipping & Returns</Link>
              <Link href="/policies/privacy-security" className="pixel-btn bg-white text-black">🔐 Privacy & Security</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Category block with smooth intersection + layout animations         */
/* ------------------------------------------------------------------ */
function Category({
  section,
  openMap,
  setOpenMap,
  onIntersect,
}: {
  section: Section;
  openMap: Record<string, boolean>;
  setOpenMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  onIntersect: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Observe when section is on screen to highlight left nav
  useIntersection(ref, () => onIntersect(section.id));

  return (
    <div id={section.id} ref={ref} className="rounded-2xl border border-gray-200 bg-white scroll-mt-24">
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h2 className="text-xl md:text-2xl font-[family:var(--header-font)]">
          <span className="mr-2">{section.icon}</span>
          {section.title}
        </h2>
        <a href={`#${section.id}`} className="text-sm text-gray-500 hover:text-gray-800">#</a>
      </div>

      <div className="divide-y">
        {section.qa.map((qa) => {
          const key = `${section.id}::${qa.q}`;
          const open = !!openMap[key];
          const toggle = () => setOpenMap((m) => ({ ...m, [key]: !open }));
          return (
            <motion.div key={key} layout transition={SPRING}>
              <button
                onClick={toggle}
                aria-expanded={open}
                className="w-full px-5 py-4 text-left font-semibold flex items-center justify-between focus:outline-none"
              >
                <span>{qa.q}</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={SPRING}
                  className="text-xl leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={SPRING}
                    className="px-5 pb-4 text-sm text-gray-700 overflow-hidden"
                  >
                    {qa.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Intersection Observer hook (mini-nav highlight)                     */
/* ------------------------------------------------------------------ */
function useIntersection(targetRef: React.RefObject<Element>, onHit: () => void) {
  useEffectSafe(() => {
    const el = targetRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) onHit();
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [targetRef, onHit]);
}

/* SSR-safe version of useEffect for client files */
function useEffectSafe(cb: () => void | (() => void), deps: any[]) {
  const isClient = typeof window !== "undefined";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return isClient ? (useMemo(() => cb(), deps) as any) : undefined;
}