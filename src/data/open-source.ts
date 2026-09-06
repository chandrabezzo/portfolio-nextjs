export type OpenSourceCategory =
  | 'Native Integration'
  | 'Developer Tools'
  | 'Plugins'
  | 'SDKs'
  | 'Contributions'

export interface OpenSourceProject {
  slug: string
  title: string
  summary: string
  /** Why it exists — the problem, not the feature list (brief §26). */
  why?: string
  category: OpenSourceCategory
  technologies: string[]
  year: number
  madeAt: string
  featured: boolean
  /** A pull request into someone else's project, rather than a package I own. */
  contribution?: boolean
  links: { github?: string; pubDev?: string }
}

export const openSource: OpenSourceProject[] = [
  {
    slug: 'package-rename-plus',
    title: 'Package Rename Plus',
    summary:
      'Configures a Flutter project — bundle identifiers, app names, and platform metadata — across every target platform from a single command.',
    why: 'Renaming a Flutter app by hand means editing Gradle, Info.plist, manifests, and web/desktop config by hand, and missing one silently breaks a release build.',
    category: 'Developer Tools',
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
    summary:
      'A togglable in-app overlay listing background events as they fire — analytics, network calls, or any logged stream — in debug builds.',
    why: 'Verifying analytics normally means tailing a console on a connected device. Putting the event stream on the screen makes tracking bugs visible to QA and product, not just to engineers.',
    category: 'Developer Tools',
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
    summary:
      'The Flutter SDK for GrowthBook, an open-source feature flagging and experimentation platform.',
    why: 'Feature flags and A/B tests need a client SDK that evaluates consistently with the rest of the platform. This brings Flutter into an ecosystem that already had web and backend support.',
    category: 'SDKs',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS', 'Web'],
    year: 2023,
    madeAt: 'Evermos',
    featured: true,
    links: {
      github: 'https://github.com/growthbook/growthbook-flutter',
      pubDev: 'https://pub.dev/packages/growthbook_sdk_flutter',
    },
  },
  {
    slug: 'flutter-dynamic-icon-plus',
    title: 'Flutter Dynamic Icon Plus',
    summary:
      'Changes the application icon at runtime, and sets the icon badge number on iOS, from Dart.',
    why: 'Alternate icons are a platform-native capability with no Dart surface. Exposing it needs real work on both sides of the platform channel.',
    category: 'Native Integration',
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
    summary: 'Detects when the user takes a screenshot and invokes a Dart callback.',
    why: 'Screenshot detection is entirely platform-specific — a notification observer on iOS, content observation on Android — and matters for products handling sensitive content.',
    category: 'Native Integration',
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
    summary:
      'Wraps the native Facebook SDK for Flutter — app event tracking and dashboard integration on both platforms.',
    why: 'Attribution and app events must be reported by the native SDK to be trusted by the platform, so this is a wrapper problem, not a reimplementation problem.',
    category: 'SDKs',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2022,
    madeAt: 'Evermos',
    featured: true,
    links: {
      github: 'https://github.com/chandrabezzo/flutter_meta_sdk',
      pubDev: 'https://pub.dev/packages/flutter_meta_sdk',
    },
  },
  {
    slug: 'meta-facebook-login',
    title: 'Meta Facebook Login',
    summary: 'Authenticates users through the native Android and iOS Facebook login SDKs.',
    category: 'SDKs',
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
    summary:
      'Avo Inspector for Dart — surfaces analytics schema drift so data problems are caught before they reach the warehouse.',
    category: 'Developer Tools',
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
    summary:
      'A country code selector with favourites and search, for phone number entry and locale selection.',
    category: 'Plugins',
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
    summary:
      'Single and multiple selection dropdowns with keyword search, presented as a dialog or a menu.',
    category: 'Plugins',
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
    summary: 'A small set of Flutter widgets with gradient treatments.',
    category: 'Plugins',
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
    summary:
      'A WYSIWYG HTML editor for Android and iOS, wrapping the Summernote JavaScript editor.',
    category: 'Plugins',
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
    summary:
      'An Odoo JSON-RPC connector for Flutter supporting Odoo 8.0+ — authentication, reads, writes, and custom model methods.',
    category: 'SDKs',
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
    summary: 'An Odoo RPC client for Dart with session change tracking exposed as a stream.',
    category: 'SDKs',
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
    summary:
      'Inline webviews, headless webviews, and an in-app browser for Flutter. Contributed upstream.',
    category: 'Contributions',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS'],
    year: 2022,
    madeAt: 'Solusi Bejo',
    featured: false,
    contribution: true,
    links: {
      github: 'https://github.com/pichillilorenzo/flutter_inappwebview/pull/1381',
      pubDev: 'https://pub.dev/packages/flutter_inappwebview',
    },
  },
  {
    slug: 'flutter-showcaseview',
    title: 'Flutter ShowcaseView',
    summary: 'Step-by-step widget highlighting for onboarding flows. Contributed upstream.',
    category: 'Contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2024,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    links: {
      github: 'https://github.com/SimformSolutionsPvtLtd/flutter_showcaseview/pull/433',
      pubDev: 'https://pub.dev/packages/showcaseview',
    },
  },
  {
    slug: 'youtube-player-flutter',
    title: 'YouTube Player Flutter',
    summary:
      'Inline YouTube playback via the official iFrame player API on Android and iOS. Contributed upstream.',
    category: 'Contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2024,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    links: {
      github: 'https://github.com/sarbagyastha/youtube_player_flutter/pull/914',
      pubDev: 'https://pub.dev/packages/youtube_player_flutter',
    },
  },
  {
    slug: 'network-inspector',
    title: 'Network Inspector',
    summary:
      'An HTTP inspector and logger for Dio and the http package — every request, response, and error, viewable in-app. Contributed upstream.',
    category: 'Contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2023,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    links: {
      github: 'https://github.com/Meruya-Technology/network_inspector/pulls/chandrabezzo',
      pubDev: 'https://pub.dev/packages/network_inspector',
    },
  },
  {
    slug: 'whatsapp-share',
    title: 'WhatsApp Share',
    summary:
      'Shares messages, links, and files from a Flutter app to a specific WhatsApp contact. Contributed upstream.',
    category: 'Contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2022,
    madeAt: 'Evermos',
    featured: false,
    contribution: true,
    links: {
      github: 'https://github.com/ankushmishra2903-official/whatsapp_share2/pull/10',
      pubDev: 'https://pub.dev/packages/whatsapp_share2',
    },
  },
  {
    slug: 'jitsi-meet',
    title: 'Jitsi Meet',
    summary:
      'Integrates the open-source Jitsi Meet video conferencing API into Flutter. Contributed upstream.',
    category: 'Contributions',
    technologies: ['Dart', 'Flutter'],
    year: 2020,
    madeAt: 'Docotel',
    featured: false,
    contribution: true,
    links: {
      github: 'https://github.com/gunschu/jitsi_meet/pull/28',
      pubDev: 'https://pub.dev/packages/jitsi_meet',
    },
  },
]

export const openSourceCategories: OpenSourceCategory[] = [
  'Native Integration',
  'Developer Tools',
  'SDKs',
  'Plugins',
  'Contributions',
]

export const featuredOpenSource = openSource.filter((p) => p.featured)
