import { ArrowRight, BookOpen, CheckCircle2, Headphones, Layers3, Radio, ShieldCheck, Sparkles } from "lucide-react";
import logo from "../assets/echomedia-logo.svg";
import AffiliateDisclosure from "../components/AffiliateDisclosure.jsx";

const milestones = [
  ["Book One", "Prepare the finished manuscript for ElevenReader listening, cleanup, and Amazon publishing."],
  ["Books Two and Three", "Use the same narration-readiness system after each audio review pass is complete."],
  ["Future Series", "Package the proof of process for professional publishing conversations and audio rights discussions."],
];

const strategy = [
  "Use audio listening as an editorial pass before final publishing.",
  "Keep Book One as accessible as possible to create audience entry into the Lantern universe.",
  "Use premium later books to test paid reader demand and deepen the funnel.",
  "Track AI narration lessons openly so other authors can see the workflow.",
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

function LanternAudioPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="/">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="Lantern audio navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/audiobook-ai" className="text-slate-200 hover:text-violet-300">Audiobook AI</a>
            <a href="/ai-audio-launch-kit" className="text-slate-200 hover:text-violet-300">Checklist</a>
            <a href="#timeline" className="text-slate-200 hover:text-violet-300">Timeline</a>
          </nav>
          <Button href="/audiobook-ai" variant="outline">Author Workflow</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,.22),transparent_32%),radial-gradient(circle_at_25%_18%,rgba(139,92,246,.24),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_0.9fr] md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">Lantern Protocol Audio Case Study</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Turning a fictional universe into an <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">audio-first publishing lab</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              Lantern Protocol is the proving ground for EchoMedia.ai’s author audio workflow: listen first, polish faster, publish cleaner, and document the path from manuscript to narrated experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/ai-audio-launch-kit">Open Author Checklist <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button href="/audiobook-ai" variant="outline">View Audiobook Workflow</Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-8 shadow-2xl shadow-sky-950/30">
            <Radio className="h-10 w-10 text-sky-300" />
            <h2 className="mt-5 text-3xl font-black">The strategy</h2>
            <ul className="mt-7 space-y-4 text-slate-300">
              {strategy.map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-violet-300" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Publishing Timeline</p>
        <h2 className="mt-3 text-center text-4xl font-black">A living case study that improves with each book.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {milestones.map(([title, copy], index) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/25">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Phase {index + 1}</p>
              <h3 className="mt-4 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {[
            [BookOpen, "Manuscript readiness", "Prepare title, preface, chapters, and reader-only manifest sections for narration."],
            [Headphones, "Listening review", "Use ElevenReader listening to catch story rhythm, scene echo, and line-level friction."],
            [Layers3, "Funnel proof", "Turn the Lantern process into reusable author services, checklists, and build-in-public content."],
          ].map(([Icon, title, copy]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-black/20 p-7">
              <Icon className="h-9 w-9 text-sky-300" />
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <Sparkles className="mx-auto h-10 w-10 text-violet-300" />
        <h2 className="mt-5 text-4xl font-black">Follow the build, then borrow the system.</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
          The Lantern Protocol audio path becomes both a publishing workflow and a client-facing proof point for authors who want to use AI narration without turning their book into a pile of loose wires.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/resources/author-audiobook-prep-checklist.md">Read the Checklist</Button>
          <Button href="https://elevenlabs.io/" variant="outline">Try ElevenLabs</Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm leading-7 text-slate-300">
          <div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-sky-300" /><p>Lantern Protocol is a fictional universe and publishing case study. Any real-world AI audio workflows remain human-reviewed, rights-aware, and consent-gated.</p></div>
        </div>
      </section>

      <AffiliateDisclosure className="py-12" />
    </main>
  );
}

export default LanternAudioPage;
