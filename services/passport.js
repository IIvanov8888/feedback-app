const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // one arg -> loads the collection of User

// MongoDB Model User
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Cookie Id
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id})
         // this user already exists !
         if(existingUser) {
            //
            return done(null, existingUser);
        }
            const user = await new User({googleId: profile.id}).save()
            done(null, user);
    })
);