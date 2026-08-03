<div align="center">

# 🌸 Ryna Portfolio

**A premium Japanese-inspired minimalist portfolio for a Backend Developer**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## ✨ Features

- 🌗 **Dark mode** — toggle di navbar, tersimpan otomatis, auto-detect preferensi sistem, tanpa flash saat reload
- ⌘ **Command palette** — tekan `Cmd/Ctrl+K`, cari & lompat ke section atau jalankan aksi (ganti tema, mute suara)
- 🕹️ **Konami code easter egg** — coba tekan ↑ ↑ ↓ ↓ ← → ← → B A
- ⌨️ **Typing sound effect** — suara "tik" halus mengikuti animasi scramble nama di Hero (disintesis langsung via Web Audio API, tanpa file audio eksternal)
- 🔊 **Sound toggle** — mute/unmute suara secara global, tersimpan otomatis
- 🔀 **View transitions** — perpindahan antar section pakai native View Transition API browser (progressive enhancement)
- 🐙 **GitHub stats live** — total repo, total stars, followers, repo terpopuler, repo terbaru — diambil langsung dari GitHub REST API
- 🐱 **Custom cat cursor** — ngikutin mouse dengan spring physics, kuping goyang & mata "kedip" pas klik
- 🌀 **Orbit tech stack** — icon skill berputar 2 ring berlawanan arah mengelilingi pusat, icon tetap tegak
- 🔤 **Text scramble effect** — nama di Hero muncul dengan animasi karakter acak → settle
- 📊 **Scroll progress bar** — garis tipis di atas halaman nunjukin progres scroll
- 🔢 **Animated stats counter** — umur, tahun ngoding, total project count-up saat masuk viewport
- 🧭 **Navbar active indicator** — dot penanda otomatis pindah ke section yang lagi dilihat
- 🖼️ **Lightbox gallery dengan navigasi** — panah prev/next + keyboard arrow key + counter posisi
- 💀 **Skeleton loading** — shimmer placeholder untuk semua gambar sebelum ke-load penuh
- 📋 **Copy-to-clipboard email** — klik "Salin" di kontak card, muncul toast konfirmasi
- 📈 **Animated rating bar** — skor anime muncul sebagai progress bar yang mengisi saat scroll
- ⬆️ **Scroll to top button** — muncul otomatis setelah scroll jauh
- 🎌 Japanese-inspired minimalist aesthetic
- ⚡ Buttery smooth page transitions & scroll animations via Framer Motion
- 📱 Fully responsive — mobile first (cat cursor & command palette otomatis nonaktif di touch device)
- 🌀 Animated loading screen with progress bar
- 🌐 OG tags, Twitter card, & JSON-LD structured data untuk SEO
- 🧹 100% comment-free production code

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Aksi |
|----------|------|
| `Cmd/Ctrl + K` | Buka command palette |
| `↑` `↓` | Navigasi command palette |
| `Enter` | Pilih command |
| `Esc` | Tutup command palette / lightbox |
| `←` `→` | Navigasi foto di lightbox gallery |
| `↑↑↓↓←→←→BA` | 🕹️ Rahasia (coba sendiri) |

---

## 🗂️ Project Structure

```
RynaStyle/
├── 📄 index.html              # Entry HTML + meta tags + OG tags + JSON-LD + dark mode config
├── 📄 index.tsx               # React root mount
├── 📄 App.tsx                 # Root component + navbar + layout + providers
├── 📄 constants.ts            # ⭐ SEMUA DATA PERSONAL DI SINI
├── 📄 types.ts                # TypeScript interfaces
├── 📄 metadata.json           # App metadata
│
├── 📁 context/
│   ├── 🌗 ThemeContext.tsx    # Dark mode state + localStorage persistence
│   └── 🔊 SoundContext.tsx    # Global mute state + synthesized tick sound
│
├── 📁 hooks/
│   └── 🔢 useCountUp.ts       # Shared count-up animation hook
│
└── 📁 components/
    ├── 🎬 Loader.tsx          # Loading screen with progress bar
    ├── 🌿 Background.tsx      # Subtle background decoration
    ├── 🐱 CatCursor.tsx       # Custom cat-shaped cursor
    ├── 📊 ScrollProgress.tsx  # Top scroll progress bar
    ├── ⬆️  ScrollToTop.tsx     # Floating back-to-top button
    ├── 🌗 ThemeToggle.tsx     # Dark/light mode switch button
    ├── 🔊 SoundToggle.tsx     # Mute/unmute button
    ├── ⌘ CommandPalette.tsx   # Cmd+K quick navigation & actions
    ├── 🕹️ KonamiEasterEgg.tsx # Hidden Konami code easter egg
    ├── 🖼️  ImageWithSkeleton.tsx # Reusable image loader with shimmer
    ├── 👤 Hero.tsx            # Hero section (foto, nama scramble, lokasi)
    ├── 🔢 StatsCounter.tsx    # Animated stat cards (umur, project, dll)
    ├── ⚙️  TechOrbit.tsx      # Orbiting tech stack rings
    ├── 💜 AboutWaifu.tsx      # Waifu info card + foto
    ├── 🖼️  WaifuGallery.tsx   # 6-foto gallery dengan lightbox + navigasi
    ├── 🎬 AnimeSection.tsx    # Anime favorit + animated rating bar
    ├── 🐙 GithubStats.tsx     # Live GitHub stats (repo, stars, followers)
    ├── 📬 ContactCard.tsx     # Kontak + social links + copy email
    └── 🔚 Footer.tsx          # Footer + kutipan Jepang
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
<p>Backend Developer</p>                       // jabatan
<span>SMKS TEXAR KARAWANG</span>               // sekolah
<span>Karawang, ID</span>                      // lokasi
```

