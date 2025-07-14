import Mood from "../models/Mood.js";

// @desc    Add new mood entry
// @route   POST /api/moods/add
// @access  Private
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

// @desc    Get all moods for the logged-in user
// @route   GET /api/moods
// @access  Private
const getAllMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(moods);
  } catch (err) {
    console.error("Error fetching moods:", err);
    res.status(500).json({ message: "Failed to retrieve mood entries." });
  }
};

// @desc    Update a mood entry
// @route   PUT /api/moods/:id
// @access  Private
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

// @desc    Delete a mood entry
// @route   DELETE /api/moods/:id
// @access  Private
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

// ✅ Export all controller functions
export { addMood, getAllMoods, updateMood, deleteMood };



/*import Mood from "../models/Mood.js";

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

// Update Mood
const updateMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);

    if (!mood) {
      return res.status(404).json({ message: "Mood not found" });
    }

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

export { addMood, getAllMoods, updateMood, deleteMood };*/