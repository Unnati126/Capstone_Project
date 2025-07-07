import mongoose from 'mongoose';

// Define the User schema which defines the structure of the User document in MongoDB
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);
export default User;
