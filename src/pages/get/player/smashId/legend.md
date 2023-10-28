---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../../layouts/Layout.astro
---

# GetPlayerRecentLegend

Fetches a player's recently played legends.

## Request

### Syntax

```https://api.brawltools.com/player/:PlayerID/legend```

### Path Parameters

- **PlayerID** - *Integer*
	- The SmashId ID of the player.

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
    - An object containing the player's most recent legend. This is a <a href="../../../datatypes/legend">legend</a> data type.
