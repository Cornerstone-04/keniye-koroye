"use client";

import FadeIn from "@/components/ui/FadeIn";
import { bio } from "@/lib/data";

export function AboutParagraphs() {
  return (
    <FadeIn delay={0.2}>
      <div className="text-[0.82rem] leading-[1.9] mb-8 text-[#3a3730]">
        <div className="block md:hidden space-y-4">
          {bio.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="hidden md:block columns-2 gap-x-8">
          {bio.paragraphs.map((p, i) => (
            <p key={i} className="mb-4">
              {p}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
