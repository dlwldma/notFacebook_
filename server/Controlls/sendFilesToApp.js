const express = require('express');
const path = require('path')

const sendLoginPage = (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../../client/index.html'))
}

const functions = [
    sendLoginPage
]

module.exports = functions;