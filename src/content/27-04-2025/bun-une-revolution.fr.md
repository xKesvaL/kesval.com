---
title: Bun, une Révolution
excerpt: Bun est une révolution dans les runtimes JavaScript, et vous vous devez d'être excités. Voici pourquoi.
publishedAt: 2024-04-19
updatedAt: 2024-05-26
tags:
  - Bun
  - JavaScript
  - Runtime
  - Annonce
cover: "./cover.png"
---

## C'est quoi Bun ?

Bun est un tout nouveau runtime pour JavaScript, tout comme NodeJS ou Deno, que vous connaissez peut-être. Maintenant, vous savez peut-être que Deno essaie déjà de résoudre certains des problèmes de NodeJS, mais ce n'est pas suffisant. Bun ne résout pas seulement tous nos problèmes, mais il apporte également de nombreuses nouvelles fonctionnalités.

## Le runtime de Bun et ses fonctionnalités

Bun 1.0 vient de sortir, et c'est la raison de ce post de blog. Sachez que je ne suis pas vraiment quelqu'un qui aime passer aux dernières nouvelles technologies, par exemple, Deno est sorti il y a un moment, mais avant Bun, j'utilisais toujours NodeJS. Vous pouvez me faire confiance quand je dis que Bun n'est pas juste un autre nouveau truc, c'est en fait une révolution.

### C'est quoi le problème avec Node ?

Vous pourriez demander, quel est le problème avec Node ? Oui, ça fonctionne, mais pensez à toutes les dépendances. Votre gestionnaire de paquets, `npm` est très lent, vous passez alors à `pnpm`. Parce que Node n'a pas de watcher, vous utilisez `nodemon` (Oui je sais que Node 21 a un watcher, mais Node se rattrape lentement après des années). Vous avez besoin de variables d'environnement, vous utilisez `dotenv`. Vous avez besoin d'un bundler, donc vous utilisez `esbuild`. Vous construisez une grande application et vous voulez typescript, vous utilisez typescript `tsc`. Vous avez besoin de tests, et installez `vitest`.

Vous y croyez ? Pour un projet normal, vous utiliseriez **6** outils différents, et ce n'est peut-être même pas tout. C'est parce que jusqu'à récemment, Node ne comprenait pas que les gens aimeraient que leurs outils soient directement regroupés.

### Bun à la rescousse

Oui ! Bun est là pour nous sauver de tout cela. Et croyez-moi, ce sera facile. Virtuellement n'importe quelle application peut être exécutée avec bun. Remplacez simplement `node` par `bun`, `npm` par `bun` et c'est tout. Bun 1.0 est compatible avec la plupart des frameworks fullstack populaires, et les frameworks serveur tels qu'Express, Koa ou Hono. Bun est si rapide parce qu'il n'utilise pas le moteur v8, il utilise le noyau JavaScript de Webkit, qui est connu pour être plus rapide que v8. De plus, Bun est écrit en Zig, qui est un langage de bas niveau qui est à peu près aussi rapide que C++.

<!-- ![Fullstack frameworks fonctionnant avec Bun]($assets/blog/bun-a-revolution/frameworks.png 'Liste des frameworks') -->

### Compatibilité ESM & CommonJS

Vous connaissez peut-être la syntaxe require de l'ancienne école, qui se nomme CommonJS et est encore beaucoup utilisée aujourd'hui, mais aussi la nouvelle syntaxe ES Modules, qui est beaucoup plus moderne en utilisant la syntaxe d'importation. Vous avez peut-être rencontré de nombreuses erreurs en essayant d'utiliser les deux dans le même projet, comme en essayant de require Chalk 5 :

```js
const chalk = require('chalk');
// chalk - Error [ERR_REQUIRE_ESM]: require() of ES Module
```

C'est parce que chalk v5 utilise les ES Modules, et vous essayez de l'utiliser avec CommonJS. Oui, je sais, c'est un gâchis. Mais Bun ***résout ce problème***. Oui, vous avez bien entendu, Bun est compatible avec CommonJS et ES Modules, et vous pouvez les utiliser tous les deux dans le même projet. Pour certaines personnes, ce n'est peut-être qu'une autre fonctionnalité, mais pour d'autres, ce sera un sauveur de vie.

