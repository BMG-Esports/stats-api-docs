---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# Tournament

An object containing information about a tournament.

## Contents

- **Slug** - *String*
    - The identifying Start.gg slug of a tournament. 

- **TournamentName** - *String*
    - The official name of the tournament.

- **EventName** - *String*
    - The name of the tournament event.

- **Year** - *Integer*
    - The year the tournament was held.

- **IsOfficial** - *Boolean*
    - Notes if the event was officially sanctioned by Brawlhalla.

- **IsTwos** - *Boolean*
    - Notes if the event was 1v1 or 2v2.

- **StartTime** - *Integer*
    - A Unix timestamp of when the tournament began.