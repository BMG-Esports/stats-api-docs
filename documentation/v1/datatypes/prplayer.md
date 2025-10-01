---
title: PrPlayer Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# PrPlayer

An object containing Power Ranking information for a player.

## Contents

| Parameter    | Type    | Description                                                                  |
| ------------ | ------- | ---------------------------------------------------------------------------- |
| playerId     | Integer | The player's start.gg ID.                                                    |
| playerName   | String  | The player's username.                                                       |
| name         | String  | The name of the player.                                                      |
| twitter      | String  | The username of the player's X (formerly Twitter) account. Omitted if empty. |
| twitch       | String  | The username of the player's Twitch.tv account. Omitted if empty.            |
| top8         | Integer | The number of Top 8 placements the player has recieved.                      |
| top32        | Integer | The number of Top 32 placements the player has recieved.                     |
| gold         | Integer | The number of gold medals the player has recieved.                           |
| silver       | Integer | The number of silver medals the player has recieved.                         |
| bronze       | Integer | The number of bronze medals the player has recieved.                         |
| powerRanking | Integer | The player's current power ranking.                                          |
| earnings     | Float32 | The amount of USD the player has earned.                                     |
