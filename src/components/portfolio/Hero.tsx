import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Scene3D } from "./Scene3D";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden flex items-center">

      {/* ── Layer 1: Deep dark base ── */}
      <div className="absolute inset-0 bg-[#05050e]" />

      {/* ── Layer 2: Subtle grid ── */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* ── Layer 3: Premium radial glow centre ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, oklch(0.22 0.08 280 / 0.55), transparent 70%)",
        }}
      />

      {/* ── Layer 4: Left content zone — extra dark vignette so text pops ── */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, #05050e 45%, transparent 75%)",
        }}
      />

      {/* ── Layer 5: Ambient colour blobs ── */}
      <div className="pointer-events-none absolute -left-60 top-20 h-[500px] w-[500px] rounded-full bg-[var(--neon-blue)] opacity-[0.07] blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--neon-purple)] opacity-[0.1] blur-[180px]" />

      {/* ── Layer 6: 3D Scene — right half desktop, subtle mobile ── */}
      <div
        className="absolute inset-0 lg:left-[42%] opacity-60 lg:opacity-100"
        aria-hidden
      >
        <Scene3D />
      </div>

      {/* ── Layer 7: Extra readability veil over 3D on mobile ── */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, #05050e 0%, oklch(0.08 0.02 270 / 0.7) 40%, oklch(0.08 0.02 270 / 0.6) 100%)",
        }}
      />

      {/* ── Layer 8: Hero content ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 pb-24">
        <div className="lg:max-w-[58%]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--neon-cyan)]/25 bg-[var(--neon-cyan)]/8 px-4 py-1.5 text-xs font-medium text-[var(--neon-cyan)] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            Available for select projects · 2026
          </motion.div>

          {/* Name headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white"
            style={{
              textShadow: "0 0 80px oklch(0.7 0.22 250 / 0.35), 0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            Akhil{" "}
            <span
              className="text-gradient"
              style={{
                filter: "drop-shadow(0 0 30px oklch(0.7 0.22 250 / 0.6))",
              }}
            >
              Palaparthi
            </span>
          </motion.h1>

          {/* Role line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-white/80 sm:text-xl"
          >
            <span className="font-semibold text-white/95">Founder</span>
            <span className="mx-2.5 text-[var(--neon-cyan)]">·</span>
            <span className="font-semibold text-white/95">Web Developer</span>
            <span className="mx-2.5 text-[var(--neon-cyan)]">·</span>
            <span className="text-white/75">Learning Full Stack Development</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-lg text-base text-white/55 leading-relaxed"
          >
            Building premium digital identities today. Growing into digital
            product development tomorrow.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_50px_-12px_var(--neon-purple)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/12 hover:border-white/25"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
            >
              Explore Services →
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/8 pt-8"
          >
            {[
              { label: "Portfolios Built", value: "5+" },
              { label: "Tech Learning", value: "4" },
              { label: "Response Time", value: "< 24h" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-bold text-white/90">{s.value}</span>
                <span className="text-[11px] uppercase tracking-widest text-white/40">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30"
      >
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-[var(--neon-cyan)]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
