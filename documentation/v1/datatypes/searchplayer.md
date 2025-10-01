---
title: SearchPlayer Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# SearchPlayer

An object containing search results for the SearchPlayers method.

## Content

| Parameter | Type    | Description                                                                                     |
| --------- | ------- | ----------------------------------------------------------------------------------------------- |
| player    | Object  | Basic information about a player. This is a <a href="../../datatypes/player">player</a> object. |
| pr1v1     | Integer | The player's current 1v1 Power Ranking.                                                         |
| pr2v2     | Integer | The player's current 2v2 Power Ranking.                                                         |
| region    | String  | The player's region.                                                                            |
| top8      | Integer | The number of Top 8 placements the player has recieved.                                         |
| top32     | Integer | The number of Top 32 placements the player has recieved.                                        |
| gold      | Integer | The number of gold medals the player has recieved.                                              |
| silver    | Integer | The number of silver medals the player has recieved.                                            |
| bronze    | Integer | The number of bronze medals the player has recieved.                                            |
| earnings  | Float32 | The amount of USD the player has earned.                                                        |
