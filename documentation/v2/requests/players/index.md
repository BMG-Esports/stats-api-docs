---
title: ListPlayers
description: Documentation for api.brawltools.com.
content: requests
version: v2

---

# ListPlayers

Lists the information of specified players.

## Request

### Syntax

```url
https://api.brawltools.com/v2/players
```

### Query Parameters

| Parameter | Type    | Description                                         |
| --------- | ------- | --------------------------------------------------- |
| playerIds | String  | The ID of the player being searched.                |
| bhIds     | String  | The Brawlhalla ID of the player being searched.     |
| sggIds    | String  | The Start.gg ID of the player being searched.       |
| cmIds     | String  | The Challengermode ID of the player being searched. |
| gameMode  | Integer | Optional. For 1v1 use 1, and for 2v2 use 2.         |

Only one of the player ID types will be accepted. Using more than one will result in a 400 Response.

## Response

### Sample Response

```json
{
  "players": [
    {
      "playerId": 146052,
      "sggPlayerId": 2339938,
      "cmPlayerId": "bf544dc0-9e67-4b27-b453-80099bf450cd",
      "brawlhallaId": 110282750,
      "name": "ECHO | Marckiemoo"
    }
  ]
}
```

### Response Elements

The following data is returned in JSON.

| Element | Type   | Description                                                  |
| ------- | ------ | ------------------------------------------------------------ |
| player  | Object | Detailed information of the player. This is a [player](../../datatypes/player) object. |