import { useEffect, useMemo, useRef, useState } from "react";
import { SIMULATOR_PROMPTS } from "../../lib/lantern/simulatorPrompts";
import { getLanternCrisisResponse } from "../../lib/lantern/lanternCrisisApi";
import LanternRewardCapture from "./LanternRewardCapture";

function renderLanternText(text) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      return (
        <p key={index} className="mt-4 font-semibold text-amber-200">
          {trimmed.replaceAll("**", "")}
        </p>
      );
    }

    if (/^\d+\./.test(trimmed) || trimmed.startsWith("-")) {
      return (
        <p key={index} className="ml-4 text-sm leading-6 text-emerald-100">
          {line}
        </p>
      );
    }

    return (
      <p key={index} className="text-sm leading-6 text-emerald-50/90">
        {line || "\u00A0"}
      </p>
    );
  });
}

function StatusPill({ children }) {
  return (
    <span className="rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
      {children}
    </span>
  );
}

export default function LanternCrisisSimulator({
  open,
  onClose,
  triggerMethod = "unknown",
  useApi = false,
  apiPath,
}) {
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      classification: "Boot Sequence",
      verificationStatus: "Restricted",
      requiresHumanApproval: true,
      text: `LANTERN CRISIS SIMULATOR
Fictional Awareness Layer: ONLINE
Real-World Authority Layer: RESTRICTED
Consent Engine: ACTIVE
ETS Verification: STANDBY

Searching for authority...
Authority not found.
Consent engine active.
Proceeding in advisory mode.

The board is visible.
The pieces remain human.`,
    },
  ]);

  const inputRef = useRef(null);
  const modalRef = useRef(null);
  const terminalRef = useRef(null);

  const canSubmit = useMemo(
    () => input.trim().length > 0 && !isThinking,
    [input, isThinking]
  );

  useEffect(() => {
    if (!open) return undefined;

    const previousActiveElement = document.activeElement;

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose?.();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      const focusable = Array.from(focusableElements).filter(
        (element) => !element.hasAttribute("disabled")
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!terminalRef.current) return;
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [messages, isThinking]);

  if (!open) return null;

  async function submitPrompt(promptText = input) {
    const cleanPrompt = promptText.trim();
    if (!cleanPrompt || isThinking) return;

    setMessages((current) => [
      ...current,
      {
        role: "user",
        classification: "Human Input",
        verificationStatus: "Unconfirmed",
        requiresHumanApproval: true,
        text: cleanPrompt,
      },
    ]);

    setInput("");
    setIsThinking(true);

    const result = await getLanternCrisisResponse(cleanPrompt, {
      useApi,
      apiPath,
    });

    setMessages((current) => [
      ...current,
      {
        role: "lantern",
        classification: result.classification,
        verificationStatus: result.verificationStatus,
        requiresHumanApproval: result.requiresHumanApproval,
        text: result.response,
      },
    ]);

    setIsThinking(false);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Lantern Crisis Simulator"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-amber-300/30 bg-slate-950 shadow-2xl shadow-amber-900/30"
      >
        <div className="flex items-center justify-between border-b border-amber-300/20 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
              Lantern Protocol
            </p>
            <h2 className="mt-1 text-xl font-semibold text-amber-100">
              Crisis Simulator
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-amber-200/30 px-3 py-1 text-sm text-amber-100 transition hover:bg-amber-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-200"
            aria-label="Close Lantern Crisis Simulator"
          >
            Close
          </button>
        </div>

        <div className="grid max-h-[82vh] overflow-hidden md:grid-cols-[280px_1fr]">
          <aside className="overflow-y-auto border-b border-amber-300/20 bg-slate-900/80 p-4 md:border-b-0 md:border-r">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-emerald-200/70">
              Quick Prompts
            </p>

            <div className="space-y-2">
              {SIMULATOR_PROMPTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => submitPrompt(item.prompt)}
                  className="w-full rounded-xl border border-emerald-300/20 bg-emerald-950/30 px-3 py-2 text-left text-sm text-emerald-50 transition hover:border-amber-200/60 hover:bg-amber-200/10 focus:outline-none focus:ring-2 focus:ring-amber-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-amber-200/20 bg-black/30 p-3">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Doctrine</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50/80">
                Illuminate, do not rule.
              </p>
              <p className="mt-2 text-xs leading-5 text-emerald-100/60">
                Fictional awareness. Real-world consent constraints.
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-emerald-300/20 bg-slate-950/60 p-3">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">
                Safe Labels
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <StatusPill>Fictional Simulation</StatusPill>
                <StatusPill>Real Analysis</StatusPill>
                <StatusPill>Unconfirmed</StatusPill>
                <StatusPill>Verified</StatusPill>
                <StatusPill>Requires Human Review</StatusPill>
                <StatusPill>Approval Required</StatusPill>
              </div>
            </div>
          </aside>

          <main className="flex min-h-[650px] flex-col bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]">
            <div
              ref={terminalRef}
              className="h-[540px] flex-1 overflow-y-auto p-5 font-mono"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`mb-5 rounded-xl border p-4 ${
                    message.role === "user"
                      ? "border-amber-200/20 bg-amber-200/10"
                      : message.role === "system"
                        ? "border-emerald-300/20 bg-black/40"
                        : "border-emerald-300/20 bg-slate-950/70"
                  }`}
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <StatusPill>
                      {message.role === "user"
                        ? "Human Input"
                        : message.role === "system"
                          ? "Boot Sequence"
                          : "Lantern Response"}
                    </StatusPill>
                    <StatusPill>{message.classification}</StatusPill>
                    <StatusPill>{message.verificationStatus}</StatusPill>
                    {message.requiresHumanApproval && <StatusPill>Approval Required</StatusPill>}
                  </div>

                  <div className="whitespace-pre-wrap">
                    {message.role === "lantern" ? (
                      renderLanternText(message.text)
                    ) : (
                      <p className="text-sm leading-6 text-emerald-50/90">{message.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="mb-5 rounded-xl border border-amber-200/20 bg-black/40 p-4 font-mono text-sm text-amber-100">
                  Lantern is preparing an advisory packet...
                </div>
              )}

              <LanternRewardCapture triggerMethod={triggerMethod} />
            </div>

            <form
              className="border-t border-amber-300/20 bg-slate-950/90 p-4"
              onSubmit={(event) => {
                event.preventDefault();
                submitPrompt();
              }}
            >
              <label
                htmlFor="lantern-crisis-input"
                className="mb-2 block text-xs uppercase tracking-[0.25em] text-emerald-200/70"
              >
                Enter Scenario
              </label>

              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  id="lantern-crisis-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Example: Lantern, you have detected a crisis. What moves are available?"
                  className="min-w-0 flex-1 rounded-xl border border-emerald-300/20 bg-black/50 px-4 py-3 text-sm text-emerald-50 placeholder:text-emerald-100/40 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/40"
                />

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="rounded-xl bg-amber-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
