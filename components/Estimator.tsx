"use client";
import { useState } from "react";
import { estimator, site } from "@/lib/data";

const rp = (n: number) => "Rp " + (Math.round(n / 50000) * 50000).toLocaleString("id-ID");

export default function Estimator() {
  const [sel, setSel] = useState<string[]>([]);
  const [rush, setRush] = useState(false);
  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const bases = estimator.bases.filter((b) => sel.includes(b.id));
  const adds = bases.length ? estimator.addons.filter((a) => sel.includes(a.id)) : [];
  let total = [...bases, ...adds].reduce((t, x) => t + x.price, 0);
  if (rush) total *= 1 + estimator.rushPct;
  const names = [...bases, ...adds].map((x) => x.label);
  if (rush && bases.length) names.push("Dikebut");
  const result = bases.length ? `${rp(total)} – ${rp(total * 1.4)}` : "Pilih jenis project";

  function send() {
    const text = `Halo Kham, saya mau konsultasi. Kebutuhan: ${names.join(", ")}. Estimasi di website: ${result}.`;
    window.open(`https://wa.me/${site.wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  const Opt = ({ id, label, tag }: { id: string; label: string; tag: string }) => (
    <label className="opt">
      <input type="checkbox" checked={sel.includes(id)} onChange={() => toggle(id)} />
      {label}<em>{tag}</em>
    </label>
  );

  return (
    <div className="est">
      <div>
        <fieldset><h3>Jenis project</h3>
          {estimator.bases.map((b) => <Opt key={b.id} {...b} />)}
        </fieldset>
        <fieldset><h3>Tambahan</h3>
          {estimator.addons.map((a) => <Opt key={a.id} {...a} />)}
          <label className="opt">
            <input type="checkbox" checked={rush} onChange={() => setRush(!rush)} />
            Dikebut (kurang dari 1 minggu)<em>+{estimator.rushPct * 100}%</em>
          </label>
        </fieldset>
      </div>
      <aside className="sum">
        <h3>Perkiraan biaya</h3>
        <div className="price">{result}</div>
        <p>{names.length ? names.join(", ") : "Centang kebutuhan di sebelah kiri."}</p>
        <button className="btn" type="button" disabled={!bases.length} onClick={send}>Kirim estimasi ke WhatsApp</button>
      </aside>
    </div>
  );
}
