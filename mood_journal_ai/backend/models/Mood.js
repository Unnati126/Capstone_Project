import mongoose from 'mongoose';

// Define the Mood schema which defines the structure of the Mood document in MongoDB
const moodSchema = new mongoose.Schema({
  mood: Number,
  stressLevel: Number,
  energyLevel: Number,
  motivationLevel: Number,
  sleepQuality: Number,
  notes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

/*const MoodSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required:true, 
},
    moodRating: Number,
    stressLevel: Number,
    energyLevel: Number,
    motivationLevel: Number,
    sleepQuality: Number,
    reflection: String,
    date: {
        type: Date,
        default: Date.now,
    },
});*/

// Create a Mood model based on the schema
const Mood = mongoose.model("Mood", moodSchema);

export default Mood;