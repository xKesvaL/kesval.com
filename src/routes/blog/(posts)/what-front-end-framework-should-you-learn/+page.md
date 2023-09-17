---
title: What front-end framework should you learn?
slug: what-front-end-framework-should-you-learn
date: 2023-09-17
excerpt: There are so many front-end frameworks out there, which one should you learn? I'll give you my opinion on the matter.
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
  - Frontend
  - 2023
  - Opinion
categories:
  - Opinion
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

We'll be looking at the results of the [JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark) on Chrome 117 - OSX and take the average geometric mean of the results of the different tests. This means that this is not an opinion, but a fact, the results are based on the tests and the numbers.

Here are the results, the closer to 1 (1 = vanilla) the better :

| Framework | Score                             | Version | Rank                          |
| --------- | --------------------------------- | ------- | ----------------------------- |
| Vanilla   | <b style="--dgstr: 0">1</b>       | 0       | <b style="--dgstr: 0">0</b>   |
| Solid     | <b style="--dgstr: 0">1.16</b>    | 1.7.8   | <b style="--dgstr: 0">1</b>   |
| Inferno   | <b style="--dgstr: 0.1">1.22</b>  | 8.2.2   | <b style="--dgstr: 0.1">2</b> |
| Svelte    | <b style="--dgstr: 0.2">1.25</b>  | 4.0.0   | <b style="--dgstr: 0.2">3</b> |
| Lit       | <b style="--dgstr: 0.3">1.27</b>  | 2.6.1   | <b style="--dgstr: 0.3">4</b> |
| Vue       | <b style="--dgstr: 0.7">1.48</b>  | 3.3.4   | <b style="--dgstr: 0.7">5</b> |
| React     | <b style="--dgstr: 1">1.98</b>    | 18.2.0  | <b style="--dgstr: 1">6</b>   |
| Angular   | <b style="--dgstr: 1.5">2.11</b>  | 16.2.0  | <b style="--dgstr: 1.5">7</b> |

I will try to update this table as often as possible for major releases of said frameworks.

## Developer experience

One really important thing to consider, in my opinion, is the developer experience. Personnally, if the DX (Developer Experience) is bad, I won't use the framework at all for my personal projects. This is how I rank the frameworks in terms of DX :

<b style="--dgstr: 0">1</b> &nbsp;Svelte
<br />
<b style="--dgstr: 0.1">2</b> &nbsp;Solid
<br />
<b style="--dgstr: 0.2">3</b> &nbsp;React
<br />
<b style="--dgstr: 0.3">4</b> &nbsp;Vue
<br />
<b style="--dgstr: 0.7">5</b> &nbsp;Lit
<br />
<b style="--dgstr: 1">6</b> &nbsp;Angular
<br />
<b style="--dgstr: 1.5">7</b> &nbsp;Inferno


### Ecosystem

Well, the ecosystem is a big part of the developer experience, if the framework has a big ecosystem, it will be easier to find help, libraries, etc. Here's my opinion on the ecosystem ranking of the frameworks :

<b style="--dgstr: 0">0</b> &nbsp;Lit
<br />
<b style="--dgstr: 0.1">1</b> &nbsp;React
<br />
<b style="--dgstr: 0.2">2</b> &nbsp;Vue
<br />
<b style="--dgstr: 0.3">3</b> &nbsp;Svelte
<br />
<b style="--dgstr: 0.7">4</b> &nbsp;Angular
<br />
<b style="--dgstr: 1">5</b> &nbsp;Solid
<br />
<b style="--dgstr: 1.5">6</b> &nbsp;Inferno

Notice that Svelte is really high, in 3rd place, even though it's a new framework. Why ? Well, it's because it's really easy to use vanilla JS libraries with Svelte, so basically, anything that would be like `[library]-react` or `[library]-vue`, you can use the original `[library]` with Svelte. This is a big plus for Svelte.

Lit is in position 0 because it can work the same as Svelte does, with vanilla JS, but the rest of the tools I do not consider to be in the ecosystem. Altough it has plenty of tools, I would not call it an ecosystem since most tools are provided by Google directly (the authors), and it's not really a community.

### Learning curve

Well, this is quite related to our title, which framework should you learn ? The learning curve is a big part of the decision, let's see how the frameworks rank in terms of learning curve, in my opinion (from easiest to hardest) :

<b style="--dgstr: 0">1</b> &nbsp;React
<br />
<b style="--dgstr: 0.1">2</b> &nbsp;Solid
<br />
<b style="--dgstr: 0.2">3</b> &nbsp;Svelte
<br />
<b style="--dgstr: 0.3">4</b> &nbsp;Vue
<br />
<b style="--dgstr: 0.7">5</b> &nbsp;Lit
<br />
<b style="--dgstr: 1">6</b> &nbsp;Inferno
<br />
<b style="--dgstr: 1.5">7</b> &nbsp;Angular

Since React is the most popular framework, it's really easy to find tutorials, courses or any type of help on the internet. Since Solid is really close to React, it's not hard to learn either. Then Svelte, which, altough is very different from all the other frameworks here, is really easy to learn especially because of the [Svelte Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) which is probably the best piece of documentation I've ever seen.

## Job market

Clearly, if you want to get a job, this is one thing you should consider. Here's my ranking of the frameworks in terms of job market (from best to worst) after doing my research :

<b style="--dgstr: 0">1</b> &nbsp;React
<br />
<b style="--dgstr: 0.1">2</b> &nbsp;Angular
<br />
<b style="--dgstr: 0.2">3</b> &nbsp;Vue
<br />
<b style="--dgstr: 0.3">4</b> &nbsp;Svelte
<br />
<b style="--dgstr: 0.7">5</b> &nbsp;Lit
<br />
<b style="--dgstr: 1">6</b> &nbsp;Solid
<br />
<b style="--dgstr: 1.5">7</b> &nbsp;Inferno

Now altough Solid and Inferno are placed 6th and 7th, they are very close to React, so if you know one of these, you might be able to get a job with React.

## TypeScript support

I can't code anymore without typescript so, when I choose a framework, I pay a lot of attention to the TypeScript support. Here's my ranking of the frameworks in terms of TypeScript support (from best to worst) :

<b style="--dgstr: 0">1</b> &nbsp;Svelte
<br />
<b style="--dgstr: 0.1">2</b> &nbsp;Angular
<br />
<b style="--dgstr: 0.2">3</b> &nbsp;Lit
<br />
<b style="--dgstr: 0.3">4</b> &nbsp;React
<br />
<b style="--dgstr: 0.7">5</b> &nbsp;Inferno
<br />
<b style="--dgstr: 1">6</b> &nbsp;Vue
<br />
<b style="--dgstr: 1.5">7</b> &nbsp;Solid

## Conclusion

After all we've said, this is the average ranking I've given to each framework - rank (avg score) :

<b style="--dgstr: 0">1 (1.99)</b> &nbsp;React
<br />
<b style="--dgstr: 0.1">2 (2.20)</b> &nbsp;Svelte
<br />
<b style="--dgstr: 0.2">3 (3.37)</b> &nbsp;Lit
<br />
<b style="--dgstr: 0.3">4 (3.41)</b> &nbsp;Vue
<br />
<b style="--dgstr: 0.7">5 (3.85)</b> &nbsp;Angular
<br />
<b style="--dgstr: 1">6 (3.86)</b> &nbsp;Solid
<br />
<b style="--dgstr: 1.5">7 (5.37)</b> &nbsp;Inferno

Thanks for reading, I hope this helped you choose a framework, if you have any questions, feel free to ask them to me! You can find my socials in the footer of this website.
