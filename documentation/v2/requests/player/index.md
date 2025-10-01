---
title: GetPlayer
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

## Request

```
GET https://api.brawltools.com/v2/player/:playerID
```

## Usage

Returns information on a player based on their playerID.

## Path Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| playerId  | The interal ID for this player. |

## Response

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

This endpoint returns a [player](../../datatypes/player) object.
