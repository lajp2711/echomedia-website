import logo from "../assets/echomedia-logo.svg";
import { navItems } from "../content/siteContent";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a className="flex items-center gap-3" href="#home">
          <img src={logo} alt="EchoMedia.ai logo" className="h-10 w-10" />
          <span className="text-2xl font-black tracking-tight">EchoMedia.ai</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-slate-200 hover:text-violet-300">
              {label}
            </a>
          ))}
        </nav>
        <Button href="#contact">Book a Call</Button>
      </div>
    </header>
  );
}
