---
title: Ajouter des types au JSON
excerpt: Saviez-vous que vous pouvez ajouter des types aux fichiers JSON ? Laissez-moi vous montrer comment.
publishedAt: 2024-03-11
updatedAt: 2024-05-10
tags:
  - JSON
  - TypeScript
  - Types
  - JavaScript
  - Tutoriel
  - Comment Faire
coverImage: "/blog/adding-types-to-json/cover.png"
coverImageAlt: "Logo TypeScript et logo JSON"
---

## Un fichier JSON typé ?!

Ouais. Je viens juste d'apprendre qu'on peut ajouter des types aux fichiers JSON.

Vous pouvez simplement ajouter un fichier `[jsonFileName].d.json.ts` a côté du fichier JSON pour assigner un type aux futurs imports d'un fichier JSON.

Imaginons que vous avez un fichier `config.json`, vous pouvez créer un fichier `config.d.json.ts` à côté du fichier JSON et ajouter le code suivant :

`config.d.json.ts`

```ts
import type { Config } from './my/types';

const config: Config;

export default config;
```

Et maintenant, vous avez juste besoin d'activer le paramètre `allowArbitraryExtensions` dans votre fichier `tsconfig.json` :

```json
{
  "compilerOptions": {
    "allowArbitraryExtensions": true
  }
}
```

## D'accord mais pourquoi ?

Cela peut et sera utile si vous travaillez avec des fichiers JSON, surtout des fichiers plus gros. Surtout si pour une raison quelconque vous avez des données stockées dans des fichiers JSON...? Je ne sais pas pourquoi vous feriez ça mais je ne suis pas là pour juger.

En termes de performances, cela signifie que TypeScript n'a pas besoin d'inférer le type de toutes les données du fichier et cela peut fortement accélérer le processus de transpilation. Ce qui signifie des builds plus rapides, et un développement plus rapide puisque la plupart des IDEs reposent sur un serveur TypeScript interne actif.

Personnellement, je n'ai pas utilisé de fichiers JSON depuis que j'avais 13 ans, ce qui était il y a de nombreuses années, mais j'ai trouvé que c'était une fonctionnalité vraiment cool. J'espère que vous aussi.

Merci d'avoir lu, et passez une bonne journée. Ne cessez jamais d'apprendre de nouvelles choses !

---

Si vous vous demandez quel est le premier logo dans l'image de couverture, c'est en fait le logo JSON. J'ai été vraiment surpris quand j'ai vu que c'était le logo officiel.
