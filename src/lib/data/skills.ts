export type SkillType = 'back-end' | 'front-end' | 'other';

export interface Skill {
	name: string;
	progress: number;
}

export type Skills = {
	[key in SkillType]: Skill[];
};

export const SKILLS: Skills = {
	'back-end': [
		{
			name: 'Node',
			progress: 85,
		},
		{
			name: 'Prisma',
			progress: 75,
		},
		{
			name: 'Firebase',
			progress: 85,
		},
	],
	'front-end': [
		{
			name: 'Svelte',
			progress: 100,
		},
		{
			name: 'React',
			progress: 80,
		},
		{
			name: 'TypeScript',
			progress: 95,
		},
		{
			name: 'PWAs',
			progress: 90,
		},
	],
	other: [
		{
			name: 'Figma',
			progress: 75,
		},
		{
			name: 'Photoshop',
			progress: 65,
		},
		{
			name: 'Premiere Pro',
			progress: 65,
		},
	],
};
