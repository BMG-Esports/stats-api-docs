---
title: PlayerMatches
description: Documentation for api.brawltools.com.
content: datatypes
version: v2
---

# PlayerMatches Object

An object containing information about a player's matches.

## Content

| Attribute | Type            | Description                                                  |
| --------- | --------------- | ------------------------------------------------------------ |
| matchId   | String          | The unique ID of the match.                                  |
| scores    | Array (Integer) | The final score of the match.                                |
| legends   | Array (String)  | The legends used by each player in the match. If legends are unreported, the array can be empty. |
| maps      | Array (String)  | The maps played on during the set. If maps are unreported, the array can be empty. |
| opponent  | Object          | The basic info recorded about the player's opponent. This is a [Player](/v2/datatypes/player) object. |
