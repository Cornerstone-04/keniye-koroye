"use client";

import FadeIn from "@/components/ui/FadeIn";

export function WorkHeader() {
  return (
    <div className="px-6 md:px-12 pt-10 pb-8 border-b-[3px] border-double border-ink">
      <FadeIn delay={0.05}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-mono">
            Selected Projects
          </span>
          <span className="flex-1 h-px bg-rule" />
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          className="font-black leading-[0.95] font-playfair -tracking-[0.02em]"
          style={{ fontSize: "clamp(2.2rem, 8vw, 5.5rem)" }}
        >
          Work That
          <br />
          <em className="text-accent">Ships</em>
        </h2>
      </FadeIn>
    </div>
  );
}
