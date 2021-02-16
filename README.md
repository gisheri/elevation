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
All files          |   92.98 |    66.67 |     100 |   98.04 |                   
 src               |     100 |       50 |     100 |     100 |                   
  app.js           |     100 |      100 |     100 |     100 |                   
  config.js        |     100 |       50 |     100 |     100 | 2                 
 src/routes        |    91.3 |       70 |     100 |    97.5 |                   
  groups-router.js |    87.1 |       70 |     100 |   96.15 | 26                
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

