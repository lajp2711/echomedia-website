import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  Bot,
  Building2,
  CheckCircle2,
  Globe2,
  Headphones,
  Mic2,
  Radio,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import logo from "../assets/echomedia-logo.svg";
import AffiliateDisclosure from "../components/AffiliateDisclosure.jsx";

const partnershipAreas = [
  {
    icon: Headphones,
    title: "ElevenLabs AI Audio Hub",
    stage: "Live foundation",
    audience: "Authors, creators, businesses",
    route: "/elevenlabs-ai-audio",
    copy: "The front door for EchoMedia.ai audio services, affiliate pathways, launch kits, and implementation offers.",
    bullets: ["AI narration", "Voiceover workflows", "Voice agents", "Responsible-use disclosure"],
  },
  {
    icon: BookOpen,
    title: "Author Audiobook Funnel",
    stage: "Author offer live",
    audience: "Authors and indie publishers",
    route: "/audiobook-ai",
    copy: "Manuscript-to-audio prep for authors who want cleaner narration, listening QA, and publishing-ready files.",
    bullets: ["Author Audio Prep", "Checklist resource", "Test chapter process", "Publishing prep"],
  },
  {
    icon: Radio,
    title: "Lantern Audio Case Study",
    stage: "Build-in-public proof",
    audience: "Readers, authors, publishers",
    route: "/lantern-audio",
    copy: "Lantern Protocol becomes the living proof point for AI-assisted narration, audio review, and story-driven launch strategy.",
    bullets: ["Book One entry point", "Series audio strategy", "Editorial listening pass", "Public case study"],
  },
  {
    icon: Mic2,
    title: "Creator Voice Automation",
    stage: "Creator funnel live",
    audience: "Creators, coaches, influencers",
    route: "/creator-voice-ai",
    copy: "Consent-first creator voice systems for repeatable clips, lead magnets, course content, and multilingual experiments.",
    bullets: ["Creator Voice System", "Consent checklist", "Script templates", "QA workflow"],
  },
  {
    icon: Bot,
    title: "Business Voice Agents",
    stage: "Next build block",
    audience: "Small businesses, STR teams, support desks",
    route: "/voice-agents",
    copy: "Voice agents for intake, guest support, appointment triage, lead capture, and repeatable business workflows.",
    bullets: ["Voice Agent Starter Blueprint", "STR assistant demo", "Support intake demo", "Civic intake demo"],
  },
  {
    icon: Globe2,
    title: "EchoChamber Language Layer",
    stage: "Product vision",
    audience: "Language learners, creators, Lantern stack",
    route: "/echochamber",
    copy: "Cross-language voice and translation service that can support learning, dubbing, and future Lantern ecosystem calls.",
    bullets: ["Translate text", "Generate audio", "Pronunciation support", "Cross-repo service"],
  },
];

const operatingPrinciples = [
  [ShieldCheck, "Consent-gated", "Voice cloning, persona use, and publishing flows require clear rights, review, and approval paths."],
  [BadgeDollarSign, "Revenue-aware", "Every partner CTA can map to affiliate tracking, service revenue, or future productized offers."],
  [Building2, "Service-ready", "Each area becomes a page, resource, offer, and demo path instead of a lonely marketing tile."],
  [Sparkles, "Story-powered", "Lantern Protocol provides the mythic proof layer while EchoMedia.ai keeps the implementation grounded."],
];

function Button({ children, href, variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-glow"
      : "border border-violet-400/70 bg-black/20 text-white hover:bg-white/10";

  return (
    <a className={`inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5 ${classes}`} href={href}>
      {children}
    </a>
  );
}

function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="/">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="Partnership navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/elevenlabs-ai-audio" className="text-slate-200 hover:text-violet-300">AI Audio</a>
            <a href="/creator-voice-ai" className="text-slate-200 hover:text-violet-300">Creators</a>
            <a href="#areas" className="text-slate-200 hover:text-violet-300">Areas</a>
          </nav>
          <Button href="mailto:hello@echomedia.ai?subject=Partnership%20Area%20Strategy" variant="outline">Plan a Partnership</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(14,165,233,.24),transparent_34%),radial-gradient(circle_at_28%_18%,rgba(139,92,246,.28),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_0.82fr] md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">EchoMedia.ai Partnerships</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              One partner hub for <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">audio, voice, language, and launch systems</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              This page organizes the new partnership areas into a campaign-ready UI: affiliate paths, service offers, resource magnets, and future product lanes under one EchoMedia.ai roof.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#areas">Explore Partnership Areas <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button href="/elevenlabs-ai-audio" variant="outline">Open ElevenLabs Hub</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-8 shadow-2xl shadow-sky-950/30">
            <Wand2 className="h-10 w-10 text-violet-300" />
            <h2 className="mt-5 text-3xl font-black">Partnership Flywheel</h2>
            <div className="mt-7 space-y-4 text-slate-300">
              {["Partner tool or platform", "Landing page and resource", "Service package", "Demo or case study", "Tracking and revenue loop"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sm font-black text-sky-200">{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Partnership Areas</p>
        <h2 className="mt-3 text-center text-4xl font-black">The new revenue map, rendered as cards.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {partnershipAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.title} className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-sky-400/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-sky-500/15 p-4"><Icon className="h-8 w-8 text-sky-300" /></div>
                  <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-violet-200">{area.stage}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{area.title}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">{area.audience}</p>
                <p className="mt-4 flex-1 leading-7 text-slate-300">{area.copy}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" /><span>{bullet}</span></li>
                  ))}
                </ul>
                <a href={area.route} className="mt-7 inline-flex items-center gap-2 font-bold text-sky-300 hover:text-violet-300">
                  Open area <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-4">
          {operatingPrinciples.map(([Icon, title, copy]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <Icon className="h-8 w-8 text-sky-300" />
              <h3 className="mt-4 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-black">Next partner areas can plug into this same UI.</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
          Every future partnership should get the same bones: route, card, offer, resource, disclosure, tracking row, and a case-study or demo path. That keeps the site from becoming a junk drawer with neon on it.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="mailto:hello@echomedia.ai?subject=New%20Partnership%20Area">Propose a Partner Area</Button>
          <Button href="/ai-audio-launch-kit" variant="outline">Open Launch Kit</Button>
        </div>
      </section>

      <AffiliateDisclosure className="pb-16" />
    </main>
  );
}

export default PartnershipsPage;
