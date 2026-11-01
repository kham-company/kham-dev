"use client";
import { useEffect, useState } from "react";

const P = ["bot Telegram untuk toko online", "website UMKM dengan panel admin", "bot WhatsApp pemantau server", "aplikasi mobile untuk koperasi", "dashboard laporan real-time"];

export default function Typer() {
  const [t, setT] = useState(P[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0, n = 0, del = false, id: ReturnType<typeof setTimeout>;
    const step = () => {
      const w = P[i];
      if (!del) {
        n++; setT(w.slice(0, n));
        if (n === w.length) { del = true; id = setTimeout(step, 1600); return; }
        id = setTimeout(step, 55);
      } else {
        n--; setT(w.slice(0, n));
        if (n === 0) { del = false; i = (i + 1) % P.length; id = setTimeout(step, 350); return; }
        id = setTimeout(step, 25);
      }
    };
    setT("");
    id = setTimeout(step, 600);
    return () => clearTimeout(id);
  }, []);
  return (
    <>
      <span className="vh">bot, website, dan aplikasi mobile</span>
      <span className="ty" aria-hidden="true">{t}<i className="cur" /></span>
    </>
  );
}
