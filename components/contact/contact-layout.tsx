"use client";

import Initials from "@/components/ui/Initials";
import { ContactDetails } from "./contact-details";
import { ContactResponseTime } from "./contact-response-time";

export function ContactLayout() {
  return (
    <div className="grid min-h-125 grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <Initials />
      </div>

      <div className="max-w-2xl px-6 py-10 md:px-12 md:py-14">
        <ContactDetails />
        <ContactResponseTime />
      </div>
    </div>
  );
}
