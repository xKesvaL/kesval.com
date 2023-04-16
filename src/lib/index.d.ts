import type { DateTime } from 'luxon';

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

export interface Project {
  name: string;
  id: string;
  coverPath: string;
  language: 'svelte' | 'react' | 'js' | 'ts';
  href: string;
  description: string;
  category: TagPrimary;
  tags: TagSecondary[];
}

export type TagPrimary = 'tech' | 'misc';

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
  | 'scss';

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
  name: string;
}

export interface Skill {
  name: string;
  percentage: number;
  type: SkillType;
}

export type SkillType = 'frontend' | 'backend' | 'other';
