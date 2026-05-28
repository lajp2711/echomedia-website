import { ArrowRight, CheckCircle2 } from "lucide-react";
import { divisions } from "../content/siteContent";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Our Ecosystem</p>
      <h2 className="mt-3 text-center text-4xl font-black">Three Divisions. One Automation Backbone.</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-300">
        EchoMedia.ai starts with practical AI automation, then expands that operating leverage into Casakey LLC hospitality operations and future intelligence products.
      </p>
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
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className={`h-4 w-4 ${division.accent}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-9 inline-flex items-center gap-2 font-semibold ${division.accent}`}>
                {division.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
