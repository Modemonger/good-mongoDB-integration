const mongoose = require('mongoose');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: Object,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));

module.exports = Course;