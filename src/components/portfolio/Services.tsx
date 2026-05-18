import { Reveal, SectionLabel } from "./Reveal";
import { GraduationCap, Briefcase, RefreshCw, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Premium Portfolio Websites",
    desc: "Affordable, premium personal websites designed specifically for students and fresh graduates to make a stellar first impression.",
    bullets: ["Custom glassmorphism design", "Fully responsive layout", "Basic SEO implementation"],
    tag: "Best for Students",
  },
  {
    icon: Briefcase,
    title: "Personal Branding Websites",
    desc: "Modern and premium portfolio presence for developers, designers, writers, and working professionals building their digital authority.",
    bullets: ["Custom layouts & pages", "Sleek typography & colors", "Showcase work elegantly"],
  },
  {
    icon: RefreshCw,
    title: "Portfolio Redesign",
    desc: "Upgrading existing websites with responsive architecture, fluid custom styling, premium animations, and performance fine-tuning.",
    bullets: ["Visual system overhaul", "Micro-interaction cleanup", "Performance & speed audit"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <SectionLabel>04 — Services</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Three ways we can <span className="text-gradient">collaborate</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground sm:text-lg">
              I operate a focused digital startup helper. High-end visual taste, clean layouts, and personalized attention — engineered to give your digital brand a premium edge.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl glass p-7 transition-all hover:border-[var(--neon-blue)]/40">
                <div>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background">
                      <s.icon className="h-6 w-6" />
                    </div>
                    {s.tag && (
                      <span className="rounded-full border border-[var(--neon-cyan)]/40 bg-[var(--neon-cyan)]/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--neon-cyan)] font-semibold shadow-[0_0_10px_rgba(34,211,238,0.15)]">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>

                <div>
                  <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--neon-cyan)]">
                    Start a project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
