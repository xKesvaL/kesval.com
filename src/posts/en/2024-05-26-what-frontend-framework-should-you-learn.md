---
title: What front-end framework should you learn?
excerpt: There are so many front-end frameworks out there, which one should you learn?
publishedAt: 2024-05-26
updatedAt: 2024-05-26
tags:
  - Frameworks
  - Web Development
  - Front-End
  - Frontend
  - Svelte
  - SolidJS
  - Inferno
  - React
  - Vue
  - Angular
  - Lit
  - JavaScript
  - TypeScript
  - 2024
  - Opinion
coverImage: "/blog/what-frontend-framework-should-you-learn/cover.png"
coverImageAlt: "An image showing the logos of the frameworks"
---

## A quick look at the frameworks

Here's a quick look at the frameworks I'll be talking about, these are the ones I've heard of the most and they are not in any particular order :

- [Svelte](https://svelte.dev/)
- [SolidJS](https://solidjs.com/)
- [Inferno](https://infernojs.org/)
- [React](https://react.dev/)
- [Vue](https://vuejs.org/)
- [Angular](https://angular.io/)
- [Lit](https://lit.dev/)

### Which one should you learn ?

We're gonna go over some of the key points you should consider when choosing a framework, and we'll see how each framework does in each of these points.

## Performance

This is a big one, performance is a key factor in the user experience, since people today care a lot about speed. More than half of your visitors will go away if your website takes more than **3 to 5 seconds** to load. It's also a key factor in the developer experience, a slow framework will make you lose time.

We'll be looking at the results of the [JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark) on Chrome 125 - OSX and take the average geometric mean of the results of the different tests. This means that this is not an opinion, but a fact, the results are based on the tests and the numbers.

Here are the results, the closer to 1 (1 = vanilla) the better :

| Framework | Score | Version | Rank |
| --------- | ----- | ------- | ---- |
| Vanilla   | 1     | 0       | 0    |
| Svelte 5  | 1.37  | 5.0.0   | 1    |
| Solid     | 1.60  | 1.8.15  | 2    |
| Inferno   | 1.73  | 8.2.2   | 3    |
| Lit       | 1.81  | 3.0.0   | 4    |
| Vue-Vapor | 2.14  | 3.2024  | 5    |
| Vue       | 3.95  | 3.4.23  | 6    |
| Angular   | 7.27  | 17.3.1  | 7    |
| React     | 7.60  | 18.2.0  | 8    |

I will try to update this table as often as possible for major releases of said frameworks.

## Developer experience

One really important thing to consider, in my opinion, is the developer experience. Personnally, if the DX (Developer Experience) is bad, I won't use the framework at all for my personal projects. This is how I rank the frameworks in terms of DX :

1. Svelte
2. Vue
3. Solid
4. React
5. Lit
6. Angular
7. Inferno

### Ecosystem

Well, the ecosystem is a big part of the developer experience, if the framework has a big ecosystem, it will be easier to find help, libraries, etc. Here's my opinion on the ecosystem ranking of the frameworks :

0. Lit
1. React
2. Vue
3. Svelte
4. Angular
5. Solid
6. Inferno

Notice that Svelte is really high, in 3rd place, even though it's a new framework. Why ? Well, it's because it's really easy to use vanilla JS libraries with Svelte, so basically, anything that would be like `[library]-react` or `[library]-vue`, you can use the original `[library]` with Svelte. This is a big plus for Svelte.

Lit is in position 0 because it can work the same as Svelte does, with vanilla JS, but the rest of the tools I do not consider to be in the ecosystem. Altough it has plenty of tools, I would not call it an ecosystem since most tools are provided by Google directly (the authors), and it's not really a community.

### Learning curve

Well, this is quite related to our title, which framework should you learn ? The learning curve is a big part of the decision, let's see how the frameworks rank in terms of learning curve, in my opinion (from easiest to hardest) :

1. React
2. Solid
3. Svelte
4. Vue
5. Lit
6. Inferno
7. Angular

Since React is the most popular framework, it's really easy to find tutorials, courses or any type of help on the internet. Since Solid is really close to React, it's not hard to learn either. Then Svelte, which, altough is very different from all the other frameworks here, is really easy to learn especially because of the [Svelte Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) which is probably the best piece of documentation I've ever seen.

## Job market

Clearly, if you want to get a job, this is one thing you should consider. Here's my ranking of the frameworks in terms of job market (from best to worst) after doing my research :

1. React
2. Angular
3. Vue
4. Svelte
5. Lit
6. Solid
7. Inferno

Now altough Solid and Inferno are placed 6th and 7th, they are very close to React, so if you know one of these, you might be able to get a job with React. Lit is placed 5th because it's a Google framework, and Google is a big company, but it's not as popular elsewhere.

## TypeScript support

I can't code anymore without typescript so, when I choose a framework, I pay a lot of attention to the TypeScript support. Here's my ranking of the frameworks in terms of TypeScript support (from best to worst) :

1. Svelte
2. Angular
3. React
4. Vue
5. Solid
6. Inferno
7. Lit

## Conclusion

After all we've said, this is the average ranking I've given to each framework - rank (avg score) :

1. (2.17) Svelte
2. (2.83) React
3. (3.33) Vue
4. (3.83) Solid
5. (4.33) Lit
6. (4.5) Angular
7. (5.83) Inferno

Thanks for reading, I hope this helped you choose a framework, if you have any questions, feel free to ask them to me in the comments below!
