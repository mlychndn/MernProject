const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

const getToken = async (id, res) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = await jwt.sign({ id }, jwtSecretKey, { expiresIn: '90d' });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });
};

exports.signUpController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('email and password is not available!');
    }

    const user = new User({ email, password });
    await user.save();
    await getToken(user._id, res);

    res.status(201).json({
      status: 'success',
      message: 'user created',
    });
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.logInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Email or password is missing!');
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('No user found with given email');
    }

    if (!(await user.verifyUser(password, user.password))) {
      throw new Error('Invalid Password!');
    }

    await getToken(user._id, res);

    res.status(201).json({
      status: 'success',
      message: `${user.email} logged in successful`,
    });
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.validateController = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error('Please verify yourself!');

    const jwt = authorization.split(' ')[1];

    const user = new User();
    const { id, iat: issuedTime, exp: expiredTime } = await user.verifyJwt(jwt);
    const foundUser = await User.findOne({ _id: id });

    if (!foundUser) {
      throw new Error('User not found!');
    }

    // console.log('expired', new Date(expiredTime * 1000));
    // console.log('now', new Date(Date.now()));

    if (new Date(Date.now()) > new Date(expiredTime * 1000)) {
      throw new Error('Please login again, Your login time exceeded!');
    }

    next();
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: error.message,
    });
  }
};
