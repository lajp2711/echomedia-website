import { useMemo, useState } from "react";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import {
  opsHelmRequestOptions,
  opsHelmTeamSizes,
  opsHelmTimelineOptions,
} from "../content/siteContent";

export default function OpsHelmRequest() {
  const [useCase, setUseCase] = useState(opsHelmRequestOptions[0]);
  const [teamSize, setTeamSize] = useState(opsHelmTeamSizes[1]);
  const [timeline, setTimeline] = useState(opsHelmTimelineOptions[1]);
  const [notes, setNotes] = useState("We want to understand how OpsHelm could reduce ticket review time and improve customer-ready updates.");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`OpsHelm walkthrough request: ${useCase}`);
    const body = encodeURIComponent(
      [
        "Hello EchoMedia.ai,",
        "",
        "I would like an OpsHelm walkthrough.",
        "",
        `Primary use case: ${useCase}`,
        `Team size: ${teamSize}`,
        `Timeline: ${timeline}`,
        "",
        "Context:",
        notes,
        "",
        "Please reply with a few available times and any prep materials you recommend.",
      ].join("\n")
    );

    return `mailto:hello@echomedia.ai?subject=${subject}&body=${body}`;
  }, [notes, teamSize, timeline, useCase]);

  return (
    <section id="opshelm-request" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
      <div className="grid gap-8 rounded-3xl border border-sky-400/20 bg-sky-950/20 p-8 shadow-2xl shadow-black/30 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Request an OpsHelm walkthrough</p>
          <h2 className="mt-3 text-4xl font-black">Turn curiosity into a scoped demo request.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            This does not store visitor data. It builds a structured email so the first conversation starts with the right problem, team shape, and timeline.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
              <p className="text-sm leading-7 text-slate-300">
                Privacy-safe by design: no customer logs, tickets, HAR files, or private data should be pasted here. Bring that material only through an approved secure review path.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-200">Primary use case</span>
              <select
                value={useCase}
                onChange={(event) => setUseCase(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-300"
              >
                {opsHelmRequestOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-200">Team size</span>
              <select
                value={teamSize}
                onChange={(event) => setTeamSize(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-300"
              >
                {opsHelmTeamSizes.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-bold text-slate-200">Timeline</span>
              <select
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-300"
              >
                {opsHelmTimelineOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-bold text-slate-200">Brief context</span>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-300"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-slate-400">
              The button opens your email client with these details prefilled. No website storage, no hidden form capture.
            </p>
            <a
              href={mailtoHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              <Mail className="h-4 w-4" />
              Send request
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
