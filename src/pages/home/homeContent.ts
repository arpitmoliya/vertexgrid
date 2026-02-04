export const homeImages = {
  /** Hero background (meeting room) */
  hero: "/images/f58d3266ffe25589fcf925979aa72375b2c3ad2d.jpg",
  /** Section background motif */
  pattern: "/images/e9df33be76f1eb01dbbe702f223057b83bce47fc.png",
  /** Photo: conference room workshop */
  roomMatters: "/images/a51a015850a4c1efed42eeb5372d6678e521544a.png",
  /** Photo: handshake */
  handshake: "/images/a3a1da6720228ff10850a8a2e4ba273bca78578d.jpg",
  /** Photo: analytics dashboard */
  analytics: "/images/c4632d9746e9f78c974627a274546942a1f5a445.jpg",
} as const;

export const homeNav = [
  { label: "Home", href: "#top" },
  { label: "Our Value", href: "#value" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Upcoming Events", href: "#upcoming-events" },
] as const;

export const heroCopy = {
  headline: "INTELLIGENCE. INSIGHTS. INTERACTIONS.",
  subheadline:
    "An outcome-driven enterprise ecosystem for leaders who execute.",
  bodyTop: "Most enterprise decisions are expensive guessing.",
  bodyBottom:
    "Closed-door forums where enterprise leaders share what actually worked, what failed, and why so you don't make the same costly mistakes.",
} as const;

export const whatWeDoCopy = {
  titlePrefix: "What ",
  titleBrand: "VertexGrid",
  titleSuffix: " Actually Does",
  lead: "We're an intelligence company using events as data collection.",
  bulletsIntro: "VertexGrid curates closed-door executive forums where:",
  bullets: [
    "Enterprise leaders share real implementation challenges",
    "Discussions focus on post-mortems, not projections",
    "Panels and roundtables are structured around pain points",
    "Learning flows peer-to-peer, not top-down",
  ],
  bullets2Intro: "Every VertexGrid event is intentionally designed to:",
  bullets2: [
    "Surface recurring execution failures",
    "Identify cross-industry patterns",
    "Enable better second-attempt decision-making",
  ],
  tiles: [
    {
      title: "The Format",
      items: [
        { bold: "Curated leaders", rest: " per event." },
        { bold: "No presentations", rest: " or pitches." },
        { bold: "Moderated", rest: " roundtables solving specific problems." },
      ],
    },
    {
      title: "The Protection",
      items: [
        { bold: "Chatham House", rest: " Rule." },
        { bold: "No recordings", rest: ", no media or attribution." },
        { bold: "Invite-only", rest: ", vetted participants." },
      ],
    },
    {
      title: "The Output",
      items: [
        {
          bold: "Real problem solving",
          rest: " with peers who've been there.",
        },
        {
          bold: "Post event intelligence report",
          rest: " with patterns and pain points.",
        },
        {
          bold: "Personalized brief",
          rest: " showing how you compare to peers.",
        },
      ],
    },
  ],
} as const;

export const howItWorksCopy = {
  titlePrefix: "How ",
  titleBrand: "VertexGrid",
  titleSuffix: " Works",
  subtitle: "A controlled path from application to execution intelligence.",
  steps: [
    {
      number: "01",
      title: "Apply",
      description: "Submit your executive application for vetting",
    },
    {
      number: "02",
      title: "Qualify",
      description:
        "We validate fit across experience, industry, and challenges",
    },
    {
      number: "03",
      title: "Connect",
      description: "Engage in facilitated high-value interactions",
    },
    {
      number: "04",
      title: "Extract",
      description:
        "We capture patterns, failures, and solution signals across sessions.",
    },
    {
      number: "05",
      title: "Report",
      description:
        "Receive a structured intelligence report and personal brief.",
    },
  ],
} as const;

export const roomMattersCopy = {
  titlePrefix: "Why ",
  titleBrand: "This Room Matters",
  titleSuffix: " More Than Any Conference",
  cards: [
    {
      title: "See what fails before it costs you",
      body: "Learn from real post-mortems: ₹5–10 Cr failures, integration breakdowns, and execution decisions peers won’t share publicly or in analyst reports.",
    },
    {
      title: "Understand where budgets are actually moving",
      body: "Get early visibility into budget shifts, vendor re-evaluation, and criteria changes happening months before they show up in market narratives.",
    },
    {
      title: "Build relationships that matter under pressure",
      body: "Connect with enterprise leaders who’ve faced similar challenges and will take your call when execution stalls.",
    },
  ],
  noteTop:
    "The decisions discussed in this room will shape enterprise budgets across India for the next 12 months.",
  noteBottom: "Your competitors may already be applying.",
} as const;

export const attendeeCopy = {
  titlePrefix: "What You ",
  titleBrand: "Get as an Attendee",
  boxes: [
    {
      title: "Problem-first participation:",
      body: "Submit your top execution challenge in advance. Roundtables are designed around real problems, not generic topics or slide decks.",
    },
    {
      title: "Candid, peer-led discussions:",
      body: "Participate in moderated roundtables, executive panels as conversations (not presentations), and structured sharebacks across all discussions.",
    },
    {
      title: "Actionable intelligence beyond the room:",
      body: "Receive an intelligence report, a personal benchmark brief with next-step recommendations, and access to an ongoing peer council.",
      wide: true,
    },
  ],
  cta: "Apply to Attend",
} as const;

export const sponsorshipCopy = {
  title: "How Sponsorship / Collaboration Works",
  subtitle: "Built around qualified demand",
  sponsorsGainTitle: "Sponsors gain:",
  sponsorsGain: [
    "Direct access to enterprise leaders who openly articulate pain points",
    "Context-rich conversations tied to real implementation challenges",
    "High-quality, pre-qualified demand instead of broad lead lists",
    "An anonymised post-event insight report revealing real market gaps",
  ],
  sponsorsReceiveTitle:
    "Intelligence you can't buy from traditional analyst reports.",
  sponsorsReceiveIntro: "Sponsors receive:",
  sponsorsReceive: [
    "30–40 page practitioner-sourced intelligence report",
    "Pain-point frequency and failure patterns",
    "Budget signals and buying intent",
    "Solution patterns from peer companies",
    "Category exclusivity",
    "Direct access to verified decision-makers",
    "Raw anonymised data for internal analysis",
  ],
  sponsorsReceiveFooter:
    "Traditional analyst reports charge lakhs for survey-based data that takes months. Vertex Grid delivers practitioner intelligence in 14 days.",
  protectsTitle: "How Vertex Grid protects conversation quality:",
  protects: [
    "Invite-only participation",
    "Strict confidentiality norms",
    "No recordings or media presence",
    "Moderated discussions to prevent vendor dominance",
    "Limited sponsor participation, aligned to real problem areas",
  ],
  cta: "Apply as a Sponsor",
} as const;

export const nextEventCopy = {
  kicker: "NEXT EVENT",
  titlePrefix: "VertexGrid Exchange - ",
  titleBrand: "AI Edition Bengaluru",
  subtitle:
    "Most enterprise AI pilots never reach production. Not because the models fail—because the organization, data, and operations aren't ready.",
  meta: [
    { label: "Bengaluru" },
    { label: "4.5 hours + dinner" },
    { label: "Free for qualified executive" },
  ],
  schedule: [
    { time: "02:00 PM", label: "Opening & Chatham House Rule" },
    { time: "02:15 PM", label: 'Industry Panel: "AI Reality vs Hype"' },
    { time: "03:15 PM", label: "Problem-Solving Roundtables (90 min)" },
    { time: "04:45 PM", label: "Shareback: Pattern synthesis" },
    { time: "05:15 PM", label: "Networking Reception" },
    { time: "06:30 PM", label: "Executives Dinner (Founding Circle only)" },
  ],
  chips: [
    "Data quality blocking production deployment",
    "Organizational resistance and change management",
    "Model governance and risk management",
    "ROI measurement and stakeholder management",
  ],
} as const;

export const builtByCopy = {
  titlePrefix: "Built by a Team ",
  titleBrand: "That's Seen the Problem from the Inside",
  body1:
    'The VertexGrid team has spent 10+ years running enterprise events—hundreds of them. We kept seeing the same pattern: Leaders would sit through presentations, then pull us aside to ask, "But who\'s actually done this? What really works?"',
  body2:
    "The knowledge existed. It just never made it to the stage. Because that truth gets filtered for public audiences. So we built a place where unfiltered intelligence is the entire product.",
  experienceTitle: "Collective Experience:",
  experience: [
    "300+ enterprise transitions guided (the wins, failures, and wisdom in between)",
    "200+ CIO relationships in the core network",
    "50+ flawless events executed at scale",
  ],
  closing:
    "VertexGrid isn't about inspiration. It's about giving you the clarity to make better decisions—before your budget is committed.",
} as const;

export const engageCopy = {
  title: "Choose How You Want to Engage",
  speakingKicker: "Interested in speaking?",
  cards: [
    {
      title: "Apply to Attend",
      body: "For enterprise leaders seeking execution clarity",
    },
    {
      title: "Apply as a Sponsor",
      body: "For organisations aligned to real enterprise AI problems",
    },
    {
      title: "Be on our Panel",
      body: "For leaders willing to share lived implementation experience",
      center: true,
    },
  ],
} as const;

export const ctaCardCopy = {
  title: "Ready to Elevate Your Strategic Network?",
  subtitle:
    "Join an exclusive community of forward-thinking executives who are shaping the future of business together.",
  primary: "Apply to Attend",
  secondary: "Apply as a Sponsor",
} as const;

export const footerCopy = {
  description:
    "Strategic business acceleration through curated intelligence and meaningful executive connections.",
  tagline: "Intelligence. Insights. Interactions.",
  copyright: "© 2026 VertexGrid. All rights reserved.",
} as const;
