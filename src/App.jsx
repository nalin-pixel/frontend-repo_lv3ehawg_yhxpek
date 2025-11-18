import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-100 selection:bg-sky-500/30 selection:text-white">
      {/* starry subtle background */}
      <div className="fixed inset-0 -z-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.08),transparent_30%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-sky-400/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-sky-300/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} SkyBoy. All rights reserved.</span>
          <span>Built with love for sky blue.</span>
        </div>
      </footer>
    </div>
  )
}

export default App