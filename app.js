const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
    res.send('Hello Dima, I will tell you about our company!')
})

app.get('/', (req, res) => {
    res.send('Hello Dima!')
})

module.exports = app;


