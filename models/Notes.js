const mongoose =  require('mongoose');
const {Schema} = mongoose;

const Notes = new Schema({
    googleId:String,
    title:String,
    body:String
})

mongoose.model('Notes', Notes);