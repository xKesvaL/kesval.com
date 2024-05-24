import type { BlogPost, PaginatedResponse } from "$lib/typings/blog";
import type { AvailableLanguageTag } from "$paraglide/runtime";
import grayMatter from "gray-matter";
import { frontmatterToBlogPost } from "$lib/utils/posts";

const PAGE_SIZE = 10;
const BASE_EN_FILE_PATH = "src/posts/en";

interface GetPostsOptions {
	language: AvailableLanguageTag;
}

export const getPosts = async (
	options: GetPostsOptions,
): Promise<PaginatedResponse<BlogPost>> => {
	// Read all files in the specified directory and get the .md files
	const files = import.meta.glob("/src/posts/**/*.md", {
		eager: true,
		query: '?raw'
	});

	// Reverse the array so that the newest posts are first
	// mdFiles.reverse();

	const blogPosts: BlogPost[] = [];

	const entries = Object.entries(files).map(([filename, content]) => {
		const baseSlug = filename.split("/").slice(3);

		if (baseSlug[0] !== options.language) {
			return null;
		}

		const slug = baseSlug.join("/").replace(".md", "").replace(`${options.language}/`, "")
		
		return [slug, content] as [string, string];
	}).filter(Boolean);


	for (const [filename, content] of entries) {
		// biome-ignore lint/suspicious/noExplicitAny: It's an import. The type is { default: string }
		const parsedData = grayMatter((content as any).default);
		blogPosts.push(
			frontmatterToBlogPost(
				parsedData.data as Record<string, never>,
				parsedData.content,
				filename.replace(".md", ""),
				options.language,
			),
		);
	}

	const length = Object.keys(files).length;

	return {
		items: blogPosts,
		totalItems: length,
		totalPages: Math.ceil(length / PAGE_SIZE),
	};
};

export const getPostBySlug = async (
	slug: string,
	language: AvailableLanguageTag,
): Promise<BlogPost | null> => {
	const allPosts = await getPosts({ language: language });
	const post = allPosts.items?.find((post) => post.slug === slug) ?? null;
	if (post) {
		post.relatedPosts = getRelatedPosts(post, allPosts.items);
	}

	return post;
};

export const getAllSlugs = async (): Promise<string[]> => {
	const files = import.meta.glob("/src/posts/en/*.md", {
		eager: true,
		query: '?raw'
	});

	// Filenames are in the format yyyy-MM-dd-slug.md
	// Grab only the slug
	const slugs = Object.keys(files).map((fileName) =>
		fileName.split("-").slice(3).join("-").replace(".md", ""),
	);

	return slugs;
};

interface PaginateOptions {
	items: string[];
	page?: number;
	count?: number;
}

const paginate = ({ items, page, count }: PaginateOptions): string[] => {
	const pageSize = count ?? PAGE_SIZE;
	const startIndex = page ? (page - 1) * pageSize : 0;
	const endIndex = page ? page * pageSize : count ?? 9999;
	const paginatedItems = items.slice(startIndex, endIndex);

	return paginatedItems;
};

const getRelatedPosts = (
	post: BlogPost,
	allPosts: BlogPost[],
	count = 3,
): BlogPost[] => {
	const otherPosts = allPosts.filter(
		(otherPost) => !otherPost.hidden && otherPost.slug !== post.slug,
	);
	const rankedPosts = otherPosts
		.map((otherPost) => {
			return {
				post: otherPost,
				score: otherPost.tags.filter((category) =>
					post.tags.includes(category),
				).length,
			};
		})
		.sort((a, b) => {
			if (b.score === a.score && b.post.publishedAt && a.post.publishedAt) {
				return (
					new Date(b.post.publishedAt).getTime() -
					new Date(a.post.publishedAt).getTime()
				);
			}
			return b.score - a.score;
		});

	return rankedPosts.map((p) => p.post).slice(0, count);
};


export const posts = {
	en: await getPosts({ language: "en" }),
	fr: await getPosts({ language: "fr" }),
} as const;