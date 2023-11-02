---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# GetPlayerLegends

Returns a player's most used legends by year.

## Request

### Syntax

```https://api.brawltools.com/v1/player/legend```

### Query Parameters

- **EntrantSmashIds** - *Integer[]*
    - Required. The SmashId ID of the player(s).

- **IsOfficial** - *Boolean*
    - Optional. False includes community tournaments, true excludes them. If omitted, defaults to false.

- **Year** - *Integer*
    - Optional. The year to analyze. If omitted, includes all years.

- **MaxResults** - *Integer*
    - Optional. Limits the results to the specified number.

- **NextToken** - *String*
    - Optional. A string specifiying the next page of results.

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

- **Legends** - *Object[]*
    - An array of played legends for the player. This is a <a href="../../datatypes/legend">legend</a> datatype.

- **NextToken** - *String*
    - Allows you to move to the next results. 