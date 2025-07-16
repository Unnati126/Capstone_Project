import Mood from "../models/Mood.js";

// Add a new mood entry
const addMood = async (req, res) => {
  try {
    const { mood, stress, energy, motivation, sleep, note } = req.body;

    const newMood = new Mood({
      user: req.user.id,
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
    console.error("Error adding mood:", err);
    res.status(500).json({ message: "Failed to add mood entry." });
  }
};

// Get all mood entries for the user
const getAllMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(moods);
  } catch (err) {
    console.error("Error fetching moods:", err);
    res.status(500).json({ message: "Failed to retrieve mood entries." });
  }
};

// Update a mood entry
const updateMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);

    if (!mood) {
      return res.status(404).json({ message: "Mood entry not found." });
    }

    if (mood.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized action." });
    }

    const updatedMood = await Mood.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedMood);
  } catch (err) {
    console.error("Error updating mood:", err);
    res.status(500).json({ message: "Failed to update mood entry." });
  }
};

// Delete a mood entry
const deleteMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);

    if (!mood) {
      return res.status(404).json({ message: "Mood entry not found." });
    }

    if (mood.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized action." });
    }

    await mood.deleteOne();
    res.status(200).json({ message: "Mood entry deleted." });
  } catch (err) {
    console.error("Error deleting mood:", err);
    res.status(500).json({ message: "Failed to delete mood entry." });
  }
};

//Export all controller functions
export { addMood, getAllMoods, updateMood, deleteMood };