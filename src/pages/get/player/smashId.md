---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# GetPlayer

Fetches information about a player from their ID.

## Request

### Syntax

```https://api.brawltools.com/player/:PlayerID```

### Path Parameters

- **PlayerID** - *number*
	- The Start.gg ID of the player.

### Request Body

This method does not have a body.

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
	- The basic info recorded about a player.
	- <a href="../../datatypes/player">Player Object</a>
