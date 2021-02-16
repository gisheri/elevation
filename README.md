# Database

## available scripts

### `npm start`

### `npm test`

# Backend

In the backend directory, you can run:

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

# Frontend

## Available scripts

In the `frontend` directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Test coverage

```
PASS  src/components/Result.test.js
PASS  src/components/Filter.test.js
PASS  src/App.test.js
PASS  src/components/Header.test.js
PASS  src/components/Results.test.js
PASS  src/components/NoResults.test.js

Test Suites: 6 passed, 6 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        4.808 s
Ran all test suites.

Watch Usage: Press w to show more.
```
