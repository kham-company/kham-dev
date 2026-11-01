"use client";
import { useEffect, useState } from "react";

const B: [string, number][] = [["Bot Telegram", 38], ["Bot WhatsApp", 52], ["Web API", 24], ["Database", 9]];
const EC = "M0 20H18L22 20L27 5L32 35L37 14L41 20H80M80 20H98L102 20L107 5L112 35L117 14L121 20H160";

export default function Heartbeat() {
  const [ms, setMs] = useState(B.map((b) => b[1]));
  const [down, setDown] = useState(-1);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const a = setInterval(() => setMs(B.map((b) => Math.max(4, Math.round(b[1] * (0.8 + Math.random() * 0.5))))), 1200);
    const b = setInterval(() => {
      setDown(Math.floor(Math.random() * B.length));
      setTimeout(() => setDown(-1), 2600);
    }, 9000);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);
  return (
    <div className="hb" aria-hidden="true">
      {B.map(([n], i) => (
        <div key={n} className={`hr${down === i ? " w" : ""}`}>
          <span className="hn"><i />{n}</span>
          <svg viewBox="0 0 160 40" preserveAspectRatio="none">
            <g className="ecg"><path d={EC} /><path d={EC} transform="translate(160 0)" /></g>
            <path className="flat" d="M0 20H160" />
          </svg>
          <b className="hm">{down === i ? "putus" : `${ms[i]} ms`}</b>
        </div>
      ))}
    </div>
  );
}
