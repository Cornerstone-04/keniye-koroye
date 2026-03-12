// Initials.tsx
"use client";
import { motion } from "motion/react";

export default function Initials() {
  return (
    <div className="hidden md:flex items-center justify-center overflow-hidden relative border-r border-rule">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="select-none text-center leading-none"
      >
        <div
          className="font-black font-playfair -tracking-[0.04em] text-transparent leading-[0.9em]"
          style={{
            fontSize: "clamp(6rem, 14vw, 12rem)",
            WebkitTextStroke: "1px var(--rule)",
          }}
        >
          F<br />B<br />K
        </div>
        <div className="mt-6 text-[0.6rem] tracking-[0.3em] uppercase font-mono text-rule">
          Funfere · Bodiawei · Koroye
        </div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -rotate-90">
        <span className="text-[0.55rem] tracking-[0.4em] uppercase whitespace-nowrap font-mono text-rule/40">
          Product Manager · Developer · Researcher
        </span>
      </div>
    </div>
  );
}
