"use client";

import { AboutIntro } from "./about-intro";
import { AboutParagraphs } from "./about-paragraphs";
import { AboutSkills } from "./about-skills";
import { AboutTools } from "./about-tools";

export function AboutMain() {
  return (
    <div className="px-6 md:px-12 py-10">
      <AboutIntro />
      <AboutParagraphs />
      <AboutSkills />
      <AboutTools />
    </div>
  );
}
