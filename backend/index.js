const express = require('express');
const dotenv = require('dotenv');

const router = require('./router/index.js');

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.post("/auth/signup",router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
