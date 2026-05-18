import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { Check, HelpCircle, ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

type PlanOption = {
  name: string;
  price: string;
  badge?: string;
  features: string[];
};

export function Pricing() {
  // Student Plan state selection
  const studentOptions: PlanOption[] = [
    {
      name: "Hosted Plan",
      price: "₹699",
      badge: "Most Popular",
      features: [
        "1-page premium portfolio website",
        "Responsive design & showcase",
        "About, skills, projects, contact, resume",
        "Modern premium animations",
        "Live deployment",
        "1 year hosting included",
        "No source code ownership"
      ]
    },
    {
      name: "2-Year Hosted",
      price: "₹999",
      features: [
        "1-page premium portfolio website",
        "Responsive design & showcase",
        "About, skills, projects, contact, resume",
        "Modern premium animations",
        "Live deployment",
        "2 years hosting included",
        "No source code ownership"
      ]
    },
    {
      name: "Source Code",
      price: "₹1299",
      features: [
        "Full source code & project files",
        "Comprehensive setup instructions",
        "Modern premium animations",
        "Local setup assistance",
        "No hosting included"
      ]
    },
    {
      name: "Full Ownership",
      price: "₹1599",
      features: [
        "Full source code & project files",
        "Deployment setup help",
        "Full ownership transfer",
        "Personal setup guidance & docs"
      ]
    }
  ];

  // Professional Plan state selection
  const professionalOptions: PlanOption[] = [
    {
      name: "Hosted Plan",
      price: "₹1499",
      badge: "Most Popular",
      features: [
        "Premium personal portfolio",
        "Enhanced custom layouts",
        "Responsive design & better animations",
        "Live deployment",
        "1 year hosting included",
        "No source code ownership"
      ]
    },
    {
      name: "2-Year Hosted",
      price: "₹1999",
      features: [
        "Premium personal portfolio",
        "Enhanced custom layouts",
        "Responsive design & better animations",
        "Live deployment",
        "2 years hosting included",
        "No source code ownership"
      ]
    },
    {
      name: "Source Code",
      price: "₹2499",
      features: [
        "Full source code & project files",
        "Detailed deployment instructions",
        "Advanced customized sections",
        "No hosting included"
      ]
    },
    {
      name: "Full Ownership",
      price: "₹2999",
      features: [
        "Full source code & project files",
        "Premium custom styling",
        "Deployment setup help & docs",
        "Complete ownership transfer"
      ]
    }
  ];

  const [studentIndex, setStudentIndex] = useState(0);
  const [profIndex, setProfIndex] = useState(0);

  const activeStudent = studentOptions[studentIndex];
  const activeProf = professionalOptions[profIndex];

  const addOns = [
    { name: "Custom domain setup", price: "₹300" },
    { name: "Extra page integration", price: "₹250/page" },
    { name: "Resume design matching template", price: "₹199" },
    { name: "LinkedIn profile optimization audit", price: "₹299" },
    { name: "Fast track 48hr express delivery", price: "₹500" }
  ];

  return (
    <section id="pricing" className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
      
      {/* Decorative top lights */}
      <div className="absolute left-1/3 top-1/4 -z-10 h-72 w-72 rounded-full bg-[var(--neon-purple)]/10 blur-[100px]" />
      <div className="absolute right-1/4 top-1/2 -z-10 h-72 w-72 rounded-full bg-[var(--neon-cyan)]/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <SectionLabel>05 — Pricing</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Flexible Plans for <span className="text-gradient">Every Stage</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground sm:text-lg">
              Affordable premium portfolio solutions designed for students, professionals, and growing personal brands. Pick an option that fits your current setup.
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          
          {/* Card 1: Student Plan */}
          <Reveal delay={0.05}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[var(--neon-cyan)]/30 bg-black/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--neon-cyan)]/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              {/* Highlight background glow */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl transition-opacity group-hover:bg-[var(--neon-cyan)]/15" />
              
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[var(--neon-cyan)]/40 bg-[var(--neon-cyan)]/10 px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--neon-cyan)] font-semibold shadow-[0_0_12px_rgba(34,211,238,0.1)]">
                    Best for Students
                  </span>
                  {activeStudent.badge && (
                    <span className="rounded-full bg-[var(--neon-blue)] px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-background font-bold">
                      {activeStudent.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight flex items-center gap-2">
                  🎓 Student Plan
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Affordable premium portfolio websites for students and fresh graduates building their digital identity.
                </p>

                {/* Option Selector Toggles */}
                <div className="mt-6 p-1 rounded-xl bg-white/5 border border-white/5 grid grid-cols-2 gap-1 text-[11px] font-semibold">
                  {studentOptions.map((opt, i) => (
                    <button
                      key={opt.name}
                      onClick={() => setStudentIndex(i)}
                      className={`py-2 px-1 rounded-lg transition-all text-center ${
                        studentIndex === i
                          ? "bg-[var(--neon-cyan)]/20 border border-[var(--neon-cyan)]/30 text-[var(--neon-cyan)] shadow-sm"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>

                {/* Price Display */}
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-foreground transition-all duration-300">
                    {activeStudent.price}
                  </span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5">
                  {activeStudent.features.map((feat) => {
                    const isNegative = feat.toLowerCase().includes("no ");
                    return (
                      <li key={feat} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                        <Check className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${isNegative ? "text-rose-500/80" : "text-[var(--neon-cyan)]"}`} />
                        <span>{feat}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
                <a
                  href={`#contact?plan=student&option=${activeStudent.name.toLowerCase()}`}
                  className="w-full text-center rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] py-3.5 text-xs font-bold text-background shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Choose Plan
                </a>
                <a
                  href="#contact"
                  className="w-full text-center rounded-xl border border-white/10 bg-white/5 py-3.5 text-xs font-bold text-foreground hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Professional Plan */}
          <Reveal delay={0.1}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--neon-blue)]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              {/* Highlight background glow */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--neon-blue)]/10 blur-3xl transition-opacity group-hover:bg-[var(--neon-blue)]/15" />
              
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/10 px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--neon-blue)] font-semibold">
                    Best for Professionals
                  </span>
                  {activeProf.badge && (
                    <span className="rounded-full bg-[var(--neon-purple)] px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-background font-bold">
                      {activeProf.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight flex items-center gap-2">
                  💼 Professional Plan
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Premium personal branding portfolios for freelancers, developers, designers, and startup founders.
                </p>

                {/* Option Selector Toggles */}
                <div className="mt-6 p-1 rounded-xl bg-white/5 border border-white/5 grid grid-cols-2 gap-1 text-[11px] font-semibold">
                  {professionalOptions.map((opt, i) => (
                    <button
                      key={opt.name}
                      onClick={() => setProfIndex(i)}
                      className={`py-2 px-1 rounded-lg transition-all text-center ${
                        profIndex === i
                          ? "bg-[var(--neon-blue)]/20 border border-[var(--neon-blue)]/30 text-[var(--neon-blue)] shadow-sm"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>

                {/* Price Display */}
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-foreground transition-all duration-300">
                    {activeProf.price}
                  </span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5">
                  {activeProf.features.map((feat) => {
                    const isNegative = feat.toLowerCase().includes("no ");
                    return (
                      <li key={feat} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                        <Check className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${isNegative ? "text-rose-500/80" : "text-[var(--neon-blue)]"}`} />
                        <span>{feat}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
                <a
                  href={`#contact?plan=professional&option=${activeProf.name.toLowerCase()}`}
                  className="w-full text-center rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] py-3.5 text-xs font-bold text-background shadow-[0_0_20px_rgba(124,92,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Choose Plan
                </a>
                <a
                  href="#contact"
                  className="w-full text-center rounded-xl border border-white/10 bg-white/5 py-3.5 text-xs font-bold text-foreground hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Custom Plan */}
          <Reveal delay={0.15}>
            <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--neon-purple)]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              {/* Highlight background glow */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--neon-purple)]/10 blur-3xl transition-opacity group-hover:bg-[var(--neon-purple)]/15" />
              
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[var(--neon-purple)]/30 bg-[var(--neon-purple)]/10 px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--neon-purple)] font-semibold">
                    Flexible Solution
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight flex items-center gap-2">
                  🚀 Custom Plan
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  For unique portfolio concepts, multi-page business frameworks, and advanced developer branding.
                </p>

                {/* Price Display */}
                <div className="mt-14 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-foreground">
                    ₹2500+
                  </span>
                  <span className="text-sm text-muted-foreground">starting from</span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-8 space-y-3.5">
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--neon-purple)]" />
                    <span>Multi-page premium portfolios</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--neon-purple)]" />
                    <span>Highly unique custom design requests</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--neon-purple)]" />
                    <span>Advanced digital dashboard solutions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--neon-purple)]" />
                    <span>Hosted / Source Code / Full Ownership options</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
                <a
                  href="#contact?plan=custom"
                  className="w-full text-center rounded-xl bg-white text-background py-3.5 text-xs font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Optional Add-Ons glass container */}
        <Reveal delay={0.2}>
          <div className="group relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-lg p-6 sm:p-8 transition-colors hover:border-[var(--neon-blue)]/30">
            {/* Ambient light inside add-ons */}
            <div className="absolute -left-10 -bottom-10 -z-10 h-32 w-32 rounded-full bg-[var(--neon-cyan)]/10 blur-2xl" />
            
            <h4 className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[var(--neon-cyan)]" /> Optional Add-Ons
            </h4>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {addOns.map((add) => (
                <div key={add.name} className="rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between gap-3 group/item hover:bg-white/8 transition-colors">
                  <span className="text-xs text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                    {add.name}
                  </span>
                  <div className="flex items-baseline gap-1 mt-auto">
                    <span className="font-display text-sm font-semibold text-[var(--neon-cyan)]">
                      {add.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
