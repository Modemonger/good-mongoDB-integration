const getCourse = (req, res) => {
    res.status(200).json({message: 'get course'});
}

const setCourse = (req, res) => {
    res.status(200).json({message: 'set course'});
}

const updateCourse = (req, res) => {

    console.log(req.body);

    if(!req.body.text){

        res.status(400)
        throw new Error('Please add a test field');

    }

    res.status(200).json({message: `update course ${req.params.id}`});
}

const deleteCourse = (req, res) => {
    res.status(200).json({message: `delete course ${req.params.id}`});
}


module.exports = {
    getCourse,
    setCourse,
    updateCourse,
    deleteCourse
}