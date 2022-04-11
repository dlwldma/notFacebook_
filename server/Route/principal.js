const express = require('express');
const Route = express.Router();
const path = require('path')

/* const passport = require('../Controlls/passportControlls.js') */

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



module.exports = Route;