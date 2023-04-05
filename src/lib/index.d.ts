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
}
