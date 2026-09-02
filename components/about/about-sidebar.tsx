"use client";

import { AboutEducation } from "./about-education";
import { AboutAwards } from "./about-awards";
import { AboutResidencies } from "./about-residencies";
import { AboutTimeline } from "./about-timeline";

export function AboutSidebar() {
  return (
    <div className="bg-cream px-6 py-10 md:px-12">
      <AboutEducation />
      <AboutAwards />
      <AboutResidencies />
      <AboutTimeline />
    </div>
  );
}
