const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
    res.send('Hello Dima, I will tell you about our company!')
})

app.get('/prod', (req, res) => {
    res.send('Here aour products')
})

app.get('/', (req, res) => {
    res.send('Hello Dima!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
