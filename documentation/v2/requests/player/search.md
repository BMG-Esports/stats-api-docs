---
title: SearchPlayers
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# SearchPlayers

Searches Power Ranked players by name.

## Request

### Syntax

```url
https://api.brawltools.com/v2/player/search
```

### Query Parameters

| Parameter  | Type    | Description                                              |
| ---------- | ------- | -------------------------------------------------------- |
| Query      | String  | Required. The text to be searched.                       |
| maxResults | Integer | Optional. Limits the results to the specified number.    |
| nextToken  | String  | Optional. A string specifiying the next page of results. |

## Response

### Sample Response

```json
{
  "searchPlayers": [
    {
      "player": {
        "smashId": 2018688,
        "brawlhallaId": null,
        "name": "Anonymous Alex",
        "twitch": "anonymous_alex_",
        "twitter": "anonymous_alex_"
      },
      "pr1v1": 15,
      "pr2v2": 42,
      "region": "NA",
      "top32": 12,
      "top8": 2,
      "gold": 0,
      "silver": 0,
      "bronze": 0,
      "earnings": 7875
    },
    {
      "player": {
        "smashId": 891010,
        "brawlhallaId": null,
        "name": "Maxy",
        "twitch": "MaxiS92K",
        "twitter": "MaxiS92K"
      },
      "pr1v1": 49,
      "pr2v2": 14,
      "region": "SA",
      "top32": 0,
      "top8": 0,
      "gold": 0,
      "silver": 0,
      "bronze": 0,
      "earnings": 1550
    }
  ],
  "nextToken": null
}
```

### Response Elements

| Element      | Type   | Description                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| searchPlayer | Object | The results of the search. This is a <a href="../../datatypes/searchplayer">SearchPlayer</a> object. |
| nextToken    | String | A string to be used as a nextToken argument.                 |
