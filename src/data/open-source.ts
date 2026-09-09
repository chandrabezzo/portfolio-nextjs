import type { L10n } from '@/lib/i18n'

/** Stable keys: used for URL anchors, so they never change with language. */
export const publisherInventory = { count: 23, verifiedAt: '2026-09-07', url: 'https://pub.dev/publishers/solusibejo.com/packages' } as const

export const OSS_CATEGORIES = [
  'native-integration',
  'developer-tools',
  'sdks',
  'plugins',
  'contributions',
] as const

export type OpenSourceCategory = (typeof OSS_CATEGORIES)[number]

export const categoryLabel: Record<OpenSourceCategory, L10n> = {
  'native-integration': { en: 'Native Integration', id: 'Integrasi Native' },
  'developer-tools': { en: 'Developer Tools', id: 'Perkakas Developer' },
  sdks: { en: 'SDKs', id: 'SDK' },
  plugins: { en: 'Plugins', id: 'Plugin' },
  contributions: { en: 'Contributions', id: 'Kontribusi' },
}

export interface OpenSourceProject {
  slug: string
  title: string
  summary: L10n
  /** Why it exists — the problem, not the feature list. */
  why?: L10n
  category: OpenSourceCategory
  technologies: string[]
  year: number
  madeAt: string
  featured: boolean
  /** A pull request into someone else's project rather than a package I own. */
  contribution?: boolean
  /** Relationship to the published work; absence means a publisher package. */
  provenance?: 'maintained-fork' | 'upstream-contribution'
  links: { github?: string; pubDev?: string }
}

