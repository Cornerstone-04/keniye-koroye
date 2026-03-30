"use client";

import { AboutEducation } from "./about-education";
import { AboutAwards } from "./about-awards";
import { AboutResidencies } from "./about-residencies";
import { AboutTimeline } from "./about-timeline";

export function AboutSidebar() {
  return (
    <div className="px-6 md:px-12 py-10 bg-cream">
      <AboutEducation />
      <AboutAwards />
      <AboutResidencies />
      <AboutTimeline />
    </div>
  );
}
