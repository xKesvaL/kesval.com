import type { Company, Project } from '$lib';
import { DateTime } from 'luxon';

export const email = 'contact@kesval.com';

export const getAge = () => {
  const birthDate = DateTime.fromISO('2004-10-14');
  const now = DateTime.local();
  return Math.floor(now.diff(birthDate, 'years').years);
};

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

export const projects: Project[] = [
  {
    name: 'Personal Portfolio',
    id: '1',
    coverPath: 'projects/personal-portfolio',
    language: 'svelte',
    href: '/projects',
    description: 'This was my first true project using Svelte. I wanted to create something for me and show my skills.',
  },
  {
    name: 'Chess Game',
    id: '2',
    coverPath: 'about',
    language: 'react',
    href: '/projects',
    description: 'My first project using React. I love chess and I wanted to recreate the game in a slick looking way.',
  },
];

export const experiences: Company[] = [
  {
    name: 'OLWE Development',
    startDate: DateTime.fromISO('2023-07-01'),
    position: 'Frontend Developer',
    current: true,
  },
];
