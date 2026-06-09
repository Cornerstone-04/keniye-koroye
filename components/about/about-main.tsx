"use client";

import { LuArrowRight } from "react-icons/lu";
import FadeIn from "../ui/FadeIn";
import { AboutIntro } from "./about-intro";
import { AboutParagraphs } from "./about-paragraphs";
import { AboutSkills } from "./about-skills";
import { AboutTools } from "./about-tools";
// import { AboutToolkit } from "./about-toolkit";

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
      {/* <AboutToolkit /> */}
      {/* <div className="mt-8 pt-8 border-t border-rule">
        <h3 className="text-[0.62rem] tracking-[0.2em] uppercase mb-4 text-accent font-mono">
          Now
        </h3>
        <ul className="space-y-2 text-[0.82rem] text-muted leading-relaxed">
          <li className="flex items-center">
            <LuArrowRight className="mr-2" /> Building climate ventures at
            Carbon13
          </li>
          <li className="flex items-center">
            <LuArrowRight className="mr-2" /> Exploring hardware-software
            product intersections
          </li>
          <li className="flex items-center">
            <LuArrowRight className="mr-2" /> Open to advisory & consulting
            opportunities
          </li>
        </ul>
      </div> */}
    </div>
  );
}
