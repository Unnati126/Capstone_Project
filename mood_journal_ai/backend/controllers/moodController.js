import Mood from '../models/Mood.js';

// Function to add new mood entry for the authenticated user
export const addMood = async (req, res) => {
  try {
    const mood = await Mood.create(req.body);
    res.status(201).json(mood);
  } catch (err) {
    console.error('Error adding mood:', err);
    res.status(500).json({ message: 'Failed to add mood' });
  }
};

// Function update mood entry for authenticated user
export const getMoods = async (req, res) => {
  try {
    const moods = await Mood.find();
    res.status(200).json(moods);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch moods' });
  }
};

// Function to delete mood entry for the authenticated user
export const deleteMood = async (req, res) => {
  try {
    await Mood.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Mood deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete mood' });
  }
};