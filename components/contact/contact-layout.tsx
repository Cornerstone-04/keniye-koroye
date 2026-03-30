"use client";

import Initials from "@/components/ui/Initials";
import { ContactDetails } from "./contact-details";
import { ContactResponseTime } from "./contact-response-time";

export function ContactLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-125">
      <div className="hidden md:block">
        <Initials />
      </div>

      <div className="px-6 md:px-12 py-10 md:py-14 max-w-2xl">
        <ContactDetails />
        <ContactResponseTime />
      </div>
    </div>
  );
}
