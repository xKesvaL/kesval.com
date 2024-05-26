---
title: Svelte, le meilleur framework
excerpt: Pourquoi Svelte et SvelteKit sont les meilleurs choix pour construire les meilleures applications web.
publishedAt: 2024-02-24
updatedAt: 2024-05-10
tags:
  - Svelte
  - Développement Web
  - SvelteKit
  - JavaScript
  - TypeScript
  - Frontend
  - Framework
  - Opinion
coverImage: "/blog/svelte-the-best-framework/cover.png"
coverImageAlt: "Logo Svelte"
---

## Svelte, le petit nouveau

Svelte est un framework JavaScript au même titre que React, Vue, Angular, qui se démarque. Contrairement aux autres frameworks, Svelte est un compilateur. Il compile votre code en JavaScript pur, Svelte et CSS lors de la construction du site Web, pas comme React où le site entier est côté client. Cela en fait l’un des frameworks les plus rapides actuellement et, à mon avis, le futur framework numéro un.

Il est relativement nouveau, puisqu'il a été lancé en 2016 et a vraiment commencé à prendre de l'ampleur en 2019. La version 4 vient de sortir (juin 2023) et la version 5 est déjà en préparation, et est une réécriture du compilateur et du runtime. J'écrirai bientôt un article sur les nouvelles fonctionnalités de Svelte 5, alors restez connectés !

## SvelteKit, une DX pas comme les autres

SvelteKit est un méta-framework pour svelte, qui peut être comparé à NextJS pour React et NuxtJS pour Vue. Il est extrêmement rapide et possède de nombreuses fonctionnalités prêtes à l'emploi, telles que :

- Rendu côté serveur (SSR)
- Génération de sites statiques (SSG)
- Routage basé sur des fichiers
- Très bonne prise en charge de TypeScript
- Intégration avec Vite, un autre outil ultra-rapide

## Pourquoi Svelte est-il si bon ?

Ci-dessous, vous pouvez consulter les résultats du sondage "State of JS 2022" sur les frameworks front-end les plus populaires, et surtout les plus intéressants. Svelte est le framework le plus intéressant, et il continue à progresser, ce qui, comme vous pouvez le voir sur le graphique, est assez rare.

![Sondage "State of JS 2022", liste des frameworks front-end]($assets/blog/svelte-the-best-framework/stateofjs-2022-framework-list.png 'Liste des frameworks')
![Sondage "State of JS 2022", intérêt pour les frameworks front-end]($assets/blog/svelte-the-best-framework/stateofjs-2022-framework-interest.png 'Intérêt pour les frameworks')

Alors, pourquoi tout le monde est-il si enthousiasmé par Svelte et SvelteKit ? Eh bien, il y a de nombreuses raisons, mais je vais essayer d'être bref pour chacune d'elles.

### Expérience Développeur (DX)

C'est la principale raison pour laquelle j'utilise Svelte, c'est tellement facile à utiliser. J'aime vraiment écrire n'importe quel type de code avec Svelte, et ce n'est pas quelque chose que je peux dire à propos de tous les frameworks. Alors c'est quoi ?

- La réactivité c'est facile, envie d'avoir une variable réactive ? Déclarez-le simplement avec un « let », et ça fonctionne. C'est comparable à un « useState » dans React, mais beaucoup plus simple. Par exemple, ce code fonctionnera :

```svelte
<script>
   let count = 0;
</script>

<button on:click={() => count += 1}>Cliquez ici</button>
<p>Vous avez cliqué {count} fois</p>
```

- Des mises à jour qui se produisent lorsque les dépendances changent ? Il suffit de mettre un `$` devant l'expression, cela fonctionne. Chaque dépendance est automatiquement suivie, pas comme dans le « useEffect » comparable de React, où le tableau de dépendances est manuel. Dans cet exemple, `double` sera mis à jour à chaque fois que le nombre change.

```svelte
<script>
   let count = 0;

   $: double = count * 2;
</script>
```

- Les méthodes de cycle de vie sont très claires par leur nom et n'introduisent pas de complexité inutile. En comparant à React par exemple, je dirais que la façon de faire de React lorsqu'un composant est rendu est bien trop compliquée. Des éléments tels que « useEffect » et « useLayoutEffect » pour les méthodes de cycle de vie prêtent à confusion, tandis que Svelte n'a que 4 méthodes de cycle de vie :
  - `onMount`
  - `beforeUpdate`
  - `afterUpdate`
  - `onDestroy`

