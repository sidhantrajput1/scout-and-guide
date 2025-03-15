const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const userRouter = require('./routes/userRoutes.js');

dotenv.config(); // Load environment variables

const app = express();

app.get('/' , (req, res) => {
  return res.status(200).json({ 
      message: 'I am coming from backend',
      success : true
  })
})


// Middleware to parse JSON data
app.use(express.json());

// Routes

const PORT = process.env.PORT || 5000;

// api's
app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
