const express = require('express');
const axios = require('axios');
const { DATABASE_URL } = require('../config');
const groupsRouter = express.Router();

groupsRouter.get('/', async (req, res) => {
  try {
    const result = await axios.get(DATABASE_URL);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = groupsRouter;
