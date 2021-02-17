# What is this?

This project is a coding challenge for the web developer position at Elevation Church. The requirements are listed in `requirements.md`.

In order to run this application, you will need to follow the steps below for `Database`, `Server`, and `Frontend`. Once you have completed the steps, make sure `Database`, `Server`, and `Frontend` are running by entering the commands `node .`, `npm run dev`, and `npm start`, respectively.

I chose to build the `Database` and `Server` individually to create a scalable microservice architecture.

**Technologies: Loopback.io, Node.js, Typescript, React.js, MaterialUI, Mocha, Chai, Jest, moment**

# How to get it running

## Database\*

### Before running the code, please enter `cd database` from the project directory and follow the 2 steps below. 


*\* This database is built with [loopback.io](https://loopback.io/getting-started.html). If you do not have loopback installed on your machine, you may need to run the command `$ npm install -g @loopback/cli` before running the steps below. For more information, click the link above.*

1. `npm install`
2. `node .`

## Server

### Before running the code, please enter `cd server` from the project directory and follow the 4 steps below.

From the `server` directory, please run the following commands:

1. `npm install`
2. `npm run env`
3. `npm run db`
4. `npm run dev`

## Frontend

### Before running the code, please enter `cd frontend` from the project directory and follow the 2 steps below.

1. `npm install`
2. `npm start`

It works best to run these commands from multiple tabs within terminal. Once `Database`, `Server`, and `Frontend` are all running, your browser can access the project at [http://localhost:3006](http://localhost:3006).
# Available scripts

## Database

`node .`

Seeds the database with the given data and starts the database

## Server

In the server directory, you can run:

`npm run dev`

Runs the server on `http://localhost:8000/`, allowing for autoupdates if the dev makes changes to the code.

`npm run test`

Runs all automated tests written for the backend. 13 passing tests result in 100% test coverage.

`npm run coverage`

Displays current test coverage (table below)

```
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |   91.94 |    64.29 |     100 |   98.15 |
 src               |     100 |       50 |     100 |     100 |
  app.js           |     100 |      100 |     100 |     100 |
  config.js        |     100 |       50 |     100 |     100 | 2
 src/routes        |    90.2 |    66.67 |     100 |   97.67 |
  groups-router.js |   85.29 |    66.67 |     100 |   96.43 | 36
  helpers.js       |     100 |      100 |     100 |     100 |
  index.js         |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|-------------------
```
## Frontend

In the `frontend` directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Test coverage

```
PASS  src/components/Result.test.js
PASS  src/components/Results.test.js
PASS  src/App.test.js
PASS  src/components/Header.test.js
PASS  src/components/NoResults.test.js
PASS  src/components/Filter.test.js

Test Suites: 6 passed, 6 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        5.773 s
Ran all test suites.

Watch Usage: Press w to show more.

```

# Folder structure

```
├── README.md
├── database
│   ├── common
│   │   └── models
│   │       ├── groups.js
│   │       ├── groups.json
│   │       ├── message.js
│   │       └── message.json
│   ├── package-lock.json
│   ├── package.json
│   └── server
│       ├── boot
│       │   ├── authentication.js
│       │   ├── create-data-tables.js
│       │   └── root.js
│       ├── component-config.json
│       ├── config.json
│       ├── datasources.json
│       ├── middleware.development.json
│       ├── middleware.json
│       ├── model-config.json
│       └── server.js
├── frontend
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── Detail.js
│       │   ├── DetailStyles.js
│       │   ├── Filter.js
│       │   ├── Filter.test.js
│       │   ├── FilterStyles.js
│       │   ├── Header.js
│       │   ├── Header.test.js
│       │   ├── NoResults.js
│       │   ├── NoResults.test.js
│       │   ├── NoResultsStyles.js
│       │   ├── Result.js
│       │   ├── Result.test.js
│       │   ├── ResultStyles.js
│       │   ├── Results.js
│       │   ├── Results.test.js
│       │   └── ResultsStyles.js
│       ├── data.js
│       ├── index.css
│       ├── index.js
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       ├── store
│       │   ├── constants.js
│       │   ├── helpers.js
│       │   ├── icons.js
│       │   ├── index.js
│       │   └── material-components.js
│       └── theme.js
├── requirements.md
└── server
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── Procfile
    │   ├── app.js
    │   ├── config.js
    │   ├── route-service.js
    │   ├── routes
    │   │   ├── groups-router.js
    │   │   ├── helpers.js
    │   │   └── index.js
    │   └── server.js
    └── test
        ├── app.spec.js
        ├── groups.spec.js
        ├── helpers.spec.js
        ├── setup.js
        └── testdata.js
```
