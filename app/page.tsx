import Chat from "@/components/Chat";
import ContactForm from "@/components/ContactForm";
import ThemeToggle from "@/components/ThemeToggle";
import Works from "@/components/Works";
import Estimator from "@/components/Estimator";
import Motion from "@/components/Motion";
import Dash from "@/components/Dash";
import Terminal from "@/components/Terminal";
import CommandPalette from "@/components/CommandPalette";
import Particles from "@/components/Particles";
import Toasts from "@/components/Toasts";
import LiveStrip from "@/components/LiveStrip";
import Typer from "@/components/Typer";
import Heartbeat from "@/components/Heartbeat";
import Ops from "@/components/Ops";
import Radar from "@/components/Radar";
import Timeline from "@/components/Timeline";
import CodeShowcase from "@/components/CodeShowcase";
import { site, services, steps, plans, works, faq, stats, stack, flow } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Motion />
      <CommandPalette />
      <Toasts />
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#top">{site.brand}</a>
          <nav aria-label="Menu utama">
            <a href="#layanan">Layanan</a><a href="#alasan">Kenapa</a><a href="#proses">Proses</a><a href="#paket">Paket</a><a href="#estimasi">Estimasi</a><a href="#karya">Karya</a><a href="#faq">FAQ</a>
          </nav>
          <div className="navr"><button className="kb" type="button" data-cmd aria-label="Buka pencarian">Ctrl K</button><ThemeToggle /><a className="btn sm" href="#kontak">Mulai project</a><button className="burger" type="button" aria-label="Menu" aria-expanded="false" /></div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <Particles />
          <div>
            <h1>Bot, website, dan aplikasi yang dibuat rapi dan jalan stabil.</h1>
            <p className="lead">Saya Kham, backend developer. Dari bot Telegram dan WhatsApp sampai aplikasi React Native dan Flutter, Anda berhubungan langsung dengan satu orang dari brief sampai rilis.</p>
            <div className="cta"><a className="btn" href="#kontak">Konsultasi gratis</a><a className="btn ghost" href="#paket">Lihat paket</a></div>
            <p className="status"><span className="dot" />Menerima project baru. Aktif pukul {site.hours.from}.00 sampai {site.hours.to}.00 WIB.</p>
            <p className="typer"><span>Sedang membangun:</span> <Typer /></p>
          </div>
          <div className="stage"><span className="float f2">Pesanan #1042 masuk</span><span className="float f3">Pembayaran QRIS diterima</span><Chat /><Dash /><Terminal /><p className="cap">Demo interaktif. Coba tekan salah satu tombol.</p></div>
        </section>

        <LiveStrip />

        <div className="wrap stats">
          {stats.map((s) => <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>)}
        </div>

        <section id="layanan" className="wrap">
          <h2>Tiga hal yang saya kerjakan</h2>
          <div className="grid3">
            {services.map((s) => (
              <article key={s.title} className="card" style={{ background: s.tone }}>
                <h3>{s.title}</h3><p>{s.text}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="alasan" className="wrap">
          <h2>Kenapa memilih Kham.dev</h2>
          <div className="bento">
            <article className="card white tile t-wide"><h3>Satu orang yang bertanggung jawab</h3><p>Tidak ada lempar tanggung jawab antar tim. Anda bicara langsung dengan orang yang menulis kodenya, dari brief sampai rilis.</p></article>
            <article className="card white tile t-term"><h3>Dipantau seperti produksi</h3>
              <pre className="log" aria-label="Contoh log server"><code>{"$ pm2 status\nbot-telegram  "}<b>online</b>{"\nbot-whatsapp  "}<b>online</b>{"\nweb-api       "}<b>online</b>{"\n$ certbot renew\nHTTPS masih valid "}</code></pre>
              <div className="cap2">Contoh tampilan</div></article>
            <article className="card white tile"><h3>Kode jadi milik Anda</h3><p>Repositori, akses server, dan dokumentasi diserahkan setelah lunas.</p></article>
            <article className="card white tile"><h3>Update berkala</h3><p>Versi uji bisa dicoba sebelum project selesai, jadi tidak ada kejutan di akhir.</p></article>
            <article className="card white tile t-full"><h3>Alur kerja yang terlihat</h3><p>Contoh progres project yang Anda terima di setiap update.</p>
              <div className="bars">
                {[["Desain", "100%"], ["Pengembangan", "72%"], ["Uji dan serah terima", "35%"]].map(([l, w]) => (
                  <div key={l}><span>{l}</span><i style={{ "--w": w } as React.CSSProperties} /></div>
                ))}
              </div></article>
          </div>
        </section>

        <section id="stack" className="wrap">
          <h2>Teknologi yang dipakai</h2>
          <p className="sub">Pilihan stack mengikuti kebutuhan project, bukan sebaliknya.</p>
          <div className="marq"><div className="track">{[...stack, ...stack].map((t, i) => <span key={i}>{t}</span>)}</div></div>
          <div className="marq rev"><div className="track">{[...stack].reverse().concat([...stack].reverse()).map((t, i) => <span key={i}>{t}</span>)}</div></div>
        </section>

        <section id="arsitektur" className="wrap">
          <h2>Alur sistem yang saya bangun</h2>
          <p className="sub">Setiap project dirancang sebagai satu alur utuh, dari pengguna sampai laporan untuk Anda.</p>
          <ol className="arch">
            {flow.map((f, i) => (
              <li key={f.t} className="node" style={{ "--i": i } as React.CSSProperties}>
                <span className="ni">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.t}</h3><p>{f.d}</p><em>{f.k}</em>
              </li>
            ))}
          </ol>
        </section>

        <section id="proses" className="band">
          <div className="wrap">
            <h2>Dari brief sampai rilis</h2>
            <p className="sub">Garis merah ikut terisi saat Anda menggulir.</p>
            <Timeline steps={steps} />
          </div>
        </section>

        <section id="kode" className="wrap">
          <h2>Contoh kode yang saya tulis</h2>
          <p className="sub">Cuplikan bot pesanan sederhana. Pilih bahasanya.</p>
          <CodeShowcase />
        </section>

        <section id="radar" className="band">
          <div className="wrap">
            <h2>Radar pesanan langsung</h2>
            <p className="sub">Contoh pesanan masuk dari berbagai kota. Seluruh data di sini simulasi.</p>
            <Radar />
          </div>
        </section>

        <section id="ops" className="wrap">
          <h2>Deploy dan server, langsung</h2>
          <p className="sub">Simulasi pipeline rilis, pemantauan server, dan detak layanan. Seluruh angka hanya contoh.</p>
          <Ops />
          <Heartbeat />
        </section>

        <section id="paket" className="wrap">
          <h2>Paket dan kisaran harga</h2>
          <p className="sub">Harga final mengikuti ruang lingkup. Konsultasi dan estimasi gratis.</p>
          <div className="grid3">
            {plans.map((p) => (
              <article key={p.name} className={`card plan ${p.hot ? "hot" : ""}`}>
                {p.hot && <span className="badge">Paling sering dipilih</span>}
                <h3>{p.name}</h3><p>{p.note}</p>
                <div className="price">{p.price}</div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="karya" className="band">
          <div className="wrap"><Works items={works} /></div>
        </section>

        <section id="estimasi" className="band">
          <div className="wrap">
            <h2>Hitung estimasi biaya</h2>
            <p className="sub">Pilih kebutuhan Anda. Hasilnya perkiraan awal, harga pasti keluar setelah brief.</p>
            <Estimator />
          </div>
        </section>

        <section id="faq" className="wrap narrow">
          <h2>Pertanyaan umum</h2>
          {faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </section>

        <section id="kontak" className="wrap contact">
          <div>
            <h2>Ceritakan project Anda</h2>
            <p className="sub">Isi singkat, lalu pesan terkirim lewat WhatsApp dengan brief sudah terisi.</p>
            <ContactForm />
          </div>
          <div className="links">
            <a href={`https://t.me/${site.telegram}`}>Telegram<span>Balasan paling cepat</span></a>
            <a href={`https://wa.me/${site.wa}`}>WhatsApp<span>{site.waLabel}</span></a>
            <a href={`mailto:${site.email}`}>Email<span>{site.email}</span></a>
          </div>
        </section>
      </main>

      <footer><div className="wrap mark" aria-hidden="true">Kham.dev</div><div className="wrap foot"><span>© 2026 {site.brand}</span><span>Bot · Website · Aplikasi mobile</span></div></footer>
    </>
  );
}
