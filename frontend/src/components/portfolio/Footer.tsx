import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] font-display text-sm font-bold text-background">AP</span>
            <span className="font-display text-lg font-semibold">Akhil Palaparthi</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Building premium digital identities today. Growing into digital product development tomorrow.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[["About","#about"],["Skills","#skills"],["Projects","#projects"],["Services","#services"],["Vision","#vision"],["Contact","#contact"]].map(([l,h]) => (
              <li key={l}><a href={h} className="text-foreground/80 hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connect</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { icon: Mail, href: "mailto:akhil@palaparthi.dev", label: "Email" },
              { icon: MessageCircle, href: "https://wa.me/0000000000", label: "WhatsApp" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-xl glass hover:border-[var(--neon-blue)]/40">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 px-5 pt-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} Akhil Palaparthi. All rights reserved.</span>
        <span>Crafted with intent · Built for the future</span>
      </div>
    </footer>
  );
}
