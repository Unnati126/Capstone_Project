import Mood from "../models/Mood.js";

// Controller to handle mood entry submissions
export const addMood = async (req, res) => {
  try {
    const newMood = new Mood({
      user: req.user.id,
      mood: req.body.mood,
      stressLevel: req.body.stressLevel,
      energyLevel: req.body.energyLevel,
      motivationLevel: req.body.motivationLevel,
      sleepQuality: req.body.sleepQuality,
      notes: req.body.notes,
    });

    await newMood.save();
    res.status(201).json({ msg: "Mood entry saved!" });
  } catch (err) {
    console.error("Error saving mood:", err);
    res.status(500).json({ msg: "Server error" });
  }
};