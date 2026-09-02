"use client";

import FadeIn from "@/components/ui/FadeIn";
import { bio } from "@/lib/data";

export function AboutParagraphs() {
  return (
    <FadeIn delay={0.2}>
      <div className="mb-8 text-[0.82rem] leading-[1.9] text-[#3a3730]">
        <div className="block space-y-4 md:hidden">
          {bio.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="hidden columns-2 gap-x-8 md:block">
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
