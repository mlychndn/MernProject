const { apiCall } = require('../utils');

exports.getAllMovies = async (req, res, next) => {
  try {
    console.log('api called for movie');
    const url = process.env.TMDB_URL;
    const moviesData = await apiCall(url);

    res.status(200).json({
      status: 'success',
      results: moviesData.results.length,
      data: moviesData.results,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
