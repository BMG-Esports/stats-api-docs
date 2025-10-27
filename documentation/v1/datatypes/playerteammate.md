---
title: PlayerTeammate
description: Documentation for api.brawltools.com.
content: datatypes
version: v1
---

# PlayerTeammate Object

An object containing information about a player's 2v2 teams.

## Contents

| Attribute      | Type    | Description                                                  |
| -------------- | ------- | ------------------------------------------------------------ |
| player         | Object  | An object containing information on a player's teammate. This is a [Player](/v1/datatypes/player) datatype. |
| games          | Integer | The total number of games played with this teammate.         |
| lastTeamedDate | Integer | The most recent day where the players teamed up in a tournament. This is a UNIX timestamp. |
