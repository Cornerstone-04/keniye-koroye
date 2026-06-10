"use client";

import Image from "next/image";
import { motion } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaJourney = () => {
  return (
    <section className="border-b border-rule">
      <div className="px-6 md:px-12 py-10 md:py-14">
        <GTVSectionLabel>My Journey</GTVSectionLabel>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16">
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
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-3/4 md:aspect-4/3 w-full overflow-hidden border border-rule bg-cream">
              <Image
                src="/images/keniye-gtv.jpeg"
                alt="Keniyē Koroye during his Global Talent Visa journey"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
