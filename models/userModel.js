const mongoose = require('mongoose');
// Configure the app - initial and require passport packages here
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  }
});

// summon passportLocalMongoose: adds functionality to simplify how passports builds username and passwords
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
module.exports = User;
