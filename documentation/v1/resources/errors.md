---
title: Status Codes
description: Documentation for api.brawltools.com.
content: resources
version: v1
---

# Status Codes

When using a method from the API, you can recieve a few different response codes. Those codes are listed below.

## 200 OK

The request succeeded, and the response will be displayed in the message body.

## 400 Validation Exception

The server rejected your request due to a client error. This typically occurs because of incorrect syntax.

## 404 Resource Not Found Exception

The server could not find the requested resource.

## 500 Data Access Exception

The database could not fulfill your request.

## 500 Internal Server Exception

The server could not fulfill your request.
