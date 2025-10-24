---
title: Tournament Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# Tournament

An object containing information about a tournament.

## Contents

| Parameter      | Type    | Description                                                 |
| -------------- | ------- | ----------------------------------------------------------- |
| slug           | String  | The identifying Start.gg slug of a tournament.              |
| tournamentName | String  | The official name of the tournament.                        |
| eventName      | String  | The name of the tournament event.                           |
| year           | Integer | The year the tournament was held.                           |
| isOfficial     | Boolean | Notes if the event was officially sanctioned by Brawlhalla. |
| isTwos         | Boolean | Notes if the event was 1v1 or 2v2.                          |
| startTime      | Integer | A Unix timestamp of when the tournament began.              |
