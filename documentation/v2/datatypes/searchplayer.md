---
title: SearchPlayer Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v2
---

# SearchPlayer

An object containing search results for the SearchPlayers method.

## Content

| Parameter | Type    | Description                                                                                               |
| --------- | ------- | --------------------------------------------------------------------------------------------------------- |
| player    | Object  | Basic information about a player. This is a <a href="../../datatypes/player">Player</a> object.           |
| pr1v1     | Object  | The player's current 1v1 Power Ranking. This is a <a href="../../datatypes/playerpr">PlayerPR</a> object. |
| pr2v2     | Object  | The player's current 2v2 Power Ranking. This is a <a href="../../datatypes/playerpr">PlayerPR</a> object. |
| earnings  | Float32 | The amount of USD the player has earned.                                                                  |
