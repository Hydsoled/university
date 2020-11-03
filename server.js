const express = require('express')
const bodyParser = require('body-parser')
const {wit} = require('./app/middlewares/wit')
const app = express()
require('dotenv').config()

app.use(bodyParser.json())
app.post('/webhook', async (req, res) => {
    wit(req.body.entry[0].messaging[0])
    res.end('ok')
})
app.listen(3000, () => {
    console.log('server is running on port: ' + 3000)
})
