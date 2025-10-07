"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useId, useState } from "react";

/* Put custom anime-styled character art into /public/anime/*.png */
const characters = [
  {
    rarity: "SSR",
    name: "Aki — Blockblade",
    role: "Speed-Builder",
    img: "/anime/aki.png",
    desc: "Slices terrain like paper, stacks biomes in seconds.",
    hue: 160,
  },
  {
    rarity: "SR",
    name: "Rin — Redstone Mage",
    role: "Magnet Master",
    img: "/anime/rin.png",
    desc: "Turns magnets into power—snappy, clicky, perfect alignment.",
    hue: 195,
  },
  {
    rarity: "R",
    name: "Kaito — Skycarver",
    role: "Aerial Architect",
    img: "/anime/kaito.png",
    desc: "Builds floating islands with flawless balance.",
    hue: 145,
  },
];

/* --- Small voxel “sparkles” that float in the section background --- */
function VoxelParticles() {
  const dots = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    d: 6 + Math.random() * 8,
    delay: Math.random() * 3,
    dur: 6 + Math.random() * 6,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-[2px] bg-emerald-400/25 shadow-sm"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.d, height: d.d }}
          initial={{ y: 0, opacity: 0.35 }}
          animate={{ y: -18, opacity: [0.35, 0.6, 0.2, 0.35] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* --- 3D Tilt card with animated border & glow --- */
function TiltCard({
  hue = 160,
  children,
  as: Comp = "div",
  className = "",
}: {
  hue?: number;
  children: React.ReactNode;
  as?: any;
  className?: string;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const t = useMotionTemplate`rotateX(${rx}deg) rotateY(${ry}deg)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rY = ((x - midX) / midX) * 8; // tilt strength
    const rX = ((midY - y) / midY) * 8;
    rx.set(rX);
    ry.set(rY);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  const id = useId();
  return (
    <Comp
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-3xl ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      role="article"
      aria-labelledby={`title-${id}`}
    >
      {/* animated border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          padding: 1.2,
          background:
            "linear-gradient(135deg, rgba(16,185,129,.55), rgba(20,184,166,.4), rgba(59,130,246,.35))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* glow */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[28px] blur-xl opacity-0 group-hover:opacity-40 transition"
        style={{
          background: `radial-gradient(400px 160px at 50% 40%, hsl(${hue} 95% 75% / .25), transparent 70%)`,
        }}
      />

      <motion.div
        style={{ transform: t, transformStyle: "preserve-3d" }}
        className="rounded-[26px] border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,.08)]"
      >
        {children}
      </motion.div>
    </Comp>
  );
}

function RarityPill({ rarity }: { rarity: "SSR" | "SR" | "R" }) {
  const colors: Record<string, string> = {
    SSR: "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 text-black",
    SR: "bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-300 text-white",
    R: "bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 text-black",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold shadow-sm ${colors[rarity]}`}
    >
      ✦ {rarity}
    </span>
  );
}

export default function AnimeCharacters() {
  const [active, setActive] = useState(0);

  return (
    <section id="characters" className="relative py-20">
      {/* soft grid + radial */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[.12]"
             style={{
               backgroundImage:
                 "linear-gradient(#0f172a14 1px,transparent 1px),linear-gradient(90deg,#0f172a14 1px,transparent 1px)",
               backgroundSize: "26px 26px",
             }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(16,185,129,.10),transparent)]" />
      </div>

      <VoxelParticles />

      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-[family:var(--header-font)]">
              Meet the Anime Heroes -  Which one are you?
            </h2>
            <p className="opacity-70 mt-1">
              Original characters tailored for the lauska world. (Art slots ready.)
            </p>
          </div>

          {/* quick tabs (keyboard navigable) */}
          <div className="flex gap-2">
            {characters.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className={`px-3 py-1.5 rounded-xl text-sm border transition ${
                  active === i
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-gray-300 bg-white hover:bg-gray-50"
                }`}
                aria-pressed={active === i}
              >
                {c.role}
              </button>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {characters.map((c, i) => (
            <TiltCard
              key={c.name}
              hue={c.hue}
              className={`p-3 transition ${
                active === i ? "" : "opacity-90"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#fafafa,#ffffff)]">
                {/* badge row */}
                <div className="flex items-center justify-between px-4 pt-4">
                  <RarityPill rarity={c.rarity as any} />
                  <span className="text-[11px] text-gray-500">v1.0</span>
                </div>

                {/* art */}
                <div className="relative mt-2">
                  <div className="mx-4 rounded-xl overflow-hidden bg-[#0e1628] grid place-items-center aspect-[4/5]">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* shine */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-12 left-1/2 h-40 w-[120%] -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[18px] opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>

                {/* text */}
                <div className="px-4 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3
                      id={`title-${i}`}
                      className="font-[family:var(--header-font)] text-lg"
                    >
                      {c.name}
                    </h3>
                    <span
                      className="text-[11px] font-semibold rounded-md px-1.5 py-0.5"
                      style={{
                        background: `hsl(${c.hue} 90% 90%)`,
                        color: `hsl(${c.hue} 50% 25%)`,
                      }}
                    >
                      {c.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{c.desc}</p>

                  {/* actions */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/about#founders"
                      className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      📜 View lore
                    </Link>
                    <Link
                      href="/products"
                      className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
                    >
                      🧱 Build with {c.role.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* local styles for shimmer speed (no Tailwind config needed) */}
      <style jsx>{`
        .pixel-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 0.95rem;
          border-width: 2px;
          border-radius: 0.7rem;
          font-weight: 700;
          box-shadow: 2px 2px 0 #000;
          transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.2s ease;
        }
        .pixel-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 0 0 0 #000;
        }
      `}</style>
    </section>
  );
}