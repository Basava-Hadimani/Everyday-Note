const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./constants/');
require("./models/User");
require("./models/Notes");
require('./services/passport');


app.use(bodyParser.json());
app.use(cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys :  [keys.CookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.MongooseKey);

require('./routes/googleAuth')(app);
require('./routes/note')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
