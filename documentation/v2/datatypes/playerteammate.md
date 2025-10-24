---
title: PlayerTeammate Object
description: Documentation for api.brawltools.com.
content: datatypes
version: v2
---

# PlayerTeammate

An object containing information about a player's 2v2 teams.

## Contents

| Parameter      | Type    | Description                                                                                                           |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| player         | Object  | An object containing information on a player's teammate. This is a <a href="../datatypes/player">Player</a> datatype. |
| games          | Integer | The total number of games played with this teammate.                                                                  |
| lastTeamedDate | Integer | The most recent day where the players teamed up in a tournament. This is a UNIX timestamp.                            |
