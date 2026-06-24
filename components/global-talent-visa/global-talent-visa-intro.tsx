"use client";

import FadeIn from "@/components/ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

const guideNotes = [
  {
    label: "Perspective",
    text: "This is guidance from someone who has gone through the process, not a government checklist.",
  },
  {
    label: "Focus",
    text: "The goal is to understand how your work, evidence, positioning, and reputation connect.",
  },
  {
    label: "Use",
    text: "Read it as a practical resource for shaping a clearer, stronger professional profile.",
  },
];

export function GlobalTalentVisaIntro() {
  return (
    <section className="px-6 md:px-12 py-8 md:py-10 border-b border-rule">
      <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <FadeIn delay={0.05}>
          <div>
            <GTVSectionLabel>How To Use This Page</GTVSectionLabel>
            <p className="font-playfair text-2xl md:text-3xl font-black leading-tight">
              A practical guide from a Global Talent Visa recipient.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="grid gap-0 border-t border-rule md:grid-cols-3 md:border-l">
            {guideNotes.map((note, index) => (
              <div
                key={note.label}
                className="border-b border-rule py-4 md:border-r md:px-4"
              >
                <span className="font-playfair text-[0.8rem] font-black text-muted/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[0.56rem] tracking-[0.16em] uppercase text-accent font-mono">
                  {note.label}
                </p>
                <p className="mt-3 text-[0.74rem] md:text-[0.8rem] leading-[1.75] text-muted">
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
