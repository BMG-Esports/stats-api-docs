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

```url
https://api.brawltools.com/v2/player/match
```

### Query Parameters

| Parameter    | Type   | Required | Description                                |
| ------------ | ------ | -------- | ------------------------------------------ |
| tournamentId | string | ✔️       | The ID of the tournament.                  |
| playerIds    | string | ✔️       | The ID(s) of the player(s) being searched. |

## Response

### Sample Response

```json
{
  "playerMatches": [
    {
      "matchId": "dfd3d359-b452-4895-a279-08dd8f8662e0",
      "scores": [3, 1],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 149305,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 95906862,
          "name": "LGN | BBBalloonBoy"
        }
      ]
    },
    {
      "matchId": "c297e0ea-6caf-44d2-30ab-08dd8f85d23e",
      "scores": [3, 1],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 146052,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 110282750,
          "name": "ECHO | Marckiemoo"
        }
      ]
    },
    {
      "matchId": "babd211f-cf34-482d-a15e-08dd8f8662e0",
      "scores": [3, 1],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 153000,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": null,
          "name": "Sadlyzyrox"
        }
      ]
    },
    {
      "matchId": "84d5470d-cb1e-4b56-3065-08dd8f85d23e",
      "scores": [3, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 160000,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 30226535,
          "name": "Raydish"
        }
      ]
    },
    {
      "matchId": "8057f991-2201-4479-3046-08dd8f85d23e",
      "scores": [3, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 156278,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": null,
          "name": "| Kamaal |"
        }
      ]
    },
    {
      "matchId": "60226bf7-da3f-415a-3075-08dd8f85d23e",
      "scores": [3, 2],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 146052,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 110282750,
          "name": "ECHO | Marckiemoo"
        }
      ]
    },
    {
      "matchId": "4cc39021-d10e-421c-a0ee-08dd8f8662e0",
      "scores": [2, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 171497,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": null,
          "name": "Ludicrous_."
        }
      ]
    },
    {
      "matchId": "3207ef92-b34f-4595-2f53-08dd8f85d23e",
      "scores": [3, 0],
      "legends": [[""], [""]],
      "maps": [""],
      "opponent": [
        {
          "playerId": 162722,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": null,
          "name": "SiB | Vulcan"
        }
      ]
    }
  ]
}
```

### Response Elements

This response body can contain the following fields in JSON.

| Element       | Type   | Description                                                                                                                |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| playerMatches | Object | An object containing statistics on a player's recent matches. This is a [PlayerMatch](/v2/datatypes/playermatch) datatype. |
