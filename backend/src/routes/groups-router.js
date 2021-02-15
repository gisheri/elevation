const express = require('express');
const axios = require('axios');
const { DATABASE_URL } = require('../config');
const {
  filterCampus,
  filterDemographic,
  filterGroupType,
  filterMeetingDate,
  filterZipCode,
} = require('./helpers');
const groupsRouter = express.Router();

groupsRouter.get('/', async (req, res) => {
  let result;
  const { campus, demographic, group_type, meeting_date, zip_code } = req.query;
  try {
    const response = await axios.get(DATABASE_URL);
    const { data } = response;
    if (campus) result = filterCampus(data, campus);
    if (demographic) result = filterDemographic(data, demographic);
    if (group_type) result = filterGroupType(data, group_type);
    if (meeting_date) result = filterMeetingDate(data, meeting_date);
    if (zip_code) result = filterZipCode(data, zip_code);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = groupsRouter;
