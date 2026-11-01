"use client";
import { site } from "@/lib/data";

export default function ContactForm() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = `Halo Kham, saya ${d.get("n")}. Saya butuh layanan: ${d.get("s")}.\n\n${d.get("d")}`;
    window.open(`https://wa.me/${site.wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }
  return (
    <form onSubmit={submit}>
      <label>Nama<input name="n" required autoComplete="name" /></label>
      <label>Layanan
        <select name="s"><option>Bot</option><option>Website</option><option>Aplikasi mobile</option><option>Belum tahu</option></select>
      </label>
      <label>Gambaran project
        <textarea name="d" required placeholder="Contoh: bot Telegram untuk menerima pesanan dan cek stok" />
      </label>
      <button className="btn" type="submit">Kirim lewat WhatsApp</button>
    </form>
  );
}
