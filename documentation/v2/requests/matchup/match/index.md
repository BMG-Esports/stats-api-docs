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

| Parameter         | Type   | Description                                                        |
| ----------------- | ------ | ------------------------------------------------------------------ |
| tournamentId      | String | Required. The unique slug of a tournament.                         |
| entrant1PlayerIds | String | Required. The unique ID of the player(s).                          |
| entrant2PlayerIds | String | Optional. If included, include the same number of IDs as entrant1. |

## Response

### Sample Response

```json
{
  "matchupMatches": [
    {
      "matchId": 77664268,
      "scores": [3, 2],
      "legends": [[""], [""]],
      "maps": [""]
    }
  ]
}
```

### Response Elements

The following data is returned in JSON.

| Parameter      | Type   | Description                                                                                                                             |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| matchupMatches | Object | An object containing information about a specific match. This is a <a href="../../datatypes/matchupmatch.md">MatchupMatch</a> datatype. |
