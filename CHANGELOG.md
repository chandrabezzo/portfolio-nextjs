# Changelog

Semua perubahan penting pada proyek ini dicatat di sini.

Konvensi versi mengikuti [Semantic Versioning](https://semver.org/).

## [1.0.1] — 2026-09-09

### Added

- Daftar bahasa di footer untuk English, Indonesia, Melayu, Chinese, Jepang, dan Korea, dengan penanda yang jelas untuk terjemahan yang belum tersedia.
- Verifikasi SEO produksi untuk status HTTP, header crawler, social image, structured data, dan perilaku halaman 404.
- Audit kesiapan discovery untuk mesin pencari dan layanan pencarian berbasis AI.

### Changed

- Structured data memperjelas identitas Chandra, merek Solusi Bejo, pekerjaan aktif, serta author dan publisher studi kasus.
- Lokasi profil dan structured data diperbarui menjadi Bandung, Jawa Barat, Indonesia.
- Informasi proyek KlikDokter dikoreksi agar kepemilikan produk dan peran Android Developer tercatat secara akurat.

## [1.0.0] — 2026-09-09

### Added

- Redesign penuh sebagai situs konsultasi editorial teknis premium, bilingual EN/ID dengan default tema gelap.
- Halaman Home, About, Work, Expertise, Open Source, Archive, dan Contact yang responsif.
- Studi kasus Evermos, Screen Time Native Integration, dan Developer Tooling (Flutter) dalam EN/ID.
- Social card 1200×630 untuk setiap studi kasus (EN/ID) melalui mekanisme static export.
- Schema.org (Person, Service, ProfilePage, Article), canonical/hreflang, sitemap, `robots.txt`, `llms.txt`, dan 404 kustom.
- Validasi inventaris TypeScript saat build (`src/schemas/inventory.ts`, `scripts/validate-inventory.ts`) beserta fixture negatif.
- Kontrak SEO terhadap HTML export (`scripts/verify-seo.mjs`) dan tes aturan publikasi konten (Playwright).
- CI `verify` yang menjalankan typecheck, lint, tes konten/inventaris, build, dan pemeriksaan SEO sebelum deploy.
- Analytics Plausible cookieless yang hanya aktif jika variabel repository diisi.

### Changed

- Tautan Insights diarahkan langsung ke Medium, tanpa route artikel internal.
- Data pengalaman, kredensial, dan rekomendasi diselaraskan dengan sumber publik serta diatribusikan.

### Removed

- Placeholder testimonial, route artikel internal, dan CMS Ghost/VPS dari scope rilis.

### Deferred

- Outcome/keputusan Evermos dan screenshot produk menunggu materi yang boleh dipublikasikan.
- Verifikasi sitemap produksi, Search Console/Bing, Core Web Vitals, dan penerimaan analytics menunggu deployment.
