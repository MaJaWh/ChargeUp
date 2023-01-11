const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const carController = require('../controllers/carController.js');

const router = express.Router();

router
  .post('/signup', authController.signup)
  .post('/login', authController.login)
  .post('/userAccount', authController.protect, carController.createCar)
  .post('/forgotPassword', authController.forgotPassword);

router.patch('/resetPassword', authController.resetPassword);

router.route('/dashboard').get(authController.protect);

router.route('/:id').get(userController.getUser);

module.exports = router;
