import {
	IconBrandAdobeAfterEffect,
	IconBrandAdobePhotoshop,
	IconBrandAdobePremier,
	IconBrandFigma,
	IconBrandFirebase,
	IconBrandMysql,
	IconBrandNodejs,
	IconBrandNotion,
	IconBrandReact,
	IconBrandSvelte,
	IconBrandTypescript,
	IconDevices,
	type Icon
} from '@tabler/icons-svelte';

export type SkillType = 'back_end' | 'front_end' | 'other';

export interface Skill {
	name: string;
	icon: Icon;
}

export type Skills = {
	[key in SkillType]: Skill[];
};

export const skillsList: Skills = {
	front_end: [
		{
			name: 'React',
			icon: IconBrandReact
		},
		{
			name: 'Svelte',
			icon: IconBrandSvelte
		},
		{
			name: 'PWAs',
			icon: IconDevices
		},
		{
			name: 'TypeScript',
			icon: IconBrandTypescript
		},
		{
			name: 'Figma',
			icon: IconBrandFigma
		}
	],
	back_end: [
		{
			name: 'Express',
			icon: IconBrandNodejs
		},
		{
			name: 'MariaDB',
			icon: IconBrandMysql
		},
		{
			name: 'Firebase',
			icon: IconBrandFirebase
		}
	],
	other: [
		{
			name: 'Photoshop',
			icon: IconBrandAdobePhotoshop
		},
		{
			name: 'Premiere Pro',
			icon: IconBrandAdobePremier
		},
		{
			name: 'After Effects',
			icon: IconBrandAdobeAfterEffect
		},
		{
			name: 'Notion',
			icon: IconBrandNotion
		}
	]
} as const;
