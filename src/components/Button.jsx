export default function Button({ children, href, variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-glow"
      : "border border-violet-400/70 bg-black/20 text-white hover:bg-white/10";
  const className = `inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5 ${classes}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
