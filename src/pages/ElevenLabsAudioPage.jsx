import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, FileAudio2, Headphones, Mic2, RadioTower, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import logo from "../assets/echomedia-logo.svg";

const useCases = [
  {
    icon: Headphones,
    title: "Author Audiobooks",
    copy: "Prepare manuscripts for listening review, AI narration, chapter QA, and publishing workflows.",
    href: "/audiobook-ai",
  },
  {
    icon: Mic2,
    title: "Creator Voiceovers",
    copy: "Turn scripts into voiceovers for Shorts, Reels, faceless videos, podcast assets, and campaigns.",
    href: "/creator-voice-ai",
  },
  {
    icon: RadioTower,
    title: "Business Voice Agents",
    copy: "Prototype voice workflows for intake, FAQs, lead routing, support triage, and guest assistance.",
    href: "/voice-agents",
  },
  {
    icon: FileAudio2,
    title: "Lantern Protocol Audio",
    copy: "Follow the Lantern Protocol manuscript-to-audio case study as the books move toward publishing.",
    href: "/lantern-audio",
  },
];

const workflowSteps = [
  "Choose the audio use case and audience.",
  "Prepare source content for the ear, not just the page.",
  "Generate test audio and review pacing, pronunciation, and tone.",
  "Publish with clear CTAs, tracking, and human review where needed.",
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

function AffiliateDisclosure() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-6 text-sm leading-7 text-slate-200">
        <p className="font-bold text-sky-200">Affiliate disclosure</p>
        <p className="mt-2">
          Some links on this page are affiliate links. If you sign up through them, EchoMedia.ai may earn a commission at no extra cost to you. We only recommend tools that fit our actual workflows for AI audio, narration, voice agents, content production, and publishing.
        </p>
      </div>
    </section>
  );
}

function ElevenLabsAudioPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="/">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="AI audio navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#use-cases" className="text-slate-200 hover:text-violet-300">Use Cases</a>
            <a href="#workflow" className="text-slate-200 hover:text-violet-300">Workflow</a>
            <a href="#launch-kit" className="text-slate-200 hover:text-violet-300">Launch Kit</a>
          </nav>
          <Button href="mailto:hello@echomedia.ai?subject=AI%20Audio%20Workflow%20Consult" variant="outline">Book a Consult</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(14,165,233,.25),transparent_34%),radial-gradient(circle_at_35%_10%,rgba(139,92,246,.25),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_0.82fr] md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">ElevenLabs Partner Hub</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Turn Your Words Into <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">Voice</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              EchoMedia.ai helps authors, creators, businesses, and organizations transform written content into narrated, translated, dubbed, and interactive voice experiences using AI audio tools like ElevenLabs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="https://elevenlabs.io/">Try ElevenLabs <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button href="mailto:hello@echomedia.ai?subject=Build%20My%20AI%20Audio%20Workflow" variant="outline">Build My AI Audio Workflow</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-sky-950/30">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-violet-500/20 p-4"><Wand2 className="h-8 w-8 text-violet-300" /></div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">Audio Production Layer</p>
                <h2 className="text-3xl font-black">Scripts become sound. Pages become presence.</h2>
              </div>
            </div>
            <ul className="mt-8 space-y-4 text-slate-300">
              {workflowSteps.map((step) => (
                <li key={step} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300" /><span>{step}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="use-cases" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Use Cases</p>
        <h2 className="mt-3 text-center text-4xl font-black">One Audio Stack. Multiple Revenue Doors.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map(({ icon: Icon, title, copy, href }) => (
            <article key={title} className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/25">
              <Icon className="h-12 w-12 text-sky-300" />
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-4 grow leading-7 text-slate-300">{copy}</p>
              <a className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-300" href={href}>Explore workflow <ArrowRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">EchoMedia.ai Workflow</p>
            <h2 className="mt-3 text-4xl font-black">Build for the ear before you publish for the eye.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              AI audio works best when the source material, voice path, disclosure, and review process are designed together. This hub is the front door for those workflows.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Audiobook prep", "Creator voiceovers", "Dubbing and translation", "Voice agents", "Training narration", "Customer education"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <CheckCircle2 className="h-5 w-5 text-violet-300" />
                <p className="mt-3 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="launch-kit" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-violet-300" />
        <h2 className="mt-4 text-4xl font-black">AI Audio Launch Kit</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Downloadable lead magnet flow coming next. The kit will help visitors choose a use case, prepare content, select a voice workflow, review audio, and publish with tracking.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="mailto:hello@echomedia.ai?subject=AI%20Audio%20Launch%20Kit">Request the Launch Kit</Button>
          <Button href="mailto:hello@echomedia.ai?subject=AI%20Audio%20Workflow%20Consult" variant="outline">Book a Workflow Consult</Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-6">
          <div className="flex gap-4">
            <ShieldCheck className="h-7 w-7 shrink-0 text-violet-300" />
            <div>
              <h2 className="text-xl font-black">Responsible voice workflows</h2>
              <p className="mt-2 leading-7 text-slate-300">
                Voice cloning, business agents, civic intake, and sensitive workflows must include consent, disclosure, human review, and clear boundaries. The machine can carry the signal, but people remain accountable for the message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AffiliateDisclosure />

      <footer className="border-t border-white/10 bg-[#020617]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <div className="flex items-center gap-3"><img src={logo} alt="EchoMedia.ai" className="h-8 w-8" /><span className="font-black">EchoMedia.ai</span></div>
          <p className="text-sm text-slate-400">© 2026 EchoMedia.ai. All rights reserved.</p>
          <a href="mailto:hello@echomedia.ai" className="text-sm font-semibold text-sky-300 hover:text-violet-300">hello@echomedia.ai</a>
        </div>
      </footer>
    </main>
  );
}

export default ElevenLabsAudioPage;
