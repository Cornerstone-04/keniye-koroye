// Initials.tsx
"use client";
import { motion } from "motion/react";

export default function Initials() {
  return (
    <div className="relative hidden items-center justify-center overflow-hidden border-r border-rule md:flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center leading-none select-none"
      >
        <div
          className="animate-pulse font-playfair leading-[0.9em] font-black -tracking-[0.04em] text-transparent"
          style={{
            fontSize: "clamp(6rem, 14vw, 12rem)",
            WebkitTextStroke: "1px var(--rule)",
          }}
        >
          F<br />K<br />K
        </div>
        <div className="mt-6 font-mono text-[0.6rem] tracking-[0.3em] text-rule uppercase">
          Funfere · Keniyē · Koroye
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex -rotate-90 items-center justify-center">
        <span className="font-mono text-[0.55rem] tracking-[0.4em] whitespace-nowrap text-rule/40 uppercase">
          Product Manager · Developer · Researcher
        </span>
      </div>
    </div>
  );
}
