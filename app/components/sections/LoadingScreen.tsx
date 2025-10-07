"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "🌸 Channeling sakura winds…",
  "⚡ Charging redstone core…",
  "🧱 Casting voxel forms…",
  "💫 Magnetizing builds…",
  "✨ Entering anime realm…"
];

export default function AppIntroLoader({
  minDuration = 1600
}: { minDuration?: number }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // lock scroll
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    // deterministic timer (not tied to data)
    const start = performance.now();
    const id = setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / minDuration) * 100));
      setProgress(pct);
      if (elapsed >= minDuration) {
        clearInterval(id);
        setTimeout(() => {
          setVisible(false);
          root.style.overflow = prevOverflow; // unlock
        }, 250);
      }
    }, 80);

    return () => {
      clearInterval(id);
      root.style.overflow = prevOverflow;
    };
  }, [minDuration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[140] grid place-items-center text-white bg-[#0b0f1b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* simple GPU-light backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(850px_420px_at_30%_35%,rgba(34,197,94,.18),transparent),radial-gradient(850px_420px_at_70%_65%,rgba(34,211,238,.18),transparent)]" />
          <div className="absolute inset-0 pixel-grid opacity-20" />

          <div className="relative w-[90%] max-w-[520px] cube p-6 md:p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-[family:var(--header-font)] bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
              lauska.shop
            </h1>
            <p className="mt-2 opacity-80">
              {messages[Math.min(messages.length - 1, Math.floor(progress / 20))]}
            </p>

            <div className="mt-5 h-3 w-full rounded bg-white/10 overflow-hidden">
              <motion.div
                className="h-3 bg-gradient-to-r from-emerald-400 to-cyan-400"
                animate={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="mt-2 text-xs opacity-60">{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}