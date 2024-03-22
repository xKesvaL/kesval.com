import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const PERSONAL = {
	yearsOfCoding: dayjs().diff(dayjs("2012-06-15"), "year"),
	yearsOfExperience: dayjs().diff(dayjs("2022-07-31"), "year") + 1,
	dateOfBirth: dayjs("2004-10-14"),
	age: dayjs().diff(dayjs("2004-10-14"), "year"),
	openSourceContributions: "08",
	projects: "06",
	location: "Mulhouse, France",
	email: "jabeddou@gmail.com",
} as const;

const PROGRAMMING_LANGUAGES = ["svelte"] as const;

export type ProgrammingLanguage = (typeof PROGRAMMING_LANGUAGES)[number];

export interface Experience {
	company: string;
	role: string;
	startDate: Date;
	endDate: Date | null;
	imageUrl: string;
	location: string;
}

const EXPERIENCES: Experience[] = [
	{
		company: "olwe",
		role: "fullstack_dev",
		startDate: new Date("2023-07-31"),
		endDate: null,
		imageUrl: "/experiences/olwe.jpg",
		location: "Mulhouse, France",
	},
	{
		company: "kesval",
		role: "fullstack_dev",
		startDate: new Date("2022-10-01"),
		endDate: null,
		imageUrl: "/experiences/kesval.png",
		location: "Ungersheim, France",
	},
	{
		company: "ciotadin_office",
		role: "tech_assistant",
		startDate: new Date("2019-04-01"),
		endDate: new Date("2019-04-07"),
		imageUrl: "/experiences/ciotadin_office.jpeg",
		location: "La Ciotat, France",
	},
] as const;

const EDUCATIONS: Experience[] = [
	{
		role: "student",
		company: "uha",
		startDate: new Date("2022-09-01"),
		// endDate: new Date("2025-06-31"),
		endDate: null,
		imageUrl: "/experiences/uha.png",
		location: "Mulhouse, France",
	},
	{
		role: "student",
		company: "theodore_deck",
		startDate: new Date("2019-09-01"),
		endDate: new Date("2022-06-31"),
		imageUrl: "/experiences/theodore_deck.jpeg",
		location: "Guebwiller, France",
	},
] as const;

export { PERSONAL, PROGRAMMING_LANGUAGES, EXPERIENCES, EDUCATIONS };
