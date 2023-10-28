---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# Resources

## What is a SmashId?

A SmashId is a player's unique Start.gg ID. This ID is not the alphanumeric phrase found on your Start.gg profile, and is only visible through Start.gg's developer API. However, these IDs can be found through <a href="https://prostats.brawlhalla.com">prostats.brawlhalla.com</a>.

## How do I find a player's SmashId?

Do not include forward slashes, back slashes, or dashes when copying IDs.

- Singles Search
    - The SmashId will be found at the end of the URL. (https://prostats.brawlhalla.com/singles/153043)
- Singles Head to Head
    - The SmashId of the first player will come after ```/singles/```, while the second SmashId is at the end of the URL. (https://prostats.brawlhalla.com/singles/153043/57335)
- Doubles Search
    - Both SmashIds will be at the end of the URL, with a dash seperating the first and second player. (https://prostats.brawlhalla.com/doubles/153043-57335)
- Doubles Head to Head
    - The first set of SmashIds will come after ```/doubles/```, and the second is at the end of the URL. (https://prostats.brawlhalla.com/doubles/153043-57335/275580-153671)

## How can I use this API?

The easiest way to interface with the API is by using the <a href="https://www.npmjs.com/package/bh-esports-api-typescript">esports-api Javascript SDK</a>. It can be used with both Javascript and Typescript, and is easy to initialize.
