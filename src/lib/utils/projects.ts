import type { Project } from '$lib';

const projectsOrdered: {
  [key: string]: Project;
} = {
  '1': {
    name: 'Portfolio',
    coverPath: '/images/projects/portfolio.png',
    language: 'svelte',
    href: '/projects/portfolio',
    shortDescription:
      'My own website to share my work and my thoughts made with Typescript, SvelteKit, Sass and MDSveX.',
    description:
      "Web identity is important, and I think it's very cool to share things with the world. So I made this website to share my work and my thoughts.",
    category: 'tech',
    tags: ['svelte', 'front-end', 'ts', 'scss', 'personal', 'open-source', 'sveltekit'],
    projectId: '1',
    color: '',
    site: 'https://kesval.com',
    github: 'https://github.com/xKesvaL/kesval.com',
    startDate: '2023-03-19',
  },
  '2': {
    name: 'Chessval',
    coverPath: '/images/about.png',
    language: 'react',
    href: '/projects/chessval',
    shortDescription: 'Play chess with your friends for free.',
    description:
      "In my free time, I like to play chess. So I made this website to play chess with my friends. It's really simple to use, but I won't be adding any new features to it. It's just a fun project to learn react and nextjs.",
    category: 'tech',
    tags: ['react', 'front-end', 'ts', 'tailwind', 'daisyui', 'open-source', 'serverless', 'nextjs'],
    projectId: '2',
    color: '',
    startDate: '2023-04-16',
  },
  '3': {
    name: 'SupaPower',
    coverPath: '/images/about.png',
    language: 'svelte',
    href: '/projects/supapower',
    shortDescription: 'Track your workouts and find a program suited to your needs. ',
    description:
      'I love going to the gym, but finding a good program can be hard or expensive. So I made SupaPower, an open-source app made to to help you track your workouts and create a program suited to your needs.',
    category: 'tech',
    tags: [],
    projectId: '3',
    color: '',
    startDate: '2023-06-1',
    github: 'https://github.com/xKesvaL/lifting.kesval.com',
  },
  '4': {
    name: 'Presentations',
    coverPath: '/images/about.png',
    language: 'svelte',
    href: '/projects/presentations',
    shortDescription: 'PowerPoint is boring. Create interactive presentations using code, you just need Svelte.',
    description:
      "I think presentations can be really cool, but really hard to make. So I made this website to help me make them, using my methods. You can create interactive presentations with it, and it's all code-logic based.",
    category: 'tech',
    tags: [],
    projectId: '4',
    color: '',
    startDate: 'next',
  },
  '5': {
    name: 'Skills',
    coverPath: '/images/about.png',
    language: 'svelte',
    href: '/projects/skills',
    shortDescription: 'This is an app I made for myself, to track my skills and my progress.',
    description:
      "I have a lot of things to learn. Knowledge is scattered on the internet, but I want a place to regroup everything, so I made this app. It allows me to track my skills and my progress, and it's all open-source.",
    category: 'tech',
    tags: [],
    projectId: '5',
    color: '',
    startDate: 'next',
    github: 'https://github.com/xKesvaL/skills.kesval.com',
  },
};

const projects = Object.values(projectsOrdered).reverse();

export { projects };
