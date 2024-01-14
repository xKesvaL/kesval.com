export type SkillType = 'back_end' | 'front_end' | 'other';

export interface Skill {
	name: string;
	progress: number;
}

export type Skills = {
	[key in SkillType]: Skill[];
};

export const SKILLS: Skills = {
	front_end: [
		{
			name: 'Svelte',
			progress: 100
		},
		{
			name: 'SvelteKit',
			progress: 95
		},
		{
			name: 'React',
			progress: 80
		},
		{
			name: 'NextJS',
			progress: 85
		},
		{
			name: 'TypeScript',
			progress: 95
		},
		{
			name: 'PWAs',
			progress: 90
		}
	],
	back_end: [
		{
			name: 'Node',
			progress: 85
		},
		{
			name: 'Express',
			progress: 85
		},
		{
			name: 'Git/Github',
			progress: 85
		},
		{
			name: 'MariaDB',
			progress: 75
		},
		{
			name: 'Prisma',
			progress: 75
		},
		{
			name: 'Firebase',
			progress: 85
		}
	],
	other: [
		{
			name: 'Figma',
			progress: 75
		},
		{
			name: 'Photoshop',
			progress: 65
		},
		{
			name: 'Premiere Pro',
			progress: 65
		}
	]
} as const;
