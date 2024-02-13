# BNNDirect API ![alt text](https://github.com/weiliang8/BNNDirect/blob/master/assert/icons/icon32.png "BNNDirect")

## Introduction
BNNDirect API serves as the middleman to connect chrome extension BNNDirect to third-party GoogleSearch API

## Features
* Provides Cross-Origin Resource Sharing (CORS), so the server able to receive request from chrome extension
* Communicate with GoogleSearch API to fetch article result
* Security:
  1. Sanitize data using express-mongo-sanitize
  2. Set various security headers to increase application security using helmet
  3. Prevent cross site scripting attack using perfect-express-sanitizer
  4. Prevent HTTP parameter pollution attack using hpp
  5. Rate Limiting



## Installation
1. Clone this repository
2. Run **npm i** to install all dependcies
3. Create config.env .....

## API Endpoints
| HTTP Request | Endpoint | Header | Body | Action |
|--------------|:---------:|----------|--------------|--------------|
| POST | /api/googleResult |        'Content-Type': 'application/json'| String(AricleTitle) | Retrieve corresponding Article Url |
| GET | /api/checkHealth | - | - |  API hosting platform to monitor the API status |
