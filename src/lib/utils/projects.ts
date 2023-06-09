import type { Project } from '$lib';

const projectsOrdered: {
  [key: string]: Project;
} = {
  '1': {
    name: 'Personal Portfolio',
    coverPath: '/images/projects/personal-portfolio.png',
    language: 'svelte',
    href: '/projects/personal-portfolio',
    shortDescription: 'I made this website to share my work and my thoughts.',
    description:
      "Web identity is important, and I think it's very cool to share things with the world. So I made this website to share my work and my thoughts.",
    category: 'tech',
    tags: ['svelte', 'front-end', 'ts', 'scss', 'personal', 'open-source', 'sveltekit'],
    projectId: '1',
  },
  '2': {
    name: 'Chess @ kesval.com',
    coverPath: '/images/about.png',
    language: 'react',
    href: '/projects/chess-kesval-com',
    shortDescription: 'I wanted to play chess with my friends.',
    description:
      "In my free time, I like to play chess. So I made this website to play chess with my friends. It's really simple to use, but I won't be adding any new features to it. It's just a fun project to learn react and nextjs.",
    category: 'tech',
    tags: ['react', 'front-end', 'ts', 'tailwind', 'daisyui', 'open-source', 'serverless', 'nextjs'],
    projectId: '2',
  },
  '3': {
    name: 'SupaPower',
    coverPath: '/images/about.png',
    language: 'svelte',
    href: '/projects/supapower',
    shortDescription: 'Track your workouts and find a program suited to your needs.',
    description:
      'I love going to the gym, but tracking your workouts and finding a good program can be hard or expensive. So I made SupaPower, a free (for now) and open-source app made to to help you track your workouts and create a program suited to your needs.',
    category: 'tech',
    tags: [],
    projectId: '3',
  },
  '4': {
    name: 'Presentation @ kesval.com',
    coverPath: '/images/about.png',
    language: 'svelte',
    href: '/projects/presentation-kesval-com',
    shortDescription: 'Create interactive presentations with code.',
    description:
      "I think presentations can be really cool, but really hard to make. So I made this website to help me make them, using my methods. You can create interactive presentations with it, and it's all code-logic based.",
    category: 'tech',
    tags: [],
    projectId: '4',
  },
};

const projects = Object.values(projectsOrdered).reverse();

export { projects };
