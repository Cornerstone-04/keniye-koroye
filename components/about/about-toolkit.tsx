"use client";

import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { toolkit } from "@/lib/data";

const categories = [
  { key: "explorative", label: "Explorative" },
  { key: "evaluative", label: "Evaluative" },
  { key: "usability", label: "Usability" },
  { key: "communication", label: "Communication" },
] as const;

export function AboutToolkit() {
  return (
    <FadeIn delay={0.4}>
      <div className="mt-8 border-t border-rule pt-8">
        <h3 className="mb-6 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
          Research Toolkit
        </h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            >
              <div className="mb-2 font-mono text-[0.58rem] tracking-[0.2em] text-muted uppercase">
                {cat.label}
              </div>
              <ul className="space-y-1.5">
                {toolkit[cat.key].map((item) => (
                  <li
                    key={item}
                    className="flex w-fit gap-2 border border-rule px-3 py-1 font-mono text-[0.62rem] leading-snug tracking-widest"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
