"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { awards } from "@/lib/data";

export function AboutAwards() {
  return (
    <FadeIn delay={0.3}>
      <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
        Awards
      </h3>

      <div className="space-y-3 mb-10">
        {awards.map((a, i) => (
          <motion.div
            key={a.org}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            className="flex justify-between items-start pb-3 border-b border-rule"
          >
            <div>
              <div className="text-[0.68rem] tracking-[0.12em] uppercase font-bold font-mono">
                {a.org}
              </div>
              <div className="text-[0.82rem] font-fraunces">{a.title}</div>
            </div>

            <div className="text-[0.6rem] tracking-widest shrink-0 ml-4 text-muted font-mono">
              {a.year}
            </div>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  );
}
