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
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[0.6rem] tracking-[0.25em] text-accent uppercase">
            Disciplines
          </span>
          <span className="h-px flex-1 bg-rule" />
        </div>

        {disciplines.map((d) => (
          <div
            key={d}
            className="flex items-center justify-between border-b border-rule py-[0.55rem] font-mono text-[0.65rem] tracking-widest uppercase"
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
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[0.6rem] tracking-[0.25em] text-accent uppercase">
          Disciplines
        </span>
        <span className="h-px flex-1 bg-rule" />
      </div>

      {disciplines.map((d, i) => (
        <motion.div
          key={d}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
          className="flex items-center justify-between border-b border-rule py-[0.55rem] font-mono text-[0.68rem] tracking-widest uppercase"
        >
          <span>{d}</span>
          <span className="text-accent">●</span>
        </motion.div>
      ))}
    </>
  );
}
