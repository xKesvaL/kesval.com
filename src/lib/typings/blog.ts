export interface BlogPost {
	title: string;
	excerpt: string;
	publishedAt: Date;
	updatedAt?: Date;
	published?: boolean;
	tags: BlogTags[];
	content: string;
	readingTime: string;
	relatedPosts?: BlogPost[];
	hidden?: boolean;
	coverImage?: string;
	coverImageAlt?: string;
	slug: string;
}

export type BlogTags = (typeof blogTags)[number];

export const blogTags = [] as const;

export interface PaginatedResponse<T> {
	items: T[];
	totalItems: number;
	totalPages: number;
	currentPage: number;
}
