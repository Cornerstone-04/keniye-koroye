import WorkPage from "@/components/work/work-page";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected product, software, hardware, UX research, and innovation projects by Funfere Keniyē Koroye.",
  path: "/work",
});

export default function Page() {
  return <WorkPage />;
}
