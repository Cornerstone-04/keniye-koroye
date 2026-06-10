const guidanceSections = [
  {
    title: "Positioning Over Paperwork",
    body: "Before anything else, you need clarity on:",
    points: ["What you do", "Why it matters", "The problems you solve"],
    closing: "If your work feels scattered, your application will too.",
  },
  {
    title: "A Clear Story Of Impact",
    body: "Your CV should not read like a list of jobs. It should tell a story:",
    points: [
      "How you think",
      "What space you operate in",
      "What you have consistently built, improved, or influenced",
    ],
  },
  {
    title: "Evidence > Claims",
    body: "Saying you are talented is not enough. You need proof. Examples:",
    points: [
      "Measurable outcomes",
      "Products shipped",
      "Research published",
      "Communities built",
      "Work that others can independently verify",
    ],
  },
  {
    title: "Third-Party Validation",
    body: "Strong applications are supported by people who can speak confidently about your work.",
    closing:
      "This is not about collecting endorsements. It is about demonstrating that respected people in your industry recognise your impact.",
  },
  {
    title: "Visibility Of Leadership",
    body: "You do not need to be the most senior person in the room. But you should demonstrate:",
    points: ["Initiative", "Ownership", "Influence", "Leadership potential"],
  },
  {
    title: "Think Like A Portfolio",
    body: "A strong LinkedIn profile and personal website should:",
    points: ["Show your work", "Show your thinking", "Show your process"],
    closing: "Make it easy for someone to understand why your work matters.",
  },
  {
    title: "Play The Long Game",
    body: "The strongest applications are rarely built in a few months. They are built over time through:",
    points: ["Consistent work", "Credibility", "Contribution", "Visibility"],
    closing: "Keep building. It compounds.",
  },
];

const globalTalentAssessment = [
  {
    id: "track_record",
    question: "Do you have a 5-year sustained track record?",
    requirement:
      "Regular professional activity and outstanding work within the last five years.",
  },
  {
    id: "references",
    question: "Can you secure three high-level expert references?",
    requirement:
      "Three letters from independent experts or eminent organizations.",
  },
  {
    id: "measurable_impact",
    question: "Is your impact measurable beyond a standard salary?",
    requirement:
      "Proven technical, commercial, or academic impact through data or metrics.",
  },
  {
    id: "contribution",
    question: "Do you contribute to your field outside of your day job?",
    requirement:
      "Evidence of innovation, mentoring, or speaking at prominent events.",
  },
  {
    id: "portfolio",
    question: "Can you provide a distinct portfolio of 10 evidence pieces?",
    requirement:
      "Curated collection of 10 documents proving leadership or promise.",
  },
];

const coreDocs = [
  {
    num: "01",
    label: "Core Evidence",
    title: "1,000 Word Personal Statement",
    body: "Focused on how my ideas, work, and experience could create value within the UK ecosystem.",
  },
  {
    num: "02",
    label: "Profile Cohesion",
    title: "CV / Resume / Website / LinkedIn",
    body: "These should be cohesive. Strong personal branding matters. Your story should be consistent across every touchpoint. Regularly sharing your work and thinking also strengthens visibility.",
  },
  {
    num: "03",
    label: "External Validation",
    title: "Three Recommendation Letters",
    body: "From a CEO of a Fintech company, a CEO of a Cleantech company, and a CEO of a VR Technology company. Each referee knew me for at least 3-5 years, had substantial industry credibility, and could confidently speak about my impact.",
  },
];

const evidenceItems = [
  {
    title: "Tech Degree in AI",
    label: "Core Evidence",
  },
  {
    title: "Tech Blog Interviews",
    label: "Public Recognition",
  },
  {
    title: "Speaking Engagements",
    label: "Leadership Visibility",
  },
  {
    title: "VC Investment Agreement",
    label: "Commercial Impact",
  },
  {
    title: "Equity Contract in a Startup",
    label: "Commercial Impact",
  },
  {
    title: "Invoice for a Hardware Project",
    label: "Paid Work",
  },
  {
    title: "Newspaper Article About a Patent",
    label: "Public Recognition",
  },
  {
    title: "Venture Builder Acceptance Letter",
    label: "External Validation",
  },
  {
    title: "Innovation Awards & Nominations",
    label: "Industry Recognition",
  },
  {
    title: "YouTube Interview From a Television Network",
    label: "Public Recognition",
  },
];

export {
  coreDocs,
  evidenceItems,
  globalTalentAssessment,
  guidanceSections,
};
