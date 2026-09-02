"use client";

import { HomeMasthead } from "./home-masthead";
import { HomeMobileLayout } from "./home-mobile-layout";
import { HomeDesktopLayout } from "./home-desktop-layout";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper pt-14.25">
      <HomeMasthead />
      <HomeMobileLayout />
      <HomeDesktopLayout />
    </div>
  );
}
