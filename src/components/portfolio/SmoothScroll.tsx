import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Disable smooth scroll on mobile/tablet devices to preserve native touch scrolling fluidness
    if (window.innerWidth < 1024) return;

    const lenis = new Lenis({ 
      duration: 1.0, 
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    
    let raf = 0;
    const loop = (t: number) => { 
      lenis.raf(t); 
      raf = requestAnimationFrame(loop); 
    };
    raf = requestAnimationFrame(loop);
    
    return () => { 
      cancelAnimationFrame(raf); 
      lenis.destroy(); 
    };
  }, []);
  return null;
}
