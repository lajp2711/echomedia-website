import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import infinityHero from "../assets/infinity-hero.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,.25),transparent_36%),radial-gradient(circle_at_45%_20%,rgba(147,51,234,.22),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="mb-5 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-200">
            AI automation for support, content, leads, and operations
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Turn manual business work into <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">systems that save time and prove ROI.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
            EchoMedia.ai builds practical AI automations for service teams, founders, creators, and hospitality operators. We connect tickets, logs, content, CRM follow-up, and customer communications into workflows that produce clear outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#proof">View OpsHelm Demo</Button>
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
            <p className="text-sm text-slate-300">Systems that convert raw work into repeatable outcomes.</p>
          </div>
          <div className="absolute bottom-[21%] left-[8%] hidden max-w-48 md:block">
            <p className="font-bold">OPERATIONAL LEVERAGE</p>
            <p className="text-sm text-slate-300">Support, content, leads, and reporting under one rhythm.</p>
          </div>
          <div className="absolute bottom-[15%] right-[8%] hidden max-w-48 md:block">
            <p className="font-bold">MEASURABLE ROI</p>
            <p className="text-sm text-slate-300">Hours saved. Value shown. Next steps clear.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
