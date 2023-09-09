---
title: Svelte, The Best Framework?
slug: svelte-the-best-framework
date: 2023-08-12
excerpt: Why I think SvelteKit is the best framework for building websites of any size, and why I think you should use it.
tags:
  - Svelte
  - Web Development
  - SvelteKit
  - JavaScript
  - TypeScript
  - Frontend
  - Framework
  - Opinion
categories:
  - Tech
---

<script>
  import Callout from '$lib/components/base/Callout.svelte';
  import Image from '$lib/components/base/Image.svelte';
</script>

## Svelte, a cool kid

Svelte is a JavaScript framework just like React, Vue, Angular, but it's actually nowhere near them. Svelte, unlike the other frameworks, is a compiler. It compiles your code into vanilla JS, HTML and CSS. This makes it the fastest framework currently, and in my opinion, the future number one framework.

It's relatively new, since it was launched in 2016 and really started picking up in 2019. Version 4 was just released (June 2023) and v5 is already in the works, which will be a rewrite of the compiler and runtime.

## SvelteKit, the best framework

SvelteKit is a meta-framework for svelte, which can be compared to NextJS for React, and NuxtJS for Vue. It's blazing fast, and has a lot of features out of the box, like server side rendering, static site generation, file based routing, typescript support, and much more. It's using Vite under the hood, which you may know, is also blazing fast.

## Why is Svelte so good ?

Below, you can see the results of the State of JS 2022 survey about the most popular front-end frameworks, and especially the most interesting ones. Svelte is the most interesting framework, and it's still going up which as you can see in the graph, is pretty rare.

<div class="iw">
  <div>
    <Image src="/images/blog/svelte-the-best-framework/stateofjs-2022-framework-list.png" alt="State of JS 2022 Survey, Front End Frameworks List" figcaption="Frameworks list" />
  </div>
  <div>
    <Image src="/images/blog/svelte-the-best-framework/stateofjs-2022-framework-interest.png" alt="State of JS 2022 Survey, Front End Frameworks Interest" figcaption="Frameworks interest" />
  </div>
</div>

These images don't look good, please remind me to build my own chart library. (@kesval/charts-svelte?)

So then, why is everyone so hyped about Svelte and SvelteKit? Well, there are a lot of reasons, but I'll try to keep it short for each of them.

### Developer Experience

That's the number one reason I'm using Svelte, it's just so easy to use. I genuinely enjoy writing any sort of code with Svelte, and that's not something I can say about every framework. So what is it ?

It just works. Everything works. Want to have a reactive variable ? Just use it in your code, it works. No `useState`s or anything. For example, this code will work:

```html
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>Click me</button>
<p>You clicked {count} times</p>
```

Want to rerun code when its variable dependencies change ? Just put a `$` in front of the expression, it works. No need to `useEffect` and to understand when it will render and to add every variable to the dependencies, svelte does that for you. In this example, doubled will be updated every time count changes.

```html
<script>
  let count = 0;

  $: doubled = count * 2;
</script>
```

Comparing to React for example, I would say React's way of doing things when a component renders is way overcomplicated. Such things as `useEffect` and `useLayoutEffect` are just confusing, and Svelte solves that with easy to understand lifecycle methods:

- `onMount`
- `beforeUpdate`
- `afterUpdate`
- `onDestroy`

You don't need to be an expert to understand how these works, and that's what I would call a good developer experience.

### Stores

You know how when you have a big application that has plenty of states that need to be shared between components, you need to use a state management library like Redux or MobX ? Well, Svelte has a built-in solution for that, and it's called Stores. It's basically a reactive variable that can be shared between components, and it's really easy to use.

```ts
import { writable } from 'svelte/store';

export const gameState = writable({
  score: 0,
  level: 1,
  lives: 3,
});
```

Now, your `gameState` variable is accessible everywhere you import it, including non Svelte components, and inside a Svelte component, you access it by putting a `$` in front of it, just like that:

```html
<div>
  <p>Lives: {$gameState.lives}</p>
</div>
```

Mind you, this does everything for you. It subscribes to the store, and unsubscribes when the component is destroyed. It also rerenders the component when the store changes, so you don't need to do anything else.

### Conditional Rendering and Loops

Svelte has a specific way of implemeting JavaScript logic, and it's really easy to understand. For example, if you want to render something conditionally, you can just do this:

```html
{#if condition}
  <p>Condition is true</p>
{/if}
```

Same for each loops, you can just do this:

```html
{#each array as item (item.id)} <!-- (item.id) is the key, a way of differentiating items -->
  <p>{item}</p>
{/each}
```

### DOM Manipulation

