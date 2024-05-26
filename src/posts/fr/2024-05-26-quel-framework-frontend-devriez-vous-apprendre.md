---
title: Quel framework front-end devriez-vous apprendre ?
excerpt: Il y a tellement de frameworks front-end, lequel devriez-vous apprendre ?
publishedAt: 2024-05-26
updatedAt: 2024-05-26
tags:
  - Frameworks
  - Développement Web
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
coverImageAlt: "Une image montrant les logos des frameworks"
---

## Un rapide coup d'œil sur les frameworks

Voici un rapide coup d'œil sur les frameworks dont je vais parler, ce sont ceux dont j'ai le plus entendu parler et ils ne sont pas dans un ordre particulier :

- [Svelte](https://svelte.dev/)
- [SolidJS](https://solidjs.com/)
- [Inferno](https://infernojs.org/)
- [React](https://react.dev/)
- [Vue](https://vuejs.org/)
- [Angular](https://angular.io/)
- [Lit](https://lit.dev/)

### Lequel devriez-vous apprendre ?

Nous allons passer en revue certains des points clés que vous devriez considérer lors du choix d'un framework, et nous verrons comment chaque framework se comporte dans chacun de ces points.

## Performance

C'est un gros point, la performance est un facteur clé dans l'expérience utilisateur, car les gens d'aujourd'hui se soucient beaucoup de la vitesse. Plus de la moitié de vos visiteurs partiront si votre site prend plus de **3 à 5 secondes** pour se charger. C'est aussi un facteur clé dans l'expérience du développeur, un framework lent vous fera perdre du temps.

Nous allons regarder les résultats du [JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark) sur Chrome 125 - OSX et prendre la moyenne géométrique des résultats des différents tests. Cela signifie que ce n'est pas une opinion, mais un fait, les résultats sont basés sur les tests et les chiffres.

Voici les résultats, plus le score est proche de 1 (1 = vanilla) mieux c'est :

| Framework | Score | Version | Rang |
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

Je vais essayer de mettre à jour ce tableau aussi souvent que possible pour les sorties majeures de ces frameworks.

## Expérience développeur

Un autre point vraiment important à considérer, à mon avis, est l'expérience développeur. Personnellement, si l'expérience développeur est mauvaise, je n'utiliserai pas du tout le framework pour mes projets personnels. Voici comment, selon moi, sont classés les frameworks en termes d'expérience développeur :

1. Svelte
2. Vue
3. Solid
4. React
5. Lit
6. Angular
7. Inferno

### Écosystème

Eh bien, l'écosystème est une grande partie de l'expérience développeur, si le framework a un grand écosystème, il sera plus facile de trouver de l'aide, des bibliothèques, etc. Voici mon avis sur le classement de l'écosystème des frameworks :

0. Lit
1. React
2. Vue
3. Svelte
4. Angular
5. Solid
6. Inferno

Notez que Svelte est vraiment haut, en 3ème position, même si c'est un nouveau framework. Pourquoi ? Eh bien, c'est parce qu'il est vraiment facile d'utiliser des bibliothèques JS vanilla avec Svelte, donc fondamentalement, tout ce qui serait comme `[bibliothèque]-react` ou `[bibliothèque]-vue`, vous pouvez utiliser la `[bibliothèque]` originale avec Svelte. C'est un gros plus pour Svelte.

L'écosystème de Lit est en position 0 car il peut fonctionner de la même manière que Svelte le fait, avec du JS vanilla, mais le reste des outils je ne les considère pas comme faisant partie de l'écosystème. Même s'il a beaucoup d'outils, je ne l'appellerais pas un écosystème puisque la plupart des outils sont fournis directement par Google (les auteurs), et ce n'est pas vraiment une communauté.

### Courbe d'apprentissage

Eh bien, c'est assez lié à notre titre, quel framework devriez-vous apprendre ? La courbe d'apprentissage est une grande partie de la décision, voyons comment les frameworks se classent en termes de courbe d'apprentissage, à mon avis (du plus facile au plus difficile) :

1. React
2. Solid
3. Svelte
4. Vue
5. Lit
6. Inferno
7. Angular

Puisque React est le framework le plus populaire, il est vraiment facile de trouver des tutoriels, des cours ou tout type d'aide sur internet. Puisque Solid est très proche de React, il n'est pas difficile à apprendre non plus. Ensuite Svelte, qui, bien qu'il soit très différent des autres frameworks ici, est vraiment facile à apprendre surtout à cause du [Tutoriel Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte) qui est probablement le meilleur morceau de documentation que j'ai jamais vu.

## Marché de l'emploi

Clairement, si vous voulez obtenir un emploi, c'est une chose à laquelle vous devriez penser. Voici mon classement des frameworks en termes de marché de l'emploi (du meilleur au pire) après avoir fait mes recherches :

1. React
2. Angular
3. Vue
4. Svelte
5. Lit
6. Solid
7. Inferno

Maintenant, bien que Solid et Inferno soient classés 6ème et 7ème, ils sont très proches de React, donc si vous connaissez l'un de ces deux, vous pourriez être en mesure d'obtenir un emploi avec React. Lit est classé 5ème car c'est un framework de Google, et Google est une grande entreprise, mais il n'est pas aussi populaire ailleurs.

## Support TypeScript

Je ne peux plus coder sans TypeScript, donc, lorsque je choisis un framework, je fais très attention au support TypeScript. Voici mon classement des frameworks en termes de support TypeScript (du meilleur au pire) :

1. Svelte
2. Angular
3. React
4. Vue
5. Solid
6. Inferno
7. Lit

## Conclusion

Après tout ce que nous avons dit, voici le classement moyen que j'ai donné à chaque framework - rang (score moyen) :

1. (2.17) Svelte
2. (2.83) React
3. (3.33) Vue
4. (3.83) Solid
5. (4.33) Lit
6. (4.5) Angular
7. (5.83) Inferno

Merci d'avoir lu, j'espère que cela vous a aidé à choisir un framework, si vous avez des questions, n'hésitez pas à me les poser dans les commentaires ci-dessous !
