import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-sky-400/20 bg-slate-900/50 px-4 py-3 shadow-[0_10px_40px_-15px_rgba(2,132,199,0.35)]">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 shadow-inner shadow-sky-900/40" />
            <span className="font-semibold text-sky-100 tracking-tight">SkyBoy.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sky-100/90">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm hover:text-sky-300 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-sky-400/20 text-sky-200 hover:text-white hover:bg-sky-400/10 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-sky-400/20 text-sky-200 hover:text-white hover:bg-sky-400/10 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-sky-900/40">
              <Mail size={16} /> Hire me
            </a>
          </div>

          <button className="md:hidden text-sky-100" onClick={() => setOpen((v) => !v)} aria-label="menu">
            <Menu />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-sky-400/20 bg-slate-900/70 p-4 md:hidden">
            <nav className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sky-100/90 hover:bg-sky-400/10 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-sky-400/20 text-sky-200 hover:text-white hover:bg-sky-400/10 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-sky-400/20 text-sky-200 hover:text-white hover:bg-sky-400/10 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
