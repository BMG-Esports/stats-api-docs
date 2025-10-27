---
title: GetPlayerRecentLegend
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetPlayerRecentLegend

Fetches a player's recently played legends.

## Request

### Syntax

```url
https://api.brawltools.com/v1/player/:PlayerID/legend
```

### Path Parameters

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| playerId  | Integer | The Start.gg ID of the player. |

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

| Parameter | Type   | Description                                                                                               |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- |
| legend    | Object | An object containing the player's most recent legend. This is a [Legend](/v1/datatypes/legend) data type. |
