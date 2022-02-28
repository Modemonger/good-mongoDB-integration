const asyncHandler = require('express-async-handler');

const Schedule = require('../../models/scheduleModel');
const User = require('../../models/userModel');

const getSchedule = asyncHandler ( async (req, res) => {
    const schedules = await Schedule.find({ user: req.user.id });
    res.status(200).json(schedules);
})

const setSchedule = asyncHandler ( async (req, res) => {

    if(!req.body.title){
        res.status(400);
        throw new Error('Please fill out the data fields');
    }

    const schedule = await Schedule.create({
        title: req.body.title,
        description: req.body.description,
        time_start: req.body.time_start,
        time_end: req.body.time_end,
        user: req.user.id
    })

    res.status(200).json(schedule);
})

const updateSchedule = asyncHandler ( async (req, res) => {

    const schedule = await Schedule.findById(req.params.id);

    if(!schedule){

        res.status(400)
        throw new Error('Not found');

    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(schedule.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }

    const updateSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateSchedule);
})

const deleteSchedule = asyncHandler ( async (req, res) => {



    const schedule = await Schedule.findById(req.params.id.slice(3));

    if(!schedule){

        res.status(400)
        throw new Error('Not found');

    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(schedule.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }

    await schedule.remove();

    res.status(200).json({id: req.params.id});
})

module.exports = {
    getSchedule,
    setSchedule,
    updateSchedule,
    deleteSchedule
}