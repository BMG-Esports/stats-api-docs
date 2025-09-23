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

`https://api.brawltools.com/v1/player/legend`

### Query Parameters

- **EntrantSmashIds** - _Integer[]_
  - Required. The SmashId ID of the player(s).

- **IsOfficial** - _Boolean_
  - Optional. False includes community tournaments, true excludes them. If omitted, defaults to false.

- **Year** - _Integer_
  - Optional. The year to analyze. If omitted, includes all years.

- **MaxResults** - _Integer_
  - Optional. Limits the results to the specified number.

- **NextToken** - _String_
  - Optional. A string specifiying the next page of results.

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

- **Legends** - _Object[]_
  - An array of played legends for the player. This is a <a href="../../datatypes/legend">legend</a> datatype.

- **NextToken** - _String_
  - Allows you to move to the next results.
