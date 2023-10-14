---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# PlayerMatches

An object containing information about a specific match.

## Contents

- **MatchId** - *Integer*
    - The Start.gg ID of the match.

- **Scores** - *Integer[]*
    - The final score of the match.

- **Legends** - *String[][]*
    - The legends used by each player in the match. If legends are unreported, the array can be empty.

- **Maps** - *String[]*
    - The maps played on during the set.

- **Opponent** - *Object[]*
	- The basic info recorded about the player's opponent. This is a <a href="../../datatypes/player">player</a> object.