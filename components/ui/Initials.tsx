"use client";

import { motion } from "motion/react";

export default function Initials() {
  return (
    <div
      className="hidden md:flex items-center justify-center overflow-hidden relative"
      style={{ borderRight: "1px solid var(--rule)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="select-none text-center leading-none"
      >
        <div
          className="font-black"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(6rem, 14vw, 12rem)",
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1px var(--rule)",
            lineHeight: 0.9,
          }}
        >
          F<br />B<br />K
        </div>

        <div
          className="mt-6 text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'DM Mono', monospace", color: "var(--rule)" }}
        >
          Funfere · Bodiawei · Koroye
        </div>
      </motion.div>

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: "rotate(-90deg)" }}
      >
        <span
          className="text-[0.55rem] tracking-[0.4em] uppercase whitespace-nowrap"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "var(--rule)",
            opacity: 0.4,
          }}
        >
          Product Manager · Developer · Researcher
        </span>
      </div>
    </div>
  );
}
