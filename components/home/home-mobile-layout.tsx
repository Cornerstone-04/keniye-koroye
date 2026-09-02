"use client";

import { HomeHeroImage } from "./home-hero-image";
import { HomeQuote } from "./home-quote";
import { HomeBio } from "./home-bio";
import { HomeCta } from "./home-cta";
import { HomeStats } from "./home-stats";
import { HomeDisciplines } from "./home-disciplines";

export function HomeMobileLayout() {
  return (
    <div className="flex flex-1 flex-col border-b border-rule md:hidden">
      <div className="px-6 pt-8">
        <HomeHeroImage priority={false} />
        <HomeQuote className="mb-8" />
      </div>

      <div className="border-b border-rule px-6 pb-8">
        <HomeBio />
        <HomeCta />
      </div>

      <HomeStats mobile />
      <HomeDisciplines mobile />
    </div>
  );
}
