import { ArrowRight, BadgeCheck, CalendarClock, CheckCircle2, ClipboardList, Mic2, PlayCircle, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import logo from "../assets/echomedia-logo.svg";
import AffiliateDisclosure from "../components/AffiliateDisclosure.jsx";

const workflow = [
  ["Voice rights", "Confirm whose voice is being used, document consent, and define approved use cases before any generation work begins."],
  ["Content map", "Plan intros, short-form hooks, video voiceovers, captions, lead magnets, and recurring series formats."],
  ["Production system", "Create reusable scripts, voice presets, review steps, and publishing notes so the workflow can repeat."],
  ["Review loop", "Human-review every output for tone, claims, brand safety, consent boundaries, and platform fit."],
];

const useCases = [
  "Short-form video narration",
  "Podcast intros and outros",
  "Course and coaching clips",
  "Lead magnet audio previews",
  "Brand voice libraries",
  "Multilingual creator experiments",
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

function CreatorVoiceAiPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="/">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="Creator voice navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/elevenlabs-ai-audio" className="text-slate-200 hover:text-violet-300">AI Audio Hub</a>
            <a href="#workflow" className="text-slate-200 hover:text-violet-300">Workflow</a>
            <a href="#kit" className="text-slate-200 hover:text-violet-300">Creator Kit</a>
          </nav>
          <Button href="mailto:hello@echomedia.ai?subject=Creator%20Voice%20System" variant="outline">Build Voice System</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(14,165,233,.22),transparent_34%),radial-gradient(circle_at_25%_18%,rgba(139,92,246,.26),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_0.85fr] md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">Creator Voice AI</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Turn your voice into a <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">repeatable content engine</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              EchoMedia.ai helps creators design consent-first AI voice workflows for voiceovers, recurring clips, lead magnets, and multilingual content without turning brand trust into confetti.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/resources/creator-voice-automation-kit.md">Open Creator Kit <ClipboardList className="ml-2 h-4 w-4" /></Button>
              <Button href="https://elevenlabs.io/" variant="outline">Try ElevenLabs <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-8 shadow-2xl shadow-sky-950/30">
            <Mic2 className="h-10 w-10 text-sky-300" />
            <h2 className="mt-5 text-3xl font-black">Built for creators who need rhythm, not chaos.</h2>
            <ul className="mt-7 grid gap-3 text-slate-300 sm:grid-cols-2">
              {useCases.map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-violet-300" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Workflow</p>
        <h2 className="mt-3 text-center text-4xl font-black">Consent first. Content second. Scale third.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {workflow.map(([title, copy], index) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/25">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Step {index + 1}</p>
              <h3 className="mt-4 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kit" className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Sparkles className="h-10 w-10 text-violet-300" />
            <h2 className="mt-4 text-4xl font-black">Creator Voice System package</h2>
            <p className="mt-5 leading-8 text-slate-300">
              A consult-led setup for creators who want a documented voice workflow, reusable content templates, QA rules, disclosure notes, and a launch-ready production path.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@echomedia.ai?subject=Creator%20Voice%20System%20Inquiry">Request Creator Voice System</Button>
              <Button href="/resources/voice-cloning-consent-checklist.md" variant="outline">Consent Checklist</Button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [Wand2, "Reusable prompts", "Script and prompt patterns for repeatable voiceover production."],
              [CalendarClock, "Publishing cadence", "A practical schedule for recurring clips, launches, and repurposing."],
              [BadgeCheck, "Brand QA", "Review rules for tone, claims, audience fit, and platform safety."],
              [ShieldCheck, "Consent guardrails", "Voice rights, usage boundaries, and disclosure reminders built in."],
            ].map(([Icon, title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <Icon className="h-8 w-8 text-sky-300" />
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <PlayCircle className="mx-auto h-10 w-10 text-sky-300" />
        <h2 className="mt-5 text-4xl font-black">Start with one approved voice workflow.</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
          The goal is not infinite synthetic content. The goal is a small, trusted system that lets a creator produce more without losing their actual voice, audience trust, or rights clarity.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/resources/creator-voice-workflow.md">Read the Workflow</Button>
          <Button href="https://elevenlabs.io/" variant="outline">Try ElevenLabs</Button>
        </div>
      </section>

      <AffiliateDisclosure className="py-12" />
    </main>
  );
}

export default CreatorVoiceAiPage;
