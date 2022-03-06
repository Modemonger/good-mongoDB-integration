const express = require('express');
const router = express.Router();
const { 
    getUsers,
    getSchedules
 } = require('../controllers/userDataController');

router.get('/users', getUsers);
router.get('/schedules', getSchedules);

module.exports = router;