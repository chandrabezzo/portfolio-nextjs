# Rencana lanjutan redesign Solusi Bejo

Tanggal: 8 September 2026; verifikasi penutup 9 September 2026. Status: implementasi UI selesai lokal; revisi teks dan persiapan publikasi tetap menjadi tahap lanjutan.

## Prioritas terbaru — UI terlebih dahulu

Pengguna meminta proses redesign dilanjutkan dengan prioritas UI, sementara perbaikan teks dilakukan nanti. Urutan di bawah menggantikan urutan awal T01 → T02 sebagai jalur pelaksanaan saat ini. Insights tetap langsung ke Medium dan Ghost/VPS tetap di luar scope aktif.

| Task UI | Hasil dan kriteria selesai | Status |
|---|---|---|
| U01 — Sistem visual dan navigasi | Identitas logo mengikuti palette, state navigasi aktif terlihat, kontrol bahasa/tema konsisten, tombol dapat membungkus label dan diakses dengan keyboard | Selesai lokal |
| U02 — Home dan presentasi karya | Hero proporsional, studi kasus tampil setelah hero, diagram dan kartu jelas, layanan menjadi disclosure native yang tetap menyimpan teks lengkap | Selesai lokal |
| U03 — Halaman pendukung | Kontak dengan panel email, timeline About, bukti Expertise, kategori Open Source sticky, Archive berupa kartu mobile dan tabel desktop | Selesai lokal |
| U04 — Detail dan social preview | Header studi kasus dengan diagram, daftar isi sticky desktop, enam PNG social preview EN/ID serta metadata yang merujuk aset export | Selesai lokal |
| U05 — QA UI | Browser EN/ID, tema terang/gelap, responsive 320/768/1024/1280/1440, keyboard, menu landscape, kontras, 404, build dan pemeriksaan hasil export | Selesai lokal |

Verifikasi dan batasannya: [UI redesign review](../docs/ui-redesign-review.md). U01 → U02/U03 → U04 → U05 selesai sebagai rangkaian UI. T01/T03/T05 dan revisi narasi ditunda ke tahap konten; T02, analytics produksi, audit performa penuh, dan paket publikasi tetap backlog tersendiri. Screenshot produk asli tetap menunggu aset; diagram konsep tidak ditandai sebagai screenshot produk.

## Tujuan dan baseline

Membantu calon klien atau hiring manager memahami spesialisasi Chandra, menilai bukti kemampuan senior engineer, lalu menghubungi melalui CTA yang jelas. Redesign visual yang sudah ada menjadi fondasi; pekerjaan berikutnya berfokus pada kedalaman bukti, akses ke tulisan di Medium, dan kualitas rilis.

Baseline implementasi dan hasil pengujian sebelumnya tercatat di [redesign-review.md](../docs/redesign-review.md). Visual editorial, pengalaman tambahan, inventaris open source, serta perbaikan navigasi sudah selesai di working tree. Hasil QA sebelumnya bukan jaminan untuk perubahan berikutnya: pengujian diulang pada bagian yang berubah.

Permintaan pengguna menjadi acuan scope. Brief Desktop dan diskusi terdahulu merupakan referensi desain dan backlog; instruksi di dalamnya bukan otorisasi otomatis untuk deployment, mengedit profil eksternal, atau memublikasikan materi privat. Implementasi saat ini mencakup UI lokal dan verifikasinya.

## Keputusan implementasi

- Pertahankan Next.js static export, struktur EN/ID, MDX, komponen dan token desain yang sudah ada.
- Bukti mendahului klaim: bedakan tanggung jawab pribadi, kontribusi tim, konteks perusahaan, dan hasil yang dapat diverifikasi. Jangan membuat metrik, testimonial, atau riwayat proyek.
- Insights tetap berupa tautan langsung ke Medium melalui `profile.mediumUrl` untuk EN/ID. Tidak membuat listing, halaman artikel internal, atau target jumlah artikel sebagai syarat rilis.
- Ghost ditunda sebagai opsi masa depan. Pengguna sebelumnya mempertimbangkan Ghost dengan hosting terpisah/VPS; evaluasi hosting atau migrasi bukan bagian scope saat ini.
- Konten draft harus tidak masuk halaman publik, static params, sitemap, related links, atau llms.txt. Pasangan locale yang diterbitkan harus lengkap.
- Screenshot hanya memakai aset yang boleh dipublikasikan; diagram konsep tetap berguna ketika aset produk belum tersedia.
- Hindari menambah CMS, animasi besar, atau migrasi framework tanpa kebutuhan yang ditemukan selama pengerjaan.

## Tahap 1 — Fondasi kualitas (P0)

### T01 — Catat bukti dan kebutuhan konten

