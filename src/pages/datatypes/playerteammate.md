---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# PlayerTeammate

An object containing information about a player's 2v2 teams.

## Contents

- **Player** - *Object*
    - An object containing information on a player's teammate. This is a <a href="../datatypes/player">Player</a> datatype.

- **Games** - *Integer*
    - The total number of games played with this teammate.

- **LastTeamedDate** - *Integer*
    - The most recent day where the players teamed up in a tournament. This is a UNIX timestamp.