const express = require('express');
const router = express.Router();
const {
    getCourse,
    setCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courseController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCourse).post(protect, setCourse);

router.route('/:id').put(protect, updateCourse).delete(protect, deleteCourse);

module.exports = router;