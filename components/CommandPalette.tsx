"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const items: [string, string][] = [
  ["Layanan", "#layanan"], ["Kenapa Kham.dev", "#alasan"], ["Teknologi", "#stack"], ["Alur sistem", "#arsitektur"],
  ["Proses kerja", "#proses"], ["Contoh kode", "#kode"], ["Radar pesanan", "#radar"], ["Deploy dan server", "#ops"], ["Paket harga", "#paket"], ["Hasil kerja", "#karya"],
  ["Hitung estimasi", "#estimasi"], ["FAQ", "#faq"], ["Kontak", "#kontak"],
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  const list = useMemo(() => items.filter(([l]) => l.toLowerCase().includes(q.toLowerCase())), [q]);
  const go = (h: string) => { setOpen(false); document.querySelector(h)?.scrollIntoView({ behavior: "smooth" }); };

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); return; }
      if (e.key === "Escape") setOpen(false);
    };
    const click = (e: MouseEvent) => { if ((e.target as Element).closest?.("[data-cmd]")) setOpen(true); };
    window.addEventListener("keydown", key);
    document.addEventListener("click", click);
    return () => { window.removeEventListener("keydown", key); document.removeEventListener("click", click); };
  }, []);
  useEffect(() => { if (open) { setQ(""); setSel(0); setTimeout(() => ref.current?.focus(), 0); } }, [open]);
  if (!open) return null;

  return (
    <div className="cmd on" role="dialog" aria-modal="true" aria-label="Pencarian bagian" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="cb">
        <input
          ref={ref} value={q} placeholder="Cari bagian… (Esc untuk tutup)" aria-label="Cari bagian" autoComplete="off"
          onChange={(e) => { setQ(e.target.value); setSel(0); }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, list.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
            else if (e.key === "Enter" && list[sel]) go(list[sel][1]);
          }}
        />
        <ul>{list.map(([l, h], i) => <li key={h} className={i === sel ? "sel" : ""} onMouseEnter={() => setSel(i)} onClick={() => go(h)}>{l}<em>{h}</em></li>)}</ul>
      </div>
    </div>
  );
}
