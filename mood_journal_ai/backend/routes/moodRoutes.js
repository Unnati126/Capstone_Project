import { Router } from "express";
import { getAllMoods, addMood, updateMood, deleteMood } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

// Create a new router instance
const router = Router();

// Apply protect middleware to all routes in this router
router.use(protect);

// Now routes are protected by default
router.get("/", getAllMoods);
router.post("/add", addMood);
router.put("/:id", updateMood);
router.delete("/:id", deleteMood);

// Export the router to be used in the main app
export default router;