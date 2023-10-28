---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# GetPlayer

Fetches information about a player from a given ID.

## Request

### Syntax

```https://api.brawltools.com/player/:PlayerID```

### Path Parameters

- **PlayerID** - *Integer*
	- The SmashId ID of the player.

## Response

### Sample Response

```json
{
    "player": {
        "smashId": 153043,
        "brawlhallaId": 257670,
        "name": "Boomie",
        "twitch": "boomiexd",
        "twitter": "Boomiexd",
        "country": "United States"
    }
}
```

### Response Elements

The following data is returned in JSON.	

- **Player** - *Object*
	- The basic info recorded about on a player. This is a <a href="../../../datatypes/player">player</a> datatype.
