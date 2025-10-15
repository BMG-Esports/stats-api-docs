---
title: GetPlayerTeammates
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetPlayerTeammates

Fetches a player's previous teammates from their ID.

## Request

### Syntax

```url
https://api.brawltools.com/v2/player/teammate
```

### Query Parameters

| Parameters | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| playerId   | Integer | Required. The ID of the player being searched.               |
| maxResults | Integer | Optional. Limits the results to the specified number.        |
| isOfficial | Boolean | Optional. False includes community tournaments, true excludes them. |
| nextToken  | String  | Optional. A string specifiying the next page of results.     |

## Response

### Sample Response

```json
{
  "playerTeammates": [
    {
      "player": {
        "smashId": 57335,
        "brawlhallaId": 738230,
        "name": "Sandstorm"
      },
      "games": 33,
      "lastTeamedDate": 1691337600
    },
    {
      "player": {
        "smashId": 328895,
        "brawlhallaId": 3666461,
        "name": "Snowy"
      },
      "games": 6,
      "lastTeamedDate": 1667577600
    },
    {
      "player": {
        "smashId": 767408,
        "brawlhallaId": 91026,
        "name": "Remmy"
      },
      "games": 15,
      "lastTeamedDate": 1597514400
    },
    {
      "player": {
        "smashId": 11838,
        "brawlhallaId": null,
        "name": "ZEEKO"
      },
      "games": 5,
      "lastTeamedDate": 1570903200
    },
    {
      "player": {
        "smashId": 152763,
        "brawlhallaId": null,
        "name": "Blood Diamond"
      },
      "games": 1,
      "lastTeamedDate": 1564329600
    },
    {
      "player": {
        "smashId": 153671,
        "brawlhallaId": 285963,
        "name": "Cody Travis"
      },
      "games": 1,
      "lastTeamedDate": 1562436000
    },
    {
      "player": {
        "smashId": 261958,
        "brawlhallaId": 67152,
        "name": "Diakou"
      },
      "games": 1,
      "lastTeamedDate": 1529139600
    },
    {
      "player": {
        "smashId": 2239335,
        "brawlhallaId": null,
        "name": "Remmy"
      },
      "games": 1,
      "lastTeamedDate": 1509717600
    }
  ],
  "nextToken": null
}
```

### Response Elements

This response body can contain the following fields in JSON.

| Element         | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| playerTeammates | Object | An array containing a player's most popular teammates. This is a <a href="../../datatypes/playerteammate">PlayerTeammate</a> datatype. |
| nextToken       | String | A string to be used as a nextToken argument.                 |

