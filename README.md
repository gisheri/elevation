# What is this?

This project is a coding challenge for the web developer position at Elevation. The requirements for the challenge are listed in `requirements.md`.

To run this application, please follow the steps below in **How to get it running**. Once you have completed the steps, ensure `database`, `server`, and `frontend` are all running by entering the commands `node .`, `npm run dev`, and `npm start`, respectively. It works best to run these commands from multiple tabs within terminal.

I chose to build the **Database** and **Server** individually to create a scalable microservice architecture.

**Technologies used: Loopback.io, Node.js, Typescript, React.js, MaterialUI, Mocha, Chai, Jest, Supertest, Istanbul, Axios, Nodemon, Moment.js**

# How to get it running

## Database\*

### Before running the code, please enter `cd database` from the project directory and follow the 2 steps below.

1. `npm install`
2. `node .`

_\* This database is built with [loopback.io](https://loopback.io/). If you do not have loopback installed on your machine, you may need to run the command `$ npm install -g @loopback/cli` before running the steps below. For more information, click [here](https://loopback.io/getting-started.html)._

## Server

### Before running the code, please enter `cd server` from the project directory and follow the 4 steps below.

From the `server` directory, please run the following commands:

1. `npm install`
2. `npm run env`
3. `npm run db`
4. `npm run dev`

## Frontend

### Before running the code, please enter `cd frontend` from the project directory and follow the 2 steps below.

1. `npm run env`
2. `npm run db`
3. `npm install`
4. `npm start`

It works best to run these commands from multiple tabs within terminal. Once **Database**, **Server**, and **Frontend** are all running, your browser can access the project at [http://localhost:3006](http://localhost:3006).

# Available scripts

## Database

In the `database` directory, you can run:

`node .`

Seeds the database with the given data and starts the database.

## Server

In the `server` directory, you can run:

`npm run dev`

Runs the server on `http://localhost:8000/`, allowing for autoupdates if the dev makes changes to the code.

`npm run test`

Runs all automated tests written for the backend. 11 passing tests result in 98% test coverage.

`npm run coverage`

Displays current test coverage (table below).

```
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |    91.8 |    71.43 |     100 |   98.11 |
 src               |     100 |      100 |     100 |     100 |
  app.js           |     100 |      100 |     100 |     100 |
  config.js        |     100 |      100 |     100 |     100 |
 src/routes        |      90 |    66.67 |     100 |   97.62 |
  groups-router.js |   84.85 |    66.67 |     100 |    96.3 | 35
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
PASS  src/ResultsPanel/Result.test.js
PASS  src/ResultsPanel/NoResults.test.js
PASS  src/FilterPanel/FilterDisplay.test.tsx
PASS  src/ResultsPanel/Results.test.js
PASS  src/Header/Header.test.js
PASS  src/App.test.js

Test Suites: 6 passed, 6 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        5.707 s
Ran all test suites.

Watch Usage: Press w to show more.
```

# Folder structure

```
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── FilterPanel
│   │   ├── Filter.tsx
│   │   ├── FilterDisplay.test.tsx
│   │   ├── FilterDisplay.tsx
│   │   └── FilterStyles.js
│   ├── Header
│   │   ├── Header.test.js
│   │   └── Header.tsx
│   ├── ResultsPanel
│   │   ├── Detail.tsx
│   │   ├── DetailStyles.js
│   │   ├── NoResults.test.js
│   │   ├── NoResults.tsx
│   │   ├── NoResultsStyles.js
│   │   ├── Result.test.js
│   │   ├── Result.tsx
│   │   ├── ResultStyles.js
│   │   ├── Results.test.js
│   │   ├── Results.tsx
│   │   └── ResultsStyles.js
│   ├── index.css
│   ├── index.js
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── theme.js
│   └── utils
│       ├── constants
│       │   ├── filterConfig.ts
│       │   ├── icons.js
│       │   ├── index.js
│       │   ├── logo.js
│       │   ├── material-components.js
│       │   └── testData.js
│       ├── helpers
│       │   ├── generateGradient.js
│       │   ├── index.js
│       │   ├── queryStringHelpers.js
│       │   └── timeHelpers.js
│       └── index.ts
└── tsconfig.json
```
