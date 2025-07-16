import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

// Create a new router instance
const router = express.Router();

// Define routes for user registration and login
router.post("/register", registerUser);
router.post("/login", loginUser);

// Export the router to be used in the main app
export default router;



/*import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create and save new user with age & gender
    const newUser = new User({
      name,
      email,
      age,
      gender,
      password: hashed
    });
    await newUser.save();

    // Generate JWT
    const token = jwt.sign(
      { user: { id: newUser._id } },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login existing user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign(
      { user: { id: user._id } },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;*/