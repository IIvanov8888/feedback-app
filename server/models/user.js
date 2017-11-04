const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for an instance of user 
const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // new collection in MongoDB called users