export type ProjectTag =
  "hardware" | "software" | "product" | "art" | "tech" | "fashion";

export interface ProjectOutcome {
  pct: string;
  label: string;
}

export interface ProjectDetailSection {
  label: string;
  title?: string;
  body: string;
}

export interface ProjectDetailGroup {
  label: string;
  items: string[];
}

export interface ProjectExternalLink {
  label: string;
  href: string;
}

export type ProjectContentStatus = "confirmed" | "needs-review";

export interface ProjectDetails {
  headline: string;
  summary: string;
  contentStatus?: ProjectContentStatus;
  contentNote?: string;
  status?: string;
  role?: string;
  context?: string;
  disciplines: string[];
  heroImage?: string;
  gallery?: string[];
  sections: ProjectDetailSection[];
  detailGroups?: ProjectDetailGroup[];
  features?: string[];
  technicalNotes?: string[];
  culturalReferences?: string[];
  externalLinks?: ProjectExternalLink[];
  shopUrl?: string;
  relatedSlugs?: string[];
}

export interface Project {
  num: string;
  slug?: string;
  tag: ProjectTag;
  tagLabel: string;
  year: string;
  title: string;
  client: string;
  desc?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  pills: string[];
  bg: string;
  outcomes?: ProjectOutcome[];
  thumbnail?: string;
  productDetails?: ProjectDetails;
}

