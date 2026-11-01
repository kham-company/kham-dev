"use client";
import { useEffect, useState } from "react";

type Line = [string, string?, ("b" | "ok")?];
const L: Line[] = [
  ["$ pm2 status"],
  ["bot-telegram  ", "online", "b"],
  ["bot-whatsapp  ", "online", "b"],
  ["order #1043 ", "dibayar", "ok"],
  ["$ certbot renew"],
  ["HTTPS masih valid"],
  ["backup SQLite ", "selesai", "ok"],
  ["web-api       ", "online", "b"],
];

export default function Terminal() {
  const [n, setN] = useState(4);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setN((x) => x + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const rows = Array.from({ length: Math.min(n, 5) }, (_, i) => n - Math.min(n, 5) + i);
  return (
    <div className="term" role="log" aria-label="Contoh log aktivitas">
      {rows.map((i) => {
        const [a, s, k] = L[i % L.length];
        return <div key={i}>{a}{s && (k === "ok" ? <span className="ok">{s}</span> : <b>{s}</b>)}</div>;
      })}
    </div>
  );
}
