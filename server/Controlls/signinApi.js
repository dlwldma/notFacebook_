const mongoose = require('mongoose');
const User = require('../Schema/UserCredentials.js');
const bodyparser = require('body-parser');

const signinApi = async (name, lastName, pass, email, res) => {
    const newUser = new User({
        name: name,
        lastName: lastName,
        password: pass,
        email: email,
    })
    await newUser.save();
    console.log('usuario creado con exito')
    res.redirect('/')
}

module.exports = signinApi;