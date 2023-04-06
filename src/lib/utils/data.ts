import type { Project } from '$lib';

export const email = 'contact@kesval.com';

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
