"use client";
import { useEffect, useState } from "react";

const ST: [string, string][] = [
  ["Commit", "git push origin main"], ["Build", "npm run build · selesai"], ["Uji", "12 dari 12 uji lulus"],
  ["Deploy", "pm2 reload bot-telegram"], ["Online", "pemeriksaan kesehatan OK"],
];
const cl = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const C = 2 * Math.PI * 34;

function Ring({ l, v, u }: { l: string; v: number; u: string }) {
  return (
    <div className="ring">
      <div className="rw">
        <svg viewBox="0 0 80 80"><circle className="rt" cx="40" cy="40" r="34" /><circle className="rv" cx="40" cy="40" r="34" strokeDasharray={`${(v / 100) * C} ${C}`} /></svg>
        <b>{Math.round(v)}{u}</b>
      </div>
      <span>{l}</span>
    </div>
  );
}

export default function Ops() {
  const [s, setS] = useState({ i: 0, p: 0, v: 0 });
  const [g, setG] = useState({ c: 34, r: 52, n: 41 });
  const [net, setNet] = useState<number[]>(Array.from({ length: 28 }, (_, i) => 30 + ((i * 13) % 40)));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setS({ i: 4, p: 100, v: 0 }); return; }
    const a = setInterval(() => setS((x) => {
      const p = x.p + 8;
      if (x.i < 4) return p >= 100 ? { ...x, i: x.i + 1, p: 0 } : { ...x, p };
      return p >= 160 ? { i: 0, p: 0, v: x.v + 1 } : { ...x, p };
    }), 150);
    const b = setInterval(() => {
      setG((x) => ({ c: cl(x.c + (Math.random() - 0.5) * 14, 8, 85), r: cl(x.r + (Math.random() - 0.5) * 6, 35, 80), n: cl(x.n + (Math.random() - 0.5) * 20, 5, 95) }));
      setNet((x) => [...x.slice(1), Math.round(10 + Math.random() * 80)]);
    }, 1000);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);

  const q = Math.min(s.p, 100);
  const done = (k: number) => k < s.i || (s.i === 4 && q >= 100);
  return (
    <div className="ops" aria-hidden="true">
      <div className="pipe">
        <div className="pipe-h"><span><i className="dot" />Pipeline deploy</span><em>v2.4.{12 + s.v}</em></div>
        <ol className="stg">{ST.map(([n], k) => <li key={n} className={done(k) ? "done" : k === s.i ? "run" : ""}><i />{n}</li>)}</ol>
        <div className="pbar"><i style={{ width: `${(s.i * 100 + q) / 5}%` }} /></div>
        <div className="term tall">
          {ST.slice(0, s.i + 1).map(([n, cmd], k) => <div key={n}><span className="ok">{done(k) ? "✓" : "…"}</span> {cmd}</div>)}
        </div>
      </div>
      <div className="pipe">
        <div className="pipe-h"><span>Server</span><em>contoh</em></div>
        <div className="gauges"><Ring l="CPU" v={g.c} u="%" /><Ring l="RAM" v={g.r} u="%" /><Ring l="Jaringan" v={g.n} u=" Mb/s" /></div>
        <div className="nets">{net.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      </div>
    </div>
  );
}
