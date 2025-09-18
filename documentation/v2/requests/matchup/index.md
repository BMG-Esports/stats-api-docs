---
title: GetMatchup
description: Documentation for api.brawltools.com.
content: request
version: v2
---

# GetMatchup

Returns the head to head stats of specified players.

## Request

### Syntax

`https://api.brawltools.com/v1/matchup`

### Query Parameters

- **IsOfficial** - _Boolean_
  - Optional. False includes community tournaments, true excludes them. If omitted, defaults to false.

- **Entrant1SmashIds** - _Integer[]_
  - Required. The SmashId ID of the player(s).

- **Entrant2SmashIds** - _Integer[]_
  - Optional. If included, include the same number of IDs as Entrant1SmashIds.

- **GameMode** - _Integer_
  - Required. For 1v1 use 1, and for 2v2 use 2.

- **MaxResults** - _Integer_
  - Optional. Limits the results to the specified number.

- **NextToken** - _String_
  - Optional. A string specifiying the next page of results.

## Response

### Sample Response

```json
{
  "matchups": [
    {
      "matches": [17, 9],
      "games": [60, 48],
      "opponent": [
        {
          "smashId": 153043,
          "brawlhallaId": 257670,
          "name": "Boomie"
        }
      ]
    },
    {
      "matches": [13, 9],
      "games": [47, 39],
      "opponent": [
        {
          "smashId": 263473,
          "brawlhallaId": 1479056,
          "name": "wrenchd"
        }
      ]
    },
    {
      "matches": [12, 3],
      "games": [36, 10],
      "opponent": [
        {
          "smashId": 275580,
          "brawlhallaId": 1281444,
          "name": "Phazon"
        }
      ]
    },
    {
      "matches": [10, 1],
      "games": [28, 7],
      "opponent": [
        {
          "smashId": 266888,
          "brawlhallaId": 3001049,
          "name": "Simba"
        }
      ]
    },
    {
      "matches": [4, 5],
      "games": [19, 17],
      "opponent": [
        {
          "smashId": 728941,
          "brawlhallaId": 1396588,
          "name": "STING RAY"
        }
      ]
    },
    {
      "matches": [7, 2],
      "games": [24, 9],
      "opponent": [
        {
          "smashId": 328895,
          "brawlhallaId": 3666461,
          "name": "Snowy"
        }
      ]
    },
    {
      "matches": [6, 3],
      "games": [20, 11],
      "opponent": [
        {
          "smashId": 153671,
          "brawlhallaId": 285963,
          "name": "Cody Travis"
        }
      ]
    },
    {
      "matches": [7, 2],
      "games": [22, 9],
      "opponent": [
        {
          "smashId": 153396,
          "brawlhallaId": null,
          "name": "Isidroo"
        }
      ]
    },
    {
      "matches": [8, 1],
      "games": [19, 5],
      "opponent": [
        {
          "smashId": 767408,
          "brawlhallaId": 91026,
          "name": "Remmy"
        }
      ]
    },
    {
      "matches": [5, 2],
      "games": [18, 10],
      "opponent": [
        {
          "smashId": 263960,
          "brawlhallaId": 1565267,
          "name": "noeL"
        }
      ]
    }
  ],
  "nextToken": "7-28-263960"
}
```

### Response Elements

The following data is returned in JSON.

- **Matchups** - _Object[]_
  - An array of matchup objects involving the specified players. This is a <a href="../../datatypes/matchup">matchups</a> datatype.

- **NextToken** - _String_
  - Allows you to move to the next page of results.
