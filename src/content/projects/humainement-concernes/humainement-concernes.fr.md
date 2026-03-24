---
title: Humainement Concernés
excerpt: Une app web pour l'association Humainement Concernés, avec CRM.
publishedAt: 2026-03-24
updatedAt: 2026-03-24
tags:
  - App personnalisée
  - Automatisation
  - CRM
  - Accessibilité

cover: './cover.png'
coverAvif: './cover.avif'

icon: './icon.png'
iconAvif: './icon.avif'

author:
  name: Jordan
  email: jordan@kesval.com
  image: '../../jordan.jpg'

client: Humainement Concernés
website: https://don.humainementconcernes.com/

startedAt: 2026-02-21
finishedAt: 2026-03-21
technologies:
  - React
  - TanStack Start
  - HelloAsso
  - Tailwind 4
  - TypeScript
projectType: web_showcase
previewUrl: https://don.humainementconcernes.com/
previewHeight: 700
---

### En bref

- Parcours de don fluide et rassurant centré sur les campagnes
- Un espace donateur pour l’historique et la gestion des reçus fiscaux
- Un back-office complet : CRM, reçus, synchronisation des paiements, automatisation...

### Le besoin

Humainements Concernés devait professionnaliser sa collecte en ligne. L’association fonctionnait avec un site basique et des processus manuels qui freinaient son développement. Il fallait un outil capable de rassurer les donateurs d’un côté, et de structurer la gestion de l’équipe de l’autre : suivi des dons, historique, automatisation des reçus et des campagnes.

### Notre approche

Il fallait quelque chose de simple, rapide à mettre en place, et évolutif. Nous avons donc opté pour une application web dédiée.

Côté donateur, l'expérience a été repensée pour réduire la friction : la cause de chaque campagne est claire, la sélection du montant est simple, et la création de compte permet de retrouver son historique sans effort.

Côté association, nous avons développé un CRM sur-mesure connecté à HelloAsso et PayPal. L’équipe administre ses campagnes, suit les statuts de paiement en temps réel et génère ses reçus fiscaux depuis une interface unique et sécurisée. Une véritable base de données saine pour accompagner leur croissance.

#### Ce qui change pour l’utilisateur

Le donateur est guidé sans aucun doute ni distraction, de la découverte de la campagne jusqu’au paiement. La connexion à son compte lui donne une totale autonomie sur ses infos personnelles, ses dons récurrents, et le téléchargement de ses reçus.

### Techniquement

Architecture moderne et robuste pour garantir sécurité et vitesse : React & TanStack Start (Oui TanStack Start!) pour une navigation instantanée, backend en exécution rapide via Bun, et base de données PostgreSQL gérée avec Drizzle. L'authentification est gérée avec Better Auth et les paiements (HelloAsso/PayPal) sont synchronisés automatiquement via des requêtes en arrière-plan. (cron)

#### Résultats

L’association est passée d’une gestion manuelle fastidieuse à un écosystème automatisé. Les campagnes de l'ONG bénéficient d'une vitrine premium, les donateurs donnent avec plus de confiance, et l'équipe gagne un temps précieux sur la comptabilité et l'émission des reçus fiscaux.

### Et la suite

La plateforme a été construite pour durer et évoluer. Elle permet désormais d'envisager sereinement la croissance du volume de dons annuels, l'ajout de nouvelles campagnes majeures, et le déploiement de stratégies de relance plus efficaces.

### Travaillons ensemble

Envie d’une application qui simplifie votre quotidien et propulse vos objectifs ? Écrivez-nous : `contact@kesval.com`.
