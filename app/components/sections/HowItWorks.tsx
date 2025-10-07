"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const steps = [
  { title: "Snap Magnetic Blocks", img: "/steps/snap.png", desc: "Click and connect — each cube locks perfectly in place." },
  { title: "Build Your World", img: "/steps/build.gif", desc: "Stack, shape, and sculpt your imagination — voxel by voxel." },
  { title: "Display & Play", img: "/steps/display.png", desc: "Show it off or rebuild endlessly. Your world, your rules." }
];

// subtle voxel cubes floating in the section background
function FloatingCubes() {
  const cubes = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 14,
    delay: Math.random() * 3,
    duration: 6 + Math.random() * 4,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {cubes.map((c) => (
        <motion.span
          key={c.id}
          className="absolute rounded-[2px] bg-emerald-400/25"
          style={{ left: `${c.x}%`, top: `${c.y}%`, width: c.size, height: c.size }}
          initial={{ y: 0, opacity: 0.2 }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: c.duration,
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// reusable 3D tilt wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 transition"
    >
      {children}
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-4 py-24">
      {/* floating voxel background */}
      <FloatingCubes />

      {/* soft radial backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_center,rgba(167,243,208,.08),transparent)]" />

      <div className="relative text-center mb-12">
        <div className="inline-block rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs">
          🧱 Step-by-step
        </div>
        <h2 className="mt-2 text-4xl font-[family:var(--header-font)]">
          How it works
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          From snapping magnetic cubes to displaying your pixel-perfect creations.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-10 relative">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TiltCard>
              <div className="aspect-square rounded-xl overflow-hidden bg-[#f8fafc] grid place-items-center">
                <img src={s.img} alt={s.title} className="h-full w-full object-contain" />
              </div>
              <p className="mt-4 text-lg font-[family:var(--header-font)] text-gray-900">{s.title}</p>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </TiltCard>

            {/* connector line between steps */}
            {i < steps.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 right-[-26px] w-[52px] h-[2px] bg-gradient-to-r from-emerald-300 to-emerald-500" />
            )}
          </motion.div>
        ))}
      </div>

  <div className="text-center mt-16 relative z-10">
    {/* ✅ use Next Link + correct route */}
    <Link
      href="/products"
      className="inline-flex items-center gap-2 bg-emerald-500 text-white font-semibold rounded-xl px-5 py-3 border-2 border-emerald-600 shadow-[2px_2px_0px_black] hover:brightness-110 transition"
    >
      🚀 Start Building
    </Link>
  </div>
    </section>
  );
}