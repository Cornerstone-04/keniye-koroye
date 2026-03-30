"use client";

import { motion } from "motion/react";
import { HomeHeroImage } from "./home-hero-image";
import { HomeQuote } from "./home-quote";
import { HomeBio } from "./home-bio";
import { HomeCta } from "./home-cta";
import { HomeStats } from "./home-stats";
import { HomeDisciplines } from "./home-disciplines";

export function HomeDesktopLayout() {
  return (
    <div
      className="flex-1 hidden md:grid border-b border-rule"
      style={{ gridTemplateColumns: "1fr 1px 1.6fr 1px 1fr" }}
    >
      <div className="p-10">
        <HomeStats />
      </div>

      <div className="bg-rule" />

      <div className="p-10">
        <HomeHeroImage priority />
        <HomeQuote />
      </div>

      <div className="bg-rule" />

      <div className="p-10">
        <HomeBio />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <HomeCta />
        </motion.div>

        <div className="mt-10 pt-8 border-t border-rule">
          <HomeDisciplines />
        </div>
      </div>
    </div>
  );
}
