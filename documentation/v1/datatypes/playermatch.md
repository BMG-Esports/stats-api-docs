---
title: PlayerMatches Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# PlayerMatches

An object containing information about a player's matches.

## Contents

- **MatchId** - _Integer_
  - The Start.gg ID of the match.

- **Scores** - _Integer[]_
  - The final score of the match.

- **Legends** - _String[][]_
  - The legends used by each player in the match. If legends are unreported, the array can be empty.

- **Maps** - _String[]_
  - The maps played on during the set.

- **Opponent** - _Object[]_
  - The basic info recorded about the player's opponent. This is a <a href="../../datatypes/player">player</a> object.
