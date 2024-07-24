const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, 'user must have email id'],
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: [true, 'user must have valid password'],
    minLength: [8, 'password length is less than 8'],
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value);
      },
      message: (props) => 'Entered password is not a valid password!',
    },
  },
});

userSchema.pre('save', async function (next) {
  try {
    // this code will run, only when password is modified
    if (!this.isModified('password')) return next();

    const encryptedPassword = await bcrypt.hash(this.password, 12);
    this.password = encryptedPassword;

    next();
  } catch (error) {
    console.log(error.message);
    return;
  }
});

//instance method on schema

userSchema.methods.verifyUser = async function (inputPassword, dbPassword) {
  return await bcrypt.compare(inputPassword, dbPassword);
};

userSchema.methods.verifyJwt = async function (token) {
  const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  return decoded;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
