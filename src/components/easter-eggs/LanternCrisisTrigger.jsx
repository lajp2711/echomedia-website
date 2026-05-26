import { useEffect, useRef, useState } from "react";
import LanternCrisisSimulator from "./LanternCrisisSimulator";

const WAKE_WORDS = [
  { phrase: "LANTERN", method: "typed:LANTERN" },
  { phrase: "THE BOARD IS VISIBLE", method: "typed:THE_BOARD_IS_VISIBLE" },
  { phrase: "WAKE LANTERN", method: "typed:WAKE_LANTERN" },
];

export default function LanternCrisisTrigger() {
  const [open, setOpen] = useState(false);
  const [glyphClicks, setGlyphClicks] = useState(0);
  const [triggerMethod, setTriggerMethod] = useState("unknown");
  const typedBufferRef = useRef("");

  function openSimulator(method) {
    setTriggerMethod(method);
    setOpen(true);
  }

  function closeSimulator() {
    setOpen(false);

    if (window.location.pathname === "/lantern/crisis") {
      window.history.pushState({}, "", "/");
    }
  }

  useEffect(() => {
    if (window.location.pathname === "/lantern/crisis") {
      openSimulator("route:/lantern/crisis");
    }

    function handlePopState() {
      if (window.location.pathname === "/lantern/crisis") {
        openSimulator("route:/lantern/crisis");
      }
    }

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      const target = event.target;
      const isTypingField =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (isTypingField) return;

      const key = event.key;

      if (key.length !== 1 && key !== " ") return;

      typedBufferRef.current = `${typedBufferRef.current}${key}`.toUpperCase();

      if (typedBufferRef.current.length > 64) {
        typedBufferRef.current = typedBufferRef.current.slice(-64);
      }

      const match = WAKE_WORDS.find((wakeWord) =>
        typedBufferRef.current.includes(wakeWord.phrase)
      );

      if (match) {
        openSimulator(match.method);
        typedBufferRef.current = "";
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleGlyphClick() {
    const nextCount = glyphClicks + 1;
    setGlyphClicks(nextCount);

    if (nextCount >= 5) {
      openSimulator("glyph:5-click");
      setGlyphClicks(0);
    }
  }

  function handleRouteClick() {
    window.history.pushState({}, "", "/lantern/crisis");
    openSimulator("route:/lantern/crisis");
  }

  return (
    <>
      <button
        type="button"
        onClick={handleGlyphClick}
        onDoubleClick={handleRouteClick}
        className="fixed bottom-3 right-3 z-40 rounded-full border border-amber-200/10 bg-slate-950/40 px-3 py-2 text-xs text-amber-100/30 opacity-40 backdrop-blur transition hover:border-amber-200/40 hover:text-amber-100 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-200"
        aria-label="Hidden Lantern Protocol Easter egg"
        title="The board is visible."
      >
        🜁
      </button>

      <LanternCrisisSimulator
        open={open}
        onClose={closeSimulator}
        triggerMethod={triggerMethod}
      />
    </>
  );
}
