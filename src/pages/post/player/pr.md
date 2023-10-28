---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# DescribePlayerPr

Fetches a player's Power Ranking information from their ID.

## Request

### Syntax

```https://api.brawltools.com/player/pr```

### Query Parameters

- **EntrantSmashIds** - *Integer[]*
    - Required. The SmashId ID of the player(s).

- **gameMode** - *Integer*
    - Required. For 1v1 use 1, and for 2v2 use 2.

## Response

### Sample Response

```json
{
    "earnings": 223799.17,
    "pr": {
        "top8": 44,
        "top32": 49,
        "gold": 23,
        "silver": 6,
        "bronze": 4,
        "powerRanking": 3,
        "region": "NA"
    }
}
```

### Response Elements

This response body can contain the following fields in JSON.

- **Earnings** - *Integer*
    - The amount of money the player has earned in USD.

- **Pr** - Object
    - An object containing Power Ranking information. This is a <a href="../../datatypes/playerpr">PlayerPr</a> datatype.