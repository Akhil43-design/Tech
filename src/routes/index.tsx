import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Pricing } from "@/components/portfolio/Pricing";
import { Vision } from "@/components/portfolio/Vision";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Cursor } from "@/components/portfolio/Cursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Spotlight } from "@/components/portfolio/Spotlight";
import { Particles } from "@/components/portfolio/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akhil Palaparthi — Founder · Web Developer · Learning Full Stack" },
      { name: "description", content: "Premium startup portfolio of Akhil Palaparthi — web developer and founder currently learning full stack development and building digital identities." },
      { property: "og:title", content: "Akhil Palaparthi — Founder & Web Developer" },
      { property: "og:description", content: "Building premium digital identities today. Growing into digital product development tomorrow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Akhil Palaparthi — Founder & Web Developer" },
      { name: "twitter:description", content: "Premium startup portfolio · Web Developer · Founder" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <Particles />
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Pricing />
        <Vision />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
