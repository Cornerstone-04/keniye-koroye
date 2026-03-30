"use client";

import { HomeMasthead } from "./home-masthead";
import { HomeMobileLayout } from "./home-mobile-layout";
import { HomeDesktopLayout } from "./home-desktop-layout";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper pt-14.25 flex flex-col">
      <HomeMasthead />
      <HomeMobileLayout />
      <HomeDesktopLayout />
    </div>
  );
}
