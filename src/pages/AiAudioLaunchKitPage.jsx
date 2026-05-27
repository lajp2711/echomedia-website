import { ArrowRight, CheckCircle2, Download, FileText, Headphones, Mic2, RadioTower, Sparkles } from "lucide-react";
import logo from "../assets/echomedia-logo.svg";
import AffiliateDisclosure from "../components/AffiliateDisclosure.jsx";

const kitSections = [
  "Audio use-case selector",
  "Content preparation checklist",
  "Voice workflow planner",
  "Review and QA checklist",
  "Publishing and tracking worksheet",
  "Responsible-use and consent reminders",
];

const audiences = [
  [Headphones, "Authors", "Prepare a manuscript for AI narration, listening edits, and publishing decisions."],
  [Mic2, "Creators", "Batch voiceovers for short-form video, podcasts, announcements, and content campaigns."],
  [RadioTower, "Businesses", "Plan intake, support, FAQ, education, or guest-assistant voice workflows."],
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

function AiAudioLaunchKitPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="/">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="Launch kit navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/elevenlabs-ai-audio" className="text-slate-200 hover:text-violet-300">AI Audio Hub</a>
            <a href="#included" className="text-slate-200 hover:text-violet-300">Included</a>
            <a href="#request" className="text-slate-200 hover:text-violet-300">Request Kit</a>
          </nav>
          <Button href="mailto:hello@echomedia.ai?subject=AI%20Audio%20Launch%20Kit" variant="outline">Request Kit</Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(14,165,233,.24),transparent_34%),radial-gradient(circle_at_35%_18%,rgba(139,92,246,.24),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_0.75fr] md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300">Lead Magnet</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              AI Audio Launch <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">Kit</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              A practical worksheet for turning books, scripts, service messages, and business knowledge into voice-ready content with responsible review, tracking, and publishing steps.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@echomedia.ai?subject=Send%20Me%20the%20AI%20Audio%20Launch%20Kit">Request the Kit <Download className="ml-2 h-4 w-4" /></Button>
              <Button href="/elevenlabs-ai-audio" variant="outline">Back to AI Audio Hub</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-sky-950/30">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-violet-500/20 p-4"><FileText className="h-8 w-8 text-violet-300" /></div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">What it helps decide</p>
                <h2 className="text-3xl font-black">What to say, how to say it, and where it should go next.</h2>
              </div>
            </div>
            <ul className="mt-8 space-y-4 text-slate-300">
              {kitSections.map((section) => (
                <li key={section} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300" /><span>{section}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="included" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Who It Serves</p>
        <h2 className="mt-3 text-center text-4xl font-black">A simple launch map for three audio doors.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map(([Icon, title, copy]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/25">
              <Icon className="h-12 w-12 text-sky-300" />
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="request" className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-[1fr_auto]">
          <div>
            <Sparkles className="h-10 w-10 text-violet-300" />
            <h2 className="mt-4 text-4xl font-black">Request the AI Audio Launch Kit</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              This first version routes requests through email while the full form/CRM workflow is built. It gives visitors a conversion path now without adding backend complexity yet.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button href="mailto:hello@echomedia.ai?subject=Send%20Me%20the%20AI%20Audio%20Launch%20Kit">Request by Email <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button href="mailto:hello@echomedia.ai?subject=AI%20Audio%20Workflow%20Consult" variant="outline">Book Workflow Consult</Button>
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

export default AiAudioLaunchKitPage;
