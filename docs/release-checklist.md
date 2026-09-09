# Checklist rilis

Tanggal: 9 September 2026. Versi: 1.0.1. Status: siap direview; belum dideploy.

Dokumen ini mencatat cara situs dibangun dan dirilis, apa yang harus lulus sebelum merge, apa yang diperiksa setelah deploy, dan cara membatalkan rilis. Deployment sendiri tetap keputusan terpisah.

## Konfigurasi build dan deploy

| Aspek | Nilai |
|---|---|
| Framework | Next.js 15.5, App Router, dua root layout (EN dan ID) |
| Mode output | `output: 'export'` **hanya** saat `NODE_ENV=production` (lihat `next.config.js`); `next dev` sengaja tidak mengekspor supaya tidak menimpa `out/` |
| Artefak | `out/`, di-upload sebagai artifact `static-site` oleh job `verify` |
| Hosting | GitHub Pages melalui `peaceiris/actions-gh-pages@v4`, `publish_dir: ./out` |
| Domain | `public/CNAME` berisi `solusibejo.com`; disalin ke `out/CNAME` saat build |
| Jekyll | `npm run predeploy` membuat `public/.nojekyll`; jalur CI tidak memerlukannya karena tidak ada path berawalan `_` di root export selain `_next`, yang sudah ditangani `.nojekyll` di Pages |
| Pemicu deploy | Hanya `push` ke `main`. Pull request menjalankan `verify` saja |
| Concurrency | Satu run per branch/PR, `cancel-in-progress: true` |
| Permission | `contents: read` secara default; hanya job `deploy` mendapat `contents: write` |

### Gerbang otomatis di CI

Job `verify` di `.github/workflows/deploy.yml` menjalankan, berurutan:

1. `npm run typecheck`
2. `npm run lint`
3. `npm run test:content` — aturan draft dan kelengkapan pasangan locale
4. `npm run test:inventory` — fixture negatif validator inventaris
5. `npm run build` — `prebuild` menjalankan `npm run validate:inventory` lebih dulu, jadi data invalid menggagalkan build sebelum export
6. `npm run verify:seo` — kontrak SEO terhadap HTML export
7. Pemeriksaan file wajib, hreflang markup ↔ sitemap, `OAI-SearchBot` di robots.txt, dan larangan URL `localhost:3000` di `out/`

## Analytics: privasi dan konfigurasi

Analytics memakai Plausible dalam bentuk satu tag `<script>` (`src/components/root-html.tsx`).

- Tidak ada cookie, tidak ada penyimpanan di perangkat, tidak ada identifier lintas situs, dan tidak ada data pribadi yang dikirim dari halaman.
- Script **hanya** dirender jika `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` terisi. Selama variabel kosong, tidak ada script sama sekali — bukan script rusak. Build lokal dan `next dev` karena itu tidak pernah melaporkan traffic.
- `NEXT_PUBLIC_PLAUSIBLE_HOST` opsional, default `https://plausible.io`, dipakai jika instance self-hosted.
- Keduanya diisi sebagai **repository variables** (Settings → Secrets and variables → Actions → Variables), bukan secret, karena nilainya memang tampil di HTML.
- Klik keluar ditandai deklaratif lewat class `plausible-event-name=<event>`, sehingga seluruh komponen tetap server component.

**Verifikasi penerimaan analytics hanya bisa dilakukan setelah deploy** dengan variabel terisi: buka halaman produksi, lalu pastikan event muncul di dashboard Plausible. Sebelum itu, jangan menyatakan analytics aktif.

## Sebelum merge

Jalankan lokal dan pastikan semuanya lulus:

```bash
git diff --check
npm run validate:inventory
npm run test:inventory
npm run test:content
npm run typecheck
npm run lint
npm run build
npm run verify:seo
rg -n "http://localhost|127\.0\.0\.1" out    # harus kosong
```

Periksa juga:

- Versi di `package.json` dan entri teratas `CHANGELOG.md` cocok.
- Tidak ada `graphify-out/`, `.next/`, `out/`, `test-results/`, kredensial, atau screenshot lokal yang ikut ter-commit.
- Item yang masih menunggu materi tetap tercatat eksplisit di `tasks/todo.md`.

## Setelah deploy: smoke test produksi

Merge ke `main` memicu deploy. Setelah workflow hijau, periksa terhadap `https://solusibejo.com`:

