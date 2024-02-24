import type { BlogPost } from "$lib/typings/blog";
import { readingTime } from "reading-time-estimator";
import striptags from "striptags";

export const frontmatterToBlogPost = (
	frontmatter: Record<string, never>,
	content: string,
	slug: string,
	language: string,
): BlogPost => {
	return {
		slug,
		title: frontmatter.title,
		excerpt: frontmatter.excerpt,
		content: content,
		publishedAt: frontmatter.publishedAt,
		updatedAt: frontmatter.updated,
		coverImage: frontmatter.coverImage,
		coverImageAlt: frontmatter.coverImageAlt,
		categories: frontmatter.categories,
		hidden: frontmatter.hidden,
		readingTime: readingTime(
			striptags(content) || "",
			undefined,
			language as never,
		).text,
	};
};
