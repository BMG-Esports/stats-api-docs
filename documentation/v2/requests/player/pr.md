---
title: GetPlayerPr
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetPlayerPr

Fetches a player's Power Ranking information from their ID.

## Request

### Syntax

```url
https://api.brawltools.com/v2/player/pr
```

### Query Parameters

| Parameter | Type    | Required | Description                               |
| --------- | ------- | -------- | ----------------------------------------- |
| playerIds | String  | ✔️       | The ID(s) of the player(s) being searched |
| gameMode  | Integer | ✔️       | For 1v1 use 1, and for 2v2 use 2.         |

## Response

### Sample Response

```json
{
  "earnings": 223799.17,
  "pr": {
    "top8": 44,
    "top32": 49,
    "gold": 23,
    "silver": 6,
    "bronze": 4,
    "powerRanking": 3,
    "region": "NA"
  }
}
```

### Response Elements

This response body can contain the following fields in JSON.

| Element  | Type    | Description                                                                                            |
| -------- | ------- | ------------------------------------------------------------------------------------------------------ |
| earnings | Integer | The amount of money the player has earned in USD.                                                      |
| pr       | Object  | An object containing Power Ranking information. This is a [PlayerPr](/v2/datatypes/playerpr) datatype. |
