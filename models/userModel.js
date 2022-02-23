const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, 'Please write name']
        },
        email: {
            type: String,
            required: [true, 'Please add email']
        },
        password: {
            type: String,
            required: [true, 'Please write password']
        },
        salt: {
            type: String,
            required: [true, 'Salt is required']
        },
        token: {
            type: String
        }
    },
    {
        timestamp: true
    } 
);

module.exports = mongoose.model('User', userSchema);