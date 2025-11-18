const skills = [
  { name: "React", level: 90 },
  { name: "Three.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "WebGL / GLSL", level: 70 },
  { name: "Framer Motion", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-50">Skills</h2>
          <p className="mt-2 text-sky-200/80">The tools I love and use to build immersive experiences.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-sky-400/20 bg-slate-900/60 p-6 shadow-[0_10px_40px_-15px_rgba(2,132,199,0.35)]">
              <div className="flex items-center justify-between">
                <span className="text-sky-100 font-medium">{s.name}</span>
                <span className="text-sky-300/80 text-sm">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-800/80 ring-1 ring-inset ring-slate-700/40">
                <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
