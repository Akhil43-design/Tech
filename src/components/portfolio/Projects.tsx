import { Reveal, SectionLabel } from "./Reveal";
import { Github, Code, CheckCircle, AlertTriangle } from "lucide-react";

const projects = [
  {
    title: "Personal AI Assistant",
    status: "Learning project / not deployed",
    blurb: "A personal AI assistant experiment built while learning automation and intelligent workflows. Focuses on local script routines.",
    tags: ["Python", "Automation", "Intelligent Workflows"],
    grad: "from-[var(--neon-blue)] to-[var(--neon-purple)]",
    isDemo: false
  },
  {
    title: "Portfolio Website Projects",
    status: "Deployed & Active",
    blurb: "Portfolio websites created for students, fresh graduates, and working professionals to establish a design-grade digital presence.",
    tags: ["HTML", "Tailwind CSS", "Premium Design"],
    grad: "from-[var(--neon-cyan)] to-[var(--neon-blue)]",
    isDemo: true
  },
  {
    title: "Django Learning Projects",
    status: "Learning project / local testbeds",
    blurb: "Small backend learning projects built while improving web development, template rendering, and database fundamentals.",
    tags: ["Python", "Django", "SQLite"],
    grad: "from-[var(--neon-purple)] to-[var(--neon-cyan)]",
    isDemo: false
  },
  {
    title: "This Business Portfolio Website",
    status: "Deployed & Active",
    blurb: "Our startup's own business portfolio website, built to showcase frontend design craft, responsive UI layouts, and interactive experiences.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    grad: "from-[var(--neon-blue)] to-[var(--neon-cyan)]",
    isDemo: true
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>03 — Selected Projects</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Projects built with <span className="text-gradient">craft & clarity</span>.
            </h2>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Have a portfolio design in mind? →</a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl glass p-6 transition-all hover:border-[var(--neon-blue)]/30">
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground font-semibold flex items-center gap-1.5">
                      {p.isDemo ? (
                        <CheckCircle className="h-3 w-3 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="h-3 w-3 text-yellow-400" />
                      )}
                      {p.status}
                    </span>
                    <span className="font-display text-sm font-semibold text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                </div>

                <div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                    <a href="#contact" className="inline-flex items-center gap-1.5 rounded-xl bg-white/5 px-4 py-2.5 text-xs font-semibold hover:bg-white/10 transition-colors">
                      <Code className="h-3.5 w-3.5" /> Inquire Details
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
