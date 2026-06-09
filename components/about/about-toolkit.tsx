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
      <div className="mt-8 pt-8 border-t border-rule">
        <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-6 text-accent font-mono">
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
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-muted font-mono mb-2">
                {cat.label}
              </div>
              <ul className="space-y-1.5">
                {toolkit[cat.key].map((item) => (
                  <li
                    key={item}
                    className="leading-snug flex gap-2 px-3 py-1 w-fit text-[0.62rem] tracking-widest border border-rule font-mono"
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
