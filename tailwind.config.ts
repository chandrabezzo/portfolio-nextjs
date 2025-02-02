import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	future: {
		hoverOnlyWhenSupported: true,
		respectDefaultRingColorOpacity: true,
		disableColorOpacityUtilitiesByDefault: true,
		relativeContentPathsByDefault: true,
	},
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				xs: "1.5rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
			screens: {
				xs: "475px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px",
			},
		},
		extend: {
			screens: {
				xs: "475px",
				"3xl": "1600px",
				tall: { raw: "(min-height: 800px)" },
				short: { raw: "(max-height: 600px)" },
				portrait: { raw: "(orientation: portrait)" },
				landscape: { raw: "(orientation: landscape)" },
				touch: { raw: "(hover: none) and (pointer: coarse)" },
				stylus: { raw: "(hover: none) and (pointer: fine)" },
				mouse: { raw: "(hover: hover) and (pointer: fine)" },
				'reduce-motion': { raw: "(prefers-reduced-motion: reduce)" },
				'max-2xl': { max: '1535px' },
				'max-xl': { max: '1279px' },
				'max-lg': { max: '1023px' },
				'max-md': { max: '767px' },
				'max-sm': { max: '639px' },
				'max-xs': { max: '474px' },
				retina: { raw: "(min-resolution: 2dppx)" },
				'prefers-dark': { raw: "(prefers-color-scheme: dark)" },
				'prefers-light': { raw: "(prefers-color-scheme: light)" },
			},
			spacing: {
				screen: "100vh",
				svh: "100svh",
				lvh: "100lvh",
				dvh: "100dvh",
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
				'4.5': '1.125rem',
				'5.5': '1.375rem',
				'13': '3.25rem',
				'15': '3.75rem',
				'128': '32rem',
				'144': '36rem',
				'10vw': '10vw',
				'20vw': '20vw',
				'30vw': '30vw',
				'40vw': '40vw',
				'50vw': '50vw',
			},
			height: {
				screen: "100vh",
				svh: "100svh",
				lvh: "100lvh",
				dvh: "100dvh",
				'screen-small': "100svh",
				'screen-large': "100lvh",
				'screen-dynamic': "100dvh",
				'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
				'app-header': 'var(--app-header-height)',
				'app-footer': 'var(--app-footer-height)',
				'app-content': 'calc(100vh - var(--app-header-height) - var(--app-footer-height))',
				'app-content-safe': 'calc(100dvh - var(--app-header-height) - var(--app-footer-height) - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
			},
			minHeight: {
				screen: "100vh",
				svh: "100svh",
				lvh: "100lvh",
				dvh: "100dvh",
				'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
				'app-content': 'calc(100vh - var(--app-header-height) - var(--app-footer-height))',
				'app-content-safe': 'calc(100dvh - var(--app-header-height) - var(--app-footer-height) - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
				'1/4': '25vh',
				'1/2': '50vh',
				'3/4': '75vh',
				'content': 'fit-content',
				'content-min': 'min-content',
				'content-max': 'max-content',
			},
			maxHeight: {
				screen: "100vh",
				svh: "100svh",
				lvh: "100lvh",
				dvh: "100dvh",
				'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
				'app-content': 'calc(100vh - var(--app-header-height) - var(--app-footer-height))',
				'app-content-safe': 'calc(100dvh - var(--app-header-height) - var(--app-footer-height) - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
				'content': 'fit-content',
				'content-min': 'min-content',
				'content-max': 'max-content',
			},
			width: {
				'screen-safe': 'calc(100vw - env(safe-area-inset-left) - env(safe-area-inset-right))',
				'content': 'fit-content',
				'content-min': 'min-content',
				'content-max': 'max-content',
				'10vw': '10vw',
				'20vw': '20vw',
				'30vw': '30vw',
				'40vw': '40vw',
				'50vw': '50vw',
			},
			padding: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
				'5vw': '5vw',
				'10vw': '10vw',
			},
			margin: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
				'5vw': '5vw',
				'10vw': '10vw',
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
				heading: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				"3xs": ["0.5rem", { lineHeight: "0.75rem" }],
				"2xs": ["0.625rem", { lineHeight: "1rem" }],
				'fluid-sm': ['clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)', { lineHeight: '1.5' }],
				'fluid-base': ['clamp(1rem, 0.34vw + 0.91rem, 1.19rem)', { lineHeight: '1.5' }],
				'fluid-lg': ['clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)', { lineHeight: '1.4' }],
				'fluid-xl': ['clamp(1.56rem, 1vw + 1.31rem, 2.11rem)', { lineHeight: '1.3' }],
				'fluid-2xl': ['clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)', { lineHeight: '1.2' }],
				'fluid-3xl': ['clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)', { lineHeight: '1.1' }],
			},
			lineHeight: {
				'extra-tight': '1.125',
				'extra-loose': '2.5',
				'fluid': 'calc(1em + 0.5vw)',
			},
			letterSpacing: {
				'extra-tight': '-0.05em',
				'extra-wide': '0.1em',
				'fluid': 'calc(-0.01em + 0.05vw)',
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
			},
			transitionDuration: {
				'400': '400ms',
				'2000': '2000ms',
				'3000': '3000ms',
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				"fade-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"scale-out": {
					"0%": { transform: "scale(1)", opacity: "1" },
					"100%": { transform: "scale(0.95)", opacity: "0" },
				},
				"slide-in": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-out": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				shimmer: "shimmer 2s linear infinite",
				spotlight: "spotlight 2s ease .75s 1 forwards",
				"fade-up": "fade-up 0.5s ease-out",
				"fade-down": "fade-down 0.5s ease-out",
				"fade-in": "fade-in 0.3s ease-in-out",
				"fade-out": "fade-out 0.3s ease-in-out",
				"scale-in": "scale-in 0.2s ease-out",
				"scale-out": "scale-out 0.2s ease-in",
				"slide-in": "slide-in 0.3s ease-out",
				"slide-out": "slide-out 0.3s ease-in",
			},
			zIndex: {
				'behind': '-1',
				'modal': '1000',
				'popover': '1010',
				'tooltip': '1020',
				'toast': '1030',
				'spotlight': '1040',
			},
			backdropBlur: {
				xs: '2px',
			},
			aspectRatio: {
				'portrait': '3/4',
				'landscape': '4/3',
				'ultra-wide': '21/9',
			},
			aria: {
				'main': 'main',
				'navigation': 'navigation',
				'banner': 'banner',
				'contentinfo': 'contentinfo',
				'complementary': 'complementary',
				'search': 'search',
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		plugin(({ addVariant, matchUtilities, theme, addUtilities, addBase }) => {
			addVariant("touch", "@media (hover: none) and (pointer: coarse)");
			addVariant("stylus", "@media (hover: none) and (pointer: fine)");
			addVariant("mouse", "@media (hover: hover) and (pointer: fine)");

			addVariant("portrait", "@media (orientation: portrait)");
			addVariant("landscape", "@media (orientation: landscape)");

			addVariant("motion-safe", "@media (prefers-reduced-motion: no-preference)");
			addVariant("motion-reduce", "@media (prefers-reduced-motion: reduce)");

			addVariant("retina", "@media (min-resolution: 2dppx)");

			addVariant("dark-mode", "@media (prefers-color-scheme: dark)");
			addVariant("light-mode", "@media (prefers-color-scheme: light)");

			addVariant("safe-top", "@supports(padding: env(safe-area-inset-top))");
			addVariant("safe-bottom", "@supports(padding: env(safe-area-inset-bottom))");

			addVariant("hocus", ["&:hover", "&:focus-visible"]);
			addVariant("group-hocus", [":merge(.group):hover &", ":merge(.group):focus-visible &"]);
			addVariant("peer-hocus", [":merge(.peer):hover ~ &", ":merge(.peer):focus-visible ~ &"]);

			addVariant("not-first", "&:not(:first-child)");
			addVariant("not-last", "&:not(:last-child)");
			addVariant("optional", "&:optional");
			addVariant("required", "&:required");
			addVariant("valid", "&:valid");
			addVariant("invalid", "&:invalid");
			addVariant("in-range", "&:in-range");
			addVariant("out-of-range", "&:out-of-range");
			addVariant("placeholder-shown", "&:placeholder-shown");

			addVariant("group-valid", ":merge(.group):valid &");
			addVariant("group-invalid", ":merge(.group):invalid &");
			addVariant("peer-valid", ":merge(.peer):valid ~ &");
			addVariant("peer-invalid", ":merge(.peer):invalid ~ &");

			addVariant("aria-selected", '&[aria-selected="true"]');
			addVariant("aria-disabled", '&[aria-disabled="true"]');
			addVariant("aria-expanded", '&[aria-expanded="true"]');
			addVariant("aria-checked", '&[aria-checked="true"]');
			addVariant("data-active", '&[data-active="true"]');
			addVariant("data-state-open", '&[data-state="open"]');
			addVariant("data-state-closed", '&[data-state="closed"]');
			addVariant("data-highlighted", '&[data-highlighted]');
			addVariant("data-selected", '&[data-selected]');

			matchUtilities(
				{
					"animation-delay": (value) => ({
						"animation-delay": value,
					}),
					"animation-duration": (value) => ({
						"animation-duration": value,
					}),
				},
				{
					values: theme("transitionDelay"),
				}
			);

			addUtilities({
				'.text-balance': {
					'text-wrap': 'balance',
				},
				'.text-pretty': {
					'text-wrap': 'pretty',
				},
				'.tap-highlight-transparent': {
					'-webkit-tap-highlight-color': 'transparent',
				},
				'.touch-pan-x': {
					'touch-action': 'pan-x',
				},
				'.touch-pan-y': {
					'touch-action': 'pan-y',
				},
				'.touch-pinch-zoom': {
					'touch-action': 'pinch-zoom',
				},
				'.backdrop-saturate': {
					'--tw-backdrop-saturate': 'saturate(180%)',
					'backdrop-filter': 'var(--tw-backdrop-saturate)',
				},

				// SEO-friendly text utilities
				'.text-semantic': {
					'text-align': 'left',
					'line-height': '1.6',
					'word-spacing': '0.05em',
					'text-wrap': 'pretty',
				},
				'.heading-semantic': {
					'text-wrap': 'balance',
					'max-width': '60ch',
				},
			});

			// Add base semantic styles
			addBase({
				'[data-ats]': {
					'display': 'block',
					'line-height': '1.6',
					'margin-bottom': '0.5rem',
				},
				'main': {
					'display': 'block',
					'width': '100%',
				},
				'article': {
					'display': 'block',
					'margin-bottom': '2rem',
				},
				'section[data-section]': {
					'padding': '2rem 0',
					'margin-bottom': '2rem',
				},
			});
		}),
	],
};

export default config;
