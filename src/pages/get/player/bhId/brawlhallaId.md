---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../../layouts/Layout.astro
---

# GetPlayerByBhId

Fetches basic information about a player from their BrawlhallaID.

## Request

### Syntax

```https://api.brawltools.com/v1/player/bhId/:BrawlhallaID```

### Path Parameters

- **BrawlhallaID** - *Integer*
	- Required. The BrawlhallaId of the player.

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
	- The basic info recorded about on a player. This is a <a href="../../../datatypes/player">player</a> datatype.
