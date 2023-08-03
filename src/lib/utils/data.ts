import type { Company, Skill, SkillType, TagPrimary, TagSecondary } from '$lib';
import { DateTime } from 'luxon';

export const updated = new Date('07-17-2023');

export const email = 'jabeddou@gmail.com';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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

// export const experiencesForFrenchCV: Company[] = [
//   {
//     name: 'Freelance',
//     slugName: 'freelance',
//     timeframe: '2023 → Mtn',
//     position: 'CEO',
//     current: true,
//     location: 'Ungersheim, France',
//     description:
//       "Je travaille pour moi en cherchant des petits jobs que je trouve intéressants, histoire de m'occuper et de gagner un peu d'argent.",
//     tags: [
//       {
//         color: 'primary',
//         name: 'svelte',
//       },
//       {
//         color: 'primary',
//         name: 'sveltekit',
//       },
//       {
//         color: 'primary',
//         name: 'react',
//       },
//       {
//         color: 'primary',
//         name: 'nextjs',
//       },
//     ],
//   },
//   {
//     name: 'Université',
//     slugName: 'student-university',
//     timeframe: '2022 → 2025',
//     position: 'Étudiant',
//     current: true,
//     location: 'Mulhouse, France',
//     description:
//       "Étudiant en BUT MMI (Métiers Multimédia de l'Internet), j'apprends à créer des sites web, faire du design et de la communication.",
//     tags: [],
//   },
//   {
//     name: 'Lycée',
//     slugName: 'student-high-school',
//     timeframe: '2019 → 2022',
//     position: 'Étudiant',
//     current: false,
//     location: 'Guebwiller, France',
//     description:
//       "Étudiant en spécalité mathématiques et NSI (Numérique et Sciences Informatique), j'ai obtenu mon bac mention assez bien.",
//     tags: [],
//   },
//   {
//     name: 'Le Bureau Ciotaden',
//     slugName: 'bureau-ciotaden',
//     timeframe: '2018 → 2018',
//     position: 'Receptionist / Assistant',
//     current: false,
//     location: 'La Ciotat, France',
//     description: 'Assistant et réceptionniste pour un magasin de réparation informatique.',
//     tags: [],
//   },
// ];

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
    name: 'OLWE Dev',
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
