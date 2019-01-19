const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../constants/')
const mongoose = require('mongoose');
const  User = mongoose.model('User');

passport.use(new GoogleStrategy({
        clientID : keys.GoogleClientID,
        clientSecret : keys.GoogleClientSecret,
        callbackURL : '/auth/google/callback',
        proxy : true
    },
    async (accessToken, refreshToken, profile, done) =>{
        const existingUser = await User.findOne({googleId : profile.id});
        if(!existingUser){
            const newUser = new User({googleId: profile.id, image:[profile.photos[0].value], userName : profile.displayName}).save();
            done(null, profile);
        }else{
            done(null, profile);
        }
    }));

passport.serializeUser((user, done) =>{
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findOne({googleId:id}).then((user)=>{
        done(null, user);
    })
})