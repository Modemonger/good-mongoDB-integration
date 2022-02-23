const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: [true, 'Please add a title field'],
        },
        description: {
            type: String,
        },
        weekday: {
            type: String,
            required: [true, 'Please choose a weekday'],
        },
        time_start: {
            type: Date,
            required: [true, 'Please enter from when you will be busy'],
        },
        time_end: {
            type: Date,
            required: [true, 'Please enter until when you will be busy'],
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Schedule', scheduleSchema);