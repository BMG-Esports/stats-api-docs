---
title: Player Object
description: Documentation for api.brawltools.com
content: datatype
version: v2
---

An object containing information about a player.

## Contents

| Parameter    | Type    | Description                                                                  |
| ------------ | ------- | ---------------------------------------------------------------------------- |
| playerId     | Integer | The internal esports ID of the player.                                       |
| sggPlayerId  | Integer | The player's start.gg ID.                                                    |
| cmPlayerId   | String  | The player's Challengermode ID.                                              |
| brawlhallaId | Integer | The Brawlhalla ID of the player.                                             |
| name         | String  | The name of the player.                                                      |
| twitter      | String  | The username of the player's X (formerly Twitter) account. Omitted if empty. |
| twitch       | String  | The username of the player's Twitch.tv account. Omitted if empty.            |
| country      | String  | The player's originating country. Omitted if empty.                          |
| discord      | String  | The username of the player's Discord account. Omitted if empty.              |
