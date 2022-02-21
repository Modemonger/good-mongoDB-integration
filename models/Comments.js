const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', new mongoose.Schema({
    text: String,
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
}));

module.exports = Comment;