# Review SEO, penemuan oleh AI, dan konten profesional

Tanggal: 9 September 2026. Status: selesai lokal; belum dipublikasikan.

## Penilaian

Fondasi redesign sudah mendukung crawl: HTML statis berisi konten utama, judul dan deskripsi per halaman, canonical, hreflang EN/ID, sitemap, serta data terstruktur. Versi lokal sekarang lebih jelas menghubungkan identitas Chandra dengan Flutter, mobile engineering, pengalaman perusahaan, dan sumber bukti profesional.

Ini belum membuktikan halaman terindeks atau mendapat peringkat tertentu. Search Console, Bing Webmaster Tools, data Core Web Vitals pengguna nyata, serta referral AI belum diperiksa. Tidak ada skor Lighthouse atau klaim peningkatan traffic yang dibuat dalam review ini.

Google menjelaskan bahwa AI Overviews/AI Mode menggunakan fondasi SEO yang sama; halaman perlu terindeks dan memenuhi syarat snippet. File AI tambahan atau schema khusus tidak diwajibkan. `llms.txt` dipertahankan sebagai ringkasan opsional, bukan jaminan visibilitas. [Panduan Google](https://developers.google.com/search/docs/appearance/ai-features).

## Temuan versi publik

Pemeriksaan HTTP pada domain produksi, sebelum deployment redesign:

| Pemeriksaan | Hasil |
|---|---|
| HTTPS halaman utama | 200; judul masih `Solusi Bejo`, versi lama |
| HTTP dan www | Berakhir pada `https://solusibejo.com/` |
| `/robots.txt` | 200; mengizinkan crawl dan menunjuk `/sitemap.xml` |
| `/sitemap.xml` | **404**; sitemap yang diiklankan belum tersedia |
| `/llms.txt` | 404; bukan syarat indexing, tetapi tersedia dalam export baru |
| User-agent Googlebot, OAI-SearchBot, ChatGPT-User melalui curl | Halaman utama 200 dari koneksi lokal ini |

Pemeriksaan user-agent tidak membuktikan akses crawler asli dari IP mereka. Python urllib menerima 403 sementara curl berhasil; perbedaan klien ini tidak cukup untuk menyimpulkan semua bot diblokir. Verifikasi Cloudflare/hosting dan URL Inspection tetap diperlukan setelah rilis. OpenAI membedakan OAI-SearchBot untuk pencarian dari GPTBot untuk training; aturan allow yang sudah ada dipertahankan. [Dokumentasi OpenAI](https://developers.openai.com/api/docs/bots).

## Revisi yang diimplementasikan

- Positioning hero menjadi Mobile Engineer & Flutter Consultant. Intro menyebut Evermos, TechLab Security, dan Cloud Creatures dengan jenis peran yang sesuai.
- GeoXSpot memiliki anchor dan tautan produk langsung di Work. Konteks transportasi, armada, tracking, dan operasional pengemudi dipisahkan dari tanggung jawab pribadi.
- Bahasa Home, About, layanan, dan proses kerja diperjelas; frasa yang defensif atau berlebihan dikurangi.
- Tiga rekomendasi LinkedIn menggantikan seluruh placeholder. Ditampilkan sebagai **ringkasan editorial**, dengan nama, hubungan kerja, tanggal, profil pemberi, dan sumber rekomendasi. Tidak ditampilkan sebagai kutipan langsung atau endorsement perusahaan.
- About menampilkan mentoring Edspert dan kegiatan pembicara Docotel, serta empat kredensial pilihan dengan tautan dokumen dan masa berlaku yang tercantum pada sumber.
- Gelar POLBAN mempertahankan istilah sumber `Engineer's Degree`; terjemahan D4 yang tidak terkonfirmasi dan klaim Best Graduate yang belum ditemukan pada sumber yang diperiksa tidak ditampilkan.
- Judul dan deskripsi metadata EN/ID lebih spesifik. Nama tidak lagi berulang pada judul homepage.
- Person schema menggunakan `worksFor` untuk organisasi dengan peran saat ini, menggantikan `occupationLocation: Organization` yang salah tipe. Foto profil ditambahkan. [Schema.org](https://schema.org/occupationLocation).
- Praktik konsultasi dimodelkan sebagai `Service` dengan provider Person. Bahasa layanan berada pada `ServiceChannel`. About memakai `ProfilePage`, studi kasus memakai gambar yang sama dengan social metadata. Tidak ditambahkan rating atau klaim penghargaan dalam schema. [Service](https://schema.org/Service), [availableLanguage](https://schema.org/availableLanguage).
- Sitemap menghilangkan tanggal build yang sebelumnya dipakai sebagai tanggal perubahan konten. Studi kasus menggunakan tanggal editorial masing-masing bahasa. [Google tentang lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Next.js 15 sitemap](https://nextjs.org/docs/15/app/api-reference/file-conventions/metadata/sitemap).
- Draft tidak masuk listing, lookup halaman, daftar slug, sitemap, maupun social cards. Publikasi bahasa yang tidak lengkap menggagalkan build.
- `llms.txt` mengoreksi cakupan Screen Time: Android usage/restrictions; iOS baru permission request/status. URL berasal dari sitemap, sedangkan prose ditandai sebagai ringkasan yang perlu direview saat fakta berubah.
- CI menjalankan tes aturan publikasi dan pemeriksaan kontrak SEO terhadap HTML export.

## Ledger bukti untuk penambahan ini

| Klaim | Sumber dan batas penggunaan |
|---|---|
| Cevin Ways Al Cornelis, 28 Desember 2024 | Rekomendasi diterima di LinkedIn; rekan tim Evermos. Ringkasan problem solving dan kerja sama. |
| Dwi Kurnianto Mulyadien, 3 Januari 2022 | Rekomendasi diterima di LinkedIn; menyebut kontribusi awal arsitektur/modularisasi Flutter dan pengembangan rekan. Tidak mengklaim Chandra sebagai satu-satunya perancang. |
| Syamsu Rizal Ali, 21 April 2022 | LinkedIn menyatakan pernah menjadi atasan langsung; ringkasan disiplin, prioritas, dan kepemimpinan. |
| Mentoring dan speaking | Honors & awards: Mentor, Edspert.id, November 2022; Work Smarter With Flutter, Docotel Group, September 2019. Ditampilkan sebagai kontribusi/recognition, bukan penghargaan kompetisi. |
| Kredensial | Fullstack Flutter 3.0 (Agustus 2022); Dart (Mei 2022–Mei 2025); Fundamental Flutter (September 2021–September 2024); Google Associate Android Developer (Desember 2019–Desember 2022). Tanggal mengikuti LinkedIn; tautan credential berasal dari profil, bukan validasi ulang issuer. |
| TechLab | Situs perusahaan mendukung konteks perusahaan keamanan siber Malaysia. Label “multinational” tidak digunakan karena bukti yang diperiksa belum cukup. |
| GeoXSpot | Situs produk mendukung konteks transportasi cerdas dan operasional armada. Angka pelanggan, skala armada, atau pencapaian bisnis produk tidak diatribusikan sebagai hasil pribadi. |
| Cloud Creatures | Halaman perusahaan LinkedIn mencantumkan Kuala Lumpur dan layanan commerce/business/mobile; website utama sempat timeout. Jabatan freelance mengikuti Experience profil yang diperiksa pada 7 September. |

Sumber profil: [Recommendations](https://www.linkedin.com/in/chandra-abdul-fattah/details/recommendations/), [Honors & awards](https://www.linkedin.com/in/chandra-abdul-fattah/details/honors/), [Licenses & certifications](https://www.linkedin.com/in/chandra-abdul-fattah/details/certifications/), [Education](https://www.linkedin.com/in/chandra-abdul-fattah/details/education/), [Experience](https://www.linkedin.com/in/chandra-abdul-fattah/details/experience/). LinkedIn dapat meminta login pengunjung.

Sumber perusahaan: [TechLab Security](https://www.techlab.com.my/), [GeoXSpot](https://www.geoxspot.com/), [Cloud Creatures](https://www.linkedin.com/company/cloud-creatures/).

## Verifikasi lokal

- `npm run typecheck`, `npm run lint`, `npm run build`: lulus.
- `npm run test:content`: empat tes lulus, termasuk fixture draft, terjemahan hilang/draft, dan frontmatter invalid.
- `npm run verify:seo`: 20 halaman EN/ID lulus untuk judul/deskripsi unik, canonical/hreflang, JSON-LD, file gambar social, tanggal sitemap, rekomendasi, kredensial, dan `llms.txt`.
- `npm run dev`: review browser Home/About/Work EN/ID pada 320 px; tidak ada overflow horizontal, satu H1, dan tidak ada gambar rusak pada pemeriksaan. Screenshot rekomendasi dan kredensial diperiksa pada tema gelap; Work diperiksa pada desktop tema terang.
- Build masih memberi peringatan metadataBase untuk root khusus dan data Browserslist lama. URL metadata halaman indexable yang dihasilkan telah diperiksa terhadap domain produksi; tidak ada URL localhost pada social metadata tersebut.
- Graph kode diperbarui memakai `graphify update .` sesuai AGENTS.md.

## Prioritas berikutnya

1. **Setelah versi final disetujui untuk dipublikasikan:** deploy, pastikan sitemap 200 dengan XML yang benar, periksa redirect domain, halaman 404, dan social PNG. Perubahan ini belum dijalankan.
2. Verifikasi properti domain di Google Search Console dan Bing Webmaster Tools, kirim sitemap, lalu gunakan URL Inspection untuk Home, About, dan studi kasus utama. Tindak lanjuti alasan exclusion, bukan sekadar menekan request indexing berulang.
3. Perkuat studi kasus dengan keputusan pribadi, alternatif, dampak yang boleh dibagikan, serta screenshot produk. Tautkan bukti ke klaim spesifik. Metrik tidak perlu dipaksakan bila belum tersedia.
4. Selaraskan bio dan tautan portfolio pada LinkedIn, GitHub, pub.dev, dan Medium. Artikel tetap di Medium; tambahkan tautan kontekstual dari tulisan yang relevan ke studi kasus/layanan portfolio. Perubahan profil eksternal merupakan tindakan terpisah.
5. Ukur conversion menuju Contact/email, referral Medium/AI, dan query pencarian. Aktifkan analytics yang sudah disiapkan setelah domain/konfigurasi tersedia. Audit Lighthouse/aksesibilitas otomatis dan Core Web Vitals dilakukan terhadap production build, kemudian bandingkan dengan data pengguna nyata bila mencukupi.

Tidak perlu membangun blog internal, Ghost, atau VPS untuk menyelesaikan perbaikan ini. T01/T02 inventaris penuh, pendalaman kasus Evermos, screenshot asli, audit performa menyeluruh, dan analytics produksi tetap dicatat sebagai pekerjaan lanjutan.
