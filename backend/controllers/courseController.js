const asyncHandler = require('express-async-handler');

const Goal = require('../../models/goalModel');
const User = require('../../models/userModel');

const getCourse = asyncHandler ( async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
})

const setCourse = asyncHandler ( async (req, res) => {

    if(!req.body.text){
        res.status(400);
        throw new Error('Please add text');
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal);
})

const updateCourse = asyncHandler ( async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal){

        res.status(400)
        throw new Error('Not found');

    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateGoal);
})

const deleteCourse = asyncHandler ( async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal){

        res.status(400)
        throw new Error('Not found');

    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }

    await goal.remove();

    res.status(200).json({id: req.params.id});
})

module.exports = {
    getCourse,
    setCourse,
    updateCourse,
    deleteCourse
}