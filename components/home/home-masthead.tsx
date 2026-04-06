"use client";

import { motion } from "motion/react";
import { personal } from "@/lib/data";

export function HomeMasthead() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-12 py-8 border-b-[3px] border-double border-ink font-mono"
    >
      {/* Mobile */}
      <div className="flex flex-col items-center text-center md:hidden mb-2">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="font-black uppercase leading-none font-playfair -tracking-[0.02em]"
          style={{ fontSize: "clamp(3.5rem, 18vw, 6rem)" }}
        >
          KEN<em className="text-accent italic">I</em>YE
        </motion.h1>

        <p className="mt-2 text-[0.82rem] italic font-fraunces text-muted">
          Building impactful technology
        </p>

        <div className="mt-2 flex flex-col items-center gap-0.5">
          <span className="text-[0.6rem] tracking-[0.12em] uppercase text-muted">
            Product Manager
          </span>
          <span className="text-[0.6rem] tracking-[0.12em] uppercase text-muted">
            Product Developer
          </span>
          <span className="text-[0.6rem] tracking-[0.12em] uppercase text-muted">
            Product Researcher
          </span>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 items-end gap-8">
        <div className="text-[0.62rem] tracking-[0.15em] uppercase leading-loose text-muted">
          Product Manager
          <br />
          Product Developer
          <br />
          Product Researcher
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="font-black uppercase leading-none font-playfair -tracking-[0.02em]"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
          >
            KEN<em className="text-accent italic">I</em>YE
          </motion.h1>

          <p className="mt-2 text-[0.9rem] font-fraunces italic text-muted">
            Building impactful technology
          </p>
        </div>

        <div className="text-right text-[0.62rem] tracking-widest leading-loose text-muted">
          {personal.location}
        </div>
      </div>
    </motion.div>
  );
}
