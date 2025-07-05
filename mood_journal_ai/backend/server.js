const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables and connect to the database
dotenv.config();
connectDB();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
app.use('api/moods', require('./routes/moodRoutes'));
app.use('api/auth', require('./routes/authRoutes'));

// Home route
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});