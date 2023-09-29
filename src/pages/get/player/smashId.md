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

This response body can contain the following fields in JSON.	

- **smashId** - *number*
	- The Start.gg ID of the player.

- **brawlhallaId** - *number*
	- The Brawlhalla ID of the player.

- **name** - *string*
	- The name of the player as listed on Start.gg.

- **twitter** - *string*
	- The username of the player's X account as listed on Start.gg.

- **twitch** - *string*
	- The username of the player's Twitch account as listed on Start.gg.

- **pronoun** - *string*
	- The player's pronouns as listed on Start.gg.

- **country** - *string*
	- The player's country as listed on Start.gg.
