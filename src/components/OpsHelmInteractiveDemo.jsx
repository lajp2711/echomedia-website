import { useState } from "react";
import { CheckCircle2, FileText, Route, TimerReset } from "lucide-react";
import { opsHelmDemoScenarios } from "../content/siteContent";
import Button from "./Button";

export default function OpsHelmInteractiveDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScenario = opsHelmDemoScenarios[activeIndex];

  return (
    <section id="opshelm-demo" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Interactive OpsHelm Demo</p>
          <h2 className="mt-3 text-4xl font-black">From messy support noise to a customer-ready action plan.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Pick a sanitized scenario and see how OpsHelm frames inputs, separates findings from assumptions, drafts the update, and translates the work into measurable time saved.
          </p>
        </div>
        <Button href="mailto:hello@echomedia.ai?subject=OpsHelm%20Demo%20Request">Request walkthrough</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
          <p className="px-2 pb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Choose a demo path</p>
          <div className="space-y-3" role="tablist" aria-label="OpsHelm demo scenarios">
            {opsHelmDemoScenarios.map((scenario, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={scenario.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    isActive
                      ? "border-emerald-300/60 bg-emerald-300/10 shadow-lg shadow-emerald-950/30"
                      : "border-white/10 bg-black/20 hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">{scenario.label}</span>
                  <span className="mt-2 block text-lg font-black text-white">{scenario.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <article className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30 p-6 shadow-2xl shadow-black/40">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Sanitized demo artifact</p>
              <h3 className="mt-2 text-3xl font-black">{activeScenario.title}</h3>
            </div>
            <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
              {activeScenario.roi}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex items-center gap-2 text-sky-300">
                <FileText className="h-5 w-5" />
                <h4 className="font-black">Sample input</h4>
              </div>
              <p className="text-sm leading-7 text-slate-300">{activeScenario.input}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                <h4 className="font-black">Verified findings</h4>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-slate-300">
                {activeScenario.findings.map((finding) => (
                  <li key={finding} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[0.62fr_0.38fr]">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex items-center gap-2 text-violet-300">
                <FileText className="h-5 w-5" />
                <h4 className="font-black">Generated customer update</h4>
              </div>
              <p className="text-sm leading-7 text-slate-300">{activeScenario.output}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex items-center gap-2 text-amber-300">
                <Route className="h-5 w-5" />
                <h4 className="font-black">Escalation path</h4>
              </div>
              <p className="text-sm leading-7 text-slate-300">{activeScenario.escalation}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
            <div className="flex items-start gap-3">
              <TimerReset className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
              <div>
                <h4 className="font-black text-emerald-100">ROI translation</h4>
                <p className="mt-2 text-sm leading-7 text-emerald-50/80">
                  {activeScenario.roi} with {activeScenario.value}. This is the business language that helps a technical review become a renewal, upsell, or executive-ready proof point.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
