"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { residencies } from "@/lib/data";

export function AboutResidencies() {
  return (
    <FadeIn delay={0.45}>
      <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        Residencies
      </h3>

      <div className="space-y-3 mb-10">
        {residencies.map((r, i) => (
          <motion.div
            key={r.org}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
            className="flex justify-between items-start pb-3 border-b border-rule"
          >
            <div>
              <div className="text-[0.68rem] tracking-[0.12em] uppercase font-bold font-mono">
                {r.org}
              </div>
              <div className="text-[0.82rem] font-fraunces">{r.title}</div>
            </div>

            <div className="text-[0.6rem] tracking-widest shrink-0 ml-4 text-muted font-mono">
              {r.year}
            </div>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  );
}
