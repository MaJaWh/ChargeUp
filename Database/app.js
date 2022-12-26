const express = require('express');

const userRouter = require('./routes/userRoute');

const app = express();

app.use('/createUser', userRouter);

module.exports = app;
