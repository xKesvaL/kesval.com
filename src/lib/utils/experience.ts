export const professionalExperience = [
	{
		name: 'kesval',
		role: 'fullstack_dev',
		startDate: new Date('2024-08-01'),
		endDate: null,
		imageUrl: '/experiences/kesval.png',
		location: 'Ungersheim, France'
	},
	{
		name: 'olwe',
		role: 'fullstack_dev',
		startDate: new Date('2023-07-31'),
		endDate: new Date('2024-07-31'),
		imageUrl: '/experiences/olwe.jpg',
		location: 'Mulhouse, France'
	},
	{
		name: 'ciotadin_office',
		role: 'tech_assistant',
		startDate: new Date('2019-04-01'),
		endDate: new Date('2019-04-08'),
		imageUrl: '/experiences/ciotadin_office.jpeg',
		location: 'La Ciotat, France',
		hideInResume: true
	}
] as const;

export const educationExperience = [
	{
		role: 'student',
		name: 'uha',
		startDate: new Date('2022-09-01'),
		// endDate: new Date("2025-06-31"),
		endDate: null,
		imageUrl: '/experiences/uha.png',
		location: 'Mulhouse, France'
	},
	{
		role: 'student',
		name: 'theodore_deck',
		startDate: new Date('2019-09-01'),
		endDate: new Date('2022-06-31'),
		imageUrl: '/experiences/theodore_deck.jpeg',
		location: 'Guebwiller, France'
	}
] as const;

export type Experience =
	| (typeof professionalExperience)[number]
	| (typeof educationExperience)[number];
