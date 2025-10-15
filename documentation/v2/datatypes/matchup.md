---
title: Matchup Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v2
---

# Matchup Object

An object containing the matchup information of specified players.

## Contents

| Parameter | Type            | Description                                                                  |
| --------- | --------------- | ---------------------------------------------------------------------------- |
| matches   | Array (Integer) | The number of matches won by each player or team.                            |
| games     | Array (Integer) | The number of games won by each player or team.                              |
| Opponent  | Object          | The opponent of the player(s). This is a <a href="player">Player Object</a>. |
