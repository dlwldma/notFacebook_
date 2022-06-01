const express = require('express');
const Route = express.Router();
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const bodyparser = require('body-parser');

require('../Controlls/passportControlls.js')

Route.use(bodyparser.json());
Route.use(bodyparser.urlencoded({extended: true}));
Route.use(session({
    secret: "hooola amigos k tal chavales JOJOJO",
    path: '/',
    resave: false,
    saveUninitialized: false
}))
Route.use(passport.initialize());
Route.use(passport.session());

//GETTING LOGIN PAGE
Route.get('/', (req, res, next)=>{
    if(req.isAuthenticated()){
        res.redirect('/home')
    }else{
        return next();
    }
},(req, res)=>{
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


//USER LOGIN 
Route.post('/login', passport.authenticate('Login-Method', {
    successRedirect: '/home',
    failureRedirect: '/',
    passReqToCallback: true
})); 

//GETTING HOME PAGE
Route.get('/home', (req, res, next)=>{
    if(req.isAuthenticated()){
        console.log("Usuario esta autentificado")
        return next();
    }else{
        console.log("Usuario no esta autentificado")
        res.redirect('/')
    }
}, (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../../client/homepage/index.html' ))
})
Route.get('/home/style.css', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '../../client/homepage/style.css'))
})
Route.get('/public/facebook-logo.svg', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/facebook-logo.svg')
)})
Route.get('/public/profile-image.png', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/profile-image1.png'))
})
Route.get('/public/profile-image2.png', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/profile-image2.png'))
})
Route.get('/public/story2.png', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/story2.png'))
})
Route.get('/public/story3.jpg', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/story3.jpg'))
})
Route.get('/public/story4.png', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/story4.png'))
})
Route.get('/public/story5.png', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/story5.png'))
})
Route.get('/public/media-post-content.png', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/public/media-post-content.png'))
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

//USER LOGOUT 
Route.post('/logout', (req, res)=>{
    req.logout();
    res.redirect('/')
})




module.exports = Route;

