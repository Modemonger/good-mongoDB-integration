const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

connectDB();

const Author = require('./models/Author');
const Course = require('./models/Course');
const Comment = require('./models/Comments');

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
//createCourse('NodeJS course', '621385ccb16231af005191ab');
//createCourse('Python course', '621385ccb16231af005191ab');
//createCourse('C++ course', '621385ccb16231af005191ab');

async function createComment(text, course) {
    const comment = new Comment({
        text,
        course
    });
    
    const result = await comment.save();
    console.log(result);
}

// createComment('Wow really good course. I can now print to console after watching for just 5 hours', '6213860a56ff147f3a04b79e');
// createComment('Cant believe i only had to sit through 50 ads to get to console.log omg best course', '6213860a56ff147f3a04b79e');
// createComment('Gaslight gatekeep girlboss', '6213860a56ff147f3a04b79e');
// createComment('This is better than any unregistered hypercam course ive ever seen', '6213860a56ff147f3a04b79e');
// createComment('Wait this was too fast for me how do i write console.log again and where do i find it', '6213860a56ff147f3a04b79e');

// createComment('So node is like c++ but its javascript. Really explains why i hate this ahahahahahaha', '62138957fc71908a27b35b60');
// createComment('Is this the same person who made the JS course no way i love this guy', '62138957fc71908a27b35b60');
// createComment('Cant believe one man can be this smart and awesome', '62138957fc71908a27b35b60');
// createComment('This course was trash i still dont know how to hack my friends facebook account', '62138957fc71908a27b35b60');
// createComment('Hey can anyone tell me how to print out the data i get from the api? I dont think it was mentioned in the course', '62138957fc71908a27b35b60');

async function listCourses() {
    const courses = await Course
        .find()
        .populate('author', 'name -_id')
        .select('name');
    console.log(courses);
}

async function listComments() {
    const comments = await Comment
        .find()
        //.populate('course', 'name -_id')
        .populate({
            path: 'course',
            select: 'name -_id',
            populate: {
                path: 'author',
                //select: 'name'
            }
        })
        .select('text -_id');
    console.log(comments);
}

//listCourses();
listComments();