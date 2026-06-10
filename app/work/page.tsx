import type { Metadata } from "next";
import WorkPage from "@/components/work/work-page";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product, software, hardware, UX research, and innovation projects by Funfere Keniyē Koroye.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Keniyē",
    description:
      "Selected product, software, hardware, UX research, and innovation projects by Funfere Keniyē Koroye.",
    url: "/work",
  },
};

export default function Page() {
  return <WorkPage />;
}
