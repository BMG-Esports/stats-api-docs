---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# Player

An object containing information about a player.

## Contents

- **SmashId** - *Integer*
	- The Start.gg ID of the player.

- **BrawlhallaId** - *Integer*
	- The Brawlhalla ID of the player. Omitted if a player does not have one.

- **Name** - *String*
	- The name of the player as listed on Start.gg.

- **Twitter** - *String*
	- The username of the player's X account as listed on Start.gg. Omitted if a player has not added one.

- **Twitch** - *String*
	- The username of the player's Twitch account as listed on Start.gg. Omitted if a player has not added one.

- **Pronoun** - *String*
	- The player's pronouns as listed on Start.gg. Omitted if a player has not listed any.

- **Country** - *String*
	- The player's country as listed on Start.gg. Omitted if a player has not listed one.