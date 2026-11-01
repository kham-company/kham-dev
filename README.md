# Kham.dev — Signature Edition

Landing page jasa bot, website, dan aplikasi mobile. Next.js 14 + TypeScript, tanpa library UI tambahan.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Animasi UI (reveal, count-up, progress bar, spotlight) ada di `components/Motion.tsx` dan akhir `app/globals.css`; otomatis mati bila perangkat memilih "kurangi gerakan".

Semua teks, harga, dan kontak ada di `lib/data.ts`. Wajib ganti `site.wa` (nomor WhatsApp, format 62...) dan `site.telegram`.
Deploy: Vercel, atau VPS dengan PM2 + Nginx seperti portfolio sebelumnya.


## v2.0
Efek mengetik di hero (`Typer.tsx`) dan detak layanan ECG dengan simulasi putus-sambung (`Heartbeat.tsx`).

## v1.9
Section `#ops`: pipeline deploy yang berjalan sendiri (commit, build, uji, deploy, online) dan monitor server CPU/RAM/jaringan. Komponen `Ops.tsx`. Data simulasi.

## Kontak
Email khamoperation@gmail.com; WhatsApp +60 12-828 5076 (edit di `lib/data.ts`).

## Visual edition 1.8 — Radar pesanan live + jam WIB nyata

## Visual edition 1.7 — live action
Chat demo main sendiri (loop skenario, berhenti saat disentuh), toast notifikasi live, jaringan partikel yang bereaksi ke kursor di hero, dan strip statistik LIVE. Semua data simulasi. Komponen: `Toasts`, `Particles`, `LiveStrip`, `Chat`.

## Visual edition 1.6
Command palette (Ctrl+K), log terminal hidup, dashboard live, timeline scroll, jendela kode Python/Node, spotlight kursor di hero. Komponen: `CommandPalette`, `Terminal`, `Timeline`, `CodeShowcase`, dan `Dash` (kini live).

## Visual edition 1.5
Dashboard hero (sparkline + heatmap), diagram alur sistem, aurora + grain, border conic animasi, gradient text. Ada di `components/Dash.tsx`, section `#arsitektur`, dan akhir `app/globals.css`.

## Visual edition 1.4
Premium editorial layout, responsive spacing, refined typography, dashboard-style hero preview, stronger section hierarchy, elevated cards, and improved mobile presentation are included in `app/globals.css`.
