"use client";
import { useState } from "react";

type Item = { cat: string; title: string; text: string; stack: string };
const tabs = [["all", "Semua"], ["bot", "Bot"], ["web", "Website"], ["app", "Aplikasi"]];

export default function Works({ items }: { items: Item[] }) {
  const [f, setF] = useState("all");
  return (
    <>
      <h2>Contoh hasil kerja</h2>
      <div className="tabs">
        {tabs.map(([k, l]) => (
          <button key={k} type="button" aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <div className="grid3">
        {items.filter((w) => f === "all" || w.cat === f).map((w) => (
          <article key={w.title} className="card white">
            <h3>{w.title}</h3><p>{w.text}</p><span className="stack">{w.stack}</span>
          </article>
        ))}
      </div>
    </>
  );
}
