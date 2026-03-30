"use client";

import { AboutHeader } from "./about-header";
import { AboutLayout } from "./about-layout";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <AboutHeader />
      <AboutLayout />
    </div>
  );
}
