---
title: GetMatchupPlacements
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetMatchupPlacements

Compares the placements of specified players in tournaments.

## Request

### Syntax

```url
https://api.brawltools.com/v1/matchup/placement
```

### Query Parameters

| Parameter        | Type            | Description                                                                                        |
| ---------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| isOfficial       | Boolean         | Optional. False includes community tournaments, true excludes them. If omitted, defaults to false. |
| entrant1SmashIds | Array (Integer) | Required. The start.gg ID of the player(s).                                                        |
| entrant2SmashIds | Array (Integer) | Required. The start.gg ID of the player(s).                                                        |
| gameMode         | Integer         | Required. For 1v1 use 1, and for 2v2 use 2.                                                        |
| maxResults       | Integer         | Optional. Limits the results to the specified number.                                              |
| nextToken        | String          | Optional. A string specifiying the next page of results.                                           |

## Response

### Sample Response

```json
{
  "matchupPlacements": [
    {
      "placements": [1, 9],
      "tournament": {
        "slug": "tournament/north-america-autumn-championship-2023/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Autumn Championship 2023",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2023,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1695572100
      }
    },
    {
      "placements": [7, 129],
      "tournament": {
        "slug": "tournament/dreamhack-valencia-2023/event/brawlhalla-1v1",
        "tournamentName": "DreamHack Valencia 2023",
        "eventName": "Brawlhalla (1v1)",
        "year": 2023,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1688716800
      }
    },
    {
      "placements": [25, 5],
      "tournament": {
        "slug": "tournament/dreamhack-dallas-2023/event/brawlhalla-1v1",
        "tournamentName": "DreamHack Dallas 2023",
        "eventName": "Brawlhalla (1v1)",
        "year": 2023,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1685721600
      }
    },
    {
      "placements": [2, 7],
      "tournament": {
        "slug": "tournament/dreamhack-san-diego-2023/event/brawlhalla-1v1",
        "tournamentName": "DreamHack San Diego 2023",
        "eventName": "Brawlhalla (1v1)",
        "year": 2023,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1680883200
      }
    },
    {
      "placements": [4, 17],
      "tournament": {
        "slug": "tournament/north-america-spring-championship-2023/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Spring Championship 2023",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2023,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1679846400
      }
    },
    {
      "placements": [5, 9],
      "tournament": {
        "slug": "tournament/north-america-winter-championship-2023/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Winter Championship 2023",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2023,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1675617300
      }
    },
    {
      "placements": [9, 13],
      "tournament": {
        "slug": "tournament/brawlhalla-world-championship-expo-2022/event/1v1",
        "tournamentName": "Brawlhalla World Championship Expo 2022",
        "eventName": "1v1",
        "year": 2022,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1667577600
      }
    },
    {
      "placements": [5, 7],
      "tournament": {
        "slug": "tournament/brawlhalla-midseason-championship/event/brawlhalla-championship-1v1",
        "tournamentName": "Brawlhalla Midseason Championship",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2022,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1655042400
      }
    },
    {
      "placements": [3, 9],
      "tournament": {
        "slug": "tournament/north-america-winter-championship-2022/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Winter Championship 2022",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2022,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1644166800
      }
    },
    {
      "placements": [3, 17],
      "tournament": {
        "slug": "tournament/north-america-brawlhalla-world-championship-2021/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Brawlhalla World Championship 2021",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2021,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1637434800
      }
    }
  ],
  "nextToken": "1637434800"
}
```

### Response Elements

The following data is returned in JSON.

| Parameter         | Type   | Description                                                                                                                                  |
| ----------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| matchupPlacements | Object | An object containing placement comparisons in a matchup. This is a <a href="../../datatypes/matchupplacement">MatchupPlacement</a> datatype. |
| nextToken         | String | Allows you to move to the next results.                                                                                                      |
