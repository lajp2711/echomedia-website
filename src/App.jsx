import { motion } from "framer-motion";
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
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";
import logo from "./assets/echomedia-logo.svg";
import infinityHero from "./assets/infinity-hero.svg";
import vanessaCooProfile from "./assets/vanessa-coo-profile.svg";
import ElevenLabsAudioPage from "./pages/ElevenLabsAudioPage.jsx";
import AiAudioLaunchKitPage from "./pages/AiAudioLaunchKitPage.jsx";
import AudiobookAiPage from "./pages/AudiobookAiPage.jsx";
import LanternAudioPage from "./pages/LanternAudioPage.jsx";

const divisions = [
  {
    icon: Bot,
    title: "EchoMedia.ai",
    subtitle: "AI Automation Agency",
    accent: "text-purple-300",
    items: ["AI Workflows & Integrations", "Content & Social Automation", "Lead Gen & CRM Systems", "Custom AI Solutions"],
    copy: "We build custom AI systems that automate content, outreach, lead generation, customer support, and more.",
    cta: "Learn More",
  },
  {
    icon: Building2,
    title: "Vanessa Airbnb",
    subtitle: "Airbnb & Hospitality",
    accent: "text-pink-300",
    items: ["Property Acquisition", "Interior Design & Setup", "Guest Experience Automation", "High-Performing Listings"],
    copy: "Short-term rental properties designed for exceptional guest experiences and passive income growth.",
    cta: "View Properties",
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

const roadmap = [
  [Rocket, "Step 1", "Build & Automate", "Build our agency systems, automate everything, deliver results."],
  [House, "Step 2", "Buy & Scale", "Acquire Airbnb properties, build passive income machines."],
  [TrendingUp, "Step 3", "Invest & Grow", "Invest in assets, scale operations, and create financial freedom."],
  [Gem, "Step 4", "Legacy & Impact", "Build EchoAlpha, create lasting impact, and leave a legacy."],
];

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["AI Audio", "/elevenlabs-ai-audio"],
  ["Roadmap", "#roadmap"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function Button({ children, href, variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-glow"
      : "border border-violet-400/70 bg-black/20 text-white hover:bg-white/10";
  const className = `inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5 ${classes}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}

function App() {
  if (window.location.pathname === "/elevenlabs-ai-audio") {
    return <ElevenLabsAudioPage />;
  }

  if (window.location.pathname === "/ai-audio-launch-kit") {
    return <AiAudioLaunchKitPage />;
  }

  if (window.location.pathname === "/audiobook-ai") {
    return <AudiobookAiPage />;
  }

  if (window.location.pathname === "/lantern-audio") {
    return <LanternAudioPage />;
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a className="flex items-center gap-3" href="#home">
            <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
            <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-slate-200 hover:text-violet-300">
                {label}
              </a>
            ))}
          </nav>
          <Button href="#contact">Book a Call</Button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,.25),transparent_36%),radial-gradient(circle_at_45%_20%,rgba(147,51,234,.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Building AI Systems. Automating Growth. <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">Creating Freedom.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-slate-300">
              EchoMedia.ai builds smart AI automations that save time, scale businesses, and create real freedom. Three divisions. One mission: Own the future.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#services">Explore Our Services</Button>
              <Button href="#contact" variant="outline">Book a Strategy Call</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <img src={infinityHero} alt="Neon infinity growth system" className="w-full drop-shadow-2xl" />
            <div className="absolute right-[18%] top-4 rounded-full border border-sky-400/40 bg-slate-950/80 p-4 backdrop-blur">
              <Bot className="h-7 w-7 text-sky-300" />
            </div>
            <div className="absolute right-[8%] top-12 hidden max-w-52 md:block">
              <p className="font-bold">AI AUTOMATION</p>
              <p className="text-sm text-slate-300">Systems that work 24/7 so you don’t have to.</p>
            </div>
            <div className="absolute bottom-[21%] left-[8%] hidden max-w-48 md:block">
              <p className="font-bold">FREEDOM</p>
              <p className="text-sm text-slate-300">Time. Location. Life on your terms.</p>
            </div>
            <div className="absolute bottom-[15%] right-[8%] hidden max-w-48 md:block">
              <p className="font-bold">SCALABLE GROWTH</p>
              <p className="text-sm text-slate-300">Smart systems. Real results.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950/70">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">New AI Audio Services</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Audiobooks, voiceovers, and voice agents now have a front door.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Explore the EchoMedia.ai ElevenLabs hub for author narration, creator voice workflows, business voice agents, Lantern Protocol audio, and the coming EchoChamber language layer.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button href="/elevenlabs-ai-audio">Explore AI Audio</Button>
            <Button href="/ai-audio-launch-kit" variant="outline">Get Launch Kit</Button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/35">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Author Service Package</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Author Audio Prep</h2>
            <p className="mt-4 leading-8 text-slate-300">
              A consult-led package for authors who need a manuscript cleaned, structured, and tested before AI narration or professional audiobook production. Starting price is handled by consult so scope can match book length, chapter count, and publishing goals.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:hello@echomedia.ai?subject=Author%20Audio%20Prep%20Inquiry">Request Author Audio Prep</Button>
              <Button href="/audiobook-ai" variant="outline">View Author Workflow</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-black text-sky-300">Includes</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>Manuscript structure review</li>
                <li>Narration formatting pass</li>
                <li>Pronunciation and audio notes</li>
                <li>Test chapter QA guidance</li>
                <li>Publishing prep checklist</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-black text-violet-300">Excludes</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>Ghostwriting full chapters</li>
                <li>Guaranteeing marketplace approval</li>
                <li>Voice rights clearance for third parties</li>
                <li>Final legal or publishing advice</li>
                <li>Unlimited narration regeneration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Our Ecosystem</p>
        <h2 className="mt-3 text-center text-4xl font-black">Three Divisions. Infinite Potential.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {divisions.map((division) => {
            const Icon = division.icon;
            return (
              <article key={division.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
                <div className="flex items-start gap-5">
                  <Icon className={`h-14 w-14 ${division.accent}`} />
                  <div>
                    <h3 className="text-3xl font-black">{division.title}</h3>
                    <p className={`mt-1 text-lg font-semibold ${division.accent}`}>{division.subtitle}</p>
                  </div>
                </div>
                <p className="mt-7 leading-7 text-slate-300">{division.copy}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {division.items.map((item) => (
                    <li key={item} className="flex items-center gap-3"><CheckCircle2 className={`h-4 w-4 ${division.accent}`} />{item}</li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-9 inline-flex items-center gap-2 font-semibold ${division.accent}`}>{division.cta}<ArrowRight className="h-4 w-4" /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Our Roadmap</p>
            <h2 className="mt-3 text-4xl font-black">The Journey Ahead</h2>
            <p className="mt-5 leading-7 text-slate-300">We’re building step by step. Each phase unlocks more freedom, more impact, and more legacy.</p>
            <div className="mt-8"><Button href="#contact" variant="outline">Talk Through the Roadmap</Button></div>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {roadmap.map(([Icon, step, title, copy]) => (
              <div key={step} className="relative">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 shadow-glow">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <p className="font-bold text-violet-300">{step}</p>
                <h3 className="mt-1 font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-[420px_1fr_300px]">
          <img
            src={vanessaCooProfile}
            alt="Vanessa, Chief Operating Officer of EchoMedia.ai"
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-violet-950/30 transition duration-500 hover:scale-[1.01]"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">COO’s Vision</p>
            <h2 className="mt-3 text-4xl font-black">Built on Freedom. Driven by Purpose.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              I’m building EchoMedia.ai to create the life I’ve always dreamed of: freedom of time, freedom of location, and the ability to help others do the same.
            </p>
            <p className="mt-4 leading-8 text-slate-300">This is more than a business. It’s a movement. Let’s build the future together.</p>
            <p className="mt-6 font-signature text-4xl text-violet-300">Vanessa</p>
            <p className="text-slate-300">Chief Operating Officer, EchoMedia.ai</p>
          </div>
          <div className="space-y-7 border-l border-white/10 pl-8">
            {[ [Clock, 'Time Freedom', 'Design your days. Live on your terms.'], [Globe2, 'Location Freedom', 'Work from anywhere. Live anywhere.'], [Heart, 'Financial Freedom', 'Build once. Earn forever. Help others do the same.'] ].map(([Icon, title, copy]) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-400/50 bg-violet-500/15"><Icon className="h-6 w-6 text-violet-300" /></div>
                <div><h3 className="font-bold">{title}</h3><p className="text-sm leading-6 text-slate-300">{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-violet-600 to-sky-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center">
          <div><h2 className="text-4xl font-black">Ready to Build Your Freedom?</h2><p className="mt-2 text-lg">Let’s connect and build something extraordinary together.</p></div>
          <div className="text-center"><Button href="mailto:hello@echomedia.ai" variant="outline">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button><p className="mt-3 text-sm">Let’s build your future.</p></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#020617]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
          <div className="flex items-center gap-3"><img src={logo} alt="EchoMedia.ai" className="h-8 w-8" /><span className="font-black">EchoMedia.ai</span></div>
          <p className="text-sm text-slate-400">© 2026 EchoMedia.ai. All rights reserved.</p>
          <div className="flex gap-5 text-slate-400">
            <a href="https://echomedia.ai" aria-label="EchoMedia.ai website" className="hover:text-violet-300"><Globe2 className="h-5 w-5" /></a>
            <a href="mailto:hello@echomedia.ai" aria-label="Email EchoMedia.ai" className="hover:text-violet-300"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
