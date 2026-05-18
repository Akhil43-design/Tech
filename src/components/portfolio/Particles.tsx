import { useEffect, useRef, useState } from "react";

export function Particles({ density = 0.00004 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0;
    
    // Throttle mouse updates
    const targetMouse = { x: -9999, y: -9999 };
    const currentMouse = { x: -9999, y: -9999 };

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let pts: P[] = [];
    const colors = ["#22d3ee", "#7c5cff", "#3b82f6", "#a855f7"];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      
      // Limit count: 30-50 on desktop
      const count = Math.min(45, Math.floor(window.innerWidth * window.innerHeight * density));
      
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: (Math.random() * 1.5 + 0.5) * dpr,
        c: colors[Math.floor(Math.random() * colors.length)],
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      targetMouse.x = e.clientX * dpr;
      targetMouse.y = e.clientY * dpr;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      // Pause animation when tab is hidden
      if (document.hidden) {
        raf = requestAnimationFrame(tick);
        return;
      }

      // Smoothly interpolate mouse coordinates
      if (currentMouse.x === -9999) {
        currentMouse.x = targetMouse.x;
        currentMouse.y = targetMouse.y;
      } else {
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.1;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.1;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 0.5;

      for (const p of pts) {
        if (currentMouse.x !== -9999) {
          const dx = p.x - currentMouse.x, dy = p.y - currentMouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 10000) {
            const f = (10000 - d2) / 10000;
            p.vx += (dx / Math.sqrt(d2 + 1)) * f * 0.02;
            p.vy += (dy / Math.sqrt(d2 + 1)) * f * 0.02;
          }
        }
        
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.98; p.vy *= 0.98;

        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = p.c;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connection lines removed completely for massive O(N^2) speedup!
      
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density, isMobile]);

  if (isMobile) return null;

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 opacity-40" />;
}
