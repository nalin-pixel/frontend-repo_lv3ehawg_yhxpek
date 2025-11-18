import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nebula UI Kit",
    description: "A collection of animated, accessible components built with React and Tailwind, with subtle 3D depth.",
    tags: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    code: "#",
  },
  {
    title: "Starfield Explorer",
    description: "GPU-accelerated particle field rendered with Three.js, featuring parallax controls and depth of field.",
    tags: ["Three.js", "GLSL", "Post-processing"],
    live: "#",
    code: "#",
  },
  {
    title: "Ocean Waves Lab",
    description: "Interactive ocean simulation using FFT-based waves and sky-blue palette for a calming UX.",
    tags: ["Three.js", "Shaders", "Physics"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-50">Featured Projects</h2>
          <p className="mt-2 text-sky-200/80">A selection of recent work exploring 3D, motion, and modern UI.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl border border-sky-400/20 bg-slate-900/60 p-5 shadow-[0_10px_40px_-15px_rgba(2,132,199,0.35)]">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-700/20 mb-4 border border-sky-400/20" />
              <h3 className="text-sky-50 font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-sky-200/80">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-sky-400/20 bg-slate-900/60 px-2 py-1 text-xs text-sky-200/80">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a href={p.live} className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-sky-100 border border-sky-400/30 hover:bg-sky-400/10">
                  <ExternalLink size={14} /> Live
                </a>
                <a href={p.code} className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-sky-100 border border-sky-400/30 hover:bg-sky-400/10">
                  <Github size={14} /> Code
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-sky-400/40 transition-all" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
