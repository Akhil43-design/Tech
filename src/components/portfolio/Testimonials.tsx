import { Reveal, SectionLabel } from "./Reveal";
import { Tag, Sparkles, HeartHandshake, Zap, MessageSquare, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Tag,
    title: "Student-friendly pricing",
    body: "Designed to be highly affordable for graduates and fresh professionals launching their career presence."
  },
  {
    icon: Sparkles,
    title: "Modern premium design",
    body: "Futuristic dark aesthetics, premium glassmorphism, and responsive styling built to wow viewers."
  },
  {
    icon: HeartHandshake,
    title: "Personalized support",
    body: "Relentless support from planning to live deployment, with direct and helpful guidance."
  },
  {
    icon: Zap,
    title: "Small startup attention",
    body: "No large agency layers. You collaborate directly with a small team who treats your site with absolute priority."
  },
  {
    icon: MessageSquare,
    title: "Honest communication",
    body: "Clear timelines, open constraints, and honest feedback. No inflated claims or sales jargon."
  },
  {
    icon: TrendingUp,
    title: "Growing with clients",
    body: "We continuously expand our skills and help your portfolio scale as your career progresses."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>07 — Value Proposition</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Why work <span className="text-gradient">with us</span>.
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              We focus on delivering high-fidelity visual results built on authentic connections and honest craftsmanship.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all hover:border-[var(--neon-blue)]/30">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--neon-blue)]/5 blur-xl" />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--neon-cyan)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-foreground">{c.title}</h3>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