**Deskripsi:** Buat ledger sumber untuk klaim utama dan daftar kebutuhan materi yang dapat dijawab pengguna sekaligus.

**Acceptance criteria:**
- Setiap klaim utama memiliki sumber, tanggal pemeriksaan, serta status terverifikasi/perlu konfirmasi.
- Kebutuhan Evermos, testimonial, dan screenshot dipisahkan dari pekerjaan teknis yang bisa berjalan mandiri.
- Tidak ada isi repository privat yang disalin ke dokumen publik.

**Verifikasi:** Cocokkan ledger dengan data profil, pengalaman, studi kasus, dan review sebelumnya; periksa kembali sumber jika fakta berubah.

**Dependensi:** Tidak ada. **Ukuran:** S.

**File:** `docs/content-evidence.md`, `docs/content-inputs.md`.

### T02 — Validasi inventaris saat build

**Deskripsi:** Tambahkan validasi data TypeScript tanpa memindahkan seluruh inventaris atau mengubah cara rendering.

**Acceptance criteria:**
- Build menolak ID duplikat, URL tidak valid, dan referensi internal yang tidak ditemukan, dengan pesan menunjuk entri bermasalah.
- Validasi menghormati jenis data: paket milik publisher, fork, dan kontribusi upstream tidak disamakan.
- Fixture negatif membuktikan data invalid gagal; inventaris saat ini tetap lolos.

**Verifikasi:** Jalankan script validasi dan fixture negatif, `npm run typecheck`, serta `npm run build`.

**Dependensi:** T01. **Ukuran:** M.

**File:** `src/schemas/inventory.ts`, `scripts/validate-inventory.ts`, `scripts/validate-inventory.test.ts`, `package.json`, lockfile bila runner diperlukan.

### Checkpoint A

Ledger dapat direview dan validator berjalan otomatis. Catat hasil pemeriksaan; koreksi fakta yang terbukti salah sebelum menambah klaim baru.

## Tahap 2 — Bukti kemampuan yang lebih kuat (P1)

### T03 — Perdalam studi kasus Evermos

**Deskripsi:** Ubah ringkasan pengalaman menjadi cerita keputusan engineering dengan batas kontribusi yang jelas.

**Acceptance criteria:**
- EN/ID menjelaskan masalah, peran pribadi, keputusan, alternatif yang dipertimbangkan, dan hasil.
- Minimal satu keputusan konkret serta outcome memiliki sumber atau catatan pengguna yang boleh dipublikasikan; angka tidak diwajibkan.
- Tidak ada placeholder atau detail internal sensitif pada halaman hasil.

**Verifikasi:** Review editorial dua bahasa, cek tautan sumber, dan buka halaman studi kasus melalui browser.

**Dependensi:** T01 dan materi Evermos. **Ukuran:** M.

**File:** pasangan MDX Evermos yang sudah ada di `src/content/{en,id}/work/`, `docs/content-evidence.md`.

### T04 — Tambahkan satu bukti visual produk

**Deskripsi:** Mulai dari satu screenshot yang paling kuat dan dapat dibagikan; gunakan pola yang dapat dipakai ulang.

**Acceptance criteria:**
- Screenshot memiliki caption, alt text, dimensi tetap, dan ukuran file yang sesuai untuk web.
- Caption membedakan produk nyata dari diagram konsep; data personal atau rahasia tidak terlihat.
- Tampilan tetap terbaca pada mobile dan kedua tema tanpa layout bergeser karena gambar.

**Verifikasi:** Browser pada 320 dan 1440 CSS px; periksa gambar selesai dimuat dan responsivitas.

**Dependensi:** T01 dan aset yang boleh dipublikasikan. **Ukuran:** M.

**File:** satu aset di `public/`, pasangan MDX studi kasus, `src/components/mdx.tsx` bila perlu.

### T05 — Tampilkan rekomendasi asli

**Deskripsi:** Isi komponen testimonial yang sudah tersedia dengan dua sampai tiga rekomendasi yang memiliki atribusi.

**Acceptance criteria:**
- Kutipan, nama, peran, hubungan profesional, dan sumber/izin penggunaan tercatat.
- Kutipan mempertahankan makna aslinya; terjemahan dilabeli bila digunakan.
- Jika materi belum tersedia, bagian tetap tersembunyi dan task berstatus menunggu konten.

**Verifikasi:** Cocokkan dengan sumber, cek rendering EN/ID dan mobile; pastikan placeholder tidak muncul.

**Dependensi:** T01 dan rekomendasi asli. **Ukuran:** M.

**File:** `src/data/testimonials.ts`, `src/views/home.tsx`, `docs/content-evidence.md`.

### Checkpoint B

Review alur Home → Work → studi kasus → Contact. Setiap bukti baru dapat ditelusuri. Task yang menunggu konten dicatat, sementara verifikasi tautan Medium dan persiapan rilis boleh dilanjutkan.

