"use client";

import { AboutHeader } from "./about-header";
import { AboutLayout } from "./about-layout";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <AboutHeader />
      <AboutLayout />
    </div>
  );
}
