"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { visaBenefits, visaExpertise } from "@/lib/gtv-details";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaJourney = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 md:px-12 py-10 md:py-14">
        <GTVSectionLabel>My Journey</GTVSectionLabel>

        <div className="grid grid-cols-1 items-stretch md:grid-cols-2 gap-8 md:gap-16">
          <FadeIn delay={0.1}>
            <div>
              <h2
                className="font-black leading-tight font-playfair -tracking-[0.02em] mb-6"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
              >
                The application started years before I applied.
              </h2>

              <div className="space-y-4 text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
                <p>
                  One of the biggest misconceptions about the Global Talent Visa
                  is that the application begins when you decide to apply.
                </p>
                <p>In reality, it begins years earlier.</p>

                <ul className="space-y-2 py-1">
                  {[
                    "The projects you build.",
                    "The people you work with.",
                    "The communities you contribute to.",
                    "The reputation you earn.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  By the time I submitted my application, the evidence already
                  existed. The challenge was simply presenting the story
                  clearly.
                </p>
              </div>

              <div className="mt-4 pt-4">
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-accent font-mono">
                  Benefits Of The Visa
                </span>
                <div className="mt-4 grid gap-0 border-t border-rule">
                  {visaBenefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="grid gap-4 border-b border-rule py-3.5"
                      style={{ gridTemplateColumns: "28px 1fr" }}
                    >
                      <span className="font-playfair font-black text-[0.75rem] text-muted/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.76rem] md:text-[0.82rem] leading-snug text-muted">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:h-full">
            <div className="md:h-full">
              <div className="relative aspect-3/4 w-full overflow-hidden border border-rule bg-cream md:h-full md:aspect-auto">
                <Image
                  src="/images/keniye-gtv.jpeg"
                  alt="Keniyē Koroye during his Global Talent Visa journey"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
