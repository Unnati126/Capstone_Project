const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const hashed = await bycrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();
    
    const token = jwt.sign({ user: {id: newUser._id } }, process.env.JWT_SECRET);
    res.json({ token });
});

// Login an existing user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserfindOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET);
    res.json({ token });
}); 

// Get the authenticated user's details
module.exports = router;