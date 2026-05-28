import { CheckCircle2 } from "lucide-react";
import { opsHelmOutputs, proofPoints, sampleFindings } from "../content/siteContent";
import Button from "./Button";

export default function OpsHelmProof() {
  return (
    <section id="proof" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">OpsHelm Demo Funnel</p>
            <h2 className="mt-3 text-4xl font-black">A ticket intelligence report visitors can understand in seconds.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              OpsHelm is the flagship proof point for EchoMedia.ai. It turns service tickets, logs, HAR files, and customer context into structured findings, recommended next actions, customer-ready communication, and measurable ROI.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofPoints.map(([title, copy]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-sky-300" />
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-violet-400/30 bg-violet-500/10 p-5">
              <h3 className="font-black">Request the live walkthrough</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Send a workflow or sanitized ticket scenario, and EchoMedia.ai can show how OpsHelm would generate the report, customer email, escalation path, and value estimate.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="mailto:hello@echomedia.ai?subject=OpsHelm%20Demo%20Request&body=I%20would%20like%20to%20see%20an%20OpsHelm%20demo.%20Here%20is%20the%20workflow%20or%20ticket%20scenario%20I%20want%20to%20review%3A%0A%0A">Request Demo</Button>
                <Button href="#contact" variant="outline">Talk to EchoMedia.ai</Button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-400/20 bg-[#020617]/80 p-6 shadow-glow">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Sample Output</p>
                <h3 className="mt-2 text-3xl font-black">Ticket Intelligence Report</h3>
                <p className="mt-2 text-sm text-slate-400">Sanitized example for website demonstration only</p>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">
                Customer-ready
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {opsHelmOutputs.map(([title, copy]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Finding trail</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {sampleFindings.map((finding) => (
                  <li key={finding} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
