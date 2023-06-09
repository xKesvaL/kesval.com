import type { Company, Skill, SkillType, TagPrimary, TagSecondary } from '$lib';
import { DateTime } from 'luxon';

export const email = 'contact@kesval.com';

export const getAge = () => {
  const birthDate = DateTime.fromISO('2004-10-14');
  const now = DateTime.local();
  return Math.floor(now.diff(birthDate, 'years').years);
};

export const categories: TagPrimary[] = ['tech', 'misc'];

export const tags: TagSecondary[] = [
  'svelte',
  'react',
  'js',
  'ts',
  'front-end',
  'back-end',
  'mobile',
  'desktop',
  'open-source',
  'css',
  'guide',
  'html',
  'personal',
  'review',
  'games',
  'scss',
  'nextjs',
  'sveltekit',
  'serverless',
  'tailwind',
  'daisyui',
];

export const getYearsOfCoding = () => {
  const firstCoding = DateTime.fromISO('2012-06-15');
  const now = DateTime.local();
  return Math.floor(now.diff(firstCoding, 'years').years);
};

export const getYearsOfExperience = () => {
  const firstExperience = DateTime.fromISO('2023-07-01');
  const now = DateTime.local();
  return Math.floor(now.diff(firstExperience, 'years').years);
};

export const age = getAge();

export const yearsOfCoding = getYearsOfCoding();

export const yearsOfExperience = getYearsOfExperience();

export const experiences: Company[] = [
  {
    name: 'Freelance Dev',
    slugName: 'freelance',
    timeframe: '2023 → Now',
    position: 'CEO',
    current: true,
    location: 'Ungersheim, France',
    description:
      "Working for myself as a fullstack web developer. I'm open to work! I also create my own little things and open source them.",
    tags: [
      {
        color: 'primary',
        name: 'svelte',
      },
      {
        color: 'primary',
        name: 'sveltekit',
      },
      {
        color: 'primary',
        name: 'react',
      },
      {
        color: 'primary',
        name: 'nextjs',
      },
    ],
  },
  {
    name: 'OLWE Development',
    slugName: 'olwe-development',
    timeframe: '2023 → Now',
    position: 'Frontend Developer',
    current: true,
    location: 'Mulhouse, France',
    description:
      'Frontend Developer, working on a lot of different projects, from small websites to big web applications.',
    tags: [
      {
        color: 'primary',
        name: 'react',
      },
    ],
  },
  {
    name: 'University',
    slugName: 'student-university',
    timeframe: '2022 → 2025',
    position: 'Student',
    current: true,
    location: 'Mulhouse, France',
    description:
      'Student in Multimedia and Internet at the University of Mulhouse. This is a 3-year degree, and is linked to my job at OLWE Development, I am doing an apprenticeship.',
    tags: [],
  },
  {
    name: 'High School',
    slugName: 'student-high-school',
    timeframe: '2019 → 2022',
    position: 'Student',
    current: false,
    location: 'Guebwiller, France',
    description: 'Student in computer science and mathematics.',
    tags: [],
  },
  {
    name: 'Le Bureau Ciotaden',
    slugName: 'bureau-ciotaden',
    timeframe: '2018 → 2018',
    position: 'Receptionist / Assistant',
    current: false,
    location: 'La Ciotat, France',
    description: 'Assistant and receptionist for a computer science repair shop.',
    tags: [],
  },
];

export const skillTypes: SkillType[] = ['frontend', 'backend', 'other'];

export const skills: Skill[] = [
  {
    name: 'React',
    percentage: 80,
    type: 'frontend',
  },
  {
    name: 'Svelte',
    percentage: 95,
    type: 'frontend',
  },
  {
    name: 'NextJS',
    percentage: 65,
    type: 'frontend',
  },
  {
    name: 'TypeScript',
    percentage: 90,
    type: 'frontend',
  },
  {
    name: 'PWAs',
    percentage: 80,
    type: 'frontend',
  },
  {
    name: 'NodeJS',
    percentage: 90,
    type: 'backend',
  },
  {
    name: 'Firebase',
    percentage: 70,
    type: 'backend',
  },
  {
    name: 'MariaDB',
    percentage: 80,
    type: 'backend',
  },
  {
    name: 'Photoshop',
    percentage: 60,
    type: 'other',
  },
  {
    name: 'Premiere Pro',
    percentage: 65,
    type: 'other',
  },
  {
    name: 'Excel',
    percentage: 65,
    type: 'other',
  },
];
