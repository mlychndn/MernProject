const express = require('express');
const { getAllMovies } = require('../controller/tmdbApiController');
const { validateController } = require('../controller/userController');

const router = express.Router();

router.route('/').get(getAllMovies);

module.exports = router;
