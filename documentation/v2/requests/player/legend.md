---
title: GetPlayerLegends
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetPlayerLegends

Returns a player's most used legends by year.

## Request

### Syntax

```url
https://api.brawltools.com/v2/player/legend
```

### Query Parameters

| Parameter  | Type    | Required | Description                                                                                  |
| ---------- | ------- | -------- | -------------------------------------------------------------------------------------------- |
| playerIds  | String  | ✔️       | The ID(s) of the player(s).                                                                  |
| isOfficial | Boolean | ❌       | False includes community tournaments, true excludes them. If omitted, defaults to false.     |
| year       | Integer | ❌       | The year to filter results to.                                                               |
| maxResults | Integer | ❌       | Limits the results to the specified number, with a maximum of 10. If omitted, defaults to 5. |
| nextToken  | String  | ❌       | A string specifying the next page of results.                                                |

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

| Element   | Type   | Description                                                                                   |
| --------- | ------ | --------------------------------------------------------------------------------------------- |
| legends   | Object | An array of played legends for the player. This is a [Legend](/v2/datatypes/legend) datatype. |
| nextToken | String | A string to be used as a nextToken argument.                                                  |
