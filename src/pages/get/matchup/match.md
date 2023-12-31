---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# GetMatchupMatches

Returns any matches specified players played in a specific tournament.

## Request

### Syntax

```https://api.brawltools.com/v1/matchup/match```

### Query Parameters

- **EventSlug** - *String*
    - Required. The identifying Start.gg slug of a tournament.

- **Entrant1SmashIds** - *Integer[]*
    - Required. The SmashId ID of the player(s).

- **Entrant2SmashIds** - *Integer[]*
    - Required. The SmashId ID of the player(s).

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

- **MatchupMatches** - *Object[]*
    - An object containing information about a specific match. This is a <a href="../../datatypes/matchupmatch.md">MatchupMatch</a> datatype.