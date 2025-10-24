---
title: GetMatchupMatches
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# GetMatchupMatches

Returns any matches specified players played in a specific tournament.

## Request

### Syntax

```url
https://api.brawltools.com/v2/matchup/match
```

### Query Parameters

| Parameter         | Type   | Required | Description                               |
| ----------------- | ------ | -------- | ----------------------------------------- |
| tournamentId      | String | ✔️        | The unique slug of a tournament.          |
| entrant1PlayerIds | String | ✔️        | The ID(s) of the first set of player(s).  |
| entrant2PlayerIds | String | ✔️        | The ID(s) of the second set of player(s). |

## Response

### Sample Response

```json
{
  "matchupMatches": [
    {
      "matchId": "90273790",
      "scores": [
        2,
        3
      ],
      "legends": [
        [
          "MORDEX",
          "MORDEX",
          "MORDEX",
          "MORDEX",
          "MORDEX"
        ],
        [
          "DIANA",
          "DIANA",
          "DIANA",
          "DIANA",
          "DIANA"
        ]
      ],
      "maps": [
        "FortressoftheLions",
        "FortressoftheLions",
        "FortressoftheLions",
        "FortressoftheLions",
        "DemonIsland"
      ]
    }
  ]
}
```

### Response Elements

The following data is returned in JSON.

| Parameter      | Type   | Description                                                                                                                             |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| matchupMatches | Object | An object containing information about a specific match. This is a <a href="../../../datatypes/matchupmatch">MatchupMatch</a> datatype. |
