---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../../layouts/Layout.astro
---

# ListEvents

Lists the most recent tournaments to populate the API.

## Request

### Syntax

```https://api.brawltools.com/v1/event```

### Query Parameters

- **GameMode** - *Integer*
    - Required. For 1v1 use 1, and for 2v2 use 2.

- **IsOfficial** - *Boolean*
    - Optional. False includes community tournaments, true excludes them. If omitted, defaults to false.

- **Year** - *Integer*
    - Optional. The year to analyze. If omitted, includes all years.

- **MaxResults** - *Integer*
    - Optional. Limits the results to the specified number.

- **NextToken** - *String*
    - Optional. A string specifiying the next page of results.

## Response

### Sample Response

```json
{
    "tournaments": [
        {
            "slug": "tournament/north-america-autumn-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "North America - Autumn Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1695572100
        },
        {
            "slug": "tournament/south-america-autumn-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "South America - Autumn Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1695489300
        },
        {
            "slug": "tournament/europe-autumn-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "Europe - Autumn Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1695471300
        },
        {
            "slug": "tournament/southeast-asia-autumn-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "Southeast Asia - Autumn Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1695428100
        },
        {
            "slug": "tournament/australia-autumn-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "Australia - Autumn Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1695424500
        },
        {
            "slug": "tournament/brawlhalla-summer-royale-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "Brawlhalla - Summer Royale 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1693663200
        },
        {
            "slug": "tournament/north-america-summer-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "North America - Summer Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1690733700
        },
        {
            "slug": "tournament/south-america-summer-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "South America - Summer Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1690650900
        },
        {
            "slug": "tournament/europe-summer-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "Europe - Summer Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1690632900
        },
        {
            "slug": "tournament/southeast-asia-summer-championship-2023/event/brawlhalla-championship-1v1",
            "tournamentName": "Southeast Asia - Summer Championship 2023",
            "eventName": "Brawlhalla Championship 1v1",
            "year": 2023,
            "isOfficial": true,
            "isTwos": false,
            "startTime": 1690589700
        }
    ],
    "nextToken": "1690589700"
}
```

### Response Elements

The following data is returned in JSON.	

- **Tournaments** - *Object[]*
	- Detailed information about the tournaments. This is a <a href="../../datatypes/tournament">tournament</a> datatype.

- **NextToken** - *String*
    - Allows you to move to the next results. 