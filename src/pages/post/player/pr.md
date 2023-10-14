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

- **EntrantSmashIds** - *Integers*
    - At least one is required.
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

- **earnings** - *number*
    - The amount of money the player has earned in USD.

- **top8** - *number*
    - The number of Top 8 placements the player has recieved.

- **top32** - *number*
    - The number of Top 32 placements the player has recieved.

- **gold** - *number*
    - The number of gold medals the player has recieved.

- **silver** - *number*
    - The number of silver medals the player has recieved.

- **bronze** - *number*
    - The number of bronze medals the player has recieved.

- **powerRanking** - *number*
    - The player's current power ranking.

- **region** - *string*
    - The region the player plays in.