const express = require('express');
const router = express.Router();
const {
  signUpController,
  logInController,
} = require('../controller/userController');

router.post('/signup', signUpController).post('/login', logInController);

module.exports = router;
