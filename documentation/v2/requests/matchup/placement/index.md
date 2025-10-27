---
title: GetMatchupPlacements
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetMatchupPlacements

Compares the placements of specified players in tournaments.

## Request

### Syntax

```url
https://api.brawltools.com/v2/matchup/placement
```

### Query Parameters

| Parameter         | Type    | Required | Description                                                                                   |
| ----------------- | ------- | -------- | --------------------------------------------------------------------------------------------- |
| entrant1PlayerIds | Integer | ✔️       | The ID(s) of the first team.                                                                  |
| entrant2PlayerIds | Integer | ✔️       | The ID(s) of the second team.                                                                 |
| gameMode          | Integer | ✔️       | For 1v1 use 1, and for 2v2 use 2.                                                             |
| isOfficial        | Boolean | ❌       | False includes community tournaments, true excludes them. If omitted, defaults to false.      |
| maxResults        | Integer | ❌       | Limits the results to the specified number, with a maximum of 50. If omitted, defaults to 10. |
| nextToken         | String  | ❌       | Optional. A string specifying the next page of results.                                       |

## Response

### Sample Response

```json
{
  "matchupPlacements": [
    {
      "placements": [17, 17],
      "tournament": {
        "id": "tournament/ceo-2025-6/event/brawlhalla-singles",
        "tournamentName": "CEO 2025",
        "eventName": "Brawlhalla Singles",
        "year": 2025,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": false,
        "startTime": 1749913200,
        "host": "SGG"
      }
    },
    {
      "placements": [1, 5],
      "tournament": {
        "id": "bd580f1f-4006-463a-420d-08dd69fad61e",
        "tournamentName": "Spring Championship - North America 2025 - 1v1",
        "eventName": null,
        "year": 2025,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": true,
        "startTime": 1746980182,
        "host": "CM"
      }
    },
    {
      "placements": [5, 7],
      "tournament": {
        "id": "tournament/winter-championship-north-america-2025/event/brawlhalla-championship-1v1",
        "tournamentName": "Winter Championship - North America 2025",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2025,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": true,
        "startTime": 1740330900,
        "host": "SGG"
      }
    },
    {
      "placements": [13, 5],
      "tournament": {
        "id": "tournament/brawlhalla-world-championship-expo-2024/event/1v1",
        "tournamentName": "Brawlhalla World Championship Expo 2024",
        "eventName": "1v1",
        "year": 2024,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": false,
        "startTime": 1731661200,
        "host": "SGG"
      }
    },
    {
      "placements": [2, 3],
      "tournament": {
        "id": "tournament/trial-of-freya-north-america/event/brawlhalla-championship-1v1",
        "tournamentName": "Trial of Freya - North America",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2024,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": true,
        "startTime": 1726416900,
        "host": "SGG"
      }
    },
    {
      "placements": [4, 1],
      "tournament": {
        "id": "tournament/trial-of-laufey-north-america-moose-wars/event/brawlhalla-1v1",
        "tournamentName": "Trial of Laufey - North America (Moose Wars)",
        "eventName": "Brawlhalla 1v1",
        "year": 2024,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": true,
        "startTime": 1724602500,
        "host": "SGG"
      }
    },
    {
      "placements": [1, 5],
      "tournament": {
        "id": "tournament/trial-of-skuld-north-america/event/brawlhalla-championship-1v1",
        "tournamentName": "Trial of Skuld - North America",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2024,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": true,
        "startTime": 1722788100,
        "host": "SGG"
      }
    },
    {
      "placements": [3, 4],
      "tournament": {
        "id": "tournament/moose-wars-the-battlegrounds/event/brawlhalla-1v1s",
        "tournamentName": "Moose Wars: The Battlegrounds",
        "eventName": "Brawlhalla 1v1s",
        "year": 2024,
        "isOfficial": false,
        "isTwos": false,
        "isOnline": false,
        "startTime": 1722103200,
        "host": "SGG"
      }
    },
    {
      "placements": [5, 1],
      "tournament": {
        "id": "tournament/trial-of-heimdall-north-america-nsig/event/brawlhalla-championship-1v1",
        "tournamentName": "Trial of Heimdall - North America (NSIG)",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2024,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": true,
        "startTime": 1720972800,
        "host": "SGG"
      }
    },
    {
      "placements": [3, 9],
      "tournament": {
        "id": "tournament/ceo-2024-6/event/brawlhalla-1v1",
        "tournamentName": "CEO 2024",
        "eventName": "Brawlhalla 1v1",
        "year": 2024,
        "isOfficial": true,
        "isTwos": false,
        "isOnline": false,
        "startTime": 1719583200,
        "host": "SGG"
      }
    }
  ],
  "nextToken": "1719583200"
}
```

### Response Elements

The following data is returned in JSON.

| Parameter         | Type   | Description                                                                                                                     |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| matchupPlacements | Object | An object containing placement comparisons in a matchup. This is a [MatchupPlacement](/v2/datatypes/matchupplacement) datatype. |
| nextToken         | String | A string to be used as a nextToken argument.                                                                                    |
