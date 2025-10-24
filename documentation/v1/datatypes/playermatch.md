---
title: PlayerMatches Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# PlayerMatches

An object containing information about a player's matches.

## Contents

| Parameter | Type            | Description                                                  |
| --------- | --------------- | ------------------------------------------------------------ |
| matchId   | Integer         | The Start.gg ID of the match.                                |
| scores    | Array (Integer) | The final score of the match.                                |
| legends   | Array (String)  | The legends used by each player in the match. If legends are unreported, the array can be empty. |
| maps      | Array (String)  | The maps played on during the set. If maps are unreported, the array can be empty. |
| opponent  | Object          | The basic info recorded about the player's opponent. This is a <a href="../../datatypes/player">player</a> object. |
