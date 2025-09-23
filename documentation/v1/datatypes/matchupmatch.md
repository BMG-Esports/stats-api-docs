---
title: MatchupMatch Objects
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# MatchupMatch Object

An object containing information about a specific match between players.

## Contents

| Parameter | Type           | Description                                 |
| --------- | -------------- | ------------------------------------------- |
| matchId   | Integer        | The Start.gg match ID of the match.         |
| scores    | Integer        | The final score of the match.               |
| legends   | Array (String) | The legends used in each game of the match. |
| maps      | Array (String) | The maps played in each game of the match.  |
