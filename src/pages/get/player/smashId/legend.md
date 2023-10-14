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

- **PlayerID** - *Integer*
	- The Start.gg ID of the player.

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

- **<a href="../../../datatypes/legend">Legend</a>** - *Object*
    - An object containing the player's most recent legend.
