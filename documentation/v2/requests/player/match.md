---
title: GetPlayerMatches
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetPlayerMatches

Fetches the matches a player played at a specific tournament.

## Request

### Syntax

`https://api.brawltools.com/v1/player/match`

### Query Parameters

- **EntrantSmashIds** - _Integer[]_
  - Required. The SmashId ID of the player(s).

- **EventSlug** - _String_
  - Required. The identifying Start.gg slug of a tournament.

## Response

### Sample Response

```json
{
  "playerMatches": [
    {
      "matchId": 62467451,
      "scores": [0, 3],
      "legends": [
        ["MORDEX", "MORDEX", "TEZCA"],
        ["KAYA", "KAYA", "KAYA"]
      ],
      "maps": ["Small Brawlhaven", "Small Brawlhaven", "Demon Island"],
      "opponent": [
        {
          "smashId": 1335570,
          "brawlhallaId": 9144432,
          "name": "lores"
        }
      ]
    },
    {
      "matchId": 62465933,
      "scores": [3, 2],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "smashId": 1749170,
          "brawlhallaId": 30226535,
          "name": "Raydish"
        }
      ]
    },
    {
      "matchId": 62465929,
      "scores": [3, 1],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "smashId": 346817,
          "brawlhallaId": 173537,
          "name": "Pavelski"
        }
      ]
    },
    {
      "matchId": 62465924,
      "scores": [3, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "smashId": 558195,
          "brawlhallaId": 2926802,
          "name": "Kresuu"
        }
      ]
    },
    {
      "matchId": 62465862,
      "scores": [2, 3],
      "legends": [
        ["TEZCA", "TEZCA", "TEZCA", "TEZCA", "TEZCA"],
        ["", "", "", "", ""]
      ],
      "maps": [
        "Demon Island",
        "Small Brawlhaven",
        "Small Brawlhaven",
        "Western Air Temple",
        "Apocalypse"
      ],
      "opponent": [
        {
          "smashId": 468521,
          "brawlhallaId": 2277541,
          "name": "Wess"
        }
      ]
    },
    {
      "matchId": 62412946,
      "scores": [3, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "smashId": 328252,
          "brawlhallaId": 919693,
          "name": "Blew"
        }
      ]
    },
    {
      "matchId": 62412942,
      "scores": [3, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "smashId": 612859,
          "brawlhallaId": null,
          "name": "CrossyChainsaw"
        }
      ]
    },
    {
      "matchId": 62412934,
      "scores": [0, -1],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "smashId": 3475893,
          "brawlhallaId": null,
          "name": "marcopolo080908"
        }
      ]
    }
  ]
}
```

### Response Elements

This response body can contain the following fields in JSON.

- **PlayerMatches** - _Object[]_
  - An object containing statistics on a player's recent matches. This is a <a href="../../datatypes/playermatch.md">PlayerMatch</a> datatype.
