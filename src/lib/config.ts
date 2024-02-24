import type { Brand, Route } from "./typings/standard";

export const DEFAULT_LOCALE: Locale = "en" as const;

export const BRAND = {
	author: {
		name: "KesvaL",
		url: "https://kesval.com",
	},
	color: {
		primary: "#5920df",
		secondary: "#df20b9",
	},
	logo: {
		dark: "/logos/logo.png",
		light: "/logos/logo.png",
	},
	name: "KesvaL",
	url: "https://kesval.com",
	shortUrl: "kesval.com",
} as const satisfies Brand;

export const SOCIALS = {
	github: {
		url: "https://github.com/xKesvaL",
	},
	instagram: {
		url: "https://instagram.com/xkesval",
	},
	linkedin: {
		url: "https://linkedin.com/in/jordan-abeddou",
	},
} as const;

export const ROUTES = {
	about: {
		path: "/about",
	},
	blog: {
		path: "/blog",
	},
	home: {
		path: "/",
	},
	work: {
		path: "/work",
	},
} as const satisfies Record<string, Route>;

export const LOCALES = ["en", "fr"] as const;

export type Locale = (typeof LOCALES)[number];

export const VERSION = "3.0.0";

export const THEMES = ["light", "auto", "dark"] as const;

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
	readingHeight: 1.7,
	readingLength: 65,
	readingSize: 18,
} as const;

export const SEARCH_PARAMS_LIST = ["owlang"] as const;

export type SearchParam = (typeof SEARCH_PARAMS_LIST)[number];

export interface LocalStorage {
	settings: Settings;
	theme: Theme;
}

export type LocalStorageKey = keyof LocalStorage;

export const EMAIL = "jabeddou@gmail.com";
