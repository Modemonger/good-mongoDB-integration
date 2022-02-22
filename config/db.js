const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_KEY);
        console.log(`Connceted to MongoDB ${conn.connection.host}`);
    } catch (err) {
        console.log(`Could not connect to MongoDB `, err);
        process.exit(1);
    }
}

module.exports = connectDB;