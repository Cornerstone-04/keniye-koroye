"use client";

import { personal } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";
import FadeIn from "../ui/FadeIn";
import { GTVSectionLabel } from "./gtv-section-label";

export const GlobalTalentVisaCTA = () => {
  return (
    <section className="px-6 md:px-12 py-10 md:py-14 border-b-[3px] border-double border-ink">
      <div className="bg-cream border border-rule px-5 py-7 md:px-8 md:py-9">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 md:items-end">
        <FadeIn delay={0.1}>
          <div>
            <GTVSectionLabel>Let&apos;s Talk</GTVSectionLabel>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Want an honest assessment of your profile?
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6 max-w-xl">
            <p className="text-[0.78rem] md:text-[0.85rem] leading-[1.85] text-muted">
              If you&apos;re working toward the Global Talent Visa and want
              practical feedback on your positioning, evidence, portfolio, or
              overall readiness, let&apos;s talk.
            </p>
            <p className="text-[0.72rem] md:text-[0.78rem] leading-[1.75] text-muted">
              A conversation can help you understand your path more clearly
              before you start organising documents.
            </p>
            <a
              href={personal.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase font-mono no-underline text-paper bg-ink px-6 md:w-auto md:px-7 py-3.5 transition-all ease-linear duration-200 hover:bg-accent"
            >
              Book A Call
              <span>
                <BsArrowRight />
              </span>
            </a>
          </div>
        </FadeIn>
        </div>
      </div>
    </section>
  );
};
