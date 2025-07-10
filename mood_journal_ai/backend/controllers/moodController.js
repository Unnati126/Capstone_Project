import Mood from "../models/Mood.js";

// ADD mood
const addMood = async (req, res) => {
  try {
    const { mood, stress, energy, motivation, sleep, note } = req.body;

    const newMood = new Mood({
      user: req.user._id,
      mood,
      stress,
      energy,
      motivation,
      sleep,
      note,
    });

    const savedMood = await newMood.save();
    res.status(201).json(savedMood);
  } catch (err) {
    res.status(500).json({ message: "Failed to add mood", error: err.message });
  }
};

// GET all moods
const getAllMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(moods);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch moods", error: err.message });
  }
};

// DELETE mood
const deleteMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);

    if (!mood) {
      return res.status(404).json({ message: "Mood not found" });
    }

    if (mood.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await mood.deleteOne();
    res.status(200).json({ message: "Mood deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete mood", error: err.message });
  }
};

export { addMood, getAllMoods, deleteMood };