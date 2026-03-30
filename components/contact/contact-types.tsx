import { personal } from "@/lib/data";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
};

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: <FaEnvelope size={16} />,
  },
  {
    label: "Location",
    value: personal.location,
    icon: <FaLocationDot size={16} />,
  },
  {
    label: "Linkedin",
    value: "Keniye Koroye",
    href: personal.linkedin,
    icon: <FaLinkedin size={14} />,
  },
  {
    label: "Instagram",
    value: "@keniyekoroye",
    href: personal.instagram,
    icon: <FaInstagram size={14} />,
  },
  {
    label: "X/Twitter",
    value: "@keniyekoroye",
    href: personal.twitter,
    icon: <FaXTwitter size={14} />,
  },
];
