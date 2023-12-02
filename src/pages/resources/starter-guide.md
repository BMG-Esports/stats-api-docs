---
title: Brawlhalla Stats API
description: 'Documentation for api.brawltools.com'
layout: ../../layouts/Layout.astro
---

# Starter Guide

This is a starter guide to using the API and SDK. This guide is tailored to users with little or no coding experience.

## Prerequisites

- Node.js
- A Code Editor or IDE

## Steps

1. Verify Node.js is installed.
    - In a terminal, type `node -v` and verify that you receive  a response similar to `v18.17.1`.
        - Terminals on Windows include Command Prompt, PowerShell, Terminal, and Visual Studio Code's terminal.
    - If you do not receive  a response in the terminal, or you receive  an error, you must install Node.js from <a href="https://nodejs.org/en/">their website</a>.
2. Install the SDK.
    - The SDK can be found <a href="https://www.npmjs.com/package/@bmg-esports/sdk">here</a>. Follow the installation guide on the page in your terminal.
3. Use the SDK.
    - This is a sample JavaScript example using the <a href="../get/player/smashId">GetPlayer</a> method in a single file.
    - This function uses `async` and `await`. To learn about these concepts, refer to the MDN pages: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">async function</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await">await</a>.
    ```js
    const sdk = require("@bmg-esports/sdk")

    async function FindPlayer(id) {
        const result = await sdk.getPlayer({smashId: id});
        return console.log(result)
    }

    FindPlayer(57335);
    ```
4. Run your program.
    - Use a terminal to run the file by entering `node [FileName].js`.
    - It should return information about Sandstorm, including their smashId and brawlhallaId.
5. Debugging and other information.
    - If your program returns `SyntaxError: Cannot use import statement outside a module`, then you likely used an import statement instead of a require. If you wish to keep the import, you must change the program into a module by adding `"main": "[FileName].js"` to your package.json file.
    - The SDK contains every method contained in the documentation. An IDE like Visual Studio Code has IntelliSense, which can surface all of the available methods for you.


