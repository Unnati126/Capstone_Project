import mongoose from "mongoose";

// Define the Mood schema which defines the structure of the Mood document in MongoDB
const moodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  mood: Number,
  stressLevel: Number,
  energyLevel: Number,
  motivationLevel: Number,
  sleepQuality: Number,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mood model based on the schema
const Mood = mongoose.model("Mood", moodSchema);

// Export the Mood model for use in other parts of the application
export default Mood;