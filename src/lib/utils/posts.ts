import { posts, type Post } from '$content/index.js';
import { route } from '$lib/ROUTES';
import { localizeHref, type Locale } from '$paraglide/runtime';
import { error, redirect } from '@sveltejs/kit';
import type { Component } from 'svelte';

export const getPostMetadata = (slug: string) => {
	return posts.find((post) => post.slug?.startsWith(slug));
};

export const getAllPosts = () => {
	return posts;
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
