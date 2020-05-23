# REST API Example

**With Node.js + Express, MongoDB & Docker**

## Setup

### Prerequisites

Install [Node](https://nodejs.org) and [Docker](https://docker.com) on your machine.

### Installation

Copy the environment:

    cp .env.example .env

Install the dependencies:

    npm install

## Quickstart

    docker-compose up -d mongo
    npm run db:seed
    npm run start:watch

## Start

To start the backend:

    npm start

To start the backend and listen for changes (recommended):

    npm run start:watch

There is also option to load a sample dataset (aka seed) into the databse beforehand:

    npm run db:seed

If you want to clear the database (perhaps before seeding?):

    npm run db:purge

## Testing

> How to check if it works?

You can use something like [Postman](https://postman.com), to send http requests.

Else if you use VSCode, the [REST Client plugin](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) can be handy (see the `request.rest` file).

You can issue a `GET` request to the root endpoint to get all the endpoint categories that the REST API supports:

    http://localhost:3000

The `request.rest` file also contains some examples of requests you can make.

## Optional: Register Mongo Database

If you want, you can use an online database instead of the local one.

1. Register, create a free project, cluster and then a database on [Mongo's website](https://mongodb.com).
2. Once it's up, copy the connection string.
3. Paste the connection string in the .env file and uncomment the line.
