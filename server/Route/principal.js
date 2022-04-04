const express = require('express');
const Route = express.Router();
const path = require('path')


//GETTING LOGIN PAGE
Route.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../../client/login/index.html'))
})
Route.get('/login/style.css', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../client/login/style.css'))
})



module.exports = Route;