import { Router } from "express";
import { getAllMoods, addMood, updateMood, deleteMood } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

/*router.post("/add", protect, addMood);
router.get("/", protect, getAllMoods);
router.delete("/:id", protect, deleteMood);*/

router.get("/", protect, getAllMoods);
router.post("/add", protect, addMood);
router.put("/:id", protect, updateMood);
router.delete("/:id", protect, deleteMood);

export default router;