# Svelte Starter

## Packages

Currently, some personal packages are used :

- `@kesval/design` (design system)
- `@kesval/image` (image optimization)
- `@kesval/image-svelte` (image component)

You should only replace `@kesval/design` with your own design system, and if you wish you could just fork it and change the colors in the `colors.scss` file, and everything would be ready to go.

## Icons

All Icons are from [Tabler Icons](https://tabler-icons.io/). While they do have a package for Svelte, it is very laggy and slow, especially on build time. It even made the use of storybook impossible (or at least would take more than 3 minutes to build) so I decided to use the SVGs directly.
