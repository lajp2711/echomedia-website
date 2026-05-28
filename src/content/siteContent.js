import {
  Bot,
  Building2,
  ChartCandlestick,
  Rocket,
  House,
  TrendingUp,
  Gem,
  Clock,
  Globe2,
  Heart,
  ShieldCheck,
  RadioTower,
  Workflow,
  Sparkles,
} from "lucide-react";

export const proofPoints = [
  ["Ticket + log analysis", "Turn messy service tickets, HAR files, and logs into executive-ready findings."],
  ["Customer-ready drafts", "Generate clear customer updates, internal notes, and escalation paths from the same evidence."],
  ["ROI visibility", "Translate AI analysis into estimated hours saved and business value for each engagement."],
];

export const opsHelmOutputs = [
  ["Problem summary", "Authentication/session drift and downstream timeout symptoms are grouped into one readable incident brief."],
  ["Verified findings", "Evidence is separated from assumptions so customer-facing language stays safe, useful, and defensible."],
  ["Escalation path", "Support triage → platform owner review → customer-facing update with next actions and evidence notes."],
  ["ROI estimate", "60-80 analyst hours saved on complex ticket and log reviews, with value shown in the final report."],
];

export const sampleFindings = [
  "Ticket narrative, HAR timing, and service symptoms are correlated into a single review packet.",
  "Customer update, internal note, and escalation recommendation are generated from the same evidence set.",
  "No private customer data is shown here; this is a sanitized website demonstration artifact.",
];

export const opsHelmDemoScenarios = [
  {
    title: "SharePoint access incident",
    label: "Ticket + HAR + tenant notes",
    input: "User reports intermittent access failures after a permission change. HAR shows repeated 302 redirects and delayed token refresh. Support notes mention recent group membership updates.",
    findings: [
      "Symptoms point to session/token drift rather than a broad SharePoint outage.",
      "Recent membership change is relevant, but evidence does not prove directory replication failure.",
      "Recommended next check: compare impacted user claims before and after fresh sign-in.",
    ],
    output: "We found evidence of an authentication/session consistency issue affecting a subset of users. Please have the impacted user complete a fresh sign-in while we validate claims and group membership timing.",
    escalation: "Support engineer → M365 identity owner → SharePoint platform owner if claims remain inconsistent.",
    roi: "6-9 hours saved",
    value: "$750-$1,125 estimated review value",
  },
  {
    title: "Web app latency review",
    label: "Logs + customer narrative",
    input: "Customer says the portal is slow only during checkout. App logs show API latency spikes, retry storms, and three payment callback delays during the same window.",
    findings: [
      "Performance issue is isolated to checkout workflow, not the full application.",
      "Retry behavior may be amplifying payment callback delay.",
      "Recommended next check: inspect payment provider callback timing and retry thresholds.",
    ],
    output: "The slowdown appears concentrated in checkout and aligns with delayed payment callbacks plus retry amplification. We recommend reviewing retry thresholds and callback telemetry before changing front-end code.",
    escalation: "App support → payment integration owner → platform reliability review.",
    roi: "4-7 hours saved",
    value: "$500-$875 estimated triage value",
  },
  {
    title: "Executive incident brief",
    label: "Ticket bundle + engineer notes",
    input: "Multiple tickets describe the same outage using different language. Engineer notes include suspected root cause, workaround, open risk, and customer impact statements.",
    findings: [
      "Tickets can be grouped into one incident narrative with three affected customer segments.",
      "Workaround is ready, but root cause is still unconfirmed.",
      "Executive update should separate verified impact from suspected cause.",
    ],
    output: "We have grouped related reports into one incident brief. Current evidence confirms customer impact and a working mitigation, while root cause remains under review.",
    escalation: "Incident commander → executive stakeholder update → post-incident evidence review.",
    roi: "8-12 hours saved",
    value: "$1,000-$1,500 estimated communications value",
  },
];

export const opsHelmRequestOptions = [
  "Ticket and log review",
  "HAR or browser trace analysis",
  "Customer-ready status updates",
  "Executive incident summaries",
  "ROI and labor-savings reporting",
];

export const opsHelmTeamSizes = ["Solo / founder", "Small support team", "Mid-market team", "Enterprise support org"];

export const opsHelmTimelineOptions = ["This week", "This month", "This quarter", "Exploring for later"];

export const divisions = [
  {
    icon: Bot,
    title: "EchoMedia.ai",
    subtitle: "AI Automation Agency",
    accent: "text-purple-300",
    items: ["AI Workflows & Integrations", "Content & Social Automation", "Lead Gen & CRM Systems", "Custom AI Solutions"],
    copy: "We build custom AI systems that automate support, content, outreach, lead generation, customer communications, and operational reporting.",
    cta: "Learn More",
  },
  {
    icon: Building2,
    title: "Casakey LLC",
    subtitle: "Hospitality & Short-Term Rental Operations",
    accent: "text-pink-300",
    items: ["Property Operations", "Interior Design & Setup", "Guest Experience Automation", "High-Performing Listings"],
    copy: "A hospitality operations line focused on memorable guest experiences, repeatable systems, and automation-supported short-term rental growth.",
    cta: "View Hospitality Line",
  },
  {
    icon: ChartCandlestick,
    title: "EchoAlpha",
    subtitle: "Future Crypto Intelligence",
    accent: "text-sky-300",
    items: ["Market Intelligence", "Crypto Automation Tools", "On-Chain Insights", "Alpha Community Coming Soon"],
    copy: "Building the next evolution of crypto intelligence, insights, automation, and alpha for the Web3 future.",
    cta: "Explore Alpha",
  },
];

export const ecosystemNodes = [
  {
    icon: ShieldCheck,
    title: "Lantern Protocol",
    subtitle: "Parent trust layer",
    copy: "The governance and trust architecture behind the ecosystem, designed to keep recommendations, evidence, and product decisions aligned.",
  },
  {
    icon: Sparkles,
    title: "EchoMedia.ai",
    subtitle: "Public automation venture",
    copy: "The customer-facing AI automation brand for support, content, lead generation, hospitality operations, and practical business systems.",
  },
  {
    icon: Workflow,
    title: "OpsHelm",
    subtitle: "Operational proof engine",
    copy: "The flagship ticket and log intelligence product that turns messy service work into findings, updates, escalation paths, and ROI estimates.",
  },
  {
    icon: RadioTower,
    title: "SignalForge",
    subtitle: "Reusable platform layer",
    copy: "A future routing and deployment wrapper for reusable configuration, product packaging, and cross-venture signal flow.",
  },
];

export const roadmap = [
  [Rocket, "Step 1", "Build & Automate", "Build the agency systems, prove ROI, and turn repeatable work into scalable products."],
  [House, "Step 2", "Buy & Scale", "Acquire and operate hospitality assets with automation-backed guest experiences."],
  [TrendingUp, "Step 3", "Invest & Grow", "Invest in assets, scale operations, and create compounding business freedom."],
  [Gem, "Step 4", "Legacy & Impact", "Build EchoAlpha, expand the ecosystem, and turn imagination into durable infrastructure."],
];

export const freedomPillars = [
  [Clock, "Time Freedom", "Design your days. Live on your terms."],
  [Globe2, "Location Freedom", "Work from anywhere. Live anywhere."],
  [Heart, "Financial Freedom", "Build once. Earn forever. Help others do the same."],
];

export const navItems = [
  ["Home", "#home"],
  ["Proof", "#proof"],
  ["Services", "#services"],
  ["Ecosystem", "#ecosystem"],
  ["Roadmap", "#roadmap"],
  ["About", "#about"],
  ["Contact", "#contact"],
];
