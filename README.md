# Firmansyah Idris — Portfolio

Website portofolio statis dengan penekanan Front-end Developer. Tidak membutuhkan instalasi dependency atau proses build. Semua aset memakai path relatif, sehingga bisa digunakan di GitHub Pages untuk repository biasa maupun repository profil.

## Isi

- Profil, foto, dan penekanan React / Next.js / JavaScript / TypeScript.
- How I Work: UI dan user flows, integrasi API, debugging dan reliability.
- Personal demo dashboard React: pencarian, filter status, pengurutan, detail proyek, dan empty state. Seluruh data demo fiktif.
- Published Apps: Wellio dan Tanami, ikon asli, Google Play, dan source code.
- Pengalaman, kontak email, LinkedIn, GitHub, dan CV PDF.

## Preview lokal

Dari folder ini, jalankan `python3 -m http.server 4173`, lalu buka http://localhost:4173. Bisa juga langsung membuka `index.html`.

## Pasang ke GitHub Pages

1. Buat repository GitHub. Untuk URL utama `https://mfirmansyahidris.github.io`, gunakan nama repository **mfirmansyahidris.github.io**. Untuk repository **portfolio**, URL-nya menjadi `https://mfirmansyahidris.github.io/portfolio/`.
2. Upload **isi folder ini** ke root repository, termasuk folder `assets` dan `.github` serta file `.nojekyll`. Jangan upload folder induk `lab`.
3. Pastikan branch utama bernama `main`.
4. Buka **Settings → Pages → Build and deployment → Source**, pilih **GitHub Actions**.
5. Buka tab **Actions**, pilih **Deploy portfolio to GitHub Pages**, lalu **Run workflow**. Push berikutnya ke `main` akan menerbitkan perubahan secara otomatis.

Alternatif tanpa Actions: pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.

## Edit konten

- `index.html`: profil, proyek, pengalaman, dan tautan.
- `style.css`: warna, tipografi, dan layout responsif.
- `demo.js`: komponen React dan data contoh dashboard.
- `assets/vendor`: React dan ReactDOM 18.3.1 (MIT), disimpan lokal agar demo tidak membutuhkan CDN.
- `assets/profile.png`: foto profil.
- `assets/Firmansyah-Idris-CV.pdf`: CV yang dibuka pengunjung.

Konten proyek mobile tidak diklaim sebagai proyek React web. Pengalaman React sekitar lima tahun berasal dari informasi yang diberikan pemilik portofolio. Proyek di bawah NDA hanya dijelaskan secara umum.

Website: https://mfirmansyahidris.github.io/portfolio/

Repository: https://github.com/mfirmansyahidris/portfolio

GitHub Pages menggunakan GitHub Actions. Setiap push ke `main` memperbarui situs.
