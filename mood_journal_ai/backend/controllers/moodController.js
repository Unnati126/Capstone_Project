const Mood = require('../models/Mood');
const analyzeMood = require('../utils/sentimentAnalysis');

// Function to add a new mood entry for the authenticated user
exports.addMood = async (req, res) => {
    const { moodText, moodEmoji } = req.body;
    const sentiment = analyzeMood(moodText);

const newMood = new Mood({
    user: req.user.id,
    moodText,
    moodEmoji,
    sentiment
});

// Save the new mood entry to the database
const saved = await newMood.save();
res.json(saved);
};

// Function to retrieve all moods for the authenticated user
exports.getMoods = async (req, res) => {
    const moods = await Mood.find({ user: req.user.id }).sort({ created: -1 });
    res.json(moods);
};