## Tahap 3 — Tautan Medium dan social preview (P1)

### T06 — Pertahankan Insights menuju Medium

**Deskripsi:** Verifikasi jalur Insights yang sudah memakai `profile.mediumUrl` dan `external: true`. Gunakan tautan langsung; tidak perlu route perantara atau redirect server baru.

**Acceptance criteria:**
- Navigasi Insights EN/ID pada desktop dan mobile menuju profil Medium yang sama dan benar.
- Tujuan eksternal jelas bagi pengunjung; perilaku tab dan akses keyboard konsisten dengan tautan eksternal lain.
- Tidak ada route artikel baru, daftar artikel lokal, atau URL Medium yang dimasukkan sebagai halaman internal di sitemap/hreflang.

**Verifikasi:** Periksa konfigurasi lalu klik Insights melalui browser desktop/mobile EN/ID. Jika sudah sesuai, catat lulus tanpa perubahan kode.

**Dependensi:** Tidak ada; bisa berjalan saat materi T03–T05 belum tersedia. **Ukuran:** M.

**File:** `src/data/navigation.ts`, `src/data/profile.ts`, `src/components/navigation.tsx` hanya jika perlu diperbaiki.

### Perubahan scope T07–T09

T07 (artikel pertama), T08 (artikel tambahan), dan T09 (listing/navigasi artikel internal) dibatalkan dari rencana aktif sesuai arahan pengguna. Kontrak/loader artikel yang sebelumnya direncanakan pada T06 juga dihapus. ID task lain dipertahankan agar referensi sebelumnya tetap dapat ditelusuri. Penulisan artikel, migrasi Ghost, dan canonical lintas platform bukan prasyarat redesign.

### T10 — Lengkapi indeks dan social preview

**Deskripsi:** Periksa indeks halaman portfolio dan siapkan social card studi kasus menggunakan mekanisme static export.

**Acceptance criteria:**
- Sitemap dan llms.txt mencakup semua konten terbit serta mengecualikan draft.
- Tiap studi kasus mempunyai social preview yang sesuai; URL absolut menunjuk aset yang benar-benar diekspor.
- Canonical, hreflang, dan metadata halaman portfolio tidak menunjuk localhost atau terjemahan yang tidak tersedia.

**Verifikasi:** Build, inspeksi HTML/metadata dan aset export, buka preview kartu; hitung URL dari konten aktual, bukan baseline 20 URL.

**Dependensi:** T02 dan T06; gunakan konten studi kasus terbaru bila T03 sudah selesai. **Ukuran:** M untuk integrasi lima file; pembuatan setiap aset kartu merupakan subtask S terpisah.

**File integrasi:** `src/app/sitemap.ts`, `scripts/llms-txt.mjs`, `src/lib/site.ts`, dua route detail studi kasus. **Subtask aset:** satu kartu per studi kasus di `public/`, menggunakan judul terverifikasi dan identitas visual yang sama.

### Checkpoint D

Jalur penemuan, metadata, dan hasil export konsisten. Browser dapat menelusuri halaman portfolio dan tautan Medium tanpa broken link; draft studi kasus tidak masuk export.

## Tahap 4 — Kesiapan rilis dan pengukuran (P0 sebelum deployment)

### T11 — QA hasil akhir dan konfigurasi pengukuran

**Deskripsi:** Jalankan pengujian akhir pada development dan hasil export. Tentukan event minimum yang membantu menilai jalur menuju kontak.

**Acceptance criteria:**
- Typecheck, lint, build, dan pemeriksaan link/anchor export lolos; error console aplikasi yang ditemukan diselesaikan.
- Browser EN/ID pada 320/768/1024/1280/1440 CSS px serta landscape memverifikasi keyboard, fokus, menu, tema, bahasa, gambar, dan CTA.
- Konfigurasi analytics opsional terdokumentasi; event hanya mencatat kategori tindakan seperti contact click, tanpa isi pesan/alamat pribadi. Bedakan QA lokal dari verifikasi penerimaan event produksi.

**Verifikasi:** `npm run dev` untuk browser review; `npm run build` lalu `npm run preview` setelah port tersedia untuk export. Jalankan audit aksesibilitas dan Lighthouse dengan kondisi dicatat; bandingkan baseline sebelum/sesudah, jangan mengklaim skor yang belum diukur.

**Dependensi:** T02, T06, T10; uji T03–T05 jika materinya telah masuk. **Ukuran:** M.

**File:** `docs/release-checklist.md`, `docs/redesign-review.md`, `src/components/root-html.tsx`, komponen CTA terkait bila event diperlukan, `.env.example` bila tersedia/perlu dibuat. Temuan perbaikan lintas area dipecah menjadi task S/M sebelum checkpoint ditutup.

