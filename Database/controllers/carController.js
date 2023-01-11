const Car = require('../models/carModels');

exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        car: newCar,
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
