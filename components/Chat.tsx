"use client";
import { useEffect, useRef, useState } from "react";

const replies: Record<string, string> = {
  "Lihat menu": "Menu hari ini:\n• Kopi susu – Rp 18.000\n• Roti bakar – Rp 15.000\n• Es teh – Rp 8.000",
  "Pesan kopi susu": "Pesanan dicatat: 1 kopi susu.\nTotal Rp 18.000. Bayar lewat QRIS?",
  "Cek status": "Pesanan #1042 sedang disiapkan. Perkiraan siap 5 menit lagi.",
};
const auto = Object.keys(replies);
type M = { me: boolean; t: string };
const hi: M = { me: false, t: "Halo! Saya bot TokoBot. Mau pesan apa?" };

export default function Chat() {
  const [msgs, setMsgs] = useState<M[]>([hi]);
  const [typing, setTyping] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const manual = useRef(false);
  const timers = useRef<number[]>([]);
  const later = (f: () => void, ms: number) => { timers.current.push(window.setTimeout(f, ms)); };
  const push = (m: M) => {
    setMsgs((a) => [...a.slice(-8), m]);
    setTimeout(() => box.current?.scrollTo({ top: 9999, behavior: "smooth" }), 30);
  };
  const ask = (k: string) => {
    push({ me: true, t: k }); setTyping(true);
    later(() => { setTyping(false); push({ me: false, t: replies[k] }); }, 900);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run = () => {
      if (manual.current) return;
      setMsgs([hi]);
      auto.forEach((k, i) => later(() => { if (!manual.current) ask(k); }, 1800 + i * 3600));
      later(run, 1800 + auto.length * 3600 + 3500);
    };
    run();
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const click = (k: string) => { manual.current = true; timers.current.forEach(clearTimeout); setTyping(false); ask(k); };

  return (
    <div className="phone">
      <div className="phone-top"><span className="dot" />TokoBot <small>bot contoh</small><span className="live-b">LIVE</span></div>
      <div className="chat" ref={box} aria-live="off">
        {msgs.map((m, i) => <div key={i} className={`msg ${m.me ? "me" : "bot"}`}>{m.t}</div>)}
        {typing && <div className="msg bot typing"><i /><i /><i /></div>}
      </div>
      <div className="quick">
        {auto.map((k) => <button key={k} type="button" onClick={() => click(k)}>{k}</button>)}
      </div>
    </div>
  );
}
