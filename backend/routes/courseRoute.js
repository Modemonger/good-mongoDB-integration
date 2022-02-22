const express = require('express');
const router = express.Router();
const {
    getCourse,
    setCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courseController');

router.route('/').get(getCourse).post(setCourse);

router.route('/:id').put(updateCourse).delete(deleteCourse);

module.exports = router;