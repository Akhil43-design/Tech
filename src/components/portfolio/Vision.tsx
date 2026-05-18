import { Reveal, SectionLabel } from "./Reveal";

const milestones = [
  {
    phase: "Phase 1",
    title: "Portfolio Websites",
    status: "Current Focus / Active",
    body: "Helping fresh graduates and students publish premium, interview-winning personal identities and digital brands."
  },
  {
    phase: "Phase 2",
    title: "Personal Branding Solutions",
    status: "Current Focus / Active",
    body: "Designing custom branding packages, professional developer portfolios, and sleek, typography-first landing pages."
  },
  {
    phase: "Phase 3",
    title: "Full Stack Website Development",
    status: "Learning Stage / Future Phase",
    body: "Actively mastering database architectures, APIs, Django backend services, and multi-page configurations."
  },
  {
    phase: "Phase 4",
    title: "MVP Development",
    status: "Future Phase",
    body: "Expanding capabilities into rapid prototyping, custom CMS interfaces, and simple client-side startup tools."
  },
  {
    phase: "Phase 5",
    title: "SaaS Products",
    status: "Future Vision",
    body: "Architecting self-serve utility tools, workflow automations, and modern, lightweight SaaS micro-products."
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionLabel>06 — Vision & Roadmap</SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Our step-by-step roadmap to <span className="text-gradient">digital craftsmanship</span>.
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg leading-relaxed">
            Every phase represents a deliberate, authentic step toward building meaningful digital experiences. We believe in learning thoroughly, shipping honestly, and scaling with our client base.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] md:block" />
          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isFuture = m.status.includes("Future") || m.status.includes("Learning");
              return (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="relative grid gap-4 md:grid-cols-[60px_1fr] md:gap-8">
                    <div className="relative flex md:justify-start">
                      <div className="relative grid h-10 w-10 place-items-center rounded-full glass-strong">
                        <span className={`h-2 w-2 rounded-full ${isFuture ? "bg-white/30" : "bg-[var(--neon-cyan)] shadow-[0_0_15px_var(--neon-cyan)]"}`} />
                      </div>
                    </div>
                    <div className={`rounded-2xl glass p-6 border ${isFuture ? "border-white/5 opacity-80" : "border-[var(--neon-blue)]/20"}`}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--neon-cyan)]">{m.phase}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">{m.status}</span>
                        </div>
                        <span className="h-px flex-1 bg-white/5 hidden md:block" />
                      </div>
                      <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground">{m.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
