---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# SearchPlayers

Searches Power Ranked players by name.

## Request

### Syntax

```https://api.brawltools.com/player/search```

### Query Parameters

- **Query** - *String*
    - Required. Your search query.
- **MaxResults** - *Integer*
    - Optional. Limits results to the specified number.

## Response

### Sample Response

```json
{
    "searchPlayers": [
        {
            "player": {
                "smashId": 2018688,
                "brawlhallaId": null,
                "name": "Anonymous Alex",
                "twitch": "anonymous_alex_",
                "twitter": "anonymous_alex_"
            },
            "pr1v1": 15,
            "pr2v2": 42,
            "region": "NA",
            "top32": 12,
            "top8": 2,
            "gold": 0,
            "silver": 0,
            "bronze": 0,
            "earnings": 7875
        },
        {
            "player": {
                "smashId": 891010,
                "brawlhallaId": null,
                "name": "Maxy",
                "twitch": "MaxiS92K",
                "twitter": "MaxiS92K"
            },
            "pr1v1": 49,
            "pr2v2": 14,
            "region": "SA",
            "top32": 0,
            "top8": 0,
            "gold": 0,
            "silver": 0,
            "bronze": 0,
            "earnings": 1550
        }
    ],
    "nextToken": null
}
```

### Response Elements

- **SearchPlayer** - *Object*
    - The results of the search. This is a <a href="../../datatypes/searchplayer">SearchPlayer</a> object.