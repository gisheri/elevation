const router = require('express').Router();
const groups = require('./groups-router');

router.use('/groups', groups);

module.exports = router;
