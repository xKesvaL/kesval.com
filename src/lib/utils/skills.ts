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
import type * as m from '$paraglide/messages';

export type SkillType = 'back_end' | 'front_end' | 'other';

export interface Skill {
	name: string;
	icon: Icon;
}

export type Skills = {
	[key in SkillType]: Skill[];
};

export const getSkillsList = (messages: typeof m): Skills => ({
	front_end: [
		{
			name: messages['skills.react'](),
			icon: IconBrandReact
		},
		{
			name: messages['skills.svelte'](),
			icon: IconBrandSvelte
		},
		{
			name: messages['skills.pwas'](),
			icon: IconDevices
		},
		{
			name: messages['skills.typescript'](),
			icon: IconBrandTypescript
		},
		{
			name: messages['skills.figma'](),
			icon: IconBrandFigma
		}
	],
	back_end: [
		{
			name: messages['skills.express'](),
			icon: IconBrandNodejs
		},
		{
			name: messages['skills.mariadb'](),
			icon: IconBrandMysql
		},
		{
			name: messages['skills.firebase'](),
			icon: IconBrandFirebase
		}
	],
	other: [
		{
			name: messages['skills.photoshop'](),
			icon: IconBrandAdobePhotoshop
		},
		{
			name: messages['skills.premiere_pro'](),
			icon: IconBrandAdobePremier
		},
		{
			name: messages['skills.after_effects'](),
			icon: IconBrandAdobeAfterEffect
		},
		{
			name: messages['skills.notion'](),
			icon: IconBrandNotion
		}
	]
});
