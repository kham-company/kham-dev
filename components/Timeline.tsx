"use client";
import { useEffect, useRef } from "react";

export default function Timeline({ steps }: { steps: { title: string; text: string }[] }) {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll("li"));
    const on = () => {
      const q = el.getBoundingClientRect(), h = window.innerHeight;
      el.style.setProperty("--p", Math.max(0, Math.min(1, (h * 0.6 - q.top) / q.height)) * 100 + "%");
      items.forEach((l) => l.classList.toggle("on", l.getBoundingClientRect().top < h * 0.6));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <ol className="tl" ref={ref}>
      {steps.map((s, i) => <li key={s.title}><span>LANGKAH {String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}
    </ol>
  );
}
