---
title: Resources
description: Documentation for api.brawltools.com.
content: resources
version: v2
---

# Resources

## How can I use this API?

The easiest way to interface with the API is by using the [esports SDK](https://www.npmjs.com/package/@bmg-esports/sdk). It can be used with both JavaScript and Typescript, and is easy to initialize.

## What is a playerId?

New to version 2.0 is the Player ID, which is Brawlhalla's internal esports ID for a player. You can obtain a player's ID by using one of the other three IDs and calling one of the `GetPlayerBy` endpoints.

## What is a SggId?

A SggId (formerly known as a SmashId) is a player's unique Start.gg ID. This ID is not the alphanumeric phrase found on your Start.gg profile, and is typically only visible through Start.gg's developer API. For more information, visit Start.gg's [Developer Portal](https://developer.start.gg/).

## What is a CmId?

A CmId is a player's unique Challengermode ID. You can find a player's CmId by going to their Challengermode user page - the UUID can be found at the end of the URL.

## What is a BhId?

A BhId is a player's unique game ID. Your BhId can be found by opening Brawlhalla and checking the inventory tab - it is listed on the top right.
