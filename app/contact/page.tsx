import type { Metadata } from "next";
import ContactPage from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Funfere Keniyē Koroye for product management, product development, UX research, and technology collaboration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Keniyē",
    description:
      "Contact Funfere Keniyē Koroye for product management, product development, UX research, and technology collaboration.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
