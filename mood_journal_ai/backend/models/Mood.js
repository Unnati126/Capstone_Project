import mongoose from "mongoose";

// Define the Mood schema which defines the structure of the Mood document in MongoDB
const moodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mood: { type: Number, required: true },
  stress: { type: Number, required: true },
  energy: { type: Number, required: true },
  motivation: { type: Number, required: true },
  sleep: { type: Number, required: true },
  note: { type: String },
}, { timestamps: true });

// Create a Mood model based on the schema
export default mongoose.model("Mood", moodSchema);