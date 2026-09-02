"use client";

import FadeIn from "../ui/FadeIn";
import { AboutIntro } from "./about-intro";
import { AboutParagraphs } from "./about-paragraphs";
import { AboutSkills } from "./about-skills";
import { AboutTools } from "./about-tools";

export function AboutMain() {
  return (
    <div className="px-6 py-10 md:px-12">
      <AboutIntro />
      <AboutParagraphs />
      <FadeIn delay={0.45}>
        <div className="my-8 border-t border-rule pt-8">
          <blockquote className="font-playfair text-[1rem] leading-[1.8] text-muted italic">
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
