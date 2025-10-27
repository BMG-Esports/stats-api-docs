---
title: Player
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# Player Object

An object containing information about a player.

## Contents

| Attribute    | Type    | Description                                                  |
| ------------ | ------- | ------------------------------------------------------------ |
| smashId      | Integer | The Start.gg ID of the player.                               |
| brawlhallaId | Integer | The Brawlhalla ID of the player.                             |
| name         | String  | The name of the player.                                      |
| twitter      | String  | The username of the player's X (formerly Twitter) account. Omitted if empty. |
| twitch       | String  | The username of the player's Twitch.tv account. Omitted if empty. |
| country      | String  | The player's originating country. Omitted if empty.          |
| pronoun      | String  | The player's pronouns as listed on Start.gg. Omitted if empty. |
