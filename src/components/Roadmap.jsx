import { roadmap } from "../content/siteContent";
import Button from "./Button";

export default function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Our Roadmap</p>
          <h2 className="mt-3 text-4xl font-black">The Journey Ahead</h2>
          <p className="mt-5 leading-7 text-slate-300">
            We’re building step by step. Each phase turns automation into more leverage, more operating freedom, and more long-term impact.
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="outline">Talk Through the Roadmap</Button>
          </div>
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
  );
}
