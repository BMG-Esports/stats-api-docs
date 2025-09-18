---
title: GetPlayer (start.gg ID)
description: Documentation for api.brawltools.com.
content: request
version: v1
---

# GetPlayer (start.gg ID)

Fetches information about a player from a given start.gg ID.

## Request

### Syntax

`https://api.brawltools.com/v1/player/:PlayerID`

### Path Parameters

- **PlayerID** - _Integer_
  - Required. The SmashId ID of the player.

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

- **Player** - _Object_
  - The basic info recorded about on a player. This is a <a href="../../../datatypes/player">player</a> datatype.
