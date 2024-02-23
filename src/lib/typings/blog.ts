export interface BlogPost {
	title: string;
	description: string;
	excerpt: string;
	slug: string;
	publishedAt: Date;
	updatedAt?: Date;
	published?: boolean;
	categories: Categories[];
	content: string;
	readingTime: string;
	relatedPosts?: BlogPost[];
	hidden?: boolean;
	coverImage?: string;
	coverImageAlt?: string;
}

export type Categories = (typeof blogCategories)[number];

export const blogCategories = [] as const;

export interface PaginatedResponse<T> {
	items: T[];
	totalItems: number;
	totalPages: number;
	currentPage: number;
}
