---
title: Adding Types to JSON !?
slug: adding-types-to-json
date: 2023-09-11
excerpt: I just learned you can add types to JSON files. Let me show you how.
tags:
  - JSON
  - Types
  - JavaScript
  - TypeScript
  - Tutorial
  - How To
categories:
  - Tech
---

<script>
</script>

## Typing a JSON file ?!

Yeah. I just learned that you can add types to JSON files.

You can just add a `[jsonFileName].d.json.ts` file to assign a type to a JSON file future imports.

Let's say you have a `config.json` file, you can create a `config.d.json.ts` file and add the following code:

```ts
// config.d.json.ts

import type { Config } from './my/types';

const config: Config;

export default config;
```

And now, you just need to enable the `allowArbitraryExtensions` setting in your `tsconfig.json` file :

```json
{
  "compilerOptions": {
    "allowArbitraryExtensions": true
  }
}
```

## Okay but why ?

It can and will be useful if dealing with JSON files, especially bigger ones. Especially if for some reason you have data stored in JSON files...? I don't know why you would do that but I'm not here to judge.

Performance wise, this means TypeScript does not need to infer the type of all the data in the file and it can speed up the transpilation process by a lot. Which means faster builds, and faster development since most IDEs rely on an active internal TypeScript server.

Me personnally, I did not use JSON files since I was 13 years old, which was 5 years ago, but I thought it was a really cool feature. I hope you did too.

Thank you for reading, and have a nice day. Never stop learning new things guys.

---

If you wonder what the second logo is in the cover image, it's actually the JSON logo. I was really surprised when I saw it was the actual official logo.
