"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { residencies } from "@/lib/data";

export function AboutResidencies() {
  return (
    <FadeIn delay={0.45}>
      <h3 className="mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        Residencies
      </h3>

      <div className="mb-10 space-y-3">
        {residencies.map((r, i) => (
          <motion.div
            key={r.org}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
            className="flex items-start justify-between border-b border-rule pb-3"
          >
            <div>
              <div className="font-mono text-[0.68rem] font-bold tracking-[0.12em] uppercase">
                {r.org}
              </div>
              <div className="font-fraunces text-[0.82rem]">{r.title}</div>
            </div>

            <div className="ml-4 shrink-0 font-mono text-[0.6rem] tracking-widest text-muted">
              {r.year}
            </div>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  );
}
