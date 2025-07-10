import express from "express";
import { createMood } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

// Mood journal routes
const router = express.Router();
router.post("/", protect, createMood);

// Get all mood entries for the authenticated user
export default router;


/*import express from 'express';

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
export default router;*/