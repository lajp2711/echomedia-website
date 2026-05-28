import vanessaCooProfile from "../assets/vanessa-coo-profile.svg";
import { freedomPillars } from "../content/siteContent";

export default function VanessaVision() {
  return (
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
          {freedomPillars.map(([Icon, title, copy]) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-400/50 bg-violet-500/15">
                <Icon className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
