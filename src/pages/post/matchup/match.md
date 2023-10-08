---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# DescribeMatchupMatches

Returns any matches specified players played in a specific tournament.

## Request

### Syntax

```https://api.brawltools.com/matchup/match```

### Path Parameters

This method does not have path parameters.

### Request Body

```json
{
    "eventSlug": "string",
    "entrant1SmashIds": [number],
    "entrant2SmashIds": [number]
}
```

## Response

### Sample Response

```json
{
    "matchupMatches": [
        {
            "matchId": 58574173,
            "scores": [
                3,
                0
            ],
            "legends": [
                [
                    "LUCIEN",
                    "LUCIEN",
                    "LUCIEN"
                ],
                [
                    "CASPIAN",
                    "ASURI",
                    "ASURI"
                ]
            ],
            "maps": [
                "Small Fortress of Lions",
                "Small Fortress of Lions",
                "Small Fortress of Lions"
            ]
        },
        {
            "matchId": 58574172,
            "scores": [
                3,
                0
            ],
            "legends": [
                [
                    "LUCIEN",
                    "LUCIEN",
                    "LUCIEN"
                ],
                [
                    "VAL",
                    "VAL",
                    "CASPIAN"
                ]
            ],
            "maps": [
                "Small Fortress of Lions",
                "Small Fortress of Lions",
                "Miami Dome"
            ]
        }
    ]
}
```

### Response Elements

The following data is returned in JSON.

- **<a href="../../datatypes/matchupmatch.md">MatchupMatches</a>** - *Object*
    - An object containing information about a specific match from a matchup.