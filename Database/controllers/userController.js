const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync.js');

// exports.createUser = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         user: newUser,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({
//       status: 'fail',
//       message: 'error',
//     });
//   }
// };

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      staus: 'success',
      data: {
        user,
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

exports.getAllUsers = catchAsync(async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      staus: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'err',
    });
  }
});
