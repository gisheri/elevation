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

module.exports = app;
