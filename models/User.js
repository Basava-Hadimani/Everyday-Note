const mongoose = require('mongoose');
const {Schema} = mongoose;

const User = new Schema({
    googleId : String,
    userName : String,
    image : String
})

mongoose.model('User', User);