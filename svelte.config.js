import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const extensions = ['.svelte', '.svx', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions,
      rehypePlugins: [
        rehypeAccessibleEmojis,
        rehypeExternalLinks,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: {
              className: ['heading-link'],
              title: 'Permalink',
              ariaHidden: 'true',
            },
            content: {
              type: 'element',
              tagName: 'span',
              properties: {},
              children: [{ type: 'text', value: '#' }],
            },
          },
        ],
      ],
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $src: './src',
      '$src/*': './src/*',
    },
  },
  extensions,
};

export default config;
