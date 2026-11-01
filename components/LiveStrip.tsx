"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export default function LiveStrip() {
  const [v, setV] = useState({ m: 12840, o: 96, u: 23, l: 38 });
  const [clk, setClk] = useState({ t: "--:--:--", open: false });
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Jakarta" });
      const h = parseInt(t.slice(0, 2), 10);
      setClk({ t, open: h >= site.hours.from && h < site.hours.to });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setV((a) => ({
      m: a.m + 1 + Math.floor(Math.random() * 4),
      o: Math.random() < 0.2 ? a.o + 1 : a.o,
      u: Math.max(12, Math.min(48, a.u + Math.round((Math.random() - 0.5) * 4))),
      l: 30 + Math.round(Math.random() * 18),
    })), 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="wrap livebar" aria-label="Contoh statistik langsung">
      <span className="tag"><i />LIVE</span>
      <div><b key={v.m}>{fmt(v.m)}</b><span>pesan diproses</span></div>
      <div><b key={v.o}>{v.o}</b><span>pesanan hari ini</span></div>
      <div><b>{v.u}</b><span>pengguna online</span></div>
      <div><b>{v.l} ms</b><span>respons</span></div>
      <div><b>{clk.t}</b><span>WIB · {clk.open ? "aktif" : "di luar jam kerja"}</span></div>
      <em>angka lain simulasi</em>
    </div>
  );
}
