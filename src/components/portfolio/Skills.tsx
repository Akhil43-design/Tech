import { Reveal, SectionLabel } from "./Reveal";
import { BookOpen, Code, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Learning & Backend Basics",
    icon: BookOpen,
    color: "text-[var(--neon-purple)]",
    items: [
      { name: "Python", desc: "Understanding syntax, basic scripting, and automation workflows." },
      { name: "Django", desc: "Learning backend routes, template rendering, and database setups." },
      { name: "SQLite", desc: "Working with relational database tables and model operations." }
    ]
  },
  {
    title: "Core Web Building",
    icon: Code,
    color: "text-[var(--neon-cyan)]",
    items: [
      { name: "HTML & CSS", desc: "Structuring semantic web pages with modular layouts." },
      { name: "Tailwind CSS", desc: "Crafting beautiful glassmorphic elements and styling systems." },
      { name: "Responsive Design", desc: "Ensuring flawless visual adapters across mobile and desktop devices." }
    ]
  },
  {
    title: "Familiar Frameworks & Tools",
    icon: Terminal,
    color: "text-[var(--neon-blue)]",
    items: [
      { name: "React", desc: "Understanding component structures, hooks, and interface interactions." },
      { name: "JavaScript / TS", desc: "Familiar with DOM operations, data toggling, and basic scripting." },
      { name: "Git & GitHub", desc: "Using version control to track project history and collaborate." }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-grid noise-mask opacity-30" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>02 — Skills & Toolkit</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Our active <span className="text-gradient">learning stack</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            An authentic look at the technologies we are currently using and actively learning as we grow our digital capabilities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-all hover:border-[var(--neon-blue)]/20">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--neon-blue)]/5 blur-xl" />
                <div className="flex items-center gap-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${cat.color}`}>
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{cat.title}</h3>
                </div>

                <div className="mt-6 space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="border-l-2 border-white/5 pl-4 hover:border-[var(--neon-cyan)]/40 transition-colors">
                      <h4 className="text-sm font-semibold text-foreground/90">{item.name}</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
