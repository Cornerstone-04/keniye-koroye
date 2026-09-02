"use client";

import FadeIn from "@/components/ui/FadeIn";
import { tools } from "@/lib/data";

export function AboutTools() {
  return (
    <FadeIn delay={0.35}>
      <div className="mt-8 border-t border-rule pt-8">
        <h3 className="mb-4 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
          Tools
        </h3>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="border border-rule px-3 py-1 font-mono text-[0.62rem] tracking-widest"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
