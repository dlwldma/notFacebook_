const mongoose = require("mongoose");
const User = new Schema({
    username: String,
    password: String
})

const newUser = mongoose.model('User', User);

module.exports = newUser;