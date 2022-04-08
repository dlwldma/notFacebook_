const express = require('express');
const mongoose = require("mongoose")
const app = express();
const Route = require('./Route/principal.js')

const DATABASE = "mongodb+srv://dlwldma:Colocolo000@cluster0.urtm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.use('/', Route)
app.listen('3000', ()=>{
    console.log("Servidor iniciado");
    mongoose.connect(DATABASE)
    .then(()=>{
        console.log("Servidor conectado a la DB");
    })
})