export const personal = {
  name: "Funfere B. Koroye",
  preferredName: "Ken",
  email: "keniye@nupe.london",
  phone: "+44 7487 566 216",
  instagram: "https://instagram.com/keniyekoroye",
  twitter: "https://twitter.com/keniyekoroye",
  location: "London, UK",
  tagline: "Reach out if you want to create impactful technology together.",
};

export const bio = {
  intro:
    "A certified Product Manager and Design Engineer with a strong foundation in Industrial, Service, and UX design.",
  paragraphs: [
    "Funfere brings extensive experience in product development, sales consultancy, and project management, leveraging user empathy, product strategy, and stakeholder collaboration to deliver impactful, market-driven solutions.",
    "With degrees in Industrial & Service Design from SCAD and Domus Academy, and a UX Research/Design certification from the UX Design Institute, he specialises in creating functional, aesthetically-pleasing, and user-centred products.",
    "Awarded the prestigious Global Talent Visa by Tech Nation in 2021, he excels in agile environments and leading cross-functional teams to successfully execute product roadmaps that enhance user experiences.",
  ],
};

export const stats = [
  { num: "3", label: "Degrees & Certifications" },
  { num: "3", label: "Awards" },
  { num: "3", label: "Residencies" },
  { num: "3", label: "Products Shipped" },
];

export const disciplines = [
  "Product Management",
  "Product Development",
  "Product Research",
  "UX / Service Design",
  "Stakeholder Collaboration",
];

export const education = [
  {
    institution: "SCAD",
    full: "Savannah College of Art & Design",
    subject: "Industrial Design — BFA",
    year: "2011",
    certificate: "/images/certificates/scad.png",
  },
  {
    institution: "DOMUS",
    full: "The Domus Academy",
    subject: "Service Design — Master",
    year: "2011/12",
    certificate: "/images/certificates/domus.jpg",
  },
  {
    institution: "UXDI",
    full: "UX Design Institute",
    subject: "Diploma in UX (Research & Design)",
    year: "2022",
    certificate: "/images/certificates/uxdi.png",
  },
];

export const awards = [
  { org: "GRAND OAK", title: "Lord's Achievers Award", year: "2019" },
  { org: "TECH NATION", title: "Global Talent Visa", year: "2021" },
  { org: "ARTS COUNCIL", title: "DYCP Art Grant", year: "2023" },
];

export const residencies = [
  { org: "ANTLER", title: "Entrepreneur In Residence", year: "2022" },
  { org: "ZINC", title: "Aspiring Venture Builder", year: "2023" },
  { org: "CARBON13", title: "Climate Change Founder", year: "2024" },
];

export const timeline = [
  { year: "2024", role: "Climate Change Founder", company: "Carbon13" },
  { year: "2023", role: "Aspiring Venture Builder", company: "Zinc VC" },
  { year: "2022", role: "Entrepreneur In Residence", company: "Antler" },
  {
    year: "2021",
    role: "Global Talent Visa Recipient",
    company: "Tech Nation",
  },
  { year: "2011", role: "BFA Industrial Design", company: "SCAD" },
];

export const skills = [
  { name: "Product Strategy", pct: 92 },
  { name: "User Research", pct: 90 },
  { name: "UX / Service Design", pct: 88 },
  { name: "Product Development", pct: 80 },
  { name: "Stakeholder Mgmt", pct: 85 },
];

export const tools = [
  "Figma",
  "Miro",
  "Jira",
  "Trello",
  "Typeform",
  "Lookback",
  "Mixpanel",
  "Evernote",
];

export const toolkit = {
  explorative: [
    "Research design & roadmaps",
    "Market trends analysis",
    "Interview guides",
  ],
  evaluative: [
    "UX audit of B2C and B2B digital products",
    "Synthesis of past research insights",
    "Heuristic analysis",
  ],
  usability: [
    "Moderated & unmoderated research studies",
    "Screener & survey design",
    "Task modelling",
  ],
  communication: [
    "Topline decks that break down complexity",
    "Presentation style that wins leadership trust",
    "Data-driven storytelling",
  ],
};

export type ProjectTag = "pm" | "dev" | "research";

export interface Project {
  num: string;
  tag: ProjectTag;
  tagLabel: string;
  year: string;
  title: string;
  client: string;
  desc?: string;
  pills: string[];
  bg: string;
  outcomes?: { pct: string; label: string }[];
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    num: "01",
    tag: "research",
    tagLabel: "Research",
    year: "2023",
    title: "Cradle Health — UX Research",
    client: "Cradle Health",
    // desc: "Oversaw a year-long research initiative to optimise the Cradle Health platform for pregnant women and new mothers, covering both web and mobile applications across 4 phases.",
    pills: ["Healthcare", "Femtech", "Mixed Methods", "Longitudinal"],
    bg: "#0d2b3e",
    // outcomes: [
    //   {
    //     pct: "75%",
    //     label: "More intuitive platform with streamlined navigation",
    //   },
    //   { pct: "95%", label: "Increased user engagement and retention" },
    //   { pct: "85%", label: "Seamless cross-platform experience" },
    // ],
    thumbnail: "/images/projects/cradle.png",
  },
  {
    num: "02",
    tag: "pm",
    tagLabel: "PM",
    year: "2023",
    title: "Eight Medical — Product Management",
    client: "Eight Medical",
    // desc: "Led product management for an on-demand urgent and emergency care platform, providing care when it matters most.",
    pills: ["HealthTech", "Emergency Care", "0 to 1", "Mobile"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/eight-medical.png",
  },
  {
    num: "03",
    tag: "pm",
    tagLabel: "PM",
    year: "2023",
    title: "Nupe Energy — Product Management",
    client: "Nupe Energy",
    // desc: "Managed product development for an energy platform, going above and beyond the defined scope to deliver a market-ready solution.",
    pills: ["Energy", "CleanTech", "Strategy", "Roadmapping"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/nupe.png",
  },
];

export const testimonials = [
  { quote: "Vibrant & encouraging enthusiasm", client: "Cradle Health" },
  { quote: "A truly inspiring designer", client: "Eight Medical" },
  { quote: "Went above and beyond the scope", client: "Nupe Energy" },
];

export const articles = [
  {
    num: "01",
    type: "Product Strategy",
    title: "Why Most Product Roadmaps Are a Lie — And What to Do Instead",
    excerpt:
      "A candid look at why traditional roadmaps create false certainty, and a framework for building outcome-based plans that actually adapt to reality.",
    date: "Nov 2024",
  },
  {
    num: "02",
    type: "User Research",
    title: "The 5 Research Methods Every PM Should Know (But Most Skip)",
    excerpt:
      "From contextual enquiry to diary studies — a practical breakdown of research methods that go beyond the standard user interview.",
    date: "Sep 2024",
  },
  {
    num: "03",
    type: "Product Development",
    title: "Technical Debt Is a Product Problem, Not an Engineering One",
    excerpt:
      "How product managers contribute to technical debt — often unknowingly — and the mindset shifts needed to break the cycle.",
    date: "Jul 2024",
  },
  {
    num: "04",
    type: "Leadership",
    title: "Influence Without Authority: The PM's Most Important Skill",
    excerpt:
      "Product managers own nothing and are responsible for everything. Here's how to lead effectively in a structure that works against you.",
    date: "Apr 2024",
  },
  {
    num: "05",
    type: "Design & Tech",
    title:
      "Building for Africa First: Why Context-First Product Thinking Matters",
    excerpt:
      "Why Western product frameworks often fail in emerging markets, and what a context-first approach to product design looks like in practice.",
    date: "Jan 2024",
  },
];
