// app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // H to go Home, / to focus search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const typing = tag === "input" || tag === "textarea";
      if (e.key.toLowerCase() === "h" && !typing) router.push("/");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0b0f1b] text-white">
      {/* voxel grid + vignette */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(34,197,94,.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_100%,rgba(59,130,246,.14),transparent)]" />

      {/* scanline / CRT feel */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-25 [background:repeating-linear-gradient(0deg,rgba(255,255,255,.12)_0px,rgba(255,255,255,.12)_1px,transparent_1px,transparent_3px)]" />

      {/* Floating voxel “blocks” */}
      <VoxelBlocks />

      <section className="relative mx-auto max-w-5xl px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-block rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs tracking-wide text-emerald-200">
            ❌ Chunk not found
          </div>

          <h1 className="mt-5 text-5xl md:text-7xl font-[family:var(--header-font)] leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_6px_28px_rgba(34,197,94,.25)]">
            404 — Block Missing
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            The coordinates you entered point to unloaded terrain. Try the search,
            head back to base, or ping us on WhatsApp and we’ll guide you like the
            best in-game compass.
          </p>

          {/* Search handoff to Blog */}
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3">
            <div className="relative w-full">
              <span className="pointer-events-none absolute left-3 top-2.5 opacity-70">🔎</span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // Send them to blog search (adjust if you have a global search route)
                    window.location.href = `/blog?q=${encodeURIComponent(q)}`;
                  }
                }}
                placeholder="Search articles… (press / to focus)"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/10 pl-10 pr-3 text-white outline-none backdrop-blur-md placeholder:text-white/50 focus:ring-2 focus:ring-emerald-400/60"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="px-5 h-12 inline-flex items-center rounded-xl bg-white text-black hover:brightness-95 border border-black/10 shadow-[0_6px_0_0_rgba(0,0,0,.35)]">
              ⛺ Back Home
            </Link>
            <Link href="/products" className="px-5 h-12 inline-flex items-center rounded-xl bg-emerald-500 hover:brightness-110 border border-emerald-600 shadow-[0_6px_0_0_rgba(0,0,0,.35)]">
              🧱 Shop Kits
            </Link>
            <Link href="/faq" className="px-5 h-12 inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/15">
              ❓ FAQs
            </Link>
            <a
              href="https://wa.link/6b0n4j"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 h-12 inline-flex items-center rounded-xl bg-[#25D366] text-black hover:brightness-105 border border-black/10 shadow-[0_6px_0_0_rgba(0,0,0,.35)]"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="mt-6 text-xs text-white/50">
            Tip: press <kbd className="rounded bg-white/10 px-1">H</kbd> to go Home
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* ------------------ Floating voxel blocks ------------------ */

function VoxelBlocks() {
  const cubes = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: 6 + Math.random() * 88, // vw
    y: 10 + Math.random() * 70, // vh
    s: 12 + Math.random() * 22, // px
    d: 8 + Math.random() * 14,  // duration
    c: ["#34d399", "#22d3ee", "#a3e635", "#60a5fa"][i % 4],
  }));

  return (
    <div aria-hidden className="absolute inset-0">
      {cubes.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, 10, -10], opacity: [0.15, 0.35, 0.15] }}
          transition={{ repeat: Infinity, duration: b.d, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: `${b.x}vw`,
            top: `${b.y}vh`,
            width: b.s,
            height: b.s,
            background:
              `linear-gradient(180deg, ${b.c}, rgba(255,255,255,.15))`,
            border: "1px solid rgba(255,255,255,.18)",
            boxShadow: "0 10px 40px rgba(16,185,129,.25)",
            transform: "rotate(0.0001deg)", // prevent blurriness on some GPUs
          }}
          className="rounded-[6px]"
        />
      ))}
    </div>
  );
}