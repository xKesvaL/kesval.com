---
title: Bun, A Revolution
slug: bun-a-revolution
date: 2023-09-09
excerpt: Bun is a Revolution in JavaScript runtimes, and you should be excited. Here's why.
tags:
  - Bun
  - Runtime
  - JavaScript
  - TypeScript
  - Backend
  - Opinion
  - New Release
  - Announcement
  - Node.js
  - Deno
categories:
  - Tech
---

<script>
  import Callout from '$lib/components/base/Callout.svelte';
  import Image from '$lib/components/base/Image.svelte';
</script>


## What's Bun ?

Bun is a fresh out of the oven new runtime for JavaScript, just like NodeJS or Deno, you might know them. Now, you might know Deno already tries to solve some of the problems NodeJS has, but it's not enough. Bun not only solves all of our problems, but it also brings a lot of new features to the table.

## Bun's runtime and its features

<Callout>
  Bun v1.0 is only available on Linux, macOS and WSL. Windows support is coming soon.
</Callout>

Bun 1.0 just dropped, and it's the reason for this blog post. I'm not really a guy that likes to switch to shiny new things, for example, Deno is out for a while now, but before Bun I was still using NodeJS. So you can trust me when I say that Bun's not just another shiny new thing, it's actually a revolution.

### What's the problem with Node ?

You might ask, what's the problem with Node ? It works dude! Yes it does work, but think of all the things you're using with node. Your package manager, which is often not `npm` since it's very slow. So you switched to let's say `pnpm`. Your runtime, because node doesn't have a watch feature you use `nodemon`. Now you need environment variables, so you use `dotenv`. But who cares about vanilla JavaScript anymore ? You need a bundler, so you use let's say `esbuild`. Now you're refined and you would like types in your app, you use typescript `tsc`. Finally, you want tests, and you use `vitest`.

Can you believe that ? For a normal project you would use **<u style="color: var(--danger-700);">6</u>** different tools, and that might not even be all of them. That's because until recently, Node didn't understand people would actually like their tools to be bundled directly. 

### Bun to the rescue

Yes! Bun is here to save us from all of this. And trust me, it will be easy. Virtually any application can just be run with bun. Just replace `node` with `bun`, 
`npm` with `bun` and that's it. Bun 1.0 is compatible with most of the popular fullstack frameworks, and server frameworks such as Express, Koa or Hono. Bun is so fast because it doesn't use the v8 engine, it uses the JavaScript core from Webkit, which is known to be faster than v8. Also, Bun is written in Zig, which is a low-level language that is roughly as fast as C++.

<div class="iw">
  <div>
    <Image
      src="/images/blog/bun-a-revolution/frameworks.png"
      alt="Fullstack frameworks working with Bun"
      figcaption="Fullstack frameworks working with Bun"
    />
  </div>
</div>

### ESM & CommonJS compatibility

You might know the old school require syntax, which is CommonJS and is still used a lot today, but also the new ES Modules syntax, which is a lot more modern using the import syntax. You might've ran into plenty of errors when trying to use both in the same project, such as trying to require Chalk 5 :

```js
const chalk = require('chalk');
// chalk - Error [ERR_REQUIRE_ESM]: require() of ES Module
```

That's because chalk v5 uses ES Modules, and you're trying to use it with CommonJS. Yeah I know, it's a mess. But Bun ***solves this problem***. Yes, you heard it right, Bun is compatible with both CommonJS and ES Modules, and you can use them both in the same project. For some people, this might be just another feature, but for some others, this will be a life saver.

### Web APIs

Bun provides support for the Web Standard APIs that are availab le in browsers, such as `fetch`, `Request`, `Response`, `WebSocket`, `ReadableStream`...

```js
const res = await fetch('https://fetch.me');
const text = await res.text();
```

You don't need to install any package, Bun's APIs are in native code directly. This means you don't need to import anything it just works, like on the web.

### Hot reloading

Yeah yeah I don't need to use nodemon blabla I know. ***<u>It's not just that.</u>*** Bun's hot reloading is a lot more powerful than nodemon. Nodemon restarts the whole process when a change is detected, which is slow and not very efficient. Bun reloads your code without restarting the process, which is a lot faster. This also means that HTTP and WebSocket connections are not closed when you reload your code, which is a lot more convenient when you're working on a web app and testing things. State doesn´t change.

### Bun's native APIs

Bun provides its own native APIs for thing such as the equivalent of `fs` in NodeJS. For example, in Bun, this is how you treat files :
```js
// Reading files
const file = Bun.file('package.json');
const content = await file.text(); // Supports ArrayBuffer, Blob, JSON...

// Writing files
await Bun.write("file.txt", "Hello world!");
await Bun.write("file.txt", Buffer.from("Hello world!"));
await Bun.write("file.txt", Bun.file("other-file.txt"));
await Bun.write("file.txt", await fetch("https://example.com/"));
```

<Callout>
  Bun is said to read files 10x faster than NodeJS, and write files 3x faster than NodeJS.
</Callout>

You can also serve 4x faster HTTP servers with Bun still using the native APIs: 

```js
Bun.serve({
  port: 1234,
  fetch(req) { /* ... */ },
  tls: { /* ... */ },
  websocket: { /* ... */ }
})
```

## Bun's package managing

This is a part I'm really excited about. I often switch between computers to code, and I'm sure some you do too. I often use Github Codespaces since I work on school computers where I don't have admin rights, and trust me when installing packages become a daily occurence, it's a pain how slow `npm` is. I very recently switched to `pnpm` where I saw an improvement, but it's still not enough.

Bun's package manager is also called using `bun`, and it's so. much. faster. I just switched to a Windows/Linux dual boot to use Bun and I had to reinstall packages for this project, and it was lightning-fast. Usually it's slow enough that I just watch a video while installing packages...

<div class="iw">
  <div>
    <Image
      src="/images/blog/bun-a-revolution/installing.png"
      alt="Installing speeds with Bun vs other package managers"
      figcaption="Benchmarked by installing the dependencies for a starter Remix project."
    />
  </div>
</div>

## Install Bun Now

Sorry, if you're on Windows, you'll have to wait a bit. The Windows build is currently experimental and only the runtime is supported, I would recommend you to wait for the full stable release. But if you're on Linux or macOS, you can install Bun right now. Just run this command in your terminal :

```bash
npm install -g bun
```

## Conclusion

I think everyone should start using Bun right now. There's no reason not to, it takes 2 minutes to setup, and it's faster. Trust me, even for things such as running scripts, the `150ms` gained feel like it's 10x faster because it feels instant and not laggy. You can check out the [Bun Website](https://bun.sh/) for more information about Bun.

Thanks for reading, and see you in the next one!