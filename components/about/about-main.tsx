"use client";

import FadeIn from "../ui/FadeIn";
import { AboutIntro } from "./about-intro";
import { AboutParagraphs } from "./about-paragraphs";
import { AboutSkills } from "./about-skills";
import { AboutTools } from "./about-tools";

export function AboutMain() {
  return (
    <div className="px-6 md:px-12 py-10">
      <AboutIntro />
      <AboutParagraphs />
      <FadeIn delay={0.45}>
        <div className="my-8 pt-8 border-t border-rule">
          <blockquote className="font-playfair italic text-[1rem] leading-[1.8] text-muted">
            "I design at the intersection of people, systems, and materials,
            where the most interesting problems live."
          </blockquote>
        </div>
      </FadeIn>
      <AboutSkills />
      <AboutTools />
    </div>
  );
}
