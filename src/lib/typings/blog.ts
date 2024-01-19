export interface BlogPost {
	title: string;
	description: string;
	slug: string;
	publishedAt: Date;
	updatedAt: Date;
	published: boolean;
	categories: Categories[];
}

export type Categories = (typeof blogCategories)[number];

export const blogCategories = [] as const;
