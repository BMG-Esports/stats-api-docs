---
title: GetPlayerByCmId
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetPlayerByCmId

Returns information on a player based on their Challengermode ID.

## Request

### Syntax

```url
https://api.brawltools.com/v2/player/cmId/:cmPlayerId
```

### Path Parameters

| Parameter  | Description                            |
| ---------- | -------------------------------------- |
| cmPlayerId | The Challengermode ID for this player. |

## Response

### Sample Response

```json
{
  "player": {
    "playerId": 74433,
    "sggPlayerId": 57335,
    "cmPlayerId": "6cf1aca1-620a-4a78-b9dd-831a8ee361e0",
    "brawlhallaId": 738230,
    "name": "Sandstorm",
    "twitter": "GDSandstorm",
    "twitch": "Gdsandstorm",
    "country": "United States"
  }
}
```

### Response Elements

The following data is returned in JSON.

| Element | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| player  | Object | Detailed information of the player. This is a [Player](../../../datatypes/player) object. |
