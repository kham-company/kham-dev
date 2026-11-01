"use client";
import { useEffect, useState } from "react";

const C = ["Palembang", "Jakarta", "Bandung", "Surabaya", "Medan", "Makassar", "Yogyakarta", "Semarang"];
const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
type E = { id: number; x: number; y: number; c: string; amt: number; t: string };

export default function Radar() {
  const [b, setB] = useState<E[]>([]);
  const [feed, setFeed] = useState<E[]>([]);
  useEffect(() => {
    let n = 0;
    const add = () => {
      const a = Math.random() * 6.283, r = 25 + Math.random() * 105, id = ++n;
      const e: E = {
        id, x: 150 + Math.cos(a) * r, y: 150 + Math.sin(a) * r,
        c: C[Math.floor(Math.random() * C.length)],
        amt: 500000 + Math.round(Math.random() * 500) * 5000, // min Rp 500.000
        t: new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Jakarta" }),
      };
      setB((x) => [...x.slice(-5), e]);
      setFeed((x) => [e, ...x].slice(0, 6));
      setTimeout(() => setB((x) => x.filter((i) => i.id !== id)), 4200);
    };
    add();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const iv = setInterval(add, 2400);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="radar-grid">
      <svg className="radar" viewBox="0 0 300 300" role="img" aria-label="Radar pesanan masuk, data contoh">
        {[40, 80, 120, 145].map((r) => <circle key={r} className="rg" cx="150" cy="150" r={r} />)}
        <line className="ax" x1="150" y1="5" x2="150" y2="295" /><line className="ax" x1="5" y1="150" x2="295" y2="150" />
        <g className="sweep"><path d="M150 150 L150 5 A145 145 0 0 1 252.5 47.5 Z" /></g>
        {b.map((e) => (
          <g key={e.id} className="bp">
            <circle className="pr" cx={e.x} cy={e.y} r="4" /><circle cx={e.x} cy={e.y} r="3.5" />
            <text x={e.x + 8} y={e.y + 3}>{e.c}</text>
          </g>
        ))}
      </svg>
      <ul className="feed" aria-hidden="true">
        {feed.map((e) => (
          <li key={e.id}><time>{e.t}</time><span><b>{e.c}</b> · pembayaran QRIS</span><em>Rp {fmt(e.amt)}</em></li>
        ))}
      </ul>
    </div>
  );
}
