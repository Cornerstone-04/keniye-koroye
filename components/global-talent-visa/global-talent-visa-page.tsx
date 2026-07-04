import { GlobalTalentVisaCTA } from "./global-talent-visa-cta";
import { GlobalTalentVisaGuidanceSections } from "./global-talent-visa-guidance-sections";
import { GlobalTalentVisaHeader } from "./global-talent-visa-header";
import { GlobalTalentVisaIntro } from "./global-talent-visa-intro";
import { GlobalTalentVisaJourney } from "./global-talent-visa-journey";
import { GlobalTalentVisaApplicationStructure } from "./gtv-application-structure";
import { GTVEligibility } from "./gtv-eligibility";

export default function GlobalTalentVisaPage() {
  return (
    <div className="min-h-screen pt-14.25 bg-paper">
      <GlobalTalentVisaHeader />
      <GlobalTalentVisaIntro />
      <GlobalTalentVisaJourney />
      <GlobalTalentVisaGuidanceSections />
      <GlobalTalentVisaApplicationStructure />
      <GTVEligibility />
      <GlobalTalentVisaCTA />
    </div>
  );
}
