import express from "express";
import { addMood } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

// Mood journal routes
const router = express.Router();
router.post("/", protect, addMood);

// Get all mood entries for the authenticated user
export default router;