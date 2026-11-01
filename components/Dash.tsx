"use client";
import { useEffect, useState } from "react";

const W = 260, H = 72, MAX = 64;
const cells = Array.from({ length: 28 }, (_, i) => (i * 7 + 3) % 5);
const path = (p: number[]) => p.map((v, i) => `${i ? "L" : "M"}${((i * W) / (p.length - 1)).toFixed(1)} ${(H - (v / MAX) * H).toFixed(1)}`).join(" ");

export default function Dash() {
  const [p, setP] = useState([12, 18, 14, 26, 22, 34, 30, 42, 38, 52, 48, 60]);
  const [k, setK] = useState({ m: 1284, r: 38 });
  const [live, setLive] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setLive(true);
      setP((a) => [...a.slice(1), Math.max(8, Math.min(60, a[a.length - 1] + Math.round((Math.random() - 0.4) * 14)))]);
      setK({ m: 1284 + Math.round(Math.random() * 40), r: 32 + Math.round(Math.random() * 14) });
    }, 1500);
    return () => clearInterval(id);
  }, []);
  const d = path(p);
  return (
    <div className="dash" role="img" aria-label="Contoh dashboard pemantauan bot">
      <div className="dash-h"><span><i className="dot" />Dashboard</span><em>contoh data</em></div>
      <div className="dash-k">
        <div><b>{k.m.toLocaleString("id-ID")}</b><span>pesan / hari</span></div>
        <div><b>99,9%</b><span>uptime</span></div>
        <div><b>{k.r} ms</b><span>respons</span></div>
      </div>
      <svg className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
        <path className="sa" d={`${d} L${W} ${H} L0 ${H}Z`} />
        <path className={`sl${live ? " live" : ""}`} d={d} pathLength={live ? undefined : 1} />
      </svg>
      <div className="heat" aria-hidden="true">{cells.map((c, i) => <i key={i} data-l={c} />)}</div>
      <div className="dash-f"><span>28 hari terakhir</span><span>rendah → tinggi</span></div>
    </div>
  );
}
