---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# DescribeMatchup

Returns the head to head stats of specified players.

## Request

### Syntax

```https://api.brawltools.com/matchup```

### Query Parameters

- **isOfficial** - *Boolean*
    - Required. False includes community tournaments, true excludes them.
- **Entrant1SmashIds** - *Integers*
    - At least one is required.
- **Entrant2SmashIds** - *Integers*
    - At least one is required.
- **gameMode** - *Integer*
    - Required. For 1v1 use 1, and for 2v2 use 2.

## Response

### Sample Response

```json
{
    "matchups": [
        {
            "matches": [
                17,
                9
            ],
            "games": [
                60,
                48
            ],
            "opponent": null
        }
    ],
    "nextToken": null
}
```

### Response Elements

The following data is returned in JSON.

- **<a href="../../datatypes/matchup">Matchups</a>** - *Object*
    - An array of matchup objects involving the specified players.

- **NextToken** - *String*
    - Allows you to move to the next results. 