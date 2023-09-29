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

This response body  can contain the following fields in JSON.

- **smashId** - *number*
	- The Start.gg ID of the player.

- **brawlhallaId** - *number*
	- The Brawlhalla ID of the player.

- **name** - *string*
	- The name of the player as listed on Start.gg.
