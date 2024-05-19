import type { BlogPost, PaginatedResponse } from "$lib/typings/blog";
import type { AvailableLanguageTag } from "$paraglide/runtime";
import fs from "fs-extra";
import { join } from "node:path";
import grayMatter from "gray-matter";
import { frontmatterToBlogPost } from "$lib/utils/posts";

const PAGE_SIZE = 10;
const BASE_FILE_PATH = join(process.cwd(), "/src/posts");
const BASE_EN_FILE_PATH = `${BASE_FILE_PATH}/en`;

interface GetPostsOptions {
	language: AvailableLanguageTag;
	page?: number;
	count?: number;
}

export const getPosts = async (
	options: GetPostsOptions,
): Promise<PaginatedResponse<BlogPost>> => {
	// Read all files in the specified directory and get the .md files
	const fileNames = await fs.readdir(`${BASE_FILE_PATH}/${options.language}`);
	const mdFiles = fileNames.filter((fileName) => fileName.endsWith(".md"));
	// Reverse the array so that the newest posts are first
	mdFiles.reverse();

	const paginatedMdFiles = paginate({
		items: mdFiles,
		page: options.page,
		count: options.count,
	});

	const blogPosts: BlogPost[] = [];

	for (const mdFile of paginatedMdFiles) {
		const fileContent = await fs.readFile(
			`${BASE_FILE_PATH}/${options.language}/${mdFile}`,
			"utf-8",
		);
		const parsedData = grayMatter(fileContent);
		blogPosts.push(
			frontmatterToBlogPost(
				parsedData.data as Record<string, never>,
				parsedData.content,
				mdFile.split("-").slice(3).join("-").replace(".md", ""),
				options.language,
			),
		);
	}

	return {
		items: blogPosts,
		totalItems: mdFiles.length,
		totalPages: Math.ceil(mdFiles.length / (options.count ?? PAGE_SIZE)),
		currentPage: options.page ?? 1,
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
	const fileNames = await fs.readdir(BASE_EN_FILE_PATH);

	// Filenames are in the format yyyy-MM-dd-slug.md
	// Grab only the slug
	const slugs = fileNames.map((fileName) =>
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
