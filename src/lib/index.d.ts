export interface SRCSet {
  avif: string;
  webp: string;
  png: string;
}

export type ChatBotAnswers =
  | 'first'
  | 'looking'
  | 'hire'
  | 'other'
  | 'confirmHire'
  | 'teachMe'
  | 'teachHTMLCSS'
  | 'teachJS'
  | 'teachSvelte';

export type Projects = {
  [id: string]: Project;
};

export interface Project {
  name: string;
  coverPath: string;
  projectId: string;
  language: 'svelte' | 'react' | 'js' | 'ts';
  href: string;
  shortDescription: string;
  description: string;
  category: TagPrimary;
  tags: TagSecondary[];
}

export type TagPrimary = 'tech' | 'misc';
// !!!
// !!! hey if you change this, change it in src\lib\utils\data.ts too
// !!!
export type TagSecondary =
  | 'svelte'
  | 'react'
  | 'js'
  | 'ts'
  | 'front-end'
  | 'back-end'
  | 'mobile'
  | 'desktop'
  | 'open-source'
  | 'css'
  | 'guide'
  | 'html'
  | 'personal'
  | 'review'
  | 'games'
  | 'scss'
  | 'nextjs'
  | 'sveltekit'
  | 'serverless'
  | 'tailwind'
  | 'daisyui';

export interface Company {
  name: string;
  slugName: string;
  timeframe: string;
  position: string;
  current: boolean;
  location: string;
  description: string;
  tags: CompanyTag[];
}

export interface CompanyTag {
  color: 'primary' | 'secondary' | 'tertiary';
  name: TagSecondary;
}

export interface Skill {
  name: string;
  percentage: number;
  type: SkillType;
}

export type SkillType = 'frontend' | 'backend' | 'other';

export interface Post {
  title: string;
  tags: TagSecondary[];
  hidden: boolean;
  date: string;
  html?: string;
  readingTime: string;
  relatedPosts: Post[];
  slug: string;
  categories: TagPrimary[];
}
