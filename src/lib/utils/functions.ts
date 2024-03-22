import type { FormattedZodError } from '$lib/typings/standard';
import type { ZodError } from 'zod';
import dayjs from 'dayjs';

import * as m from '$paraglide/messages';

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatZodError = (error: ZodError): FormattedZodError => {
	return error.errors.reduce((acc, curr) => {
		if (curr.path.length === 0 || curr.path[0] === undefined) {
			return acc;
		}

		acc[curr.path[0]] = {
			message: curr.message
		};

		return acc;
	}, {} as FormattedZodError);
};

export const transition = (cb: () => Promise<void>) => {
	if (!document.startViewTransition) return cb();
	return document.startViewTransition(cb);
};

export const getFlagEmoji = (countryCode: string) => {
	return [...countryCode.toUpperCase()]
		.map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
		.reduce((a, b) => a + b);
};

export const polyfillCountryFlagEmojis = (
	fontName = 'Twemoji Country Flags',
	fontUrl = '/fonts/TwemojiCountryFlags.woff2'
) => {
	const style = document.createElement('style');

	style.textContent = `@font-face {
      font-family: "${fontName}";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067,
        U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('${fontUrl}') format('woff2');
      font-display: swap;
    }`;
	document.head.appendChild(style);

	return true;
};

export const i18nKeys = Object.keys(m);

export const getI18n = (key: string, args?: { [key: string]: unknown }) => {
	if (i18nKeys.includes(key)) {
		// @ts-expect-error args is optional
		return m[key as keyof typeof m](args);
	}

	return key;
};

const dateFormats = {
	short: 'MMM YYYY'
} as const;

interface FormatDateOptions {
	locale?: string;
	format?: keyof typeof dateFormats;
}

export const formatDate = (date: Date, options: FormatDateOptions) => {
	const dayjsDate = dayjs(date);

	if (options.locale) {
		dayjsDate.locale(options.locale);
	}

	if (options.format) {
		return dayjsDate.format(dateFormats[options.format]);
	}

	return dayjsDate.format();
};
