# UI redesign review — 8 September 2026

Verifikasi penutup: 9 September 2026.

## Scope

Melanjutkan redesign sesuai arahan terbaru: prioritaskan UI, tunda perbaikan teks. Tidak ada rewrite narasi profil, pengalaman, atau MDX pada tahap ini. Label yang sudah ada digunakan ulang; tambahan label social preview mengikuti istilah navigasi yang ada. Insights tetap menaut langsung ke `https://medium.com/@chandrabezzo`. Ghost dan hosting VPS ditunda.

## Hasil

- Navigasi memakai identitas logo dengan warna yang mengikuti tema, penanda halaman aktif, kontrol bahasa berbentuk segmented control, dan target tombol yang memadai. Nama dapat membungkus pada layar kecil tanpa terpotong.
- Hero memiliki portrait dengan framing yang lebih ringan, proof yang mudah dipindai, serta panel pengalaman perusahaan. Studi kasus dipindahkan tepat setelah hero.
- Kartu studi kasus memiliki panel diagram yang konsisten, tag teknologi, dan CTA yang jelas. Visual tetap berlabel diagram konsep; tidak menyiratkan screenshot produk nyata.
- Layanan memakai native disclosure dengan teks lengkap. Membuka layanan tidak membutuhkan JavaScript. Bagian open source dan proses engineering memakai struktur visual yang berbeda agar homepage tidak monoton.
- Detail studi kasus memakai header dua kolom dan daftar isi sticky pada desktop; mobile kembali ke satu kolom.
- Kontak memakai panel email yang menonjol, lokasi, tautan sosial yang mudah dipindai, dan pilihan kebutuhan berbasis mailto.
- About memakai timeline; Expertise menonjolkan tautan bukti; Open Source memiliki navigasi kategori sticky desktop. Archive menggunakan data yang sama sebagai kartu mobile dan tabel desktop yang bisa diakses keyboard.
- Enam social preview PNG 1200×630 dibuat saat static export, masing-masing untuk tiga studi kasus dalam EN/ID. Metadata menunjuk preview yang sesuai. Warna social preview umum diselaraskan dengan website.
- Token teks sekunder pada light mode diperdalam setelah pemeriksaan kontras menemukan pasangan warna di atas accent wash di bawah 4.5:1.
- Halaman 404 dipindahkan ke `global-not-found.tsx` dan memakai konfigurasi `globalNotFound` yang tersedia pada Next 15.5.25. Ini sesuai pola untuk aplikasi dengan beberapa root layout seperti EN/ID. [Dokumentasi Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found).
- Static export diaktifkan untuk build produksi. Development memakai routing normal dengan `dynamicParams = false` pada studi kasus, sehingga slug tidak dikenal menghasilkan 404, bukan error pemeriksaan export di Next dev.

## Verifikasi

- `npm run dev` dijalankan untuk browser review, kemudian `npm run build` dan `npm run preview` untuk memeriksa hasil static export.
- Dua puluh halaman konten EN/ID diperiksa pada 320 CSS px: satu H1 per halaman, tanpa overflow horizontal, gambar selesai dimuat yang rusak, atau target fragment yang hilang.
- Home, Work, Open Source, dan Contact diperiksa tambahan pada 768, 1024, 1280, dan 1440 CSS px. Tidak ditemukan overflow halaman/header.
- Inspeksi visual mencakup Home terang, Work mobile Indonesia, detail studi kasus, Contact desktop/tablet, dan Open Source gelap.
- Disclosure layanan terbuka dengan Enter dan fokus berada pada summary. Menu mobile menunjukkan state aktif; Escape menutup dan mengembalikan fokus ke tombol. Menu landscape 666×320 memiliki scroll internal.
- Klik Tulisan dari menu membuka tab ke profil Medium dan menutup menu. Tujuan tautan EN/ID berasal dari data yang sama.
- Typecheck dan lint lolos; build produksi juga menyelesaikan pemeriksaan tipe/lint. `git diff --check` lolos.
- Hasil export: 21 HTML termasuk 404, enam PNG studi kasus dengan signature/dimensi valid, canonical produksi, OG per studi kasus, serta link internal dan anchor valid. Tidak ditemukan localhost dalam HTML export.
- Pemeriksaan kontras ulang mencakup 235 elemen homepage: teks yang bermakna lolos ambang 4.5:1 untuk teks biasa atau 3:1 untuk teks besar; empat pemisah dekoratif `aria-hidden` tidak dihitung sebagai teks informasi.
- Pada development, URL tidak dikenal di root dan `/id`, serta slug studi kasus tidak dikenal pada kedua bahasa, mengembalikan HTTP 404 dengan desain pemulihan. Home dan studi kasus valid mengembalikan 200. Browser memverifikasi tombol Go home, `noindex`, satu dokumen HTML, dan tidak ada overflow 404 pada 320 CSS px.

## Batasan dan pekerjaan berikutnya

Ini merupakan penyelesaian UI lokal, belum deployment. Revisi teks, ledger bukti, testimonial asli, screenshot produk, validasi inventaris, serta analytics produksi tetap mengikuti backlog. Konten placeholder testimonial tetap tidak ditampilkan.

Pemeriksaan aksesibilitas mencakup struktur halaman, keyboard, layout, dan sampel pasangan kontras; bukan sertifikasi WCAG atau audit otomatis menyeluruh. Skor Lighthouse dan Core Web Vitals produksi belum diukur. Build masih melaporkan warning Browserslist lama, placeholder testimonial, dan metadataBase pada pemrosesan metadata umum; URL hasil export sudah diperiksa dan benar. `globalNotFound` masih ditandai eksperimental pada versi Next yang dipakai. Error kompilasi 404 dan respons 500 pada slug tidak dikenal yang ditemukan saat QA sudah diperbaiki dan diverifikasi ulang.

Perubahan lama yang sudah ada di working tree dipertahankan. Tidak ada commit, deployment, atau perubahan profil eksternal pada tahap ini.
