import { ecosystemNodes } from "../content/siteContent";
import Button from "./Button";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
      <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/40 p-8 shadow-2xl shadow-black/40">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Lantern Protocol Ecosystem</p>
            <h2 className="mt-3 text-4xl font-black">EchoMedia.ai is the public engine. Lantern is the trust architecture behind it.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              EchoMedia.ai remains the customer-facing brand. Lantern Protocol gives the wider venture family a governance spine for trust, evidence, routing, and product discipline as the platform grows.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              That lets each product stay understandable to customers while still sharing a deeper operating system: OpsHelm for operational intelligence, SignalForge for reusable deployment patterns, Casakey LLC for hospitality operations, and EchoAlpha for future market intelligence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#proof">See OpsHelm Proof</Button>
              <Button href="#services" variant="outline">Explore Services</Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystemNodes.map(({ icon: Icon, title, subtitle, copy }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10">
                  <Icon className="h-6 w-6 text-sky-300" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">{subtitle}</p>
                <h3 className="mt-2 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
