import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  
  // Reduce spring complexity for smoother, cheaper interpolation
  const sx = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 });

  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Disable custom cursor on small screens, touch screens, or devices without precise pointers
    if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor=hover]"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    // Tick at most once per frame using requestAnimationFrame
    const update = () => {
      x.set(mouseRef.current.x);
      y.set(mouseRef.current.y);
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(rafRef.current);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[70] -ml-1 -mt-1 h-2 w-2 rounded-full bg-[var(--neon-cyan)] mix-blend-difference"
      />
      <motion.div
        style={{ x: sx, y: sy, scale: hover ? 1.4 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[69] -ml-5 -mt-5 h-10 w-10 rounded-full border border-[var(--neon-blue)]/50 backdrop-blur-[1px] transition-transform duration-200"
      />
    </>
  );
}
