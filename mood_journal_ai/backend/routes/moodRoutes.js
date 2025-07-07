import express from 'express';

// Importing the mood controller functions
import {
  addMood,
  getMoods,
  deleteMood,
} from '../controllers/moodController.js';

const router = express.Router();

// Define the routes for mood journal
router.post('/', addMood);
router.get('/', getMoods);
router.delete('/:id', deleteMood);

// Export the router to be used in the main server file
export default router;