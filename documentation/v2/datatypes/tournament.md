---
title: Tournament Object
description: Documentation for api.brawltools.com.
content: datatype
version: v2
---

An object countaining information about a specific tournament.

## Contents

| Parameter       | Type    | Description                                                      |
| --------------- | ------- | ---------------------------------------------------------------- |
| Id              | String  | The ID of the tournament.                                        |
| TournamentName  | String  | The name of the tournament.                                      |
| TournamentEvent | String  | The name of the event.                                           |
| Year            | Integer | The year the event was held.                                     |
| IsOfficial      | Boolean | This will be true if the event was hosted by Blue Mammoth Games. |
| IsTwos          | Boolean | This will be true if the tournament event is 2v2.                |
| IsOnline        | Boolean | This will be false if the tournament is held in-person.          |
| StartTime       | Integer | A Unix timestamp of when the tournament begins.                  |
| Host            | String  | The host of the tournament - either start.gg or Challengermode.  |
