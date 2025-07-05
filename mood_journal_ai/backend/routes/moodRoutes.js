const express = require('express');
const router = express.Router();

// Importing the mood controller functions
const {
    addMood,
    getMoods
} = require('../controllers/moodController');
const auth = require('../middleware/authMiddleware');

// Define the routes for mood journal
router.post('/', auth, addMood);
router.get('/', auth, getMoods);

// Export the router to be used in the main server file
module.exports = router;