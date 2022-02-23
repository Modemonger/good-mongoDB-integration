const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/schedules', require('./routes/scheduleRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;