// Publisher membership and metadata verified 2026-09-07:
// https://pub.dev/publishers/solusibejo.com/packages (23 packages).
// Publisher membership identifies publication, not sole original authorship.
export const openSource: OpenSourceProject[] = [
  {
    slug: 'screen-time',
    title: 'Screen Time',
    summary: {
      en: 'A Flutter plugin for Android app-usage statistics and foreground-app monitoring, with native permission and accessibility-service integration.',
      id: 'Plugin Flutter untuk statistik penggunaan aplikasi dan pemantauan aplikasi aktif di Android, dengan integrasi izin native dan accessibility service.',
    },
    why: {
      en: 'Screen Time is an operating system capability with no Dart surface at all. Android exposes it through UsageStatsManager, AppOpsManager, and an AccessibilityService; iOS through the FamilyControls framework. Nothing about the two designs lines up.',
      id: 'Screen Time adalah kemampuan sistem operasi yang sama sekali tidak punya antarmuka di Dart. Android menyediakannya lewat UsageStatsManager, AppOpsManager, dan AccessibilityService; iOS lewat framework FamilyControls. Tidak ada satu pun bagian dari kedua rancangan itu yang sejajar.',
    },
    category: 'native-integration',
    technologies: ['Dart', 'Flutter', 'Kotlin', 'Swift', 'Android', 'iOS'],
    year: 2025,
    madeAt: 'Solusi Bejo',
    featured: true,
    provenance: 'maintained-fork',
    links: {
      github: 'https://github.com/chandrabezzo/screen_time',
      pubDev: 'https://pub.dev/packages/screen_time',
    },
  },
  {
    slug: 'package-rename-plus',
    title: 'Package Rename Plus',
    summary: {
      en: 'A maintained fork of Package Rename that configures Flutter bundle identifiers, app names, and platform metadata, including fixes for iOS extension targets.',
      id: 'Fork Package Rename yang dirawat untuk mengatur bundle identifier, nama aplikasi, dan metadata platform Flutter, termasuk perbaikan target ekstensi iOS.',
    },
    why: {
      en: 'Renaming a Flutter app by hand means editing Gradle, Info.plist, manifests, and web/desktop config by hand, and missing one silently breaks a release build.',
      id: 'Mengganti nama aplikasi Flutter secara manual berarti menyunting Gradle, Info.plist, manifest, dan konfigurasi web/desktop satu per satu — melewatkan satu saja diam-diam merusak build rilis.',
    },
    category: 'developer-tools',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS', 'Web', 'Windows', 'Linux', 'macOS'],
    year: 2023,
    madeAt: 'Solusi Bejo',
    featured: true,
    links: {
      github: 'https://github.com/chandrabezzo/package_rename',
      pubDev: 'https://pub.dev/packages/package_rename_plus',
    },
  },
  {
    slug: 'analytics-debugger',
    title: 'Analytics Debugger',
    summary: {
      en: 'A togglable in-app overlay listing background events as they fire — analytics, network calls, or any logged stream — in debug builds.',
      id: 'Overlay dalam aplikasi yang bisa dinyalakan-matikan untuk menampilkan event yang berjalan di latar — analitik, panggilan jaringan, atau aliran log apa pun — pada build debug.',
    },
    why: {
      en: 'Verifying analytics normally means tailing a console on a connected device. Putting the event stream on the screen makes tracking bugs visible to QA and product, not just to engineers.',
      id: 'Memverifikasi analitik biasanya berarti memantau konsol pada perangkat yang tersambung. Menaruh aliran event di layar membuat bug tracking terlihat oleh QA dan tim produk, bukan hanya engineer.',
    },
    category: 'developer-tools',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2023,
    madeAt: 'Evermos',
    featured: true,
    links: {
      github: 'https://github.com/chandrabezzo/analytics_debugger',
      pubDev: 'https://pub.dev/packages/analytics_debugger',
    },
  },
  {
    slug: 'growthbook-flutter',
    title: 'GrowthBook Flutter SDK',
    summary: {
      en: 'Upstream contributions to the Flutter SDK for GrowthBook, an open-source feature flagging and experimentation platform.',
      id: 'Kontribusi upstream pada SDK Flutter untuk GrowthBook, platform open source untuk feature flag dan eksperimen.',
    },
    why: {
      en: 'Feature flags and A/B tests need a client SDK that evaluates consistently with the rest of the platform. This brings Flutter into an ecosystem that already had web and backend support.',
      id: 'Feature flag dan uji A/B butuh SDK klien yang mengevaluasi secara konsisten dengan bagian platform lain. Ini membawa Flutter ke ekosistem yang sebelumnya sudah mendukung web dan backend.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS', 'Web'],
    year: 2023,
    madeAt: 'Evermos',
    featured: true,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/growthbook/growthbook-flutter',
      pubDev: 'https://pub.dev/packages/growthbook_sdk_flutter',
    },
  },
  {
    slug: 'flutter-dynamic-icon-plus',
    title: 'Flutter Dynamic Icon Plus',
    summary: {
      en: 'Changes the application icon at runtime, and sets the icon badge number on iOS, from Dart.',
      id: 'Mengubah ikon aplikasi saat runtime, dan mengatur angka badge ikon di iOS, langsung dari Dart.',
    },
    why: {
      en: 'Alternate icons are a platform-native capability with no Dart surface. Exposing it needs real work on both sides of the platform channel.',
      id: 'Ikon alternatif adalah kemampuan native yang tidak punya antarmuka di Dart. Mengeksposnya menuntut kerja nyata di kedua sisi platform channel.',
    },
    category: 'native-integration',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2024,
    madeAt: 'Evermos',
    featured: true,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_dynamic_icon_plus',
      pubDev: 'https://pub.dev/packages/flutter_dynamic_icon_plus',
    },
  },
  {
    slug: 'screenshot-callback-plus',
    title: 'Screenshot Callback Plus',
    summary: {
      en: 'Detects when the user takes a screenshot and invokes a Dart callback.',
      id: 'Mendeteksi saat pengguna mengambil tangkapan layar dan memanggil callback di Dart.',
    },
    why: {
      en: 'Screenshot detection is entirely platform-specific — a notification observer on iOS, content observation on Android — and matters for products handling sensitive content.',
      id: 'Deteksi tangkapan layar sepenuhnya spesifik per platform — notification observer di iOS, pengamatan konten di Android — dan penting bagi produk yang menangani konten sensitif.',
    },
    category: 'native-integration',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2023,
    madeAt: 'Evermos',
    featured: true,
    links: {
      github: 'https://github.com/chandrabezzo/screenshot_callback_plus',
      pubDev: 'https://pub.dev/packages/screenshot_callback_plus',
    },
  },
  {
    slug: 'flutter-meta-sdk',
    title: 'Flutter Meta SDK',
    summary: {
      en: 'Wraps the native Facebook SDK for Flutter — app event tracking and dashboard integration on both platforms.',
      id: 'Membungkus SDK Facebook native untuk Flutter — pelacakan event aplikasi dan integrasi dasbor di kedua platform.',
    },
    why: {
      en: 'Attribution and app events must be reported by the native SDK to be trusted by the platform, so this is a wrapper problem, not a reimplementation problem.',
      id: 'Atribusi dan event aplikasi harus dilaporkan oleh SDK native agar dipercaya platform, jadi ini masalah pembungkusan, bukan masalah menulis ulang.',
    },
    category: 'sdks',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2022,
    madeAt: 'Evermos',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_meta_sdk',
      pubDev: 'https://pub.dev/packages/flutter_meta_sdk',
    },
  },
  {
    slug: 'meta-facebook-login',
    title: 'Meta Facebook Login',
    summary: {
      en: 'Authenticates users through the native Android and iOS Facebook login SDKs.',
      id: 'Mengautentikasi pengguna lewat SDK login Facebook native di Android dan iOS.',
    },
    category: 'sdks',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2023,
    madeAt: 'Evermos',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/meta_facebook_login',
      pubDev: 'https://pub.dev/packages/meta_facebook_login',
    },
  },
  {
    slug: 'flutter-avo-inspector',
    title: 'Flutter Avo Inspector',
    summary: {
      en: 'Avo Inspector for Dart — surfaces analytics schema drift so data problems are caught before they reach the warehouse.',
      id: 'Avo Inspector untuk Dart — memunculkan pergeseran skema analitik agar masalah data tertangkap sebelum sampai ke data warehouse.',
    },
    category: 'developer-tools',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Evermos',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_avo_inspector',
      pubDev: 'https://pub.dev/packages/flutter_avo_inspector',
    },
  },
  {
    slug: 'country-code-picker',
    title: 'Country Code Picker',
    summary: {
      en: 'A country code selector with favourites and search, for phone number entry and locale selection.',
      id: 'Pemilih kode negara dengan daftar favorit dan pencarian, untuk pengisian nomor telepon dan pemilihan lokal.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Solusi Bejo',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/CountryCodePicker',
      pubDev: 'https://pub.dev/packages/country_code_picker',
    },
  },
  {
    slug: 'flutter-searchable-dropdown',
    title: 'Flutter Searchable Dropdown',
    summary: {
      en: 'Single and multiple selection dropdowns with keyword search, presented as a dialog or a menu.',
      id: 'Dropdown pilihan tunggal dan ganda dengan pencarian kata kunci, ditampilkan sebagai dialog atau menu.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Evermos',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_searchable_dropdown',
      pubDev: 'https://pub.dev/packages/flutter_searchable_dropdown',
    },
  },
  {
    slug: 'gradient-widgets-plus',
    title: 'Gradient Widgets Plus',
    summary: {
      en: 'A small set of Flutter widgets with gradient treatments.',
      id: 'Sekumpulan kecil widget Flutter dengan sentuhan gradien.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2024,
    madeAt: 'Evermos',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/Gradient-Widgets',
      pubDev: 'https://pub.dev/packages/gradient_widgets_plus',
    },
  },
  {
    slug: 'flutter-summernote',
    title: 'Flutter Summernote',
    summary: {
      en: 'A WYSIWYG HTML editor for Android and iOS, wrapping the Summernote JavaScript editor.',
      id: 'Editor HTML WYSIWYG untuk Android dan iOS, membungkus editor JavaScript Summernote.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter', 'JavaScript'],
    year: 2020,
    madeAt: 'Solusi Bejo',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_summernote',
      pubDev: 'https://pub.dev/packages/flutter_summernote',
    },
  },
  {
    slug: 'odoo-api-plus',
    title: 'Odoo API Plus',
    summary: {
      en: 'An Odoo JSON-RPC connector for Flutter supporting Odoo 8.0+ — authentication, reads, writes, and custom model methods.',
      id: 'Konektor JSON-RPC Odoo untuk Flutter yang mendukung Odoo 8.0+ — autentikasi, baca, tulis, dan metode model kustom.',
    },
    category: 'sdks',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Solusi Bejo',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/odoo_api_plus',
      pubDev: 'https://pub.dev/packages/odoo_api_plus',
    },
  },
  {
    slug: 'flutter-odoo-rpc',
    title: 'Flutter Odoo RPC',
    summary: {
      en: 'An Odoo RPC client for Dart with session change tracking exposed as a stream.',
      id: 'Klien RPC Odoo untuk Dart dengan pelacakan perubahan sesi yang diekspos sebagai stream.',
    },
    category: 'sdks',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Solusi Bejo',
    featured: false,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_odoo_rpc',
      pubDev: 'https://pub.dev/packages/flutter_odoo_rpc',
    },
  },
  {
    slug: 'flutter-inappwebview',
    title: 'Flutter InAppWebView',
    summary: {
      en: 'Inline webviews, headless webviews, and an in-app browser for Flutter. Contributed upstream.',
      id: 'Webview inline, webview headless, dan peramban dalam aplikasi untuk Flutter. Kontribusi upstream.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2022,
    madeAt: 'Solusi Bejo',
    featured: false,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/pichillilorenzo/flutter_inappwebview/pull/1381',
      pubDev: 'https://pub.dev/packages/flutter_inappwebview',
    },
  },
  {
    slug: 'flutter-showcaseview',
    title: 'Flutter ShowcaseView',
    summary: {
      en: 'Step-by-step widget highlighting for onboarding flows. Contributed upstream.',
      id: 'Penyorotan widget langkah demi langkah untuk alur onboarding. Kontribusi upstream.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2024,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/SimformSolutionsPvtLtd/flutter_showcaseview/pull/433',
      pubDev: 'https://pub.dev/packages/showcaseview',
    },
  },
  {
    slug: 'youtube-player-flutter',
    title: 'YouTube Player Flutter',
    summary: {
      en: 'Inline YouTube playback via the official iFrame player API on Android and iOS. Contributed upstream.',
      id: 'Pemutaran YouTube inline lewat iFrame player API resmi di Android dan iOS. Kontribusi upstream.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2024,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/sarbagyastha/youtube_player_flutter/pull/914',
      pubDev: 'https://pub.dev/packages/youtube_player_flutter',
    },
  },
  {
    slug: 'network-inspector',
    title: 'Network Inspector',
    summary: {
      en: 'An HTTP inspector and logger for Dio and the http package — every request, response, and error, viewable in-app. Contributed upstream.',
      id: 'Inspektur dan pencatat HTTP untuk Dio dan paket http — setiap permintaan, respons, dan error bisa dilihat di dalam aplikasi. Kontribusi upstream.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/Meruya-Technology/network_inspector/pulls/chandrabezzo',
      pubDev: 'https://pub.dev/packages/network_inspector',
    },
  },
  {
    slug: 'whatsapp-share',
    title: 'WhatsApp Share',
    summary: {
      en: 'Shares messages, links, and files from a Flutter app to a specific WhatsApp contact. Contributed upstream.',
      id: 'Membagikan pesan, tautan, dan berkas dari aplikasi Flutter ke kontak WhatsApp tertentu. Kontribusi upstream.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2022,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/ankushmishra2903-official/whatsapp_share2/pull/10',
      pubDev: 'https://pub.dev/packages/whatsapp_share2',
    },
  },
  {
    slug: 'jitsi-meet',
    title: 'Jitsi Meet',
    summary: {
      en: 'Integrates the open-source Jitsi Meet video conferencing API into Flutter. Contributed upstream.',
      id: 'Mengintegrasikan API konferensi video open source Jitsi Meet ke Flutter. Kontribusi upstream.',
    },
    category: 'contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2020,
    madeAt: 'Docotel',
    featured: false,
    contribution: true,
    provenance: 'upstream-contribution',
    links: {
      github: 'https://github.com/gunschu/jitsi_meet/pull/28',
      pubDev: 'https://pub.dev/packages/jitsi_meet',
    },
  },
  {
    slug: 'common-data-table',
    title: 'Common Data Table',
    summary: {
      en: 'Searchable data tables with pagination, row actions, and Excel/PDF export.',
      id: 'Tabel data dengan pencarian, pagination, aksi baris, dan ekspor Excel/PDF.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/common_data_table',
      github: 'https://github.com/ankushmishra2903-official/common_data_table',
    },
  },
  {
    slug: 'flutter-epub-reader',
    title: 'Flutter EPUB Reader',
    summary: {
      en: 'EPUB reading in Flutter using EPUB.js and InAppWebView.',
      id: 'Pembaca EPUB di Flutter dengan EPUB.js dan InAppWebView.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2025,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/flutter_epub_reader',
      github: 'https://github.com/chandrabezzo/epub_viewer',
    },
  },
  {
    slug: 'custom-grid-view',
    title: 'Custom Grid View',
    summary: {
      en: 'Customizable grid layouts for Flutter applications.',
      id: 'Layout grid yang dapat dikustomisasi untuk aplikasi Flutter.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2021,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/custom_grid_view',
      github: 'https://github.com/ankushmishra2903-official/custom_grid_view',
    },
  },
  {
    slug: 'hive-ce-test',
    title: 'Hive CE Test',
    summary: {
      en: 'Temporary Hive databases for isolated application tests.',
      id: 'Database Hive sementara untuk tes aplikasi yang terisolasi.',
    },
    category: 'developer-tools',
    technologies: ['Dart', 'Flutter'],
    year: 2025,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/hive_ce_test',
      github: 'https://github.com/chandrabezzo/hive_ce_test',
    },
  },
  {
    slug: 'play-store-scraper',
    title: 'Play Store Scraper',
    summary: {
      en: 'A Dart/Flutter package for retrieving Google Play Store data.',
      id: 'Paket Dart/Flutter untuk mengambil data Google Play Store.',
    },
    category: 'developer-tools',
    technologies: ['Dart', 'Flutter'],
    year: 2022,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/play_store_scraper',
      github: 'https://github.com/ankushmishra2903-official/play_store_scraper',
    },
  },
  {
    slug: 'fluttercontactpicker-plus',
    title: 'Flutter Contact Picker Plus',
    summary: {
      en: 'Native contact selection for phone numbers and email addresses on Android and iOS.',
      id: 'Pemilihan kontak native untuk nomor telepon dan alamat email di Android dan iOS.',
    },
    category: 'native-integration',
    technologies: ['Dart', 'Flutter'],
    year: 2025,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/fluttercontactpicker_plus',
      github: 'https://github.com/chandrabezzo/contact_picker',
    },
  },
  {
    slug: 'sms-plus',
    title: 'SMS Plus',
    summary: {
      en: 'Flutter access to native SMS and MMS composition on Android and iOS.',
      id: 'Akses Flutter untuk menulis SMS dan MMS melalui platform native Android dan iOS.',
    },
    category: 'native-integration',
    technologies: ['Dart', 'Flutter'],
    year: 2025,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/sms_plus',
      github: 'https://github.com/chandrabezzo/sms_plus',
    },
  },
  {
    slug: 'flutter-chips-input-plus',
    title: 'Flutter Chips Input Plus',
    summary: {
      en: 'Input fields that represent selected values as Flutter InputChips.',
      id: 'Kolom input yang menampilkan nilai terpilih sebagai InputChips Flutter.',
    },
    category: 'plugins',
    technologies: ['Dart', 'Flutter'],
    year: 2025,
    madeAt: 'solusibejo.com publisher',
    featured: false,
    links: {
      pubDev: 'https://pub.dev/packages/flutter_chips_input_plus',
    },
  },
]

export const featuredOpenSource = openSource.filter(p => p.featured)
