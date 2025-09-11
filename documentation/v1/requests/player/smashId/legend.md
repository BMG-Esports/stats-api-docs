---
title: GetPlayerRecentLegend
description: "Documentation for api.brawltools.com"
content: request
version: v1
---

# GetPlayerRecentLegend

Fetches a player's recently played legends.

## Request

### Syntax

`https://api.brawltools.com/v1/player/:PlayerID/legend`

### Path Parameters

- **PlayerID** - _Integer_
  - Required. The SmashId ID of the player.

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

- **Legend** - _Object_
  - An object containing the player's most recent legend. This is a <a href="../../../datatypes/legend">legend</a> data type.
