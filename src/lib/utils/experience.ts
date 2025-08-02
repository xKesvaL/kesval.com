import type * as m from '$paraglide/messages';

export const getProfessionalExperience = (messages: typeof m) => [
	{
		name: 'kesval',
		role: 'fullstack_dev',
		startDate: new Date('2024-08-01'),
		endDate: null,
		imageUrl: '/experiences/kesval.png',
		location: messages['locations.ungersheim_france']()
	},
	{
		name: 'olwe',
		role: 'fullstack_dev',
		startDate: new Date('2023-07-31'),
		endDate: new Date('2024-07-31'),
		imageUrl: '/experiences/olwe.jpg',
		location: messages['locations.mulhouse_france']()
	},
	{
		name: 'ciotadin_office',
		role: 'tech_assistant',
		startDate: new Date('2019-04-01'),
		endDate: new Date('2019-04-08'),
		imageUrl: '/experiences/ciotadin_office.jpeg',
		location: messages['locations.la_ciotat_france'](),
		hideInResume: true
	}
] as const;

export const getEducationExperience = (messages: typeof m) => [
	{
		role: 'student',
		name: 'uha',
		startDate: new Date('2022-09-01'),
		// endDate: new Date("2025-06-31"),
		endDate: null,
		imageUrl: '/experiences/uha.png',
		location: messages['locations.mulhouse_france']()
	},
	{
		role: 'student',
		name: 'theodore_deck',
		startDate: new Date('2019-09-01'),
		endDate: new Date('2022-06-31'),
		imageUrl: '/experiences/theodore_deck.jpeg',
		location: messages['locations.guebwiller_france']()
	}
] as const;

export type Experience =
	| ReturnType<typeof getProfessionalExperience>[number]
	| ReturnType<typeof getEducationExperience>[number];
