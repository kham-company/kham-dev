// Semua teks & kontak ada di sini. Edit file ini saja.
export const site = {
  brand: "Kham.dev",
  wa: "60128285076", // WhatsApp (format kode negara)
  waLabel: "+60 12-828 5076",
  telegram: "khamdev",
  email: "khamoperation@gmail.com",
  hours: { from: 15, to: 24 }, // WIB
};

export const services = [
  { title: "Bot", tone: "var(--t1)", text: "Otomatisasi layanan pelanggan, pesanan, dan notifikasi.", items: ["Telegram dan WhatsApp", "Bot AI dengan basis pengetahuan sendiri", "Pembayaran dan dashboard admin"] },
  { title: "Website", tone: "var(--t2)", text: "Landing page, company profile, sampai sistem dengan login.", items: ["Next.js, cepat dan ramah SEO", "Tampilan rapi di ponsel", "Deploy ke VPS dengan HTTPS"] },
  { title: "Aplikasi mobile", tone: "var(--t3)", text: "Satu kode untuk Android dan iOS.", items: ["React Native atau Flutter", "Terhubung ke API dan notifikasi", "Bantuan rilis ke Play Store"] },
];

export const steps = [
  { title: "Brief", text: "Kita bahas tujuan, fitur, dan anggaran. Anda terima ruang lingkup dan harga tertulis." },
  { title: "Desain", text: "Alur dan tampilan disetujui sebelum coding dimulai." },
  { title: "Pengembangan", text: "Update berkala dan versi uji yang bisa dicoba langsung." },
  { title: "Serah terima", text: "Deploy, kode, dokumentasi, dan perbaikan bug gratis 14 hari." },
];

export const plans = [
  { name: "Starter", price: "Rp 500 rb", note: "Bot atau landing page sederhana.", items: ["1 platform", "Hingga 5 fitur", "Revisi 2 kali"], hot: false },
  { name: "Business", price: "Rp 1,5 jt", note: "Bot AI, website dengan admin, atau integrasi API.", items: ["Database dan dashboard admin", "Deploy dan domain", "Revisi 4 kali"], hot: true },
  { name: "Custom", price: "Sesuai brief", note: "Aplikasi mobile atau sistem yang lebih besar.", items: ["React Native atau Flutter", "Arsitektur disesuaikan", "Dukungan setelah rilis"], hot: false },
];

export const works = [
  { cat: "bot", title: "Agent Telegram", text: "Bot agent yang bisa menalar dan membuat file langsung dari chat.", stack: "Python · LangGraph · Groq" },
  { cat: "bot", title: "Bot pemantau VPS", text: "Memantau server 24 jam dan mengirim peringatan saat ada masalah.", stack: "Node.js · PM2 · SQLite" },
  { cat: "web", title: "Dashboard real-time", text: "Satu layar untuk melihat status semua bot dan antrean pekerjaan.", stack: "Next.js · FastAPI · Nginx" },
  { cat: "app", title: "Aplikasi koperasi sekolah", text: "Pencatatan simpanan, transaksi jual beli, dan laporan kas untuk koperasi di lingkungan sekolah.", stack: "Next.js · FastAPI · SQLite" },
  { cat: "web", title: "Website UMKM", text: "Profil usaha, katalog produk, dan tombol pesan langsung ke WhatsApp untuk pelaku UMKM.", stack: "Next.js · Tailwind · Nginx" },
  { cat: "web", title: "Website sekolah", text: "Informasi sekolah, berita, agenda, dan galeri kegiatan dengan panel admin untuk pengelola.", stack: "Next.js · Node.js · SQLite" },
  { cat: "bot", title: "Bot WhatsApp MD", text: "Bot WhatsApp multi-device untuk balasan otomatis, menu perintah, dan notifikasi.", stack: "Node.js · Baileys · PM2" },
];

export const faq = [
  { q: "Berapa lama pengerjaannya?", a: "Bot sederhana dan landing page biasanya 3 sampai 7 hari. Aplikasi mobile 3 sampai 8 minggu, tergantung fitur." },
  { q: "Bagaimana sistem pembayarannya?", a: "Uang muka 50% di awal, sisanya setelah hasil disetujui dan sebelum serah terima akhir." },
  { q: "Apakah kode jadi milik saya?", a: "Ya. Setelah lunas, seluruh kode dan akses diserahkan kepada Anda." },
  { q: "Kalau ada bug setelah rilis?", a: "Bug dari pekerjaan saya diperbaiki gratis selama 14 hari. Setelahnya tersedia paket pemeliharaan bulanan." },
];

export const stats = [
  { n: "4", l: "bot aktif berjalan" },
  { n: "24 jam", l: "pemantauan server" },
  { n: "14 hari", l: "garansi perbaikan bug" },
  { n: "3", l: "platform: bot, web, mobile" },
];

export const stack = ["Python", "Node.js", "FastAPI", "Next.js", "React Native", "Flutter", "Telegram Bot API", "Baileys (WhatsApp)", "LangChain", "SQLite", "Docker", "Nginx"];

export const flow = [
  { t: "Pengguna", d: "Pelanggan chat lewat Telegram, WhatsApp, web, atau aplikasi.", k: "Channel" },
  { t: "Bot dan antarmuka", d: "Menu, tombol, dan alur percakapan yang mudah dipakai.", k: "Telegram · Baileys · Next.js" },
  { t: "API dan logika", d: "Aturan bisnis, pembayaran, dan fitur AI berjalan di sini.", k: "FastAPI · Node.js" },
  { t: "Database", d: "Pesanan, pengguna, dan riwayat tersimpan rapi dan bisa dicadangkan.", k: "SQLite" },
  { t: "Dashboard admin", d: "Anda memantau status, laporan, dan antrean pekerjaan.", k: "Pemantauan 24 jam" },
];

// Harga estimasi (Rupiah). Sesuaikan dengan harga Anda.
export const estimator = {
  rushPct: 0.3,
  bases: [
    { id: "bot", label: "Bot Telegram atau WhatsApp", price: 500000, tag: "mulai Rp 500 rb" },
    { id: "web", label: "Website", price: 800000, tag: "mulai Rp 800 rb" },
    { id: "app", label: "Aplikasi mobile", price: 3500000, tag: "mulai Rp 3,5 jt" },
  ],
  addons: [
    { id: "adm", label: "Dashboard admin", price: 600000, tag: "+Rp 600 rb" },
    { id: "pay", label: "Pembayaran online", price: 400000, tag: "+Rp 400 rb" },
    { id: "ai", label: "Fitur AI (LLM)", price: 700000, tag: "+Rp 700 rb" },
    { id: "push", label: "Notifikasi otomatis", price: 300000, tag: "+Rp 300 rb" },
  ],
};
