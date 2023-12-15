import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const PERSONAL = {
	yearsOfExperience: dayjs().diff(dayjs('2012-06-15'), 'year'),
	dateOfBirth: dayjs('2004-10-14'),
	age: dayjs().diff(dayjs('2004-10-14'), 'year'),
	openSourceContributions: '08',
	projects: '06'
} as const;

export default PERSONAL;

export const PROGRAMMING_LANGUAGES = ['svelte'] as const;

export type ProgrammingLanguage = (typeof PROGRAMMING_LANGUAGES)[number];
