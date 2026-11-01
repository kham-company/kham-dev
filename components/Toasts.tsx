"use client";
import { useEffect, useState } from "react";

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// Nominal QRIS acak: minimal Rp 500.000, maksimal Rp 3.000.000 (kelipatan 5.000)
const qris = () => "Rp " + fmt(500000 + Math.round(Math.random() * 500) * 5000);

const E: [string, string][] = [
  ["Pesanan #1043 masuk", "Bot Telegram"], ["Pembayaran QRIS diterima", ""], ["Bot WhatsApp terhubung", "Baileys"],
  ["Backup SQLite selesai", "Server VPS"], ["Deploy berhasil", "Website"], ["Pesan baru dari pelanggan", "Bot AI membalas"],
  ["Pesanan #1044 dikirim", "Notifikasi terkirim"],
];

export default function Toasts() {
  const [t, setT] = useState<{ id: number; a: string; b: string }[]>([]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    const add = () => {
      const [a, b0] = E[n % E.length]; const b = a.includes("QRIS") ? qris() : b0; const id = ++n;
      setT((x) => [...x.slice(-2), { id, a, b }]);
      setTimeout(() => setT((x) => x.filter((i) => i.id !== id)), 4900);
    };
    const s = setTimeout(add, 2500); const iv = setInterval(add, 3600);
    return () => { clearTimeout(s); clearInterval(iv); };
  }, []);
  return <div className="toasts" aria-hidden="true">{t.map((i) => <div key={i.id} className="toast"><div>{i.a}<small>{i.b}</small></div></div>)}</div>;
}
