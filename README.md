# REST API Example

**With Node.js, Express & MongoDB**

## Setup

    npm install

### Register Mongo Database

1. Register, create a free "cluster" and then a database on [Mongo's website](www.mongodb.com)
2. Once it's up, copy the connection string

### Configure environment

    cp .env.example .env # And paste the connection string

## Starting

To start the backend:

	npm run start

To start the backend and listen for changes (recommended):

    npm run start:watch

There is also option to load a sample dataset (aka seed) into the databse beforehand:

	npm run db:seed

If you want to clear the database (perhaps before seeding?):

	npm run db:purge
