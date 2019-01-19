const mongoose = require('mongoose');
const Notes = mongoose.model('Notes');
const userLogin = require('../middleware/userLogin')

module.exports =  (app) =>{
    app.post('/api/save', userLogin, async (req, res)=>{
        const {title, body} = req.body;
        const {googleId} = req.user;
        const note = await new Notes({googleId, title, body}).save();
        const notes = await Notes.find({googleId:googleId}).select({'_id' : 0, 'googleId' : 0});
        res.send(notes);
    })

    app.get('/api/getNotes', userLogin ,async (req, res) =>{
        const {googleId} = req.user;
        const notes = await Notes.find({googleId});
        res.send(notes);
    })

    app.post('/api/deleteNote', userLogin, async (req, res) =>{
        const note = await Notes.findOne({_id : req.body.id}).deleteOne();
        const notes = await Notes.find({googleId:req.user.googleId});
        res.send(notes);
    })

    app.put('/api/updatenote', async (req, res)=>{
        const {title, body} = req.body;
        const note = await Notes.findOneAndUpdate({_id : req.body.id}, {title, body});
        const notes = await Notes.find({googleId:req.user.googleId});
        res.send(notes);
    })
}