---

### 2️⃣ Ganti Stats

**File: `components/StatsCounter.tsx`**

```ts
const STATS: StatItem[] = [
  { label: 'Umur', value: 15, suffix: '' },
  { label: 'Tahun Ngoding', value: 3, suffix: '+' },
  { label: 'Total Project', value: 7, suffix: '' },
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
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E' },
];
```

> 🔍 Cek slug yang valid di [simpleicons.org](https://simpleicons.org). Skill dibagi otomatis jadi 2 ring — separuh pertama ring dalam, separuh kedua ring luar (lihat `TechOrbit.tsx`).

---

### 5️⃣ Ganti Cat Cursor (Opsional)

**File: `components/CatCursor.tsx`**

Cursor dibuat pakai SVG murni (bukan gambar), jadi warnanya bisa diganti langsung di kode:

```tsx
fill="#2d1f0e"   // ganti warna kucing
```

Cursor otomatis nonaktif di perangkat touch (HP/tablet).

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

**File: `components/ContactCard.tsx`**

```tsx
href="mailto:email-kamu@gmail.com"
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
  { url: 'https://foto3.jpg', alt: 'Nama Waifu 3' },
  { url: 'https://foto4.jpg', alt: 'Nama Waifu 4' },
  { url: 'https://foto5.jpg', alt: 'Nama Waifu 5' },
  { url: 'https://foto6.jpg', alt: 'Nama Waifu 6' },
];
```

Lightbox sekarang punya navigasi panah kiri/kanan + keyboard arrow key + tombol Escape untuk tutup — otomatis jalan tanpa perlu diubah apa-apa.

| No | Rasio | Keterangan |
|----|-------|-----------|
| 1  | 9:16  | Portrait kiri baris 1 |
| 2  | 9:16  | Portrait kanan baris 1 |
| 3  | 16:9  | Landscape full width baris 2 |
| 4  | 9:16  | Portrait kiri baris 3 |
| 5  | 1:1   | Square tengah baris 3 |
| 6  | 1:1   | Square kanan baris 3 |

---

### 9️⃣ Ganti Info Anime

**File: `components/AnimeSection.tsx`**

```tsx
const RATING = 8.09;   // bar rating animasi otomatis mengikuti angka ini
```

Ganti juga poster, judul, sinopsis, studio, dan genre di bagian bawahnya.

---

### 🔟 Ganti Footer & Kutipan Jepang

**File: `components/Footer.tsx`**

```tsx
<p>&copy; 2025 - Nama Kamu</p>
<span>竜名の道</span>
<span>( Jalan Milik Ryna )</span>
```

---

### 1️⃣1️⃣ Ganti Meta Tags, OG Image & SEO

**File: `index.html`**

```html
<title>Nama Kamu — Jabatan Kamu</title>
<meta name="description" content="Portfolio kamu..." />
<meta property="og:image" content="https://link-poster-kamu.jpg" />
<link rel="icon" href="https://link-foto-profil-kamu.jpg" />
```

JSON-LD structured data (`<script type="application/ld+json">`) juga ada di `index.html` — update field `name`, `jobTitle`, `url`, dan `knowsAbout` biar Google lebih paham profil kamu.

---

### 1️⃣2️⃣ Ganti Username GitHub (Stats Section)

**File: `constants.ts`**

```ts
export const GITHUB_USERNAME = 'rynaqrtz';
```

Ganti ini dan section GitHub Stats otomatis fetch data repo, stars, followers, dan repo terbaru dari akun kamu — tidak perlu API key karena pakai endpoint publik GitHub.

---

### 1️⃣3️⃣ Ubah Warna Cat Cursor

**File: `components/CatCursor.tsx`**

```tsx
fill="#2d1f0e"   // ganti hex warna kucing di semua path SVG
```

---

### 1️⃣4️⃣ Ganti Efek Suara Ketikan

**File: `context/SoundContext.tsx`**

Suara "tik" dibuat murni via Web Audio API (osilator + envelope), bukan file MP3 — jadi tidak ada risiko link putus atau lisensi. Untuk ubah karakter suaranya:

```ts
oscillator.type = 'square';               // ubah ke 'sine' / 'triangle' untuk nada lebih lembut
oscillator.frequency.value = 1100 + Math.random() * 300;  // ubah rentang nada
```

---

### 1️⃣5️⃣ Ganti Kombinasi Konami Code

**File: `components/KonamiEasterEgg.tsx`**

```ts
const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];
```

Ganti urutan tombol dan gambar yang muncul (`src`) sesuai selera.

---

## 📸 Panduan Foto yang Dibutuhkan

| # | Kegunaan | Rasio | File |
|---|----------|-------|------|
| 1 | Foto profil hero + navbar + loader | 1:1 square | `Hero.tsx`, `App.tsx`, `Loader.tsx` |
| 2 | Foto waifu section About | 4:5 portrait | `AboutWaifu.tsx` |
| 3 | Poster anime | Bebas | `AnimeSection.tsx` |
| 4–9 | Gallery 6 foto | Lihat tabel di atas | `constants.ts` |
| 10 | OG image / poster medsos | 1200×630 px | `index.html` |

---

## 📦 Dependencies

| Package | Version | Kegunaan |
|---------|---------|---------|
| react | 18.3.1 | UI framework |
| react-dom | 18.3.1 | DOM renderer |
| framer-motion | 11.11.11 | Animasi, orbit, scroll effects |
| lucide-react | 0.454.0 | Icons |
| tailwindcss | CDN | Styling |

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

---

## 📝 License

Private — not for redistribution.

---

<div align="center">

**竜名の道** — *Jalan Milik Ryna*

Made with 💜 and lots of Miku energy

</div>
