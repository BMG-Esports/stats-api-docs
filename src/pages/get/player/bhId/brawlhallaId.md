---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../../layouts/Layout.astro
---

# GetPlayerByBhId

Fetches basic information about a player from their BrawlhallaID.

## Request

### Syntax

```https://api.brawltools.com/player/bhId/:BrawlhallaID```

### Path Parameters

- **BrawlhallaID** - *number*
	- The Brawlhalla ID of the player.

### Request Body

This method does not have a body.

## Response

### Sample Response

```json
{
    "player": {
        "smashId": 57335,
        "brawlhallaId": 738230,
        "name": "Sandstorm"
    }
}
```

### Response Elements

The following data is returned in JSON.	

- **Player** - *Object*
	- The basic info recorded about a player.
	- <a href="../../../datatypes/player">Player Object</a>
