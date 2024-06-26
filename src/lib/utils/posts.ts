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
		tags: frontmatter.categories,
		hidden: frontmatter.hidden,
		readingTime: readingTime(
			striptags(content) || "",
			undefined,
			language as never,
		).text,
	};
};

export const translateBlogPostSlug = (
	posts: BlogPost[],
	slug: string,
) => {
	// We have only got the slug of the url (translated), so we need to find the identifier of the post
	// the identifier is before the whole slug (in the filename) and is the date of the post (YYYY-MM-DD)
	// Using the identifier we can find the translated slug in any language by searching in any
	// language folder for a file with the same identifier. the slug looks like this "yyy-mm-dd-slug-name"
	const datePart = slug.split("-").slice(0, 3).join("-");
	const post = posts.find((post) => post.slug.startsWith(datePart));

	if (!post) {
		return slug;
	}

	return post.slug;
};
