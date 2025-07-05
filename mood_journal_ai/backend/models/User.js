const mongoose = require('mongoose');

// Define the User schema which defines the structure of the User document in MongoDB
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true},
    password: String,
});

// Create a User model based on the schema
module.exports = mongoose.model('User', UserSchema);