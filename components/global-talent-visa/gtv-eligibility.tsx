"use client";

import { globalTalentAssessment } from "@/lib/gtv-details";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";
import { useState, useMemo } from "react";

export const GTVEligibility = () => {
  const [checked, setChecked] = useState<boolean[]>(
    globalTalentAssessment.map(() => false),
  );

  const score = checked.filter(Boolean).length;
  const result = useMemo(() => {
    if (score <= 2) {
      return "Start by tightening your positioning and gathering clearer evidence of impact.";
    }

    if (score <= 4) {
      return "You may have the beginnings of a strong story. Look for gaps in validation, leadership, or proof.";
    }

    return "You have several useful signals. The next step is shaping them into a coherent, verifiable story.";
  }, [score]);

  return (
    <section className="border-b border-rule px-6 py-10 md:px-12 md:py-14">
      <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
        <FadeIn delay={0.1} className="md:sticky md:top-24 md:self-start">
          <div>
            <GTVSectionLabel>Readiness Check</GTVSectionLabel>
            <h2
              className="mb-5 max-w-md font-playfair leading-tight font-black -tracking-[0.02em]"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.25rem)" }}
            >
              A quick pause before the paperwork.
            </h2>
            <p className="max-w-xl text-[0.78rem] leading-[1.85] text-muted md:text-[0.85rem]">
              This is not a formal eligibility checker or legal advice. It is a
              practical prompt to help you see whether your profile is starting
              to show the signals that matter.
            </p>
          </div>
          <div className="mt-8 max-w-xl border-t border-rule pt-5">
            <span className="font-mono text-[0.6rem] tracking-[0.18em] text-muted uppercase">
              Readiness Signals
            </span>
            <div className="mt-3 flex items-end gap-4">
              <span className="font-playfair text-5xl leading-none font-black text-accent">
                {score}
              </span>
              <span className="pb-1 font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                of {globalTalentAssessment.length} signals
              </span>
            </div>
            <div className="mt-5 h-px bg-rule">
              <div
                className="h-px bg-accent transition-all duration-300"
                style={{
                  width: `${(score / globalTalentAssessment.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-4 text-[0.75rem] leading-[1.75] text-muted">
              {result}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-3">
            {globalTalentAssessment.map((item, index) => (
              <label
                key={item.id}
                className="group grid cursor-pointer items-start gap-4 border border-rule px-4 py-4 transition-colors hover:bg-cream/55 md:px-5 md:py-5"
                style={{ gridTemplateColumns: "32px 1fr" }}
              >
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() =>
                    setChecked((current) =>
                      current.map((value, itemIndex) =>
                        itemIndex === index ? !value : value,
                      ),
                    )
                  }
                  className="mt-1 size-4 appearance-none border border-rule bg-paper transition-colors checked:border-accent checked:bg-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:outline-none"
                />
                <span>
                  <span className="block text-[0.82rem] leading-[1.65] text-ink md:text-[0.9rem]">
                    {item.question}
                  </span>
                  <span className="mt-2 block text-[0.7rem] leading-[1.7] text-muted md:text-[0.76rem]">
                    {item.requirement}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
