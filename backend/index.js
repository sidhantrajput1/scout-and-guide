const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
