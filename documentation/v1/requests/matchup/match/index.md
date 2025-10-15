---
title: GetMatchupMatches
description: Documentation for api.brawltools.com.
content: requests
version: v1
---

# GetMatchupMatches

Returns any matches specified players played in a specific tournament.

## Request

### Syntax

```url
https://api.brawltools.com/v1/matchup/match
```

### Query Parameters

| Parameter        | Type            | Description                                              |
| ---------------- | --------------- | -------------------------------------------------------- |
| eventSlug        | String          | Required. The identifying start.gg slug of a tournament. |
| entrant1SmashIds | Array (Integer) | Required. The start.gg ID of the player(s).              |
| entrant2SmashIds | Array (Integer) | Required. The start.gg ID of the player(s).              |

## Response

### Sample Response

```json
{
  "matchupMatches": [
    {
      "matchId": 58574173,
      "scores": [3, 0],
      "legends": [
        ["LUCIEN", "LUCIEN", "LUCIEN"],
        ["CASPIAN", "ASURI", "ASURI"]
      ],
      "maps": [
        "Small Fortress of Lions",
        "Small Fortress of Lions",
        "Small Fortress of Lions"
      ]
    },
    {
      "matchId": 58574172,
      "scores": [3, 0],
      "legends": [
        ["LUCIEN", "LUCIEN", "LUCIEN"],
        ["VAL", "VAL", "CASPIAN"]
      ],
      "maps": [
        "Small Fortress of Lions",
        "Small Fortress of Lions",
        "Miami Dome"
      ]
    }
  ]
}
```

### Response Elements

The following data is returned in JSON.

| Parameter      | Type   | Description                                                                                                                             |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| matchupMatches | Object | An object containing information about a specific match. This is a <a href="../../datatypes/matchupmatch.md">MatchupMatch</a> datatype. |
