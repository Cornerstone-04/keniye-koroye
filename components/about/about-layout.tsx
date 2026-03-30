"use client";

import { AboutMain } from "./about-main";
import { AboutSidebar } from "./about-sidebar";

export function AboutLayout() {
  return (
    <div
      className="flex flex-col md:grid"
      style={{ gridTemplateColumns: "1.2fr 1px 1fr" }}
    >
      <AboutMain />
      <div className="hidden md:block bg-rule" />
      <AboutSidebar />
    </div>
  );
}
