import { Globe2, Mail } from "lucide-react";
import logo from "../assets/echomedia-logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EchoMedia.ai" className="h-8 w-8" />
          <span className="font-black">EchoMedia.ai</span>
        </div>
        <p className="text-sm text-slate-400">© 2026 EchoMedia.ai. All rights reserved.</p>
        <div className="flex gap-5 text-slate-400">
          <a href="https://echomedia.ai" aria-label="EchoMedia.ai website" className="hover:text-violet-300">
            <Globe2 className="h-5 w-5" />
          </a>
          <a href="mailto:hello@echomedia.ai" aria-label="Email EchoMedia.ai" className="hover:text-violet-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
