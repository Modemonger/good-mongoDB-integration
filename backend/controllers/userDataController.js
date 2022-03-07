const asyncHandler = require('express-async-handler');
const User = require('../../models/userModel');
const Schedule = require('../../models/scheduleModel');

const getUsers = asyncHandler( async (req, res) => {
    const users = await User.find({});
    console.log(users);

    res.status(200).json({
        message: 'message'
    })
});

const getSchedules = asyncHandler ( async (req, res) => {
    const schedules = await Schedule.find({ user: req.user.id });
    res.status(200).json(schedules);
})

module.exports = {
    getUsers,
    getSchedules
}