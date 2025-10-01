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

Version 2.0 supports returning data from Challengermode tournaments. Challengermode data typically has long alphanumeric identifiers - this is most distinct in tournament identifiers.

This is the identifier for the <a href="https://www.challengermode.com/s/Brawlhalla/tournaments/bd580f1f-4006-463a-420d-08dd69fad61e">2025 North American 1v1 Spring Championships</a>.

```json
"bd580f1f-4006-463a-420d-08dd69fad61e"
```

This is the identifier for the <a href="https://www.start.gg/tournament/spring-doubles-championship-north-america/events">2024 North American 1v1 Spring Championships</a>.

```json
""
```

### Modifications

#### Player IDs

In Version 2.0, players are primarily identified by a unique esports ID. Players can optionally have other IDs, including Challengermode, Brawlhalla, or start.gg. However, these alternate IDs cannot be used for the main endpoints - find and use the player's esports ID instead.
