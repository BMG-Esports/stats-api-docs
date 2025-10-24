---
title: GetPlayerBySggId
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetPlayerBySggId

Fetches information about a player from a given Start.gg ID.

## Request

### Syntax

```url
https://api.brawltools.com/v1/player/:PlayerID
```

### Path Parameters

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| playerId  | Integer | The Start.gg ID of the player. |

## Response

### Sample Response

```json
{
  "player": {
    "smashId": 153043,
    "brawlhallaId": 257670,
    "name": "Boomie",
    "twitch": "boomiexd",
    "twitter": "Boomiexd",
    "country": "United States"
  }
}
```

### Response Elements

The following data is returned in JSON.

| Parameter | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| player    | Object | The basic info recorded about on a player. This is a <a href="../../../datatypes/player">Player</a> datatype. |
