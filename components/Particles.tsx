"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = c.getContext("2d")!;
    type P = { x: number; y: number; vx: number; vy: number };
    let w = 0, h = 0, raf = 0, vis = true, f = 0, col = "#d41f1f", ps: P[] = [];
    const m = { x: -999, y: -999 };
    const size = () => {
      const r = c.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height; c.width = w * d; c.height = h * d; x.setTransform(d, 0, 0, d, 0, 0);
      ps = Array.from({ length: Math.round(Math.min(70, (w * h) / 16000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
    };
    const mv = (e: PointerEvent) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!vis) return;
      if (f++ % 90 === 0) col = getComputedStyle(document.documentElement).getPropertyValue("--acc").trim() || col;
      x.clearRect(0, 0, w, h); x.fillStyle = col; x.strokeStyle = col;
      for (const p of ps) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - m.x, dy = p.y - m.y, dm = Math.hypot(dx, dy);
        if (dm < 110 && dm > 0) { p.x += (dx / dm) * 0.8; p.y += (dy / dm) * 0.8; }
        x.globalAlpha = 0.55; x.beginPath(); x.arc(p.x, p.y, 1.8, 0, 6.283); x.fill();
      }
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const d = Math.hypot(ps[i].x - ps[j].x, ps[i].y - ps[j].y);
          if (d < 120) { x.globalAlpha = (1 - d / 120) * 0.25; x.beginPath(); x.moveTo(ps[i].x, ps[i].y); x.lineTo(ps[j].x, ps[j].y); x.stroke(); }
        }
        const dm = Math.hypot(ps[i].x - m.x, ps[i].y - m.y);
        if (dm < 150) { x.globalAlpha = (1 - dm / 150) * 0.5; x.beginPath(); x.moveTo(ps[i].x, ps[i].y); x.lineTo(m.x, m.y); x.stroke(); }
      }
    };
    size(); draw();
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }); io.observe(c);
    window.addEventListener("resize", size); window.addEventListener("pointermove", mv);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", size); window.removeEventListener("pointermove", mv); };
  }, []);
  return <canvas ref={ref} className="net" aria-hidden="true" />;
}
