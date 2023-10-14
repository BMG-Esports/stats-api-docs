---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# DescribePlayerLegends

Returns a player's most used legends by year.

## Request

### Syntax

```https://api.brawltools.com/player/legend```

### Query Parameters

- **EntrantSmashIds** - *Integer*
    - At least one is required.
- **isOfficial** - *Boolean*
    - Required. False includes community tournaments, true excludes them.
- **Year** - *Integer*
    - Required.

## Response

### Sample Response

```json
{
    "legends": [
        {
            "name": "RENO",
            "count": 57
        },
        {
            "name": "JHALA",
            "count": 15
        },
        {
            "name": "CROSS",
            "count": 10
        },
        {
            "name": "DIANA",
            "count": 9
        },
        {
            "name": "MUNIN",
            "count": 6
        }
    ],
    "nextToken": "6-TVVOSU4="
}
```

### Response Elements

- **Legends** - *Object*
    - An array of played legends for the player. This is a <a href="../../datatypes/legend">legend</a> datatype.

- **nextToken** - *String*
    - Allows you to move to the next results. 