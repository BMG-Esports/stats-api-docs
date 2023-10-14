---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# DescribePlayerLegends

Placeholder

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


### Request Body

```json
{
    "entrantSmashIds":[153043],
    "isOfficial": true,
    "year": 2022

}
```

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

 - Legend - array
    - 

- nextToken - string
    - 