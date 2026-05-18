import { Reveal, SectionLabel } from "./Reveal";
import { BookOpen, HelpCircle, Compass, Shield, Users } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Continuous Learning", body: "Actively studying backend fundamentals, Python, Django, and modern full-stack developer ecosystems." },
  { icon: HelpCircle, title: "Client First", body: "Focusing on clear communication, understanding student/professional needs, and reliable support." },
  { icon: Compass, title: "Humble Approach", body: "No bloated corporate layers. Just high-quality design, honest code, and reliable deployment." },
  { icon: Shield, title: "Dedicated Support", body: "Committed to launching digital identities that help clients secure opportunities and grow." },
];

const team = [
  {
    name: "Akhil Palaparthi",
    role: "Founder / Development",
    desc: "Building frontend designs, setting up configurations, and learning backend web technologies."
  },
  {
    name: "Client Communication",
    role: "Client Care & Operations",
    desc: "Managing conversations, detailing client requirements, and coordinating project updates."
  },
  {
    name: "Operations Support",
    role: "Coordination Support",
    desc: "Helping with project execution schedules, domain checks, and manual deployment support."
  }
];

export function About() {
  return (
    <section id="about" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Story Intro */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionLabel>01 — About</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A student entrepreneur building honest <span className="text-gradient">digital presence</span>.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              I am Akhil Palaparthi, a student entrepreneur and web developer currently learning full stack development.
              I started by building portfolio websites because I noticed students and fresh graduates often lacked a strong, design-grade digital presence to showcase their achievements.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              This startup is our first step toward building meaningful digital products. We are currently focused on premium portfolio website development while learning, experimenting, and expanding our technical and frontend capabilities.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-[var(--neon-blue)]/40">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon-purple)]/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />
                  <p.icon className="h-7 w-7 text-[var(--neon-cyan)]" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <Users className="h-3 w-3 text-[var(--neon-cyan)] animate-pulse" />
              02 — Our Team
            </div>
            <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
              Small team. <span className="text-gradient">Relentless focus</span>.
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              We operate as a compact 3-person team dedicated to launching high-end portfolio websites without any fake corporate layers.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:border-[var(--neon-blue)]/30">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--neon-blue)]/5 blur-2xl" />
                  <div className="font-display text-xs font-semibold text-[var(--neon-cyan)] uppercase tracking-wider">
                    {m.role}
                  </div>
                  <h4 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground">
                    {m.name}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
