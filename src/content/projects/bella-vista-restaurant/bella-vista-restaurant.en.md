---
title: Bella Vista
excerpt: Concept for a warm, conversion‑focused restaurant website.
publishedAt: 2025-09-24
tags:
  - Bella Vista
  - Design
  - Figma
  - Showcase website
  - Restaurant
  - Prototype
  - POC

# TEMP placeholders — replace with the project visuals
cover: './cover.png'
coverAvif: './cover.avif'

icon: './icon.png'
iconAvif: './icon.avif'

author:
  name: Jordan
  email: jordan@kesval.com
  image: '../../jordan.jpg'

client: Bella Vista (concept)

startedAt: 2025-09-23
technologies:
  - Figma
  - Next.js
  - Payload CMS
  - TypeScript
projectType: design_showcase
figma: https://www.figma.com/proto/K7weyMVRJp5LmbOLnoLCzu/Restaurant?page-id=2%3A7&node-id=45-2&viewport=134%2C276%2C0.32&t=Smp49FfONqt1qHRM-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=45%3A2
---

<script lang="ts">
  import { localizeHref } from '$paraglide/runtime';
  import { Button } from "$lib/components/ui/button";
</script>

### At a glance

- A high‑fidelity mockup for a fictional restaurant
- A clear, warm message that puts hospitality at the center
- A simple path to key actions: view the menu and book

### The context

Bella Vista is a concept imagined to demonstrate our ability to create a restaurant homepage that makes you want to visit in seconds. The goal: convey the warmth of the place, highlight the “signature” dishes, and naturally guide visitors to booking.

### Our approach

We started from a simple stance: “Warm hearts, real food.” Visually, this translates into typography mixing an elegant serif with a readable sans‑serif, a cream/terracotta palette, and immersive visuals that breathe conviviality.

- Impactful homepage: strong promise, ambiance photo, double key actions (“See our menu”, “Book”)
- Brand manifesto: three lines that tell the story of simple, seasonal, welcoming cuisine
- Signature dishes: grid of 4 dishes with generous photos, names, prices, and short descriptions
- Events: clear cards with date, seats left, price, and a “Book your seat” button
- Useful footer: contact details, opening hours, essential links

### Key pages delivered

- Menu page: a simple structure by categories (starters, mains, desserts) with reinforced readability, visible prices, and photos emphasized when relevant.
- Booking page: a 2‑step flow (party size + details → date/time) designed to reduce drop‑off and work just as well on mobile as on desktop.

![Preview - Booking page](/projects/bella-vista/booking.png)

### What changes for users

- Immediate understanding of the spirit of the place and the offer
- Direct access to actions that matter (menu, booking, events)
- Comfortable reading on mobile and desktop

### The concept

- 1 complete homepage (Hero, manifesto, signature dishes, events, footer)
- 1 Menu page (categories, prices, readable formatting)
- 1 Booking page (guided flow, visible CTAs)
- Art direction (type, colors, key components)
- Static Figma prototype (not connected to a back office)

### And technically if we integrate it

We would implement it with Next.js (the site engine) and Payload (the dashboard to manage content). Concretely:

- Next.js: fast, well‑indexed pages that display instantly and stay smooth on mobile.
- Payload: you add the menu, manage events and bookings from a simple interface, no technical skills needed.
- Images automatically optimized for speed and quality.
- Accessibility and SEO best practices integrated from the start.

To go further: connect to a booking system (or internal module), send confirmation emails, and export bookings to CSV.

### Let’s work together

Want a site that makes you hungry and inspires trust? Request a free quote:

<Button href={localizeHref('/audit-gratuit')}>
Request a quote
</Button>
