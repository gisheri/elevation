require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  res.send('Server is working');
});

app.use(routes);

// app.use(function errorHandler(error, req, res, next) {
//   let response;
//   if (NODE_ENV === 'production') {
//     response = { error: { message: 'server error' } };
//   } else {
//     console.error(error);
//     response = { message: error.message, error };
//   }
//   res.status(500).json(response);
// });

module.exports = app;
