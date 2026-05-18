import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { Github, Linkedin, Mail, MessageCircle, Send, Check } from "lucide-react";

const types = ["Portfolio Site", "Personal Branding", "Portfolio Redesign", "Other"];
const budgets = ["< ₹1,000", "₹1,000 – ₹2,500", "₹2,500+", "Other"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: types[0], budget: budgets[1], message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionLabel>08 — Contact</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Need a premium portfolio website? <span className="text-gradient">Let's talk</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Have a custom design layout in mind, want to build a personal branding presence, or discuss a portfolio redesign? Let's discuss.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                { icon: Mail, label: "akhil@palaparthi.dev", href: "mailto:akhil@palaparthi.dev" },
                { icon: MessageCircle, label: "Chat on WhatsApp", href: "https://wa.me/910000000000" },
                { icon: Linkedin, label: "Connect on LinkedIn", href: "https://linkedin.com/in/akhilpalaparthi" },
                { icon: Github, label: "Explore GitHub Repositories", href: "https://github.com/akhilpalaparthi" },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-2xl glass px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-[var(--neon-blue)]/40">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-[var(--neon-cyan)]">
                    <l.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{l.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--neon-purple)]/20 blur-3xl" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Your full name" />
                </Field>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="you@company.com" />
                </Field>
                <Field label="Inquiry Category">
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="input">
                    {types.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Approximate Budget">
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="input">
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message">
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" placeholder="Tell me about your portfolio needs, reference styles, or timelines..." />
                  </Field>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-medium text-background shadow-[0_0_40px_-10px_var(--neon-purple)] transition-transform hover:scale-[1.02]"
              >
                {sent ? (<><Check className="h-4 w-4" /> Message sent</>) : (<>Send message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        .input { width:100%; border-radius: 0.875rem; background: rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding: 0.75rem 0.9rem; font-size: 0.9rem; color: inherit; outline: none; transition: border-color .2s, background .2s, box-shadow .2s; }
        .input::placeholder { color: oklch(0.65 0.03 260); }
        .input:focus { border-color: var(--neon-blue); background: rgba(255,255,255,0.06); box-shadow: 0 0 0 4px color-mix(in oklab, var(--neon-blue) 18%, transparent); }
        select.input option { background: #15151f; color: #fff; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