export const projects: Project[] = [
  {
    num: "01",
    slug: "cradle-health",
    tag: "software",
    tagLabel: "Software",
    year: "2023",
    title: "Cradle Health",
    client: "Cradle Health",
    pills: ["Healthcare", "Femtech", "Mobile"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/cradle-health/mockup-1.png",
    desc: "A year-long UX research initiative for Cradle Health, focused on improving the platform experience for pregnant women and new mothers across web and mobile.",
    outcomes: [
      {
        pct: "75%",
        label: "More intuitive navigation and accessible content",
      },
      {
        pct: "95%",
        label: "Increased engagement and retention through user-led features",
      },
      {
        pct: "85%",
        label: "More seamless web and mobile experience",
      },
    ],
    productDetails: {
      headline:
        "A year-long research initiative to make maternal healthcare feel clearer, more intuitive, and easier to use.",
      summary:
        "Cradle Health is a healthcare company offering digital services tailored to pregnant women and new mothers, with a focus on prenatal care, newborn health management, and accessible healthcare resources.",
      status: "Client Work",
      role: "Product Manager",
      context: "1 Year",
      disciplines: [
        "UX Research",
        "Healthcare",
        "Femtech",
        "Web Application",
        "Mobile Application",
      ],
      heroImage: "/images/projects/cradle-health/mockup-1.png",
      gallery: [
        "/images/projects/cradle-health/mockup-2.png",
        "/images/projects/cradle-health/mockup-3.png",
        "/images/projects/cradle-health/mockup-4.png",
        "/images/projects/cradle-health/mockup-5.png",
      ],
      sections: [
        {
          label: "Overview",
          title: "Optimising the platform across web and mobile.",
          body: "The project focused on a year-long research initiative to optimise the Cradle Health platform for pregnant women and new mothers, with attention to both web and mobile applications.",
        },
        {
          label: "Objectives",
          title: "Understand user needs as they evolve over time.",
          body: "The research aimed to gain insight into how the needs of pregnant women and new mothers change throughout their journey, from early pregnancy to postpartum, while continuously improving usability, identifying emerging pain points, optimising the cross-platform experience, sustaining engagement, and informing strategic product development.",
        },
        {
          label: "Approach",
          title:
            "A mixed-methods research process built around continuous learning.",
          body: "The work combined quantitative methods such as surveys and analytics review with qualitative research, including in-depth interviews, usability testing, diary studies, and phased research execution. The approach allowed the team to iterate, refine, and respond to user feedback throughout the year.",
        },
        {
          label: "Insights",
          title:
            "Clearer understanding of user behaviour, pain points, and practical needs.",
          body: "The research surfaced how pregnant women and new mothers use the platform, what they prefer across web and mobile, and which tasks they perform most frequently. It also identified common frustrations such as navigation issues, content access barriers, and challenges around features like virtual consultations.",
        },
      ],
      features: [
        "Typeform for online surveys",
        "Lookback for remote usability testing",
        "Mixpanel for behaviour and drop-off tracking",
        "Trello for research task management",
        "Figma for wireframes, prototypes, and design iteration",
        "Evernote for diary study capture",
      ],
      technicalNotes: [
        "Phase 1: Initial research, surveys, interviews, and baseline usability testing",
        "Phase 2: In-depth usability studies, diary studies, and contextual inquiries",
        "Phase 3: Iterative design testing, feedback implementation, and cross-platform optimisation",
        "Phase 4: Post-implementation evaluation, follow-up research, and final recommendations",
      ],
      relatedSlugs: ["eight-medical", "nupe-energy"],
    },
  },
  {
    num: "02",
    slug: "kelvar-dome",
    tag: "hardware",
    tagLabel: "Hardware",
    year: "2026",
    title: "Dome",
    client: "Kelvar Industries",
    pills: ["Surveillance", "Drone Tech", "Robotics"],
    bg: "#0d2b3e",
    thumbnail: "/images/projects/kelvar-dome/dome.jpg",
    desc: "An AI-powered autonomous aerial CCTV swarm platform for residential, commercial, and industrial security.",
    productDetails: {
      headline: "Static CCTV becomes an autonomous protective field.",
      summary:
        "Dome is an AI-powered autonomous aerial CCTV swarm designed by Kelvar Industries for residential, commercial, and industrial security.",
      status: "Platform",
      role: "Product / industrial design",
      context: "Kelvar Industries",
      disciplines: ["Hardware", "Surveillance", "Drone Systems", "Robotics"],
      heroImage: "/images/projects/kelvar-dome/dome.jpg",
      sections: [
        {
          label: "Context",
          title: "A moving surveillance network.",
          body: "Kelvar describes Dome as a living CCTV network where cameras do not remain fixed to walls. They fly, reposition, track, and respond to create dynamic aerial visibility.",
        },
        {
          label: "System Logic",
          title: "Detect, classify, coordinate, respond.",
          body: "The platform uses AI, machine learning, predictive threat analytics, and communication between drones to create overlapping security coverage rather than isolated camera feeds.",
        },
        {
          label: "Use",
          title:
            "Built for homes, estates, commercial sites, farms, and industrial zones.",
          body: "The platform is positioned for residential, commercial, agricultural, and industrial security contexts where blind spots, perimeter edges, and high-risk zones need persistent visibility.",
        },
      ],
      features: [
        "Autonomous patrol swarm",
        "Dome Dock",
        "Solar-powered surveillance",
        "Night and low-light vision",
        "Quiet residential-safe operation",
      ],
      technicalNotes: [
        "AI, ML, and predictive analytics",
        "Thermal, infrared, and LiDAR vision",
        "360-degree dynamic coverage",
        "Gunshot, glass-breaking, and fire sensing",
      ],
      externalLinks: [
        {
          label: "View Dome on Kelvar",
          href: "https://www.kelvarindustries.com/drones/dome",
        },
      ],
      relatedSlugs: ["kelvar-hydrax", "kelvar-robobot"],
    },
  },
  {
    num: "03",
    slug: "eight-medical",
    tag: "software",
    tagLabel: "Software",
    year: "2023",
    title: "Eight Medical",
    client: "Eight Medical",
    pills: ["HealthTech", "Emergency Care", "Mobile"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/eight-medical/eight-medical.png",
    desc: "A UX research engagement for a healthtech product in the emergency care space.",
    productDetails: {
      headline: "Research for high-pressure healthcare decisions.",
      summary:
        "A software research project for a healthtech experience connected to emergency care, where speed, comprehension, and trust are central to the product journey.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from existing project title/category and visual asset, not confirmed source copy.",
      status: "Client Work",
      role: "UX Research",
      context: "Eight Medical",
      disciplines: ["UX Research", "HealthTech", "Emergency Care"],
      heroImage: "/images/projects/eight-medical/eight-medical.png",
      sections: [
        {
          label: "Context",
          title: "Emergency care products must reduce uncertainty.",
          body: "The project can be positioned around making urgent healthcare interactions easier to understand, with research helping identify what information users need and where the experience may create friction.",
        },
        {
          label: "Research Lens",
          title: "Turning healthcare complexity into usable flows.",
          body: "The work likely involved reviewing user journeys, product language, and interface expectations so that the product could support clearer decision-making in a high-stakes context.",
        },
      ],
      features: ["Healthtech UX", "Emergency care", "Research synthesis"],
      relatedSlugs: ["cradle-health", "nupe-energy"],
    },
  },
  {
    num: "04",
    slug: "kelvar-hydrax",
    tag: "hardware",
    tagLabel: "Hardware",
    year: "2026",
    title: "Hydrax",
    client: "Kelvar Industries",
    pills: ["Surveillance", "Drone Tech", "Robotics"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/kelvar-hydrax/hydrax_angle.png",
    desc: "A Kelvar Industries surveillance platform within its autonomous security systems portfolio.",
    productDetails: {
      headline:
        "A surveillance platform for environments beyond static coverage.",
      summary:
        "Hydrax is part of Kelvar Industries' autonomous security platform family, positioned within a broader portfolio of systems for surveillance, defence technology, and resilient coverage.",
      status: "Platform",
      role: "Product / industrial design",
      context: "Kelvar Industries",
      disciplines: ["Hardware", "Surveillance", "Drone Systems", "Robotics"],
      heroImage: "/images/projects/kelvar-hydrax/hydrax_angle.png",
      sections: [
        {
          label: "Context",
          title: "Autonomous surveillance for moving risk.",
          body: "Kelvar frames its work around intelligent autonomous surveillance systems designed to protect people, property, and progress across environments where conventional security coverage can fall short.",
        },
        {
          label: "Platform",
          title: "Designed as part of Kelvar's security ecosystem.",
          body: "Hydrax sits alongside Dome and Robobot as one of Kelvar's named platforms, extending the company's focus on autonomous systems, drone R&D, and security technology.",
        },
      ],
      features: ["Autonomous security", "Surveillance platform", "Robotics"],
      externalLinks: [
        {
          label: "Visit Kelvar Industries",
          href: "https://www.kelvarindustries.com/",
        },
      ],
      relatedSlugs: ["kelvar-dome", "kelvar-robobot"],
    },
  },
  {
    num: "05",
    slug: "nupe-energy",
    tag: "software",
    tagLabel: "Software",
    year: "2023",
    title: "Nupe Energy",
    client: "Nupe Energy",
    pills: ["Energy", "CleanTech", "Mobile"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/nupe-energy/nupe.png",
    desc: "A UX research engagement for a clean energy software product.",
    productDetails: {
      headline: "Research for a cleaner energy product experience.",
      summary:
        "A software research project for a clean technology product, focused on making energy access and product interactions easier to understand.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from existing project title/category and visual asset, not confirmed source copy.",
      status: "Client Work",
      role: "UX Research",
      context: "Nupe Energy",
      disciplines: ["UX Research", "CleanTech", "Energy"],
      heroImage: "/images/projects/nupe-energy/nupe.png",
      sections: [
        {
          label: "Context",
          title: "Energy products need simple, trustworthy interactions.",
          body: "The project can be framed around improving how users understand and interact with a clean energy product, especially where trust, payment, access, or ongoing usage may shape the experience.",
        },
        {
          label: "Research Lens",
          title: "Clarifying the product journey.",
          body: "The research direction likely supported clearer flows, stronger product communication, and better alignment between user needs and the service model.",
        },
      ],
      features: ["CleanTech UX", "Energy access", "Mobile product research"],
      relatedSlugs: ["cradle-health", "eight-medical"],
    },
  },
  {
    num: "06",
    slug: "kelvar-robobot",
    tag: "hardware",
    tagLabel: "Hardware",
    year: "2026",
    title: "Robobot",
    client: "Kelvar Industries",
    pills: ["Surveillance", "Drone Tech", "Robotics"],
    bg: "#0d2b3e",
    thumbnail: "/images/projects/kelvar-robobot/robobot.jpg",
    desc: "A Kelvar Industries robotic surveillance platform within its autonomous security systems portfolio.",
    productDetails: {
      headline:
        "Robotic security for terrain where cameras cannot simply stay still.",
      summary:
        "Robobot is part of Kelvar Industries' autonomous security platform family, connected to the company's focus on robotics, surveillance, and intelligent coverage.",
      status: "Platform",
      role: "Product / industrial design",
      context: "Kelvar Industries",
      disciplines: [
        "Hardware",
        "Surveillance",
        "Robotics",
        "Autonomous Systems",
      ],
      heroImage: "/images/projects/kelvar-robobot/robobot.jpg",
      sections: [
        {
          label: "Context",
          title: "Security systems that move with the environment.",
          body: "Kelvar describes its work as autonomous surveillance technology for air, land, sea, and space security, with platforms designed to deliver clarity and coverage where risk follows.",
        },
        {
          label: "Platform",
          title: "A named robotics platform in the Kelvar ecosystem.",
          body: "Robobot sits beside Dome and Hydrax as one of Kelvar's platform concepts, extending the company narrative from aerial surveillance into broader autonomous security systems.",
        },
      ],
      features: [
        "Robotic surveillance",
        "Autonomous security",
        "Platform design",
      ],
      externalLinks: [
        {
          label: "Visit Kelvar Industries",
          href: "https://www.kelvarindustries.com/",
        },
      ],
      relatedSlugs: ["kelvar-dome", "kelvar-hydrax"],
    },
  },
  {
    num: "07",
    slug: "jaza-battery",
    tag: "product",
    tagLabel: "Products",
    year: "2019",
    title: "JAZA BATTERY",
    client: "Product Design",
    pills: ["Product", "Industrial Design", "Energy"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/jaza-battery/jaza-2.png",
    desc: "A portable battery enclosure study for energy access, built around carryability, brand presence, and field use.",
    productDetails: {
      headline: "A portable power object with a visible identity.",
      summary:
        "JAZA BATTERY presents a handled power unit whose enclosure, proportions, and graphic surface language make the battery feel portable, recognizable, and ready for everyday field use.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation and the timeline reference to Jaza Energy, not confirmed source copy.",
      status: "Client Work",
      role: "Industrial Design",
      context: "Jaza Energy",
      disciplines: ["Industrial Design", "Energy Access", "Product Enclosure"],
      heroImage: "/images/projects/jaza-battery/jaza-2.png",
      sections: [
        {
          label: "Context",
          title: "Energy access as a carried object.",
          body: "The design treats the battery as something that may need to be moved, exchanged, stored, and recognized quickly, using a strong handle form and bold graphic identity.",
        },
        {
          label: "Design Response",
          title: "A protective enclosure with brand character.",
          body: "The object balances utility and visibility: a robust box form, integrated carry handle, and surface graphics that make the battery feel less like anonymous hardware and more like a branded product system.",
        },
      ],
      features: [
        "Integrated handle",
        "Branded enclosure",
        "Portable power form",
      ],
      relatedSlugs: ["nugas", "sense"],
    },
  },
  {
    num: "08",
    slug: "spritz-brush",
    tag: "product",
    tagLabel: "Products",
    year: "2023",
    title: "SPRITZ BRUSH",
    client: "Product Design",
    pills: ["Product", "Industrial Design", "Personal Care"],
    bg: "#0d2b3e",
    thumbnail: "/images/projects/spritz-brush/spritz-brush-2.png",
    desc: "A personal-care product study developed through technical drawing, ergonomics, and component detailing.",
    productDetails: {
      headline: "A grooming object resolved through engineering detail.",
      summary:
        "SPRITZ BRUSH is presented through technical views, section drawings, and dimensional details, positioning the project as a personal-care object developed with attention to ergonomics and manufacturing logic.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of technical drawing asset, not confirmed source copy.",
      status: "Product Study",
      role: "Industrial Design",
      context: "Personal Care",
      disciplines: ["Industrial Design", "Technical Drawing", "Ergonomics"],
      heroImage: "/images/projects/spritz-brush/spritz-brush-2.png",
      gallery: ["/images/projects/spritz-brush/spritz-brush.jpg"],
      sections: [
        {
          label: "Context",
          title: "A handheld tool shaped by grip and routine.",
          body: "The product sits in the everyday personal-care category, where comfort, reach, weight, and intuitive use matter as much as the visible form.",
        },
        {
          label: "Process",
          title: "Technical drawing as design development.",
          body: "The drawing set shows front, side, sectional, and dimensional views, suggesting a product developed beyond styling into component proportion, handle geometry, and manufacturable detail.",
        },
      ],
      features: [
        "Ergonomic handle",
        "Comb/brush head",
        "Section view",
        "Dimensional study",
      ],
      technicalNotes: ["Section B-B", "Measured handle and brush proportions"],
      relatedSlugs: ["equalizer", "sense"],
    },
  },
  {
    num: "09",
    slug: "equalizer",
    tag: "product",
    tagLabel: "Products",
    year: "2022",
    title: "EQUALIZER",
    client: "Product Design",
    pills: ["Product", "Industrial Design", "Wearables"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/equalizer/equaliser-2.png",
    desc: "A wearable body-interface concept exploring recovery, touch points, and portable electronic interaction.",
    productDetails: {
      headline: "A triangular interface for the body.",
      summary:
        "EQUALIZER appears as a wearable or attachable body device, combining soft-contact pads, physical controls, charging, and a compact triangular form language.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of sketches, renders, and body-use imagery, not confirmed source copy.",
      status: "Concept / Prototype Study",
      role: "Industrial Design",
      context: "Wearable Wellness",
      disciplines: ["Industrial Design", "Wearables", "Product Interaction"],
      heroImage: "/images/projects/equalizer/equaliser-2.png",
      sections: [
        {
          label: "Context",
          title: "A device designed around contact with the body.",
          body: "The project explores how an electronic object can sit on the body, communicate function through controls and pads, and remain compact enough for everyday handling.",
        },
        {
          label: "Design Response",
          title: "Controls, pads, and casing become one interface.",
          body: "The triangular form organizes the product's touch points, buttons, charging port, and body-facing surfaces into a single readable object.",
        },
      ],
      features: [
        "Triangular form",
        "Physical controls",
        "Charging port",
        "Body-contact pad",
      ],
      technicalNotes: [
        "Recessed power button",
        "Electrode gel pad concept",
        "USB charging port",
      ],
      relatedSlugs: ["spritz-brush", "sense"],
    },
  },
  {
    num: "10",
    slug: "nugas",
    tag: "tech",
    tagLabel: "Tech",
    year: "2021",
    title: "NUGAS",
    client: "Product Design",
    pills: ["Product", "CleanTech", "Industrial Design"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/nugas/nugas-2.png",
    desc: "An IoT-enabled smart meter for pay-as-you-go LPG cylinders, designed to expand access to clean cooking gas in Africa.",
    productDetails: {
      headline: "Pay-as-you-go gas access, measured in real time.",
      summary:
        "NUGAS is an IoT-enabled smart meter for pay-as-you-go Liquefied Petroleum Gas cylinders, helping households buy gas in small increments instead of paying for a full refill upfront.",
      status: "Product System",
      role: "Industrial Design",
      context: "Clean Cooking / LPG Access",
      disciplines: ["Industrial Design", "IoT", "Clean Energy", "Hardware"],
      heroImage: "/images/projects/nugas/nugas-2.png",
      sections: [
        {
          label: "Context",
          title: "Cleaner cooking needs a more flexible payment model.",
          body: "The product is designed for households that need access to LPG without the financial pressure of paying for a full cylinder refill at once.",
        },
        {
          label: "System",
          title: "A smart meter connected to mobile money.",
          body: "By connecting to a mobile money platform, the device supports small, affordable gas purchases while monitoring consumption in real time.",
        },
        {
          label: "Continuity",
          title: "Monitoring that prevents sudden shortages.",
          body: "The integrated smart technology alerts suppliers when gas levels run low, supporting smoother cylinder exchange and reducing the risk of unexpected fuel shortages.",
        },
      ],
      features: [
        "Pay-as-you-go LPG metering",
        "Mobile money integration",
        "Real-time consumption monitoring",
        "Low-gas supplier alerts",
      ],
      technicalNotes: [
        "Flow meter",
        "PCBA",
        "8000mAh lithium-ion battery",
        "Gas outlet",
        "Lock mechanism",
        "27mm regulator",
      ],
      relatedSlugs: ["sense", "omi"],
    },
  },
  {
    num: "11",
    slug: "sense",
    tag: "tech",
    tagLabel: "Tech",
    year: "2022",
    title: "SENSE",
    client: "Product Design",
    pills: ["Product", "Industrial Design", "IoT"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/sense/sense-2.png",
    desc: "A plug-in sensing device concept exploring domestic monitoring, visual feedback, and compact electronics.",
    productDetails: {
      headline: "A small detector designed to live in the wall.",
      summary:
        "SENSE appears as a plug-in sensor device with a compact housing, illuminated status ring, USB detail, and internal electronics organized for a domestic monitoring experience.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of plug-in detector imagery, sketches, and exploded view, not confirmed source copy.",
      status: "Concept / Prototype Study",
      role: "Industrial Design",
      context: "Domestic Sensing",
      disciplines: ["Industrial Design", "IoT", "Product Enclosure"],
      heroImage: "/images/projects/sense/sense-2.png",
      sections: [
        {
          label: "Context",
          title: "A sensor that communicates quietly.",
          body: "The project explores how a domestic device can sit in a wall outlet, monitor its environment, and communicate status through a minimal visual language.",
        },
        {
          label: "Design Response",
          title: "Electronics packaged as a simple home object.",
          body: "The square form, rounded edges, LED ring, and compact plug-in body make the device feel closer to a household product than exposed technical hardware.",
        },
      ],
      features: [
        "Plug-in form",
        "LED status ring",
        "Compact enclosure",
        "Exploded electronics",
      ],
      technicalNotes: [
        "Battery housing sketch",
        "Air inlet/detector sketch",
        "USB/power detail",
      ],
      relatedSlugs: ["nugas", "omi"],
    },
  },
  {
    num: "12",
    slug: "omi",
    tag: "tech",
    tagLabel: "Tech",
    year: "2019",
    title: "OMI",
    client: "Product Design",
    pills: ["Product", "CleanTech", "Industrial Design"],
    bg: "#0d2b3e",
    thumbnail: "/images/projects/omi/omi-2.png",
    desc: "A bottle-mounted water filtration concept designed around everyday access, portability, and simple use.",
    productDetails: {
      headline: "Water filtration designed for the bottle already in hand.",
      summary:
        "OMI appears as a portable water filtration attachment, using a bottle-mounted tube system to improve access to cleaner drinking water through a compact, familiar format.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of filtration diagrams and use imagery, not confirmed source copy.",
      status: "Concept / Product Study",
      role: "Industrial Design",
      context: "Water Access",
      disciplines: [
        "Industrial Design",
        "Water Filtration",
        "Humanitarian Design",
      ],
      heroImage: "/images/projects/omi/omi-2.png",
      sections: [
        {
          label: "Context",
          title: "A water product for everyday scarcity.",
          body: "The visual story frames OMI around communities where safe drinking water cannot be assumed, using familiar bottles as the platform for a more accessible filtration object.",
        },
        {
          label: "Design Response",
          title: "A filter that attaches to common bottles.",
          body: "The concept uses a tube-like filter module and drinking interface, allowing filtration to happen through a portable object rather than a fixed infrastructure product.",
        },
      ],
      features: [
        "Bottle-mounted filter",
        "Portable drinking interface",
        "Layered filtration diagram",
      ],
      technicalNotes: [
        "Traps larger dirt and sediment",
        "Filters smaller bacteria and impurities",
        "Improves taste and smell of water",
      ],
      relatedSlugs: ["nugas", "sense"],
    },
  },
  {
    num: "13",
    slug: "idia-heel",
    tag: "fashion",
    tagLabel: "Fashion",
    year: "2023",
    title: "IDIA HEEL",
    client: "Fashion",
    pills: ["Product", "Industrial Design", "Footwear"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/idia-heel/idia-heel.png",
    desc: "A sculptural heel concept using Queen Idia-inspired form as a structural and cultural design reference.",
    productDetails: {
      headline: "A heel where heritage becomes structure.",
      summary:
        "IDIA HEEL uses the visual language of Queen Idia-inspired sculpture as a dramatic heel support, turning cultural reference into the architecture of the footwear.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of Queen Idia/Benin mask reference, not confirmed source copy.",
      status: "Concept / Fashion Object",
      role: "Footwear Design",
      context: "Cultural Footwear Study",
      disciplines: ["Footwear", "Industrial Design", "Cultural Object"],
      heroImage: "/images/projects/idia-heel/idia-heel.png",
      sections: [
        {
          label: "Context",
          title: "Footwear as a cultural object.",
          body: "The project treats the heel not as a hidden support but as the symbolic center of the shoe, using sculptural reference to carry meaning as well as weight.",
        },
        {
          label: "Design Response",
          title: "A mask form becomes the heel architecture.",
          body: "The elevated sandal profile places the sculptural head beneath the footbed, creating a tension between fashion object, artifact, and engineered support.",
        },
      ],
      features: [
        "Sculptural heel support",
        "Black and gold palette",
        "Ankle strap silhouette",
      ],
      culturalReferences: [
        "Queen Idia",
        "Benin visual heritage",
        "Sculptural footwear",
      ],
      relatedSlugs: ["africa-heel", "cowrie-heel"],
    },
  },
  {
    num: "14",
    slug: "africa-heel",
    tag: "fashion",
    tagLabel: "Fashion",
    year: "2020",
    title: "AFRICA HEEL",
    client: "Fashion",
    pills: ["Product", "Industrial Design", "Footwear"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/africa-heel/africa-heel-2.png",
    desc: "A statement heel concept using the outline of Africa as a structural silhouette.",
    productDetails: {
      headline: "A continental outline turned into a wearable structure.",
      summary:
        "AFRICA HEEL transforms the silhouette of the African continent into the defining structural gesture of a fashion object.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of Africa-map heel structure, not confirmed source copy.",
      status: "Prototype / Fashion Object",
      role: "Footwear Design",
      context: "Cultural Footwear Study",
      disciplines: ["Footwear", "Industrial Design", "Fashion Object"],
      heroImage: "/images/projects/africa-heel/africa-heel-2.png",
      sections: [
        {
          label: "Context",
          title: "Identity carried through silhouette.",
          body: "The design uses the recognizable outline of Africa as a visible support system, making the heel both a graphic statement and a structural feature.",
        },
        {
          label: "Design Response",
          title: "The heel becomes the message.",
          body: "The shoe keeps the upper minimal so the heel profile can carry the visual weight of the object, turning a functional component into the main cultural reference.",
        },
      ],
      features: [
        "Africa-map heel support",
        "Minimal black upper",
        "Statement silhouette",
      ],
      culturalReferences: [
        "African identity",
        "Continental silhouette",
        "Wearable symbolism",
      ],
      relatedSlugs: ["idia-heel", "cowrie-heel"],
    },
  },
  {
    num: "15",
    slug: "cowrie-heel",
    tag: "fashion",
    tagLabel: "Fashion",
    year: "2023",
    title: "COWRIE HEEL",
    client: "Fashion",
    pills: ["Product", "Industrial Design", "Footwear"],
    bg: "#0d2b3e",
    thumbnail: "/images/projects/cowrie-heel/cowry-heel-2.png",
    desc: "A sculptural heel concept using the cowrie shell as a cultural and formal reference.",
    productDetails: {
      headline: "The cowrie shell reimagined as heel architecture.",
      summary:
        "COWRIE HEEL uses the cowrie shell as both symbol and structure, turning an object associated with adornment, value, and heritage into a fashion support form.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from visual interpretation of cowrie-shell heel imagery, not confirmed source copy.",
      status: "Prototype / Fashion Object",
      role: "Footwear Design",
      context: "Cultural Footwear Study",
      disciplines: ["Footwear", "Industrial Design", "Cultural Object"],
      heroImage: "/images/projects/cowrie-heel/cowry-heel-2.png",
      sections: [
        {
          label: "Context",
          title: "A familiar symbol moved into footwear.",
          body: "The cowrie shell becomes the focal point of the shoe, shifting from ornament into the structural identity of the heel.",
        },
        {
          label: "Design Response",
          title: "Soft symbolism, hard structure.",
          body: "The design contrasts a clean sandal upper with a sculptural cowrie form beneath the heel, letting the cultural reference remain visible from the side profile.",
        },
      ],
      features: [
        "Cowrie-shell heel",
        "Sandal upper",
        "Sculptural side profile",
      ],
      culturalReferences: ["Cowrie shell", "Adornment", "Value and heritage"],
      relatedSlugs: ["idia-heel", "africa-heel"],
    },
  },
  {
    num: "16",
    slug: "bunka-totem",
    tag: "art",
    tagLabel: "Art",
    year: "2026",
    title: "BUNKA TOTEM",
    client: "Bunka",
    pills: ["Art", "Furniture", "Object Design"],
    bg: "#1a2a1a",
    thumbnail: "/images/projects/bunka/bunka-totem.webp",
    desc: "A sculptural furniture piece made from reclaimed wood sourced in Bayelsa, transforming material linked to ecological harm into quiet resilience.",
    productDetails: {
      headline: "Reclaimed wood shaped into quiet resilience.",
      summary:
        "BUNKA TOTEM is a sculptural furniture piece made from reclaimed wood sourced in Bayelsa, an area impacted by deforestation and extractive industry.",
      status: "Sculptural Furniture",
      role: "Object Design",
      context: "Bunka Series",
      disciplines: ["Art", "Furniture", "Sustainability"],
      heroImage: "/images/projects/bunka/bunka-totem.webp",
      gallery: ["/images/projects/bunka/bunka-totem-public.webp"],
      sections: [
        {
          label: "Context",
          title: "Material once linked to harm becomes renewal.",
          body: "The work transforms reclaimed wood once connected to ecological harm into a form of quiet resilience, drawing attention to sustainability, cultural memory, and the power of craft to renew what has been damaged or discarded.",
        },
        {
          label: "Object Language",
          title: "A vertical totem that preserves its past.",
          body: "Shaped into a vertical totem structure, the piece preserves the wood's natural curves, weathering, and surface scars as visible records of its history rather than concealing them.",
        },
      ],
      features: [
        "Reclaimed Bayelsa wood",
        "Vertical totem structure",
        "Natural curves and surface scars",
        "Sustainable furniture object",
      ],
      culturalReferences: ["Bayelsa", "Cultural memory", "Sustainable craft"],
      relatedSlugs: ["bunka-shelf", "bunka-plinth"],
    },
  },
  {
    num: "17",
    slug: "bunka-shelf",
    tag: "art",
    tagLabel: "Art",
    year: "2026",
    title: "BUNKA SHELF",
    client: "Bunka",
    pills: ["Art", "Furniture", "Ritual Object"],
    bg: "#0d2b3e",
    thumbnail: "/images/projects/bunka/bunka-cabinet.webp",
    desc: "A prayer and meditation shelf designed as a personal sanctuary for reflection, stillness, and reconnection.",
    productDetails: {
      headline: "A personal sanctuary for stillness and reflection.",
      summary:
        "BUNKA SHELF is a prayer and meditation shelf created as a space to pause, focus, and reconnect. Inspired by the canoes of the Niger Delta and the rituals of the Egbesu, it is an ode to Keniye's ancestors.",
      status: "Prayer / Meditation Shelf",
      role: "Object Design",
      context: "Bunka Series",
      disciplines: ["Art", "Furniture", "Ritual Object"],
      heroImage: "/images/projects/bunka/bunka-cabinet.webp",
      gallery: ["/images/projects/bunka/bunka-cabinet-specs.jpg"],
      sections: [
        {
          label: "Context",
          title: "A space for stillness in a noisy world.",
          body: "The shelf is more than furniture. It is a personal sanctuary designed for reflection, prayer, meditation, and meaningful moments.",
        },
        {
          label: "Inspiration",
          title: "Canoes, ritual, and ancestral memory.",
          body: "Inspired by the canoes of the Niger Delta and the rituals of the Egbesu, the object carries a spiritual and cultural reference while remaining grounded in furniture design.",
        },
        {
          label: "Design Response",
          title: "A shelf for pause, focus, and reconnection.",
          body: "The form combines a kneeling bench, storage drawer, illuminated display shelves, and a gothic-inspired arch profile for reflection and contemplation.",
        },
      ],
      features: [
        "Prayer and meditation shelf",
        "Integrated kneeling bench",
        "Illuminated display shelves",
        "Storage drawer",
        "Gothic-inspired arch profile",
      ],
      technicalNotes: [
        "Width: 1000 mm",
        "Depth: 1000 mm",
        "Height: 2200 mm",
        "Dark walnut stain finish",
        "2700K warm white LED Edison bulb",
        "Solid walnut primary material",
      ],
      culturalReferences: [
        "Niger Delta canoes",
        "Egbesu rituals",
        "Ancestral reflection",
      ],
      relatedSlugs: ["bunka-totem", "bunka-plinth"],
    },
  },
  {
    num: "18",
    slug: "bunka-plinth",
    tag: "art",
    tagLabel: "Art",
    year: "2026",
    title: "BUNKA PLINTH",
    client: "Bunka",
    pills: ["Art", "Sculpture", "Object Design"],
    bg: "#1a1a2e",
    thumbnail: "/images/projects/bunka/bunka-plinth.webp",
    desc: "A sculptural plinth from the Bunka series, built around presence, rhythm, and cultural form.",
    productDetails: {
      headline: "A sculptural plinth within the Bunka series.",
      summary:
        "BUNKA PLINTH presents the Bunka language as a sculptural object, using proportion and rhythm to create presence in space.",
      contentStatus: "needs-review",
      contentNote:
        "Drafted from the supplied project name and image only, not confirmed source copy.",
      status: "Sculptural Object",
      role: "Object Design",
      context: "Bunka Series",
      disciplines: ["Art", "Sculpture", "Object Design"],
      heroImage: "/images/projects/bunka/bunka-plinth.webp",
      sections: [
        {
          label: "Context",
          title: "An object designed to hold space.",
          body: "The plinth format gives the Bunka series a more architectural quality, turning the work into a sculptural presence rather than a purely functional object.",
        },
        {
          label: "Object Language",
          title: "Rhythm, proportion, and silhouette.",
          body: "The piece relies on its stance and profile, allowing the form to communicate through repetition, balance, and the way it occupies the room.",
        },
      ],
      features: ["Plinth form", "Sculptural presence", "Vertical composition"],
      relatedSlugs: ["bunka-totem", "bunka-shelf"],
    },
  },
];
