const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

(async () => {
  try {
    const url = process.env.MONGODB_URL.replace(
      '<password>',
      process.env.MONGODB_PASSWORD,
    );
    await mongoose.connect(url);
    console.log('connection successful! ');
  } catch (error) {
    console.log(error.message);
  }
})();

app.listen(PORT, () => {
  console.log('Server is runnig on PORT ' + PORT + '....');
});
