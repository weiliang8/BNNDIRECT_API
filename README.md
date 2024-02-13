# BNNDirect API ![alt text](https://github.com/weiliang8/BNNDirect/blob/master/assert/icons/icon32.png "BNNDirect")

## Introduction
BNNDirect API serves as the middleman to connect chrome extension BNNDirect to third-party GoogleSearch API

## Features
* Provides Cross-Origin Resource Sharing (CORS), so the server able to receive request from chrome extension
* Communicate with GoogleSearch API to fetch article result

## Installation
1. Clone this repository
2. Run **npm i** to install all dependcies
3. Create config.env .....

## API Endpoints
| HTTP Request | Endpoint | Header | Body | Action |
|--------------|:---------:|----------|--------------|--------------|
| POST | /api/googleResult |        'Content-Type': 'application/json'| String(AricleTitle) | Get corresponding Article Url |
| GET | /api/checkHealth | - | - | For API hosting platform to monitor the API status |
