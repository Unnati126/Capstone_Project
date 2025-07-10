import Mood from "../models/Mood.js";

export const createMood = async (req, res) => {
  try {
    const {
      mood,
      stressLevel,
      energyLevel,
      motivationLevel,
      sleepQuality,
      notes,
    } = req.body;

    const newMood = await Mood.create({
      mood,
      stressLevel,
      energyLevel,
      motivationLevel,
      sleepQuality,
      notes,
      user: req.user._id,
    });

    res.status(201).json(newMood);
  } catch (err) {
    console.error("Mood save failed:", err.message);
    res.status(500).json({ message: "Failed to save mood entry" });
  }
};


/*import Mood from "../models/Mood.js";

export const createMoodEntry = async (req, res) => {
  try {
    const { moodRating, stressLevel, energyLevel, motivationLevel, sleepQuality, reflection } = req.body;

    const newEntry = new Mood({
      user: req.user.id,
      moodRating,
      stressLevel,
      energyLevel,
      motivationLevel,
      sleepQuality,
      reflection,
    }); 

    await newEntry.save();
    res.status(201).json({ message: "Mood entry saved successfully", mood: newEntry });
  } catch (err) {
    console.error("Error saving mood entry:", err);
    res.status(500).json({ message: "Failed to save mood entry" });
  }
};*/