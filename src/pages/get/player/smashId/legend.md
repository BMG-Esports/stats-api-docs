---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../../layouts/Layout.astro
---

# GetPlayerRecentLegend

Fetches a player's recently played legends from Start.gg.

## Request

### Syntax

```https://api.brawltools.com/player/:PlayerID/legend```

### Path Parameters

- **PlayerID** - *number*
	- The Start.gg ID of the player.

### Request Body

This method does not have a body.

## Response

### Sample Response

```json
{
    "legend": {
        "name": "MIRAGE",
        "count": 12
    }
}
```

### Response Elements

- **Legend** - *Object*
    - Placeholder
    - <a href="../../../datatypes/legend">Legend Object</a>
