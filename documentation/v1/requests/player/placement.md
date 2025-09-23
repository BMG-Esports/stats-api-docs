---
title: GetPlayerPlacements
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetPlayerPlacements

Fetches a player's recent placements from their ID.

## Request

### Syntax

`https://api.brawltools.com/v1/player/placement`

### Query Parameters

- **EntrantSmashIds** - _Integer[]_
  - Required. The SmashId ID of the player(s).

- **GameMode** - _Integer_
  - Required. For 1v1 use 1, and for 2v2 use 2.

- **IsOfficial** - _Boolean_
  - Optional. False includes community tournaments, true excludes them. If omitted, defaults to false.

- **MaxResults** - _Integer_
  - Optional. Limits the results to the specified number.

- **NextToken** - _String_
  - Optional. A string specifiying the next page of results.

## Response

### Sample Response

```json
{
  "playerPlacements": [
    {
      "placement": 129,
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
      "placement": 5,
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
      "placement": 7,
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
      "placement": 17,
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
      "placement": 9,
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
      "placement": 13,
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
      "placement": 385,
      "tournament": {
        "slug": "tournament/north-america-summer-championship-2022/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Summer Championship 2022",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2022,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1659283200
      }
    },
    {
      "placement": 7,
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
      "placement": 7,
      "tournament": {
        "slug": "tournament/north-america-spring-championship-2022/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - Spring Championship 2022",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2022,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1652025600
      }
    },
    {
      "placement": 2,
      "tournament": {
        "slug": "tournament/north-america-steelseries-invitational-2022/event/brawlhalla-championship-1v1",
        "tournamentName": "North America - SteelSeries Invitational 2022",
        "eventName": "Brawlhalla Championship 1v1",
        "year": 2022,
        "isOfficial": true,
        "isTwos": false,
        "startTime": 1650218400
      }
    }
  ],
  "nextToken": "1650218400"
}
```

### Response Elements

This response body can contain the following fields in JSON.

- **PlayerPlacements** - _Object[]_
  - The placements of the player in recent tournaments. This is a <a href="../../datatypes/playerplacement">PlayerPlacement</a> object.

- **NextToken** - _String_
  - Allows you to move to the next results.
