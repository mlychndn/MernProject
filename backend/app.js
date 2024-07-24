const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
const cors = require('cors');

module.exports = app;

app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/api/v1/user', userRouter);
app.use('/api/v1/movie', tourRouter);
