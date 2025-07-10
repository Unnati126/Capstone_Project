import { Router } from "express";
import { addMood, getAllMoods, deleteMood } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/add", protect, addMood);
router.get("/", protect, getAllMoods);
router.delete("/:id", protect, deleteMood);

export default router;