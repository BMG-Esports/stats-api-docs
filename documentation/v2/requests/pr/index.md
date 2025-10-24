---
title: ListPr
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# ListPr

Returns the Power Rankings for the specified region and game mode.

## Request

### Syntax

```url
https://api.brawltools.com/v2/pr
```

### Query Parameters

| Parameter  | Type    | Required | Description                                                  |
| ---------- | ------- | -------- | ------------------------------------------------------------ |
| page       | Integer | ❌        | Lists the specified page.                                    |
| gameMode   | Integer | ✔️        | For 1v1 use 1, and for 2v2 use 2.                            |
| region     | String  | ✔️        | Acceptable regions are NA, EU, SA, SEA, AUS.                 |
| maxResults | Number  | ❌        | Limits results to the specified number.                      |
| orderBy    | String  | ❌        | Sorts the result by a specified parameter. Use ASC for ascending and DESC for descending order. |

- The sortable fields are PlayerID, PlayerName, Top8, Top32, Gold, Silver, Bronze, PowerRanking, Earnings, and Points.

## Response

### Sample Response

```json
{
  "prPlayers": [
    {
      "playerId": 1719505,
      "playerName": "luna",
      "twitter": "lunaabh",
      "twitch": "lunaa",
      "top8": 17,
      "top32": 22,
      "gold": 6,
      "silver": 2,
      "bronze": 4,
      "powerRanking": 1,
      "earnings": 122331.66
    },
    {
      "playerId": 1336840,
      "playerName": "Impala",
      "twitter": "ImpalaVS",
      "twitch": "impalavs",
      "top8": 12,
      "top32": 21,
      "gold": 3,
      "silver": 2,
      "bronze": 1,
      "powerRanking": 2,
      "earnings": 73930
    },
    {
      "playerId": 57335,
      "playerName": "Sandstorm",
      "twitter": "GDSandstorm",
      "twitch": "Gdsandstorm",
      "top8": 44,
      "top32": 49,
      "gold": 23,
      "silver": 6,
      "bronze": 4,
      "powerRanking": 3,
      "earnings": 223799.17
    },
    {
      "playerId": 1387617,
      "playerName": "megD",
      "twitter": "Megdyyyy",
      "twitch": "megdyy",
      "top8": 11,
      "top32": 26,
      "gold": 0,
      "silver": 2,
      "bronze": 2,
      "powerRanking": 4,
      "earnings": 40475
    },
    {
      "playerId": 1749170,
      "playerName": "Raydish",
      "twitter": "Raydish_",
      "twitch": "Raydish",
      "top8": 8,
      "top32": 20,
      "gold": 2,
      "silver": 1,
      "bronze": 0,
      "powerRanking": 5,
      "earnings": 39575
    }
  ],
  "totalPages": 352
}
```

### Response Elements

The following data is returned in JSON.

| Element   | Type   | Description                                                                                                                    |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| prPlayers | Object | An object containing a player's Power Ranking information. This is a <a href="../../datatypes/prplayer">PrPlayer</a> datatype. |
