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

- **BrawlhallaID** - *Integer*
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

- **<a href="../../../datatypes/player">Player</a>** - *Object*
	- The basic info recorded about a player.
