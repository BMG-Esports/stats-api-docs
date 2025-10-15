---
title: GetPlayerRecentLegend
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetPlayerRecentLegend

Fetches a player's recently played legends.

## Request

### Syntax

```url
https://api.brawltools.com/v2/player/:PlayerID/legend
```

### Path Parameters

| Parameter | Type    | Description                                    |
| --------- | ------- | ---------------------------------------------- |
| playerId  | Integer | Required. The ID of the player being searched. |

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

| Element | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| legend  | Object | An object containing the player's most recent legend. This is a <a href="../../../datatypes/legend">legend</a> data type. |
