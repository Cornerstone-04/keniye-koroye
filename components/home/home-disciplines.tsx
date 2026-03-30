"use client";

import { motion } from "motion/react";
import { disciplines } from "@/lib/data";

type HomeDisciplinesProps = {
  mobile?: boolean;
};

export function HomeDisciplines({ mobile = false }: HomeDisciplinesProps) {
  if (mobile) {
    return (
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
            Disciplines
          </span>
          <span className="flex-1 h-px bg-rule" />
        </div>

        {disciplines.map((d) => (
          <div
            key={d}
            className="flex justify-between items-center py-[0.55rem] text-[0.65rem] tracking-widest uppercase border-b border-rule font-mono"
          >
            <span>{d}</span>
            <span className="text-accent">●</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
          Disciplines
        </span>
        <span className="flex-1 h-px bg-rule" />
      </div>

      {disciplines.map((d, i) => (
        <motion.div
          key={d}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
          className="flex justify-between items-center py-[0.55rem] text-[0.68rem] tracking-widest uppercase border-b border-rule font-mono"
        >
          <span>{d}</span>
          <span className="text-accent">●</span>
        </motion.div>
      ))}
    </>
  );
}
