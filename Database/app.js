const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side!');
});

app.post('/createUser', (res, req) => {});
module.exports = app;
