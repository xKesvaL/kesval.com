---
title: Svelte, the best framework
excerpt: Why Svelte and SvelteKit are the best choices to build the best web applications.
publishedAt: 2024-02-24
updatedAt: 2024-05-10
tags:
  - Svelte
  - Web Development
  - SvelteKit
  - JavaScript
  - TypeScript
  - Frontend
  - Framework
  - Opinion
coverImage: "/blog/svelte-the-best-framework/cover.png"
coverImageAlt: "Svelte logo"
---

## Svelte, a cool kid

Svelte is a JavaScript framework just like React, Vue, Angular, that stands out. Unlike the other frameworks, Svelte is a compiler. It compiles your code into vanilla JavaScript, svelte and CSS while building the website, it's not like react where the website is client-side. This makes it one of the fastest framework currently, and in my opinion, the future number one framework.

It's relatively new, since it was launched in 2016 and really started picking up in 2019. Version 4 was just released (June 2023) and version 5 is already in the works, is a rewrite of the compiler and runtime. I'll soon write an article about the new features of Svelte 5, so stay tuned!

## SvelteKit, a DX like no other

SvelteKit is a meta-framework for svelte, which can be compared to NextJS for React, and NuxtJS for Vue. It's blazing fast, and has a lot of features out of the box, like :

- Server-side rendering (SSR)
- Static site generation (SSG)
- File-based routing
- TypeScript support
- Integration with Vite, another blazing-fast tool

## Why is Svelte so good ?

Below, you can see the results of the State of JS 2022 survey about the most popular front-end frameworks, and especially the most interesting ones. Svelte is the most interesting framework, and it's still going up which as you can see in the graph, is pretty rare.

![State of JS 2022 Survey, Front End Frameworks List]($assets/blog/svelte-the-best-framework/stateofjs-2022-framework-list.png 'Frameworks list')
![State of JS 2022 Survey, Front End Frameworks Interest]($assets/blog/svelte-the-best-framework/stateofjs-2022-framework-interest.png 'Frameworks interest')

So then, why is everyone so hyped about Svelte and SvelteKit? Well, there are a lot of reasons, but I'll try to keep it short for each of them.

### Developer Experience

That's the number one reason I'm using Svelte, it's just so easy to use. I genuinely enjoy writing any sort of code with Svelte, and that's not something I can say about every framework. So what is it ?

- Reactivity is easy, want to have a reactive variable ? Just declare it with a `let`, it works. This is comparable to a `useState` in React, but much simpler. For example, this code will work:

```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>Click me</button>
<p>You clicked {count} times</p>
```

- Dependable updates occur when its variable dependencies change, just put a `$` in front of the expression, it works. Every dependency is automatically tracked, not like in the comparable `useEffect` in react, where the dependency array is manual. In this example, doubled will be updated every time count changes.

```svelte
<script>
  let count = 0;

  $: doubled = count * 2;
</script>
```

- Lifecycle methods are very clear by their names and don't introduce unecessary complexity. Comparing to React for example, I would say React's way of doing things when a component renders is way overcomplicated. Such things as `useEffect` and `useLayoutEffect` for lifecycle methods are just confusing, Svelte has only 4 lifecycle methods:
  - `onMount`
  - `beforeUpdate`
  - `afterUpdate`
  - `onDestroy`

You don't need to be an expert to understand how these works, and that's what I would call a good developer experience.

### Hydration

As I said before, Svelte is a compiler. This means that it compiles your code into vanilla JavaScript, svelte and CSS. The only client-side code that is shipped is to hydrate what is dynamic, and that's it. Since it's fine-grained, this means things such as `useMemo` or `useCallback` are not needed, because Svelte only updates what needs to be updated.

### Stores

When you have a big application, you usually have plenty of states that need to be shared between components, and you often use a state management library like Redux or MobX. Svelte has a built-in solution for that, and it's called Svelte Stores. It's basically a reactive variable that can be shared between components, and is really easy to use.

`game.ts`

```ts
import { writable } from 'svelte/store';

export const gameState = writable({
  score: 0,
  level: 1,
  lives: 3,
});
```

Now, your `gameState` variable is accessible everywhere you import it, including non Svelte components, and inside a Svelte component, you access it by putting a `$` in front of it, just like that:

```svelte
<div>
  <p>Lives: {$gameState.lives}</p>
</div>

<button on:click={$gameState.lives--}>
  Kill me
</button>
```

Mind you, this does everything for you. It subscribes to the store, and unsubscribes when the component is destroyed. It also rerenders the component when the store changes, so you don't need to do anything else.

### Conditional Rendering and Loops

Svelte has a specific way of implemeting JavaScript logic, and it's really easy to understand, because it's similar to plain JavaScript. For example, if you want to render something conditionally, you would do this:

```svelte
{#if condition}
  <p>Condition is true</p>
{/if}
```

Same for "each" loops, you can just do this:

