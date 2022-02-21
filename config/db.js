const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_KEY);
        console.log(`Connceted to MongoDB ${conn.connection.host}`);
        return 1;
    } catch (err) {
        console.log(`Could not connect to MongoDB `, err);
        return 0;
    }
}

module.exports = connectDB;