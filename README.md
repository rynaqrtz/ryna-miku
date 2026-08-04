<div align="center">

<!-- Ganti src di bawah ini dengan link banner kamu -->
<img src="https://cdn.zass.in/5jTNKGrL1C.gif" alt="Ryna Portfolio Banner" width="100%" />

# 🌸 Ryna Portfolio

**A premium Japanese-inspired minimalist portfolio for a Backend Developer**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

**🔗 [about-ryna.my.id](https://about-ryna.my.id/)**

</div>

---

## ✨ Features

### Inti
- 🌗 **Dark mode** — toggle di navbar, tersimpan otomatis, auto-detect preferensi sistem, tanpa flash saat reload
- 🎬 **Page transition** — reveal halaman pakai circle wipe (clip-path) dari atas navbar, bukan sekadar fade
- ⌘ **Command palette** — tekan `Cmd/Ctrl+K`, cari & lompat ke section atau jalankan aksi (ganti tema, mute musik, salin email, buka GitHub, scroll ke atas)
- 🧭 **Navbar active indicator** — dot penanda pindah ke section yang lagi dilihat, dihitung dari posisi scroll aktual (bukan `IntersectionObserver` band sempit) — akurat juga di mobile
- 🔀 **View transitions** — perpindahan antar section & ripple ganti tema pakai native View Transition API browser (progressive enhancement)

### Musik & Suara
- 🎵 **Background music** — auto-play (menghormati kebijakan browser, fallback ke gesture pertama), loop, tersimpan status mute-nya
- 📊 **Music visualizer** — bar equalizer kecil di tombol suara, animasi cuma jalan saat musik benar-benar diputar
- 🏷️ **Now Playing badge** — muncul di navbar (desktop) saat musik sedang diputar

### Kucing & Easter Egg
- 🐱 **Custom cat cursor** — spring physics presisi (gak delay/nge-lag), warna otomatis ikut tema, plus trail 2 titik di belakangnya
- 🐾 **Roaming cat decoration** — kucing kecil jalan lewat di bagian bawah layar secara berkala
- 🕹️ **Konami code easter egg** — coba tekan ↑ ↑ ↓ ↓ ← → ← → B A
- 🐈 **Cat rain easter egg** — ketik `meow` di keyboard, kucing berjatuhan dari atas layar
- 🌙 **Idle screensaver** — 45 detik gak ada aktivitas, slideshow foto waifu otomatis muncul (nonaktif di HP)

### Visual & Dekorasi
- 🌌 **Shooting stars** — bintang jatuh muncul random di background
- 🌸 **Seasonal decoration** — kelopak sakura berjatuhan di bulan Maret–April, salju di bulan Desember (otomatis sesuai bulan sistem)
- 🌀 **Orbit tech stack** — 20 skill (termasuk Next.js, Hono, Elysia, Deno, Rust) di 3 ring berputar berlawanan arah, warna icon otomatis kontras di light & dark mode
- 🔤 **Text scramble effect** — nama di Hero muncul dengan animasi karakter acak → settle
- ⌨️ **Typewriter role** — subtitle di Hero bergantian: Backend Developer / Cat Lover / Anime Lover / Otaku
- 💬 **Hero quote** — tagline personal di bawah nama
- 📊 **Scroll progress bar** — garis tipis di atas halaman nunjukin progres scroll
- 🔢 **Animated stats counter** — umur, tahun ngoding, total project, anime ditonton, baris kode ditulis — count-up saat masuk viewport
- 🖼️ **Adaptive gallery grid** — layout foto waifu otomatis menyesuaikan jumlah foto (bukan array posisi hardcode)
- 👆 **Swipe gesture lightbox** — geser kiri/kanan di HP buat ganti foto, plus panah & keyboard arrow key di desktop
- 💀 **Skeleton loading** — shimmer placeholder untuk semua gambar sebelum ke-load penuh
- 📋 **Copy-to-clipboard email** — klik "Salin" di kontak card, muncul toast konfirmasi
- 📈 **Animated rating bar** — skor anime muncul sebagai progress bar yang mengisi saat scroll
- 🎥 **Trailer video** — video trailer anime favorit, muted-autoplay-safe dengan native controls
- ⬆️ **Scroll to top button** — muncul otomatis setelah scroll jauh
- 🕐 **Live clock** — jam real-time zona Karawang (WIB) di footer
- 📌 **"Sekarang Lagi" section** — nunjukin apa yang lagi dipelajari saat ini

### Reliabilitas & Performa
- 🛡️ **Error boundary per section** — satu section crash gak bikin seluruh halaman putih
- ⚡ **Lazy loading + code splitting** — section berat (`TechOrbit`, `WaifuGallery`, `GithubStats`, dll) di-load on-demand
- 💾 **GitHub stats dengan cache** — data terakhir tersimpan di localStorage, tetap tampil walau kena rate limit API
- 📱 PWA-ready — bisa di-"Add to Home Screen" lewat `manifest.json`
- 🌐 OG tags, Twitter card, JSON-LD structured data, `robots.txt`, `sitemap.xml`, dan custom `404.html`
- ♿ **Menghormati `prefers-reduced-motion`** — semua animasi Framer Motion otomatis nonaktif via `MotionConfig`
- 🎌 Japanese-inspired minimalist aesthetic
- 📱 Fully responsive — mobile first (cat cursor & idle screensaver otomatis nonaktif di touch device)
- 🧹 100% comment-free production code

---

## ⌨️ Keyboard Shortcuts & Rahasia

| Shortcut | Aksi |
|----------|------|
| `Cmd/Ctrl + K` | Buka command palette |
| `↑` `↓` | Navigasi command palette |
| `Enter` | Pilih command |
| `Esc` | Tutup command palette / lightbox |
| `←` `→` | Navigasi foto di lightbox gallery (atau swipe di HP) |
| `↑↑↓↓←→←→BA` | 🕹️ Rahasia klasik (poster muncul) |
| ketik `meow` | 🐈 Hujan kucing |
| diam 45 detik | 🌙 Screensaver slideshow waifu |

---

## 🗂️ Project Structure

```
RynaStyle/
├── 📄 index.html              # Entry HTML + meta tags + OG tags + JSON-LD + manifest link
├── 📄 index.tsx               # React root mount + import styles.css
├── 📄 App.tsx                 # Root component + navbar + layout + providers + page transition
├── 📄 styles.css              # Tailwind entry + custom CSS (grain, cursor, view-transition ripple)
├── 📄 constants.ts            # ⭐ SEMUA DATA PERSONAL DI SINI
├── 📄 types.ts                # TypeScript interfaces
├── 📄 metadata.json           # App metadata
│
├── 📁 public/
│   ├── 🤖 robots.txt
│   ├── 🗺️  sitemap.xml
│   ├── 📱 manifest.json       # PWA manifest
│   └── 🚫 404.html            # Custom not-found page
│
├── 📁 context/
│   ├── 🌗 ThemeContext.tsx    # Dark mode state + localStorage persistence
│   └── 🔊 SoundContext.tsx    # Global mute state + isPlaying + background music
│
├── 📁 hooks/
│   ├── 🔢 useCountUp.ts       # Shared count-up animation hook
│   ├── 🧭 useActiveSection.ts # Scroll-based active nav section (akurat di mobile)
│   ├── ⌨️  useTypewriter.ts    # Cycling typed text hook
│   └── 💤 useIdle.ts          # Idle/inactivity detection hook
│
└── 📁 components/
    ├── 🎬 Loader.tsx          # Loading screen with progress bar (dark mode aware)
    ├── 🌿 Background.tsx      # Background decoration wrapper
    ├── 🌌 ShootingStars.tsx   # Random shooting star animation
    ├── 🌸 SeasonalDecor.tsx   # Sakura petal / snow berdasarkan bulan
    ├── 🐈 CatDecor.tsx        # Kucing kecil jalan lewat berkala
    ├── 🐱 CatCursor.tsx       # Custom cat-shaped cursor + trail, theme-aware
    ├── 🐈‍⬛ CatRainEasterEgg.tsx # Easter egg ketik "meow"
    ├── 🌙 IdleScreensaver.tsx # Screensaver slideshow saat idle
    ├── 📊 ScrollProgress.tsx  # Top scroll progress bar
    ├── ⬆️  ScrollToTop.tsx     # Floating back-to-top button
    ├── 🌗 ThemeToggle.tsx     # Dark/light mode switch + view-transition ripple
    ├── 🔊 SoundToggle.tsx     # Mute/unmute button + music visualizer bars
    ├── 🏷️  NowPlaying.tsx      # Navbar badge nama lagu yang diputar
    ├── ⌘ CommandPalette.tsx   # Cmd+K quick navigation & actions
    ├── 🕹️ KonamiEasterEgg.tsx # Hidden Konami code easter egg
    ├── 🖼️  ImageWithSkeleton.tsx # Reusable image loader with shimmer
    ├── 👤 Hero.tsx            # Hero section (foto, nama scramble, typewriter role, quote)
    ├── 🔢 StatsCounter.tsx    # Animated stat cards
    ├── ⚙️  TechOrbit.tsx      # 3-ring orbiting tech stack, theme-aware icon color
    ├── 📌 NowSection.tsx      # "Sekarang Lagi" — lagi belajar apa
    ├── 💜 AboutWaifu.tsx      # Waifu info card + foto
    ├── 🖼️  WaifuGallery.tsx   # Adaptive gallery grid + lightbox swipe
    ├── 🎬 AnimeSection.tsx    # Anime favorit, rating bar, trailer video
    ├── 🐙 GithubStats.tsx     # Live GitHub stats + localStorage cache fallback
    ├── 📬 ContactCard.tsx     # Kontak + social links + copy email
    ├── 🔚 Footer.tsx          # Footer + jam real-time + kutipan Jepang
    └── 🛡️  ErrorBoundary.tsx  # Per-section error boundary
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / bun

### Installation

```bash
cd RynaStyle
npm install
npm run dev
npm run build
```

Buka `http://localhost:3000` di browser.

---

## 🛠️ Cara Kustomisasi

> 💡 **Semua data personal terpusat di `constants.ts` dan beberapa file komponen. Ikuti panduan ini urut dari atas ke bawah.**

---

### 1️⃣ Ganti Nama & Info Personal

**File: `components/Hero.tsx`**

```tsx
src="https://cdn.zass.in/MoqV0lNVa3.jpg"      // foto profil
const TARGET_NAME = 'Ryna';                    // nama (efek scramble otomatis)
<span>SMKS TEXAR KARAWANG</span>               // sekolah
<span>Karawang, ID</span>                      // lokasi
```

**File: `constants.ts`**

```ts
export const HERO_QUOTE = '...';               // tagline personal di bawah nama
export const TYPING_ROLES = [...];             // role yang bergantian diketik
```

---

### 2️⃣ Ganti Stats

**File: `components/StatsCounter.tsx`**

```ts
const STATS: StatItem[] = [
  { label: 'Umur', value: 15, suffix: '' },
  { label: 'Tahun Ngoding', value: 3, suffix: '+' },
  { label: 'Total Project', value: 7, suffix: '' },
  { label: 'Anime Ditonton', value: 120, suffix: '+' },
  { label: 'Baris Kode Ditulis', value: 50000, suffix: '+' },
  { label: 'Kopi Diminum', value: null, suffix: '', display: '∞' },
];
```

> Angka otomatis animasi count-up saat section masuk layar. Set `value: null` + `display: 'teks'` untuk stat non-angka.

---

### 3️⃣ Ganti Logo & Brand Navbar

**File: `App.tsx`**

```tsx
src="https://link-foto-kamu.jpg"   // logo navbar
<span>Ryna</span>                  // nama brand
<span>Backend Developer</span>     // subtitle (desktop only)
```

---

### 4️⃣ Ganti Tech Stack (Orbit)

**File: `constants.ts`**

```ts
export const SKILLS: Skill[] = [
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E', darkColor: 'E0234E' },
];
```

> 🔍 Cek slug yang valid di [simpleicons.org](https://simpleicons.org). `color` dipakai di light mode, `darkColor` dipakai di dark mode — kalau brand color-nya hitam/nyaris-putih, kasih nilai yang beda supaya tetap kelihatan di kedua tema. Skill dibagi otomatis jadi 3 ring (lihat `TechOrbit.tsx`).

---

### 5️⃣ Ganti Cat Cursor (Opsional)

**File: `components/CatCursor.tsx`**

Warna cursor sekarang otomatis ikut tema (`catColor` / `accentColor` dihitung dari `useTheme()`), gak perlu diubah manual lagi kecuali mau ganti skema warnanya:

```tsx
const catColor = theme === 'dark' ? '#f5f0eb' : '#2d1f0e';
const accentColor = theme === 'dark' ? '#0b0906' : '#f5f0eb';
```

Cursor otomatis nonaktif di perangkat touch (HP/tablet) dan saat `prefers-reduced-motion` aktif.

---

### 6️⃣ Ganti Social Links & Email

**File: `constants.ts`**

```ts
export const SOCIALS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/username-kamu', icon: 'github', color: 'bg-zinc-900' },
  { name: 'Community', url: 'https://link-komunitas-kamu.com', icon: 'globe', color: 'bg-green-600' },
  { name: 'WhatsApp', url: 'https://wa.me/628xxxxxxxxxx', icon: 'phone', color: 'bg-green-500' },
];
```

**File: `components/ContactCard.tsx`** dan **`components/CommandPalette.tsx`**

```tsx
const EMAIL = 'email-kamu@gmail.com';
```

---

### 7️⃣ Ganti Info Waifu

**File: `components/AboutWaifu.tsx`**

Ganti tahun mulai, nama, deskripsi, data card (alias, ulang tahun, tinggi, dll), dan foto di sisi kanan.

---

### 8️⃣ Ganti Foto Gallery Waifu

**File: `constants.ts`**

```ts
export const WAIFU_GALLERY: WaifuImage[] = [
  { url: 'https://foto1.jpg', alt: 'Nama Waifu 1' },
  { url: 'https://foto2.jpg', alt: 'Nama Waifu 2' },
];
```

Grid layout otomatis mengikuti jumlah foto (pola berulang tiap 6 item) — tambah atau kurangi foto di array ini tanpa perlu sentuh komponen. Lightbox punya navigasi panah, keyboard arrow key, swipe gesture di HP, dan tombol Escape untuk tutup.

---

### 9️⃣ Ganti Info Anime

**File: `components/AnimeSection.tsx`**

```tsx
const RATING = 8.09;   // bar rating animasi otomatis mengikuti angka ini
```

Ganti juga poster, video trailer (`src` di tag `<video>`), judul, sinopsis, studio, dan genre.

---

### 🔟 Ganti "Sekarang Lagi"

**File: `constants.ts`**

```ts
export const NOW_LEARNING = {
  title: 'Go Routing & gRPC',
  description: '...',
};
```

---

### 1️⃣1️⃣ Ganti Footer & Kutipan Jepang

**File: `components/Footer.tsx`**

```tsx
<p>&copy; 2026 - Nama Kamu</p>
<span>竜名の道</span>
<span>( Jalan Milik Ryna )</span>
```

Jam di footer otomatis pakai `Intl.DateTimeFormat` timezone `Asia/Jakarta` — ganti `timeZone` di `formatter` kalau lokasi kamu beda.

---

### 1️⃣2️⃣ Ganti Meta Tags, OG Image, Domain & SEO

**File: `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/manifest.json`, `public/404.html`**

Semua sudah pakai domain `https://about-ryna.my.id/` — ganti field berikut kalau domain berubah:

```html
<title>Nama Kamu — Jabatan Kamu</title>
<link rel="canonical" href="https://domain-kamu.com/" />
<meta property="og:url" content="https://domain-kamu.com/" />
<meta property="og:image" content="https://link-poster-kamu.jpg" />
```

JSON-LD structured data (`<script type="application/ld+json">`) juga ada di `index.html` — update field `name`, `jobTitle`, `url`, dan `knowsAbout`.

---

### 1️⃣3️⃣ Ganti Username GitHub (Stats Section)

**File: `constants.ts`**

```ts
export const GITHUB_USERNAME = 'rynaqrtz';
```

Data di-cache di localStorage selama 30 menit sebagai fallback kalau GitHub API kena rate limit.

---

### 1️⃣4️⃣ Ganti Musik Latar

**File: `context/SoundContext.tsx`**

```ts
const BGM_SRC = 'https://link-musik-kamu.mp3';
```

**File: `constants.ts`**

```ts
export const BGM_TITLE = 'Nama Lagu Kamu';   // muncul di badge "Now Playing" navbar
```

Musik auto-play mengikuti kebijakan browser (fallback ke gesture pertama kalau diblokir), loop otomatis, status mute tersimpan di localStorage.

---

### 1️⃣5️⃣ Ganti Kombinasi Konami Code & Trigger Cat Rain

**File: `components/KonamiEasterEgg.tsx`**

```ts
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];
```

**File: `components/CatRainEasterEgg.tsx`**

```ts
const TRIGGER_WORD = 'meow';   // ganti kata pemicu hujan kucing
```

---

## 📸 Panduan Foto & Media yang Dibutuhkan

| # | Kegunaan | Rasio | File |
|---|----------|-------|------|
| 1 | Foto profil hero + navbar + loader | 1:1 square | `Hero.tsx`, `App.tsx`, `Loader.tsx` |
| 2 | Foto waifu section About | 4:5 portrait | `AboutWaifu.tsx` |
| 3 | Poster anime | 2:3 portrait | `AnimeSection.tsx` |
| 4 | Video trailer anime | 16:9 | `AnimeSection.tsx` |
| 5–10 | Gallery foto (fleksibel jumlahnya) | Lihat `WaifuGallery.tsx` | `constants.ts` |
| 11 | OG image / poster medsos | 1200×630 px | `index.html` |
| 12 | Banner README | Bebas, disarankan ~1500×500 px | `README.md` |

---

## 📦 Dependencies

| Package | Version | Kegunaan |
|---------|---------|---------|
| react | 18.3.1 | UI framework |
| react-dom | 18.3.1 | DOM renderer |
| framer-motion | 11.11.11 | Animasi, orbit, scroll effects, view transitions |
| lucide-react | 0.454.0 | Icons |
| tailwindcss | 3.x | Styling (build-time via PostCSS, bukan CDN) |

---

## 🎌 Japanese Text Reference

| Kanji | Romaji | Arti |
|-------|--------|------|
| 三玖の記憶 | Miku no Kioku | Kenangan Miku |
| 竜名の道 | Ryūmei no Michi | Jalan Milik Ryna |
| 静かに、されど確かに | Shizuka ni, saredo tashika ni | Diam, Namun Pasti |
| 連絡 | Renraku | Kontak / Hubungi |
| 三 | San | Tiga (nomor urut Miku) |
| 花嫁 | Hanayome | Pengantin |
| 今 | Ima | Sekarang |

---

## 📝 License

Private — not for redistribution.

---

<div align="center">

**竜名の道** — *Jalan Milik Ryna*

Made with 💜 and lots of Miku energy

</div>
