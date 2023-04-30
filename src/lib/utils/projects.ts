const projectsOrdered = {
  '1': {
    name: 'Personal Portfolio',
    coverPath: 'projects/personal-portfolio',
    language: 'svelte',
    href: '/projects/personal-portfolio',
    description: 'This was my first true project using Svelte. I wanted to create something for me and show my skills.',
    category: 'tech',
    tags: ['svelte', 'front-end', 'ts', 'scss', 'personal', 'open-source'],
    projectId: '1',
  },
  '2': {
    name: 'Chess Game',
    coverPath: 'about',
    language: 'react',
    href: '/projects/chess-game',
    description: 'My first project using React. I love chess and I wanted to recreate the game in a slick looking way.',
    category: 'tech',
    tags: ['react', 'front-end', 'ts', 'scss', 'open-source'],
    projectId: '2',
  },
};

const projects = Object.values(projectsOrdered).reverse();

export { projects };
