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
    <section className="px-6 md:px-12 py-10 md:py-14 border-b border-rule">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <FadeIn delay={0.1} className="md:sticky md:top-24 md:self-start">
          <div>
            <GTVSectionLabel>Eligibility Self-Assessment</GTVSectionLabel>
            <h2 className="text-[1.35rem] md:text-2xl font-black leading-tight mb-5">
              Reflect on your readiness.
            </h2>
            <p className="text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted max-w-xl">
              This is not a formal eligibility checker or legal advice. It is a
              practical prompt to help you see whether your profile is starting
              to show the signals that matter.
            </p>
          </div>
          <div className="mt-6 bg-cream px-5 py-5 max-w-xl border border-rule">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-[0.6rem] tracking-[0.18em] uppercase text-muted font-mono">
                Readiness Signals
              </span>
              <span className="font-playfair text-3xl font-black text-accent">
                {score}/{globalTalentAssessment.length}
              </span>
            </div>
            <div className="h-px bg-rule">
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
          <div className="border-t border-rule">
            {globalTalentAssessment.map((item, index) => (
              <label
                key={item.id}
                className="group grid gap-4 py-5 items-start border-b border-rule transition-colors hover:bg-cream/45"
                style={{ gridTemplateColumns: "34px 1fr" }}
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
                  className="mt-1 h-4 w-4 accent-accent"
                />
                <span>
                  <span className="block text-[0.82rem] md:text-[0.9rem] leading-[1.65] text-ink">
                    {item.question}
                  </span>
                  <span className="mt-2 block text-[0.7rem] md:text-[0.76rem] leading-[1.7] text-muted">
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