Vous n'avez pas besoin d'être un expert pour comprendre comment elles fonctionnent, et c'est ce que j'appellerais une bonne expérience développeur.

### Hydratation

Comme je l'ai déjà dit, Svelte est un compilateur. Cela signifie qu'il compile votre code en JavaScript pur, Svelte et CSS. Le seul code côté client fourni est destiné à hydrater ce qui est dynamique, et c'est tout. Comme les mis à jours sont faites au grain fin, cela signifie que des éléments tels que « useMemo » ou « useCallback » ne sont pas nécessaires, car Svelte ne met à jour que ce qui doit être mis à jour.

### Stores

Lorsque vous avez une grosse application, vous avez généralement de nombreux states qui doivent être partagés entre les composants, et vous utilisez souvent une bibliothèque de gestion de states comme Redux ou MobX. Svelte propose une solution intégrée pour cela, appelée les Stores Svelte. Il s'agit essentiellement d'une variable réactive qui peut être partagée entre les composants et qui est très facile à utiliser.

`game.ts`

```ts
import { writable } from 'svelte/store';

export const gameState = writable({
   score: 0,
   level: 1,
   lives: 3,
});
```

Désormais, votre variable `gameState` est accessible partout où vous l'importez, y compris les composants non Svelte, et à l'intérieur d'un composant Svelte, vous y accédez en mettant un `$` devant elle, juste comme ça :

```svelte
<div>
   <p>Vies : {$gameState.lives}</p>
</div>

<button on:click={$gameState.lives--}>
   Tue-moi
</button>
```

Remarque, cela fait tout pour vous. Il s'abonne au store, et se désabonne lorsque le composant est détruit. Il mets également à jour le composant lorsque le store change, vous n'avez donc rien d'autre à faire.

### Rendu conditionnel et boucles

Svelte a une manière spécifique d'implémenter la logique JavaScript, et c'est vraiment facile à comprendre. Par exemple, si vous souhaitez rendre quelque chose de manière conditionnelle, vous pouvez simplement faire ceci :

```svelte
{#if condition}
   <p>La condition est vraie</p>
{/if}
```

Idem pour un foreach, vous pouvez simplement faire ceci :

```svelte
{#each array as item (item.id)} <!-- (item.id) est la clé, un moyen de différencier les éléments -->
   <p>{item}</p>
{/each}
```

### Manipulation du DOM

Comme vous l'avez peut-être déjà vu dans l'exemple plus haut, sur le bouton, nous mettons un `on:click={...}`. C'est ainsi que fonctionne chaque élément svelte, il vous suffit de mettre un « on: » devant l'événement que vous souhaitez écouter, et vous pouvez même ajouter des modificateurs, tels que « once » ou « preventDefault », comme ceci :

```svelte
<button on:click|once|preventDefault={faireQuelqueChose}>
   Cliquez-moi
</button>
```

Si vous avez besoin d'obtenir des valeurs du DOM, vous pouvez également utiliser la directive `bind:` pour lier une variable à un élément, comme ceci :

```svelte
<input bind:value={inputValue} />
```

Cela fonctionne avec beaucoup de choses, et même avec des choses comme l'élément window, ce qui évite de vérifier que le composant est monté avant d'ajouter un event listener etc... Cela fonctionne comme ceci :

```svelte
<svelte:window bind:scrollY={scrollY} />
Le scrollY actuel est {scrollY}
```

### CSS visé (Scoped CSS)

Je travaille pour une entreprise depuis 9 mois maintenant, et j'utilise React quotidiennement. Et je dois dire que le CSS en JS est vraiment mauvais par rapport au scoped CSS de Svelte. Et ne me lancez pas dans les modules CSS. La seule chose qui fonctionne bien avec React est TailwindCSS, mais je ne pense pas que cela devrait être la seule solution, j'aime utiliser les deux ensemble. Le scoped CSS de Svelte est tout simplement si facile à utiliser et il est vraiment puissant. Vous pouvez faire des choses comme ceci :

```svelte
<header>
   salut c'est un header
</header>

<!-- Nous n'avons pas besoin de classe, ce CSS s'applique uniquement aux balises du même composant ! -->
<style>
   header {
     color: red;
   }
</style>
```

