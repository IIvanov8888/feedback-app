const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for an instance of user 
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema); // new collection in MongoDB called users