import { posts, type Post } from '../../../.velite/index.js';
import { route } from '$lib/ROUTES';
import { localizeHref, type Locale } from '$paraglide/runtime';
import { error, redirect } from '@sveltejs/kit';
import type { Component } from 'svelte';

export const getPostMetadata = (slug: string) => {
	return posts.find((post) => post.slug?.startsWith(slug));
};

export const getAllPosts = (locale: string) => {
	return posts
		.filter((post) => post.locale === locale)
		.sort((a, b) => {
			const dateA = new Date(a.publishedAt).getTime();
			const dateB = new Date(b.publishedAt).getTime();

			return dateB - dateA;
		});
};

export const getPostLocales = (uniqueId: string) => {
	return posts.filter((post) => post.uniqueId === uniqueId);
};

export const slugFromPath = (path: string) => {
	return path.split('/').pop()?.replace('.md', '');
};

export type PostResolver = () => Promise<{ default: Component; metadata: Post }>;

export const getPost = async (slug: string, locale: Locale) => {
	const slugMetadata = getPostMetadata(slug);

	const availablePosts = getPostLocales(slugMetadata?.uniqueId || '');
	const metadata = availablePosts.find((post) => post.locale === locale);
	const hrefSlug = metadata?.slug?.slice(0, -3);

	if (!metadata || !hrefSlug) {
		error(404, 'Could not find the post.');
	}

	if (slugMetadata?.locale !== locale) {
		return redirect(302, localizeHref(route('/blog/[slug]', { slug: hrefSlug }), { locale }));
	}

	const postsModules = import.meta.glob('/src/content/**/*.md');

	const postGlob = Object.entries(postsModules).find(([key]) => {
		const path = key.split('/').slice(3).join('/').replace('.md', '');
		return path === `${metadata.uniqueId}/${metadata.slug}`;
	});

	if (!postGlob) {
		error(404, 'Could not find the post.');
	}

	const post = await (postGlob[1] as PostResolver)();

	return {
		component: post.default,
		metadata
	};
};

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
	| 'readingTime-asc'
	| 'readingTime-desc';

// Enhance filterPosts to support searchTerm, selectedTags, and sortBy
export const filterPosts = async (
	allPosts: Post[],
	options: { searchTerm?: string; selectedTags?: string[]; sortBy?: SortOption } = {}
): Promise<Post[]> => {
	const { searchTerm = '', selectedTags = [], sortBy = 'date-desc' } = options;

	// Prepare case-insensitive search
	const searchLower = searchTerm.toLowerCase();

	// Filter by search term and tags
	const filtered = allPosts.filter((post) => {
		const titleMatch = post.title.toLowerCase().includes(searchLower);
		const excerptMatch = post.excerpt?.toLowerCase().includes(searchLower) || false;
		const tagMatch = post.tags?.some((tag) => tag.toLowerCase().includes(searchLower)) || false;

		const searchCondition = !searchTerm || titleMatch || excerptMatch || tagMatch;
		const tagCondition =
			selectedTags.length === 0 || selectedTags.every((tag) => post.tags?.includes(tag));

		return searchCondition && tagCondition;
	});

	// Sort logic
	filtered.sort((a, b) => {
		switch (sortBy) {
			case 'date-asc':
				return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
			case 'date-desc':
				return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
			case 'title-asc':
				return a.title.localeCompare(b.title);
			case 'title-desc':
				return b.title.localeCompare(a.title);
			case 'readingTime-asc':
				return (a.metadata.readingTime || 0) - (b.metadata.readingTime || 0);
			case 'readingTime-desc':
				return (b.metadata.readingTime || 0) - (a.metadata.readingTime || 0);
			default:
				return 0;
		}
	});

	return filtered;
};

export const allPostTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));
