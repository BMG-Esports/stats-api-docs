---
title: Tournament Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v2
---

An object countaining information about a specific tournament.

## Contents

| Parameter       | Type    | Description                                                      |
| --------------- | ------- | ---------------------------------------------------------------- |
| id              | String  | The ID of the tournament.                                        |
| tournamentName  | String  | The name of the tournament.                                      |
| tournamentEvent | String  | The name of the event.                                           |
| year            | Integer | The year the event was held.                                     |
| isOfficial      | Boolean | This will be true if the event was hosted by Blue Mammoth Games. |
| isTwos          | Boolean | This will be true if the tournament event is 2v2.                |
| isOnline        | Boolean | This will be false if the tournament is held in-person.          |
| startTime       | Integer | A Unix timestamp of when the tournament begins.                  |
| host            | String  | The host of the tournament - either start.gg or Challengermode.  |
