const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

//connectDB()

const Author = require('./models/Author');
const Course = require('./models/Course');

async function createAuthor(name, bio, website) {
    const author = new Author ({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

if(connectDB()){
    createAuthor('Modestas', 'writes absolute trash', 'catbounce.com');
}

//createAuthor('Modestas', 'writes absolute trash', 'catbounce.com');