const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

connectDB();

const Server = require('./backend/server');

Server.use('/api/home', require('./backend/routes/userRoutes'));