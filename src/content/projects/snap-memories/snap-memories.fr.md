---
title: SnapMemories
excerpt: Téléchargez vos souvenirs Snapchat en toute sécurité. Privé, rapide et open source.
publishedAt: 2025-12-10
tags:
  - Open Source
  - Confidentialité
  - Outil
  - React
  - Souveraineté des données
cover: './cover.png'
coverAvif: './cover.avif'
icon: './icon.png'
iconAvif: './icon.avif'
author:
  name: KesvaL
  email: contact@kesval.com
  image: '../../kesval.jpg'
images:
  - './images/1.png'
  - './images/2.png'
  - './images/3.png'
client: Communauté Open Source
website: https://snap-memories.vercel.app
github: https://github.com/xKesvaL/snap-memories
startedAt: 2025-12-10
technologies:
  - React 19
  - TanStack Start
  - TypeScript
  - Tailwind CSS
  - Streams API
projectType: 'app_open_source'
previewUrl: https://snap-memories.vercel.app
previewHeight: 700
---

### En un coup d'œil

- **100% Privé :** Vos photos ne quittent jamais votre appareil.
- **Téléchargement en masse :** Obtenez tout dans un fichier ZIP unique.
- **Gratuit & Open Source :** Code auditable, gratuit pour toujours.
- **Efficace :** Faible consommation de RAM, vitesse de téléchargement rapide.

Cet outil appartient à la communauté. Consultez le code sur [GitHub](https://github.com/xKesvaL/snap-memories).

### Le Défi

Snapchat rend la capture de souvenirs facile, mais leur exportation en masse est étonnamment difficile. Les utilisateurs sont souvent coincés avec deux mauvaises options : sauvegarder manuellement des milliers de snaps individuels, ou confier leurs identifiants de connexion à des applications tierces qui aspirent les données sur des serveurs distants.

> **Pourquoi maintenant ?** Snapchat a annoncé que le stockage va devenir une fonctionnalité payante, avec la suppression des anciens souvenirs après un certain délai.

Nous croyons que vos souvenirs vous appartiennent. Vous ne devriez pas avoir à compromettre votre vie privée ou votre sécurité pour sauvegarder l'histoire de votre vie. Bien que Snapchat propose une fonction d'exportation de données, elle fournit un fichier HTML qui peine à télécharger de grandes bibliothèques — échouant souvent après les premières centaines d'éléments.

### Notre Solution

Nous avons adopté une architecture "Trust No One" (Ne faire confiance à personne). L'objectif était de construire un outil que _nous_ ne pourrions pas utiliser à mauvais escient, même si nous le voulions.

Au lieu de construire un serveur pour traiter vos données, nous avons tout poussé vers le client. Lorsque vous utilisez SnapMemories, l'application s'exécute entièrement dans votre navigateur.

1.  **Analyse Locale :** Vous fournissez le fichier `memories_history.html` issu de votre export officiel de données Snapchat. L'application analyse ce fichier localement pour identifier les liens de téléchargement.
2.  **Streaming Direct :** En tirant parti de la **Streams API** moderne et des **Service Workers**, nous récupérons les médias directement depuis les serveurs de Snapchat et les transférons directement dans un fichier ZIP généré sur votre appareil.
3.  **Téléchargement Parallèle :** Nous téléchargeons les médias en parallèle, afin que vous obteniez la vitesse de téléchargement la plus rapide possible.
4.  **Zéro Intermédiaire :** Vos photos ne touchent jamais nos serveurs. Nous ne les voyons pas, ne les stockons pas et ne les traçons pas.

Cette approche ne concerne pas seulement la confidentialité ; il s'agit de durabilité. En utilisant votre propre bande passante et votre puissance de traitement, nous pouvons offrir cet outil gratuitement indéfiniment sans encourir de coûts de serveur massifs.

### Avantages Utilisateur

Pour la première fois, archiver une décennie de souvenirs est simple et sans stress.

- **Aucune connexion requise :** Vos identifiants restent avec vous.
- **Haute Vitesse :** Les connexions simultanées maximisent votre bande passante pour télécharger des gigaoctets de données en quelques minutes.
- **Simplicité :** Glissez-déposez votre fichier, cliquez sur télécharger et laissez faire. Vous obtenez une archive ZIP propre prête pour le stockage.

### Résultats

SnapMemories est en ligne et protège activement d'énormes archives. Les utilisateurs sauvegardent avec succès des bibliothèques contenant des milliers de vidéos et d'images, sans qu'aucune donnée personnelle ne quitte leur réseau local. C'est une preuve de concept que des utilitaires puissants et utiles n'ont pas besoin de récolter les données des utilisateurs pour fonctionner.

### Portée

- **Cœur :** L'application web, l'analyseur HTML côté client et le générateur de ZIP en streaming.
- **Documentation :** Des guides clairs sur la demande de données à Snapchat et la vérification locale de la sécurité de l'outil.

### Et ensuite ?

Ce projet est stable et en mode maintenance. Nous garderons l'analyseur à jour pour correspondre à tout changement dans le format d'exportation de Snapchat.

### Contribuer

C'est un outil pour tout le monde, construit par la communauté. Si vous souhaitez améliorer le code, auditer la sécurité ou simplement dire merci, jetez un coup d'œil au dépôt.

[Voir sur GitHub](https://github.com/xKesvaL/snap-memories)

---

### Besoin d'une Solution Sur Mesure ?

SnapMemories démontre notre capacité à construire des applications web performantes et axées sur la confidentialité qui repoussent les limites de ce que les navigateurs peuvent faire.

Chez **KesvaL Studio**, nous sommes spécialisés dans le développement de solutions web complexes qui privilégient l'expérience utilisateur et l'excellence technique. Que vous ayez besoin d'un outil interne sécurisé, d'une application web haute performance ou d'un flux de travail d'automatisation personnalisé, nous pouvons vous aider.

**Prêt à donner vie à votre projet ?**
[Contactez-nous](/contact) pour discuter de votre vision.
