import type { Brand, Route } from './typings/standard';

export const DEFAULT_LOCALE: Locale = 'en';

export const BRAND = {
	author: {
		name: 'KesvaL',
		url: 'https://kesval.com'
	},
	color: {
		primary: '#5920df',
		secondary: '#df20b9'
	},
	logo: {
		dark: '/images/logos/logo.png',
		light: '/images/logos/logo.png'
	},
	name: 'KesvaL',
	url: 'https://kesval.com'
} as const satisfies Brand;

export const ROUTES = {
	home: {
		path: '/'
	}
} as const satisfies Record<string, Route>;

export const LOCALES = ['en', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];

export const VERSION = '3.0.0';

export const THEMES = ['light', 'auto', 'dark'] as const;

export type Theme = (typeof THEMES)[number];

export interface Settings {
	dyslexia: boolean;
	lastReset: number;
	readingHeight: number;
	readingLength: number;
	readingSize: number;
}

export const DEFAULT_SETTINGS: Settings = {
	dyslexia: false,
	lastReset: Date.now(),
	readingHeight: 1.75,
	readingLength: 90,
	readingSize: 18
} as const;
