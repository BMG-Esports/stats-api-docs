---
title: SearchPlayer
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# SearchPlayer Object

An object containing search results for the SearchPlayers method.

## Content

| Attribute | Type    | Description                                                                                  |
| --------- | ------- | -------------------------------------------------------------------------------------------- |
| player    | Object  | Basic information about a player. This is a [Player](/v1/datatypes/player) object.           |
| pr1v1     | Object  | The player's current 1v1 Power Ranking. This is a [PlayerPr](/v1/datatypes/playerpr) object. |
| pr2v2     | Object  | The player's current 2v2 Power Ranking. This is a [PlayerPr](/v1/datatypes/playerpr) object. |
| earnings  | Float32 | The amount of USD the player has earned.                                                     |
