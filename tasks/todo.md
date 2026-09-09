# Checklist lanjutan redesign

Acuan: [plan.md](plan.md). UI selesai lokal; pengguna telah meminta revisi teks dan review SEO/AI discovery. Laporan: [UI redesign review](../docs/ui-redesign-review.md), [SEO & content review](../docs/seo-content-review.md).

## UI — selesai lokal

- [x] U01 — Sistem visual, logo, navigasi aktif, bahasa, tema, dan tombol
- [x] U02 — Hero, studi kasus setelah hero, disclosure layanan, kartu dan diagram
- [x] U03 — Kontak, About, Expertise, Open Source, dan Archive responsive
- [x] U04 — Detail studi kasus dan social preview EN/ID
- [x] U05 — QA browser, keyboard, tema, responsive, build dan hasil export
- [x] U05 lanjutan — Perbaikan 404 untuk root layout EN/ID, slug tidak dikenal, dan verifikasi ulang kontras (9 September 2026)

## Fondasi

- [ ] T01 — Ledger bukti dan kebutuhan konten (S; tahap konten nanti)
- [ ] T02 — Validasi inventaris saat build, termasuk fixture negatif (M; setelah T01)
- [ ] Checkpoint A — Ledger dan validasi dapat direview

## Bukti profesional

- [ ] T03 — Studi kasus Evermos EN/ID (M; revisi teks nanti, menunggu materi)
- [ ] T04 — Screenshot produk pertama (M; menunggu aset)
- [x] T05 — Tiga ringkasan rekomendasi LinkedIn dengan atribusi, tanggal, dan sumber; EN/ID dan mobile diperiksa
- [ ] Checkpoint B — Alur bukti menuju kontak dan atribusi diperiksa

## Medium dan social preview

- [x] T06 — Tautan langsung Medium; tujuan EN/ID sama, klik browser membuka Medium
- [x] T10a — Social card Evermos EN/ID
- [x] T10b — Social card Screen Time EN/ID
- [x] T10c — Social card Developer Tooling/Package Rename EN/ID
- [x] T10 UI — Metadata studi kasus memakai enam PNG 1200×630 yang tersedia di export
- [x] T10 kontrak draft/index — Draft tersembunyi; ketimpangan publikasi locale menggagalkan build; empat fixture lulus
- [x] T10 metadata — Pemeriksaan SEO terhadap 20 halaman export ditambahkan ke CI
- [ ] T10 sisa teknis — Validasi inventaris TypeScript menyeluruh, bergantung T02
- [ ] Checkpoint D — Indeks, tautan Medium, dan URL hasil export konsisten

## SEO dan revisi konten — 9 September 2026

- [x] Teks profil, layanan, proses kerja, dan metadata EN/ID diperjelas
- [x] Highlight TechLab Security, GeoXSpot, Cloud Creatures dengan sumber dan jenis peran
- [x] Mentoring/pembicara dan kredensial pilihan; tanggal kedaluwarsa terlihat
- [x] Schema Person/Service/ProfilePage/Article, sitemap, dan ringkasan AI diperbaiki
- [x] Ledger bukti untuk penambahan ini di docs/seo-content-review.md; T01 inventaris penuh masih terbuka
- [ ] Setelah deployment: pastikan sitemap produksi yang saat review 404 sudah 200
- [ ] Verifikasi Search Console/Bing, indexing, serta Core Web Vitals dan referral AI

T07–T09 serta kontrak artikel lama pada T06 dikeluarkan dari scope. Artikel internal dan Ghost/VPS tidak menjadi syarat rilis.

## Kesiapan rilis

- [x] T11 UI — QA dengan `npm run dev`, keyboard, layout, tema, kontras, dan pemeriksaan export
- [ ] T11 sisa — Audit aksesibilitas/performa otomatis menyeluruh dan konfigurasi/verifikasi analytics
- [ ] T12 — Paket rilis, rollback, draft profil dengan tautan Medium (S)
- [ ] Checkpoint E — Hasil siap direview, keterbatasan tercatat

## Tindakan terpisah setelah diminta

- [ ] Deployment versi yang direview
- [ ] Smoke test produksi dan verifikasi penerimaan analytics
- [ ] Publikasi perubahan profil GitHub/LinkedIn

## Iterasi setelah rilis

- [ ] Tambah screenshot studi kasus berikutnya jika aset tersedia
- [ ] Evaluasi jalur Work → Contact dan klik keluar menuju Medium berdasarkan data yang sudah terkumpul

Catat status setiap task sebagai: belum mulai / berjalan / menunggu materi / selesai lokal. Jangan menyamakan selesai lokal dengan sudah dipublikasikan.
