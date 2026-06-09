"use client";

import GlobalTalentVisaHeader from "./global-talent-visa-header";
import { GlobalTalentVisaGuidanceSections } from "./global-talent-visa-guidance-sections";
import { GTVEligibility } from "./gtv-eligibility";
import { GlobalTalentVisaCTA } from "./global-talent-visa-cta";

export default function GlobalTalentVisaPage() {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <GlobalTalentVisaHeader />
      <GlobalTalentVisaGuidanceSections />
      <GTVEligibility />
      <GlobalTalentVisaCTA />
    </div>
  );
}
