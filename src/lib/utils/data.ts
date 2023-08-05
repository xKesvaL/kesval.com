import type { Skill, SkillType, TagPrimary, TagSecondary } from '$lib';
import type { CookieAttributes } from 'js-cookie';
import { DateTime } from 'luxon';

export const updated = new Date('08-05-2023');

export const email = 'jabeddou@gmail.com';

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

export const langCookieParams: CookieAttributes = {
  path: '/',
  expires: new Date(2030, 1, 1),
  secure: true,
  sameSite: 'lax',
};

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
    percentage: 75,
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
    percentage: 60,
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
