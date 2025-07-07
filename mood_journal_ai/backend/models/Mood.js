import mongoose from 'mongoose';

// Define the Mood schema which defines the structure of the Mood document in MongoDB
const MoodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  moodText: String,
  moodEmoji: String,
  sentiment: String,
  createdAt: { type: Date, default: Date.now }
});

// Create a Mood model based on the schema
const Mood = mongoose.model('Mood', MoodSchema);

export default Mood;