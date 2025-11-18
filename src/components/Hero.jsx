import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(1000px_500px_at_80%_30%,rgba(59,130,246,0.25),transparent)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-slate-900/60 px-4 py-1 text-xs text-sky-200/80 shadow-[0_10px_40px_-15px_rgba(2,132,199,0.35)]">
          Frontend Developer • Three.js Enthusiast
        </p>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-sky-50">
          Crafting interactive web experiences in sky blue hues
        </h1>
        <p className="mt-4 text-sky-200/90 max-w-2xl mx-auto">
          I design and build immersive interfaces with React, Three.js, and WebGL. Clean code, smooth motion, and delightful details.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-900/40">View projects</a>
          <a href="#contact" className="rounded-xl border border-sky-400/30 bg-slate-900/60 px-5 py-3 text-sky-100 hover:bg-sky-400/10 transition-colors">Contact</a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
