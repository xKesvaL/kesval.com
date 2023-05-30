import type { Project } from '$lib';

const projectsOrdered: {
  [key: string]: Project;
} = {
  '1': {
    name: 'Personal Portfolio',
    coverPath: '/images/projects/personal-portfolio.png',
    language: 'svelte',
    href: '/projects/personal-portfolio',
    description: 'Wanted to show my skills! Learned Svelte(Kit) while doing it, was cool.',
    category: 'tech',
    tags: ['svelte', 'front-end', 'ts', 'scss', 'personal', 'open-source', 'sveltekit'],
    projectId: '1',
  },
  '2': {
    name: 'Chess Game',
    coverPath: '/images/about.png',
    language: 'react',
    href: '/projects/chess-game',
    description: 'Svelte, Firebase, Chess. Three things that looked cool, used them.',
    category: 'tech',
    tags: ['svelte', 'front-end', 'back-end', 'ts', 'scss', 'open-source', 'serverless', 'sveltekit'],
    projectId: '2',
  },
  '3': {
    name: 'WYNK',
    coverPath: '/images/about.png',
    language: 'react',
    href: '/projects/wynk',
    description: 'I wanted a place to store « Knowledge », so I made one.',
    category: 'tech',
    tags: [],
    projectId: '3',
  },
};

const projects = Object.values(projectsOrdered).reverse();

export { projects };
