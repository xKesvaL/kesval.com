import { type Collections } from '../../../.velite/index.js';
import * as content from '../../../.velite/index.js';
import { type Locale } from '$paraglide/runtime';
import type { Component } from 'svelte';

export const getContentMetadata = (slug: string, type: keyof Collections) => {
	return content[type].find((item) => item.slug?.startsWith(slug));
};
export const getAllContent = (type: keyof Collections) => {
	return content[type];
};

export const getAllContentLocale = <T extends keyof Collections>(
	locale: string,
	type: T
): Collections[T]['schema']['_output'][] => {
	return content[type]
		.filter((item) => item.locale === locale)
		.sort((a, b) => {
			const dateA = new Date(a.publishedAt).getTime();
			const dateB = new Date(b.publishedAt).getTime();

			return dateB - dateA;
		});
};

export const getContentLocales = (uniqueId: string, type: keyof Collections) => {
	return content[type].filter((item) => item.uniqueId === uniqueId);
};

export const slugFromPath = (path: string) => {
	return path.split('/').pop()?.replace('.md', '');
};

export type ContentResolver<T extends keyof Collections> = () => Promise<{
	default: Component;
	metadata: Collections[T];
}>;

export type TOCEntry = {
	title: string;
	url: string;
	items?: TOCEntry[];
};

export type SortOption =
	| 'date-desc'
	| 'date-asc'
	| 'title-asc'
	| 'title-desc'
	| 'reading-time-asc'
	| 'reading-time-desc';

export const getAllContentTags = (locale: Locale, type: keyof Collections) => {
	return Array.from(
		new Set(
			content[type].flatMap((post) => {
				return post.locale === locale ? post.tags || [] : [];
			})
		)
	);
};

export const getImageSrc = (src?: string) => {
	return src?.replace('/static', '/content');
};
