import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("sent");
    } catch (e) {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-50">Let’s build something</h2>
          <p className="mt-2 text-sky-200/80">Tell me about your idea. I’ll get back within a day.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-sky-400/20 bg-slate-900/60 p-6 shadow-[0_10px_40px_-15px_rgba(2,132,199,0.35)]">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-sky-200/80">Name</label>
              <input required className="mt-1 w-full rounded-xl border border-sky-400/20 bg-slate-900/60 px-3 py-2 text-sky-100 placeholder:text-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-500/50" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-sky-200/80">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-sky-400/20 bg-slate-900/60 px-3 py-2 text-sky-100 placeholder:text-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-500/50" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-sky-200/80">Message</label>
            <textarea rows={5} required className="mt-1 w-full rounded-xl border border-sky-400/20 bg-slate-900/60 px-3 py-2 text-sky-100 placeholder:text-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-500/50" placeholder="What would you like to build?" />
          </div>
          <button disabled={status!=="idle"} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-900/40 disabled:opacity-60">
            {status === "loading" ? (
              <>
                <Mail size={16} className="animate-pulse" /> Sending...
              </>
            ) : status === "sent" ? (
              <>
                <Send size={16} /> Sent! I’ll reply soon
              </>
            ) : (
              <>
                <Mail size={16} /> Send message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
