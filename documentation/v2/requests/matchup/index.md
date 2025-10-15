---
title: GetMatchup
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetMatchup

Returns the head to head stats of specified players.

## Request

### Syntax

```url
https://api.brawltools.com/v2/matchup
```

### Query Parameters

| Parameter         | Type            | Description                                                  |
| ----------------- | --------------- | ------------------------------------------------------------ |
| entrant1PlayerIds | Array (Integer) | Required. The ID(s) of the player(s) being searched.         |
| entrant2PlayerIds | Array (Integer) | Optional. If included, include the same number of IDs as entrant1. |
| gameMode          | Integer         | Required. For 1v1 use 1, and for 2v2 use 2.                  |
| isOfficial        | Boolean         | Optional. False includes community tournaments, true excludes them. If omitted, defaults to false. |
| maxResults        | Integer         | Optional. Limits the results to the specified number.        |
| nextToken         | String          | Optional. A string specifiying the next page of results.     |

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
      "opponent": [
        {
          "playerId": 146606,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 257670,
          "name": "Boomie"
        }
      ]
    },
    {
      "matches": [
        15,
        9
      ],
      "games": [
        53,
        40
      ],
      "opponent": [
        {
          "playerId": 120786,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 1479056,
          "name": "wrenchd"
        }
      ]
    },
    {
      "matches": [
        14,
        5
      ],
      "games": [
        46,
        31
      ],
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
      "matches": [
        10,
        6
      ],
      "games": [
        37,
        29
      ],
      "opponent": [
        {
          "playerId": 145913,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 5832489,
          "name": "java"
        }
      ]
    },
    {
      "matches": [
        10,
        5
      ],
      "games": [
        32,
        26
      ],
      "opponent": [
        {
          "playerId": 51494,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 6096753,
          "name": "luna"
        }
      ]
    },
    {
      "matches": [
        12,
        3
      ],
      "games": [
        37,
        17
      ],
      "opponent": [
        {
          "playerId": 142100,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 33116656,
          "name": "megD"
        }
      ]
    },
    {
      "matches": [
        12,
        3
      ],
      "games": [
        36,
        10
      ],
      "opponent": [
        {
          "playerId": 147522,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 1281444,
          "name": "Phazon"
        }
      ]
    },
    {
      "matches": [
        8,
        6
      ],
      "games": [
        33,
        24
      ],
      "opponent": [
        {
          "playerId": 81144,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 1396588,
          "name": "STING RAY"
        }
      ]
    },
    {
      "matches": [
        13,
        1
      ],
      "games": [
        36,
        7
      ],
      "opponent": [
        {
          "playerId": 146944,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 3001049,
          "name": "simb3"
        }
      ]
    },
    {
      "matches": [
        8,
        5
      ],
      "games": [
        29,
        23
      ],
      "opponent": [
        {
          "playerId": 168635,
          "sggPlayerId": null,
          "cmPlayerId": null,
          "brawlhallaId": 2205970,
          "name": "Impala"
        }
      ]
    }
  ],
  "nextToken": "13-52-168635"
}
```

### Response Elements

The following data is returned in JSON.

| Parameter | Type   | Description                                                                                                                     |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| matchups  | Object | An array of matchup objects involving the specified players. This is a <a href="../../datatypes/matchup">matchups</a> datatype. |
| nextToken | String | A string to be used as a nextToken argument.                                                                                 |