### La documentation

Ouais. Cela devait être l'une des choses, je veux dire, avez-vous déjà essayé d'apprendre React en utilisant leur documentation ? C'est un cauchemar, la documentation de l'API est bonne mais chaque tutoriel n'est pas bon. Je ne déteste pas React, c'est juste que la documentation de Svelte est trop bonne. Il y a un [tutoriel](https://learn.svelte.dev/tutorial/welcome-to-svelte) qui explique tout parfaitement, et il y a aussi une excellente [documentation](https://svelte.dev/docs) qui explique certaines choses plus en détail. Je n'ai jamais été perdu lors de la recherche de quelque chose dans la documentation.

## Pourquoi SvelteKit est-il si bon ?

SvelteKit est, pour moi, peut-être juste après Nuxt, le meilleur méta-framework qui existe. Il contient essentiellement tout ce que vous voulez, allant des éléments de base comme le routage basé sur des fichiers et la gestion des formulaires à des éléments plus avancés comme le shallow routing.

### Routage basé sur le système de fichiers

Tout comme NextJS App Directory, SvelteKit utilise un routage basé sur un système de fichiers, préfixé par un « + ». Cela signifie que, par exemple, si vous souhaitez avoir ces routes : `/`, `/about`, `/blog` et un `/blog/[slug]`, vous procéderiez comme ceci :

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

Il existe toutes sortes de pages différentes que vous pouvez utiliser, et en voici une liste :

- `+page.svelte` : La page svelte qui sera rendue au client
- `+page.(js|ts)` : Tout code que vous souhaitez exécuter sur le client et le serveur avant le rendu de la page
- `+page.server.(js|ts)` : Tout code que vous souhaitez exécuter uniquement sur le serveur avant le rendu de la page
- `+layout.svelte` : La mise en page qui enveloppera la page actuelle et toutes les pages enfants
- `+layout.(js|ts)` : Tout code que vous souhaitez exécuter sur le client et le serveur avant le rendu de la mise en page
- `+layout.server.(js|ts)` : Tout code que vous souhaitez exécuter uniquement sur le serveur avant le rendu de la mise en page
- `+error.svelte` : La page d'erreur qui sera rendue lorsqu'une erreur se produit

### Prise en charge de TypeScript

Si vous n'utilisez pas encore TypeScript, vous devriez vraiment le faire car Svelte offre un support incroyable pour TypeScript, car tout est soigneusement typé et il existe également de nombreux types générés utiles ! Disons que ceci est mon fichier `+page.ts`:

```ts
export const load = () => {
   return {
     title: "Bonjour tout le monde",
     description: 'Ceci est une description',
   };
};
```

Ensuite, dans mon fichier `+page.svelte`, je pourrais faire ceci :

```svelte
<script>
   import type { PageData } from "./$types";

   export let data: PageData;
</script>
```

Et maintenant, `data` a les types de données déduits de ce que renvoie la fonction `load`, sans que j'aie à faire quoi que ce soit. N'est-ce pas génial ?!

### Gestion des formulaires

La gestion des formulaires dans SvelteKit est excellente grâce aux actions SvelteKit et à [SvelteKit Superforms](https://superforms.rocks) qui gère les formulaires avec validation côté client et validation côté serveur avec votre bibliothèque de validation de schéma préférée (Zod, Yup, ...).

Les actions améliorent les formulaires et il est facile d'en obtenir des données :

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
     //...
   }
}
```

## Conclusion

Essayez Svelte. Vraiment, je le pense, essayez-le. Si vous ne l'aimez pas, ce n'est pas grave, mais vous ne devriez pas laisser passer quelque chose d'aussi génial que Svelte(Kit), c'est vraiment quelque chose à essayer au moins une fois. Si vous souhaitez examiner du code svelte, vous pouvez consulter mon [Code de portfolio](https://github.com/xKesvaL/kesval.com), gardez simplement à l'esprit qu'il n'utilise aucune fonctionnalité compliquée de SvelteKit.

J'espère vraiment vous avoir convaincu d'essayer Svelte(Kit), surtout vous ! Oui toi. Allez.

## Inquiétudes

Êtes-vous inquiet à propos de quelque chose dans Svelte/SvelteKit ? N'hésitez pas à le laisser dans les commentaires et je vous répondrai objectivement !
