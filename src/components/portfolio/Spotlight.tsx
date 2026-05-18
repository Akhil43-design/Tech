import { useEffect, useRef, useState } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable spotlight on mobile/tablets/touch screens
    if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setEnabled(true);

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };

    const handler = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", handler, { passive: true });

    const update = () => {
      // Interpolate coordinates for smooth visual glide
      if (current.x === -9999) {
        current.x = target.x;
        current.y = target.y;
      } else {
        current.x += (target.x - current.x) * 0.1;
        current.y += (target.y - current.y) * 0.1;
      }

      el.style.background = `radial-gradient(450px circle at ${current.x}px ${current.y}px, oklch(0.7 0.22 250 / 0.08), transparent 70%)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handler);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[5]" />;
}
