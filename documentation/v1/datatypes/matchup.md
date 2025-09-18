---
title: Matchup Object
description: Documentation for api.brawltools.com.
content: datatype
version: v1
---

# Matchup Object

An object containing the matchup information of specified players.

## Contents

| Parameter | Type                               | Description                                       |
| --------- | ---------------------------------- | ------------------------------------------------- |
| matches   | Array                              | The number of matches won by each player or team. |
| games     | Array                              | The number of games won by each player or team.   |
| Opponent  | <a href="player">Player Object</a> | The opponent of the player(s).                    |

- **Matches** - _Integer[]_
  - The number of matches won by each player or team.

- **Games** - _Integer[]_
  - The number of games won by each player or team.

- **Opponent** - _Player[]_
  - The opponent of the player(s). This is a <a href="player">player</a> object.