### APIs Web

Bun fournit un support pour les APIs Web Standard qui sont disponibles dans les navigateurs, telles que `fetch`, `Request`, `Response`, `WebSocket`, `ReadableStream`...

```js
const res = await fetch('https://fetch.me');
const text = await res.text();
```

Vous n'avez pas besoin d'installer de package, les APIs de Bun sont directement en code natif. Cela signifie que vous n'avez pas besoin d'importer quoi que ce soit, cela fonctionne juste, comme sur le web.

### Rechargement à chaud

**Ce n'est pas juste un rechargement à chaud.** Nodemon redémarre tout le processus lorsqu'un changement est détecté, ce qui est lent et pas très efficace. Bun recharge votre code sans redémarrer le processus, ce qui est beaucoup plus rapide. Cela signifie également que les connexions HTTP et WebSocket ne sont pas fermées lorsque vous rechargez votre code, ce qui est beaucoup plus pratique lorsque vous travaillez sur une application web et que vous testez des choses. Les states ne changent pas.

### APIs natives de Bun

Bun fournit ses propres APIs natives pour des choses telles que l'équivalent de `fs` dans NodeJS. Par exemple, dans Bun, voici comment vous traitez les fichiers :

```js
// Lecture de fichiers
const file = Bun.file('package.json');
const content = await file.text(); // Supporte ArrayBuffer, Blob, JSON...

// Écriture de fichiers
await Bun.write("file.txt", "Hello world!");
await Bun.write("file.txt", Buffer.from("Hello world!"));
await Bun.write("file.txt", Bun.file("other-file.txt"));
await Bun.write("file.txt", await fetch("https://example.com/"));
```

> Bun est dit lire les fichiers 10x plus rapidement que NodeJS, et écrire les fichiers 3x plus rapidement que NodeJS.

Vous pouvez également servir des serveurs HTTP 4x plus rapides avec Bun en utilisant toujours les APIs natives :

```js
Bun.serve({
  port: 1234,
  fetch(req) { /* ... */ },
  tls: { /* ... */ },
  websocket: { /* ... */ }
})
```

### Gestion des paquets de Bun

C'est une partie qui m'excite vraiment. Je passe souvent d'un ordinateur à l'autre pour coder, et je suis sûr que certains d'entre vous aussi. J'avais l'habitude d'avoir un ordinateur portable pourri, et je devais attendre **beaucoup** de temps pour installer des paquets. J'ai basculé vers `pnpm` et c'était un peu plus rapide, mais toujours lent.

Le gestionnaire de paquets de Bun est également appelé en utilisant `bun`, et c'est beaucoup. beaucoup. plus rapide. Je viens de passer sur Linux sur mon nouveau pc portable, j'ai dû réinstaller les paquets pour ce projet, et c'était ultra-rapide. Habituellement, c'est assez lent pour que je regarde une vidéo pendant l'installation des paquets...

<!-- ![Vitesse d'installation de Bun vs les autres]($assets/blog/bun-a-revolution/installing.png 'Installation speeds') -->

### Installez Bun maintenant

Bun est disponible sur Windows, Linux et macOS ! Vous pouvez installer Bun dès maintenant. Exécutez simplement cette commande dans votre terminal :

- Windows
  
  ```bash
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

- Linux / macOS

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Conclusion

Je pense que tout le monde devrait commencer à utiliser Bun dès maintenant. Il n'y a aucune raison de ne pas le faire, cela prend 2 minutes à configurer, et c'est plus rapide. Faites-moi confiance, même pour des choses telles que l'exécution de scripts, les `150ms` gagnées semblent être 10x plus rapides car cela semble instantané et non lentes. Vous pouvez consulter le [site Web de Bun](https://bun.sh/) pour plus d'informations sur Bun.

Merci d'avoir lu, et passez une bonne journée.
  