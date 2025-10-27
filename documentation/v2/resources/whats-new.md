---
title: What's New
description: Changes for api.brawltools.com
content: resources
version: v2
---

# What's New

## Version 2.0

### Additions

#### Challengermode Support

Version 2.0 supports returning data from **Challengermode** tournaments. All Challengermode data uses UUIDs - this is most distinct in tournament identifiers, as Start.gg uses slugs instead.

This is the identifier for the <a href="https://www.challengermode.com/s/Brawlhalla/tournaments/bd580f1f-4006-463a-420d-08dd69fad61e">2025 North American 1v1 Spring Championships</a>, a Challengermode tournament.

```json
"bd580f1f-4006-463a-420d-08dd69fad61e"
```

This is the identifier for the <a href="https://www.start.gg/tournament/spring-doubles-championship-north-america/events">2024 North American 2v2 Spring Championships</a>, a Start.gg tournament.

```json
"tournament/spring-doubles-championship-north-america/event/brawlhalla-championship-2v2"
```

Because of differences in functionality, some API fields may not return some attributes and other attributes can look radically different. For example:

- Tournament objects will return a ```tournamentEvent``` attribute of null with a Challengermode tournament.
- ```MatchIds``` in MatchupMatch objects can either be a number (for Start.gg) or a UUID.

### Modifications

#### Player IDs

In Version 2.0, players are primarily identified by a unique esports identifier. Players can optionally have other identifiers, including Challengermode, Start.gg, or Brawlhalla. However, these alternate IDs cannot be used for the majority of API calls.
