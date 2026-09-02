"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";

export function AboutSkills() {
  return (
    <FadeIn delay={0.25}>
      <div>
        <h3 className="mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
          Core Competencies
        </h3>

        {skills.map((s, i) => (
          <div key={s.name} className="mb-3 flex items-center gap-3">
            <span className="w-32.5 shrink-0 font-mono text-[0.62rem] tracking-[0.08em] uppercase">
              {s.name}
            </span>

            <div className="relative h-px flex-1 bg-rule">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-ink"
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={{
                  duration: 1,
                  delay: 0.4 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
              />
            </div>

            <span className="w-8 text-right font-mono text-[0.6rem] text-muted">
              {s.pct}%
            </span>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
