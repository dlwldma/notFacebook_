const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
    name: String,
    lastName: String,
    password: String,
    email: String,
})

const newUser = mongoose.model('User', User);

module.exports = newUser;