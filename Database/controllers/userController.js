const User = require('../models/userModels');

exports.createUser = async (req, res) => {
  try {
    console.log(req.body, '------>>>');
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 'fail',
      message: 'error',
    });
  }
};
