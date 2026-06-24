import type { Metadata } from "next";
import PatentsPage from "@/components/story-pages/patents-page";

export const metadata: Metadata = {
  title: "Patents",
  description:
    "Patent-pending innovation by Keniye Koroye exploring wearable intelligence, AI, robotics, and human-machine interaction.",
  alternates: {
    canonical: "/patents",
  },
  openGraph: {
    title: "Patents | Keniyē",
    description:
      "Patent-pending innovation by Keniye Koroye exploring wearable intelligence, AI, robotics, and human-machine interaction.",
    url: "/patents",
  },
};

export default function Page() {
  return <PatentsPage />;
}
