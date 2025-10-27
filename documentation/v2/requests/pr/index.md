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

| Parameter  | Type    | Required | Description                                                                                    |
| ---------- | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| page       | Integer | ❌       | Lists the specified page.                                                                      |
| gameMode   | Integer | ✔️       | For 1v1 use 1, and for 2v2 use 2.                                                              |
| region     | String  | ✔️       | Acceptable regions are NA, EU, SA, SEA, MENA, LAN.                                             |
| maxResults | Number  | ❌       | Limits the results to the specified number, with a maximum of 100. If omitted, defaults to 50. |
| orderBy    | String  | ❌       | Sorts the result by a specified parameter. Correct formatting is `field SORT`.                 |

- The sortable fields are PlayerID, PlayerName, Top8, Top32, Gold, Silver, Bronze, PowerRanking, Earnings, and Points.
- You can sort ascending (lowest first) using ASC and descending (highest first) using DESC.

The orderBy parameter is formatted differently than other strings used as parameters. Here is an example call using it to sort North American 1v1 players by gold medals in descending order.

```url
https://api.brawltools.com/v2/pr?gameMode=1&region=NA&orderBy=gold+DESC
```

Note that:

- The field is first, and is lowercase.
- The order is second and is fully capitalized.
- The two parameters are separated by a space. This is indicated by the plus sign joining the two together.

Here are other valid calls.

```url
https://api.brawltools.com/v2/pr?gameMode=2&region=MENA&orderBy=playerName+ASC&maxResults=10
```

```url
https://api.brawltools.com/v2/pr?gameMode=2&region=EU&orderBy=earnings+DESC&maxResults=5&page=2
```

## Response

### Sample Response

```json
{
  "prPlayers": [
    {
      "playerId": 147982,
      "playerName": "Zivai",
      "top8": 23,
      "top32": 25,
      "gold": 7,
      "silver": 5,
      "bronze": 4,
      "powerRanking": 5,
      "points": 294.807,
      "earnings": 194008.33
    },
    {
      "playerId": 144399,
      "playerName": "acno?",
      "top8": 43,
      "top32": 48,
      "gold": 23,
      "silver": 9,
      "bronze": 6,
      "powerRanking": 2,
      "points": 333.522,
      "earnings": 175715
    },
    {
      "playerId": 149204,
      "playerName": "Blaze",
      "top8": 47,
      "top32": 56,
      "gold": 23,
      "silver": 10,
      "bronze": 5,
      "powerRanking": 7,
      "points": 270.248,
      "earnings": 114807.83
    },
    {
      "playerId": 118096,
      "playerName": "Fozey#2297",
      "top8": 31,
      "top32": 51,
      "gold": 4,
      "silver": 3,
      "bronze": 10,
      "powerRanking": 37,
      "points": 82.256,
      "earnings": 56597
    },
    {
      "playerId": 149303,
      "playerName": "Neeze",
      "top8": 21,
      "top32": 50,
      "gold": 1,
      "silver": 4,
      "bronze": 2,
      "powerRanking": 41,
      "points": 74.293,
      "earnings": 54448.34
    }
  ],
  "totalPages": 282,
  "lastUpdated": "2025-09-22"
}
```

### Response Elements

The following data is returned in JSON.

| Element   | Type   | Description                                                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| prPlayers | Object | An object containing a player's Power Ranking information. This is a [PrPlayer](/v2/datatypes/prplayer) datatype. |