```bash
npm run verify:seo:live

for p in / /id /about /id/about /work /id/work \
         /work/evermos-mobile-engineering /id/work/evermos-mobile-engineering \
         /robots.txt /sitemap.xml /llms.txt /opengraph-image.png; do
  printf '%-52s %s\n' "$p" "$(curl -sIL -o /dev/null -w '%{http_code}' https://solusibejo.com$p)"
done
curl -sIL https://solusibejo.com/opengraph-image.png | grep -i '^content-type'
curl -sL -o /dev/null -w '%{http_code}\n' https://solusibejo.com/halaman-yang-tidak-ada   # 404
```

Yang harus benar:

- Semua rute di atas HTTP 200, `Content-Type: image/png` untuk social card.
- **`/sitemap.xml` harus 200.** Saat review pra-rilis URL ini masih 404 di versi produksi lama, padahal `robots.txt` sudah mengiklankannya. Ini pemeriksaan wajib, bukan opsional.
- URL tidak dikenal menampilkan halaman 404 yang didesain (judul "404", tombol Go home / Work / Bahasa Indonesia), bukan 404 bawaan GitHub Pages.
- Tidak ada URL `localhost` di HTML mana pun.

### Canonical, hreflang, dan sitemap

```bash
curl -s https://solusibejo.com/about | grep -o '<link rel="canonical"[^>]*>'
curl -s https://solusibejo.com/about | grep -o 'hrefLang="[^"]*" href="[^"]*"'
curl -s https://solusibejo.com/sitemap.xml | grep -o 'hreflang="[^"]*"' | sort -u
```

Harus konsisten: origin `https://solusibejo.com`, canonical self-referencing, dan tiga alternate `en`, `id-ID`, `x-default` yang sama antara markup dan sitemap. `npm run verify:seo` sudah menegakkan ini terhadap export; pemeriksaan di atas mengonfirmasi hasilnya benar-benar tersaji dari domain.

Catat hasil dan batas pemeriksaan di [audit SEO dan AI discovery](seo-discovery-audit.md). Kegagalan jaringan pada `verify:seo:live` harus dilaporkan sebagai kegagalan verifikasi produksi, bukan bukti bahwa situs tidak terindeks.

## Rollback

`peaceiris/actions-gh-pages` mendorong isi `out/` ke branch `gh-pages`, dan Pages menyajikan branch itu. Rollback berarti membuat `gh-pages` kembali berisi export yang baik.

Jalur yang dianjurkan — perbaiki dari sumbernya:

```bash
git checkout main
git revert <commit-yang-bermasalah>     # atau beberapa commit
git push origin main                    # workflow deploy ulang otomatis
```

Jalur cepat jika `main` perlu waktu — kembalikan branch publikasi langsung:

```bash
git fetch origin gh-pages
git checkout gh-pages
git revert --no-edit <commit-deploy-terakhir>
git push origin gh-pages
```

Pages menyajikan ulang dalam beberapa menit. Setelah rollback lewat `gh-pages`, tetap perbaiki `main`, karena deploy berikutnya akan menimpa branch itu lagi.

Jika kerusakan hanya pada DNS/domain, `public/CNAME` adalah satu-satunya sumber custom domain; menghapusnya mengembalikan situs ke URL `github.io`.

## Tag versi

Repo ini belum memakai tag sebelumnya. Konvensinya: tag dibuat **setelah** merge ke `main`, bukan di branch.

```bash
git checkout main && git pull
git tag -a v1.0.1 -m "Portfolio enhancements 1.0.1"
git push origin v1.0.1
```

## Yang belum terukur

Jangan menyatakan hal-hal berikut sebelum benar-benar diukur pada domain produksi:

- Status indexing di Google Search Console dan Bing Webmaster Tools.
- Core Web Vitals dari pengguna nyata (CrUX) maupun lab.
- Skor Lighthouse apa pun.
- Sertifikasi WCAG. Yang tercatat di [ui-redesign-review.md](ui-redesign-review.md) adalah hasil pemeriksaan yang benar-benar dijalankan, bukan sertifikasi.
- Penerimaan event analytics.
- Referral dari mesin pencari AI.

## Tindak lanjut setelah rilis

1. Verifikasi `/sitemap.xml` 200, lalu submit ke Search Console dan Bing Webmaster Tools.
2. Ukur Core Web Vitals dan jalankan Lighthouse terhadap domain produksi; catat hasilnya dengan tanggal.
3. Konfirmasi penerimaan analytics setelah repository variable diisi.
4. Tambahkan outcome dan screenshot Evermos ketika materi yang boleh dipublikasikan tersedia (T03, T04 di `tasks/todo.md`).
5. Publikasikan penyelarasan profil GitHub/LinkedIn sebagai langkah terpisah — draftnya ada di [profile-alignment.md](profile-alignment.md).
