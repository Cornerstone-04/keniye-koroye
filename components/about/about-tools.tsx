"use client";

import FadeIn from "@/components/ui/FadeIn";
import { tools } from "@/lib/data";

export function AboutTools() {
  return (
    <FadeIn delay={0.35}>
      <div className="mt-8 pt-8 border-t border-rule">
        <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-4 text-accent font-mono">
          Tools
        </h3>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-[0.62rem] tracking-widest border border-rule font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
