const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Initialize dotenv to load environment variables

const defaultPort = 3000;
// const routes = require('./routes');
const port = process.env.PUBLIC_PORT || defaultPort;
const connection = process.env.URI;

app.use(cors());

// Connect to MongoDB
mongoose.connect(connection)
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define the ping route
app.get('/ping', (req, res) => {
  res.send("Hello");
});

// const routes = require('./routes');
// app.use(routes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
  });
}

module.exports = app;
