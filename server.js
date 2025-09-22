const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Routes
const index = require('./routes/index');
const image = require('./routes/image');

// Initialize the app
const app = express();

// Determine environment
const env = process.env.NODE_ENV || 'development';

// MongoDB URIs for different environments
const mongoURIs = {
  development: process.env.MONGO_URI,
  test: process.env.MONGO_TEST_URI || process.env.MONGO_URI,
  production: process.env.MONGO_PROD_URI || process.env.MONGO_URI
};

// Pick the correct URI
const mongoURI = mongoURIs[env];

if (!mongoURI) {
  console.error("MongoDB connection string is missing. Set the proper environment variable.");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB (${env}) at ${mongoURI}`))
  .catch(err => console.error("MongoDB connection error:", err));

// View Engine
app.set('view engine', 'ejs');

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = app;
