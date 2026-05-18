import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Scene3D } from "./Scene3D";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-grid noise-mask opacity-50" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[var(--neon-blue)] opacity-20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[460px] w-[460px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-[160px]" />

      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-5 pt-32 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
          Available for select projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
        >
          Akhil <span className="text-gradient">Palaparthi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          <span className="text-foreground/90">Founder</span>
          <span className="mx-2 text-[var(--neon-cyan)]">·</span>
          <span className="text-foreground/90">Web Developer</span>
          <span className="mx-2 text-[var(--neon-cyan)]">·</span>
          <span className="text-foreground/90">Learning Full Stack Development</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed"
        >
          Building premium digital identities today. Growing into digital product development tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-medium text-background shadow-[0_0_50px_-12px_var(--neon-purple)] transition-transform hover:scale-[1.03]">
            View My Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium hover:bg-white/10">
            Contact Us
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            Explore Services →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <div className="flex flex-col items-center gap-2">
            <span>Scroll</span>
            <span className="h-8 w-px bg-gradient-to-b from-[var(--neon-cyan)] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
