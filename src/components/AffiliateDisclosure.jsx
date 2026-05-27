function AffiliateDisclosure({ className = "", compact = false }) {
  return (
    <section className={`mx-auto max-w-5xl px-6 ${className}`}>
      <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-6 text-sm leading-7 text-slate-200">
        <p className="font-bold text-sky-200">Affiliate disclosure</p>
        <p className={compact ? "mt-2" : "mt-2"}>
          Some links on this page are affiliate links. If you sign up through them, EchoMedia.ai may earn a commission at no extra cost to you. We only recommend tools that fit our actual workflows for AI audio, narration, voice agents, content production, and publishing.
        </p>
      </div>
    </section>
  );
}

export default AffiliateDisclosure;
