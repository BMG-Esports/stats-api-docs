---
title: GetPlayerLegends
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetPlayerLegends

Returns a player's most used legends by year.

## Request

### Syntax

```url
https://api.brawltools.com/v1/player/legend
```

### Query Parameters

| Parameter       | Type            | Description                                                                                        |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| entrantSmashIds | Array (Integer) | Required. The start.gg ID of the player(s).                                                        |
| isOfficial      | Boolean         | Optional. False includes community tournaments, true excludes them. If omitted, defaults to false. |
| year            | Integer         | Optional. The year to analyze. If omitted, includes all years.                                     |
| maxResults      | Integer         | Optional. Limits the results to the specified number.                                              |
| nextToken       | String          | Optional. A string specifiying the next page of results.                                           |

## Response

### Sample Response

```json
{
  "legends": [
    {
      "name": "RENO",
      "count": 57
    },
    {
      "name": "JHALA",
      "count": 15
    },
    {
      "name": "CROSS",
      "count": 10
    },
    {
      "name": "DIANA",
      "count": 9
    },
    {
      "name": "MUNIN",
      "count": 6
    }
  ],
  "nextToken": "6-TVVOSU4="
}
```

### Response Elements

| Parameter | Type   | Description                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| legends   | Object | An array of played legends for the player. This is a <a href="../../datatypes/legend">legend</a> datatype. |
| nextToken | String | Allows you to move to the next results.                                                                    |