As you might've seen before in the counter example, on the button we put a `on:click={...}`. This is how every svelte element works, you just put an `on:` in front of the event you want to listen to, and you can even add modifiers, such as `once` or `preventDefault`, like this:

```html
<button on:click|once|preventDefault={doSomethingFunction}>
  Click me
</button>
```

If you need to get values from the DOM, you can also use the `bind:` directive to bind a variable to an element, like this:

```html
<input bind:value={inputValue} />
```

This works with a lot of things, and even with things such as the window, which avoids you to check that the component is mounted before adding an event listener and everything... It works like this:

```html
<svelte:window bind:scrollY={scrollY} />
The current scrollY is {scrollY}
```

### Scoped CSS

I've been working for a company for 2 weeks now, using React daily. And, I have to say, styled-components are really bad compared to Svelte's scoped CSS. And don't get me started on CSS Modules, it's just bad. The only thing that works well with React is TailwindCSS, but I don't think it should be the only solution. Svelte's scoped CSS is just so easy to use, and it's really powerful. You can do things like this:

```html
<header>
  hi this is a header, just like your nav
  or something like that you know
</header>

<!-- We don't need a class, this CSS applies only to the html in the same component! -->
<style>
  header {
    color: red;
  }
</style>
```

### The Documentation

Yeah. It had to be one of the things, I mean, did you ever try to learn React using their documentation ? It's a nightmare. Not to hate on React, it's just that Svelte's documentation is too good. There's a [tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) that explains everything perfectly, and there's also a great [documentation](https://svelte.dev/docs) that explains certains things in more details. I've never been lost when searching for something in the documentation, and that's a first.

## Why is SvelteKit so good ?

### Filesystem Based Routing

Just like NextJS v13 app router, SvelteKit uses a filesytem based routing, prefixed with a `+`. This mean that, for example, if you want to have these routes : `/`, `/about`, `/blog` and a `/blog/[blog-slug]`, you would do it like this:

```text
src
├── routes
│   ├── +page.svelte
│   └── about
│       └── +page.svelte
│   └── blog
│       ├── +page.svelte
│       └── [blog-slug]
│           └── +page.svelte
```

There's all sorts of different pages you can use, and here's a list of them:

- `+page.svelte` : The svelte page that will be rendered to the client
- `+page.(js|ts)` : Any code that you want to run before the page is rendered
- `+page.server.(js|ts)` : Any code that you want to run only the server before the page is rendered
- `+layout.svelte` : The layout that will wrap the current page and every child pages
- `+layout.(js|ts)` : Any code that you want to run before the layout is rendered
- `+layout.server.(js|ts)` : Any code that you want to run only the server before the layout is rendered
- `+error.svelte` : The error page that will be rendered when an error occurs

You can always pass data from one file to another, for example, the data that the `+page.ts` `load` function returns will be accessible in the `+page.svelte` like this:

```html
<script>
  export let data: PageData; // <- Special generated type from the load function, so everything is typesafe!
</script>
```

### TypeScript

If you're not using TypeScript yet, I don't know what you're doing. Svelte has great support for typescript, as everything is carefuly typed and there's also plenty of generated types as you might've seen in the previous example! Let's say this was my `+page.ts` file:

```ts
export const load = () => {
  return {
    title: 'Hello World',
    description: 'This is a description',
  };
};
```

Then, in my `+page.svelte` file, I could do this:

```html
<script>
  import type { PageData } from "./$types";

  export let data: PageData;
</script>
```

And now, `data` has the types of the data that the `load` function returns, without me having to do anything. Isn't that great ?!

### API & Form Handling

So, this is a complicated topic and I won't go into details nor about [form handling](https://learn.svelte.dev/tutorial/the-form-element) nor about [API routes](https://learn.svelte.dev/tutorial/get-handlers), but I wanted to include that in this article because it's a really important feature of SvelteKit.

Basically, every route, even if it is a page (or not) can have an API Handler function, and forms pair with it very well because you can use « actions » to handle form submissions. Also, SvelteKit enhances your API responses but also things such as the `fetch` API. For example, cookie and authorization headers are automatically sent with every request, and also avoids additional requests with every component render.

## Conclusion

Try it. Really, I mean it, just try it. If you don't like it, it's fine, but you shouldn't pass on something as great as Svelte, it's really something to try once at least. If you want some svelte code to look at, you can check out my [Portfolio Code](https://github.com/xKesvaL/kesval.com), just keep in mind that it uses my design system and that it's not using any complicated features of SvelteKit.

I really hope I convinced you to try Svelte(Kit), especially you! Yes, you. You know who you are. Go.