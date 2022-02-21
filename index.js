const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

connectDB();

const Author = require('./models/Author');
const Course = require('./models/Course');

async function createAuthor(name, bio, website) {
    const author = new Author ({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result._id);
}

//createAuthor('Modestas', 'writes absolute trash', 'catbounce.com');

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });
    
    const result = await course.save();
    console.log(result);
}

//createCourse('JS course', '621385ccb16231af005191ab');

async function listCourses() {
    const courses = await Course
        .find()
        .populate('author', 'name -_id')
        .select('name');
    console.log(courses);
}

listCourses();