const express = require('express');
const app = express();
const Route = require('./Route/principal.js')

app.use('/', Route)
app.listen('3000', ()=>{
    console.log("Servidor iniciado");
})