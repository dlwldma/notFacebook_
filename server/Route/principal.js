const express = require('express');
const Route = express.Router();
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const bodyparser = require('body-parser');

require('../Controlls/passportControlls.js')

Route.use(bodyparser.json());
Route.use(bodyparser.urlencoded({extended: true}));
Route.use(passport.initialize());

//GETTING LOGIN PAGE
Route.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../../client/login/index.html'))
})
Route.get('/login/style.css', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/login/style.css'))
})
Route.get('/login/controlls.js', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/login/controlls.js'))
})
Route.get('/login/X-symbol.svg', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/login/X-symbol.svg'))
})

//USER SIGNIN
const signinApi = require('../Controlls/signinApi.js')
Route.post('/signin', (req, res)=>{
    const name = req.body.signinName;
    const lastName = req.body.signinLastName;
    const password = req.body.signinPass;
    const email = req.body.signinEmail; 
    signinApi(name, lastName, password, email, res);
});




module.exports = Route;