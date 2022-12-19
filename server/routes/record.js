const express = require('express');

const recordRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

recordRoutes.route('/record/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    car: req.body.car,
    password: req.body.password,
  };
  db_connect.collection('records').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;
