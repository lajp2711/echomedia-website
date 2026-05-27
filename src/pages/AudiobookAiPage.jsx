import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, Headphones, Mic2, PenTool, ShieldCheck, Sparkles } from "lucide-react";
import logo from "../assets/echomedia-logo.svg";
import AffiliateDisclosure from "../components/AffiliateDisclosure.jsx";

const prepSteps = [
  "Format the manuscript for listening flow, not just visual layout.",
  "Mark chapter titles, scene breaks, front matter, and reader-facing notes.",
  "Run a listening pass to catch repeated phrases, awkward pacing, and pronunciation traps.",
  "Generate sample narration and compare tone, speed, and character consistency.",
  "Prepare publishing notes for Amazon KDP, ElevenReader, audio samples, and future audiobook packaging.",
];

const checklistItems = [
  "Bold title and chapter headings",
  "Reader-only preface/front matter",
  "Clean chapter order",
  "Pronunciation notes",
  "Scene-break handling",
  "Audio review plan",
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

function AudiobookAiPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="/">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="Audiobook AI navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/elevenlabs-ai-audio" className="text-slate-200 hover:text-violet-300">AI Audio Hub</a>
            <a href="#workflow" className="text-slate-200 hover:text-violet-300">Workflow</a>
            <a href="#checklist" className="text-slate-200 hover:text-violet-300">Checklist</a>
          </nav>
          <Button href="mailto:hello@echomedia.ai?subject=Author%20Audio%20Prep" variant="outline">Book Author Prep</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(14,165,233,.25),transparent_34%),radial-gradient(circle_at_32%_18%,rgba(139,92,246,.25),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_0.8fr] md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">Author Audiobook Workflow</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Turn a manuscript into an <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">audio-ready book</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              EchoMedia.ai helps authors prepare chapters, front matter, reader notes, audio QA, and publishing workflows before sending the book into AI narration tools like ElevenLabs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/ai-audio-launch-kit">Get the Audio Prep Checklist <ClipboardCheck className="ml-2 h-4 w-4" /></Button>
              <Button href="https://elevenlabs.io/" variant="outline">Try ElevenLabs <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-sky-950/30">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-violet-500/20 p-4"><BookOpen className="h-8 w-8 text-violet-300" /></div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">Author Prep Layer</p>
                <h2 className="text-3xl font-black">Before the voice, clean the page.</h2>
              </div>
            </div>
            <ul className="mt-8 space-y-4 text-slate-300">
              {checklistItems.map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Workflow</p>
        <h2 className="mt-3 text-center text-4xl font-black">Manuscript to audio, without the formatting fog.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {prepSteps.map((step, index) => (
            <article key={step} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/25">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Step {index + 1}</p>
              <p className="mt-4 leading-7 text-slate-300">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="checklist" className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Sparkles className="h-10 w-10 text-violet-300" />
            <h2 className="mt-4 text-4xl font-black">Author Audio Prep Package</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Send the manuscript once. Get back a cleaner audio-ready copy, narration notes, launch checklist, and recommended next steps for ElevenLabs, ElevenReader, KDP, or future professional audiobook production.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@echomedia.ai?subject=Book%20Author%20Audio%20Prep">Book Author Audio Prep</Button>
              <Button href="/ai-audio-launch-kit" variant="outline">Open Launch Kit</Button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [PenTool, "Manuscript cleanup", "Chapter headings, front matter, and reader-facing sections cleaned for narration."],
              [Headphones, "Listening QA", "A practical pass for pacing, repetition, pronunciation, and audio-first clarity."],
              [Mic2, "Voice workflow", "Guidance for AI narration testing, sample review, and voice selection."],
              [ShieldCheck, "Disclosure notes", "Responsible-use reminders for AI narration, cloning, and publishing claims."],
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

      <AffiliateDisclosure className="py-16" />

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

export default AudiobookAiPage;
