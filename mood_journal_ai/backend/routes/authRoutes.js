import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

// Create a new router instance
const router = express.Router();

// Define routes for user registration and login
router.post("/register", registerUser);
router.post("/login", loginUser);

// Export the router to be used in the main app
export default router;