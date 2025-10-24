---
title: ListEvents
description: Documentation for api.brawltools.com.
content: requests
version: v2
---

# ListEvents

Lists the most recent tournaments to populate the API.

## Request

### Syntax

```url
https://api.brawltools.com/v2/event
```

### Query Parameters

| Parameter  | Type    | Required | Description                                                  |
| ---------- | ------- | -------- | ------------------------------------------------------------ |
| gameMode   | Integer | ✔️        | Use 1 for 1v1 and 2 for 2v2.                                 |
| isOfficial | Boolean | ❌        | False includes community tournaments, true excludes them. If omitted, defaults to false. |
| year       | Integer | ❌        | The year to analyze. If omitted, includes all years.         |
| maxResults | Integer | ❌        | Limits results to the specified number.                      |
| nextToken  | String  | ❌        | A string specifiying the next page of results.               |

## Response

### Sample Response

```json
{
  "tournaments": [
    {
      "id": "eb84e618-2941-42b7-09c7-08dd66f60e0c",
      "tournamentName": "Autumn Championship - North America 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1757866549,
      "host": "CM"
    },
    {
      "id": "5acf121c-4da9-490f-43df-08dd69fad61e",
      "tournamentName": "Autumn Championship - South America 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1757783754,
      "host": "CM"
    },
    {
      "id": "f4eba356-ea18-458c-43dd-08dd69fad61e",
      "tournamentName": "Autumn Championship - Europe 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1757765725,
      "host": "CM"
    },
    {
      "id": "4bf7b68f-43ec-4c36-09c4-08dd66f60e0c",
      "tournamentName": "Autumn Championship - Middle East 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1757682910,
      "host": "CM"
    },
    {
      "id": "c136e542-b3f4-4817-09c3-08dd66f60e0c",
      "tournamentName": "Autumn Championship - Southeast Asia 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1757675739,
      "host": "CM"
    },
    {
      "id": "9ac7e953-be8a-405f-09bf-08dd66f60e0c",
      "tournamentName": "Summer Championship - North America 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1753028263,
      "host": "CM"
    },
    {
      "id": "0ab757b4-5094-48eb-43d6-08dd69fad61e",
      "tournamentName": "Summer Championship - South America 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1752945556,
      "host": "CM"
    },
    {
      "id": "d21254e3-0028-4805-09be-08dd66f60e0c",
      "tournamentName": "Summer Championship - Europe 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1752927384,
      "host": "CM"
    },
    {
      "id": "1effc345-85ce-42f5-09bc-08dd66f60e0c",
      "tournamentName": "Summer Championship - Middle East 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1752844552,
      "host": "CM"
    },
    {
      "id": "b452c703-7461-4a40-09ba-08dd66f60e0c",
      "tournamentName": "Summer Championship - Southeast Asia 2025 - 1v1",
      "eventName": null,
      "year": 2025,
      "isOfficial": true,
      "isTwos": false,
      "isOnline": true,
      "startTime": 1752837392,
      "host": "CM"
    }
  ],
  "nextToken": "1752837392"
}
```

### Response Elements

The following data is returned in JSON.

| Parameter   | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| tournaments | Object | Detailed information about the tournaments. This is a <a href="../../datatypes/tournament">Tournament</a> datatype. |
| nextToken   | String | Allows you to move to the next results.                      |
