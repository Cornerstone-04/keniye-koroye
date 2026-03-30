"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";

export function AboutSkills() {
  return (
    <FadeIn delay={0.25}>
      <div>
        <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-5 text-accent font-mono">
          Core Competencies
        </h3>

        {skills.map((s, i) => (
          <div key={s.name} className="flex items-center gap-3 mb-3">
            <span className="text-[0.62rem] tracking-[0.08em] uppercase shrink-0 font-mono w-32.5">
              {s.name}
            </span>

            <div className="flex-1 relative h-px bg-rule">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-ink"
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{
                  duration: 1,
                  delay: 0.4 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              />
            </div>

            <span className="text-[0.6rem] w-8 text-right text-muted font-mono">
              {s.pct}%
            </span>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
