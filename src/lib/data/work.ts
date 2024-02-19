import { route } from "$lib/ROUTES";

import type { ProgrammingLanguage } from "./personal";

export interface Project {
	startDate: Date;
	endDate: Date | null;
	github: null | string;
	href: string;
	id: number;
	languages: ProgrammingLanguage[];
	imageUrl: string;
	name: string;
	site: null | string;
	category: Category;
}

const categories = [
	"branding",
	"web_app",
	"mobile_app",
	"game",
	"api",
	"library",
	"tool",
	"other",
	"website",
] as const;

export interface CategoryBase {
	name: (typeof categories)[number];
	colorType: "theme" | "custom";
}

export interface CategoryWithThemeColor extends CategoryBase {
	color: "primary" | "secondary" | "accent";
	colorType: "theme";
}

export interface CategoryWithCustomColor extends CategoryBase {
	color: string;
	colorType: "custom";
}

type Category = CategoryWithThemeColor | CategoryWithCustomColor;

const PROJECTS: Project[] = [
	{
		endDate: null,
		github: "https://github.com/xKesvaL/kesval.com",
		href: route("/work/kesval"),
		id: 1,
		languages: ["svelte"],
		imageUrl: "/experiences/kesval.png",
		name: "kesval",
		site: "https://kesval.com",
		startDate: new Date("2024-02-19"),
		category: {
			name: "branding",
			color: "primary",
			colorType: "theme",
		},
	},
	{
		endDate: null,
		github: "https://github.com/xKesvaL/kesval.com",
		href: route("/work/portfolio"),
		id: 1,
		languages: ["svelte"],
		imageUrl: "/experiences/kesval.png",
		name: "portfolio",
		site: "https://kesval.com",
		startDate: new Date("2023-03-19"),
		category: {
			name: "website",
			color: "primary",
			colorType: "theme",
		},
	},
	{
		endDate: null,
		github: "https://github.com/xKesvaL/supapower",
		href: route("/work/supapower"),
		id: 2,
		languages: ["svelte"],
		imageUrl: "/projects/supapower.png",
		name: "supapower",
		site: null, // https://supapower.com',
		startDate: new Date("2023-05-01"),
		category: {
			name: "web_app",
			color: "primary",
			colorType: "theme",
		},
	},
] as const;

const FEATURED_PROJECTS = ["portfolio", "supapower"] as const;

export { FEATURED_PROJECTS, PROJECTS };
