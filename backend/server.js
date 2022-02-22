const express = require('express');
const dotenv = require('dotenv').config();
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;