import type { Metadata } from "next";
import GlobalTalentVisaPage from "@/components/global-talent-visa/global-talent-visa-page";

export const metadata: Metadata = {
  title: {
    absolute: "Global Talent Visa | Keniye Koroye",
  },
  description:
    "Insights, guidance, and lessons from UK Global Talent Visa recipient Keniye Koroye for professionals building exceptional careers and portfolios.",
  alternates: {
    canonical: "/global-talent-visa",
  },
  openGraph: {
    title: "Global Talent Visa | Keniye Koroye",
    description:
      "Insights, guidance, and lessons from UK Global Talent Visa recipient Keniye Koroye for professionals building exceptional careers and portfolios.",
    url: "/global-talent-visa",
  },
};

export default function Page() {
  return <GlobalTalentVisaPage />;
}
