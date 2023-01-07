const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword', authController.resetPassword);

// router.route('/').post(userController.createUser);

router.route('/').get(authController.protect);

router.route('/:id').get(userController.getUser);

router.route('/userAccount').get(authController.protect);

//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
