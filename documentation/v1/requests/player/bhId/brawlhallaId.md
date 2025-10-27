---
title: GetPlayerByBhId
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetPlayerByBhId

Fetches basic information about a player from their BrawlhallaID.

## Request

### Syntax

```url
https://api.brawltools.com/v1/player/bhId/:BrawlhallaID
```

### Path Parameters

| Parameter    | Type    | Description                      |
| ------------ | ------- | -------------------------------- |
| brawlhallaId | Integer | The Brawlhalla ID of the player. |

## Response

### Sample Response

```json
{
  "player": {
    "smashId": 57335,
    "brawlhallaId": 738230,
    "name": "Sandstorm"
  }
}
```

### Response Elements

The following data is returned in JSON.

| Parameter | Type   | Description                                                                                   |
| --------- | ------ | --------------------------------------------------------------------------------------------- |
| player    | Object | The basic info recorded about on a player. This is a [Player](/v1/datatypes/player) datatype. |
