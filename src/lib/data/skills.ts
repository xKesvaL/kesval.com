import IconBrandAfterEffects from "$lib/icons/custom/IconBrandAfterEffects.svelte";
import IconBrandExpress from "$lib/icons/custom/IconBrandExpress.svelte";
import IconBrandFigma from "$lib/icons/custom/IconBrandFigma.svelte";
import IconBrandFirebase from "$lib/icons/custom/IconBrandFirebase.svelte";
import IconBrandMariaDb from "$lib/icons/custom/IconBrandMariaDb.svelte";
import IconBrandNotion from "$lib/icons/custom/IconBrandNotion.svelte";
import IconBrandPhotoshop from "$lib/icons/custom/IconBrandPhotoshop.svelte";
import IconBrandPremierePro from "$lib/icons/custom/IconBrandPremierePro.svelte";
import IconBrandReact from "$lib/icons/custom/IconBrandReact.svelte";
import IconBrandSvelte from "$lib/icons/custom/IconBrandSvelte.svelte";
import IconBrandTypescript from "$lib/icons/custom/IconBrandTypescript.svelte";
import IconMonitorSmartphone from "$lib/icons/lucide/IconMonitorSmartphone.svelte";
import type { ComponentType } from "svelte";

export type SkillType = "back_end" | "front_end" | "other";

export interface Skill {
	name: string;
	icon: ComponentType;
}

export type Skills = {
	[key in SkillType]: Skill[];
};

export const SKILLS: Skills = {
	front_end: [
		{
			name: "React",
			icon: IconBrandReact,
		},
		{
			name: "Svelte",
			icon: IconBrandSvelte,
		},
		{
			name: "PWAs",
			icon: IconMonitorSmartphone,
		},
		{
			name: "TypeScript",
			icon: IconBrandTypescript,
		},
		{
			name: "Figma",
			icon: IconBrandFigma,
		},
	],
	back_end: [
		{
			name: "Express",
			icon: IconBrandExpress,
		},
		{
			name: "MariaDB",
			icon: IconBrandMariaDb,
		},
		{
			name: "Firebase",
			icon: IconBrandFirebase,
		},
	],
	other: [
		{
			name: "Photoshop",
			icon: IconBrandPhotoshop,
		},
		{
			name: "Premiere Pro",
			icon: IconBrandPremierePro,
		},
		{
			name: "After Effects",
			icon: IconBrandAfterEffects,
		},
		{
			name: "Notion",
			icon: IconBrandNotion,
		},
	],
} as const;
