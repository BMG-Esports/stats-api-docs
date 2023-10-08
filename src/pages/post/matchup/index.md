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

### Path Parameters

This method does not have path parameters.

### Request Body

```json
{
    "isOfficial": boolean,
    "entrant1SmashIds": [number],
    "entrant2SmashIds": [number],
    "gameMode": 1 or 2
}
```

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