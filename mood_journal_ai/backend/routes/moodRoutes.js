import { Router } from "express";
import { getAllMoods, addMood, updateMood, deleteMood } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

// Create a new router instance
const router = Router();

// Define routes for mood entries
router.get("/", protect, getAllMoods);
router.post("/add", protect, addMood);
router.put("/:id", protect, updateMood);
router.delete("/:id", protect, deleteMood);

// Export the router to be used in the main app
export default router;