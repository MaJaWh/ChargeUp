const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').post(userController.createUser);

router.route('/:id').get(userController.getUser);

router.route('/').get(userController.getAllUsers);

//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;