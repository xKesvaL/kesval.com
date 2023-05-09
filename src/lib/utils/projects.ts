import type { Project } from '$lib';

const projectsOrdered: {
  [key: string]: Project;
} = {
  '1': {
    name: 'Personal Portfolio',
    coverPath: '/projects/personal-portfolio',
    language: 'svelte',
    href: '/projects/personal-portfolio',
    description: 'Wanted to show my skills! Learned Svelte(Kit) while doing it, cool.',
    category: 'tech',
    tags: ['svelte', 'front-end', 'ts', 'scss', 'personal', 'open-source', 'sveltekit'],
    projectId: '1',
  },
  '2': {
    name: 'Chess Game',
    coverPath: 'about',
    language: 'react',
    href: '/projects/chess-game',
    description: 'NextJS, React, Firebase, Chess. Four things that looked cool, used them.',
    category: 'tech',
    tags: ['react', 'front-end', 'ts', 'scss', 'open-source', 'nextjs'],
    projectId: '2',
  },
  '3': {
    name: 'WYNK',
    coverPath: 'about',
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
