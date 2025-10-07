"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function XPButton({
  children, className = "", href
}: PropsWithChildren<{ className?: string; href?: string }>) {
  const Btn = (
    <motion.span
      initial={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`relative btn btn-green overflow-hidden ${className}`}
    >
      <motion.span
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="absolute left-1/4 top-1/2 size-2 bg-gold rounded-full blur-[1px]" />
        <span className="absolute left-1/2 top-1/3 size-1.5 bg-gold rounded-full blur-[1px]" />
        <span className="absolute left-2/3 top-2/3 size-1 bg-gold rounded-full blur-[1px]" />
      </motion.span>
      {children}
    </motion.span>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{Btn}</a> : Btn;
}
