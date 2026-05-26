import { useMemo, useState } from "react";
import { claimLanternReward } from "../../lib/lantern/lanternCrisisApi";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function LanternRewardCapture({ triggerMethod = "unknown" }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consentToSendReward, setConsentToSendReward] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(
    () => isValidEmail(email) && consentToSendReward && status !== "submitting",
    [email, consentToSendReward, status]
  );

  async function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setMessage("Enter a valid email and confirm reward consent first.");
      return;
    }

    setStatus("submitting");
    setMessage("Opening an approval-gated archive request...");

    const result = await claimLanternReward({
      email: email.trim(),
      firstName: firstName.trim(),
      triggerMethod,
      triggerTimestamp: new Date().toISOString(),
      consentToSendReward,
      marketingOptIn,
      clientEventId: crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
      campaignId: "lantern-crisis-v1",
    });

    setStatus(result.ok ? "success" : result.status || "error");
    setMessage(result.message);
  }

  return (
    <section className="mt-5 rounded-2xl border border-amber-200/30 bg-amber-200/10 p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-amber-100/80">Reward Signal</p>
      <h3 className="mt-2 text-lg font-bold text-amber-100">You found the signal.</h3>
      <p className="mt-2 text-sm leading-6 text-emerald-50/85">
        The fictional Lantern would open the archive. The real Lantern asks permission.
      </p>
      <p className="mt-2 text-sm leading-6 text-emerald-50/75">
        Enter your email and we’ll send a digital reward from the Lantern Protocol archive when the reward service is connected.
      </p>

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block text-sm text-emerald-50/90">
            Email
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-xl border border-emerald-300/20 bg-black/50 px-3 py-2 text-sm text-emerald-50 placeholder:text-emerald-100/40 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/40"
              type="email"
              placeholder="reader@example.com"
              autoComplete="email"
            />
          </label>

          <label className="block text-sm text-emerald-50/90">
            First name, optional
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-emerald-300/20 bg-black/50 px-3 py-2 text-sm text-emerald-50 placeholder:text-emerald-100/40 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/40"
              type="text"
              placeholder="Ada"
              autoComplete="given-name"
            />
          </label>
        </div>

        <label className="flex gap-3 text-sm leading-6 text-emerald-50/85">
          <input
            checked={consentToSendReward}
            onChange={(event) => setConsentToSendReward(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-emerald-300/40 bg-black text-amber-200 focus:ring-amber-200"
            type="checkbox"
          />
          <span>I agree to receive the Lantern Protocol digital reward link at this email address.</span>
        </label>

        <label className="flex gap-3 text-sm leading-6 text-emerald-50/70">
          <input
            checked={marketingOptIn}
            onChange={(event) => setMarketingOptIn(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-emerald-300/40 bg-black text-amber-200 focus:ring-amber-200"
            type="checkbox"
          />
          <span>Optional: send me Lantern Protocol updates and future archive drops.</span>
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className="rounded-xl bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Claim Reward
        </button>

        {message && (
          <p
            className={`text-sm leading-6 ${status === "success" ? "text-emerald-200" : "text-amber-100"}`}
            role="status"
          >
            {message}
          </p>
        )}

        <p className="text-xs leading-5 text-emerald-100/55">
          Reward consent and marketing consent are separate. The archive does not require a newsletter oath.
        </p>
      </form>
    </section>
  );
}