### T12 — Siapkan paket publikasi

**Deskripsi:** Buat materi rilis yang bisa direview dan draft penyelarasan kanal profesional.

**Acceptance criteria:**
- Tersedia ringkasan diff, hasil QA, daftar materi yang masih menunggu, konfigurasi produksi, dan langkah rollback.
- Draft GitHub/LinkedIn konsisten dengan website; Medium tetap menjadi tujuan tulisan. Tidak merencanakan perubahan canonical artikel ke website yang tidak meng-host artikel tersebut.
- Checklist pascarilis mencakup halaman utama, bahasa, canonical, sitemap, CTA, serta penerimaan analytics di domain produksi.

**Verifikasi:** Review dokumen terhadap hasil export dan konfigurasi deployment repository; jangan menandai pemeriksaan produksi sebagai lulus sebelum dijalankan.

**Dependensi:** T11. **Ukuran:** S.

**File:** `docs/release-checklist.md`, `docs/profile-alignment.md`.

### Checkpoint E

Paket perubahan siap direview. Deployment dan perubahan profil eksternal menjadi tindakan terpisah ketika diminta pengguna; rencana ini tidak menjalankannya. Materi opsional yang masih menunggu boleh ditunda selama klaim yang tampil tetap akurat, dan tidak ditandai selesai.

## Kebutuhan materi dan cara melanjutkan

| Materi | Detail minimum | Task terkait | Jika belum tersedia |
|---|---|---|---|
| Evermos | Masalah, peran pribadi, keputusan, alternatif, hasil yang boleh dibagikan | T03 | Pertahankan ringkasan terverifikasi |
| Screenshot | Aset, konteks, hak publikasi, bagian yang perlu disamarkan | T04 | Gunakan diagram konsep berlabel |
| Rekomendasi | Kutipan asli, pemberi, hubungan kerja, sumber/izin | T05 | Bagian tetap tersembunyi |
| Analytics | Domain/site ID, host jika custom, akses verifikasi produksi | T11–T12 | Fitur tetap opsional; produksi belum terverifikasi |

Setelah rangkaian U01–U05, lanjutkan **T01 → T02** dan pekerjaan konten ketika pengguna masuk ke tahap revisi teks. T06 selesai diverifikasi; bagian social preview T10 selesai, sedangkan kontrak validasi/draft tetap backlog teknis. Bagian QA UI T11 selesai, sedangkan audit performa penuh, analytics produksi, dan T12 tetap diperlukan untuk persiapan publikasi. Checkpoint menyediakan hasil konkret untuk review tanpa mewajibkan jeda izin pada setiap task.

## Pembaruan pelaksanaan, 9 September 2026

Pengguna telah melanjutkan tahap teks dan SEO. T05 selesai lokal sebagai tiga ringkasan editorial rekomendasi LinkedIn dengan sumber, tanggal, serta atribusi EN/ID. Penambahan mentoring, speaking, kredensial historis, dan highlight GeoXSpot/TechLab/Cloud Creatures terdokumentasi dalam [SEO & content review](../docs/seo-content-review.md). Placeholder dihapus. Kontrak draft/index dan pemeriksaan metadata 20 halaman sudah otomatis serta masuk CI; validasi inventaris T02 secara menyeluruh tetap backlog. T01 sudah memiliki ledger untuk klaim yang ditambah pada tahap ini, belum seluruh inventaris. T03 pendalaman outcome/keputusan pribadi dan screenshot T04 tetap membutuhkan materi.

Prioritas pascarilis: sitemap produksi harus 200 (saat review masih 404), Search Console/Bing, analytics, dan pengukuran performa produksi. Ringkasan `llms.txt` bersifat opsional dan tidak menjamin ranking AI. Deployment dan perubahan profil eksternal belum dijalankan.

## Di luar scope saat ini

- Menulis atau memindahkan artikel ke website portfolio, termasuk target 3–5 artikel EN/ID.
- Listing/detail Insights internal, schema/loader artikel, dan SEO artikel lokal.
- Setup Ghost, penyediaan VPS, migrasi konten, atau perubahan canonical Medium. Opsi ini baru dievaluasi jika arah publishing diubah oleh pengguna.

## Definition of done

- Setiap task memenuhi acceptance criteria dan menyimpan bukti verifikasi yang relevan.
- UI mempertahankan identitas editorial, akses keyboard, responsivitas, dan kesetaraan EN/ID.
- Fakta, atribusi, draft, serta batas platform konsisten di halaman dan metadata.
- Checklist membedakan selesai lokal, menunggu konten, siap rilis, dan terverifikasi produksi.

Checklist pelaksanaan: [todo.md](todo.md).
