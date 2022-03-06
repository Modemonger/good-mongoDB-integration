const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

connectDB();

const Server = require('./backend/server');

Server.use('/api/users', require('./backend/routes/userRoutes'));
Server.use('/api/schedule', require('./backend/routes/scheduleRoutes'));
Server.use('/api/data', require('./backend/routes/userDataRoutes'));