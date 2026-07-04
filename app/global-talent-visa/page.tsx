import GlobalTalentVisaPage from "@/components/global-talent-visa/global-talent-visa-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: {
    absolute: "Global Talent Visa | Keniye Koroye",
  },
  description:
    "Insights, guidance, and lessons from UK Global Talent Visa recipient Keniye Koroye for professionals building exceptional careers and portfolios.",
  path: "/global-talent-visa",
});

export default function Page() {
  return <GlobalTalentVisaPage />;
}
