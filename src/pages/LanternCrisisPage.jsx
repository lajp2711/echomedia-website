import { useState } from "react";
import LanternCrisisSimulator from "../components/easter-eggs/LanternCrisisSimulator";

export default function LanternCrisisPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-emerald-50">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
          Lantern Protocol
        </p>

        <h1 className="mt-4 text-4xl font-bold text-amber-100 md:text-6xl">
          Crisis Simulator
        </h1>

        <p className="mt-6 text-lg leading-8 text-emerald-50/80">
          Broad fictional intelligence. Real-world consent constraints.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 rounded-2xl bg-amber-200 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200"
        >
          Wake Lantern
        </button>

        <p className="mt-8 font-mono text-sm text-emerald-100/60">
          The board is visible. The pieces remain human.
        </p>
      </div>

      <LanternCrisisSimulator
        open={open}
        onClose={() => setOpen(false)}
        triggerMethod="route:/lantern/crisis"
      />
    </div>
  );
}