```svelte
{#each array as item (item.id)} <!-- (item.id) is the key, a way of differentiating items -->
  <p>{item}</p>
{/each}
```

### DOM Manipulation

As you might've seen before in the counter example, on the button we put a `on:click={...}`. This is how every svelte element works, you put an `on:` in front of the event you want to listen to, and you can even add modifiers, such as `once` or `preventDefault`, like this:

```svelte
<button on:click|once|preventDefault={doSomethingFunction}>
  Click me
</button>
```

If you need to get values from the DOM, you can also use the `bind:` directive to bind a variable to an element, like this:

```svelte
<input bind:value={inputValue} />
```

Or even bind an entire element, like this:

```svelte
<input bind:this={myInputVariable} />
```

This works with a lot of things, and even with things such as the window, which avoids you to check that the component is mounted before adding an event listener and everything... It works like this:

```svelte
<svelte:window bind:scrollY={scrollY} />
The current scrollY is {scrollY}
```

### Scoped CSS

I've been working for a company for 9 months now, using React daily. And, I have to say, CSS in JS is really bad compared to Svelte's scoped CSS. And don't get me started on CSS Modules. The only thing that works well with React is TailwindCSS, but I don't think it should be the only solution, I like to use both together. Svelte's scoped CSS is just so easy to use, and it's really powerful. You can do things like this:

```svelte
<header>
  hi this is a header
</header>

<!-- We don't need a class, this CSS applies only to the svelte in the same component! -->
<style>
  header {
    color: red;
  }
</style>
```

### The Documentation

Yeah. It had to be one of the things, I mean, did you ever try to learn React using their documentation ? It's a nightmare, the API docs are fine but every tutorial is not good. Not to hate on React, it's just that Svelte's documentation is too good. There's a [tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) that explains everything perfectly, and there's also a great [documentation](https://svelte.dev/docs) that explains certains things in more details. I've never been lost when searching for something in the documentation, ever.

## Why is SvelteKit so good ?

SvelteKit is, to me, maybe just after Nuxt, the best meta-framework that exists out there. It has basically everything you want, ranging from basic things like file based routing and form handling to more advanced things like shallow routing.

### Filesystem Based Routing

Just like the NextJS App Router, SvelteKit uses a filesytem based routing, prefixed with a `+`. This mean that, for example, if you want to have these routes : `/`, `/about`, `/blog` and a `/blog/[slug]`, you would do it like this:

```text
src
├── routes
│   ├── +page.svelte
│   └── about
│       └── +page.svelte
│   └── blog
│       ├── +page.svelte
│       └── [slug]
│           └── +page.svelte
```

There's all sorts of different pages you can use, and here's a list of them:

- `+page.svelte` : The svelte page that will be rendered to the client
- `+page.(js|ts)` : Any code that you want to run on the client & server before the page is rendered
- `+page.server.(js|ts)` : Any code that you want to run only on the server before the page is rendered
- `+layout.svelte` : The layout that will wrap the current page and every child pages
- `+layout.(js|ts)` : Any code that you want to run on the client & server before the layout is rendered
- `+layout.server.(js|ts)` : Any code that you want to run only on the server before the layout is rendered
- `+error.svelte` : The error page that will be rendered when an error occurs

### TypeScript Support

If you're not using TypeScript yet, you really should because Svelte has incredible support for typescript, as everything is carefuly typed and there's also plenty of useful generated types! Let's say this was my `+page.ts` file:

```ts
export const load = () => {
  return {
    title: 'Hello World',
    description: 'This is a description',
  };
};
```

Then, in my `+page.svelte` file, I could do this:

```svelte
<script>
  import type { PageData } from "./$types";

  export let data: PageData;
</script>
```

And now, `data` has the types of the data inferred from what the `load` function returns, without me having to do anything. Isn't that great ?!

### Form Handling

Form handling in SvelteKit is great thanks to the SvelteKit actions and [SvelteKit Superforms](https://superforms.rocks) which handles forms with client-side validation and server-side validation with your favorite schema validation library (Zod, Yup, ...).

Actions make forms enhanced and getting data from them is easy :

`+page.svelte`

```svelte
<script>
  import { enhance } from '$app/forms';
</script>

<form use:enhance>
  ...
</form>
```

`+page.server.ts`

```ts
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    // ...
  }
}
```

## Conclusion

Try it. Really, I mean it, just try it. If you don't like it, it's fine, but you shouldn't pass on something as great as Svelte(Kit), it's really something to try once at least. If you want some svelte code to look at, you can check out my [Portfolio Code](https://github.com/xKesvaL/kesval.com), just keep in mind that it's not using any complicated features of SvelteKit.

I really hope I convinced you to try Svelte(Kit), especially you! Yes, you. Go.

## Worries

Are you worried about something in Svelte/SvelteKit ? Please leave it in the comments and I'll answer objectively!
