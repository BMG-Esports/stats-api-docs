---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# SearchPlayer

An object containing search results for the SearchPlayers method.

## Content

- **Player** - *Object*
    - A player object containing basic information.

- **Pr1v1** - *Integer*
    - The player's current 1v1 Power Ranking.

- **Pr2v2** - *Integer*
    - The player's current 2v2 Power Ranking.

- **Region** - *String*
    - The player's region.

- **Top32** - *Integer*
    - The number of top 32 placements the player has earned.

- **Top8** - *Integer*
    - The number of top 8 placements the player has earned.

- **Gold** - *Integer*
    - The number of gold medals the player has earned.

- **Silver** - *Integer*
    - The number of silver medals the player has earned.

- **Bronze** - *Integer*
    - The number of bronze medals the player has earned.

- **Earnings** - *Float32*
    - The amount of USD the player has earned.