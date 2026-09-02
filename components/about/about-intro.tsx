"use client";

import FadeIn from "@/components/ui/FadeIn";
import { bio } from "@/lib/data";

export function AboutIntro() {
  return (
    <FadeIn delay={0.15}>
      <p
        className="mb-6 font-fraunces leading-[1.75]"
        style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)", maxWidth: "52ch" }}
      >
        {bio.intro}
      </p>
    </FadeIn>
  );
}
